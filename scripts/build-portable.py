#!/usr/bin/env python3
"""Build CBN Boost for Windows offline using Python 3.10+ standard library.

Usage: python3 scripts/build-portable.py
The Electron runtime must first be extracted to .recovery/extracted. The edited
renderer and reconstructed local backend are packed from cbn-boost; original
main bytecode, helpers and updater configuration are not copied into the build.
"""
from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
import shutil
import struct
import tempfile
import zipfile
import zlib
import xml.etree.ElementTree as ET

from pe_resources import PE, make_version_info

ROOT = Path(__file__).resolve().parent.parent
FUSE_SENTINEL = b'dL7pKGdnNz796PbbjQWNKmHXBZaB9tsX'
FUSE_NAMES = ('RunAsNode', 'EnableCookieEncryption', 'EnableNodeOptionsEnvironmentVariable',
              'EnableNodeCliInspectArguments', 'EnableEmbeddedAsarIntegrityValidation',
              'OnlyLoadAppFromAsar', 'LoadBrowserProcessSpecificV8Snapshot',
              'GrantFileProtocolExtraPrivileges')
BLOCK_SIZE = 4 * 1024 * 1024
RUNTIME_FILES = ('icudtl.dat', 'v8_context_snapshot.bin', 'libGLESv2.dll',
                 'vulkan-1.dll', 'resources.pak', 'vk_swiftshader_icd.json',
                 'LICENSES.chromium.html', 'LICENSE.electron.txt', 'd3dcompiler_47.dll',
                 'ffmpeg.dll', 'libEGL.dll', 'vk_swiftshader.dll',
                 'chrome_100_percent.pak', 'snapshot_blob.bin', 'chrome_200_percent.pak')
APPLICATION_NOTICES = ('THIRD_PARTY_NOTICES.md', 'LICENSE.original.txt')


def sha(data):
    return hashlib.sha256(data).hexdigest()


def compact(value):
    return json.dumps(value, ensure_ascii=False, separators=(',', ':')).encode('utf-8')


def fuse_wire(data):
    offset = data.find(FUSE_SENTINEL)
    if offset < 0 or data.find(FUSE_SENTINEL, offset + 1) >= 0:
        raise ValueError('Expected exactly one Electron fuse wire')
    start = offset + len(FUSE_SENTINEL)
    version, count = data[start:start + 2]
    states = data[start + 2:start + 2 + count]
    if version != 1 or count < 8 or any(v not in b'01r' for v in states):
        raise ValueError('Unsupported Electron fuse layout')
    return bytes(data[offset:start + 2 + count]), dict(zip(FUSE_NAMES, map(chr, states)))


def pack_asar(source, destination):
    header = {'files': {}}
    contents = []
    names = []
    offset = 0
    for path in sorted(source.rglob('*')):
        relative = path.relative_to(source)
        # Test suites remain in the source project; the portable application has
        # only runtime files, editable implementation/assets and license notices.
        if any(part.startswith('.') or part in ('node_modules', 'tests') for part in relative.parts):
            continue
        if path.is_symlink():
            raise ValueError(f'Symlinks are not supported: {relative}')
        if not path.is_file():
            continue
        if path.suffix.lower() in ('.jsc', '.asar', '.exe', '.dll', '.node'):
            raise ValueError(f'Unexpected compiled artifact in application sources: {relative}')
        data = path.read_bytes()
        tree = header['files']
        for part in relative.parts[:-1]:
            tree = tree.setdefault(part, {'files': {}})['files']
        hashes = [sha(data[i:i + BLOCK_SIZE]) for i in range(0, len(data), BLOCK_SIZE)]
        tree[relative.name] = dict(size=len(data), offset=str(offset), integrity=dict(
            algorithm='SHA256', hash=sha(data), blockSize=BLOCK_SIZE,
            blocks=hashes or [sha(b'')]))
        offset += len(data)
        names.append(relative.as_posix())
        contents.append(data)
    if 'package.json' not in names:
        raise ValueError('Application package.json missing')
    raw_header = compact(header)
    padding = b'\0' * (-len(raw_header) % 4)
    pickle_payload = struct.pack('<I', len(raw_header)) + raw_header + padding
    header_pickle = struct.pack('<I', len(pickle_payload)) + pickle_payload
    with destination.open('wb') as out:
        out.write(struct.pack('<II', 4, len(header_pickle)))
        out.write(header_pickle)
        for data in contents:
            out.write(data)
    validate_asar(destination, source)
    return sha(raw_header), names


