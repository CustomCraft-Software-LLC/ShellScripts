#!/bin/bash

# Ensure webpack-bundle-analyzer is installed
npm install --save-dev webpack-bundle-analyzer

# Run the bundle analyzer
echo "Analyzing bundle size..."

npx webpack-bundle-analyzer dist/stats.json

if [ $? -eq 0 ]; then
  echo "Bundle analysis complete!"
else
  echo "Bundle analysis failed."
  exit 1
fi