#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const scripts = {
  build_size: 'build_size.sh',
  clean_and_rebuild: 'clean_and_rebuild.sh',
  setup: 'setup.sh',
  structure: 'structure.txt',
  unused_imports_list: 'unused_imports_list.sh',
  unused_imports_uninstall: 'unused_imports_uninstall.sh',
  update_dependencies: 'update_dependencies.sh',
};

const runScript = (scriptName) => {
  const script = scripts[scriptName];
  if (!script) {
    console.error(`Unknown script: ${scriptName}`);
    process.exit(1);
  }

  const scriptPath = path.join(__dirname, '..', script);
  console.log(`Running ${script}...`);
  try {
    execSync(`bash ${scriptPath}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to run ${script}: ${error.message}`);
  }
};

// Get command-line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Please provide a script name to run.');
  console.log('Available scripts: ', Object.keys(scripts).join(', '));
  process.exit(0);
}

runScript(args[0]);