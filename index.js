#!/usr/bin/env node

const program = require('commander');

const utils = require('./utils');

const VERSION = require('./package.json').version;

program
  .version(VERSION)
  .description('Tuture makes writing interactive, step-by-step tutorials enjoyable.');

/**
 * tuture init
 */
program
  .command('init')
  .description('initialize a Tuture tutorial')
  .option('-y, --yes', 'do not ask for prompts and fill in default values')
  .action(async (options) => {
    utils.initTuture(options);
  });

/**
 * tuture up
 */
program
  .command('up')
  .description('render your tutorial in the browser')
  .action(() => {
    utils.startRenderer();
  });

/**
 * tuture destroy
 */
program
  .command('destroy')
  .description('delete all Tuture files')
  .option('-f, --force', 'destroy without confirmation')
  .action((options) => {
    utils.destroyTuture(options);
  });

program
  .action((cmd) => {
    utils.handleUnknownCmd(cmd);
  });

// If no arguments or options provided, just print help page
if (process.argv.length === 2) {
  program.help();
}

program.parse(process.argv);
