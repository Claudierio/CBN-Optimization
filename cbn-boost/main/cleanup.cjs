'use strict';
// Reconstructed local operations. No scripts are downloaded or accepted from the renderer.
const removeFiles = String.raw`
function Remove-CacheFiles([string]$Root, [datetime]$Before, [string]$Pattern = '*') {
  [long]$Bytes = 0
  if (!(Test-Path -LiteralPath $Root -PathType Container)) { return $Bytes }
  $RootItem = Get-Item -LiteralPath $Root -Force
  if ($RootItem.Attributes -band [IO.FileAttributes]::ReparsePoint) { return $Bytes }
  $Pending = New-Object 'System.Collections.Generic.Stack[string]'
  $Pending.Push($RootItem.FullName)
  while ($Pending.Count -gt 0) {
    $Dir = $Pending.Pop()
    foreach ($Item in @(Get-ChildItem -LiteralPath $Dir -Force -ErrorAction SilentlyContinue)) {
      if ($Item.Attributes -band [IO.FileAttributes]::ReparsePoint) { continue }
      if ($Item.PSIsContainer) { $Pending.Push($Item.FullName); continue }
      if ($Item.LastWriteTime -ge $Before -or $Item.Name -notlike $Pattern) { continue }
      try { $Size = $Item.Length; Remove-Item -LiteralPath $Item.FullName -Force -ErrorAction Stop; $Bytes += $Size } catch { }
    }
  }
  return $Bytes
}
`;
const scripts = Object.freeze({
  temp: removeFiles + String.raw`
$Before = (Get-Date).AddDays(-1)
[long]$Bytes = Remove-CacheFiles $env:TEMP $Before
$SystemTemp = Join-Path $env:SystemRoot 'Temp'
if ($SystemTemp -ne $env:TEMP) { $Bytes += Remove-CacheFiles $SystemTemp $Before }
Write-Output $Bytes
`,
  prefetch: removeFiles + String.raw`
Write-Output (Remove-CacheFiles (Join-Path $env:SystemRoot 'Prefetch') (Get-Date).AddDays(-7) '*.pf')
`,
  thumbnails: removeFiles + String.raw`
Write-Output (Remove-CacheFiles (Join-Path $env:LOCALAPPDATA 'Microsoft\Windows\Explorer') (Get-Date).AddDays(-1) 'thumbcache_*.db')
`,
  recyclebin: String.raw`
$Shell = New-Object -ComObject Shell.Application
$Bin = $Shell.Namespace(0xA)
[long]$Before = 0
foreach ($Item in $Bin.Items()) { $Before += [long]$Item.Size }
Clear-RecycleBin -Force -ErrorAction Stop
[long]$After = 0
foreach ($Item in $Bin.Items()) { $After += [long]$Item.Size }
Write-Output ([Math]::Max(0, $Before - $After))
`,
  'windows-update': removeFiles + String.raw`
$Services = @('wuauserv', 'bits') | ForEach-Object { Get-Service -Name $_ -ErrorAction Stop }
$Running = @($Services | Where-Object Status -eq 'Running' | Select-Object -ExpandProperty Name)
try {
  foreach ($Name in $Running) { Stop-Service -Name $Name -Force -ErrorAction Stop }
  Write-Output (Remove-CacheFiles (Join-Path $env:SystemRoot 'SoftwareDistribution\Download') (Get-Date).AddDays(-1))
} finally {
  foreach ($Name in $Running) { Start-Service -Name $Name -ErrorAction Stop }
}
`,
});
function createCleanupService({runPowerShell, confirm = async () => false}) {
  return {
    getScript(id) {
      if (!Object.hasOwn(scripts, id)) throw new Error('Opção de limpeza desconhecida.');
      return {success: true, script: scripts[id]};
    },
    async run(payload) {
      const id = typeof payload?.name === 'string' ? payload.name.replace(/^cleanup-/, '') : '';
      if (payload?.name !== `cleanup-${id}` || !Object.hasOwn(scripts, id) || payload.script !== scripts[id]) {
        throw new Error('Apenas operações locais do catálogo de limpeza podem ser executadas.');
      }
      if (id === 'recyclebin' && !await confirm('Esvaziar a Lixeira?', 'Os arquivos da Lixeira serão removidos permanentemente.')) throw new Error('Limpeza cancelada.');
      if (id === 'windows-update' && !await confirm('Limpar downloads do Windows Update?', 'Os serviços de atualização serão pausados e retomados. Execute quando não houver atualização em andamento.')) throw new Error('Limpeza cancelada.');
      const result = await runPowerShell(scripts[id], {timeoutMs: 300000});
      if (!/^\d+$/.test(result.stdout.trim())) throw new Error('O Windows não retornou o total de bytes removidos.');
      return {success: true, output: result.stdout.trim()};
    },
  };
}
module.exports = {createCleanupService};
