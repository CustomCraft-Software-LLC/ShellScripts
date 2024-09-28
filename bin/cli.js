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
const runScript = (scriptName) => {
  const script = scripts[scriptName];
  if (!script) {
    console.error(`Unknown script: ${scriptName}`);
    process.exit(1);
  }

  console.log(`Running ${script}...`);
  try {
    execSync(`bash ${script}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to run ${script}: ${error.message}`);
  }
};

// Get command-line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Please provide a script name to run.');
  console.log('Available scripts:', Object.keys(scripts).join(', '));
  process.exit(0);
}

runScript(args[0]);