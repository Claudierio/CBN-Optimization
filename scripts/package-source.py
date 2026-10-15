#!/usr/bin/env python3
"""Produce a deterministic source-only ZIP suitable for Git review."""
from pathlib import Path
import hashlib
import zipfile

ROOT = Path(__file__).resolve().parent.parent
FILES = ['README.md', 'RECOVERY_STATUS.md', '.gitignore', 'package.json']
DIRECTORIES = ['cbn-boost', 'scripts', 'tests', 'docs']

def main():
    files = [ROOT / name for name in FILES]
    for name in DIRECTORIES:
        files.extend(path for path in (ROOT / name).rglob('*') if path.is_file()
                     and not any(part in ('__pycache__', 'node_modules') for part in path.parts)
                     and path.suffix not in ('.pyc', '.log', '.tmp'))
    dist = ROOT / 'dist'
    dist.mkdir(exist_ok=True)
    output = dist / 'CBN-Boost-source.zip'
    with zipfile.ZipFile(output, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
        for path in sorted(set(files)):
            if not path.is_file() or path.is_symlink():
                raise ValueError(f'Missing or invalid source file: {path}')
            relative = path.relative_to(ROOT).as_posix()
            info = zipfile.ZipInfo('CBN-Boost-source/' + relative, (2026, 1, 1, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = (0o755 if path.suffix == '.py' else 0o644) << 16
            archive.writestr(info, path.read_bytes(), compresslevel=6)
    digest = hashlib.sha256(output.read_bytes()).hexdigest()
    output.with_suffix('.zip.sha256').write_text(f'{digest}  {output.name}\n', encoding='ascii')
    print(f'Source: {output} ({output.stat().st_size:,} bytes, {len(set(files))} files)')
    print(f'SHA256: {digest}')

if __name__ == '__main__':
    main()
