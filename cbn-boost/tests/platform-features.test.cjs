'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {createPlatformFeatures} = require('../main/platform-features.cjs');
const {createTweaksService} = require('../main/tweaks.cjs');

const NETWORK = 'optimize-network-settings';
const DEFENDER = 'disable-defender-rtp';
const SERVICES = 'set-services-to-manual';
const GRAPHICS = 'enable-optimization-for-windowed-games';
const defenderOn = {disabled:false, realtime:true, tamper:false};
const defenderOff = {disabled:true, realtime:false, tamper:false};
const serviceRow = (id, values={}) => ({id, startMode:'Auto', state:'Running', delayedExists:false, delayedKind:null, delayed:0, ...values});

function fixture(responses=[], options={}) {
  const calls=[], opened=[], selections=[];
  const handlers=createPlatformFeatures({
    platform:'win32',
    confirm:async()=>true,
    selectPackages:async options=>{selections.push(options);return [];},
    openSettings:async uri=>{opened.push(uri);},
    runPowerShell:async script=>{
      calls.push(script);
      assert.ok(script.length<=11000,'Windows encoded commands must fit the runner limit');
      assert.ok(responses.length,'unexpected additional Windows operation');
      let result=responses.shift();
      if(typeof result==='function')result=await result(script);
      if(result instanceof Error)throw result;
      if(result?.processResult)return result.processResult;
      return {stdout:JSON.stringify(result), stderr:'', exitCode:0};
    },
    ...options,
  });
  return {handlers,calls,opened,selections};
}

function manager(t, handlers) {
  const dataDir=fs.mkdtempSync(path.join(os.tmpdir(),'cbn-platform-test-'));
  t.after(()=>fs.rmSync(dataDir,{recursive:true,force:true}));
  const service=createTweaksService({dataDir, resourcesDir:path.join(__dirname,'../resources'),
    handlers, runPowerShell:async()=>{throw new Error('Unrelated registry operations must not run');}});
  return {service,snapshotFile:path.join(dataDir,'tweak-snapshots.json')};
}

test('platform feature operations cannot execute or open Windows settings on Linux',async()=>{
  let executed=0,opened=0;
  const f=fixture([],{platform:'linux',runPowerShell:async()=>{executed++;},openSettings:async()=>{opened++;}});
  const jobs=[
    ()=>f.handlers[NETWORK].capture(),
    ()=>f.handlers[NETWORK].apply({rss:'Disabled'}),
    ()=>f.handlers[NETWORK].restore({rss:'Disabled'}),
    ()=>f.handlers[DEFENDER].capture(),
    ()=>f.handlers[DEFENDER].apply(defenderOn),
    ()=>f.handlers[DEFENDER].restore(defenderOn),
    ()=>f.handlers[SERVICES].capture(),
    ()=>f.handlers[SERVICES].apply({services:[serviceRow('Fax')]}),
    ()=>f.handlers[GRAPHICS].apply(),
  ];
  for(const job of jobs)await assert.rejects(job(),/Windows/);
  assert.equal(executed,0);
  assert.equal(opened,0);
});

test('RSS restores the captured global state without changing other network features',async()=>{
  const f=fixture([{rss:'Disabled'},{confirmed:true,rss:'Enabled'},{rss:'Disabled'}]);
  const feature=f.handlers[NETWORK], snapshot=await feature.capture();
  assert.equal((await feature.apply(snapshot)).verified,true);
  assert.equal((await feature.restore(snapshot)).verified,true);
  assert.match(f.calls[2],/-ReceiveSideScaling Disabled/);
  assert.doesNotMatch(f.calls.join('\n'),/Set-NetTCPSetting|Set-DnsClient|Set-NetAdapter|netsh|Chimney|ReceiveSegmentCoalescing|TaskOffload/);
});

test('RSS rejects unknown snapshots, false confirmations and mismatched restoration',async t=>{
  for(const bad of [{rss:'Automatic'},{rss:1},null])await t.test(JSON.stringify(bad),async()=>{
    const f=fixture([]);
    await assert.rejects(f.handlers[NETWORK].apply(bad),/inválida/);
    assert.equal(f.calls.length,0);
  });
  for(const response of [{confirmed:false,rss:'Enabled'},{confirmed:true,rss:'Disabled'},{}]){
    const f=fixture([response]);
    await assert.rejects(f.handlers[NETWORK].apply({rss:'Disabled'}),/confirmada/);
  }
  const f=fixture([{rss:'Enabled'}]);
  await assert.rejects(f.handlers[NETWORK].restore({rss:'Disabled'}),/restaurada/);
});

