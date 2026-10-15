'use strict';

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { definitions, unavailable } = require('./tweak-definitions.cjs');
const POWER_ID = 'ultimate-performance-plan';
const POWER_TEMPLATE = 'e9a42b02-d5df-448d-aa00-03f14749eb61';
const GUID = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/;
const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);

function validateEntry(entry, expected) {
  if (!object(entry) || entry.hive !== expected.hive || entry.path !== expected.path || entry.name !== expected.name ||
      typeof entry.existed !== 'boolean' || typeof entry.keyExisted !== 'boolean' || (entry.existed && !entry.keyExisted)) {
    throw new Error('Cópia ou resposta de registro inválida. Nenhum valor anterior será presumido.');
  }
  if (entry.missingKeys !== undefined && (!Array.isArray(entry.missingKeys) || entry.missingKeys.some(key =>
    typeof key !== 'string' || !key || !(entry.path === key || entry.path.startsWith(`${key}\\`))))) {
    throw new Error('Cópia de caminhos de registro inválida.');
  }
  if (!entry.existed) return;
  const data = entry.data;
  const valid = ['String', 'ExpandString'].includes(entry.kind) ? typeof data === 'string'
    : entry.kind === 'DWord' ? Number.isInteger(data) && data >= -2147483648 && data <= 2147483647
    : entry.kind === 'QWord' ? typeof data === 'string' && /^-?\d+$/.test(data) && BigInt(data) >= -(2n ** 63n) && BigInt(data) < 2n ** 63n
    : ['Binary', 'None'].includes(entry.kind) ? Array.isArray(data) && data.every(byte => Number.isInteger(byte) && byte >= 0 && byte <= 255)
    : entry.kind === 'MultiString' ? Array.isArray(data) && data.every(value => typeof value === 'string')
    : false;
  if (!valid) throw new Error('Tipo ou valor de registro inválido na cópia de restauração.');
}

