import figlet from 'figlet';
import chalk from 'chalk';

export const displayHeader = async () => {
  console.log(chalk.blue(figlet.textSync('Blogarithm') + '\n'));
};
