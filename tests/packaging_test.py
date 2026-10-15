"""Checks for the offline ASAR/PE packaging boundary, without executing Windows code."""
from __future__ import annotations

import hashlib
import importlib.util
import json
from pathlib import Path
import shutil
import struct
import subprocess
import sys
import tempfile
import unittest

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / 'scripts'))
spec = importlib.util.spec_from_file_location('build_portable', ROOT / 'scripts/build-portable.py')
builder = importlib.util.module_from_spec(spec)
spec.loader.exec_module(builder)
from pe_resources import PE


class AsarBoundaryTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)
        self.source = self.root / 'app'
        self.source.mkdir()
        (self.source / 'package.json').write_text('{"name":"fixture","main":"main.cjs"}')
        (self.source / 'main.cjs').write_text('module.exports = "CBN Boost";\n')
        (self.source / 'nested').mkdir()
        (self.source / 'nested' / 'empty.txt').touch()
        # Exercise the 4-MiB block boundary used by Electron's integrity metadata.
        (self.source / 'nested' / 'large.bin').write_bytes(b'abc123' * (builder.BLOCK_SIZE // 6 + 1))

    def test_official_asar_extracts_identical_files_and_header_hash(self):
        local = ROOT / 'node_modules/@electron/asar/lib/asar.js'
        npm_root = Path.home() / '.npm/_npx'
        candidates = ([local] if local.is_file() else []) + sorted(
            npm_root.glob('*/node_modules/@electron/asar/lib/asar.js'))
        if not candidates or not shutil.which('node'):
            self.skipTest('An official cached @electron/asar and Node are needed for independent verification')
        archive = self.root / 'test.asar'
        digest, names = builder.pack_asar(self.source, archive)
        script = '''
import crypto from 'node:crypto';
import * as asar from %s;
const [archive, destination] = process.argv.slice(1);
asar.extractAll(archive, destination);
const header = asar.getRawHeader(archive);
process.stdout.write(JSON.stringify({files:asar.listPackage(archive),
 hash:crypto.createHash('sha256').update(header.headerString).digest('hex')}));
''' % json.dumps(candidates[0].as_uri())
        result = subprocess.run(['node', '--input-type=module', '-e', script,
                                 str(archive), str(self.root / 'extracted')],
                                text=True, capture_output=True, check=True)
        official = json.loads(result.stdout)
        self.assertEqual(official['hash'], digest)
        extracted = self.root / 'extracted'
        actual = sorted(p.relative_to(extracted).as_posix() for p in extracted.rglob('*') if p.is_file())
        self.assertEqual(actual, sorted(names))
        for name in names:
            self.assertEqual((self.source / name).read_bytes(), (extracted / name).read_bytes())

    def test_compiled_original_bytecode_is_rejected(self):
        (self.source / 'index.jsc').write_bytes(b'original compiled main')
        with self.assertRaisesRegex(ValueError, 'compiled artifact'):
            builder.pack_asar(self.source, self.root / 'bad.asar')

    def test_symlinks_outside_application_are_rejected(self):
        (self.source / 'leak.txt').symlink_to(ROOT / 'TogsBoost-Setup.exe')
        with self.assertRaisesRegex(ValueError, 'Symlinks'):
            builder.pack_asar(self.source, self.root / 'bad.asar')

    def test_archives_are_deterministic(self):
        builder.pack_asar(self.source, self.root / 'first.asar')
        builder.pack_asar(self.source, self.root / 'second.asar')
        self.assertEqual((self.root / 'first.asar').read_bytes(), (self.root / 'second.asar').read_bytes())

    def test_test_suite_excluded_and_licenses_included(self):
        (self.source / 'tests').mkdir()
        (self.source / 'tests' / 'unit.cjs').write_text('throw new Error("test only");')
        (self.source / 'LICENSE.original.txt').write_text('Original notices')
        (self.source / 'THIRD_PARTY_NOTICES.md').write_text('Third-party notices')
        _digest, names = builder.pack_asar(self.source, self.root / 'app.asar')
        self.assertNotIn('tests/unit.cjs', names)
        self.assertIn('LICENSE.original.txt', names)
        self.assertIn('THIRD_PARTY_NOTICES.md', names)


class RuntimeResourceTests(unittest.TestCase):
    @unittest.skipUnless((ROOT / '.recovery/extracted/togsboost.exe').is_file(), 'Recovered runtime is not available')
    def test_rebranding_preserves_manifest_code_and_fuses(self):
        original = ROOT / '.recovery/extracted/togsboost.exe'
        with tempfile.TemporaryDirectory() as tmp:
            output = Path(tmp) / 'CBN Boost.exe'
            report = builder.rebrand_executable(original, output, 'b' * 64, '1.0.0')
            before_data, after_data = original.read_bytes(), output.read_bytes()
            before, after = PE(before_data), PE(after_data)
            old_resources, resources = before.resources(), after.resources()
            self.assertEqual(report['manifest_execution_level'], 'requireAdministrator')
            self.assertTrue(report['manifest_preserved'])
            self.assertEqual(builder.fuse_wire(before_data)[0], builder.fuse_wire(after_data)[0])
            for key, value in old_resources.items():
                if key[0] == 24:
                    self.assertEqual(resources[key], value)
                    self.assertIn(b'level="requireAdministrator"', resources[key][0])
            for section in before.sections:
                if section['name'] != '.rsrc':
                    start, size = section['raw'], section['rawsize']
                    self.assertEqual(hashlib.sha256(before_data[start:start + size]).digest(),
                                     hashlib.sha256(after_data[start:start + size]).digest())
            version = next(value[0] for key, value in resources.items() if key[0] == 16)
            self.assertIn('CBN Boost'.encode('utf-16le'), version)
            self.assertNotIn('TogsBoost'.encode('utf-16le'), version)
            for key, (payload, _cp) in resources.items():
                self.assertNotIn(b'TogsBoost', payload)
                self.assertNotIn('TogsBoost'.encode('utf-16le'), payload)
                if key[0] == 3:
                    self.assertTrue(payload.startswith(b'\x89PNG\r\n\x1a\n'))
                if key[:2] == ('INTEGRITY', 'ELECTRONASAR'):
                    self.assertEqual(json.loads(payload)[0]['value'], 'b' * 64)

    @unittest.skipUnless((ROOT / '.recovery/extracted/togsboost.exe').is_file(), 'Recovered runtime is not available')
    def test_signed_executables_are_rejected(self):
        data = bytearray((ROOT / '.recovery/extracted/togsboost.exe').read_bytes())
        pe = PE(data)
        struct.pack_into('<II', data, pe.dirs + 4 * 8, 256, 128)
        signed = PE(data)
        with self.assertRaisesRegex(ValueError, 'Authenticode-signed'):
            signed.replace_resources(signed.resources())


if __name__ == '__main__':
    unittest.main()
