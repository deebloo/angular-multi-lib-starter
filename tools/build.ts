'use strict';

import { resolve, join } from 'path';
import { mkdirpSync, copySync } from 'fs-extra';
import { ngPackagr } from 'ng-packagr';

export default m => {
  const project = resolve(__dirname, '../', m, 'ng-package.json');
  const config = require(project);

  return ngPackagr()
    .forProject(project)
    .build()
    .catch(err => process.exit(111))
    .then(() => {
      (config.lib.assets || [])
        .map(style => ({
          src: join(__dirname, '../', m, style),
          dest: join(__dirname, '../', m, 'dist', style)
        }))
        .forEach(file => {
          const filePath = file.dest.split('/');

          filePath.pop();

          mkdirpSync(filePath.join('/') + '/');
          copySync(file.src, file.dest);
        });
    });
};