def validate_asar(archive, source):
    data = archive.read_bytes()
    prefix_size, header_size, payload_size, json_size = struct.unpack_from('<IIII', data)
    if prefix_size != 4 or payload_size + 4 != header_size:
        raise ValueError('Invalid ASAR pickle sizes')
    header = json.loads(data[16:16 + json_size])
    base = 8 + header_size

    def visit(files, parts=()):
        for name, item in files.items():
            path = parts + (name,)
            if 'files' in item:
                visit(item['files'], path)
            else:
                start = base + int(item['offset'])
                content = data[start:start + item['size']]
                if content != source.joinpath(*path).read_bytes() or sha(content) != item['integrity']['hash']:
                    raise ValueError(f'ASAR verification failed: {path}')
    visit(header['files'])


def png_icon(size):
    # Code-native mark: an upward arrow over a dark blue square, no third-party artwork.
    rows = []
    for y in range(size):
        row = bytearray(b'\0')
        for x in range(size):
            u, v = (x + .5) / size, (y + .5) / size
            arrow = (.20 <= v <= .50 and abs(u - .5) <= (v - .20)) or (.41 <= u <= .59 and .43 <= v <= .80)
            row.extend((69, 225, 184, 255) if arrow else (16, 26, 45, 255))
        rows.append(row)

    def chunk(kind, data):
        return struct.pack('>I', len(data)) + kind + data + struct.pack('>I', zlib.crc32(kind + data))
    return (b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', size, size, 8, 6, 0, 0, 0))
            + chunk(b'IDAT', zlib.compress(b''.join(rows), 9)) + chunk(b'IEND', b''))


def rebrand_executable(original, destination, asar_hash, version):
    original_data = original.read_bytes()
    wire, fuses = fuse_wire(original_data)
    pe = PE(original_data)
    resources = pe.resources()
    manifests = {key: value for key, value in resources.items() if key[0] == 24}
    if not manifests:
        raise ValueError('Windows application manifest missing')
    for payload, _codepage in manifests.values():
        root = ET.fromstring(payload)
        level = root.find('.//{urn:schemas-microsoft-com:asm.v3}requestedExecutionLevel')
        if level is None or level.get('level') != 'requireAdministrator':
            raise ValueError('The reconstructed Windows maintenance backend requires an administrator manifest')
    for key in list(resources):
        if key[0] in (3, 14, 16):
            del resources[key]
    sizes = (16, 32, 48, 256)
    group = bytearray(struct.pack('<HHH', 0, 1, len(sizes)))
    for index, size in enumerate(sizes, 1):
        payload = png_icon(size)
        resources[(3, index, 1033)] = (payload, 1252)
        group.extend(struct.pack('<BBBBHHIH', size % 256, size % 256, 0, 0, 1, 32, len(payload), index))
    resources[(14, 1, 1033)] = (bytes(group), 1252)
    resources[(16, 1, 1033)] = (make_version_info(version), 1252)
    integrity_keys = [key for key in resources if key[:2] == ('INTEGRITY', 'ELECTRONASAR')]
    if not integrity_keys:
        raise ValueError('Expected Electron ASAR integrity resource is absent')
    for key in integrity_keys:
        entries = json.loads(resources[key][0])
        if len(entries) != 1 or entries[0].get('alg') != 'SHA256':
            raise ValueError('Unsupported ASAR integrity resource')
        entries[0]['value'] = asar_hash
        resources[key] = (compact(entries), resources[key][1])
    output = pe.replace_resources(resources)
    result_resources = PE(output).resources()
    if {key: value for key, value in result_resources.items() if key[0] == 24} != manifests:
        raise ValueError('Windows manifest changed unexpectedly')
    if fuse_wire(output)[0] != wire:
        raise ValueError('Electron fuse wire changed unexpectedly')
    # Every section outside .rsrc must remain byte-for-byte identical.
    for section in pe.sections:
        if section is not pe.resource_section:
            start, size = section['raw'], section['rawsize']
            if original_data[start:start + size] != output[start:start + size]:
                raise ValueError(f'Unexpected code/data mutation in {section["name"]}')
    destination.write_bytes(output)
    return dict(original_sha256=sha(original_data), output_sha256=sha(output),
                fuses=fuses, fuses_preserved=True, executable_sections_preserved=True,
                asar_integrity_sha256=asar_hash, manifest_execution_level='requireAdministrator',
                manifest_preserved=True)


