const { execSync } = require('child_process');

// Mock execSync to simulate command execution
jest.mock('child_process', () => ({
    execSync: jest.fn(),
}));

describe('clean_unused_dependencies.sh', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should detect unused dependencies and uninstall them', () => {
        // Mock depcheck output to simulate unused dependencies
        execSync.mockImplementationOnce(() => {
            return JSON.stringify({
                dependencies: {
                    'moment': 'not used',
                },
                devDependencies: {},
            });
        });

        // Mock npm uninstall to simulate uninstallation of dependencies
        execSync.mockImplementation((command) => {
            if (command.includes('npm uninstall')) {
                return `Successfully uninstalled ${command.split(' ')[2]}`;
            }
            return '';
        });

        // Execute the script using execSync
        execSync('../scripts/clean_unused_dependencies.sh');

        // Assertions
        expect(execSync).toHaveBeenCalledWith(expect.stringContaining('npx depcheck --json'));
        expect(execSync).toHaveBeenCalledWith(expect.stringContaining('npm uninstall moment'));
    });

    it('should not uninstall if there are no unused dependencies', () => {
        // Mock depcheck output to simulate no unused dependencies
        execSync.mockImplementationOnce(() => {
            return JSON.stringify({
                dependencies: {},
                devDependencies: {},
            });
        });

        // Execute the script using execSync
        execSync('../scripts/clean_unused_dependencies.sh');

        // Assertions
        expect(execSync).toHaveBeenCalledWith(expect.stringContaining('npx depcheck --json'));
        expect(execSync).not.toHaveBeenCalledWith(expect.stringContaining('npm uninstall'));
    });

    it('should handle errors gracefully', () => {
        // Mock depcheck to throw an error
        execSync.mockImplementationOnce(() => {
            throw new Error('Error running depcheck');
        });

        // Execute the script and expect it to log an error
        console.log = jest.fn(); // Mock console.log to check for expected output
        execSync('../scripts/clean_unused_dependencies.sh');

        // Assertions
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Error running depcheck'));
    });
});