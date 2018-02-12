#! /usr/bin/env node

'use strict';

import { exec } from 'child_process';
import { readJsonSync, removeSync } from 'fs-extra';

const projectPackageJson = readJsonSync(`${process.cwd()}/package.json`);

projectPackageJson.packages.forEach(m => {
  exec(`npm link ${m}`, err => {
    if (err) {
      console.error(err);
    }
    const path = m.split('/');

    removeSync(m + '/node_modules');
    removeSync(m + '/package-lock.json');

    console.log(`${path[path.length - 1]} linked`);
  });
});
