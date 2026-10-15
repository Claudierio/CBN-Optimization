'use strict';
// Narrow bridge for the recovered renderer. Never expose ipcRenderer events or arbitrary shell APIs.
const {contextBridge, ipcRenderer} = require('electron');
const invokes = new Set([
  'get-user-name', 'get-system-info', 'tweaks:fetch', 'tweak:active',
  'tweak-states:load', 'tweak-states:save', 'tweak:apply', 'tweak:unapply',
  'cleanup:fetch-script', 'run-powershell', 'handle-apps', 'get-restore-points',
  'create-restore-point', 'create-cbnboost-restore-point', 'restore-restore-point',
  'delete-all-restore-points', 'restart', 'clear-cbnboost-cache',
  'delete-old-cbnboost-backups', 'open-log-folder', 'open-external',
]);
const sends = new Set(['window-close', 'window-minimize', 'window-maximize']);
const events = new Set(['installed-apps-checked', 'install-progress', 'install-complete', 'install-error', 'tweak-changed']);
const listeners = new Map();
function assertChannel(set, channel) {
  if (!set.has(channel)) throw new Error('Canal não permitido.');
}
function remove(channel, callback) {
  assertChannel(events, channel);
  const entries = listeners.get(channel);
  if (!entries) return;
  const wrapped = entries.get(callback);
  if (wrapped) { ipcRenderer.removeListener(channel, wrapped); entries.delete(callback); }
}
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    invoke(channel, payload) { assertChannel(invokes, channel); return ipcRenderer.invoke(channel, payload); },
    send(channel) { assertChannel(sends, channel); ipcRenderer.send(channel); },
    on(channel, callback) {
      assertChannel(events, channel);
      if (typeof callback !== 'function') throw new Error('Listener inválido.');
      remove(channel, callback);
      const wrapped = (_event, ...args) => callback(null, ...args);
      if (!listeners.has(channel)) listeners.set(channel, new Map());
      listeners.get(channel).set(callback, wrapped);
      ipcRenderer.on(channel, wrapped);
      return () => remove(channel, callback);
    },
    removeListener: remove,
    removeAllListeners(channel) {
      assertChannel(events, channel);
      for (const callback of listeners.get(channel)?.keys() || []) remove(channel, callback);
    },
  },
  shell: {openExternal: url => ipcRenderer.invoke('open-external', url)},
});
