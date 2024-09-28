#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Directory where scripts are located
const scriptsDir = path.join(__dirname, '..', 'scripts');

// Function to get all scripts in the scripts directory
const getScripts = () => {
  return fs.readdirSync(scriptsDir)
    .filter(file => file.endsWith('.sh') || file.endsWith('.txt')) // Filter for shell scripts and text files
    .map(file => path.basename(file, path.extname(file))); // Return filenames without extensions
};

// Function to run a script
const runScript = (scriptName, additionalArgs) => {
  const scriptPath = path.join(scriptsDir, `${scriptName}.sh`);

  // Check if the script exists
  if (!fs.existsSync(scriptPath)) {
    console.error(`Unknown script: ${scriptName}`);
    console.log('Available scripts: ', getScripts().join(', '));
    process.exit(1);
  }

  console.log(`Running ${scriptName}.sh...`);
  
  try {
    execSync(`bash ${scriptPath} ${additionalArgs}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to run ${scriptName}: ${error.message}`);
  }
};

// Get command-line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Please provide a script name to run.');
  console.log('Available scripts: ', getScripts().join(', '));
  process.exit(0);
}

// Check if the first argument is a script name and the rest are additional arguments
const scriptName = args[0];
const additionalArgs = args.slice(1).join(' '); // Join any additional arguments

// Run the specified script with additional arguments
runScript(scriptName, additionalArgs);