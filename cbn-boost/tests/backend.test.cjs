'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const {createRequire} = require('node:module');
const {EventEmitter} = require('node:events');
const {PassThrough} = require('node:stream');
const {pathToFileURL} = require('node:url');
const {createRunner, psLiteral} = require('../main/platform.cjs');
const {createCleanupService} = require('../main/cleanup.cjs');
const {createSystemService, systemScript} = require('../main/system.cjs');
const {createAppsService, parseInstalledExport} = require('../main/apps.cjs');
const {trustedSender, allowedExternal} = require('../main/security.cjs');

test('Linux cannot spawn Windows commands and PowerShell literals preserve quoted input', () => {
  let called = false;
  const runner = createRunner({platform: 'linux', spawnProcess: () => {called = true;}});
  assert.throws(() => runner.run('powershell.exe', []), /Windows/);
  assert.equal(called, false);
  assert.equal(psLiteral("a'; Remove-Item C:\\ -Recurse; '"), "'a''; Remove-Item C:\\ -Recurse; '''");
  assert.throws(() => psLiteral('a\0b'));
});

test('process output handles split UTF8 and nonzero status never resolves', async () => {
  const spawnProcess = () => {
    const child = new EventEmitter();
    child.stdout = new PassThrough(); child.stderr = new PassThrough(); child.kill = () => {};
    process.nextTick(() => {
      const data = Buffer.from('não foi aplicado');
      child.stderr.write(data.subarray(0,2)); child.stderr.write(data.subarray(2));
      child.emit('close', 5);
    });
    return child;
  };
  const runner = createRunner({platform: 'win32', spawnProcess});
  await assert.rejects(runner.run('test.exe', []), error => error.exitCode === 5 && error.message === 'não foi aplicado');
});

test('GPU VRAM uses 64-bit DXGI dedicated memory instead of saturated WMI AdapterRAM', async () => {
  let executedScript = '';
  const expectedVram = 8 * 1024 ** 3;
  const system = createSystemService({runPowerShell:async script=>{
    executedScript = script;
    return {stdout:JSON.stringify({gpu_model:'NVIDIA GeForce RTX 5060',vram:expectedVram})};
  }});
  const info = await system.info();
  assert.equal(info.vram, expectedVram);
  assert.match(executedScript, /DedicatedVideoMemory/);
  assert.match(executedScript, /CbnBoost\.DxgiAdapterProbe/);
  assert.match(executedScript, /AdapterRAM[\s\S]*4294967295/);
  assert.doesNotMatch(executedScript, /vram=if\(\$GPU\.Count\)[\s\S]{0,80}AdapterRAM/);
  assert.match(systemScript, /UIntPtr DedicatedVideoMemory/);
});

test('cleanup executes only the exact catalog script and reports verified byte counts', async () => {
  const calls = [];
  const cleanup = createCleanupService({runPowerShell: async script => {calls.push(script); return {stdout: '2048'};}, confirm: async () => true});
  const {script} = cleanup.getScript('temp');
  await assert.rejects(cleanup.run({name:'cleanup-temp',script:script+'\nWrite-Output 999'}), /catálogo/);
  await assert.rejects(cleanup.run({name:'cleanup-../../x',script}), /catálogo/);
  assert.equal(calls.length, 0);
  assert.deepEqual(await cleanup.run({name:'cleanup-temp',script}), {success:true,output:'2048'});
  assert.equal(calls.length, 1);
});

test('cleanup cancellation and invalid output cannot report success', async () => {
  let count = 0;
  const cleanup = createCleanupService({runPowerShell: async () => {count++; return {stdout:'done'};},confirm:async()=>false});
  await assert.rejects(cleanup.run({name:'cleanup-recyclebin',script:cleanup.getScript('recyclebin').script}), /cancelada/);
  assert.equal(count,0);
  await assert.rejects(cleanup.run({name:'cleanup-temp',script:cleanup.getScript('temp').script}), /bytes/);
});

test('restore validates sequence against current Windows inventory and requires confirmation', async () => {
  const calls = [];
  const system = createSystemService({runPowerShell:async script=>{calls.push(script);return {stdout:JSON.stringify([{SequenceNumber:42,Description:'CBN Boost teste'}])};},confirm:async()=>false});
  await assert.rejects(system.restore('42;cmd'), /inválido/);
  assert.equal(calls.length,0);
  await assert.rejects(system.restore(43), /não encontrado/);
  await assert.rejects(system.restore(42), /cancelada/);
  assert.equal(calls.length,2);
});

