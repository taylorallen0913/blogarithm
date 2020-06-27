#!/usr/bin/env node

import args from 'args';
import fs from 'fs';
import { displayHeader } from './utils/header';

const createProject = (args: Array<string>): void => {
  if (args[args.indexOf('init') + 1] !== undefined) {
    displayHeader();
    const projectName = args[args.indexOf('init') + 1];
    fs.mkdirSync(projectName);
    console.log(projectName);
  }
};

args.command('init', 'Initializes new project', () =>
  createProject(process.argv),
);

const flags = args.parse(process.argv);
