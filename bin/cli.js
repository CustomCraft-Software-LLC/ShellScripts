#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk'); // For colored output
const columnify = require('columnify'); // For pretty-printed columns

// Helper function to resolve the correct script path
const resolveScriptPath = (scriptName) => {
    const distPath = path.resolve(__dirname, '../dist/scripts', scriptName);
    if (fs.existsSync(distPath)) {
        return distPath;
    }

    const srcPath = path.resolve(__dirname, '../scripts', scriptName);
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
    { command: chalk.bold.cyan('create-component'), description: chalk.yellow('Create a new component for the project.') },
    { command: chalk.bold.cyan('create-component-react-native'), description: chalk.yellow('Create a new React Native component.') },
    { command: chalk.bold.cyan('create-screen-react-native'), description: chalk.yellow('Create a new React Native screen.') },
    { command: chalk.bold.cyan('create-env'), description: chalk.yellow('Create a .env file with default settings.') },
    { command: chalk.bold.cyan('create-route-gatsby'), description: chalk.yellow('Create a new route in a Gatsby project.') },
    { command: chalk.bold.cyan('create-hook'), description: chalk.yellow('Create a custom React hook.') },
    { command: chalk.bold.cyan('build-size'), description: chalk.yellow('Get the size of the build.') },
    { command: chalk.bold.cyan('clean-and-rebuild'), description: chalk.yellow('Clean and rebuild the project.') },
    { command: chalk.bold.cyan('clean-unused-dependencies'), description: chalk.yellow('Remove unused dependencies from the project.') },
    { command: chalk.bold.cyan('setup'), description: chalk.yellow('Run project setup script.') },
    { command: chalk.bold.cyan('unused-imports-list'), description: chalk.yellow('List unused imports in the project.') },
    { command: chalk.bold.cyan('unused-imports-uninstall'), description: chalk.yellow('Uninstall packages that are no longer imported.') },
    { command: chalk.bold.cyan('update-dependencies'), description: chalk.yellow('Update project dependencies.') },
    { command: chalk.bold.cyan('analyze-bundle'), description: chalk.yellow('Analyze the project bundle size.') },
    { command: chalk.bold.cyan('help'), description: chalk.yellow('Show this help message.') },
];

// Function to suggest similar commands
const suggestSimilarCommands = (command) => {
    const similarCommands = commandDescriptions.filter(desc =>
        desc.command.includes(command) || command.includes(desc.command)
    ).map(desc => desc.command);
    
    if (similarCommands.length > 0) {
        console.log(chalk.yellow('💡 Did you mean one of these commands?'));
        similarCommands.forEach(cmd => console.log(` - ${cmd}`));
    }
};

// Function to ensure logs directory exists
const ensureLogDirectory = () => {
    const logDir = path.resolve(__dirname, '../logs');
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }
    return logDir;
};

// Function to create a log file with timestamp
const createLogFile = (scriptName) => {
    const logDir = ensureLogDirectory();
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const logFilePath = path.join(logDir, `${scriptName}-${timestamp}.log`);
    return logFilePath;
};

// Function to run a script with a loading spinner and log output
const runScript = (scriptName, args) => {
    const script = scripts[scriptName];
    if (!script) {
        console.error(chalk.red(`❌ Unknown script or script not found: ${chalk.bold(scriptName)}`));
        suggestSimilarCommands(scriptName);
        process.exit(1);
    }

    // Check if the script is executable
    try {
        fs.accessSync(script, fs.constants.X_OK);
    } catch (error) {
        console.error(chalk.red(`❌ Script is not executable: ${chalk.bold(script)}`));
        console.error(chalk.yellow(`💡 Please ensure the script has execution permissions.`));
        process.exit(1);
    }

    console.log(chalk.green(`🚀 Running ${chalk.bold(script)}...`));

    // Create log file
    const logFilePath = createLogFile(scriptName);
    console.log(chalk.yellow(`📄 Logs are being written to: ${chalk.bold(logFilePath)}`));

    // Simple loading spinner
    const spinner = startSpinner();

    // Execute script and log output
    try {
        const result = execSync(`bash "${script}" ${args.join(' ')}`, { stdio: 'pipe' });

        // Write both stdout and stderr to the log file
        fs.writeFileSync(logFilePath, result.toString());
        spinner.stop();
        console.log(chalk.green(`✅ Script ${chalk.bold(script)} completed successfully!`));
    } catch (error) {
        spinner.stop();
        // Write the error to log file
        fs.writeFileSync(logFilePath, error.stdout.toString() + error.stderr.toString());
        console.error(chalk.red(`❌ Failed to run ${chalk.bold(script)}: ${error.message}`));
        console.error(chalk.yellow(`💡 Check the logs for details: ${chalk.bold(logFilePath)}`));
        process.exit(1);
    }
};

// Function to show help message
const showHelp = () => {
    console.log(chalk.bold.blue('📜 Available commands:'));
    
    const columns = columnify(commandDescriptions, {
        columnSplitter: '   ',  // Adjust spacing between columns
        config: { description: { maxWidth: 60 } }  // Limits description width
    });

    console.log(columns);
};

// Function to start a simple loading spinner
const startSpinner = () => {
    const spinnerChars = ['|', '/', '-', '\\'];
    let index = 0;
    const spinnerInterval = setInterval(() => {
        process.stdout.write(`\r${spinnerChars[index++ % spinnerChars.length]}  `);
    }, 100);

    return {
        stop: () => {
            clearInterval(spinnerInterval);
            process.stdout.write('\r'); // Clear the spinner
        }
    };
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
        console.error(chalk.red(`❌ Unknown command: ${chalk.bold(command)}`));
        suggestSimilarCommands(command);
        process.exit(1);
}