test('deleting old CBN points preserves other products and three newest CBN points', async () => {
  const calls=[];
  const points=[1,2,3,4,5].map(n=>({SequenceNumber:n,Description:'CBN Boost teste'})).concat({SequenceNumber:6,Description:'Outro aplicativo'});
  let inventory=0;
  const system=createSystemService({confirm:async()=>true,runPowerShell:async script=>{
    calls.push(script);
    if(script.startsWith('ConvertTo-Json')) return {stdout:JSON.stringify(inventory++ ? points.filter(p=>p.SequenceNumber>2):points)};
    return {stdout:''};
  }});
  assert.deepEqual(await system.deleteRestorePoints({onlyOldCBN:true}),{success:true,deleted:2});
  assert.match(calls[1], /@\(2,1\)/);
  assert.doesNotMatch(calls[1], /vssadmin|@\(.*6/);
});

function appsFixture(t, initial=[]){
  const dataDir=fs.mkdtempSync(path.join(os.tmpdir(),'cbn-apps-test-'));
  t.after(()=>fs.rmSync(dataDir,{recursive:true,force:true}));
  const installed=new Set(initial),calls=[],events=[];
  let mutate=true,confirm=true;
  const run=async(exe,args)=>{
    calls.push(args);
    if(args[0]==='export'){
      fs.writeFileSync(args[args.indexOf('--output')+1],JSON.stringify({Sources:[{Packages:[...installed].map(id=>({PackageIdentifier:id}))}]}));
    }else if(mutate){
      const id=args[args.indexOf('--id')+1];
      if(args[0]==='install')installed.add(id);else installed.delete(id);
    }
    return {stdout:'',stderr:'',exitCode:0};
  };
  const service=createAppsService({dataDir,resourcesDir:path.join(__dirname,'../resources'),run,platform:'win32',confirm:async()=>confirm,emit:(...args)=>events.push(args)});
  return {service,calls,events,setMutate:x=>mutate=x,setConfirm:x=>confirm=x};
}
test('WinGet JSON inventory and catalog validation reject fabricated identifiers',async t=>{
  const f=appsFixture(t,['Mozilla.Firefox']);
  assert.throws(()=>parseInstalledExport('{}'),/inválido/);
  await assert.rejects(f.service.handle({action:'install',apps:['--override']}), /catálogo/);
  await assert.rejects(f.service.handle({action:'install',apps:['Not.InCatalog']}), /catálogo/);
  assert.equal(f.calls.length,0);
  const result=await f.service.handle({action:'check-installed',apps:['Mozilla.Firefox','Google.Chrome']});
  assert.deepEqual(result,{success:true,installed:['Mozilla.Firefox']});
});
test('WinGet installation verifies inventory before completed event, and removes only selected package',async t=>{
  const f=appsFixture(t);
  await f.service.handle({action:'install',apps:['Mozilla.Firefox']});
  assert.ok(f.events.some(([event])=>event==='install-complete'));
  assert.ok(f.calls.some(args=>args[0]==='install'&&args.includes('--exact')&&args.includes('--accept-package-agreements')));
  await f.service.handle({action:'uninstall',apps:['Mozilla.Firefox']});
  assert.equal(f.calls.filter(args=>args[0]==='uninstall').length,1);
});
test('WinGet no-op installer and cancellation never emit successful completion',async t=>{
  const f=appsFixture(t);
  f.setMutate(false);
  await assert.rejects(f.service.handle({action:'install',apps:['Mozilla.Firefox']}), /não confirmou/);
  assert.equal(f.events.some(([event])=>event==='install-complete'),false);
  assert.equal(f.events.at(-1)[0],'install-error');
  const count=f.calls.length;
  f.setConfirm(false);
  await assert.rejects(f.service.handle({action:'install',apps:['Google.Chrome']}), /cancelada/);
  assert.equal(f.calls.length,count);
});

test('IPC trusts only the current main frame and external links only exact HTTPS catalog URLs',()=>{
  const index=path.resolve('renderer/index.html'),frame={url:pathToFileURL(index).href+'#/tweaks'};
  const window={isDestroyed:()=>false,webContents:{mainFrame:frame}};
  assert.equal(trustedSender({sender:window.webContents,senderFrame:frame},window,index),true);
  assert.equal(trustedSender({sender:window.webContents,senderFrame:{url:frame.url}},window,index),false);
  frame.url='https://attacker.invalid/';
  assert.equal(trustedSender({sender:window.webContents,senderFrame:frame},window,index),false);
  const links=new Set(['https://www.mozilla.org/','file:///C:/Windows/system32/cmd.exe','https://user:pass@example.com/']);
  assert.equal(allowedExternal('https://www.mozilla.org/',links),true);
  assert.equal(allowedExternal('https://www.mozilla.org/?run=anything',links),false);
  assert.equal(allowedExternal('file:///C:/Windows/system32/cmd.exe',links),false);
  assert.equal(allowedExternal('https://user:pass@example.com/',links),false);
});

test('preload hides raw event and permits only known channels; listeners removed by identity',()=>{
  const ipc=new EventEmitter(),calls=[];
  ipc.invoke=(...args)=>{calls.push(args);return Promise.resolve({success:true});};
  ipc.send=(...args)=>calls.push(args);
  let exposed;
  vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../main/preload.cjs'),'utf8'),{require:()=>({ipcRenderer:ipc,contextBridge:{exposeInMainWorld:(_name,api)=>exposed=api}})});
  assert.throws(()=>exposed.ipcRenderer.invoke('auth:validate-token','key'),/não permitido/);
  assert.throws(()=>exposed.ipcRenderer.send('run-powershell'),/não permitido/);
  let received;
  const cb=(...args)=>received=args;
  exposed.ipcRenderer.on('install-progress',cb);
  ipc.emit('install-progress',{sender:'privileged'},'Firefox');
  assert.deepEqual(received,[null,'Firefox']);
  exposed.ipcRenderer.removeListener('install-progress',cb);
  assert.equal(ipc.listenerCount('install-progress'),0);
  exposed.shell.openExternal('https://www.mozilla.org/');
  assert.equal(calls.at(-1)[0],'open-external');
});

test('main rejects foreign frames and serializes mutations even after a failed operation',async t=>{
  const dataDir=fs.mkdtempSync(path.join(os.tmpdir(),'cbn-main-test-'));
  t.after(()=>fs.rmSync(dataDir,{recursive:true,force:true}));
  const filename=path.join(__dirname,'../main/index.cjs');
  const localRequire=createRequire(filename),handlers=new Map(),started=[];
  let window,release;
  const app=new EventEmitter();
  Object.assign(app,{setName:()=>{},setPath:()=>{},getPath:()=>dataDir,requestSingleInstanceLock:()=>true,
    whenReady:()=>Promise.resolve(),getVersion:()=> '1.0.0',quit:()=>{},isPackaged:true});
  class FakeWindow extends EventEmitter {
    constructor(options){
      super();window=this;this.options=options;this.webContents=new EventEmitter();
      Object.assign(this.webContents,{mainFrame:{url:''},send:()=>{},session:{clearCache:async()=>{}},setWindowOpenHandler:()=>{}});
    }
    isDestroyed(){return false;}
    async loadFile(file){this.webContents.mainFrame.url=pathToFileURL(file).href;}
    show(){}
  }
  const electron={app,BrowserWindow:FakeWindow,ipcMain:{handle:(name,handler)=>handlers.set(name,handler),on:()=>{}},
    dialog:{showMessageBox:async()=>({response:0}),showErrorBox:(_title,message)=>{throw new Error(message);}},
    shell:{openPath:async()=>'',openExternal:async()=>{}},Menu:{setApplicationMenu:()=>{}},
    session:{defaultSession:{setPermissionRequestHandler:()=>{},setPermissionCheckHandler:()=>{},webRequest:{onBeforeRequest:()=>{}}}}};
  const tweaks={list:()=>[],apply:async id=>{started.push(id);if(id==='first')await new Promise(resolve=>release=resolve);throw new Error('Falha simulada');},unapply:async()=>{},checkAll:async()=>[]};
  vm.runInNewContext(fs.readFileSync(filename,'utf8'),{__dirname:path.dirname(filename),process,
    require:name=>name==='electron'?electron:name==='./tweaks.cjs'?{createTweaksService:()=>tweaks}:localRequire(name)});
  await new Promise(resolve=>setImmediate(resolve));
  assert.equal(window.options.webPreferences.sandbox,true);
  const event={sender:window.webContents,senderFrame:window.webContents.mainFrame};
  await assert.rejects(handlers.get('tweak:apply')({...event,senderFrame:{url:event.senderFrame.url}},'foreign'),/Origem/);
  const first=handlers.get('tweak:apply')(event,'first');
  const firstRejected=assert.rejects(first,/Falha simulada/);
  const second=handlers.get('tweak:apply')(event,'second');
  const secondRejected=assert.rejects(second,/Falha simulada/);
  await new Promise(resolve=>setImmediate(resolve));
  assert.deepEqual(started,['first']);
  let prevented=false;
  window.emit('close',{preventDefault:()=>prevented=true});
  assert.equal(prevented,true,'must keep the process alive during verification/rollback');
  release();
  await Promise.all([firstRejected,secondRejected]);
  assert.deepEqual(started,['first','second']);
  assert.equal(handlers.has('auth:validate-token'),false);
});
