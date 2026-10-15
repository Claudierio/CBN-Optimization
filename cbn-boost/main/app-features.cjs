'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const {assertWindows, psLiteral} = require('./platform.cjs');
const {parseInstalledExport} = require('./apps.cjs');
const jsonc = require('./app-feature-jsonc.cjs');

const APPX_CATALOG = Object.freeze({
  'Microsoft.BingNews': 'Notícias',
  'Microsoft.BingWeather': 'Clima',
  'Microsoft.GetHelp': 'Obter Ajuda',
  'Microsoft.Getstarted': 'Dicas',
  'Microsoft.MicrosoftOfficeHub': 'Microsoft 365 (portal de aplicativos)',
  'Microsoft.MicrosoftSolitaireCollection': 'Microsoft Solitaire Collection',
  'Microsoft.People': 'Pessoas',
  'Microsoft.SkypeApp': 'Skype',
  'Microsoft.Todos': 'Microsoft To Do',
  'Microsoft.WindowsFeedbackHub': 'Hub de Comentários',
  'Microsoft.YourPhone': 'Vincular ao Celular',
  'Microsoft.ZuneMusic': 'Media Player / Groove Music',
  'Microsoft.ZuneVideo': 'Filmes e TV',
  'Microsoft.WindowsMaps': 'Mapas',
  'Clipchamp.Clipchamp': 'Clipchamp',
  'Microsoft.PowerAutomateDesktop': 'Power Automate Desktop',
  'Microsoft.OutlookForWindows': 'Outlook para Windows',
  'Microsoft.MixedReality.Portal': 'Portal de Realidade Misturada',
});
const GAMING_CATALOG = Object.freeze({
  'Microsoft.GamingApp': 'Xbox',
  'Microsoft.XboxApp': 'Xbox Console Companion (legado)',
  'Microsoft.XboxGamingOverlay': 'Xbox Game Bar',
  'Microsoft.XboxGameOverlay': 'Xbox Game Overlay (legado)',
});
const COPILOT_CATALOG = Object.freeze({'Microsoft.Copilot': 'Microsoft Copilot (consumidor)'});
const PROFILE_GUID = '{298c7d77-f278-43ad-b1c9-5a25b9277c65}';
const PROFILE = Object.freeze({guid: PROFILE_GUID, name: 'PowerShell 7 (CBN Boost)', commandline: 'pwsh.exe', hidden: false});
const SCRIPT_DIRECTORY = path.join(__dirname, '..', 'resources');