def build(source, runtime, dist, skip_zip=False):
    package = json.loads((source / 'package.json').read_text(encoding='utf-8'))
    version = package['version']
    executables = list(runtime.glob('*.exe'))
    if len(executables) != 1:
        raise ValueError('Runtime must contain exactly one top-level Electron executable')
    for name in RUNTIME_FILES:
        if not (runtime / name).is_file():
            raise ValueError(f'Runtime file missing: {name}')
    if not (runtime / 'locales' / 'pt-BR.pak').is_file():
        raise ValueError('Runtime locale files missing')
    for name in APPLICATION_NOTICES:
        if not (source / name).is_file():
            raise ValueError(f'Application license notice missing: {name}')
    dist.mkdir(parents=True, exist_ok=True)
    folder_name = 'CBN-Boost-win-x64'
    with tempfile.TemporaryDirectory(prefix='.cbn-build-', dir=dist) as temporary:
        folder = Path(temporary) / folder_name
        (folder / 'resources').mkdir(parents=True)
        for name in RUNTIME_FILES:
            shutil.copyfile(runtime / name, folder / name)
        for name in APPLICATION_NOTICES:
            shutil.copyfile(source / name, folder / name)
        shutil.copytree(runtime / 'locales', folder / 'locales')
        asar_hash, app_files = pack_asar(source, folder / 'resources' / 'app.asar')
        report = rebrand_executable(executables[0], folder / 'CBN Boost.exe', asar_hash, version)
        report.update(product='CBN Boost', version=version, platform='win32', arch='x64',
                      app_files=app_files, runtime_source=str(runtime.resolve()),
                      runtime_execution_tested=False, runtime_reused=True,
                      original_main_bytecode_included=False, recovered_renderer_modified=True,
                      original_server_integrations_included=False)
        (folder / 'BUILD-INFO.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
        (folder / 'LEIA-ME.txt').write_text(
            'CBN Boost ' + version + '\n\nExtraia toda esta pasta e abra CBN Boost.exe no Windows 10/11 x64.\n'
            'Mantenha as DLLs, locales e resources junto do executável.\n'
            'O Windows solicitará permissão de administrador ao abrir o aplicativo.\n'
            'Os ajustes só são executados quando selecionados na interface.\n'
            'Este pacote portátil não requer instalação nem chave de ativação.\n'
            'Runtime Electron reutilizado; aplicativo reconstruído em JavaScript editável.\n'
            'Licenças do runtime: LICENSE.electron.txt e LICENSES.chromium.html.\n'
            'Código recuperado e dependências: THIRD_PARTY_NOTICES.md e LICENSE.original.txt.\n'
            'Empacotado no Linux; execução no Windows ainda precisa de validação.\n', encoding='utf-8')
        files = sorted(p for p in folder.rglob('*') if p.is_file())
        hashes = '\n'.join(f'{sha(p.read_bytes())}  {p.relative_to(folder).as_posix()}' for p in files) + '\n'
        (folder / 'SHA256SUMS.txt').write_text(hashes, encoding='utf-8')
        final = dist / folder_name
        if final.exists():
            shutil.rmtree(final)
        shutil.move(str(folder), final)
    if not skip_zip:
        archive_path = dist / 'CBN-Boost-win-x64.zip'
        with zipfile.ZipFile(archive_path, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
            for path in sorted(final.rglob('*')):
                if path.is_file():
                    info = zipfile.ZipInfo(path.relative_to(dist).as_posix(), (2026, 1, 1, 0, 0, 0))
                    info.compress_type = zipfile.ZIP_DEFLATED
                    info.external_attr = 0o644 << 16
                    archive.writestr(info, path.read_bytes(), compresslevel=6)
        (dist / 'CBN-Boost-win-x64.zip.sha256').write_text(
            f'{sha(archive_path.read_bytes())}  {archive_path.name}\n', encoding='ascii')
        print(f'ZIP: {archive_path} ({archive_path.stat().st_size:,} bytes)')
    print(f'Executable: {final / "CBN Boost.exe"}')
    print(f'ASAR header SHA256: {asar_hash}; {len(app_files)} editable application files')
    print('Verified: resource round-trip, unchanged executable code/fuses, ASAR contents and hashes.')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, default=ROOT / 'cbn-boost')
    parser.add_argument('--runtime', type=Path, default=ROOT / '.recovery' / 'extracted')
    parser.add_argument('--dist', type=Path, default=ROOT / 'dist')
    parser.add_argument('--skip-zip', action='store_true')
    args = parser.parse_args()
    build(args.source.resolve(), args.runtime.resolve(), args.dist.resolve(), args.skip_zip)


if __name__ == '__main__':
    main()
