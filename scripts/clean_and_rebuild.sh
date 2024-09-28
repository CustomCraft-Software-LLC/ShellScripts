#!/bin/bash

echo "Cleaning project..."
rm -rf node_modules
rm -rf package-lock.json
rm -rf build

echo "Reinstalling dependencies..."
npm install

echo "Rebuilding project..."
npm run build

echo "Done."