#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const columnify = require('columnify');

const resolveScriptPath = (scriptName) => {
    const distPath = path.resolve(__dirname, '../dist/scripts', scriptName);
    if (fs.existsSync(distPath)) return distPath;
    const srcPath = path.resolve(__dirname, '../scripts', scriptName);
    if (fs.existsSync(srcPath)) return srcPath;
    return null;
};

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

const commandDescriptions = [
    { command: chalk.cyan('create-component'), description: chalk.yellow('Create a new component for the project.') },
    { command: chalk.cyan('create-component-react-native'), description: chalk.yellow('Create a new React Native component.') },
    { command: chalk.cyan('create-screen-react-native'), description: chalk.yellow('Create a new React Native screen.') },
    { command: chalk.cyan('create-env'), description: chalk.yellow('Create a .env file with default settings.') },
    { command: chalk.cyan('create-route-gatsby'), description: chalk.yellow('Create a new route in a Gatsby project.') },
    { command: chalk.cyan('create-hook'), description: chalk.yellow('Create a custom React hook.') },
    { command: chalk.cyan('build-size'), description: chalk.yellow('Get the size of the build.') },
    { command: chalk.cyan('clean-and-rebuild'), description: chalk.yellow('Clean and rebuild the project.') },
    { command: chalk.cyan('clean-unused-dependencies'), description: chalk.yellow('Remove unused dependencies.') },
    { command: chalk.cyan('setup'), description: chalk.yellow('Run project setup script.') },
    { command: chalk.cyan('unused-imports-list'), description: chalk.yellow('List unused imports in the project.') },
    { command: chalk.cyan('unused-imports-uninstall'), description: chalk.yellow('Uninstall packages that are no longer imported.') },
    { command: chalk.cyan('update-dependencies'), description: chalk.yellow('Update project dependencies.') },
    { command: chalk.cyan('analyze-bundle'), description: chalk.yellow('Analyze the project bundle size.') },
    { command: chalk.cyan('help'), description: chalk.yellow('Show this help message.') },
];

const suggestSimilarCommands = (command) => {
    const similarCommands = commandDescriptions.filter(desc =>
        desc.command.includes(command) || command.includes(desc.command)
    ).map(desc => desc.command);

    if (similarCommands.length > 0) {
        console.log(chalk.yellow('Did you mean one of these commands?'));
        similarCommands.forEach(cmd => console.log(` - ${cmd}`));
    }
};

const ensureLogDirectory = () => {
    const logDir = path.resolve(__dirname, '../logs');
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);
    return logDir;
};

const createLogFile = (scriptName) => {
    const logDir = ensureLogDirectory();
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return path.join(logDir, `${scriptName}-${timestamp}.log`);
};

const runScript = (scriptName, args) => {
    const script = scripts[scriptName];
    if (!script) {
        console.error(chalk.red(`Unknown script: ${scriptName}`));
        suggestSimilarCommands(scriptName);
        process.exit(1);
    }

    try {
        fs.accessSync(script, fs.constants.X_OK);
    } catch (error) {
        console.error(chalk.red(`Script is not executable: ${script}`));
        process.exit(1);
    }

    console.log(chalk.green(`Running ${script}...`));
    const logFilePath = createLogFile(scriptName);
    console.log(chalk.yellow(`Logs: ${logFilePath}`));

    const spinner = startSpinner();

    try {
        const result = execSync(`bash "${script}" ${args.join(' ')}`, { stdio: 'pipe' });
        fs.writeFileSync(logFilePath, result.toString());
        spinner.stop();
        console.log(chalk.green(`Script ${script} completed successfully!`));
    } catch (error) {
        spinner.stop();
        fs.writeFileSync(logFilePath, error.stdout.toString() + error.stderr.toString());
        console.error(chalk.red(`Failed to run ${script}: ${error.message}`));
        process.exit(1);
    }
};

const showHelp = () => {
    console.log(chalk.blue('Available commands:'));
    console.log(columnify(commandDescriptions, { columnSplitter: '   ', config: { description: { maxWidth: 60 } } }));
    console.log(chalk.green('\nMore information at:'));
    console.log(chalk.blue.underline('https://github.com/CustomCraft-Software-LLC/ShellScripts/blob/main/docs/commands.md'));
};

const startSpinner = () => {
    const spinnerChars = ['|', '/', '-', '\\'];
    let index = 0;
    const spinnerInterval = setInterval(() => {
        process.stdout.write(`\r${spinnerChars[index++ % spinnerChars.length]}  `);
    }, 100);

    return {
        stop: () => {
            clearInterval(spinnerInterval);
            process.stdout.write('\r');
        }
    };
};

const args = process.argv.slice(2);
if (args.length === 0) {
    showHelp();
    process.exit(0);
}

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
        suggestSimilarCommands(command);
        process.exit(1);
}
