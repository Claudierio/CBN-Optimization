'use strict';
const {psLiteral, assertWindows} = require('./platform.cjs');
const SERVICES = Object.freeze({MapsBroker: 'Gerenciador de mapas baixados', Fax: 'Fax', RetailDemo: 'Demonstração de loja'});
const ownObject = value => value && typeof value === 'object' && !Array.isArray(value);
const NO_CHANGES = '[CBN_NO_CHANGES]';
function unchanged(error) {
  const result=error instanceof Error?error:new Error(String(error));
  result.noChanges=true;
  return result;
}
function windowsError(error) {
  if(typeof error?.message==='string'&&error.message.includes(NO_CHANGES))return unchanged(new Error(error.message.replaceAll(NO_CHANGES,'')));
  return error;
}

function createPlatformFeatures({runPowerShell, confirm, selectPackages, openSettings, platform = process.platform}) {
  async function execute(script) {
    assertWindows(platform);
    if (typeof script !== 'string' || script.length > 11000) throw new Error('Script inválido ou muito grande. Nenhuma alteração foi iniciada.');
    let result;
    try {result=await runPowerShell(script);} catch(error) {throw windowsError(error);}
    if (!ownObject(result) || result.exitCode !== 0) throw windowsError(new Error(result?.stderr || 'O Windows recusou a operação.'));
    if (typeof result.stdout !== 'string') throw new Error('O Windows retornou uma resposta incompleta.');
    try { return JSON.parse(result.stdout.replace(/^\uFEFF/, '')); }
    catch { throw new Error('O Windows retornou uma resposta incompleta.'); }
  }
  const rssCapture = "$s=Get-NetOffloadGlobalSetting -ErrorAction Stop; @{rss=$s.ReceiveSideScaling.ToString()} | ConvertTo-Json -Compress";
  const network = {
    metadata: {mode:'reversible', requiresAdmin:true, restart:false, title:'Ativar processamento RSS da rede',
      description:'Ativa Receive Side Scaling global para distribuir o processamento de rede entre núcleos da CPU.',
      localDetails:'Mantém MTU, DNS, parâmetros TCP e adaptadores. O efeito depende do suporte do driver e da placa.'},
    validate(snapshot) { if (!ownObject(snapshot) || !['Enabled','Disabled'].includes(snapshot.rss)) throw new Error('Cópia de rede inválida.'); },
    async capture() { const snapshot=await execute(rssCapture); network.validate(snapshot); return snapshot; },
    async apply(snapshot) {
      network.validate(snapshot);
      const result=await execute(String.raw`
try {
  $before=Get-NetOffloadGlobalSetting -ErrorAction Stop
  if($before.ReceiveSideScaling.ToString() -ne ${psLiteral(snapshot.rss)}){throw 'A configuração de RSS mudou desde a captura. Nenhuma alteração foi iniciada.'}
} catch {throw ('${NO_CHANGES}'+$_.Exception.Message)}
Set-NetOffloadGlobalSetting -ReceiveSideScaling Enabled -ErrorAction Stop
$s=Get-NetOffloadGlobalSetting -ErrorAction Stop
if($s.ReceiveSideScaling.ToString() -ne 'Enabled'){throw 'RSS não foi ativado'}
@{confirmed=$true;rss=$s.ReceiveSideScaling.ToString()} | ConvertTo-Json -Compress
`);
      if(!ownObject(result)||result.confirmed!==true||result.rss!=='Enabled')throw new Error('A ativação de RSS não foi confirmada.');
      return {success:true,verified:true,summary:'RSS global ativado e verificado. O suporte do adaptador determina o efeito.'};
    },
    async restore(snapshot) {
      network.validate(snapshot);
      const state=await execute(`Set-NetOffloadGlobalSetting -ReceiveSideScaling ${snapshot.rss} -ErrorAction Stop; ${rssCapture}`);
      network.validate(state);
      if(state.rss!==snapshot.rss)throw new Error('A configuração anterior de RSS não foi restaurada.');
      return {success:true,verified:true};
    },
    async check() { return {supported:true,applied:(await network.capture()).rss==='Enabled'}; },
  };
  const defenderQuery = String.raw`
function Read-CBNDefender {
$p=Get-MpPreference -ErrorAction Stop
$s=Get-MpComputerStatus -ErrorAction Stop
if($s.AMRunningMode -ne 'Normal' -or !$s.AMServiceEnabled){throw 'O Microsoft Defender não está ativo no modo normal neste computador.'}
if($null -eq $p.DisableRealtimeMonitoring -or $null -eq $s.RealTimeProtectionEnabled -or $null -eq $s.IsTamperProtected){throw 'Não foi possível determinar o estado do Microsoft Defender com segurança.'}
return [pscustomobject]@{disabled=[bool]$p.DisableRealtimeMonitoring; realtime=[bool]$s.RealTimeProtectionEnabled; tamper=[bool]$s.IsTamperProtected}
}
`;
  const defenderRead = `${defenderQuery}\nRead-CBNDefender | ConvertTo-Json -Compress`;
  const defender = {
    metadata: {mode:'reversible',requiresAdmin:true,restart:false,title:'Pausar proteção em tempo real do Defender',
      description:'Solicita a pausa da proteção em tempo real pelo comando oficial. O Windows pode reativá-la automaticamente.',
      warning:'Reduz a proteção do computador enquanto estiver pausada. A proteção contra adulteração e as políticas da organização são respeitadas.',
      localDetails:'Requer Defender ativo e permite restauração. Não altera Tamper Protection, exclusões ou políticas de segurança.'},
    validate(snapshot) { if(!ownObject(snapshot)||typeof snapshot.disabled!=='boolean'||typeof snapshot.realtime!=='boolean'||typeof snapshot.tamper!=='boolean')throw new Error('Cópia do Defender inválida.'); },
    async capture() {
      const snapshot=await execute(defenderRead);defender.validate(snapshot);
      if(snapshot.tamper)throw new Error('A proteção contra adulteração do Windows impede esta alteração. Nenhuma configuração foi modificada.');
      if(snapshot.disabled===snapshot.realtime)throw new Error('Estado de proteção inconsistente; a configuração não será alterada.');
      if(!await confirm('Pausar proteção em tempo real?', 'O computador ficará com proteção reduzida. O Windows pode reativar a proteção automaticamente. Continuar?'))throw new Error('Operação cancelada.');
      return snapshot;
    },
    async apply(snapshot) {
      defender.validate(snapshot);
      const result=await execute(String.raw`${defenderQuery}
try {
  $before=Read-CBNDefender
  if($before.tamper){throw 'A proteção contra adulteração bloqueou a solicitação.'}
  if($before.disabled -ne $${snapshot.disabled?'true':'false'} -or $before.realtime -ne $${snapshot.realtime?'true':'false'}){throw 'O estado do Defender mudou desde a confirmação. Tente novamente após conferir as Configurações.'}
} catch {throw ('${NO_CHANGES}'+$_.Exception.Message)}
Set-MpPreference -DisableRealtimeMonitoring $true -ErrorAction Stop
$verified=$false
for($i=0;$i -lt 20;$i++){
  $current=Read-CBNDefender
  if($current.disabled -and !$current.realtime){$verified=$true;break}
  Start-Sleep -Milliseconds 250
}
if(!$verified){throw 'O Windows não confirmou a pausa da proteção em tempo real.'}
@{confirmed=$true;disabled=$current.disabled;realtime=$current.realtime;tamper=$current.tamper} | ConvertTo-Json -Compress
`);
      defender.validate(result);
      if(result.confirmed!==true||!result.disabled||result.realtime||result.tamper)throw new Error('Pausa não confirmada.');
      return {success:true,verified:true,summary:'Proteção em tempo real pausada e verificada. O Windows pode reativá-la automaticamente.'};
    },
    async restore(snapshot) {
      defender.validate(snapshot);
      const state=await execute(String.raw`${defenderQuery}
$before=Read-CBNDefender
if($before.tamper -and $${snapshot.disabled?'true':'false'}){throw 'A proteção contra adulteração bloqueou a restauração da preferência anterior.'}
Set-MpPreference -DisableRealtimeMonitoring $${snapshot.disabled?'true':'false'} -ErrorAction Stop
$verified=$false
for($i=0;$i -lt 40;$i++){
  $current=Read-CBNDefender
  if($current.disabled -eq $${snapshot.disabled?'true':'false'} -and $current.realtime -eq $${snapshot.realtime?'true':'false'}){$verified=$true;break}
  Start-Sleep -Milliseconds 250
}
if(!$verified){throw 'O Windows não confirmou o estado anterior do Defender.'}
$current | ConvertTo-Json -Compress
`);
      defender.validate(state);
      if(state.disabled!==snapshot.disabled||state.realtime!==snapshot.realtime)throw new Error('O Windows não confirmou o estado anterior do Defender.');
      return {success:true,verified:true};
    },
    async check() {
      const state=await execute(defenderRead);defender.validate(state);
      return {supported:!state.tamper,applied:state.disabled&&!state.realtime,
        ...(state.tamper?{reason:'A proteção contra adulteração está ativa.'}:{})};
    },
  };
  async function readServices(ids, required = false) {
    if(!Array.isArray(ids)||!ids.length||ids.length>3||new Set(ids).size!==ids.length||ids.some(id=>!Object.hasOwn(SERVICES,id)))throw new Error('Inventário de serviços inválido.');
    const encoded=Buffer.from(JSON.stringify(ids),'utf8').toString('base64');
    const list=await execute(String.raw`
$ids=@([Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('${encoded}')) | ConvertFrom-Json)
$items=@(foreach($id in $ids){
  $s=Get-CimInstance Win32_Service -Filter ("Name='"+$id+"'") -ErrorAction Stop
  if(!$s){continue}
  if($s.Name -ne $id){throw 'O Windows retornou um serviço diferente do solicitado'}
  $key=Get-Item -LiteralPath ("HKLM:\SYSTEM\CurrentControlSet\Services\"+$id) -ErrorAction Stop
  $exists=@($key.GetValueNames()) -contains 'DelayedAutoStart'
  if($exists -and $key.GetValueKind('DelayedAutoStart').ToString() -ne 'DWord'){throw 'Tipo de inicialização atrasada não suportado'}
  [pscustomobject]@{id=$s.Name;startMode=$s.StartMode;state=$s.State;delayedExists=$exists;delayedKind=if($exists){$key.GetValueKind('DelayedAutoStart').ToString()}else{$null};delayed=if($exists){[int]$key.GetValue('DelayedAutoStart')}else{0}}
})
ConvertTo-Json -InputObject @($items) -Compress
`);
    if(!Array.isArray(list)||list.length>ids.length||new Set(list.map(s=>s?.id)).size!==list.length||list.some(s=>!ids.includes(s?.id)))throw new Error('O inventário contém um serviço diferente do solicitado.');
    if(required&&(list.length!==ids.length||ids.some(id=>!list.some(s=>s.id===id))))throw new Error('Um dos serviços deixou de existir antes da verificação.');
    if(list.length)services.validate({services:list});
    return list;
  }
  const services = {
    metadata:{mode:'reversible',requiresAdmin:true,restart:false,title:'Definir serviços opcionais como manuais',
      description:'Escolha Fax, mapas baixados ou demonstração de loja. Altera apenas o tipo de inicialização dos serviços selecionados.',
      localDetails:'Nenhum serviço é selecionado previamente. Os serviços em execução continuam funcionando. Update, Defender, áudio e rede são preservados.'},
    validate(snapshot) {
      if(!ownObject(snapshot)||!Array.isArray(snapshot.services)||!snapshot.services.length||snapshot.services.length>3)throw new Error('Cópia de serviços inválida.');
      const seen=new Set();
      for(const s of snapshot.services){
        if(!ownObject(s)||!Object.hasOwn(SERVICES,s.id)||seen.has(s.id)||!['Auto','Manual','Disabled'].includes(s.startMode)||!['Running','Stopped'].includes(s.state)||typeof s.delayedExists!=='boolean'||(s.delayedExists?s.delayedKind!=='DWord':s.delayedKind!==null)||![0,1].includes(s.delayed)||(!s.delayedExists&&s.delayed!==0))throw new Error('A cópia contém um serviço ou estado não permitido.');
        seen.add(s.id);
      }
    },
    async capture() {
      const list=await readServices(Object.keys(SERVICES));
      if(!Array.isArray(list))throw new Error('Inventário de serviços inválido.');
      const candidates=list.filter(s=>Object.hasOwn(SERVICES,s.id)&&s.startMode!=='Disabled');
      if(!candidates.length)throw new Error('Nenhum serviço opcional compatível encontrado.');
      const ids=await selectPackages({title:'Serviços opcionais: mudar para inicialização manual',message:'Marque somente os serviços opcionais que deseja definir como manuais. Serviços em execução continuarão funcionando. Nenhum serviço está selecionado inicialmente.',packages:candidates.map(s=>({id:s.id,name:`${SERVICES[s.id]} (${s.startMode})`}))});
      if(!Array.isArray(ids)||!ids.length)throw new Error('Nenhum serviço selecionado.');
      if(new Set(ids).size!==ids.length||ids.some(id=>!candidates.some(s=>s.id===id)))throw new Error('Seleção de serviços inválida.');
      const snapshot={services:await readServices(ids,true)};
      if(snapshot.services.some(s=>s.startMode==='Disabled'))throw new Error('Um serviço selecionado foi desativado antes da captura. Nenhuma configuração foi modificada.');
      services.validate(snapshot);return snapshot;
    },
    async apply(snapshot) {
      services.validate(snapshot);
      const ids=snapshot.services.map(s=>s.id);
      let before;
      try {before=await readServices(ids,true);} catch(error) {throw unchanged(error);}
      if(snapshot.services.some(s=>!before.some(v=>v.id===s.id&&v.startMode===s.startMode&&v.delayedExists===s.delayedExists&&v.delayedKind===s.delayedKind&&v.delayed===s.delayed)))throw unchanged(new Error('A configuração de um serviço mudou desde a seleção. Nenhuma alteração foi iniciada.'));
      for(const s of snapshot.services){
        const result=await execute(`$out=& "$env:SystemRoot\\System32\\sc.exe" config ${psLiteral(s.id)} start= demand 2>&1; if($LASTEXITCODE -ne 0){throw ($out -join ' ')}; @{confirmed=$true}|ConvertTo-Json -Compress`);
        if(!ownObject(result)||result.confirmed!==true)throw new Error('A alteração do serviço não foi confirmada.');
      }
      const after=await readServices(ids,true);
      if(after.some(s=>s.startMode!=='Manual'))throw new Error('A inicialização manual não foi confirmada.');
      return {success:true,verified:true,summary:`${after.length} serviço(s) definido(s) como manual. Serviços em execução não foram parados.`};
    },
    async restore(snapshot) {
      services.validate(snapshot);
      for(const s of snapshot.services){
        const mode=s.startMode==='Auto'?(s.delayedExists&&s.delayed===1?'delayed-auto':'auto'):s.startMode==='Disabled'?'disabled':'demand';
        const result=await execute(String.raw`
$out=& "$env:SystemRoot\System32\sc.exe" config ${psLiteral(s.id)} start= ${mode} 2>&1
if($LASTEXITCODE -ne 0){throw ($out -join ' ')}
$path='HKLM:\SYSTEM\CurrentControlSet\Services\'+${psLiteral(s.id)}
if(${s.delayedExists?'$true':'$false'}){New-ItemProperty -LiteralPath $path -Name DelayedAutoStart -Value ${s.delayed} -PropertyType DWord -Force -ErrorAction Stop | Out-Null}
else{Remove-ItemProperty -LiteralPath $path -Name DelayedAutoStart -ErrorAction SilentlyContinue}
@{confirmed=$true}|ConvertTo-Json -Compress
`);
        if(!ownObject(result)||result.confirmed!==true)throw new Error('A restauração do serviço não foi confirmada.');
      }
      const after=await readServices(snapshot.services.map(s=>s.id),true);
      if(snapshot.services.some(s=>!after.some(v=>v.id===s.id&&v.startMode===s.startMode&&v.delayedExists===s.delayedExists&&v.delayedKind===s.delayedKind&&(!s.delayedExists||v.delayed===s.delayed))))throw new Error('A configuração anterior de serviços não foi confirmada.');
      return {success:true,verified:true};
    },
    async check(snapshot) {services.validate(snapshot);const after=await readServices(snapshot.services.map(s=>s.id),true);return {supported:true,applied:after.every(s=>s.startMode==='Manual')};},
  };
  const graphics = {
    metadata:{mode:'action',requiresAdmin:false,restart:false,title:'Ajustar otimizações de jogos em janela',
      description:'Abre as configurações gráficas do Windows para você ativar a opção de jogos em janela.',
      localDetails:'Recurso de Windows 11 22H2 ou posterior para jogos DirectX 10/11 compatíveis. Abrir a página não altera nem comprova o estado da opção.'},
    async apply() {
      assertWindows(platform);
      const build=await execute(String.raw`@{build=[int](Get-ItemProperty 'HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion' -ErrorAction Stop).CurrentBuildNumber} | ConvertTo-Json -Compress`);
      if(!ownObject(build)||!Number.isInteger(build.build)||build.build<22621)throw new Error('As otimizações para jogos em janela requerem Windows 11 22H2 ou posterior.');
      await openSettings('ms-settings:display-advancedgraphics');
      return {success:true,verified:true,opened:true,applied:null,summary:'Configurações gráficas abertas. Ative Otimizações para jogos em janela se a opção estiver disponível.'};
    },
  };
  return {'optimize-network-settings':network,'disable-defender-rtp':defender,'set-services-to-manual':services,'enable-optimization-for-windowed-games':graphics};
}
module.exports={createPlatformFeatures,SERVICES};