test('failed RSS mutation restores only after the original snapshot has been persisted',async t=>{
  let snapshotFile;
  const f=fixture([
    {rss:'Disabled'},
    ()=>{
      const backup=JSON.parse(fs.readFileSync(snapshotFile,'utf8')).tweaks[NETWORK];
      assert.equal(backup.status,'pending');
      assert.deepEqual(backup.snapshot,{rss:'Disabled'});
      return {confirmed:false,rss:'Enabled'};
    },
    {rss:'Disabled'},
  ]);
  const m=manager(t,f.handlers); snapshotFile=m.snapshotFile;
  await assert.rejects(m.service.apply(NETWORK),/valores anteriores foram restaurados/);
  assert.deepEqual(JSON.parse(fs.readFileSync(snapshotFile,'utf8')).tweaks,{});
  assert.match(f.calls.at(-1),/-ReceiveSideScaling Disabled/);
});

test('an incomplete RSS rollback retains the original snapshot for recovery',async t=>{
  const f=fixture([{rss:'Disabled'},{confirmed:false,rss:'Enabled'},{rss:'Enabled'}]);
  const m=manager(t,f.handlers);
  await assert.rejects(m.service.apply(NETWORK),/Restauração incompleta/);
  const backup=JSON.parse(fs.readFileSync(m.snapshotFile,'utf8')).tweaks[NETWORK];
  assert.equal(backup.status,'recovery-required');
  assert.deepEqual(backup.snapshot,{rss:'Disabled'});
});

test('RSS and Defender rejected before mutation never overwrite externally changed settings',async t=>{
  for(const [id,snapshot] of [[NETWORK,{rss:'Disabled'}],[DEFENDER,defenderOn]]){
    await t.test(id,async t=>{
      const f=fixture([snapshot,new Error('[CBN_NO_CHANGES]Estado alterado externamente')]);
      const m=manager(t,f.handlers);
      await assert.rejects(m.service.apply(id),/Estado alterado externamente/);
      assert.equal(f.calls.length,2,'a verified preflight rejection must not run a rollback');
      assert.deepEqual(JSON.parse(fs.readFileSync(m.snapshotFile,'utf8')).tweaks,{});
    });
  }
});

test('optional services require an explicit selection and disabled services are excluded',async()=>{
  const f=fixture([[serviceRow('MapsBroker'),serviceRow('Fax',{startMode:'Disabled'}),serviceRow('RetailDemo')]]);
  await assert.rejects(f.handlers[SERVICES].capture(),/Nenhum serviço selecionado/);
  assert.deepEqual(f.selections[0].packages.map(p=>p.id),['MapsBroker','RetailDemo']);
  assert.equal(Object.hasOwn(f.selections[0],'selected'),false);
  assert.equal(f.calls.length,1,'cancelling selection must not perform a mutation');
});

test('service selection rejects unknown names and replaced identities even with equal row counts',async()=>{
  const f=fixture([[serviceRow('Fax')]],{selectPackages:async()=>['Fax; Stop-Service WinDefend']});
  await assert.rejects(f.handlers[SERVICES].capture(),/Seleção.*inválida/);
  assert.equal(f.calls.length,1);
  const replaced=fixture([[serviceRow('Fax')],[serviceRow('MapsBroker')]],{selectPackages:async()=>['Fax']});
  await assert.rejects(replaced.handlers[SERVICES].capture(),/diferente/);
  assert.equal(replaced.calls.length,2);
  assert.doesNotMatch(replaced.calls.join('\n'),/sc\.exe.*config/);
});

