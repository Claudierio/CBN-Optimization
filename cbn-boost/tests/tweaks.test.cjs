'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { createTweaksService } = require('../main/tweaks.cjs');

function fixture(t, initial = []) {
  const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cbn-tweaks-test-'));
  t.after(() => fs.rmSync(dataDir, { recursive: true, force: true }));
  const key = e => `${e.hive}/${e.path}/${e.name}`;
  const registry = new Map(initial.map(e => [key(e), e]));
  const calls = [];
  let failApply = false;
  let failRestore = false;
  let corruptCapture = false;
  let ignoreWrite = false;
  const schemes = new Set(['381b4222-f694-41f0-9685-ff5bb260df2e']);
  let activeGuid = [...schemes][0];
  const scriptLengths = [];
  const executor = async script => {
    scriptLengths.push(script.length);
    const encoded = script.match(/FromBase64String\('([^']+)'\)/)[1];
    const request = JSON.parse(Buffer.from(encoded, 'base64').toString('utf8'));
    calls.push(request);
    if(request.operation==='policy-support')return {stdout:JSON.stringify({edition:'Professional'}),stderr:'',exitCode:0};
    if (request.operation !== 'capture') {
      const disk = JSON.parse(fs.readFileSync(path.join(dataDir, 'tweak-snapshots.json')));
      assert.ok(Object.keys(disk.tweaks).length, 'backup must be durable before mutation');
    }
    if (request.operation === 'restore' && failRestore) return { stdout: '', stderr: 'restore denied', exitCode: 1 };
    if (!request.entries) {
      if (request.operation === 'apply') {
        schemes.add(request.createdGuid);
        if (failApply) return { stdout: '', stderr: 'powercfg failed after duplicate', exitCode: 1 };
        activeGuid = request.createdGuid;
      } else if (request.operation === 'restore') {
        activeGuid = request.activeGuid;
        schemes.delete(request.createdGuid);
      }
      return { stdout: JSON.stringify({ activeGuid }), stderr: '', exitCode: 0 };
    }
    if (request.operation === 'capture' && corruptCapture) {
      return { stdout: JSON.stringify(request.entries.map(entry => ({ ...entry, existed: 'false', keyExisted: false }))), stderr: '', exitCode: 0 };
    }
    const result = [];
    for (const entry of request.entries) {
      if (request.operation === 'apply' && !ignoreWrite) {
        registry.set(key(entry), { ...entry, existed: true, keyExisted: true });
        if (failApply) return { stdout: '', stderr: 'partial failure', exitCode: 1 };
      }
      if (request.operation === 'restore') {
        if (entry.existed) registry.set(key(entry), { ...entry });
        else registry.delete(key(entry));
      }
      result.push(registry.get(key(entry)) || { hive: entry.hive, path: entry.path, name: entry.name, existed: false, keyExisted: false });
    }
    return { stdout: JSON.stringify(result), stderr: '', exitCode: 0 };
  };
  const options = { dataDir, resourcesDir: path.join(__dirname, '../resources'), runPowerShell: executor };
  return {
    service: createTweaksService(options), options, registry, calls, dataDir, scriptLengths, schemes,
    getActiveGuid: () => activeGuid,
    failApply: value => { failApply = value; },
    failRestore: value => { failRestore = value; },
    corruptCapture: value => { corruptCapture = value; },
    ignoreWrite: value => { ignoreWrite = value; },
  };
}

test('preserves absent registry values and restores existing values with their original type', async t => {
  const original = { hive: 'CurrentUser', path: 'Control Panel\\Mouse', name: 'MouseSpeed', data: '1', kind: 'String', existed: true, keyExisted: true };
  const f = fixture(t, [original]);
  await f.service.apply('disable-mouse-acceleration');
  assert.equal(f.registry.size, 3);
  assert.equal((await f.service.check('disable-mouse-acceleration')).applied, true);
  // Opening a fresh service represents closing/reopening the application.
  const reopened = createTweaksService(f.options);
  await reopened.unapply('disable-mouse-acceleration');
  assert.deepEqual([...f.registry.values()], [original]);
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(f.dataDir, 'tweak-snapshots.json'))).tweaks, {});
});

test('location policy records and restores the official value only on a supported edition',async t=>{
  const f=fixture(t);
  await f.service.apply('disable-location-tracking');
  assert.equal(f.calls[0].operation,'policy-support');
  assert.equal([...f.registry.values()][0].name,'DisableLocation');
  await f.service.unapply('disable-location-tracking');
  assert.equal(f.registry.size,0);
  const unsupported=createTweaksService({...f.options,runPowerShell:async()=>({stdout:JSON.stringify({edition:'Core'}),exitCode:0})});
  await assert.rejects(unsupported.apply('disable-location-tracking'), /edição/);
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(f.dataDir,'tweak-snapshots.json'))).tweaks,{});
});

