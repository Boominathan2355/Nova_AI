import chalk from 'chalk';
import { execSync } from 'child_process';
import os from 'os';

// Get git hash with fallback
const getGitHash = () => {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch {
    return 'no-git-info';
  }
};

const commitJson = {
  hash: getGitHash(),
  version: process.env.npm_package_version || 'unknown',
};

const purple = chalk.hex('#9c7dff');
const gold = chalk.hex('#ffd700');
const gray = chalk.gray;

console.clear();

console.log(purple(`
   _  _____  _____ _ 
  | \\| | _ \\| _ \\ /_\\
  | .  | (_) |   / _ \\
  |_|\\_|\\___/|_|_\\_/ \\_\\
`));

console.log(gold(`  ✨ THE FUTURE OF LOCAL AI IS HERE ✨`));
console.log(gray(`  ──────────────────────────────────────────`));

console.log(`${purple('  📍 VERSION ')}  ${gold(`v${commitJson.version}`)}`);
console.log(`${purple('  📍 COMMIT  ')}  ${gray(commitJson.hash)}`);
console.log(`${purple('  📍 NODE    ')}  ${gray(process.version)}`);
console.log(`${purple('  📍 OS      ')}  ${gray(`${os.type()} ${os.release()}`)}`);

console.log(gray(`  ──────────────────────────────────────────`));
console.log(purple('  🚀 Initializing Nova Engine...'));
console.log(gray('     Please wait for the local URL to appear below'));
console.log(gray(`  ──────────────────────────────────────────\n`));