test('service snapshots record the exact selected names and distinguish delayed DWORD from absence',async()=>{
  const rows=[serviceRow('MapsBroker',{delayedExists:true,delayedKind:'DWord',delayed:1}),serviceRow('Fax')];
  const f=fixture([rows,rows],{selectPackages:async()=>['Fax','MapsBroker']});
  const snapshot=await f.handlers[SERVICES].capture();
  assert.deepEqual(snapshot,{services:rows});
  assert.equal(snapshot.services.find(s=>s.id==='Fax').delayedKind,null);
});

test('service application verifies identity and detects configuration changes before mutation',async()=>{
  const snapshot={services:[serviceRow('Fax')]};
  const changed=fixture([[serviceRow('Fax',{startMode:'Disabled'})]]);
  await assert.rejects(changed.handlers[SERVICES].apply(snapshot),error=>error.noChanges===true&&/mudou desde/.test(error.message));
  assert.equal(changed.calls.length,1);
  const replaced=fixture([[serviceRow('Fax')],{confirmed:true},[serviceRow('MapsBroker',{startMode:'Manual'})]]);
  await assert.rejects(replaced.handlers[SERVICES].apply(snapshot),/diferente/);
  assert.match(replaced.calls[1],/config 'Fax' start= demand/);
});

test('service external configuration changes after selection survive without an automatic rollback',async t=>{
  const row=serviceRow('Fax');
  const f=fixture([[row],[row],[serviceRow('Fax',{startMode:'Disabled'})]],{selectPackages:async()=>['Fax']});
  const m=manager(t,f.handlers);
  await assert.rejects(m.service.apply(SERVICES),/mudou desde/);
  assert.equal(f.calls.length,3);
  assert.doesNotMatch(f.calls.join('\n'),/sc\.exe.*config/);
  assert.deepEqual(JSON.parse(fs.readFileSync(m.snapshotFile,'utf8')).tweaks,{});
});

test('service application changes startup only, and never stops a running service',async()=>{
  const row=serviceRow('Fax');
  const f=fixture([[row],{confirmed:true},[serviceRow('Fax',{startMode:'Manual'})]]);
  assert.equal((await f.handlers[SERVICES].apply({services:[row]})).verified,true);
  assert.doesNotMatch(f.calls.join('\n'),/Stop-Service|Start-Service|Restart-Service|sc\.exe[^\n]*(?:stop|start) 'Fax'/);
});

test('service restoration preserves delayed startup type and removes a value originally absent',async()=>{
  const rows=[serviceRow('MapsBroker',{delayedExists:true,delayedKind:'DWord',delayed:1}),serviceRow('Fax',{state:'Stopped'})];
  const after=rows.map(s=>({...s,state:'Running'}));
  const f=fixture([{confirmed:true},{confirmed:true},after]);
  assert.equal((await f.handlers[SERVICES].restore({services:rows})).verified,true);
  assert.match(f.calls[0],/config 'MapsBroker' start= delayed-auto/);
  assert.match(f.calls[0],/PropertyType DWord/);
  assert.match(f.calls[1],/Remove-ItemProperty.*DelayedAutoStart/);
  assert.doesNotMatch(f.calls.join('\n'),/Stop-Service|Start-Service|Restart-Service/);
  // An app using a service may have started it after capture; restoring startup
  // configuration must not stop that legitimate use.
});

test('service response fabrication and invalid delayed startup types cannot report success',async()=>{
  const f=fixture([]);
  const badSnapshots=[
    {services:[serviceRow('WinDefend')]},
    {services:[serviceRow('Fax',{delayedExists:true,delayedKind:'String',delayed:1})]},
    {services:[serviceRow('Fax',{delayedKind:'DWord'})]},
    {services:[serviceRow('Fax'),serviceRow('Fax')]},
  ];
  for(const snapshot of badSnapshots)await assert.rejects(f.handlers[SERVICES].restore(snapshot),/não permitido/);
  assert.equal(f.calls.length,0);
  const check=fixture([[serviceRow('Fax',{startMode:'Manual'}),serviceRow('Fax',{startMode:'Manual'})]]);
  await assert.rejects(check.handlers[SERVICES].check({services:[serviceRow('Fax'),serviceRow('MapsBroker')]}),/diferente/);
});

