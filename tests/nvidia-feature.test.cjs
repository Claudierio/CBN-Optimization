'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { spawnSync } = require('node:child_process');
const { createNvidiaFeature, SETTINGS, validate } = require('../cbn-boost/main/nvidia-feature.cjs');
const resourcesDir = path.resolve(__dirname, '../cbn-boost/resources');

function setting(id, values = {}) {
  return { id, present: true, type: 0, location: 0, isCurrentPredefined: false, isPredefinedValid: true,
    current: 5, predefined: 5, override: true, ...values };
}
function initial() {
  return { version: 1, profile: 'base', settings: [
    setting(SETTINGS[0].id, { current: 0xFFFFFFFF }),
    setting(SETTINGS[1].id, { current: 0, predefined: 0, location: 3, override: false, isCurrentPredefined: true }),
  ] };
}
function optimized() {
  return { version: 1, profile: 'base', settings: SETTINGS.map(s => setting(s.id, { current: s.value })) };
}
function requestFrom(script) {
  const match = /FromBase64String\('([^']+)'\)/.exec(script);
  assert.ok(match, 'request must use serialized data, not interpolated PowerShell');
  return JSON.parse(Buffer.from(match[1], 'base64').toString('utf8'));
}
function runnerFor(response, calls = []) {
  return async script => {
    assert.ok(script.length <= 11000, 'PowerShell script must fit the Windows encoded command limit');
    const request = requestFrom(script);
    calls.push(request);
    const result = typeof response === 'function' ? response(request) : response;
    return { exitCode: 0, stdout: JSON.stringify({ supported: true, settings: result.settings }), stderr: '' };
  };
}

test('capture preserves original DWORD, inheritance and predefined state; restoration is bounded', async () => {
  const calls = [];
  const service = createNvidiaFeature({ resourcesDir, runPowerShell: runnerFor(initial(), calls) });
  const snapshot = await service.capture();
  assert.deepEqual(snapshot, initial());
  assert.equal(snapshot.settings[0].current, 0xFFFFFFFF);
  assert.equal(snapshot.settings[1].override, false);
  assert.deepEqual(calls, [{ operation: 'capture' }]);
});

