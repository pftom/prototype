const cp = require('child_process');
const fs = require('fs-extra');
const minimatch = require('minimatch');
const path = require('path');
const signale = require('signale');

exports.TUTURE_ROOT = '.tuture';

// Filename patterns that shoule be collapsed in renderer.
const collapsedFiles = [
  '.gitignore',
  'package-lock.json',
  'yarn.lock',
];

/**
 * Return whether a file should be collapsed.
 * @param {String} fileName Name of file to check
 */
exports.shouldBeCollapsed = fileName =>
  collapsedFiles.some(pattern => minimatch(path.basename(fileName), pattern));

/**
 * Check if .tuture directory and tuture.yml both exists.
 */
exports.ifTutureSuiteExists = () =>
  fs.existsSync(this.TUTURE_ROOT) && fs.existsSync('tuture.yml');

/**
 * Remove all Tuture-related files.
 */
exports.removeTutureSuite = async () => {
  await fs.remove('tuture.yml');
  await fs.remove(this.TUTURE_ROOT);
};

/**
<<<<<<< HEAD:utils/common.js
 * Check cwd is a valid Git repo with at least one commit.
 */
exports.checkGitEnv = () => {
  const subprocess = cp.spawnSync('git', ['log']);
  if (subprocess.status) {
    signale.fatal(subprocess.stderr.toString().replace('fatal:', ''));
    process.exit(1);
  }
=======
 * Output error message and exit with status 1.
 * @param {String} message Error message
 */
exports.errAndExit = (message) => {
  signale.fatal(message.trim().replace('fatal: ', ''));
  process.exit(1);
>>>>>>> upstream/master:lib/common.js
};