test('custom reversible feature persists its snapshot before writes and rolls back partial failure',async t=>{
  const f=fixture(t);let current='previous',failed=false,restores=0;
  const handler={metadata:{mode:'reversible',restart:false},validate:s=>assert.equal(typeof s.old,'string'),
    capture:async()=>({old:current}),apply:async()=>{
      assert.equal(JSON.parse(fs.readFileSync(path.join(f.dataDir,'tweak-snapshots.json'))).tweaks['optimize-network-settings'].snapshot.old,'previous');
      current='optimized';if(failed)throw Error('Partial custom failure');return {success:true,verified:true};
    },restore:async s=>{current=s.old;restores++;return {success:true,verified:true};},check:async()=>({supported:true,applied:current==='optimized'})};
  const opts={...f.options,handlers:{'optimize-network-settings':handler}};
  const service=createTweaksService(opts);
  await service.apply('optimize-network-settings');
  await createTweaksService(opts).unapply('optimize-network-settings');
  assert.equal(current,'previous');
  failed=true;
  await assert.rejects(createTweaksService(opts).apply('optimize-network-settings'),/Partial custom failure/);
  assert.equal(current,'previous');assert.equal(restores,2);
});

test('external changes rejected before mutation are never overwritten by automatic rollback',async t=>{
  const f=fixture(t);let value='previous',restores=0;
  const handler={metadata:{mode:'reversible'},validate:s=>assert.equal(s.old,'previous'),capture:async()=>({old:value}),
    apply:async()=>{value='externally changed';const error=Error('Changed after capture');error.noChanges=true;throw error;},
    restore:async()=>{restores++;return {success:true,verified:true};},check:async()=>({supported:true,applied:false})};
  const service=createTweaksService({...f.options,handlers:{'optimize-nvidia-settings':handler}});
  await assert.rejects(service.apply('optimize-nvidia-settings'),/Changed after capture/);
  assert.equal(restores,0);assert.equal(value,'externally changed');
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(f.dataDir,'tweak-snapshots.json'))).tweaks,{});
});

test('one-shot actions never become active or acquire a fake restore snapshot',async t=>{
  const f=fixture(t);let calls=0;
  const handler={metadata:{mode:'action'},apply:async()=>{calls++;return {success:true,verified:true,opened:true,summary:'Tool opened'};}};
  const service=createTweaksService({...f.options,handlers:{'run-disk-cleanup':handler}});
  assert.equal((await service.apply('run-disk-cleanup')).action,'run');
  await service.apply('run-disk-cleanup');assert.equal(calls,2);
  assert.equal(service.list().find(x=>x.id==='run-disk-cleanup').canRestore,false);
  assert.equal((await service.check('run-disk-cleanup')).applied,false);
  await assert.rejects(service.unapply('run-disk-cleanup'),/não é um ajuste reversível/);
  assert.equal(fs.existsSync(path.join(f.dataDir,'tweak-snapshots.json')),false);
});

test('custom backup validation rejects tampered persisted inputs without modifying them',t=>{
  const f=fixture(t);const file=path.join(f.dataDir,'tweak-snapshots.json');
  const text=JSON.stringify({version:1,tweaks:{'optimize-nvidia-settings':{status:'applied',snapshot:{path:'C:\\arbitrary'}}}});
  fs.writeFileSync(file,text);
  const handler={metadata:{mode:'reversible'},validate:()=>{throw Error('Invalid native snapshot');}};
  assert.throws(()=>createTweaksService({...f.options,handlers:{'optimize-nvidia-settings':handler}}),/Invalid native snapshot/);
  assert.equal(fs.readFileSync(file,'utf8'),text);
});

test('partial apply failure rolls back and never reports success', async t => {
  const f = fixture(t);
  f.failApply(true);
  await assert.rejects(f.service.apply('disable-mouse-acceleration'), /partial failure.*restaurados/);
  assert.equal(f.registry.size, 0);
  assert.deepEqual(f.calls.map(c => c.operation), ['capture', 'apply', 'restore']);
});

test('failed rollback keeps original snapshot across restart for explicit restore', async t => {
  const f = fixture(t);
  f.failApply(true);
  f.failRestore(true);
  await assert.rejects(f.service.apply('disable-mouse-acceleration'), /Restauração incompleta/);
  assert.equal(f.service.list().find(i => i.id === 'disable-mouse-acceleration').recoveryRequired, true);
  f.failRestore(false);
  await createTweaksService(f.options).unapply('disable-mouse-acceleration');
  assert.equal(f.registry.size, 0);
});

test('never replaces backup on repeated apply or invents default values for unapply', async t => {
  const f = fixture(t);
  await f.service.apply('enable-hags');
  const before = fs.readFileSync(path.join(f.dataDir, 'tweak-snapshots.json'), 'utf8');
  assert.equal((await f.service.apply('enable-hags')).alreadyApplied, true);
  assert.equal(fs.readFileSync(path.join(f.dataDir, 'tweak-snapshots.json'), 'utf8'), before);
  await assert.rejects(f.service.unapply('enable-dark-mode'), /Não existe cópia/);
});

test('missing scripts and renderer-controlled identifiers do not execute PowerShell', async t => {
  const f = fixture(t);
  assert.equal(f.service.list().length, 29);
  await assert.rejects(f.service.apply('remove-onedrive'), /não foi distribuído/);
  await assert.rejects(f.service.apply('../enable-hags'), /desconhecido/);
  assert.equal(f.calls.length, 0);
});

