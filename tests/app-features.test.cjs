'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {createAppFeatures, scriptWithConfig, APPX_CATALOG, GAMING_CATALOG, COPILOT_CATALOG, PROFILE_GUID} = require('../cbn-boost/main/app-features.cjs');
const jsonc = require('../cbn-boost/main/app-feature-jsonc.cjs');

function fixture(t, options = {}) {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'cbn-app-feature-test-'));
  t.after(() => fs.rmSync(temp, {recursive: true, force: true}));
  const dataDir = path.join(temp, 'data'), settings = path.join(temp, 'settings.json');
  const dependencies = {dataDir, terminalPaths: [settings], run: async () => { throw new Error('Unexpected process'); }, runPowerShell: async () => { throw new Error('Unexpected PowerShell'); }, platform: 'win32', confirm: async () => true, ...options};
  return {temp, dataDir, settings, dependencies, features: createAppFeatures(dependencies).handlers};
}
function config(script) {
  const match = /FromBase64String\('([A-Za-z0-9+/=]+)'\)/.exec(script);
  assert.ok(match, 'configuration must be encoded as data');
  return JSON.parse(Buffer.from(match[1], 'base64').toString('utf8'));
}
const output = object => ({stdout: JSON.stringify(object), stderr: '', exitCode: 0});
const optionalItem = (packageName, n = 1) => ({id: `${packageName}_1.0.0.0_x64__8wekyb3d8bbwe_${n}`, packageName, version: '1.0.0.0'});

