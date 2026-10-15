'use strict';
// Integration smoke test of the recovered UI with a mock IPC bridge. No Windows commands execute.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const {createTweaksService}=require('../cbn-boost/main/tweaks.cjs');
const {createFeatureHandlers}=require('../cbn-boost/main/features.cjs');
const {pathToFileURL} = require('node:url');
const root = path.resolve(__dirname, '..');
function resolvePlaywright() {
  try { return require('playwright-core'); } catch {}
  const cache = path.join(process.env.HOME || '', '.npm', '_npx');
  if (fs.existsSync(cache)) for (const name of fs.readdirSync(cache)) {
    const candidate = path.join(cache,name,'node_modules','playwright-core');
    if(fs.existsSync(candidate))return require(candidate);
  }
  throw new Error('Install playwright-core to run UI tests.');
}
function resolveChrome(){
  const candidates=[process.env.CBN_TEST_CHROME,'/usr/bin/google-chrome','/usr/bin/chromium'];
  const cache=path.join(process.env.HOME||'','.cache','ms-playwright');
  if(fs.existsSync(cache))for(const item of fs.readdirSync(cache))candidates.push(path.join(cache,item,'chrome-linux64','chrome'));
  const executable=candidates.find(item=>item&&fs.existsSync(item));
  if(!executable)throw new Error('Set CBN_TEST_CHROME to a Chromium executable.');
  return executable;
}
(async()=>{
  const snapshotDir=fs.mkdtempSync(path.join(os.tmpdir(),'cbn-renderer-'));
  const resourcesDir=path.join(root,'cbn-boost','resources');
  const neverNative=async()=>{throw new Error('UI test must not execute Windows scripts or operations')};
  let catalog;
  try {
    const handlers=createFeatureHandlers({dataDir:snapshotDir,resourcesDir,runPowerShell:neverNative,run:neverNative,
      confirm:neverNative,openSettings:neverNative,selectPackages:neverNative,platform:'win32'});
    catalog=createTweaksService({dataDir:snapshotDir,resourcesDir,runPowerShell:neverNative,handlers}).list();
  } finally {fs.rmSync(snapshotDir,{recursive:true,force:true})}
  const counts={total:catalog.length,available:catalog.filter(item=>item.available).length,
    reversible:catalog.filter(item=>item.available&&item.reversible).length,
    actions:catalog.filter(item=>item.available&&item.mode==='action').length,
    obsolete:catalog.filter(item=>item.obsolete).length};
  assert.deepEqual(counts,{total:29,available:28,reversible:22,actions:6,obsolete:1});
  console.log(`Real catalog: ${counts.total} tweaks, ${counts.available} available, ${counts.reversible} reversible, ${counts.actions} actions`);
  const {chromium}=resolvePlaywright();
  const browser=await chromium.launch({executablePath:resolveChrome(),headless:true,args:['--no-sandbox','--allow-file-access-from-files']});
  try{
    const context=await browser.newContext({viewport:{width:1360,height:900},locale:'pt-BR'});
    const page=await context.newPage();
    page.setDefaultTimeout(8000);
    const errors=[],external=[];
    page.on('console',message=>console.log('UI console:',message.type(),message.text()));
    page.on('pageerror',error=>{errors.push(error.message);console.error('UI page error:',error.stack)});
    page.on('request',request=>{if(/^https?:/.test(request.url()))external.push(request.url())});
    const bridge=({catalog,firstRun})=>{
      if(firstRun)localStorage.clear();
      else {localStorage.setItem('firstTime','false');localStorage.setItem('cbnboost:language','pt');}
      const listeners=new Map(),state={},snapshots={},calls=[];
      window.__cbnTest={calls,state,snapshots,failNvidia:false};
      const emit=(event,payload)=>{for(const callback of listeners.get(event)||[])callback(null,payload)};
      window.electron={shell:{openExternal:async url=>{calls.push({channel:'open-external',payload:url});return{success:true}}},ipcRenderer:{
        invoke:async(channel,payload)=>{
          calls.push({channel,payload});
          switch(channel){
            case 'get-user-name':return 'CBN';
            case 'get-system-info':return {cpu_model:'AMD Ryzen 7',cpu_cores:8,gpu_model:'NVIDIA RTX 4070',vram:12*1024**3,memory_total:32*1024**3,memory_type:'DDR5',disk_model:'NVMe SSD',disk_size:1024**4,os:'Windows 11',os_version:'24H2',windowsBuild:26100,windowsEdition:'Professional',hasGPU:true,isNvidia:true};
            case 'tweaks:fetch':return [...catalog.map(item=>({...item,name:item.id,canRestore:!!snapshots[item.id],appliedByApp:!!state[item.id]})),...(window.__cbnTest.injectTweaks?[
              {name:'local-ok',title:'Ajuste local',description:'Ajuste reversível para teste',category:['Performance'],reversible:true,available:true,canRestore:!!snapshots['local-ok'],appliedByApp:!!state['local-ok'],restart:true},
              {name:'local-fail',title:'Ajuste com falha',description:'Falha simulada para validar restauração do estado',category:['Performance'],reversible:true,available:true,canRestore:false,appliedByApp:false},
              {name:'local-action',title:'Ação local',description:'Ação repetível que abre as configurações',category:['General'],reversible:false,mode:'action',localImplementation:true,available:true,canRestore:false,appliedByApp:false},
              {name:'remote-only',title:'Ajuste indisponível',description:'Operação sem implementação local',category:['GPU'],reversible:true,available:false,reason:'Script original não incluído no instalador',canRestore:false,appliedByApp:false}
            ]:[])];
            case 'tweak:active':return Object.keys(state).filter(key=>state[key]);
            case 'tweak-states:load':return JSON.stringify(Object.fromEntries(Object.keys(snapshots).map(id=>[id,true])));
            case 'tweak-states:save':return {success:true};
            case 'tweak:apply':
              if(payload==='local-fail')return {success:false,error:'Falha simulada: acesso negado'};
              if(payload==='remote-only')throw new Error('Indisponível');
              if(payload==='optimize-nvidia-settings'&&window.__cbnTest.failNvidia)return {success:false,error:'GPU ou driver NVIDIA compatível não está disponível neste computador.'};
              if(payload==='local-action'||catalog.find(item=>item.id===payload)?.mode==='action')return {success:true,verified:true,opened:true,summary:'Configurações abertas'};
              snapshots[payload]={captured:'mock'};state[payload]=true;return {success:true,verified:true};
            case 'tweak:unapply':state[payload]=false;delete snapshots[payload];return {success:true,verified:true};
            case 'cleanup:fetch-script':return {success:true,script:`mock:${payload}`};
            case 'run-powershell':assertPayload(payload);return {success:true,output:'4096'};
            case 'get-restore-points':return{success:true,points:[{Description:'CBN Boost - antes dos ajustes',CreationTime:'2026-10-14T12:00:00Z',SequenceNumber:7}]};
            case 'create-cbnboost-restore-point':case 'create-restore-point':throw new Error('Falha simulada: proteção do sistema desativada');
            case 'handle-apps':
              if(payload.action==='check-installed')setTimeout(()=>emit('installed-apps-checked',{success:true,installed:['Mozilla.Firefox']}),10);
              else {setTimeout(()=>{emit('install-progress','Pacote verificado');emit('install-complete')},30)}
              return {success:true};
            case 'clear-cbnboost-cache':case 'open-log-folder':case 'restart':return {success:true};
            default:throw new Error(`Canal inesperado: ${channel}`);
          }
        },
        send:(channel,payload)=>calls.push({channel,payload}),
        on:(event,callback)=>{if(!listeners.has(event))listeners.set(event,new Set());listeners.get(event).add(callback)},
        removeListener:(event,callback)=>listeners.get(event)?.delete(callback)
      }};
      function assertPayload(payload){if(payload.script!==`mock:${payload.name.slice(8)}`)throw new Error('Script de limpeza alterado')}
    };
    await page.addInitScript(bridge,{catalog,firstRun:false});
    console.log('Opening recovered renderer');
    await page.goto(pathToFileURL(path.join(root,'cbn-boost','renderer','index.html')).href);
    console.log('Renderer loaded; waiting for system data');
    await page.getByText('AMD Ryzen 7',{exact:true}).waitFor();
    assert.equal(await page.title(),'CBN Boost');
    assert.equal(await page.locator('input[type="password"]').count(),0);
    assert.equal(await page.getByText('12.00 GB',{exact:true}).count(),1);
    assert.equal(await page.getByText('1.00 TB',{exact:true}).count(),1);
    assert.equal(await page.getByText('28',{exact:true}).count(),1);
    await page.waitForTimeout(500);
    await page.screenshot({path:path.join(root,'docs','cbn-boost-dashboard.png'),fullPage:true});
    await page.evaluate(()=>window.__cbnTest.injectTweaks=true);
    // Recoverable tweaks have controls; unavailable tweaks explain the missing implementation.
    await page.getByRole('button',{name:'Otimizações',exact:true}).click();
    await page.getByText('Script original não incluído no instalador',{exact:true}).waitFor();
    const unavailable=page.locator('div.group').filter({has:page.getByRole('heading',{name:'Ajuste indisponível',exact:true})}).last();
    assert.equal(await unavailable.locator('input[type="checkbox"]').count(),0);
    const okCard=page.locator('div.group').filter({has:page.getByRole('heading',{name:'Ajuste local',exact:true})}).last();
    const failCard=page.locator('div.group').filter({has:page.getByRole('heading',{name:'Ajuste com falha',exact:true})}).last();
    await okCard.locator('label').click();
    await page.waitForFunction(()=>window.__cbnTest.state['local-ok']===true);
    await okCard.locator('label').click();
    await page.waitForFunction(()=>window.__cbnTest.state['local-ok']===false);
    await failCard.locator('label').click();
    await page.getByText('Ajuste com falha: Falha simulada: acesso negado',{exact:true}).waitFor();
    assert.equal(await failCard.locator('input').isChecked(),false);
    // Actions report what opened and remain repeatable without active flags or backups.
    const actionCard=page.locator('div.group').filter({has:page.getByRole('heading',{name:'Ação local',exact:true})}).last();
    assert.equal(await actionCard.locator('input[type="checkbox"]').count(),0);
    await actionCard.getByRole('button',{name:'Executar',exact:true}).click();
    await page.getByText('Configurações abertas',{exact:true}).waitFor();
    await actionCard.getByRole('button',{name:'Executar',exact:true}).waitFor({state:'visible'});
    assert.equal(await actionCard.getByText('Ativo',{exact:true}).count(),0);
    assert.deepEqual(await page.evaluate(()=>({active:!!window.__cbnTest.state['local-action'],snapshot:!!window.__cbnTest.snapshots['local-action']})),{active:false,snapshot:false});
    await actionCard.getByRole('button',{name:'Executar',exact:true}).click();
    await page.waitForFunction(()=>window.__cbnTest.calls.filter(call=>call.channel==='tweak:apply'&&call.payload==='local-action').length===2);
    await page.waitForFunction(()=>!document.querySelector('button[disabled]'));
    assert.equal(await actionCard.getByText('Ativo',{exact:true}).count(),0);
    assert.deepEqual(await page.evaluate(()=>({active:!!window.__cbnTest.state['local-action'],snapshot:!!window.__cbnTest.snapshots['local-action']})),{active:false,snapshot:false});
    // Reconstructed NVIDIA metadata replaces the recovered claim of many settings.
    const nvidia=catalog.find(item=>item.id==='optimize-nvidia-settings');
    const nvidiaCard=page.locator('div.group').filter({has:page.getByRole('heading',{name:nvidia.title,exact:true})}).last();
    await nvidiaCard.getByText(nvidia.description,{exact:true}).waitFor();
    await nvidiaCard.getByText(nvidia.localDetails,{exact:true}).waitFor();
    await nvidiaCard.locator('div[class*="bg-red-500/20"]').hover();
    await page.getByText(nvidia.warning,{exact:true}).waitFor();
    await nvidiaCard.getByRole('heading',{name:nvidia.title,exact:true}).hover();
    assert.equal(await nvidiaCard.locator('input[type="checkbox"]').count(),1);
    assert.equal(await nvidiaCard.locator('input[type="checkbox"]').isChecked(),false);
    await nvidiaCard.locator('label').click();
    await page.waitForFunction(()=>window.__cbnTest.state['optimize-nvidia-settings']===true);
    await page.waitForFunction(()=>document.querySelectorAll('button[disabled]').length===0);
    assert.equal(await nvidiaCard.locator('input[type="checkbox"]').isChecked(),true);
    assert.equal(await page.getByRole('dialog').count(),0,'Researched NVIDIA tweak should bypass original modal');
    await nvidiaCard.locator('label').click();
    await page.waitForFunction(()=>window.__cbnTest.state['optimize-nvidia-settings']===false);
    await page.waitForFunction(()=>document.querySelectorAll('button[disabled]').length===0);
    assert.equal(await nvidiaCard.locator('input[type="checkbox"]').isChecked(),false);
    assert.equal(await page.evaluate(()=>!!window.__cbnTest.snapshots['optimize-nvidia-settings']),false);
    const hagsCard=page.locator('div.group').filter({has:page.getByRole('heading',{name:'Ativar HAGS',exact:true})}).last();
    assert.equal(await hagsCard.locator('input[type="checkbox"]').count(),1);
    await hagsCard.locator('label').click();
    await page.waitForFunction(()=>window.__cbnTest.state['enable-hags']===true);
    await page.waitForFunction(()=>document.querySelectorAll('button[disabled]').length===0);
    await hagsCard.locator('label').click();
    await page.waitForFunction(()=>window.__cbnTest.state['enable-hags']===false);
    assert.equal(await page.evaluate(()=>!!window.__cbnTest.snapshots['enable-hags']),false);
    await page.evaluate(()=>window.__cbnTest.failNvidia=true);
    await nvidiaCard.locator('label').click();
    assert.equal(await page.evaluate(()=>window.__cbnTest.calls.filter(call=>call.channel==='tweak:apply'&&call.payload==='optimize-nvidia-settings').length),2);
    assert.equal(await nvidiaCard.locator('input[type="checkbox"]').isChecked(),false);
    assert.deepEqual(await page.evaluate(()=>({active:!!window.__cbnTest.state['optimize-nvidia-settings'],snapshot:!!window.__cbnTest.snapshots['optimize-nvidia-settings']})),{active:false,snapshot:false});
    await page.evaluate(()=>window.__cbnTest.failNvidia=false);
    // Real action cards distinguish opening settings from running a package operation.
    const graphics=catalog.find(item=>item.id==='enable-optimization-for-windowed-games');
    const graphicsCard=page.locator('div.group').filter({has:page.getByRole('heading',{name:graphics.title,exact:true})}).last();
    assert.equal(await graphicsCard.getByRole('button',{name:'Abrir',exact:true}).count(),1);
    const packageAction=catalog.find(item=>item.id==='debloat-windows');
    const packageCard=page.locator('div.group').filter({has:page.getByRole('heading',{name:packageAction.title,exact:true})}).last();
    assert.equal(await packageCard.getByRole('button',{name:'Executar',exact:true}).count(),1);
    // All recovered pages render against the same bridge without auth/server requests.
    await page.getByRole('button',{name:'Apps',exact:true}).click();
    await page.getByRole('heading',{name:'Firefox',exact:true}).waitFor();
    assert.equal(await page.locator('img[src^="https:"]').count(),0);
    await page.getByRole('button',{name:'Restauração',exact:true}).click();
    await page.getByRole('heading',{name:'CBN Boost - antes dos ajustes',exact:true}).waitFor();
    assert.equal(await page.getByText('Invalid Date',{exact:false}).count(),0);
    await page.getByRole('button',{name:'Criar Rápido',exact:true}).click();
    assert(await page.evaluate(()=>window.__cbnTest.calls.some(call=>call.channel==='create-cbnboost-restore-point')));
    await page.getByRole('button',{name:'Limpeza',exact:true}).click();
    await page.getByRole('heading',{name:'Limpeza do Sistema',exact:true}).waitFor();
    await page.getByText('Limpar Arquivos Temporários',{exact:true}).locator('..').locator('..').locator('label').click();
    await page.getByRole('button',{name:'Limpar Selecionados',exact:true}).click();
    await page.waitForFunction(()=>window.__cbnTest.calls.some(call=>call.channel==='run-powershell'&&call.payload.name==='cleanup-temp'));
    await page.getByText(/Limpar Arquivos Temporários.*4.00 KB/).waitFor();
    await page.getByRole('button',{name:'Configurações',exact:true}).click();
    await page.getByRole('heading',{name:'Configurações',exact:true}).waitFor();
    await page.getByRole('button',{name:'Limpar cache',exact:true}).click();
    await page.getByRole('status').filter({hasText:'Cache limpo.'}).waitFor();
    await page.evaluate(()=>window.__cbnTest.injectTweaks=false);
    await page.getByRole('button',{name:'Otimizações',exact:true}).click();
    await page.getByRole('heading',{name:'Ativar Modo de Jogo',exact:true}).waitFor();
    const finalCards=page.locator('div.group');
    assert.equal(await finalCards.filter({has:page.getByRole('heading',{name:'Ação local',exact:true})}).count(),0);
    const obsolete=finalCards.filter({has:page.getByRole('heading',{name:'Desativar Wifi Sense',exact:true})}).last();
    await obsolete.getByText('Obsoleto',{exact:true}).waitFor();
    assert.equal(await obsolete.locator('input[type="checkbox"]').count(),0);
    await page.waitForTimeout(600);
    await page.screenshot({path:path.join(root,'docs','cbn-boost-tweaks.png'),fullPage:true});
    const calls=await page.evaluate(()=>window.__cbnTest.calls);
    assert(!calls.some(call=>/auth|updater|discord-rpc/.test(call.channel)));
    assert(!calls.some(call=>call.channel==='tweak:apply'&&call.payload==='remote-only'));
    assert.deepEqual(external,[],'Renderer attempted remote resources');
    assert.deepEqual(errors,[],'Renderer JavaScript errors');
    const initialPage=await context.newPage();
    const firstRunErrors=[];
    initialPage.on('pageerror',error=>firstRunErrors.push(error.message));
    await initialPage.addInitScript(bridge,{catalog,firstRun:true});
    await initialPage.goto(pathToFileURL(path.join(root,'cbn-boost','renderer','index.html')).href);
    await initialPage.getByRole('heading',{name:'Bem-vindo ao CBN Boost',exact:true}).waitFor();
    assert.equal(await initialPage.locator('input[type="password"]').count(),0);
    assert.equal(await initialPage.getByText('Sempre use nosso site:',{exact:false}).count(),0);
    await initialPage.getByRole('button',{name:'Não (Não Recomendado)',exact:true}).click();
    await initialPage.waitForFunction(()=>localStorage.getItem('firstTime')==='false');
    assert(!await initialPage.evaluate(()=>window.__cbnTest.calls.some(call=>/auth|updater|^run-powershell$|^tweak:apply$|^create-/.test(call.channel))));
    // Reload with empty storage to exercise the explicit optional restore action and its error.
    await initialPage.reload();
    await initialPage.getByRole('heading',{name:'Bem-vindo ao CBN Boost',exact:true}).waitFor();
    await initialPage.getByRole('button',{name:'Sim (Recomendado)',exact:true}).click();
    assert(await initialPage.evaluate(()=>window.__cbnTest.calls.some(call=>call.channel==='create-cbnboost-restore-point')));
    assert(!await initialPage.evaluate(()=>window.__cbnTest.calls.some(call=>/auth|updater|^run-powershell$|^tweak:apply$/.test(call.channel))));
    assert.deepEqual(firstRunErrors,[],'First-run JavaScript errors');
    await initialPage.close();
    const sha256=file=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex');
    const report={success:true,authority:'controlled-replay',evidence_id:null,artifact:'cbn-boost/renderer/index.html',
      environment:'Linux headless Chromium; Electron IPC bridge mocked; no Windows commands executed',
      catalog:counts,pages:['dashboard','tweaks','apps','restore-points','cleanup','settings'],
      checks:[
        'Dashboard loads without key or authentication',
        'VRAM 12.00 GB and disk 1.00 TB from numeric bytes',
        '29 catalog entries: 28 available, 22 reversible, 6 actions, 1 obsolete',
        'Apply then restore reload authoritative saved state',
        'Failed tweak rejects and rolls back optimistic toggle',
        'Unavailable and obsolete tweaks have a reason and no action control',
        'Actions show returned summary, remain inactive, create no backup, and are repeatable',
        'Action buttons distinguish Abrir from Executar',
        'NVIDIA description, limited settings and consumption/quality warning use local metadata',
        'NVIDIA and HAGS have reversible toggles and preserve restore state',
        'Missing NVIDIA driver error is visible and leaves no active flag or snapshot',
        'Researched NVIDIA tweak bypasses the recovered original modal',
        'Apps use local initials; no remote images',
        'Restore ISO dates render and backend errors are visible',
        'Cleanup sends exact fetched script/name and displays verified numeric bytes',
        'Settings cache operation completes',
        'No auth/updater/Discord IPC calls or external renderer requests',
        'No uncaught page errors',
        'First run with empty storage shows correct CBN Boost welcome and no vendor site link',
        'Dismiss first-run optional restore prompt performs no Windows operation',
        'First-run explicit restore creation surfaces backend failure and requires no key',
      ],screenshots:['docs/cbn-boost-dashboard.png','docs/cbn-boost-tweaks.png'],
      limitations:['Original compiled React bundle was recovered; original JSX/TypeScript and source maps were not present',
        'Windows runtime, native NVAPI and system operations require Windows validation'],
      ipcCalls:calls.length,externalRequests:external.length,pageErrors:errors.length,firstRunScenarios:2,
      rendererSha256:sha256('cbn-boost/renderer/assets/app.js'),
      sourceHashes:{'scripts/test-renderer.cjs':sha256('scripts/test-renderer.cjs'),'cbn-boost/renderer/index.html':sha256('cbn-boost/renderer/index.html'),
        'cbn-boost/renderer/assets/app.js':sha256('cbn-boost/renderer/assets/app.js'),'cbn-boost/renderer/assets/app.css':sha256('cbn-boost/renderer/assets/app.css')},
    };
    fs.writeFileSync(path.join(root,'docs','renderer-test-report.json'),JSON.stringify(report,null,2)+'\n');
    console.log(JSON.stringify({success:true,pages:6,catalog:counts,firstRunScenarios:2,ipcCalls:calls.length,externalRequests:external.length,screenshots:report.screenshots},null,2));
  }finally{await browser.close()}
})().catch(error=>{console.error(error);process.exitCode=1});
