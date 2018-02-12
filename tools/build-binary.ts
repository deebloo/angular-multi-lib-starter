#! /usr/bin/env node

'use strict';

import { exec } from 'child_process';

require('../package.json').packages.forEach(m => {
  const path = m.split('/');
  const moduleName = path[path.length - 1];

  exec(`tar -zcvf builds/${moduleName}.tar.gz -C ${m}/dist .`, err => {
    if (err) {
      console.error(err);
    }

    console.log(`Binary for ${moduleName} created`);
  });
});
