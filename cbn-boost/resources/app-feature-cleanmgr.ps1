$executable = Join-Path $env:SystemRoot 'System32\cleanmgr.exe'
if (-not (Test-Path -LiteralPath $executable -PathType Leaf)) { throw 'Limpeza de Disco nao esta disponivel neste Windows.' }
$drive = [System.IO.Path]::GetPathRoot($env:SystemRoot).TrimEnd('\')
if ($drive -notmatch '^[A-Za-z]:$') { throw 'Unidade do Windows invalida.' }
# Start-Process keeps the native category selection visible; no automatic flags.
$process = Start-Process -FilePath $executable -ArgumentList @('/d', $drive) -PassThru -ErrorAction Stop
ConvertTo-Json -InputObject ([PSCustomObject]@{ opened = $true; verified = $true; processId = $process.Id; drive = $drive }) -Compress
