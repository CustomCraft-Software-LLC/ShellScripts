#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

// Helper function to resolve the correct script path
const resolveScriptPath = (scriptName) => {
  let distPath = path.resolve(__dirname, '../dist/scripts', scriptName);
  if (fs.existsSync(distPath)) {
    return distPath;
  }

  let srcPath = path.resolve(__dirname, '../scripts', scriptName);
  if (fs.existsSync(srcPath)) {
    return srcPath;
  }

  return null;
};

// Define the list of scripts to test
const scripts = [
  'build_size.sh',
  'clean_and_rebuild.sh',
  'clean_unused_dependencies.sh',
  'create_component.sh',
  'create_component_react_native.sh',
  'create_screen_react_native.sh',
  'create_route_gatsby.sh',
  'create_env.sh',
  'create_hook.sh',
  'analyze_bundle.sh',
  'setup.sh',
  'unused_imports_list.sh',
  'unused_imports_uninstall.sh',
  'update_dependencies.sh',
];

// Function to run a script
const runScript = (scriptName) => {
  const scriptPath = resolveScriptPath(scriptName);
  if (!scriptPath) {
    console.error(chalk.red(`Script not found: ${scriptName}`));
    return;
  }

  console.log(chalk.blue(`Running ${scriptName}...`));
  try {
    execSync(`bash "${scriptPath}"`, { stdio: 'inherit' });
    console.log(chalk.green(`${scriptName} executed successfully.`));
  } catch (error) {
    console.error(chalk.red(`Failed to run ${scriptName}: ${error.message}`));
  }
};

// Run all scripts
const runAllScripts = () => {
  scripts.forEach(runScript);
};

// Execute the test runner
runAllScripts();