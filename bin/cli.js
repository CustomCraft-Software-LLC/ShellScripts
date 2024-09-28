const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const scriptsDir = path.join(__dirname, '..', 'scripts');

// Get all script files from the scripts directory
const scripts = fs.readdirSync(scriptsDir).map(file => file.replace('.sh', ''));

// Function to run a shell script
const runScript = (scriptName) => {
  const script = `${scriptName}.sh`;
  const scriptPath = path.join(scriptsDir, script);
  
  if (!scripts.includes(scriptName)) {
    console.error(`Unknown script: ${scriptName}`);
    console.log(`Available scripts: ${scripts.join(', ')}`);
    process.exit(1);
  }

  console.log(`Running ${script}...`);
  try {
    execSync(`bash ${scriptPath}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to run ${script}: ${error.message}`);
  }
};

// Command handling
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Please provide a command.');
  process.exit(1);
}

const command = args[0];
const commandArgs = args.slice(1);

// Handle specific commands
if (command === 'create_component') {
  const componentName = commandArgs[0];
  const options = commandArgs.slice(1);
  
  // Call the script responsible for creating components here
  runScript(`create_component ${componentName} ${options.join(' ')}`);
} else {
  runScript(command);
}