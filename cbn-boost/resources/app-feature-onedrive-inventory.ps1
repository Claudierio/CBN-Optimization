# Inspect only installer registration and executable locations, never sync data.
$registryPaths = @(
    'HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall',
    'HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall',
    'HKLM:\Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall'
)
$registrations = @()
foreach ($root in $registryPaths) {
    if (-not (Test-Path -LiteralPath $root)) { continue }
    foreach ($key in @(Get-ChildItem -LiteralPath $root -ErrorAction Stop)) {
        $entry = Get-ItemProperty -LiteralPath $key.PSPath -ErrorAction Stop
        if ([string]$entry.DisplayName -ceq 'Microsoft OneDrive') { $registrations += $key.Name }
    }
}
$candidates = @()
if ($env:LOCALAPPDATA) { $candidates += Join-Path $env:LOCALAPPDATA 'Microsoft\OneDrive\OneDrive.exe' }
if ($env:ProgramFiles) { $candidates += Join-Path $env:ProgramFiles 'Microsoft OneDrive\OneDrive.exe' }
if (${env:ProgramFiles(x86)}) { $candidates += Join-Path ${env:ProgramFiles(x86)} 'Microsoft OneDrive\OneDrive.exe' }
$executables = @($candidates | Where-Object { Test-Path -LiteralPath $_ -PathType Leaf })
ConvertTo-Json -InputObject ([PSCustomObject]@{ installed = ($registrations.Count -gt 0 -or $executables.Count -gt 0); registrations = $registrations.Count; executables = $executables.Count }) -Compress
