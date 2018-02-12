#! /usr/bin/env node

'use strict';

import { exec } from 'child_process';
import { removeSync } from 'fs-extra';

import build from './build';

const p = packages => {
  const go = i => {
    const m = packages[i];

    build(m).then(() => {
      exec(`npm link ./${m}/dist`, err => {
        if (err) {
          throw new Error(err.message);
        }

        const path = m.split('/');

        console.log(`${path[path.length - 1]} linked`);

        removeSync(m + '/dist/node_modules');
        removeSync(m + '/dist/package-lock.json');

        if (i < packages.length - 1) {
          go(i + 1);
        }
      });
    });
  };

  return go;
};

// package all modules starting from first in the list
p(require('../package.json').packages)(0);