function scriptWithConfig(filename, config, resourcesDir = SCRIPT_DIRECTORY) {
  const source = fs.readFileSync(path.join(resourcesDir, filename), 'utf8');
  const encoded = Buffer.from(JSON.stringify(config), 'utf8').toString('base64');
  const script = `$cbnConfig=[Text.Encoding]::UTF8.GetString([Convert]::FromBase64String(${psLiteral(encoded)}))|ConvertFrom-Json;\n${source}`;
  if (script.length > 11000) throw new Error('Seleção muito grande para uma operação local.');
  return script;
}
function resultJSON(output) {
  const text = typeof output === 'string' ? output : output?.stdout;
  if (typeof text !== 'string') throw new Error('O Windows não retornou um resultado válido.');
  try { return JSON.parse(text.replace(/^\uFEFF/, '')); }
  catch { throw new Error('Não foi possível confirmar o resultado retornado pelo Windows.'); }
}
async function selectWindowsPackages(runPowerShell, options, resourcesDir = SCRIPT_DIRECTORY) {
  if (!options || typeof options.title !== 'string' || !Array.isArray(options.packages) || options.packages.length > 100) throw new Error('Lista de seleção inválida.');
  const result = resultJSON(await runPowerShell(scriptWithConfig('app-feature-select-packages.ps1', options, resourcesDir), {timeoutMs: 900000}));
  if (!Array.isArray(result) || !result.every(id => typeof id === 'string')) throw new Error('Seleção de aplicativos inválida.');
  return result;
}
function terminalSettingsPaths(localAppData = process.env.LOCALAPPDATA) {
  if (!localAppData) return [];
  return [
    path.win32.join(localAppData, 'Packages', 'Microsoft.WindowsTerminal_8wekyb3d8bbwe', 'LocalState', 'settings.json'),
    path.win32.join(localAppData, 'Microsoft', 'Windows Terminal', 'settings.json'),
    path.win32.join(localAppData, 'Packages', 'Microsoft.WindowsTerminalPreview_8wekyb3d8bbwe', 'LocalState', 'settings.json'),
  ];
}
function readSettings(filename) {
  const stat = fs.lstatSync(filename);
  if (!stat.isFile() || stat.isSymbolicLink() || stat.size > 2 * 1024 * 1024) throw new Error('Configuração do Terminal inválida.');
  const raw = fs.readFileSync(filename);
  // UTF-8 (including BOM) is the format written by Windows Terminal.
  if (raw[0] === 0xff && raw[1] === 0xfe) throw new Error('Configuração UTF-16 não suportada. Salve settings.json como UTF-8 no Windows Terminal.');
  const text = new TextDecoder('utf-8', {fatal: true, ignoreBOM: true}).decode(raw);
  return {raw, text, root: jsonc.parseJSONC(text)};
}
function sha256(data) { return crypto.createHash('sha256').update(data).digest('hex'); }
function atomicSettingsWrite(filename, expectedRaw, text, backupDir, onWritten = () => {}) {
  if (sha256(readSettings(filename).raw) !== sha256(expectedRaw)) throw new Error('O Windows Terminal alterou settings.json durante a operação. Feche o Terminal e tente novamente.');
  jsonc.parseJSONC(text);
  fs.mkdirSync(backupDir, {recursive: true});
  const backup = path.join(backupDir, `terminal-${Date.now()}-${crypto.randomUUID()}.json.bak`);
  fs.writeFileSync(backup, expectedRaw, {flag: 'wx', mode: 0o600});
  const temp = path.join(path.dirname(filename), `.cbn-boost-${crypto.randomUUID()}.tmp`);
  try {
    fs.writeFileSync(temp, text, {flag: 'wx', encoding: 'utf8', mode: 0o600});
    // Detect concurrent changes again immediately before replacing the file.
    if (sha256(readSettings(filename).raw) !== sha256(expectedRaw)) throw new Error('Configuração mudou durante a gravação. Nenhuma alteração foi gravada.');
    fs.renameSync(temp, filename);
    onWritten();
  } finally { fs.rmSync(temp, {force: true}); }
  return backup;
}