test('absent values remain absent in the restoration request', async () => {
  const snapshot = initial();
  snapshot.settings[0] = setting(SETTINGS[0].id, {
    present: false, location: 0, current: 0, predefined: null, isPredefinedValid: false, override: false,
  });
  const calls = [];
  const service = createNvidiaFeature({ resourcesDir, runPowerShell: runnerFor(snapshot, calls) });
  assert.equal(validate(snapshot), true);
  assert.deepEqual(await service.restore(snapshot), { success: true, verified: true });
  assert.deepEqual(calls[0], { operation: 'restore', snapshot });
  const native = fs.readFileSync(path.join(resourcesDir, 'nvidia-drs.ps1'), 'utf8');
  assert.match(native, /if \(\$s\.override\) \{ \$driver\.WriteSetting/);
  assert.match(native, /else \{ \$driver\.DeleteOverride/);
});

test('apply transmits backup and verifies the saved driver state', async () => {
  const calls = [];
  const service = createNvidiaFeature({ resourcesDir, runPowerShell: runnerFor(optimized(), calls) });
  const snapshot = initial();
  assert.deepEqual(await service.apply(snapshot), { success: true, verified: true, restart: false });
  assert.deepEqual(calls[0], { operation: 'apply', snapshot });
  const failed = createNvidiaFeature({ resourcesDir, runPowerShell: runnerFor(initial()) });
  await assert.rejects(failed.apply(snapshot), /não confirmou/);
});

test('restore rejects an effective value mismatch or a lost original custom override', async () => {
  const wrong = initial();
  wrong.settings[0].current = 1;
  const service = createNvidiaFeature({ resourcesDir, runPowerShell: runnerFor(wrong) });
  await assert.rejects(service.restore(initial()), /não confirmou a restauração/);
  const lost = initial();
  lost.settings[0].isCurrentPredefined = true;
  lost.settings[0].override = false;
  const lostService = createNvidiaFeature({ resourcesDir, runPowerShell: runnerFor(lost) });
  await assert.rejects(lostService.restore(initial()), /não confirmou a restauração/);
});

test('invalid ID, unsigned value, incomplete backup and contradictory metadata fail before native invocation', async () => {
  let calls = 0;
  const service = createNvidiaFeature({ resourcesDir, runPowerShell: async () => { calls++; throw new Error('unexpected'); } });
  for (const mutation of [
    s => { s.settings[0].id = 123; },
    s => { s.settings[0].current = -1; },
    s => { s.settings.pop(); },
    s => { s.settings[1].override = true; },
    s => { s.settings[0].type = 1; },
    s => { s.profile = 'custom'; },
    s => { s.settings[0].predefined = null; },
  ]) {
    const snapshot = initial(); mutation(snapshot);
    await assert.rejects(service.apply(snapshot), /inválid/);
    await assert.rejects(service.restore(snapshot), /inválid/);
  }
  assert.equal(calls, 0);
});

test('missing NVIDIA provider reports unsupported, while permission/native errors remain errors', async () => {
  const missing = createNvidiaFeature({ resourcesDir, runPowerShell: async () => { throw new Error('NVAPI_UNAVAILABLE: driver ausente'); } });
  assert.deepEqual(await missing.check(), { supported: false, applied: false, reason: 'GPU ou driver NVIDIA compatível não está disponível neste computador.' });
  await assert.rejects(missing.capture(), /NVAPI_UNAVAILABLE/);
  const denied = createNvidiaFeature({ resourcesDir, runPowerShell: async () => { throw new Error('NVAPI_ERROR: acesso negado'); } });
  await assert.rejects(denied.check(), /acesso negado/);
});

test('invalid native output cannot be reported as an applied feature', async () => {
  for (const output of [
    { exitCode: 0, stdout: '{"supported":false}', stderr: '' },
    { exitCode: 0, stdout: 'driver success text', stderr: '' },
    { exitCode: 3, stdout: '', stderr: 'native failure' },
    { exitCode: 0, stdout: '{"supported":true,"settings":[]}', stderr: '' },
  ]) {
    const service = createNvidiaFeature({ resourcesDir, runPowerShell: async () => output });
    await assert.rejects(service.apply(initial()));
  }
});

test('a pre-write conflict is marked so the manager can avoid overwriting external changes', async () => {
  const service = createNvidiaFeature({ resourcesDir, runPowerShell: async () => { throw new Error('NVAPI_NO_CHANGES: configurações externas mudaram'); } });
  await assert.rejects(service.apply(initial()), error => error.noChanges === true && /NVAPI_NO_CHANGES/.test(error.message));
});

test('public NVDRS layout matches DWORD offsets in the native helper', { skip: process.platform !== 'linux' }, () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'cbn-nvdrs-layout-'));
  try {
    const source = path.join(directory, 'layout.c');
    const executable = path.join(directory, 'layout');
    fs.writeFileSync(source, `#include <stdint.h>
#include <stddef.h>
#include <stdio.h>
#pragma pack(push,4)
typedef struct {uint32_t length;uint8_t data[4096];} Binary;
typedef union {uint32_t dword;Binary binary;uint16_t text[2048];uint64_t qword;} Value;
typedef struct {uint32_t version;uint16_t name[2048];uint32_t id,type,location,currentPredefined,predefinedValid;Value predefined,current;} Setting;
#pragma pack(pop)
int main(){printf("%zu %zu %zu %zu %zu %zu %zu %zu",sizeof(Setting),offsetof(Setting,id),offsetof(Setting,type),offsetof(Setting,location),offsetof(Setting,currentPredefined),offsetof(Setting,predefinedValid),offsetof(Setting,predefined),offsetof(Setting,current));return 0;}
`);
    const build = spawnSync('gcc', ['-Wall', '-Wextra', '-Werror', source, '-o', executable], { encoding: 'utf8' });
    assert.equal(build.status, 0, build.stderr || build.error?.message);
    const run = spawnSync(executable, [], { encoding: 'utf8' });
    assert.equal(run.status, 0, run.stderr);
    assert.equal(run.stdout, '12320 4100 4104 4108 4112 4116 4120 8220');
    const native = fs.readFileSync(path.join(resourcesDir, 'nvidia-drs.ps1'), 'utf8');
    const names = ['Size', 'IdOffset', 'TypeOffset', 'LocationOffset', 'CurrentPredefinedOffset', 'PredefinedValidOffset', 'PredefinedOffset', 'CurrentOffset'];
    const numbers = run.stdout.split(' ').map(Number);
    names.forEach((name, index) => assert.match(native, new RegExp(`${name}=${numbers[index]}(?:[,;])`)));
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});
