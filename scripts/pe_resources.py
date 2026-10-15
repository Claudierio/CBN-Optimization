"""Small, dependency-free PE resource reader/writer for the recovered runtime.

Rebuilds only the existing resource section; never edits executable code or fuses.
Refuses signed files and resource growth beyond the section's reserved capacity.
"""
from __future__ import annotations

import struct


def align(value, boundary=4):
    return (value + boundary - 1) // boundary * boundary


class PE:
    def __init__(self, data):
        self.data = bytearray(data)
        self.pe = struct.unpack_from('<I', data, 60)[0]
        if data[:2] != b'MZ' or data[self.pe:self.pe + 4] != b'PE\0\0':
            raise ValueError('Not a PE executable')
        self.opt = self.pe + 24
        magic = struct.unpack_from('<H', data, self.opt)[0]
        if magic not in (0x10b, 0x20b):
            raise ValueError('Unsupported PE optional header')
        self.dirs = self.opt + (112 if magic == 0x20b else 96)
        count = struct.unpack_from('<H', data, self.pe + 6)[0]
        opts = struct.unpack_from('<H', data, self.pe + 20)[0]
        self.sections = []
        for i in range(count):
            off = self.opt + opts + 40 * i
            size, va, rawsize, raw = struct.unpack_from('<IIII', data, off + 8)
            self.sections.append(dict(header=off, size=size, va=va,
                                      rawsize=rawsize, raw=raw,
                                      name=bytes(data[off:off + 8]).rstrip(b'\0').decode()))
        self.resource_rva, _ = struct.unpack_from('<II', data, self.dirs + 16)
        self.resource_root = self.raw(self.resource_rva)
        self.resource_section = next(s for s in self.sections
                                     if s['va'] <= self.resource_rva < s['va'] + s['size'])

    def raw(self, rva):
        for section in self.sections:
            if section['va'] <= rva < section['va'] + max(section['size'], section['rawsize']):
                return section['raw'] + rva - section['va']
        raise ValueError(f'Unmapped PE RVA: {rva:x}')

    def resources(self):
        found = {}

        def visit(offset, path):
            pos = self.resource_root + offset
            named, ids = struct.unpack_from('<HH', self.data, pos + 12)
            for index in range(named + ids):
                name, target = struct.unpack_from('<II', self.data, pos + 16 + index * 8)
                if name & 0x80000000:
                    ptr = self.resource_root + (name & 0x7fffffff)
                    length = struct.unpack_from('<H', self.data, ptr)[0]
                    name = self.data[ptr + 2:ptr + 2 + length * 2].decode('utf-16le')
                if target & 0x80000000:
                    visit(target & 0x7fffffff, path + (name,))
                else:
                    addr, size, codepage, _ = struct.unpack_from('<IIII', self.data,
                                                               self.resource_root + target)
                    start = self.raw(addr)
                    found[path + (name,)] = (bytes(self.data[start:start + size]), codepage)

        visit(0, ())
        return found

    def replace_resources(self, resources):
        if any(struct.unpack_from('<II', self.data, self.dirs + 4 * 8)):
            raise ValueError('Refusing to modify an Authenticode-signed runtime')
        tree = {}
        for path, leaf in resources.items():
            node = tree
            for key in path[:-1]:
                node = node.setdefault(key, {})
            node[path[-1]] = leaf
        blob = bytearray()
        leaves = []

        def allocate(size):
            offset = align(len(blob))
            blob.extend(b'\0' * (offset + size - len(blob)))
            return offset

        def emit(node):
            keys = sorted(node, key=lambda k: (not isinstance(k, str), k))
            offset = allocate(16 + 8 * len(keys))
            named = sum(isinstance(k, str) for k in keys)
            struct.pack_into('<HH', blob, offset + 12, named, len(keys) - named)
            for index, key in enumerate(keys):
                name = key
                if isinstance(key, str):
                    encoded = key.encode('utf-16le')
                    name_offset = allocate(2 + len(encoded))
                    struct.pack_into('<H', blob, name_offset, len(encoded) // 2)
                    blob[name_offset + 2:name_offset + 2 + len(encoded)] = encoded
                    name = name_offset | 0x80000000
                child = node[key]
                if isinstance(child, dict):
                    target = emit(child) | 0x80000000
                else:
                    target = allocate(16)
                    leaves.append((target, child))
                struct.pack_into('<II', blob, offset + 16 + index * 8, name, target)
            return offset

        assert emit(tree) == 0
        for entry, (payload, codepage) in leaves:
            offset = allocate(len(payload))
            blob[offset:offset + len(payload)] = payload
            struct.pack_into('<IIII', blob, entry, self.resource_rva + offset,
                             len(payload), codepage, 0)
        section = self.resource_section
        capacity = section['raw'] + section['rawsize'] - self.resource_root
        if len(blob) > capacity:
            raise ValueError(f'Resources need {len(blob)} bytes; only {capacity} reserved')
        self.data[self.resource_root:self.resource_root + capacity] = blob + b'\0' * (capacity - len(blob))
        struct.pack_into('<II', self.data, self.dirs + 16, self.resource_rva, len(blob))
        # Keep the original section size/layout and loader flags; checksum zero is
        # valid for a normal user-mode executable and avoids a stale checksum.
        struct.pack_into('<I', self.data, self.opt + 64, 0)
        if PE(self.data).resources() != resources:
            raise ValueError('PE resource round-trip verification failed')
        return bytes(self.data)


def version_block(key, value=b'', children=(), text=False):
    encoded_key = (key + '\0').encode('utf-16le')
    out = bytearray(struct.pack('<HHH', 0, len(value) // 2 if text else len(value), int(text)))
    out.extend(encoded_key)
    out.extend(b'\0' * (align(len(out)) - len(out)))
    out.extend(value)
    for child in children:
        out.extend(b'\0' * (align(len(out)) - len(out)))
        out.extend(child)
    struct.pack_into('<H', out, 0, len(out))
    return bytes(out)


def make_version_info(version):
    parts = [int(x) for x in version.split('.')]
    parts = (parts + [0, 0, 0, 0])[:4]
    if any(x < 0 or x > 65535 for x in parts):
        raise ValueError('Version components must fit in 16 bits')
    ms, ls = (parts[0] << 16) | parts[1], (parts[2] << 16) | parts[3]
    fixed = struct.pack('<13I', 0xfeef04bd, 0x10000, ms, ls, ms, ls,
                        0x3f, 0, 0x40004, 1, 0, 0, 0)
    labels = dict(CompanyName='CBN', FileDescription='CBN Boost',
                  FileVersion=version, InternalName='CBN Boost',
                  OriginalFilename='CBN Boost.exe', ProductName='CBN Boost',
                  ProductVersion=version)
    strings = [version_block(k, (v + '\0').encode('utf-16le'), text=True)
               for k, v in labels.items()]
    table = version_block('040904b0', children=strings, text=True)
    stringinfo = version_block('StringFileInfo', children=[table], text=True)
    translation = version_block('Translation', struct.pack('<HH', 0x409, 1200))
    varinfo = version_block('VarFileInfo', children=[translation], text=True)
    return version_block('VS_VERSION_INFO', fixed, [stringinfo, varinfo])
