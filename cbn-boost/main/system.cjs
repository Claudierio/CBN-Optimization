'use strict';
const os = require('node:os');
const {psLiteral} = require('./platform.cjs');
const systemScript = String.raw`
$CPU = Get-CimInstance Win32_Processor | Select-Object -First 1
$OS = Get-CimInstance Win32_OperatingSystem
$RAM = @(Get-CimInstance Win32_PhysicalMemory)
$GPU = @(Get-CimInstance Win32_VideoController)
$Disk = Get-CimInstance Win32_DiskDrive | Select-Object -First 1
$Version = Get-ItemProperty 'HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion'
$Types = @{20='DDR';21='DDR2';24='DDR3';26='DDR4';34='DDR5'}
$MemoryType = if ($RAM.Count -and $Types.ContainsKey([int]$RAM[0].SMBIOSMemoryType)) { $Types[[int]$RAM[0].SMBIOSMemoryType] } else { 'Não informado' }
[pscustomobject]@{
 cpu_model=$CPU.Name; cpu_cores=[int]$CPU.NumberOfCores
 memory_total=[long](($RAM | Measure-Object Capacity -Sum).Sum); memory_type=$MemoryType
 gpu_model=($GPU.Name -join ', '); vram=if($GPU.Count) { [long]$GPU[0].AdapterRAM } else { 0 }
 disk_model=$Disk.Model; disk_size=[long]$Disk.Size; os=$OS.Caption
 os_version=([string]$Version.DisplayVersion + ' (build ' + $OS.BuildNumber + ')')
 windowsBuild=[int]$OS.BuildNumber; windowsEdition=[string]$Version.EditionID
 hasGPU=($GPU.Count -gt 0); isNvidia=[bool]($GPU.Name -match 'NVIDIA')
} | ConvertTo-Json -Compress
`;
function createSystemService({runPowerShell, confirm}) {
  async function info() {
    const {stdout} = await runPowerShell(systemScript);
    return JSON.parse(stdout.replace(/^\uFEFF/, ''));
  }
  async function restorePoints() {
    const {stdout} = await runPowerShell("ConvertTo-Json -InputObject @(Get-ComputerRestorePoint | Select-Object CreationTime,Description,SequenceNumber) -Compress");
    const parsed = JSON.parse(stdout || '[]');
    return {success: true, points: Array.isArray(parsed) ? parsed : [parsed]};
  }
  async function createRestorePoint(description = `CBN Boost - ${new Date().toISOString()}`) {
    if (typeof description !== 'string' || !description.trim() || description.length > 100) throw new Error('Use um nome de 1 a 100 caracteres.');
    // Preserve the OS restore-point throttling policy. Verify a new point was really created.
    const script = String.raw`
$Before = @(Get-ComputerRestorePoint | Select-Object -ExpandProperty SequenceNumber)
Checkpoint-Computer -Description ${psLiteral(description.trim())} -RestorePointType MODIFY_SETTINGS -WarningAction Stop
$After = @(Get-ComputerRestorePoint | Where-Object { $_.SequenceNumber -notin $Before })
if (!$After.Count) { throw 'O Windows não criou um ponto novo. Verifique a Proteção do Sistema e o intervalo mínimo entre pontos.' }
$After | Select-Object Description,SequenceNumber | ConvertTo-Json -Compress
`;
    const {stdout} = await runPowerShell(script, {timeoutMs: 300000});
    return {success: true, point: JSON.parse(stdout)};
  }
  async function restore(sequence) {
    if (!Number.isInteger(sequence) || sequence < 0) throw new Error('Ponto de restauração inválido.');
    const {points} = await restorePoints();
    const point = points.find(p => p.SequenceNumber === sequence);
    if (!point) throw new Error('Ponto de restauração não encontrado.');
    if (!await confirm('Restaurar o Windows?', `Ponto: ${point.Description}. O Windows poderá reiniciar e desfazer mudanças feitas após esse ponto.`)) throw new Error('Restauração cancelada.');
    await runPowerShell(`Restore-Computer -RestorePoint ${sequence} -Confirm:$false`, {timeoutMs: 300000});
    return {success: true};
  }
  async function deleteRestorePoints({onlyOldCBN = false} = {}) {
    let {points} = await restorePoints();
    if (onlyOldCBN) points = points.filter(p => p.Description?.startsWith('CBN Boost')).sort((a,b) => b.SequenceNumber-a.SequenceNumber).slice(3);
    if (!points.length) return {success: true, deleted: 0};
    if (!await confirm('Excluir pontos de restauração?', `${points.length} ponto(s) ${onlyOldCBN ? 'antigo(s) do CBN Boost' : 'do Windows'} serão excluídos permanentemente.`)) throw new Error('Exclusão cancelada.');
    const ids = points.map(p => p.SequenceNumber);
    if (!ids.every(n => Number.isInteger(n) && n >= 0)) throw new Error('Identificadores inválidos retornados pelo Windows.');
    const script = String.raw`
Add-Type -TypeDefinition 'using System; using System.Runtime.InteropServices; public static class CBNRestore { [DllImport("srclient.dll")] public static extern uint SRRemoveRestorePoint(uint index); }'
foreach ($ID in @(${ids.join(',')})) { $Code = [CBNRestore]::SRRemoveRestorePoint([uint32]$ID); if ($Code -ne 0) { throw "Falha ao excluir ponto $ID (código $Code)." } }
`;
    await runPowerShell(script);
    const after = await restorePoints();
    if (after.points.some(p => ids.includes(p.SequenceNumber))) throw new Error('Alguns pontos continuam presentes no Windows.');
    return {success: true, deleted: ids.length};
  }
  return {info, restorePoints, createRestorePoint, restore, deleteRestorePoints, userName: () => os.userInfo().username};
}
module.exports = {createSystemService};
