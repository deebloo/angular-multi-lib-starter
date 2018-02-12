#! /usr/bin/env node

'use strict';

import { removeSync } from 'fs-extra';

require('../package.json').packages.forEach(m => {
  removeSync(m + '/dist');
});
