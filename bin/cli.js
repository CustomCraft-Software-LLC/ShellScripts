#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

// Define paths to scripts using path.resolve
const scripts = {
  build_size: path.resolve(__dirname, '../scripts/build_size.sh'),
  clean_and_rebuild: path.resolve(__dirname, '../scripts/clean_and_rebuild.sh'),
  create_component: path.resolve(__dirname, '../scripts/create_component.sh'),
  setup: path.resolve(__dirname, '../scripts/setup.sh'),
  unused_imports_list: path.resolve(__dirname, '../scripts/unused_imports_list.sh'),
  unused_imports_uninstall: path.resolve(__dirname, '../scripts/unused_imports_uninstall.sh'),
  update_dependencies: path.resolve(__dirname, '../scripts/update_dependencies.sh'),
};

// Function to run a script
const runScript = (scriptName, args) => {
  const script = scripts[scriptName];
  if (!script) {
    console.error(`Unknown script: ${scriptName}`);
    process.exit(1);
  }

  console.log(`Running ${script}...`);
  try {
    execSync(`bash ${script} ${args.join(' ')}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to run ${script}: ${error.message}`);
  }
};

// Get command-line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Please provide a command to run.');
  console.log('Available commands: create-component, build-size, clean-and-rebuild, setup, unused-imports-list, unused-imports-uninstall, update-dependencies');
  process.exit(0);
}

// Handle different commands
const command = args[0];
switch (command) {
  case 'create-component':
    // Pass the rest of the arguments to the create_component script
    runScript('create_component', args.slice(1));
    break;
  case 'build-size':
    runScript('build_size');
    break;
  case 'clean-and-rebuild':
    runScript('clean_and_rebuild');
    break;
  case 'setup':
    runScript('setup');
    break;
  case 'unused-imports-list':
    runScript('unused_imports_list');
    break;
  case 'unused-imports-uninstall':
    runScript('unused_imports_uninstall');
    break;
  case 'update-dependencies':
    runScript('update_dependencies');
    break;
  default:
    console.error(`Unknown command: ${command}`);
    process.exit(1);
}