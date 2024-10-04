const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
jest.mock('child_process');
jest.mock('fs');

const runScript = require('../bin/cli').runScript;

describe('CLI script execution tests', () => {
  const scripts = [
    { name: 'build_size', script: 'build_size.sh' },
    { name: 'clean_and_rebuild', script: 'clean_and_rebuild.sh' },
    { name: 'create_component', script: 'create_component.sh' },
    { name: 'create_component_react_native', script: 'create_component_react_native.sh' },
    { name: 'create_screen_react_native', script: 'create_screen_react_native.sh' },
    { name: 'create_route_gatsby', script: 'create_route_gatsby.sh' },
    { name: 'create_env', script: 'create_env.sh' },
    { name: 'create_hook', script: 'create_hook.sh' },
    { name: 'analyze_bundle', script: 'analyze_bundle.sh' },
    { name: 'setup', script: 'setup.sh' },
    { name: 'unused_imports_list', script: 'unused_imports_list.sh' },
    { name: 'unused_imports_uninstall', script: 'unused_imports_uninstall.sh' },
    { name: 'update_dependencies', script: 'update_dependencies.sh' }
  ];

  // Mocking process.exit globally for all tests
  beforeAll(() => {
    jest.spyOn(process, 'exit').mockImplementation((code) => {
      throw new Error(`process.exit(${code}) was called.`);
    });
  });

  afterAll(() => {
    process.exit.mockRestore(); // Restore original behavior after tests
  });

  scripts.forEach(({ name, script }) => {
    describe(`${script}`, () => {
      const mockScriptPath = path.resolve(__dirname, `../dist/scripts/${script}`);

      beforeEach(() => {
        jest.clearAllMocks();
        fs.existsSync.mockReturnValue(true); // Mock script exists
        jest.spyOn(path, 'resolve').mockReturnValue(mockScriptPath);
      });

      test(`should execute ${script} successfully`, () => {
        execSync.mockImplementation(() => {});

        expect(() => runScript(name, [])).not.toThrow();
        expect(execSync).toHaveBeenCalledWith(`bash "${mockScriptPath}"`, { stdio: 'inherit' });
      });

      test(`should throw error if ${script} is missing`, () => {
        fs.existsSync.mockReturnValue(false); // Mock script doesn't exist

        expect(() => runScript(name, [])).toThrow(`Unknown script or script not found: ${name}`);
      });
    });
  });
});