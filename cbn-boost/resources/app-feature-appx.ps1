# CBN Boost: exact, current-user package inventory/removal. No provisioning edits.
$allowed = @($cbnConfig.allowed | ForEach-Object { [string]$_ })
$selected = @($cbnConfig.selected | ForEach-Object { [string]$_ })
if ($allowed.Count -eq 0 -or $allowed.Count -gt 40) { throw 'Lista de aplicativos invalida.' }
foreach ($name in $allowed) {
    if ($name -notmatch '^[A-Za-z0-9][A-Za-z0-9.]{1,100}$') { throw 'Nome de pacote invalido.' }
}
function Get-AllowedPackages {
    @(Get-AppxPackage -ErrorAction Stop | Where-Object {
        $allowed -ccontains $_.Name -and -not $_.IsFramework -and -not $_.IsResourcePackage -and -not $_.NonRemovable
    })
}
if ($cbnConfig.operation -eq 'inventory') {
    $result = @(Get-AllowedPackages | ForEach-Object {
        [PSCustomObject]@{ id = [string]$_.PackageFullName; packageName = [string]$_.Name; version = [string]$_.Version }
    })
    ConvertTo-Json -InputObject $result -Depth 4 -Compress
    return
}
if ($cbnConfig.operation -ne 'remove' -or $selected.Count -eq 0) { throw 'Operacao invalida.' }
$before = @(Get-AllowedPackages)
foreach ($id in $selected) {
    $matches = @($before | Where-Object { $_.PackageFullName -ceq $id })
    if ($matches.Count -ne 1) { throw "Pacote nao instalado ou fora da selecao: $id" }
}
$removed = @()
foreach ($id in $selected) {
    Remove-AppxPackage -Package $id -ErrorAction Stop
    if (@(Get-AppxPackage -ErrorAction Stop | Where-Object { $_.PackageFullName -ceq $id }).Count -gt 0) {
        throw "O Windows nao confirmou a remocao de $id."
    }
    $removed += $id
}
ConvertTo-Json -InputObject ([PSCustomObject]@{ verified = $true; removed = $removed }) -Depth 4 -Compress
