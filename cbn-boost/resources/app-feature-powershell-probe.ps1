$candidates = @()
if ($env:ProgramFiles) { $candidates += Join-Path $env:ProgramFiles 'PowerShell\7\pwsh.exe' }
if ($env:LOCALAPPDATA) { $candidates += Join-Path $env:LOCALAPPDATA 'Microsoft\WindowsApps\pwsh.exe' }
foreach ($executable in $candidates) {
    if (-not (Test-Path -LiteralPath $executable -PathType Leaf)) { continue }
    $code = '$ErrorActionPreference="Stop"; $v=$PSVersionTable.PSVersion; ConvertTo-Json -Compress @{major=$v.Major;version=$v.ToString();preview=([bool]$v.PreReleaseLabel)}'
    $output = & $executable -NoLogo -NoProfile -NonInteractive -Command $code 2>$null
    if ($LASTEXITCODE -ne 0) { continue }
    try { $info = ($output -join "`n") | ConvertFrom-Json -ErrorAction Stop } catch { continue }
    if ($info.major -eq 7 -and -not $info.preview) {
        ConvertTo-Json -InputObject ([PSCustomObject]@{ installed = $true; executable = $executable; version = [string]$info.version }) -Compress
        return
    }
}
ConvertTo-Json -InputObject ([PSCustomObject]@{ installed = $false }) -Compress
