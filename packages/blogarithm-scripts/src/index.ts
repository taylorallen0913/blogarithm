#!/usr/bin/env node

import start from './start';
import build from './build';

const args = process.argv.slice(2);

switch (args[0]) {
  case 'start':
    start();
    break;
  case 'build':
    build();
    break;
  default:
    break;
}
