'use strict';
const {app, BrowserWindow, ipcMain, dialog, shell, session, Menu} = require('electron');
const fs = require('node:fs');
const path = require('node:path');
const {createRunner} = require('./platform.cjs');
const {createTweaksService} = require('./tweaks.cjs');
const {createCleanupService} = require('./cleanup.cjs');
const {createSystemService} = require('./system.cjs');
const {createAppsService} = require('./apps.cjs');
const {createFeatureHandlers} = require('./features.cjs');
const {trustedSender, allowedExternal} = require('./security.cjs');

app.setName('CBN Boost');
app.setPath('userData', path.join(app.getPath('appData'), 'CBN Boost'));
const dataDir = app.getPath('userData');
const logsDir = path.join(dataDir, 'logs');
const resourcesDir = path.join(__dirname, '..', 'resources');
const indexFile = path.join(__dirname, '..', 'renderer', 'index.html');
let window;
let mutation = Promise.resolve();
let inflightMutation = 0;
function serialize(action) {
  inflightMutation++;
  const next = mutation.then(action, action);
  mutation = next.catch(() => {});
  return next.finally(() => { inflightMutation--; });
}
function log(event, detail = {}) {
  try {
    fs.mkdirSync(logsDir, {recursive: true});
    const file = path.join(logsDir, 'app.log');
    if (fs.existsSync(file) && fs.statSync(file).size > 2 * 1024 * 1024) fs.renameSync(file, path.join(logsDir, 'app.previous.log'));
    fs.appendFileSync(file, JSON.stringify({time: new Date().toISOString(), event, ...detail}) + '\n');
  } catch { /* A log failure must not prevent restoring the user's settings. */ }
}
function emit(channel, ...args) {
  if (window && !window.isDestroyed()) window.webContents.send(channel, ...args);
}
async function confirm(title, message) {
  const {response} = await dialog.showMessageBox(window, {
    type: 'question', title: `CBN Boost — ${title}`, message: title, detail: message,
    buttons: ['Cancelar', 'Continuar'], defaultId: 0, cancelId: 0, noLink: true,
  });
  return response === 1;
}
async function createWindow() {
  Menu.setApplicationMenu(null);
  const {run, runPowerShell} = createRunner({log});
  const featureHandlers = createFeatureHandlers({dataDir, resourcesDir,run,runPowerShell,confirm,emit,
    openSettings: async uri => {
      if(uri !== 'ms-settings:display-advancedgraphics')throw new Error('Página de configurações não permitida.');
      await shell.openExternal(uri);
    },
  });
  const tweaks = createTweaksService({dataDir, resourcesDir, runPowerShell, emit,handlers:featureHandlers});
  const cleanup = createCleanupService({runPowerShell, confirm});
  const system = createSystemService({runPowerShell, confirm});
  const apps = createAppsService({run, dataDir, resourcesDir, confirm, emit});
  const handlers = {
    'get-user-name': () => system.userName(),
    'get-system-info': () => system.info(),
    'tweaks:fetch': () => tweaks.list(),
    'tweak:active': async () => {
      const states = await tweaks.checkAll();
      const failed = states.find(t => t.supported && t.error);
      if (failed) throw new Error(`Não foi possível verificar os ajustes ativos: ${failed.error}`);
      return states.filter(t => t.applied && t.appliedByApp && t.mode !== 'action').map(t => t.id);
    },
    'tweak-states:load': () => JSON.stringify(Object.fromEntries(tweaks.list().map(t => [t.name, t.canRestore]))),
    'tweak-states:save': payload => {
      // The renderer saves optimistic toggles. Durable snapshots remain the source of truth.
      if (typeof payload !== 'string' || payload.length > 16000) throw new Error('Estado da interface inválido.');
      const state = JSON.parse(payload);
      const ids = new Set(tweaks.list().map(t => t.name));
      if (!state || Array.isArray(state) || typeof state !== 'object' || !Object.entries(state).every(([key,value]) => ids.has(key) && typeof value === 'boolean')) throw new Error('Estado da interface inválido.');
      return {success: true};
    },
    'tweak:apply': id => serialize(async () => {
      if (id === 'disable-core-isolation' && !await confirm('Desativar integridade da memória?', 'Este ajuste reduz a proteção do Windows. A mudança só será aplicada se você continuar.')) throw new Error('Ajuste cancelado.');
      return tweaks.apply(id);
    }),
    'tweak:unapply': id => serialize(() => tweaks.unapply(id)),
    'cleanup:fetch-script': id => cleanup.getScript(id),
    'run-powershell': payload => serialize(() => cleanup.run(payload)),
    'handle-apps': payload => serialize(() => apps.handle(payload)),
    'get-restore-points': () => system.restorePoints(),
    'create-restore-point': description => serialize(() => system.createRestorePoint(description)),
    'create-cbnboost-restore-point': () => serialize(() => system.createRestorePoint()),
    'restore-restore-point': sequence => serialize(() => system.restore(sequence)),
    'delete-all-restore-points': () => serialize(() => system.deleteRestorePoints()),
    'delete-old-cbnboost-backups': () => serialize(() => system.deleteRestorePoints({onlyOldCBN: true})),
    'clear-cbnboost-cache': () => serialize(async () => { await window.webContents.session.clearCache(); return {success: true}; }),
    'open-log-folder': async () => {
      fs.mkdirSync(logsDir, {recursive: true});
      const error = await shell.openPath(logsDir);
      if (error) throw new Error(error);
      return {success: true};
    },
    'restart': () => serialize(async () => {
      if (!await confirm('Reiniciar o computador?', 'O Windows reiniciará em 30 segundos. Salve seus arquivos antes de continuar.')) throw new Error('Reinicialização cancelada.');
      await run(path.win32.join(process.env.SystemRoot || 'C:\\Windows', 'System32', 'shutdown.exe'), ['/r', '/t', '30']);
      return {success: true};
    }),
    'open-external': async url => {
      if (!allowedExternal(url, apps.links)) throw new Error('Este endereço não consta do catálogo local.');
      if (!await confirm('Abrir site do aplicativo?', url)) throw new Error('Abertura cancelada.');
      await shell.openExternal(url);
      return {success: true};
    },
  };
  for (const [channel, handler] of Object.entries(handlers)) {
    ipcMain.handle(channel, async (event, payload) => {
      if (!trustedSender(event, window, indexFile)) throw new Error('Origem da solicitação não permitida.');
      try {
        const result = await handler(payload);
        log('ipc-complete', {channel});
        return result;
      } catch (error) { log('ipc-error', {channel, error: error.message}); throw error; }
    });
  }
  session.defaultSession.setPermissionRequestHandler((_contents, _permission, callback) => callback(false));
  session.defaultSession.setPermissionCheckHandler(() => false);
  session.defaultSession.webRequest.onBeforeRequest({urls: ['http://*/*', 'https://*/*', 'ws://*/*', 'wss://*/*']}, (_details, callback) => callback({cancel: true}));
  window = new BrowserWindow({
    title: 'CBN Boost', width: 1240, height: 840, minWidth: 960, minHeight: 680,
    frame: false, backgroundColor: '#0b101a', show: false,
    webPreferences: {preload: path.join(__dirname, 'preload.cjs'), sandbox: true, contextIsolation: true,
      nodeIntegration: false, webSecurity: true, navigateOnDragDrop: false, devTools: !app.isPackaged},
  });
  window.webContents.on('will-navigate', event => event.preventDefault());
  window.webContents.setWindowOpenHandler(() => ({action: 'deny'}));
  window.webContents.on('render-process-gone', (_event, details) => log('renderer-gone', details));
  for (const [channel, action] of Object.entries({
    'window-close': () => window.close(), 'window-minimize': () => window.minimize(),
    'window-maximize': () => window.isMaximized() ? window.unmaximize() : window.maximize(),
  })) ipcMain.on(channel, event => { if (trustedSender(event, window, indexFile)) action(); });
  window.once('ready-to-show', () => window.show());
  window.on('close', event => {
    // Keep an in-progress mutation alive so its verification/rollback can finish.
    if (inflightMutation) {
      event.preventDefault();
      dialog.showMessageBox(window, {type: 'info', title: 'CBN Boost', message: 'Aguarde a operação em andamento antes de fechar o CBN Boost.'});
    }
  });
  window.on('closed', () => { window = null; });
  await window.loadFile(indexFile);
  log('started', {version: app.getVersion(), electron: process.versions.electron});
}

if (!app.requestSingleInstanceLock()) app.quit();
else {
  app.on('second-instance', () => { if (window) { if (window.isMinimized()) window.restore(); window.focus(); } });
  app.whenReady().then(createWindow).catch(error => { log('startup-error', {error: error.stack}); dialog.showErrorBox('CBN Boost', error.message); app.quit(); });
  app.on('window-all-closed', () => app.quit());
}
