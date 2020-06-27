#!/usr/bin/env node

import path from 'path';
import args from 'args';
import clear from 'clear';
import chalk from 'chalk';
import figlet from 'figlet';
import listr from 'listr';
import fs from 'fs';
import ncp from 'ncp';

const displayHeader = (): void => {
  clear();
  console.log(chalk.blue(figlet.textSync('Blogarithm') + '\n'));
};

const copyTemplate = (dir: string, templateDir: string): void => {
  ncp(templateDir, dir, (err) => {
    if (err) console.log(err);
  });
};

const initGit = async () => {};

const runTasks = async (dir: string, templateDir: string): Promise<void> => {
  const tasks = new listr([
    {
      title: 'Copying template',
      task: async () => {
        copyTemplate(dir, templateDir);
      },
    },
    {
      title: 'Initializing GitHub repository',
      task: () => {},
    },
  ]);
  await tasks.run();
};

const createProject = (args: Array<string>): void => {
  if (args[args.indexOf('init') + 1] !== undefined) {
    const projectName = args[args.indexOf('init') + 1];
    fs.mkdir(projectName, async (err) => {
      if (err) {
        console.log(
          `${chalk.red('ERROR')} –– ${chalk.yellow(
            'Directory with project name already exists',
          )}`,
        );
        process.exit();
      }
      const dir = projectName;
      // change later to dynamic template
      const templateDir = path.resolve(__dirname, '../templates/javascript');
      displayHeader();
      await runTasks(dir, templateDir);
    });
  }
};

args.command('init', 'Initializes new project', () =>
  createProject(process.argv),
);

const flags = args.parse(process.argv);
