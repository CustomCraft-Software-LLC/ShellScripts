const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// Function to copy scripts
const copyScripts = (sourceDir, destDir) => {
    // Ensure the destination directory exists
    fs.mkdirSync(destDir, { recursive: true });
    
    // Read all files from the source directory
    const files = fs.readdirSync(sourceDir);
    files.forEach(file => {
        const srcPath = path.join(sourceDir, file);
        const destPath = path.join(destDir, file);
        fs.copyFileSync(srcPath, destPath); // Copy the file
    });
};

// Build the CLI
esbuild.build({
    entryPoints: ['./bin/cli.js'],  // The main CLI entry point
    bundle: true,                  // Bundle all dependencies into one file
    platform: 'node',              // Specify we're building for Node.js
    target: 'node14',              // Specify the Node.js version target
    outfile: './dist/customcraftsoftware-cli.js',  // Output file
    minify: true,                  // Minify the output
    logLevel: 'info',              // Display useful build information
}).then(() => {
    // After the build, copy the scripts
    copyScripts('./scripts', './dist/scripts'); // Copy scripts to dist
}).catch((err) => {
    console.error(err);            // Log errors to the console
    process.exit(1);               // Exit with error code 1 on failure
});