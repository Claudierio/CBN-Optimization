'use strict';
const {pathToFileURL} = require('node:url');
function trustedSender(event, window, indexFile) {
  return Boolean(window && !window.isDestroyed() && event.sender === window.webContents &&
    event.senderFrame === window.webContents.mainFrame && event.senderFrame.url.split('#')[0] === pathToFileURL(indexFile).href);
}
function allowedExternal(url, links) {
  if (typeof url !== 'string' || url.length > 2048 || !links.has(url)) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && !parsed.username && !parsed.password;
  } catch { return false; }
}
module.exports = {trustedSender, allowedExternal};
