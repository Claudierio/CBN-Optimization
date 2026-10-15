$ErrorActionPreference = 'Stop'
# ABI/constants derived from NVIDIA's public NVAPI headers. See NVAPI-LICENSE.txt.
# NVDRS_SETTING_V1 has pack(4): Unicode name 2048*2, two 4100-byte unions.
$native = @'
using System;
using System.IO;
using System.Runtime.InteropServices;
public sealed class CbnNvSetting {
  public uint id, type, location, current;
  public uint? predefined;
  public bool present, isCurrentPredefined, isPredefinedValid, hasOverride;
}
public sealed class CbnNvDrs : IDisposable {
  const int Size=12320, IdOffset=4100, TypeOffset=4104, LocationOffset=4108;
  const int CurrentPredefinedOffset=4112, PredefinedValidOffset=4116;
  const int PredefinedOffset=4120, CurrentOffset=8220;
  const uint Version=0x13020;
  IntPtr library, session, profile;
  bool initialized;
  [DllImport("kernel32.dll",CharSet=CharSet.Unicode,ExactSpelling=true,SetLastError=true)]
  static extern IntPtr LoadLibraryExW(string name,IntPtr file,uint flags);
  [DllImport("kernel32.dll",CharSet=CharSet.Ansi,ExactSpelling=true)]
  static extern IntPtr GetProcAddress(IntPtr library,string name);
  [DllImport("kernel32.dll")] static extern bool FreeLibrary(IntPtr library);
  [UnmanagedFunctionPointer(CallingConvention.Cdecl)] delegate IntPtr Query(uint id);
  [UnmanagedFunctionPointer(CallingConvention.Cdecl)] delegate int NoArgs();
  [UnmanagedFunctionPointer(CallingConvention.Cdecl)] delegate int Create(out IntPtr session);
  [UnmanagedFunctionPointer(CallingConvention.Cdecl)] delegate int Session(IntPtr session);
  [UnmanagedFunctionPointer(CallingConvention.Cdecl)] delegate int Profile(IntPtr session,out IntPtr profile);
  [UnmanagedFunctionPointer(CallingConvention.Cdecl)] delegate int Get(IntPtr session,IntPtr profile,uint id,IntPtr setting);
  [UnmanagedFunctionPointer(CallingConvention.Cdecl)] delegate int Set(IntPtr session,IntPtr profile,IntPtr setting);
  [UnmanagedFunctionPointer(CallingConvention.Cdecl)] delegate int Delete(IntPtr session,IntPtr profile,uint id);
  [UnmanagedFunctionPointer(CallingConvention.Cdecl)] delegate int EnumGpu([Out,MarshalAs(UnmanagedType.LPArray,SizeConst=64)] IntPtr[] handles,out uint count);
  Query query;
  NoArgs unload;
  Session destroy, load, save;
  Get get;
  Set set;
  Delete delete;
  Delegate Function(uint id,Type type) {
    IntPtr address=query(id);
    if(address==IntPtr.Zero) throw new Exception("NVAPI_UNSUPPORTED: interface ausente no driver.");
    return Marshal.GetDelegateForFunctionPointer(address,type);
  }
  static void Check(int status,string operation) {
    if(status==0) return;
    string marker=(status==-2||status==-3||status==-6)?"NVAPI_UNAVAILABLE":
      (status==-104)?"NVAPI_UNSUPPORTED":"NVAPI_ERROR";
    throw new Exception(marker+": "+operation+" (código "+status+").");
  }
  public CbnNvDrs() {
    try {
      if(IntPtr.Size!=8) throw new Exception("NVAPI_UNSUPPORTED: requer processo Windows de 64 bits.");
      string name=Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.System),"nvapi64.dll");
      if(!File.Exists(name)) throw new Exception("NVAPI_UNAVAILABLE: driver NVIDIA não encontrado.");
      library=LoadLibraryExW(name,IntPtr.Zero,0x00000100|0x00000800);
      if(library==IntPtr.Zero) throw new Exception("NVAPI_UNAVAILABLE: não foi possível carregar o driver NVIDIA.");
      IntPtr entry=GetProcAddress(library,"nvapi_QueryInterface");
      if(entry==IntPtr.Zero) throw new Exception("NVAPI_UNSUPPORTED: nvapi_QueryInterface ausente.");
      query=(Query)Marshal.GetDelegateForFunctionPointer(entry,typeof(Query));
      unload=(NoArgs)Function(0xd22bdd7e,typeof(NoArgs));
      Check(((NoArgs)Function(0x0150e828,typeof(NoArgs)))(),"Inicializar NVAPI");
      initialized=true;
      uint count;
      Check(((EnumGpu)Function(0xe5ac921f,typeof(EnumGpu)))(new IntPtr[64],out count),"Detectar GPU");
      if(count==0) throw new Exception("NVAPI_UNAVAILABLE: GPU NVIDIA não encontrada.");
      destroy=(Session)Function(0xdad9cff8,typeof(Session));
      load=(Session)Function(0x375dbd6b,typeof(Session));
      save=(Session)Function(0xfcbc7e14,typeof(Session));
      get=(Get)Function(0x73bf8338,typeof(Get));
      set=(Set)Function(0x577dd202,typeof(Set));
      delete=(Delete)Function(0xe4a26362,typeof(Delete));
      Check(((Create)Function(0x0694d52e,typeof(Create)))(out session),"Criar sessão DRS");
      Check(load(session),"Carregar configurações DRS");
      Check(((Profile)Function(0xda8466a0,typeof(Profile)))(session,out profile),"Abrir perfil global");
      if(session==IntPtr.Zero||profile==IntPtr.Zero) throw new Exception("NVAPI_ERROR: handle DRS inválido.");
    } catch { Dispose(); throw; }
  }
  static void Allowed(uint id) {
    if(id!=0x1057EB71&&id!=0x00CE2691) throw new Exception("Setting NVIDIA não permitido.");
  }
  static IntPtr Buffer(uint id) {
    Allowed(id);
    IntPtr p=Marshal.AllocHGlobal(Size);
    Marshal.Copy(new byte[Size],0,p,Size);
    Marshal.WriteInt32(p,0,unchecked((int)Version));
    Marshal.WriteInt32(p,IdOffset,unchecked((int)id));
    return p;
  }
  static uint Read(IntPtr p,int offset) { return unchecked((uint)Marshal.ReadInt32(p,offset)); }
  public CbnNvSetting ReadSetting(uint id) {
    IntPtr p=Buffer(id);
    try {
      int status=get(session,profile,id,p);
      if(status==-160) return new CbnNvSetting {id=id};
      Check(status,"Ler setting NVIDIA");
      if(Read(p,IdOffset)!=id||Read(p,TypeOffset)!=0||Read(p,LocationOffset)>3)
        throw new Exception("NVAPI_ERROR: configuração incompatível com DWORD público.");
      bool pre=Read(p,CurrentPredefinedOffset)!=0, valid=Read(p,PredefinedValidOffset)!=0;
      uint location=Read(p,LocationOffset);
      return new CbnNvSetting {id=id,present=true,type=0,location=location,current=Read(p,CurrentOffset),
        isCurrentPredefined=pre,isPredefinedValid=valid,predefined=valid?(uint?)Read(p,PredefinedOffset):null,
        hasOverride=location==0&&!pre};
    } finally { Marshal.FreeHGlobal(p); }
  }
  public void WriteSetting(uint id,uint value) {
    IntPtr p=Buffer(id);
    try { Marshal.WriteInt32(p,CurrentOffset,unchecked((int)value)); Check(set(session,profile,p),"Definir setting NVIDIA"); }
    finally { Marshal.FreeHGlobal(p); }
  }
  public void DeleteOverride(uint id) {
    Allowed(id);
    int status=delete(session,profile,id);
    if(status!=-160) Check(status,"Remover override NVIDIA");
  }
  public void Save() { Check(save(session),"Salvar configurações NVIDIA"); }
  public void Dispose() {
    if(session!=IntPtr.Zero) { if(destroy!=null) destroy(session); session=IntPtr.Zero; }
    if(initialized) { if(unload!=null) unload(); initialized=false; }
    if(library!=IntPtr.Zero) { FreeLibrary(library); library=IntPtr.Zero; }
  }
}
'@
Add-Type -TypeDefinition $native -ErrorAction Stop
$ids = @([uint32]0x1057EB71, [uint32]0x00CE2691)
function Read-State($driver) {
    $result = @()
    foreach ($id in $ids) {
        $s = $driver.ReadSetting($id)
        $result += [ordered]@{id=$s.id;present=$s.present;type=$s.type;location=$s.location;isCurrentPredefined=$s.isCurrentPredefined;isPredefinedValid=$s.isPredefinedValid;current=$s.current;predefined=$s.predefined;override=$s.hasOverride}
    }
    return ,$result
}
if ($request.operation -notin @('capture','apply','restore')) { throw 'Operação NVIDIA inválida.' }
if ($request.operation -ne 'capture') {
    if ($request.snapshot.version -ne 1 -or $request.snapshot.profile -ne 'base' -or $request.snapshot.settings.Count -ne 2) { throw 'Cópia NVIDIA inválida.' }
    for ($i=0; $i -lt 2; $i++) { if ($request.snapshot.settings[$i].id -ne $ids[$i]) { throw 'ID NVIDIA não permitido.' } }
}
$driver = $null
try {
    $driver = New-Object CbnNvDrs
    $state = Read-State $driver
    if ($request.operation -eq 'apply') {
        for ($i=0; $i -lt 2; $i++) {
            foreach ($key in @('id','present','type','location','isCurrentPredefined','isPredefinedValid','current','predefined','override')) {
                if ($state[$i][$key] -ne $request.snapshot.settings[$i].$key) { throw 'NVAPI_NO_CHANGES: As configurações NVIDIA mudaram após a cópia. Nenhuma alteração foi salva.' }
            }
        }
        $driver.WriteSetting($ids[0], [uint32]1)
        $driver.WriteSetting($ids[1], [uint32]20)
        $driver.Save()
    } elseif ($request.operation -eq 'restore') {
        foreach ($s in $request.snapshot.settings) {
            if ($s.override) { $driver.WriteSetting([uint32]$s.id,[uint32]$s.current) }
            else { $driver.DeleteOverride([uint32]$s.id) }
        }
        $driver.Save()
    }
} finally { if ($null -ne $driver) { $driver.Dispose() } }
# Reopen/reload so verification reads the saved driver database, not session edits.
if ($request.operation -ne 'capture') {
    $driver = $null
    try { $driver = New-Object CbnNvDrs; $state = Read-State $driver }
    finally { if ($null -ne $driver) { $driver.Dispose() } }
}
[ordered]@{supported=$true;settings=$state} | ConvertTo-Json -Depth 5 -Compress
