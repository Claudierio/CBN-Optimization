'use strict';

const fs = require('node:fs');
const path = require('node:path');

// Public DWORD settings from NVIDIA/NvApiDriverSettings.h. This intentionally
// does not import the recovered .nip file or change undocumented driver bits.
const SETTINGS = Object.freeze([
  Object.freeze({ id: 0x1057EB71, value: 1, label: 'Energia: preferir desempenho máximo' }),
  Object.freeze({ id: 0x00CE2691, value: 20, label: 'Filtragem de texturas: alto desempenho' }),
]);
const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const uint32 = value => Number.isInteger(value) && value >= 0 && value <= 0xFFFFFFFF;

function validate(snapshot) {
  if (!object(snapshot) || snapshot.version !== 1 || snapshot.profile !== 'base' ||
      !Array.isArray(snapshot.settings) || snapshot.settings.length !== SETTINGS.length) {
    throw new Error('Cópia NVIDIA inválida ou incompleta.');
  }
  snapshot.settings.forEach((entry, index) => {
    if (!object(entry) || entry.id !== SETTINGS[index].id || typeof entry.present !== 'boolean' ||
        entry.type !== 0 || !Number.isInteger(entry.location) || entry.location < 0 || entry.location > 3 ||
        typeof entry.isCurrentPredefined !== 'boolean' || typeof entry.isPredefinedValid !== 'boolean' ||
        typeof entry.override !== 'boolean' || !uint32(entry.current) ||
        !(entry.isPredefinedValid ? uint32(entry.predefined) : entry.predefined === null) ||
        entry.override !== (entry.present && entry.location === 0 && !entry.isCurrentPredefined) ||
        (!entry.present && (entry.current !== 0 || entry.location !== 0 || entry.isCurrentPredefined || entry.isPredefinedValid))) {
      throw new Error('Cópia de configuração NVIDIA inválida.');
    }
  });
  return true;
}

function sameState(actual, expected) {
  return actual.settings.every((found, index) => {
    const previous = expected.settings[index];
    return ['id', 'present', 'type', 'location', 'isCurrentPredefined', 'isPredefinedValid', 'current', 'predefined', 'override']
      .every(key => found[key] === previous[key]);
  });
}

function optimized(snapshot) {
  return snapshot.settings.every((entry, index) => entry.present && entry.current === SETTINGS[index].value);
}

function createNvidiaFeature({ runPowerShell, resourcesDir }) {
  if (typeof runPowerShell !== 'function') throw new TypeError('runPowerShell is required');
  const engine = fs.readFileSync(path.join(resourcesDir, 'nvidia-drs.ps1'), 'utf8');
  const metadata = {
    mode: 'reversible', requiresAdmin: true, restart: false,
    title: 'Otimizar perfil global NVIDIA',
    description: 'NVIDIA: preferir desempenho máximo e filtragem de texturas em alto desempenho no perfil global. Salva e restaura as configurações anteriores.',
    warning: 'Pode aumentar o consumo e a temperatura da GPU e reduzir a qualidade das texturas. Reinicie os jogos abertos após aplicar. Requer GPU e driver NVIDIA compatíveis.',
    localDetails: SETTINGS.map(entry => entry.label).join('; ') + '. Os demais ajustes do perfil original não são importados.',
    implementation: 'reconstructed-from-official-nvapi',
  };

  function build(operation, snapshot) {
    const request = { operation, ...(snapshot ? { snapshot } : {}) };
    const encoded = Buffer.from(JSON.stringify(request), 'utf8').toString('base64');
    const script = `$request = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('${encoded}')) | ConvertFrom-Json\n${engine}`;
    if (script.length > 11000) throw new Error('A operação NVIDIA excede o limite do PowerShell. Nenhuma alteração foi iniciada.');
    return script;
  }

  async function execute(operation, snapshot) {
    let output;
    try { output = await runPowerShell(build(operation, snapshot), { timeoutMs: 120000 }); }
    catch (error) {
      if (operation === 'apply' && /NVAPI_NO_CHANGES:/.test(error.message)) error.noChanges = true;
      throw error;
    }
    if (!output || output.exitCode !== 0) throw new Error(output?.stderr?.trim() || 'A operação NVIDIA falhou.');
    let result;
    try { result = JSON.parse(String(output.stdout || '').replace(/^\uFEFF/, '').trim()); }
    catch { throw new Error('O driver NVIDIA retornou uma resposta inválida.'); }
    if (!object(result) || result.supported !== true) throw new Error('A operação NVIDIA não confirmou suporte do driver.');
    const state = { version: 1, profile: 'base', settings: result.settings };
    validate(state);
    return state;
  }

  async function capture() {
    const snapshot = await execute('capture');
    // Check the restoration command before the parent persists the snapshot.
    build('restore', snapshot);
    return snapshot;
  }
  async function apply(snapshot) {
    validate(snapshot);
    const current = await execute('apply', snapshot);
    if (!optimized(current)) throw new Error('A nova leitura do driver não confirmou as configurações NVIDIA.');
    return { success: true, verified: true, restart: false };
  }
  async function restore(snapshot) {
    validate(snapshot);
    const current = await execute('restore', snapshot);
    if (!sameState(current, snapshot)) throw new Error('A nova leitura do driver não confirmou a restauração NVIDIA. A cópia precisa ser preservada.');
    return { success: true, verified: true };
  }
  async function check(snapshot) {
    if (snapshot) validate(snapshot);
    try {
      const current = await execute('capture');
      return { supported: true, applied: optimized(current) };
    } catch (error) {
      if (/NVAPI_(UNAVAILABLE|UNSUPPORTED)/.test(error.message)) {
        return { supported: false, applied: false, reason: 'GPU ou driver NVIDIA compatível não está disponível neste computador.' };
      }
      throw error;
    }
  }
  return { metadata, capture, apply, restore, check, validate };
}

module.exports = { createNvidiaFeature, SETTINGS, validate };
