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
$DxgiSource = @'
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
namespace CbnBoost {
  [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
  public struct DxgiAdapterDescription {
    [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 128)] public string Description;
    public uint VendorId, DeviceId, SubSysId, Revision;
    public UIntPtr DedicatedVideoMemory, DedicatedSystemMemory, SharedSystemMemory;
    public uint LuidLow; public int LuidHigh;
  }
  public sealed class DxgiAdapterInfo {
    public string Description { get; set; }
    public ulong DedicatedVideoMemory { get; set; }
  }
  public static class DxgiAdapterProbe {
    [DllImport("dxgi.dll", EntryPoint = "CreateDXGIFactory", ExactSpelling = true)]
    private static extern int CreateFactory(ref Guid iid, out IntPtr factory);
    [UnmanagedFunctionPointer(CallingConvention.StdCall)]
    private delegate int EnumAdaptersDelegate(IntPtr self, uint index, out IntPtr adapter);
    [UnmanagedFunctionPointer(CallingConvention.StdCall)]
    private delegate int GetDescDelegate(IntPtr self, out DxgiAdapterDescription description);
    [UnmanagedFunctionPointer(CallingConvention.StdCall)]
    private delegate uint ReleaseDelegate(IntPtr self);
    private static IntPtr Method(IntPtr instance, int slot) {
      IntPtr table = Marshal.ReadIntPtr(instance);
      return Marshal.ReadIntPtr(table, slot * IntPtr.Size);
    }
    private static uint Release(IntPtr instance) {
      return Marshal.GetDelegateForFunctionPointer<ReleaseDelegate>(Method(instance, 2))(instance);
    }
    public static DxgiAdapterInfo[] Enumerate() {
      Guid iid = new Guid("7b7166ec-21c7-44ae-b21a-c9ae321ae369");
      IntPtr factory = IntPtr.Zero;
      int status = CreateFactory(ref iid, out factory);
      if (status < 0) Marshal.ThrowExceptionForHR(status);
      var adapters = new List<DxgiAdapterInfo>();
      try {
        var enumerate = Marshal.GetDelegateForFunctionPointer<EnumAdaptersDelegate>(Method(factory, 7));
        for (uint index = 0; index < 32; index++) {
          IntPtr adapter = IntPtr.Zero;
          status = enumerate(factory, index, out adapter);
          if (status == unchecked((int)0x887A0002)) break;
          if (status < 0) Marshal.ThrowExceptionForHR(status);
          try {
            DxgiAdapterDescription description;
            var getDescription = Marshal.GetDelegateForFunctionPointer<GetDescDelegate>(Method(adapter, 8));
            status = getDescription(adapter, out description);
            if (status < 0) Marshal.ThrowExceptionForHR(status);
            adapters.Add(new DxgiAdapterInfo { Description = description.Description.TrimEnd('\0'), DedicatedVideoMemory = description.DedicatedVideoMemory.ToUInt64() });
          } finally { Release(adapter); }
        }
      } finally { Release(factory); }
      return adapters.ToArray();
    }
  }
}
'@
$DxgiAdapters = @()
try {
 if (-not ('CbnBoost.DxgiAdapterProbe' -as [type])) { Add-Type -TypeDefinition $DxgiSource -ErrorAction Stop }
 $DxgiAdapters = @([CbnBoost.DxgiAdapterProbe]::Enumerate())
} catch { $DxgiAdapters = @() }
$SelectedGPU = $GPU | Select-Object -First 1
$Vram = [uint64]0
if ($SelectedGPU) {
 $GpuName = [string]$SelectedGPU.Name
 $Adapter = $DxgiAdapters | Where-Object {
   $_.DedicatedVideoMemory -gt 0 -and ($_.Description -ieq $GpuName -or
     $_.Description.IndexOf($GpuName, [StringComparison]::OrdinalIgnoreCase) -ge 0 -or
     $GpuName.IndexOf($_.Description, [StringComparison]::OrdinalIgnoreCase) -ge 0)
 } | Select-Object -First 1
 if ($Adapter) { $Vram = [uint64]$Adapter.DedicatedVideoMemory }
 else {
   $LegacyVram = [uint64]$SelectedGPU.AdapterRAM
   # AdapterRAM is uint32; its maximum is a saturation value for larger GPUs.
   if ($LegacyVram -gt 0 -and $LegacyVram -lt 4294967295) { $Vram = $LegacyVram }
 }
}
$Types = @{20='DDR';21='DDR2';24='DDR3';26='DDR4';34='DDR5'}
$MemoryType = if ($RAM.Count -and $Types.ContainsKey([int]$RAM[0].SMBIOSMemoryType)) { $Types[[int]$RAM[0].SMBIOSMemoryType] } else { 'Não informado' }
[pscustomobject]@{
 cpu_model=$CPU.Name; cpu_cores=[int]$CPU.NumberOfCores
 memory_total=[long](($RAM | Measure-Object Capacity -Sum).Sum); memory_type=$MemoryType
 gpu_model=($GPU.Name -join ', '); vram=[long]$Vram
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
module.exports = {createSystemService, systemScript};
