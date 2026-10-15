"""Bounded extractor for the LZMA 7z payload embedded in the supplied NSIS installer.
Format reference: https://github.com/ip7z/7zip/blob/master/DOC/7zFormat.txt
Rejects unsupported coder layouts and verifies available CRCs. Never executes input.
"""
from pathlib import Path
import hashlib, json, lzma, struct, sys, zlib

class Reader:
    def __init__(self, data): self.data, self.pos = data, 0
    def take(self,n):
        b=self.data[self.pos:self.pos+n]; assert len(b)==n; self.pos+=n; return b
    def byte(self): return self.take(1)[0]
    def expect(self,n):
        v=self.byte(); assert v==n,(self.pos-1,v,n)
    def num(self):
        first=self.byte(); value=0
        for i in range(8):
            if not first & (0x80>>i): return value | ((first & ((0x80>>i)-1))<<(8*i))
            value |= self.byte()<<(8*i)
        return value
    def bits(self,n):
        b=self.take((n+7)//8); return [bool(b[i//8] & (0x80>>(i%8))) for i in range(n)]
    def crcs(self,n):
        flags=[True]*n if self.byte() else self.bits(n)
        return [int.from_bytes(self.take(4),'little') if f else None for f in flags]

def streams(r):
    r.expect(6); pos=r.num(); packs=r.num(); r.expect(9)
    sizes=[r.num() for _ in range(packs)]; k=r.byte()
    if k==10: r.crcs(packs); k=r.byte()
    assert k==0
    r.expect(7); r.expect(11); nf=r.num(); r.expect(0); folders=[]
    for _ in range(nf):
        nc=r.num(); coders=[]; nin=0; nout=0
        for _ in range(nc):
            flag=r.byte(); assert not flag&0x80
            method=r.take(flag&15)
            ins,outs=(r.num(),r.num()) if flag&16 else (1,1)
            props=r.take(r.num()) if flag&32 else b''
            coders.append(dict(method=method,props=props,ins=list(range(nin,nin+ins)),outs=list(range(nout,nout+outs))))
            nin+=ins; nout+=outs
        binds=dict((r.num(),r.num()) for _ in range(nout-1))
        nstreams=nin-len(binds)
        indices=[r.num() for _ in range(nstreams)] if nstreams>1 else [i for i in range(nin) if i not in binds]
        folders.append(dict(coders=coders,binds=binds,indices=indices,nout=nout))
    r.expect(12)
    for f in folders:
        f['sizes']=[r.num() for _ in range(f['nout'])]
        f['final']=next(i for i in range(f['nout']) if i not in f['binds'].values())
    k=r.byte(); crcs=[None]*nf
    if k==10: crcs=r.crcs(nf); k=r.byte()
    assert k==0
    for f,c in zip(folders,crcs): f['crc']=c; f['count']=1
    k=r.byte()
    if k==8:
        k=r.byte()
        if k==13:
            for f in folders: f['count']=r.num()
            k=r.byte()
        if k==9:
            for f in folders:
                ss=[r.num() for _ in range(f['count']-1)]
                f['subsizes']=ss+[f['sizes'][f['final']]-sum(ss)]
            k=r.byte()
        if k==10:
            n=sum(f['count'] for f in folders if f['count']!=1 or f['crc'] is None)
            cs=iter(r.crcs(n))
            for f in folders: f['subcrcs']=[f['crc']] if f['count']==1 and f['crc'] is not None else [next(cs) for _ in range(f['count'])]
            k=r.byte()
        assert k==0; k=r.byte()
    assert k==0
    for f in folders:
        f.setdefault('subsizes',[f['sizes'][f['final']]])
        f.setdefault('subcrcs',[None]*f['count'])
    assert sum(len(f['indices']) for f in folders)==len(sizes)
    return pos,sizes,folders

def unpack(data, spec):
    pos,sizes,folders=spec; pos+=32; packed_sizes=iter(sizes)
    for f in folders:
        inputs={}; outputs={}
        for i in f['indices']:
            n=next(packed_sizes); inputs[i]=data[pos:pos+n]; pos+=n
        pending=list(f['coders'])
        while pending:
            for coder in pending:
                for i,o in f['binds'].items():
                    if o in outputs: inputs[i]=outputs[o]
                if not all(i in inputs for i in coder['ins']): continue
                method,props=coder['method'],coder['props']
                chunks=[inputs[i] for i in coder['ins']]; outsize=f['sizes'][coder['outs'][0]]
                assert len(coder['outs'])==1
                if method==b'\x03\x01\x01':
                    x=props[0]; filters=[dict(id=lzma.FILTER_LZMA1,lc=x%9,lp=x//9%5,pb=x//45,dict_size=int.from_bytes(props[1:],'little'))]
                elif method==b'!':
                    x=props[0]; filters=[dict(id=lzma.FILTER_LZMA2,dict_size=(2|(x&1))<<(x//2+11))]
                else: filters=None
                if filters:
                    out=lzma.LZMADecompressor(format=lzma.FORMAT_RAW,filters=filters).decompress(chunks[0],max_length=outsize+1)
                elif method==b'\x00': out=chunks[0]
                elif method==b'\x03\x03\x01\x1b':
                    from bcj2 import decode
                    out=decode(*chunks,outsize)
                else: raise ValueError(('Unsupported coder',method.hex()))
                assert len(out)==outsize,(method.hex(),len(out),outsize)
                outputs[coder['outs'][0]]=out; pending.remove(coder); break
            else: raise ValueError('Unresolved coder graph')
        out=outputs[f['final']]
        if f['crc'] is not None: assert zlib.crc32(out)==f['crc']
        offset=0
        for n,c in zip(f['subsizes'],f['subcrcs']):
            chunk=out[offset:offset+n]; offset+=n
            if c is not None: assert zlib.crc32(chunk)==c
            yield chunk

def main():
    source=Path(sys.argv[1]); dest=Path(sys.argv[2]); assert not dest.exists()
    original=source.read_bytes(); start=original.index(b"7z\xbc\xaf\x27\x1c"); data=original[start:]
    assert zlib.crc32(data[12:32])==int.from_bytes(data[8:12],'little')
    off,size,crc=struct.unpack_from('<QQI',data,12); header=data[32+off:32+off+size]
    assert zlib.crc32(header)==crc
    r=Reader(header); r.expect(23); header=b''.join(unpack(data,streams(r)))
    Path('.recovery/header.bin').write_bytes(header)
    r=Reader(header); r.expect(1); r.expect(4); spec=streams(r)
    print('folders',len(spec[2]),'coders',sorted({c['method'].hex() for f in spec[2] for c in f['coders']}))
    r.expect(5); n=r.num(); properties={}
    while True:
        k=r.byte()
        if not k: break
        properties[k]=r.take(r.num())
    names=properties[17]; assert names[0]==0
    names=names[1:].decode('utf-16le').split('\0')[:-1]; assert len(names)==n
    empties=Reader(properties[14]).bits(n) if 14 in properties else [False]*n
    emptyfiles=iter(Reader(properties[15]).bits(sum(empties)) if 15 in properties else [False]*sum(empties))
    paths=[]
    for name in names:
        p=dest / name.replace('\\','/'); assert p.resolve().is_relative_to(dest.resolve()); paths.append(p)
    Path('.recovery/names.json').write_text(json.dumps(names,indent=2))
    chunks=iter(unpack(data,spec)); manifest=[]
    dest.mkdir(parents=True)
    for name,p,empty in zip(names,paths,empties):
        if empty and not next(emptyfiles): p.mkdir(parents=True,exist_ok=True); continue
        content=b'' if empty else next(chunks)
        p.parent.mkdir(parents=True,exist_ok=True); p.write_bytes(content)
        manifest.append(dict(path=name,size=len(content),sha256=hashlib.sha256(content).hexdigest()))
    assert next(chunks,None) is None
    Path('.recovery/extraction-manifest.json').write_text(json.dumps(dict(source_sha256=hashlib.sha256(original).hexdigest(),embedded_offset=start,files=manifest),indent=2))
    print('Extracted',len(manifest),'files to',dest)

if __name__=='__main__': main()
