#!/bin/bash

echo "Checking if ESLint is installed..."

# Check if ESLint is installed globally or locally in the project
if ! [ -x "$(command -v eslint)" ]; then
    echo "ESLint is not installed. Installing ESLint locally..."
    npm install eslint --save-dev
else
    echo "ESLint is already installed."
fi

echo "Listing unused imports..."

# Run ESLint to list unused imports (without fixing)
npx eslint 'src/**/*.{js,jsx,ts,tsx}' --rule 'no-unused-vars:error'

echo "Unused imports listed."