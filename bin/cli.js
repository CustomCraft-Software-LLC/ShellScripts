#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');  // For colored output
const columnify = require('columnify'); // For pretty-printed columns

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

// Define script paths dynamically
const scripts = {
  build_size: resolveScriptPath('build_size.sh'),
  clean_and_rebuild: resolveScriptPath('clean_and_rebuild.sh'),
  clean_unused_dependencies: resolveScriptPath('clean_unused_dependencies.sh'),
  create_component: resolveScriptPath('create_component.sh'),
  create_component_react_native: resolveScriptPath('create_component_react_native.sh'),
  create_screen_react_native: resolveScriptPath('create_screen_react_native.sh'),
  create_route_gatsby: resolveScriptPath('create_route_gatsby.sh'),
  create_env: resolveScriptPath('create_env.sh'),
  create_hook: resolveScriptPath('create_hook.sh'),
  analyze_bundle: resolveScriptPath('analyze_bundle.sh'),
  setup: resolveScriptPath('setup.sh'),
  unused_imports_list: resolveScriptPath('unused_imports_list.sh'),
  unused_imports_uninstall: resolveScriptPath('unused_imports_uninstall.sh'),
  update_dependencies: resolveScriptPath('update_dependencies.sh'),
};

// Command descriptions for help output
const commandDescriptions = [
  { command: 'create-component', description: 'Create a new component for the project.' },
  { command: 'create-component-react-native', description: 'Create a new React Native component.' },
  { command: 'create-screen-react-native', description: 'Create a new React Native screen.' },
  { command: 'create-env', description: 'Create a .env file with default settings.' },
  { command: 'create-route-gatsby', description: 'Create a new route in a Gatsby project.' },
  { command: 'create-hook', description: 'Create a custom React hook.' },
  { command: 'build-size', description: 'Get the size of the build.' },
  { command: 'clean-and-rebuild', description: 'Clean and rebuild the project.' },
  { command: 'clean-unused-dependencies', description: 'Remove unused dependencies from the project.' },
  { command: 'setup', description: 'Run project setup script.' },
  { command: 'unused-imports-list', description: 'List unused imports in the project.' },
  { command: 'unused-imports-uninstall', description: 'Uninstall packages that are no longer imported.' },
  { command: 'update-dependencies', description: 'Update project dependencies.' },
  { command: 'analyze-bundle', description: 'Analyze the project bundle size.' },
  { command: 'help', description: 'Show this help message.' },
];

// Function to run a script
const runScript = (scriptName, args) => {
  const script = scripts[scriptName];
  if (!script) {
    console.error(chalk.red(`Unknown script or script not found: ${scriptName}`));
    process.exit(1);
  }

  console.log(chalk.green(`Running ${script}...`));
  try {
    execSync(`bash "${script}" ${args.join(' ')}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(chalk.red(`Failed to run ${script}: ${error.message}`));
    process.exit(1);
  }
};

// Function to show help message
const showHelp = () => {
  console.log(chalk.bold.blue('Available commands:'));
  
  const columns = columnify(commandDescriptions, {
    columnSplitter: '   ',  // Adjust spacing between columns
    config: { description: { maxWidth: 60 } }  // Limits description width
  });

  console.log(chalk.yellow(columns));
};

// Get command-line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  showHelp();
  process.exit(0);
}

// Handle different commands
const command = args[0];
switch (command) {
  case 'create-component':
    runScript('create_component', args.slice(1));
    break;
  case 'create-component-react-native':
    runScript('create_component_react_native', args.slice(1));
    break;
  case 'create-screen-react-native':
    runScript('create_screen_react_native', args.slice(1));
    break;
  case 'create-env':
    runScript('create_env', []);
    break;
  case 'create-route-gatsby':
    runScript('create_route_gatsby', args.slice(1));
    break;
  case 'create-hook':
    runScript('create_hook', args.slice(1));
    break;
  case 'build-size':
    runScript('build_size', []);
    break;
  case 'clean-and-rebuild':
    runScript('clean_and_rebuild', []);
    break;
  case 'clean-unused-dependencies':
    runScript('clean_unused_dependencies', []);
    break;
  case 'setup':
    runScript('setup', []);
    break;
  case 'unused-imports-list':
    runScript('unused_imports_list', []);
    break;
  case 'unused-imports-uninstall':
    runScript('unused_imports_uninstall', []);
    break;
  case 'update-dependencies':
    runScript('update_dependencies', []);
    break;
  case 'analyze-bundle':
    runScript('analyze_bundle', []);
    break;
  case 'help':
    showHelp();
    break;
  default:
    console.error(chalk.red(`Unknown command: ${command}`));
    showHelp();
    process.exit(1);
}