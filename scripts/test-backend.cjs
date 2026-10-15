'use strict';
const fs = require('node:fs');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
for (const directory of [path.join(__dirname, '../cbn-boost/tests'),path.join(__dirname,'../tests')]) {
  for (const filename of fs.readdirSync(directory).filter(name => name.endsWith('.test.cjs')).sort()) {
    const result = spawnSync(process.execPath, [path.join(directory,filename)], {stdio:'inherit',shell:false});
    if (result.error) throw result.error;
    if (result.status !== 0) {process.exit(result.status||1);}
  }
}
