# CBN Boost reconstructed registry engine. The caller injects $request as a
# decoded JSON object. No scripts or command strings come from renderer input.
$ErrorActionPreference = 'Stop'

function Open-Base($entry) {
    $hive = [Enum]::Parse([Microsoft.Win32.RegistryHive], [string]$entry.hive)
    return [Microsoft.Win32.RegistryKey]::OpenBaseKey($hive, [Microsoft.Win32.RegistryView]::Registry64)
}

function Read-Entry($entry) {
    $base = Open-Base $entry
    try {
        # Record originally absent parent keys as well as the leaf. Restoration
        # removes only empty keys, preserving unrelated changes made later.
        $missingKeys = @()
        $prefix = ''
        foreach ($part in ([string]$entry.path -split '\\')) {
            $prefix = if ($prefix) { $prefix + '\' + $part } else { $part }
            $parent = $base.OpenSubKey($prefix, $false)
            if ($null -eq $parent) { $missingKeys += $prefix }
            else { $parent.Dispose() }
        }
        $key = $base.OpenSubKey([string]$entry.path, $false)
        try {
            $exists = $null -ne $key -and @($key.GetValueNames()) -contains [string]$entry.name
            $result = @{ hive=$entry.hive; path=$entry.path; name=$entry.name; keyExisted=($null -ne $key); existed=$exists; missingKeys=@($missingKeys) }
            if ($exists) {
                $result.kind = $key.GetValueKind([string]$entry.name).ToString()
                $result.data = $key.GetValue([string]$entry.name, $null, [Microsoft.Win32.RegistryValueOptions]::DoNotExpandEnvironmentNames)
                # JSON numbers lose precision in JavaScript above 2^53. Carry
                # QWord values as invariant decimal strings for exact rollback.
                if ($result.kind -eq 'QWord') { $result.data = $result.data.ToString([Globalization.CultureInfo]::InvariantCulture) }
            }
            return $result
        } finally { if ($null -ne $key) { $key.Dispose() } }
    } finally { $base.Dispose() }
}

function Write-Entry($entry, $restore) {
    $base = Open-Base $entry
    try {
        if ($restore -and -not $entry.existed) {
            $key = $base.OpenSubKey([string]$entry.path, $true)
            if ($null -ne $key) {
                try { $key.DeleteValue([string]$entry.name, $false) } finally { $key.Dispose() }
            }
            if (-not $entry.keyExisted) {
                $key = $base.OpenSubKey([string]$entry.path, $false)
                $empty = $false
                if ($null -ne $key) {
                    try { $empty = $key.ValueCount -eq 0 -and $key.SubKeyCount -eq 0 } finally { $key.Dispose() }
                }
                if ($empty) { $base.DeleteSubKey([string]$entry.path, $false) }
            }
            return
        }
        $key = $base.CreateSubKey([string]$entry.path)
        try {
            $kind = [Enum]::Parse([Microsoft.Win32.RegistryValueKind], [string]$entry.kind)
            $data = $entry.data
            switch ($entry.kind) {
                'DWord' { $data = [int]$entry.data }
                'QWord' { $data = [long]$entry.data }
                'Binary' { $data = [byte[]]$entry.data }
                'None' { $data = [byte[]]$entry.data }
                'MultiString' { $data = [string[]]$entry.data }
                default { $data = [string]$entry.data }
            }
            $key.SetValue([string]$entry.name, $data, $kind)
        } finally { $key.Dispose() }
    } finally { $base.Dispose() }
}

function Remove-EmptyCreatedKeys($entries) {
    $candidates = @{}
    foreach ($entry in $entries) {
        foreach ($missing in @($entry.missingKeys)) {
            if ($null -eq $missing -or -not [string]$missing) { continue }
            $candidates[([string]$entry.hive + ':' + [string]$missing)] = @{hive=$entry.hive; path=$missing}
        }
    }
    foreach ($candidate in @($candidates.Values | Sort-Object { $_.path.Length } -Descending)) {
        $base = Open-Base $candidate
        try {
            $key = $base.OpenSubKey([string]$candidate.path, $false)
            $empty = $false
            if ($null -ne $key) {
                try { $empty = $key.ValueCount -eq 0 -and $key.SubKeyCount -eq 0 } finally { $key.Dispose() }
            }
            if ($empty) { $base.DeleteSubKey([string]$candidate.path, $false) }
        } finally { $base.Dispose() }
    }
}

switch ($request.operation) {
    'capture' { $result = @($request.entries | ForEach-Object { Read-Entry $_ }) }
    'apply' {
        foreach ($entry in $request.entries) { Write-Entry $entry $false }
        $result = @($request.entries | ForEach-Object { Read-Entry $_ })
    }
    'restore' {
        foreach ($entry in $request.entries) { Write-Entry $entry $true }
        Remove-EmptyCreatedKeys $request.entries
        $result = @($request.entries | ForEach-Object { Read-Entry $_ })
    }
    default { throw 'Invalid registry operation' }
}
ConvertTo-Json -InputObject @($result) -Depth 12 -Compress
