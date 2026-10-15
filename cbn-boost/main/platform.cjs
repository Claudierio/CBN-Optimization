'use strict';
const {spawn} = require('node:child_process');
const path = require('node:path');
const {StringDecoder} = require('node:string_decoder');

function psLiteral(value) {
  if (typeof value !== 'string' || value.includes('\0')) throw new Error('Texto inválido.');
  return "'" + value.replaceAll("'", "''") + "'";
}
function assertWindows(platform = process.platform) {
  if (platform !== 'win32') throw new Error('Esta operação precisa do Windows. Nenhuma alteração foi aplicada.');
}
function createRunner({platform = process.platform, spawnProcess = spawn, log = () => {}} = {}) {
  function run(executable, args, {timeoutMs = 120000, onOutput, maxBytes = 4 * 1024 * 1024} = {}) {
    assertWindows(platform);
    return new Promise((resolve, reject) => {
      const child = spawnProcess(executable, args, {windowsHide: true, shell: false, stdio: ['ignore', 'pipe', 'pipe']});
      let stdout = '', stderr = '', bytes = 0, settled = false;
      const decoders = [new StringDecoder('utf8'), new StringDecoder('utf8')];
      const finish = (error, result) => {
        if (settled) return;
        settled = true; clearTimeout(timer);
        if (error) reject(error); else resolve(result);
      };
      const timer = setTimeout(() => {
        child.kill(); finish(new Error('A operação excedeu o tempo limite. Confira o estado no Windows antes de tentar novamente.'));
      }, timeoutMs);
      const collect = (isError) => (data) => {
        bytes += data.length;
        if (bytes > maxBytes) { child.kill(); finish(new Error('Saída da operação excedeu o limite.')); return; }
        const text = decoders[isError ? 1 : 0].write(data);
        if (isError) stderr += text; else stdout += text;
        onOutput?.(text);
      };
      child.stdout.on('data', collect(false)); child.stderr.on('data', collect(true));
      child.on('error', (error) => finish(new Error(`Não foi possível iniciar ${path.basename(executable)}: ${error.message}`)));
      child.on('close', (exitCode) => {
        stdout += decoders[0].end(); stderr += decoders[1].end();
        log('process-exit', {executable: path.basename(executable), exitCode});
        if (exitCode !== 0) {
          const error = new Error((stderr || stdout || `Processo terminou com código ${exitCode}`).trim().slice(-4000));
          Object.assign(error, {exitCode, stdout, stderr});
          finish(error);
        }
        else finish(null, {stdout: stdout.trim(), stderr: stderr.trim(), exitCode});
      });
    });
  }
  async function runPowerShell(script, options = {}) {
    if (typeof script !== 'string' || script.length > 11000) throw new Error('Script inválido ou muito grande.');
    const prefix = "$ErrorActionPreference='Stop'; [Console]::OutputEncoding=New-Object System.Text.UTF8Encoding($false); $OutputEncoding=[Console]::OutputEncoding;\n";
    const command = Buffer.from(prefix + script, 'utf16le').toString('base64');
    const executable = path.win32.join(process.env.SystemRoot || 'C:\\Windows', 'System32', 'WindowsPowerShell', 'v1.0', 'powershell.exe');
    return run(executable, ['-NoLogo', '-NoProfile', '-NonInteractive', '-STA', '-ExecutionPolicy', 'Bypass', '-EncodedCommand', command], options);
  }
  return {run, runPowerShell};
}
module.exports = {psLiteral, assertWindows, createRunner};
