#!/usr/bin/env node

import fs from 'fs';
import args from 'args';
import chalk from 'chalk';
import start from './start';
import build from './build';

args
  .command('start', 'Starts app on development server', start)
  .command('build', 'Builds and optimizes project', build);
