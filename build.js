const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['./bin/cli.js'],
    bundle: true,
    platform: 'node',
    target: 'node14',
    outfile: './dist/customcraftsoftware-cli.js',
    minify: true,
    external: ['child_process'],
}).catch(() => process.exit(1));