test('Defender tamper protection and cancelled confirmation produce no mutation or saved snapshot',async t=>{
  const tampered=fixture([{...defenderOn,tamper:true}]);
  const m=manager(t,tampered.handlers);
  await assert.rejects(m.service.apply(DEFENDER),/adulteração/);
  assert.equal(fs.existsSync(m.snapshotFile),false);
  assert.equal(tampered.calls.length,1);
  assert.doesNotMatch(tampered.calls[0],/Set-MpPreference|DisableTamperProtection/);
  const cancelled=fixture([defenderOn],{confirm:async()=>false});
  await assert.rejects(cancelled.handlers[DEFENDER].capture(),/cancelada/);
  assert.equal(cancelled.calls.length,1);
});

test('Defender pause requires confirmed preference and actual real-time protection state',async()=>{
  const accepted=fixture([{confirmed:true,...defenderOff}]);
  assert.equal((await accepted.handlers[DEFENDER].apply(defenderOn)).verified,true);
  for(const response of [
    {confirmed:false,...defenderOff},
    {confirmed:true,...defenderOff,realtime:true},
    {confirmed:true,...defenderOff,tamper:true},
    {confirmed:true},
  ]){
    const f=fixture([response]);
    await assert.rejects(f.handlers[DEFENDER].apply(defenderOn),/confirmada|inválida/);
  }
  assert.doesNotMatch(accepted.calls[0],/Set-MpPreference[^\n]*DisableTamperProtection|ExclusionPath|Set-Service|New-ScheduledTask/);
});

test('Defender status observes Windows reactivation and refuses unknown or protected state',async()=>{
  const f=fixture([defenderOff,defenderOn,{...defenderOn,tamper:true},{disabled:false,realtime:true}]);
  const feature=f.handlers[DEFENDER];
  assert.deepEqual(await feature.check(),{supported:true,applied:true});
  assert.deepEqual(await feature.check(),{supported:true,applied:false});
  const blocked=await feature.check();
  assert.equal(blocked.supported,false);
  assert.equal(blocked.applied,false);
  await assert.rejects(feature.check(),/inválida/);
  assert.match(f.calls[0],/\$null -eq \$s\.IsTamperProtected/);
});

test('Defender restoration verifies the original preference and waits for effective state',async()=>{
  const f=fixture([defenderOn]);
  assert.equal((await f.handlers[DEFENDER].restore(defenderOn)).verified,true);
  assert.match(f.calls[0],/Set-MpPreference -DisableRealtimeMonitoring \$false/);
  assert.match(f.calls[0],/for\([\s\S]*Read-CBNDefender[\s\S]*Start-Sleep/);
  const denied=fixture([defenderOff]);
  await assert.rejects(denied.handlers[DEFENDER].restore(defenderOn),/estado anterior/);
  const oldDisabled=fixture([defenderOff]);
  assert.equal((await oldDisabled.handlers[DEFENDER].restore(defenderOff)).verified,true);
  assert.match(oldDisabled.calls[0],/Set-MpPreference -DisableRealtimeMonitoring \$true/);
});

test('graphics action checks the Windows version and opens settings without claiming an applied toggle',async()=>{
  for(const build of [19045,22000,22620,'22621',null]){
    const f=fixture([{build}]);
    await assert.rejects(f.handlers[GRAPHICS].apply(),/22H2/);
    assert.deepEqual(f.opened,[]);
  }
  const f=fixture([{build:22621}]);
  const result=await f.handlers[GRAPHICS].apply();
  assert.equal(f.handlers[GRAPHICS].metadata.mode,'action');
  assert.deepEqual(f.opened,['ms-settings:display-advancedgraphics']);
  assert.equal(result.opened,true);
  assert.equal(result.applied,null);
  assert.match(f.calls[0],/HKLM:\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion/);
});

test('provider failures and malformed output never turn into a successful platform status',async()=>{
  const f=fixture([
    {processResult:{exitCode:1,stdout:'',stderr:'Cmdlet indisponível'}},
    {processResult:{exitCode:0,stdout:'not json',stderr:''}},
    {processResult:{exitCode:0,stderr:''}},
  ]);
  await assert.rejects(f.handlers[NETWORK].check(),/indisponível/);
  await assert.rejects(f.handlers[NETWORK].check(),/incompleta/);
  await assert.rejects(f.handlers[NETWORK].check(),/incompleta/);
});