function createAppFeatures({dataDir, resourcesDir = SCRIPT_DIRECTORY, runPowerShell, run, confirm = async () => false, selectPackages, emit = () => {}, platform = process.platform, terminalPaths = terminalSettingsPaths()} = {}) {
  if (!dataDir || typeof runPowerShell !== 'function' || typeof run !== 'function') throw new Error('Dependências de recursos do Windows ausentes.');
  const choose = selectPackages || (options => selectWindowsPackages(runPowerShell, options, resourcesDir));
  const executeScript = (filename, config = {}, options) => runPowerShell(scriptWithConfig(filename, config, resourcesDir), options);
  const requireConfirmation = async (title, message) => { if (!await confirm(title, message)) throw new Error('Operação cancelada.'); };
  const actionMetadata = (title, description, warning) => ({title, description, deepDescription: description, mode: 'action', reversible: false, warning});
  const progress = message => emit('app-feature-progress', message);

  async function appxInventory(catalog) {
    const items = resultJSON(await executeScript('app-feature-appx.ps1', {operation: 'inventory', allowed: Object.keys(catalog), selected: []}));
    if (!Array.isArray(items) || !items.every(item => item && typeof item.id === 'string' && item.id.length < 300 && Object.hasOwn(catalog, item.packageName) && typeof item.version === 'string')) throw new Error('Inventário de aplicativos inesperado.');
    if (new Set(items.map(item => item.id)).size !== items.length) throw new Error('Inventário de aplicativos duplicado.');
    return items.map(item => ({...item, name: catalog[item.packageName]}));
  }
  function removeAppxHandler(title, description, catalog) {
    const warning = 'Desinstala somente os aplicativos escolhidos da conta atual. Dados locais dos aplicativos podem ser removidos; reinstalação é feita pela Microsoft Store. Não há desfazer automático.';
    return {
      metadata: actionMetadata(title, description, warning),
      async apply() {
        assertWindows(platform);
        const before = await appxInventory(catalog);
        if (!before.length) return {success: true, verified: true, removed: [], summary: 'Nenhum aplicativo deste catálogo está instalado na conta atual.'};
        const selected = await choose({title, packages: before});
        if (!Array.isArray(selected) || !selected.length) throw new Error('Nenhum aplicativo selecionado. Nenhuma alteração foi aplicada.');
        const ids = [...new Set(selected)];
        const installedIds = new Set(before.map(item => item.id));
        if (ids.length !== selected.length || !ids.every(id => typeof id === 'string' && installedIds.has(id))) throw new Error('Seleção fora do catálogo de aplicativos instalados.');
        await requireConfirmation(`Desinstalar ${ids.length} aplicativo(s)?`, `${before.filter(item => ids.includes(item.id)).map(item => item.name).join(', ')}. ${warning}`);
        try {
          const report = resultJSON(await executeScript('app-feature-appx.ps1', {operation: 'remove', allowed: Object.keys(catalog), selected: ids}, {timeoutMs: 600000}));
          if (report.verified !== true || !Array.isArray(report.removed) || report.removed.length !== ids.length || !ids.every(id => report.removed.includes(id))) throw new Error('A remoção não foi confirmada.');
          const after = await appxInventory(catalog);
          if (after.some(item => ids.includes(item.id))) throw new Error('Um aplicativo selecionado continua instalado.');
        } catch (error) {
          // Package removals cannot be rolled back with the recovered artifact.
          // Report a verified partial result instead of pretending atomic success.
          try {
            const afterIds = new Set((await appxInventory(catalog)).map(item => item.id));
            const removed = before.filter(item => ids.includes(item.id) && !afterIds.has(item.id));
            if (removed.length) error.message += ` Remoção parcial confirmada: ${removed.map(item => item.name).join(', ')}. Esses aplicativos precisam ser reinstalados pela Microsoft Store.`;
          } catch { error.message += ' Não foi possível consultar novamente o inventário; confira os aplicativos no Windows antes de repetir.'; }
          throw error;
        }
        return {success: true, verified: true, removed: ids, summary: `${ids.length} aplicativo(s) removido(s) da conta atual. Reinstalação: Microsoft Store.`};
      },
      async check() { return {supported: true, applied: null, mode: 'action'}; },
    };
  }

  async function wingetInventory() {
    assertWindows(platform); fs.mkdirSync(dataDir, {recursive: true});
    const file = path.join(dataDir, `feature-winget-${crypto.randomUUID()}.json`);
    try {
      await run('winget.exe', ['export', '--output', file, '--source', 'winget', '--accept-source-agreements', '--disable-interactivity'], {timeoutMs: 180000});
      return new Set(parseInstalledExport(fs.readFileSync(file, 'utf8')));
    } finally { fs.rmSync(file, {force: true}); }
  }
  async function probePowerShell() {
    const result = resultJSON(await executeScript('app-feature-powershell-probe.ps1'));
    if (!result || typeof result.installed !== 'boolean') throw new Error('Inventário do PowerShell inesperado.');
    if (result.installed && (typeof result.version !== 'string' || !/^7\./.test(result.version) || typeof result.executable !== 'string' || !/\\pwsh\.exe$/i.test(result.executable))) throw new Error('PowerShell 7 não foi confirmado.');
    return result;
  }
  async function ensurePowerShell(onInstallAttempt = () => {}) {
    let probe = await probePowerShell();
    if (probe.installed) return probe;
    await requireConfirmation('Instalar PowerShell 7?', 'O WinGet baixará e instalará Microsoft.PowerShell, versão estável. Ao continuar, você aceita os termos do pacote e da fonte WinGet. A reversão do perfil do Terminal manterá o PowerShell instalado.');
    const before = await wingetInventory();
    if (!before.has('Microsoft.PowerShell')) {
      progress('Instalando Microsoft.PowerShell pelo WinGet…');
      onInstallAttempt();
      await run('winget.exe', ['install', '--id', 'Microsoft.PowerShell', '--exact', '--source', 'winget', '--silent', '--accept-source-agreements', '--accept-package-agreements', '--disable-interactivity', '--no-upgrade'], {timeoutMs: 900000});
      if (!(await wingetInventory()).has('Microsoft.PowerShell')) throw new Error('O WinGet não confirmou a instalação do PowerShell.');
    }
    probe = await probePowerShell();
    if (!probe.installed) throw new Error('PowerShell 7 estável não foi encontrado após a instalação. O perfil do Terminal não foi alterado.');
    return probe;
  }
  function validateSnapshot(snapshot) {
    if (!snapshot || snapshot.version !== 1 || snapshot.type !== 'terminal-default-profile' || !terminalPaths.includes(snapshot.path) || typeof snapshot.rawBase64 !== 'string' || snapshot.rawBase64.length > 3 * 1024 * 1024 || typeof snapshot.sha256 !== 'string' || !snapshot.defaultProfile || typeof snapshot.defaultProfile.exists !== 'boolean') throw new Error('Backup do Terminal inválido.');
    const raw = Buffer.from(snapshot.rawBase64, 'base64');
    if (sha256(raw) !== snapshot.sha256) throw new Error('Backup do Terminal não confere.');
    const root = jsonc.parseJSONC(new TextDecoder('utf-8', {fatal: true, ignoreBOM: true}).decode(raw));
    const original = jsonc.member(root, 'defaultProfile');
    if (Boolean(original) !== snapshot.defaultProfile.exists || (original && original.node.value !== snapshot.defaultProfile.value)) throw new Error('Estado original do Terminal não confere com o backup.');
    if (original && typeof original.node.value !== 'string') throw new Error('Perfil padrão original inválido.');
    return snapshot;
  }
  function profileRecordPath(snapshot) {
    return path.join(dataDir, 'feature-backups', `terminal-profile-${sha256(`${snapshot.path}\0${snapshot.sha256}`)}.json`);
  }
  function saveProfileRecord(snapshot, profile) {
    const filename = profileRecordPath(snapshot);
    fs.mkdirSync(path.dirname(filename), {recursive: true});
    const temporary = `${filename}.${crypto.randomUUID()}.tmp`;
    try {
      fs.writeFileSync(temporary, JSON.stringify(profile), {flag: 'wx', mode: 0o600});
      fs.renameSync(temporary, filename);
    } finally { fs.rmSync(temporary, {force: true}); }
  }
  const powershellHandler = {
    metadata: {
      title: 'PowerShell 7 como perfil padrão',
      description: 'Instala o PowerShell 7 estável se necessário e cria um perfil próprio no Windows Terminal. Pode restaurar o perfil padrão anterior.',
      deepDescription: 'Edita apenas defaultProfile e adiciona um perfil CBN Boost no settings.json do Windows Terminal. Comentários e outras configurações são preservados. A reversão restaura o defaultProfile anterior e mantém o PowerShell instalado.',
      mode: 'reversible', reversible: true,
      warning: 'Feche o Windows Terminal antes de aplicar. Instalação requer internet e WinGet. Abra o Terminal pelo menos uma vez para criar settings.json. Reabra o Terminal depois da alteração.',
    },
    async capture() {
      assertWindows(platform);
      const filename = terminalPaths.find(candidate => fs.existsSync(candidate));
      if (!filename) throw new Error('Abra o Windows Terminal uma vez para criar sua configuração e tente novamente.');
      const {raw, root} = readSettings(filename);
      const list = jsonc.profilesNode(root);
      if (list?.elements.some(item => String(item.value?.guid).toLowerCase() === PROFILE_GUID)) throw new Error('Já existe um perfil reservado do CBN Boost no Terminal. Restaure a aplicação anterior ou renomeie esse perfil antes de aplicar novamente.');
      const original = jsonc.member(root, 'defaultProfile');
      if (original && typeof original.node.value !== 'string') throw new Error('Perfil padrão original do Terminal inválido.');
      return {version: 1, type: 'terminal-default-profile', path: filename, sha256: sha256(raw), rawBase64: raw.toString('base64'), defaultProfile: original ? {exists: true, value: original.node.value} : {exists: false}};
    },
    validate: validateSnapshot,
    async apply(snapshot) {
      let didWrite = false, installAttempted = false;
      try {
        assertWindows(platform); validateSnapshot(snapshot);
        const original = readSettings(snapshot.path);
        if (sha256(original.raw) !== snapshot.sha256) throw new Error('A configuração do Terminal mudou desde o backup. Nenhuma alteração foi aplicada.');
        await requireConfirmation('Alterar o perfil padrão do Terminal?', `${this.metadata.warning} O perfil padrão anterior será guardado para reversão.`);
        const probe = await ensurePowerShell(() => { installAttempted = true; });
        const profile = {...PROFILE, commandline: `"${probe.executable}"`};
        const beforeWrite = readSettings(snapshot.path);
        if (sha256(beforeWrite.raw) !== snapshot.sha256) throw new Error('O Terminal mudou durante a instalação. O perfil padrão não foi alterado.');
        let edited = jsonc.addProfile(beforeWrite.text, profile);
        edited = jsonc.setObjectProperty(edited, jsonc.parseJSONC(edited), 'defaultProfile', PROFILE_GUID);
        // The profile record is durable before the settings mutation. It lets a
        // later reversal preserve a profile subsequently customized by the user.
        saveProfileRecord(snapshot, profile);
        const backup = atomicSettingsWrite(snapshot.path, beforeWrite.raw, edited, path.join(dataDir, 'feature-backups'), () => { didWrite = true; });
        const check = readSettings(snapshot.path).root;
        if (check.value.defaultProfile !== PROFILE_GUID || !jsonc.profilesNode(check)?.elements.some(item => item.value.guid === PROFILE_GUID && item.value.commandline === profile.commandline)) throw new Error('O perfil padrão não foi confirmado. Use o backup para revisar a configuração.');
        return {success: true, verified: true, backup, version: probe.version, summary: 'PowerShell 7 definido como perfil padrão. Feche e reabra o Windows Terminal.'};
      } catch (error) {
        // The manager must not run rollback against a newer external Terminal
        // choice when this operation never replaced the settings file.
        if (!didWrite) error.noChanges = true;
        if (installAttempted) error.message += ' A instalação do PowerShell foi iniciada separadamente e não será desfeita; confira seu estado no Windows.';
        throw error;
      }
    },
    async check(snapshot) {
      assertWindows(platform);
      if (!snapshot) return {supported: terminalPaths.some(filename => fs.existsSync(filename)), applied: false};
      validateSnapshot(snapshot);
      const root = readSettings(snapshot.path).root;
      const applied = root.value.defaultProfile === PROFILE_GUID && Boolean(jsonc.profilesNode(root)?.elements.some(item => item.value.guid === PROFILE_GUID && item.value.name === PROFILE.name && /^"[A-Za-z]:\\.+\\pwsh\.exe"$/i.test(item.value.commandline || '')));
      return {supported: true, applied};
    },
    async restore(snapshot) {
      assertWindows(platform); validateSnapshot(snapshot);
      const current = readSettings(snapshot.path);
      if (current.root.value.defaultProfile !== PROFILE_GUID) throw new Error('O perfil padrão foi alterado fora do CBN Boost. A reversão não sobrescreverá sua escolha atual.');
      let edited = current.text;
      try {
        const expected = JSON.parse(fs.readFileSync(profileRecordPath(snapshot), 'utf8'));
        if (expected.guid === PROFILE_GUID && expected.name === PROFILE.name && /^"[A-Za-z]:\\.+\\pwsh\.exe"$/i.test(expected.commandline || '') && expected.hidden === false && Object.keys(expected).length === 4) edited = jsonc.removeProfile(edited, PROFILE_GUID, expected);
      } catch { /* Restore defaultProfile even if the optional profile record is absent. */ }
      const root = jsonc.parseJSONC(edited);
      edited = snapshot.defaultProfile.exists ? jsonc.setObjectProperty(edited, root, 'defaultProfile', snapshot.defaultProfile.value) : jsonc.removeObjectProperty(edited, root, 'defaultProfile');
      const backup = atomicSettingsWrite(snapshot.path, current.raw, edited, path.join(dataDir, 'feature-backups'));
      const check = readSettings(snapshot.path).root;
      const restored = snapshot.defaultProfile.exists ? check.value.defaultProfile === snapshot.defaultProfile.value : !jsonc.member(check, 'defaultProfile');
      if (!restored) throw new Error('A reversão do perfil padrão não foi confirmada.');
      return {success: true, verified: true, backup, summary: 'Perfil padrão anterior restaurado. O PowerShell 7 continua instalado.'};
    },
  };
  const handlers = {
    'debloat-windows': removeAppxHandler('Remoção seletiva de aplicativos', 'Escolha os aplicativos opcionais instalados que deseja remover. Microsoft Store, Windows Security, fotos, calculadora e componentes do sistema são preservados.', APPX_CATALOG),
    'remove-gaming-apps': removeAppxHandler('Remover aplicativos Xbox', 'Escolha Xbox, Game Bar e overlays para remover da sua conta. Gaming Services, jogos instalados, drivers e serviços são preservados.', GAMING_CATALOG),
    'disable-copilot': removeAppxHandler('Desinstalar Microsoft Copilot', 'Remove o aplicativo consumidor Microsoft.Copilot da conta atual. Não altera Copilot do Microsoft 365, do Edge ou políticas corporativas; uma atualização pode reinstalar o aplicativo.', COPILOT_CATALOG),
    'remove-onedrive': {
      metadata: actionMetadata('Desinstalar cliente OneDrive', 'Desinstala Microsoft.OneDrive pelo WinGet e verifica a remoção. Pastas e arquivos sincronizados não são apagados nem movidos.', 'A sincronização e os downloads de arquivos somente online pararão. Confira que os arquivos desejados foram baixados antes de continuar. A reinstalação é feita separadamente.'),
      async apply() {
        assertWindows(platform);
        await requireConfirmation('Desinstalar OneDrive?', this.metadata.warning);
        const installed = await wingetInventory();
        const before = resultJSON(await executeScript('app-feature-onedrive-inventory.ps1'));
        if (typeof before.installed !== 'boolean') throw new Error('Inventário OneDrive inesperado.');
        if (!installed.has('Microsoft.OneDrive')) {
          if (before.installed) throw new Error('OneDrive está instalado, mas não foi reconhecido pelo WinGet. Desinstale-o em Configurações > Aplicativos. Nenhum arquivo foi alterado.');
          return {success: true, verified: true, removed: [], summary: 'O cliente Microsoft OneDrive já está ausente.'};
        }
        await run('winget.exe', ['uninstall', '--id', 'Microsoft.OneDrive', '--exact', '--source', 'winget', '--silent', '--accept-source-agreements', '--disable-interactivity'], {timeoutMs: 600000});
        const after = resultJSON(await executeScript('app-feature-onedrive-inventory.ps1'));
        if (typeof after.installed !== 'boolean' || after.installed || (await wingetInventory()).has('Microsoft.OneDrive')) throw new Error('A remoção do OneDrive não foi confirmada. Confira o log do WinGet.');
        return {success: true, verified: true, removed: ['Microsoft.OneDrive'], summary: 'Cliente OneDrive desinstalado. Seus arquivos e pastas não foram apagados pelo CBN Boost.'};
      },
      async check() { return {supported: true, applied: null, mode: 'action'}; },
    },
    'run-disk-cleanup': {
      metadata: actionMetadata('Abrir Limpeza de Disco', 'Abre a ferramenta nativa do Windows. Você escolhe as categorias e confirma a limpeza na janela do Windows.', 'Excluir arquivos pela Limpeza de Disco é permanente. O CBN Boost confirma apenas que a ferramenta abriu e não calcula espaço liberado.'),
      async apply() {
        assertWindows(platform);
        await requireConfirmation('Abrir a Limpeza de Disco?', this.metadata.warning);
        const report = resultJSON(await executeScript('app-feature-cleanmgr.ps1'));
        if (report.opened !== true || report.verified !== true || !Number.isInteger(report.processId) || !/^[A-Za-z]:$/.test(report.drive || '')) throw new Error('Não foi possível confirmar a abertura da Limpeza de Disco.');
        return {success: true, verified: true, opened: true, summary: `Limpeza de Disco aberta para ${report.drive}. Escolha as categorias e confirme na janela do Windows.`};
      },
      async check() { return {supported: true, applied: null, mode: 'action'}; },
    },
    'set-powershell7-default': powershellHandler,
  };
  return {handlers, validateSnapshot};
}
module.exports = {createAppFeatures, selectWindowsPackages, terminalSettingsPaths, scriptWithConfig, resultJSON, APPX_CATALOG, GAMING_CATALOG, COPILOT_CATALOG, PROFILE_GUID};