test('Appx lists use exact optional names and preserve core/gaming dependencies', () => {
  for (const catalog of [APPX_CATALOG, GAMING_CATALOG, COPILOT_CATALOG]) {
    assert.ok(Object.keys(catalog).every(name => !/[?*]/.test(name)));
    for (const preserved of ['Microsoft.WindowsStore', 'Microsoft.SecHealthUI', 'Microsoft.GamingServices', 'Microsoft.VCLibs', 'Microsoft.XboxIdentityProvider']) assert.equal(Object.hasOwn(catalog, preserved), false);
  }
  assert.deepEqual(Object.keys(COPILOT_CATALOG), ['Microsoft.Copilot']);
});
test('a dialog with no selections applies no package removal', async t => {
  let removals = 0;
  const f = fixture(t, {selectPackages: async () => [], runPowerShell: async script => {
    const cfg = config(script);
    if (cfg.operation === 'remove') removals++;
    return output([optionalItem('Microsoft.BingNews')]);
  }});
  await assert.rejects(f.features['debloat-windows'].apply(), /Nenhum aplicativo selecionado/);
  assert.equal(removals, 0);
});
test('Appx selection cannot inject a package outside the inventory', async t => {
  const f = fixture(t, {selectPackages: async () => ['Microsoft.WindowsStore_anything'], runPowerShell: async () => output([optionalItem('Microsoft.BingNews')])});
  await assert.rejects(f.features['debloat-windows'].apply(), /fora do catálogo/);
});
test('Appx removal verifies a fresh inventory and reports actual partial removal', async t => {
  const first = optionalItem('Microsoft.BingNews'), second = optionalItem('Microsoft.BingWeather');
  let calls = 0;
  const f = fixture(t, {selectPackages: async ({packages}) => packages.map(item => item.id), runPowerShell: async script => {
    const cfg = config(script);
    if (cfg.operation === 'remove') { calls++; throw new Error('The second package failed'); }
    return output(calls ? [second] : [first, second]);
  }});
  await assert.rejects(f.features['debloat-windows'].apply(), error => /Remoção parcial confirmada: Notícias/.test(error.message) && !/Remoção parcial confirmada:.*Clima/.test(error.message));
});
test('Appx cannot report success when the package remains installed', async t => {
  const item = optionalItem('Microsoft.Copilot');
  const f = fixture(t, {selectPackages: async () => [item.id], runPowerShell: async script => config(script).operation === 'remove' ? output({verified: true, removed: [item.id]}) : output([item])});
  await assert.rejects(f.features['disable-copilot'].apply(), /continua instalado/);
});
test('JSONC edits preserve strings containing comment markers, comments and trailing commas', () => {
  const raw = '\uFEFF{\n// keep this comment\n"homepage":"https://example.test/*marker*/",\n"profiles":{"defaults":{"font":{"face":"A // B"}},"list":[{"guid":"old","name":"Original"},]},\n"defaultProfile":"old",\n"theme":"dark",\n}\n';
  let changed = jsonc.addProfile(raw, {guid: PROFILE_GUID, name: 'Own'});
  changed = jsonc.setObjectProperty(changed, jsonc.parseJSONC(changed), 'defaultProfile', PROFILE_GUID);
  const parsed = jsonc.parseJSONC(changed).value;
  assert.equal(parsed.profiles.list.length, 2);
  assert.equal(parsed.profiles.defaults.font.face, 'A // B');
  assert.ok(changed.includes('// keep this comment'));
  assert.ok(changed.includes('https://example.test/*marker*/'));
  assert.equal(changed.charCodeAt(0), 0xfeff);
  assert.equal(parsed.defaultProfile, PROFILE_GUID);
});
test('JSONC duplicate keys and malformed tokens are rejected', () => {
  assert.throws(() => jsonc.parseJSONC('{"defaultProfile":"one","defaultProfile":"two"}'), /duplicada/);
  assert.throws(() => jsonc.parseJSONC('{"field":truefalse}'), /Separador/);
  assert.throws(() => jsonc.parseJSONC('{"field":1}garbage'), /objeto JSONC/);
});
test('PowerShell profile restoration preserves later unrelated settings and BOM', async t => {
  const f = fixture(t, {runPowerShell: async script => {
    assert.ok(script.includes('PowerShell\\7\\pwsh.exe'));
    return output({installed: true, executable: 'C:\\Program Files\\PowerShell\\7\\pwsh.exe', version: '7.6.0'});
  }});
  const raw = '\uFEFF{\n// original comment\n"defaultProfile":"old-guid",\n"theme":"dark",\n"profiles":{"list":[{"guid":"old-guid","name":"Original"},]},\n}\n';
  fs.writeFileSync(f.settings, raw);
  const handler = f.features['set-powershell7-default'];
  const snapshot = await handler.capture();
  assert.equal(handler.validate(snapshot), snapshot);
  assert.equal((await handler.apply(snapshot)).verified, true);
  let current = fs.readFileSync(f.settings, 'utf8');
  current = jsonc.setObjectProperty(current, jsonc.parseJSONC(current), 'theme', 'light');
  fs.writeFileSync(f.settings, current);
  await handler.restore(snapshot);
  const restored = fs.readFileSync(f.settings, 'utf8'), parsed = jsonc.parseJSONC(restored).value;
  assert.equal(parsed.defaultProfile, 'old-guid');
  assert.equal(parsed.theme, 'light');
  assert.equal(parsed.profiles.list.length, 1);
  assert.ok(restored.includes('// original comment'));
  assert.equal(restored.charCodeAt(0), 0xfeff);
  assert.ok(fs.readdirSync(path.join(f.dataDir, 'feature-backups')).filter(filename => filename.endsWith('.bak')).length >= 2);
});
test('PowerShell restoration removes defaultProfile if originally absent and preserves customized own profile', async t => {
  const f = fixture(t, {runPowerShell: async () => output({installed: true, executable: 'C:\\Program Files\\PowerShell\\7\\pwsh.exe', version: '7.6.0'})});
  fs.writeFileSync(f.settings, '{"theme":"dark"}');
  const handler = f.features['set-powershell7-default'], snapshot = await handler.capture();
  await handler.apply(snapshot);
  let raw = fs.readFileSync(f.settings, 'utf8'), root = jsonc.parseJSONC(raw), own = jsonc.profilesNode(root).elements[0];
  raw = jsonc.setObjectProperty(raw, own, 'name', 'My customized profile');
  fs.writeFileSync(f.settings, raw);
  await handler.restore(snapshot);
  const restored = jsonc.parseJSONC(fs.readFileSync(f.settings, 'utf8')).value;
  assert.equal(Object.hasOwn(restored, 'defaultProfile'), false);
  assert.equal(restored.profiles.list[0].name, 'My customized profile');
});
test('Terminal changed after capture is rejected before any installation or mutation', async t => {
  let powershellCalls = 0;
  const f = fixture(t, {runPowerShell: async () => { powershellCalls++; throw new Error('unexpected'); }});
  fs.writeFileSync(f.settings, '{"defaultProfile":"old"}');
  const handler = f.features['set-powershell7-default'], snapshot = await handler.capture();
  fs.writeFileSync(f.settings, '{"defaultProfile":"new"}');
  await assert.rejects(handler.apply(snapshot), error => /mudou desde o backup/.test(error.message) && error.noChanges === true);
  assert.equal(powershellCalls, 0);
  assert.equal(fs.readFileSync(f.settings, 'utf8'), '{"defaultProfile":"new"}');
});
test('cancelled Terminal apply tells the manager not to overwrite external settings with rollback', async t => {
  const f = fixture(t, {confirm: async () => false});
  fs.writeFileSync(f.settings, '{"defaultProfile":"original"}');
  const handler = f.features['set-powershell7-default'], snapshot = await handler.capture();
  await assert.rejects(handler.apply(snapshot), error => error.noChanges === true && /cancelada/.test(error.message));
  assert.equal(fs.readFileSync(f.settings, 'utf8'), '{"defaultProfile":"original"}');
});
test('snapshot cannot redirect a Terminal restore to another file', async t => {
  const f = fixture(t);
  fs.writeFileSync(f.settings, '{}');
  const snapshot = await f.features['set-powershell7-default'].capture();
  snapshot.path = path.join(f.temp, 'elsewhere.json');
  assert.throws(() => f.features['set-powershell7-default'].validate(snapshot), /Backup do Terminal inválido/);
});
test('PowerShell install requires a matching WinGet inventory and runnable stable shell before changing Terminal', async t => {
  let installed = false, installCalls = 0;
  const f = fixture(t, {runPowerShell: async () => output(installed ? {installed: true, executable: 'C:\\Users\\tester\\AppData\\Local\\Microsoft\\WindowsApps\\pwsh.exe', version: '7.6.0'} : {installed: false}), run: async (executable, args) => {
    assert.equal(executable, 'winget.exe');
    if (args[0] === 'export') {
      const filename = args[args.indexOf('--output') + 1];
      fs.writeFileSync(filename, JSON.stringify({Sources: [{Packages: installed ? [{PackageIdentifier: 'Microsoft.PowerShell'}] : []}]}));
    } else {
      assert.equal(args[0], 'install');
      assert.equal(args[args.indexOf('--id') + 1], 'Microsoft.PowerShell');
      assert.ok(args.includes('--exact'));
      assert.ok(args.includes('--accept-package-agreements'));
      installCalls++; installed = true;
    }
    return output({});
  }});
  fs.writeFileSync(f.settings, '{"defaultProfile":"old"}');
  const handler = f.features['set-powershell7-default'], snapshot = await handler.capture();
  const result = await handler.apply(snapshot);
  assert.equal(result.verified, true);
  assert.equal(installCalls, 1);
  const profile = jsonc.profilesNode(jsonc.parseJSONC(fs.readFileSync(f.settings, 'utf8'))).elements[0].value;
  assert.equal(profile.commandline, '"C:\\Users\\tester\\AppData\\Local\\Microsoft\\WindowsApps\\pwsh.exe"');
});
test('failed PowerShell install preserves Terminal and reports dependency status separately', async t => {
  const f = fixture(t, {runPowerShell: async () => output({installed: false}), run: async (executable, args) => {
    if (args[0] === 'export') {
      fs.writeFileSync(args[args.indexOf('--output') + 1], JSON.stringify({Sources: [{Packages: []}]}));
      return output({});
    }
    throw new Error('Installer failed');
  }});
  fs.writeFileSync(f.settings, '{"defaultProfile":"old"}');
  const handler = f.features['set-powershell7-default'], snapshot = await handler.capture();
  await assert.rejects(handler.apply(snapshot), error => error.noChanges === true && /instalação do PowerShell foi iniciada separadamente/.test(error.message));
  assert.equal(fs.readFileSync(f.settings, 'utf8'), '{"defaultProfile":"old"}');
});
test('OneDrive removed only through exact WinGet package and false verification rejects', async t => {
  let exportCalls = 0, uninstallCalls = 0;
  const f = fixture(t, {runPowerShell: async () => output({installed: true}), run: async (executable, args) => {
    assert.equal(executable, 'winget.exe');
    if (args[0] === 'export') {
      exportCalls++;
      const filename = args[args.indexOf('--output') + 1];
      fs.writeFileSync(filename, JSON.stringify({Sources: [{Packages: [{PackageIdentifier: 'Microsoft.OneDrive'}]}]}));
    } else {
      uninstallCalls++;
      assert.deepEqual(args.slice(0, 5), ['uninstall', '--id', 'Microsoft.OneDrive', '--exact', '--source']);
      assert.equal(args.includes('--purge'), false);
    }
    return output({});
  }});
  await assert.rejects(f.features['remove-onedrive'].apply(), /remoção do OneDrive não foi confirmada/);
  assert.equal(uninstallCalls, 1);
  assert.equal(exportCalls, 1);
});
test('Disk Cleanup reports a window opened rather than fabricated freed space', async t => {
  const f = fixture(t, {runPowerShell: async script => {
    assert.ok(script.includes("@('/d', $drive)"));
    assert.equal(script.includes('/verylowdisk'), false);
    return output({opened: true, verified: true, processId: 1234, drive: 'C:'});
  }});
  const report = await f.features['run-disk-cleanup'].apply();
  assert.equal(report.opened, true);
  assert.equal(Object.hasOwn(report, 'freedBytes'), false);
  assert.match(report.summary, /Escolha as categorias/);
});
test('all Windows mutating entry points reject Linux before process execution', async t => {
  const f = fixture(t, {platform: 'linux'});
  for (const [id, handler] of Object.entries(f.features)) {
    await assert.rejects(handler.apply(), /precisa do Windows/, id);
  }
});
test('shipped scripts fit the runner and encode malicious text as JSON data', () => {
  for (const filename of ['app-feature-appx.ps1', 'app-feature-cleanmgr.ps1', 'app-feature-select-packages.ps1', 'app-feature-powershell-probe.ps1', 'app-feature-onedrive-inventory.ps1']) {
    const script = scriptWithConfig(filename, {title: "x'; Remove-Item C:\\ -Recurse; #'"});
    assert.ok(script.length < 11000);
    assert.equal(script.includes("x'; Remove-Item"), false);
    assert.equal(config(script).title, "x'; Remove-Item C:\\ -Recurse; #'");
  }
});
