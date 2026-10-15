'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const {assertWindows} = require('./platform.cjs');

function parseInstalledExport(text) {
  const data = JSON.parse(text.replace(/^\uFEFF/, ''));
  if (!Array.isArray(data.Sources)) throw new Error('Catálogo de aplicativos retornado pelo WinGet é inválido.');
  const ids = [];
  for (const source of data.Sources) {
    if (!Array.isArray(source.Packages)) throw new Error('Lista de pacotes incompleta no WinGet.');
    for (const item of source.Packages) {
      if (typeof item.PackageIdentifier !== 'string') throw new Error('Identificador de pacote inválido no WinGet.');
      ids.push(item.PackageIdentifier);
    }
  }
  return [...new Set(ids)];
}

function createAppsService({run, dataDir, resourcesDir, confirm, emit = () => {}, platform = process.platform}) {
  const catalog = JSON.parse(fs.readFileSync(path.join(resourcesDir, 'apps.json'), 'utf8'));
  const allowed = new Set(catalog.flatMap(item => item.id));
  const links = new Set(catalog.map(item => item.link).filter(link => typeof link === 'string' && link.startsWith('https://')));
  function validateIds(ids, allowEmpty = false) {
    if (!Array.isArray(ids) || ids.length > catalog.length || (!allowEmpty && !ids.length)) throw new Error('Selecione os aplicativos do catálogo.');
    const flat = ids.flatMap(id => Array.isArray(id) ? id : [id]);
    if (!flat.every(id => typeof id === 'string' && /^[A-Za-z0-9][A-Za-z0-9._+-]{0,150}$/.test(id) && allowed.has(id))) throw new Error('Aplicativo fora do catálogo local.');
    return [...new Set(flat)];
  }
  function executable() {
    assertWindows(platform);
    const local = path.win32.join(process.env.LOCALAPPDATA || '', 'Microsoft', 'WindowsApps', 'winget.exe');
    if (fs.existsSync(local)) return local;
    // Windows resolves this app execution alias through PATH. spawn never uses a shell.
    return 'winget.exe';
  }
  async function installed() {
    fs.mkdirSync(dataDir, {recursive: true});
    const output = path.join(dataDir, `winget-${crypto.randomUUID()}.json`);
    try {
      await run(executable(), ['export', '--output', output, '--accept-source-agreements', '--disable-interactivity'], {timeoutMs: 180000});
      return parseInstalledExport(fs.readFileSync(output, 'utf8')).filter(id => allowed.has(id));
    } finally { fs.rmSync(output, {force: true}); }
  }
  async function handle(payload) {
    if (!payload || !['check-installed', 'install', 'uninstall'].includes(payload.action)) throw new Error('Operação de aplicativos desconhecida.');
    const ids = validateIds(payload.apps, payload.action === 'check-installed');
    if (payload.action === 'check-installed') {
      try {
        const found = await installed();
        const result = {success: true, installed: found.filter(id => ids.includes(id))};
        emit('installed-apps-checked', result);
        return result;
      } catch (error) {
        emit('installed-apps-checked', {success: false, installed: [], error: error.message});
        throw error;
      }
    }
    try {
      const install = payload.action === 'install';
      if (!await confirm(install ? 'Instalar aplicativos?' : 'Desinstalar aplicativos?',
        `${ids.join(', ')}. ${install ? 'Os pacotes serão baixados pelo WinGet. Ao continuar, você aceita os termos dos pacotes e das fontes do WinGet.' : 'Os aplicativos selecionados serão removidos do Windows.'}`)) throw new Error('Operação cancelada.');
      const before = new Set(await installed());
      for (const id of ids) {
        if (before.has(id) === install) { emit('install-progress', `${id}: já ${install ? 'instalado' : 'ausente'}.`); continue; }
        const args = [payload.action, '--id', id, '--exact', '--silent', '--accept-source-agreements', '--disable-interactivity'];
        if (install) args.push('--accept-package-agreements', '--no-upgrade');
        await run(executable(), args, {timeoutMs: 900000});
        const after = new Set(await installed());
        if (after.has(id) !== install) throw new Error(`${id}: o WinGet não confirmou ${install ? 'a instalação' : 'a remoção'}. Consulte o log do WinGet.`);
        emit('install-progress', `${id}: ${install ? 'instalação' : 'remoção'} confirmada.`);
      }
      emit('install-complete');
      return {success: true};
    } catch (error) { emit('install-error', error.message); throw error; }
  }
  return {handle, links, validateIds};
}
module.exports = {createAppsService, parseInstalledExport};