test('broken snapshot file fails closed without overwriting backup', t => {
  const f = fixture(t);
  const backup = path.join(f.dataDir, 'tweak-snapshots.json');
  fs.writeFileSync(backup, '{invalid');
  assert.throws(() => createTweaksService(f.options));
  assert.equal(fs.readFileSync(backup, 'utf8'), '{invalid');
});

test('malformed capture is rejected before a backup or Windows mutation', async t => {
  const f = fixture(t);
  f.corruptCapture(true);
  await assert.rejects(f.service.apply('enable-hags'), /registro inválida/);
  assert.deepEqual(f.calls.map(call => call.operation), ['capture']);
  assert.equal(fs.existsSync(path.join(f.dataDir, 'tweak-snapshots.json')), false);
});

test('an apparently successful write that does not match the requested state triggers rollback', async t => {
  const f = fixture(t);
  f.ignoreWrite(true);
  await assert.rejects(f.service.apply('enable-hags'), /não confirmou.*restaurados/);
  assert.deepEqual(f.calls.map(call => call.operation), ['capture', 'apply', 'restore']);
  assert.equal(f.service.list().find(item => item.id === 'enable-hags').canRestore, false);
});

test('valid JSON with unsafe snapshot contents is preserved and rejected on reopening', async t => {
  const f = fixture(t);
  await f.service.apply('enable-hags');
  const backupPath = path.join(f.dataDir, 'tweak-snapshots.json');
  const backup = JSON.parse(fs.readFileSync(backupPath));
  backup.tweaks['enable-hags'].snapshot[0].path = 'Software\\Unrelated';
  const serialized = JSON.stringify(backup);
  fs.writeFileSync(backupPath, serialized);
  assert.throws(() => createTweaksService(f.options), /registro inválida/);
  assert.equal(fs.readFileSync(backupPath, 'utf8'), serialized);
});

test('restores large QWord values exactly through JSON persistence', async t => {
  const original = { hive: 'LocalMachine', path: 'SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers', name: 'HwSchMode', data: '9223372036854775807', kind: 'QWord', existed: true, keyExisted: true };
  const f = fixture(t, [original]);
  await f.service.apply('enable-hags');
  await createTweaksService(f.options).unapply('enable-hags');
  assert.deepEqual([...f.registry.values()], [original]);
});

test('Ultimate power plan uses a dedicated GUID and restores only its own copy', async t => {
  const f = fixture(t);
  const prior = f.getActiveGuid();
  await f.service.apply('ultimate-performance-plan');
  const created = f.getActiveGuid();
  assert.notEqual(created, prior);
  assert.equal(f.schemes.size, 2);
  await createTweaksService(f.options).unapply('ultimate-performance-plan');
  assert.equal(f.getActiveGuid(), prior);
  assert.deepEqual([...f.schemes], [prior]);
});

test('failure after power plan duplication does not leave its temporary plan behind', async t => {
  const f = fixture(t);
  const prior = f.getActiveGuid();
  f.failApply(true);
  await assert.rejects(f.service.apply('ultimate-performance-plan'), /powercfg failed.*restaurados/);
  assert.equal(f.getActiveGuid(), prior);
  assert.deepEqual([...f.schemes], [prior]);
});

test('status reads are batched, stay within command-size limits, and retain all catalog items', async t => {
  const f = fixture(t);
  const statuses = await f.service.checkAll();
  assert.equal(statuses.length, 29);
  assert.equal(statuses.filter(item => item.supported).length, 17);
  assert.equal(statuses.some(item => item.error), false);
  assert.ok(f.calls.length < 16, 'registry values should be read in batches');
  assert.ok(f.scriptLengths.every(length => length <= 11000));
});

test('an unwritable backup prevents mutation and does not poison subsequent retries', async t => {
  const f = fixture(t);
  const temporary = path.join(f.dataDir, 'tweak-snapshots.json.tmp');
  fs.mkdirSync(temporary);
  await assert.rejects(f.service.apply('enable-hags'), /EISDIR/);
  assert.deepEqual(f.calls.map(call => call.operation), ['capture']);
  assert.equal(f.service.list().find(item => item.id === 'enable-hags').canRestore, false);
  fs.rmdirSync(temporary);
  assert.equal((await f.service.apply('enable-hags')).success, true);
});

test('an original value too large to restore is rejected before altering Windows', async t => {
  const original = { hive: 'LocalMachine', path: 'SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers', name: 'HwSchMode', data: 'A'.repeat(10000), kind: 'String', existed: true, keyExisted: true };
  const f = fixture(t, [original]);
  await assert.rejects(f.service.apply('enable-hags'), /limite de tamanho/);
  assert.deepEqual(f.calls.map(call => call.operation), ['capture']);
  assert.deepEqual([...f.registry.values()], [original]);
  assert.equal(fs.existsSync(path.join(f.dataDir, 'tweak-snapshots.json')), false);
});