function createTweaksService({ dataDir, resourcesDir, runPowerShell, emit = () => {}, handlers = {} }) {
  if (typeof runPowerShell !== 'function') throw new TypeError('runPowerShell is required');
  const tweaksDir = path.join(__dirname, '..', 'tweaks');
  const catalog = JSON.parse(fs.readFileSync(path.join(tweaksDir, 'registry.json'), 'utf8')).tweaks;
  const statePath = path.join(dataDir, 'tweak-snapshots.json');
  const registryEngine = fs.readFileSync(path.join(resourcesDir, 'registry-engine.ps1'), 'utf8');
  const metadata = new Map(catalog.map(item => [item.id, {
    ...item,
    ...JSON.parse(fs.readFileSync(path.join(tweaksDir, item.id, 'meta.json'), 'utf8')),
  }]));
  let state = { version: 1, tweaks: {} };
  let busy = false;
  if (fs.existsSync(statePath)) {
    // A damaged backup must never be silently replaced with an empty backup.
    state = JSON.parse(fs.readFileSync(statePath, 'utf8'));
    if (!object(state) || state.version !== 1 || !object(state.tweaks)) {
      throw new Error('Arquivo de restauração inválido. Preserve tweak-snapshots.json antes de continuar.');
    }
    for (const [id, backup] of Object.entries(state.tweaks)) {
      if (!metadata.has(id) || !supported(id) || !object(backup) ||
          !['pending', 'applied', 'restoring', 'recovery-required'].includes(backup.status)) {
        throw new Error('Arquivo de restauração contém um ajuste inválido. Preserve tweak-snapshots.json.');
      }
      if (handlers[id]) {
        if (handlers[id].metadata.mode !== 'reversible') throw new Error('Uma ação não pode ter cópia de ajuste persistida.');
        handlers[id].validate(backup.snapshot);
      } else if (id === POWER_ID) validatePower(backup.snapshot, true);
      else {
        if (!Array.isArray(backup.snapshot) || backup.snapshot.length !== definitions[id].length) throw new Error('Cópia de registro incompleta.');
        backup.snapshot.forEach((entry, index) => validateEntry(entry, definitions[id][index]));
      }
    }
  }

  function save() {
    fs.mkdirSync(dataDir, { recursive: true });
    const temporary = `${statePath}.tmp`;
    const fd = fs.openSync(temporary, 'w', 0o600);
    try { fs.writeFileSync(fd, JSON.stringify(state, null, 2)); fs.fsyncSync(fd); }
    finally { fs.closeSync(fd); }
    fs.renameSync(temporary, statePath);
  }

  function itemFor(id) {
    if (typeof id !== 'string' || !metadata.has(id)) throw new Error('Ajuste desconhecido.');
    return metadata.get(id);
  }
  function supported(id) { return Boolean(definitions[id]) || id === POWER_ID || Boolean(handlers[id]); }
  function isAction(id) { return handlers[id]?.metadata.mode === 'action'; }
  function verifyCustom(result) {
    if (!result || result.success !== true || result.verified !== true) throw new Error('A operação não retornou confirmação verificável.');
    return result;
  }
  function requireSupported(id) {
    itemFor(id);
    if (!supported(id)) throw new Error(unavailable[id] || 'Script não recuperado.');
  }
  function buildScript(request, body) {
    const encoded = Buffer.from(JSON.stringify(request), 'utf8').toString('base64');
    const script = `$ErrorActionPreference = 'Stop'\n$request = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('${encoded}')) | ConvertFrom-Json\n${body}`;
    if (script.length > 11000) throw new Error('A operação de registro excede o limite de tamanho do PowerShell. Nenhuma alteração foi iniciada.');
    return script;
  }
  async function execute(request, body) {
    const script = buildScript(request, body);
    const output = await runPowerShell(script, { timeoutMs: 120000 });
    if (!output || output.exitCode !== 0) throw new Error(output?.stderr?.trim() || `PowerShell falhou (código ${output?.exitCode ?? 'desconhecido'}).`);
    const raw = String(output.stdout || '').replace(/^\uFEFF/, '').trim();
    try { return JSON.parse(raw); }
    catch { throw new Error(`PowerShell retornou uma resposta inválida: ${raw.slice(0, 240)}`); }
  }
  async function registry(operation, entries) {
    const result = await execute({ operation, entries }, registryEngine);
    if (!Array.isArray(result) || result.length !== entries.length) throw new Error('Resposta de registro incompleta.');
    result.forEach((entry, index) => validateEntry(entry, entries[index]));
    return result;
  }
  function matches(actual, expected, restoring = false) {
    return expected.every((entry, i) => {
      const found = actual[i];
      if (!found || found.hive !== entry.hive || found.path !== entry.path || found.name !== entry.name) return false;
      if (restoring && !entry.existed) return found.existed === false;
      return found.existed === true && found.kind === entry.kind && JSON.stringify(found.data) === JSON.stringify(entry.data);
    });
  }

  function validatePower(snapshot, restoring = false) {
    if (!object(snapshot) || !GUID.test(snapshot.activeGuid || '') ||
        (restoring && (!GUID.test(snapshot.createdGuid || '') || snapshot.activeGuid === snapshot.createdGuid))) {
      throw new Error('Cópia ou resposta do plano de energia inválida.');
    }
  }
  async function power(operation, backup = {}) {
    const result = await execute({ operation, ...backup }, `
function Run-PowerCfg($arguments) {
    $output = & "$env:SystemRoot\\System32\\powercfg.exe" @arguments 2>&1
    if ($LASTEXITCODE -ne 0) { throw ($output -join "\\n") }
    return ($output -join "\\n")
}
function Active-Guid {
    $text = Run-PowerCfg @('/getactivescheme')
    $match = [regex]::Match($text, '[a-fA-F0-9]{8}(-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}')
    if (-not $match.Success) { throw 'Cannot read active power plan' }
    return $match.Value.ToLowerInvariant()
}
switch ($request.operation) {
    'capture' { $result = @{activeGuid=(Active-Guid)} }
    'apply' {
        Run-PowerCfg @('/duplicatescheme', '${POWER_TEMPLATE}', [string]$request.createdGuid) | Out-Null
        Run-PowerCfg @('/changename', [string]$request.createdGuid, 'CBN Boost Ultimate Performance') | Out-Null
        Run-PowerCfg @('/setactive', [string]$request.createdGuid) | Out-Null
        $result = @{activeGuid=(Active-Guid)}
    }
    'restore' {
        Run-PowerCfg @('/setactive', [string]$request.activeGuid) | Out-Null
        $plans = Run-PowerCfg @('/list')
        if ($plans -match [regex]::Escape([string]$request.createdGuid)) {
            Run-PowerCfg @('/delete', [string]$request.createdGuid) | Out-Null
        }
        $remaining = Run-PowerCfg @('/list')
        if ($remaining -match [regex]::Escape([string]$request.createdGuid)) { throw 'Created power plan was not removed' }
        $result = @{activeGuid=(Active-Guid)}
    }
    default { throw 'Invalid power operation' }
}
$result | ConvertTo-Json -Compress
`);
    validatePower(result);
    return result;
  }

  function list() {
    return catalog.map(original => {
      const id = original.id;
      const item = metadata.get(id);
      const snapshot = state.tweaks[id];
      return {
        ...item, id, name: id,
        ...handlers[id]?.metadata,
        available: supported(id), supported: supported(id),
        reason: supported(id) ? null : (unavailable[id] || 'Script não recuperado.'),
        implementation: handlers[id] || id === 'disable-location-tracking' ? 'researched-local-implementation' : supported(id) ? (id === 'enable-hags' ? 'reconstructed-from-shipped-script' : 'reconstructed-from-metadata') : 'unavailable',
        localImplementation: Boolean(handlers[id]) || id === 'disable-location-tracking',
        mode: isAction(id) ? 'action' : 'reversible',
        reversible: supported(id) && !isAction(id),
        restart: Boolean(handlers[id]?.metadata.restart ?? (item.restart || definitions[id])),
        requiresAdmin: handlers[id]?.metadata.requiresAdmin ?? (id === POWER_ID || Boolean(definitions[id]?.some(entry => entry.hive === 'LocalMachine'))),
        appliedByApp: snapshot?.status === 'applied',
        canRestore: Boolean(snapshot),
        recoveryRequired: Boolean(snapshot && snapshot.status !== 'applied'),
        warning: handlers[id]?.metadata.warning || (id === 'disable-core-isolation' ? 'Desativa a integridade da memória e reduz a proteção do Windows.' : null),
        localDetails: handlers[id]?.metadata.localDetails || (id === 'disable-location-tracking' ? 'Desativa somente a localização por política. Não altera telemetria ou Windows Update.' : id === 'set-win32-priority-separation' ? 'Reconstrução: define Win32PrioritySeparation em 38 decimal (0x26). O valor original remoto é desconhecido.' : null),
        obsolete: id === 'disable-wifi-sense',
      };
    });
  }

  async function check(id) {
    itemFor(id);
    const backup = state.tweaks[id];
    if (!supported(id)) return { id, supported: false, applied: null, appliedByApp: false, canRestore: false, reason: unavailable[id] };
    if (isAction(id)) return {id, supported: true, applied: false, appliedByApp: false, canRestore: false, mode: 'action'};
    let applied;
    if (handlers[id]) {
      // Only settings applied by this app count as active; optional drivers or tools
      // absent from the system must not break unrelated status reads.
      if (!backup) return {id, supported: true, applied: false, appliedByApp: false, canRestore: false};
      const current = await handlers[id].check(backup.snapshot);
      if (current.supported === false) return {id, ...current, appliedByApp: false, canRestore: true, recoveryRequired: true};
      applied = current.applied === true;
    } else if (id === POWER_ID) {
      const current = await power('capture');
      applied = backup ? current.activeGuid === backup.snapshot.createdGuid : current.activeGuid === POWER_TEMPLATE;
    } else {
      applied = matches(await registry('capture', definitions[id]), definitions[id]);
    }
    return { id, supported: true, applied, appliedByApp: backup?.status === 'applied', canRestore: Boolean(backup), recoveryRequired: Boolean(backup && backup.status !== 'applied') };
  }

  async function restoreBackup(id, backup) {
    if (handlers[id]) {
      handlers[id].validate(backup.snapshot);
      verifyCustom(await handlers[id].restore(backup.snapshot));
    } else if (id === POWER_ID) {
      const current = await power('restore', backup.snapshot);
      if (current.activeGuid !== backup.snapshot.activeGuid) throw new Error('Não foi possível verificar a restauração do plano de energia.');
    } else {
      const current = await registry('restore', backup.snapshot);
      if (!matches(current, backup.snapshot, true)) throw new Error('Não foi possível verificar a restauração do registro.');
    }
  }

  async function exclusive(operation) {
    if (busy) throw new Error('Outro ajuste está em execução. Aguarde a conclusão.');
    busy = true;
    try { return await operation(); } finally { busy = false; }
  }
  async function apply(id, options = {}) {
    requireSupported(id);
    return exclusive(async () => {
      if (isAction(id)) {
        const result = verifyCustom(await handlers[id].apply(options));
        emit('feature-completed', {id, summary: result.summary});
        return {...result, id, action: 'run'};
      }
      const previous = state.tweaks[id];
      if (previous) {
        if (previous.status === 'applied' && (await check(id)).applied) return { success: true, id, action: 'apply', verified: true, alreadyApplied: true };
        throw new Error('Existe uma cópia de restauração deste ajuste. Restaure antes de aplicar novamente.');
      }
      if (id === 'disable-location-tracking') {
        const support = await execute({operation:'policy-support'}, "@{edition=[string](Get-ItemProperty 'HKLM:\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion' -ErrorAction Stop).EditionID} | ConvertTo-Json -Compress");
        if (typeof support.edition !== 'string' || !/^(Professional|Enterprise|Education|IoTEnterprise)/.test(support.edition)) throw new Error('A política de localização exige uma edição Pro, Enterprise, Education ou IoT compatível. A edição deste Windows não foi confirmada.');
      }
      const snapshot = handlers[id] ? await handlers[id].capture(options) : id === POWER_ID
        ? { ...await power('capture'), createdGuid: crypto.randomUUID() }
        : await registry('capture', definitions[id]);
      // Never apply an adjustment whose previous values cannot be transmitted
      // back to PowerShell within the same command-size limit for restoration.
      if (handlers[id]) handlers[id].validate(snapshot);
      else if (id === POWER_ID) validatePower(snapshot, true);
      else buildScript({ operation: 'restore', entries: snapshot }, registryEngine);
      const backup = { status: 'pending', capturedAt: new Date().toISOString(), snapshot };
      state.tweaks[id] = backup;
      // Persist original values before the first write to Windows. If this fails,
      // no Windows write occurs and the in-memory state must remain retryable.
      try { save(); } catch (error) { delete state.tweaks[id]; throw error; }
      try {
        let result;
        if (handlers[id]) {
          result = verifyCustom(await handlers[id].apply(snapshot, options));
        } else if (id === POWER_ID) {
          const current = await power('apply', snapshot);
          if (current.activeGuid !== snapshot.createdGuid) throw new Error('O novo plano de energia não foi ativado.');
        } else if (!matches(await registry('apply', definitions[id]), definitions[id])) {
          throw new Error('A leitura do registro não confirmou a alteração.');
        }
        backup.status = 'applied';
        if (result?.summary) backup.summary = result.summary;
        save();
      } catch (error) {
        if (error.noChanges === true) {
          // The provider proved that no managed setting was written. Do
          // not roll back an external change made after capture.
          delete state.tweaks[id];
          try { save(); } catch (saveError) { throw new Error(`${error.message} Falha ao descartar a cópia pendente: ${saveError.message}`); }
          throw error;
        }
        backup.status = 'recovery-required';
        backup.lastError = error.message;
        try {
          await restoreBackup(id, backup);
          delete state.tweaks[id];
          save();
        } catch (rollbackError) {
          state.tweaks[id] = backup;
          backup.rollbackError = rollbackError.message;
          save();
          throw new Error(`${error.message} Restauração incompleta: ${rollbackError.message}. A cópia foi preservada; use Restaurar.`);
        }
        throw new Error(`${error.message} Os valores anteriores foram restaurados.`);
      }
      emit('tweak-changed', { id, applied: true });
      return { success: true, id, action: 'apply', verified: true, summary: backup.summary, restart: Boolean(handlers[id]?.metadata.restart ?? (metadata.get(id).restart || definitions[id])) };
    });
  }

  async function unapply(id) {
    requireSupported(id);
    if (isAction(id)) throw new Error('Esta ação não é um ajuste reversível. Nenhuma restauração automática foi prometida.');
    return exclusive(async () => {
      const backup = state.tweaks[id];
      if (!backup) throw new Error('Não existe cópia dos valores anteriores. Este ajuste não foi aplicado pelo CBN Boost.');
      backup.status = 'restoring';
      save();
      try { await restoreBackup(id, backup); }
      catch (error) {
        backup.status = 'recovery-required';
        backup.lastError = error.message;
        save();
        throw error;
      }
      delete state.tweaks[id];
      try { save(); }
      catch (error) { state.tweaks[id] = backup; backup.status = 'recovery-required'; throw error; }
      emit('tweak-changed', { id, restored: true });
      return { success: true, id, action: 'unapply', verified: true };
    });
  }

  async function checkAll() {
    const results = new Map();
    // Read several registry entries in each process, staying below the Windows
    // encoded-command limit even as reconstructed definitions grow.
    const batches = [];
    let batch = [];
    for (const item of catalog.filter(item => definitions[item.id])) {
      const candidate = [...batch, item.id];
      const request = { operation: 'capture', entries: candidate.flatMap(id => definitions[id]) };
      const encodedLength = Buffer.from(JSON.stringify(request), 'utf8').toString('base64').length;
      if (batch.length && encodedLength + registryEngine.length + 220 > 10500) {
        batches.push(batch); batch = [item.id];
      } else batch = candidate;
    }
    if (batch.length) batches.push(batch);
    for (const ids of batches) {
      try {
        const values = await registry('capture', ids.flatMap(id => definitions[id]));
        let offset = 0;
        for (const id of ids) {
          const entries = definitions[id];
          const backup = state.tweaks[id];
          results.set(id, { id, supported: true, applied: matches(values.slice(offset, offset + entries.length), entries),
            appliedByApp: backup?.status === 'applied', canRestore: Boolean(backup), recoveryRequired: Boolean(backup && backup.status !== 'applied') });
          offset += entries.length;
        }
      } catch (error) {
        for (const id of ids) results.set(id, { id, supported: true, applied: null, error: error.message,
          appliedByApp: false, canRestore: Boolean(state.tweaks[id]), recoveryRequired: Boolean(state.tweaks[id]) });
      }
    }
    for (const item of catalog.filter(item => !definitions[item.id])) {
      try { results.set(item.id, await check(item.id)); }
      catch (error) { results.set(item.id, { id: item.id, supported: supported(item.id), applied: null, error: error.message,
        appliedByApp: false, canRestore: Boolean(state.tweaks[item.id]), recoveryRequired: Boolean(state.tweaks[item.id]) }); }
    }
    return catalog.map(item => results.get(item.id));
  }
  return { list, check, checkAll, apply, unapply };
}

module.exports = { createTweaksService };
