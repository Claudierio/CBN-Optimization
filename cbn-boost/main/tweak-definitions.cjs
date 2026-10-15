'use strict';

// Reconstructed local operations. Metadata and the original HAGS scripts live in
// ../tweaks. Missing remote scripts are never downloaded or silently substituted.
const value = (hive, path, name, data, kind = 'DWord') => ({ hive, path, name, data, kind });
const user = (path, name, data, kind) => value('CurrentUser', path, name, data, kind);
const machine = (path, name, data, kind) => value('LocalMachine', path, name, data, kind);
const explorer = 'Software\\Microsoft\\Windows\\CurrentVersion\\Explorer';
const control = 'SYSTEM\\CurrentControlSet\\Control';
const definitions = {
  'align-taskbar-left': [user(`${explorer}\\Advanced`, 'TaskbarAl', 0)],
  'detailed-bsod': [machine(`${control}\\CrashControl`, 'DisplayParameters', 1)],
  'disable-background-ms-store-apps': [user('Software\\Microsoft\\Windows\\CurrentVersion\\BackgroundAccessApplications', 'GlobalUserDisabled', 1)],
  'disable-core-isolation': [machine(`${control}\\DeviceGuard\\Scenarios\\HypervisorEnforcedCodeIntegrity`, 'Enabled', 0)],
  'disable-fast-startup': [machine(`${control}\\Session Manager\\Power`, 'HiberbootEnabled', 0)],
  'disable-location-tracking': [machine('SOFTWARE\\Policies\\Microsoft\\Windows\\LocationAndSensors', 'DisableLocation', 1)],
  'disable-lockscreen-tips': ['RotatingLockScreenOverlayEnabled', 'SubscribedContent-338387Enabled'].map(name => user('Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager', name, 0)),
  'disable-mouse-acceleration': ['MouseSpeed', 'MouseThreshold1', 'MouseThreshold2'].map(name => user('Control Panel\\Mouse', name, '0', 'String')),
  'enable-dark-mode': ['AppsUseLightTheme', 'SystemUsesLightTheme'].map(name => user('Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize', name, 0)),
  'enable-end-task-right-click': [user(`${explorer}\\Advanced\\TaskbarDeveloperSettings`, 'TaskbarEndTask', 1)],
  'enable-game-mode': [user('Software\\Microsoft\\GameBar', 'AutoGameModeEnabled', 1)],
  'enable-hags': [machine(`${control}\\GraphicsDrivers`, 'HwSchMode', 2)],
  'menu-show-delay-zero': [user('Control Panel\\Desktop', 'MenuShowDelay', '0', 'String')],
  'revert-context-menu': [user('Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32', '', '', 'String')],
  'set-time-utc': [machine(`${control}\\TimeZoneInformation`, 'RealTimeIsUniversal', 1)],
  'set-win32-priority-separation': [machine(`${control}\\PriorityControl`, 'Win32PrioritySeparation', 38)],
};

const unavailable = {
  'debloat-windows': 'O script remoto e a seleção de aplicativos não foram distribuídos no instalador.',
  'disable-copilot': 'O script original não foi distribuído; remover pacotes não permite restauração fiel a partir do material recuperado.',
  'disable-defender-rtp': 'O script original não foi distribuído; a reconstrução não altera a proteção do Microsoft Defender.',
  'disable-location-tracking': 'Os metadados mencionam também telemetria e Windows Update, mas não especificam os valores alterados.',
  'disable-wifi-sense': 'Recurso obsoleto: o compartilhamento do Wi-Fi Sense foi removido das versões atuais do Windows. Nenhuma alteração é necessária.',
  'enable-optimization-for-windowed-games': 'O script e seus valores de registro não foram distribuídos no instalador.',
  'optimize-network-settings': 'Os parâmetros de TCP, MTU e adaptadores não constam dos recursos recuperados.',
  'optimize-nvidia-settings': 'Perfil NVIDIA recuperado para consulta; aplicação e restauração do perfil original não foram reconstruídas.',
  'remove-gaming-apps': 'O script original não foi distribuído; a reinstalação fiel dos pacotes removidos não está disponível.',
  'remove-onedrive': 'O fluxo de movimentação de arquivos e desinstalação não foi distribuído no instalador.',
  'run-disk-cleanup': 'O script remoto não foi distribuído; a limpeza irreversível não foi reconstruída.',
  'set-powershell7-default': 'Instalação e edição de perfis do Windows Terminal não foram distribuídas no instalador.',
  'set-services-to-manual': 'A lista de serviços e os tipos de inicialização não foram distribuídos no instalador.',
};

module.exports = { definitions, unavailable };
