#!/bin/bash

# Define vibrant color codes
BOLD_GREEN='\033[1;32m'
BOLD_RED='\033[1;31m'
BOLD_YELLOW='\033[1;33m'
BOLD_CYAN='\033[1;36m'
NC='\033[0m' # No Color

echo -e "${BOLD_YELLOW}Checking if ESLint is installed...${NC}"

# Check if ESLint is installed globally or locally in the project
if ! [ -x "$(command -v eslint)" ]; then
    echo -e "${BOLD_RED}ESLint is not installed. Installing ESLint locally...${NC}"
    npm install eslint --save-dev
    echo -e "${BOLD_GREEN}ESLint has been installed successfully!${NC}"
else
    echo -e "${BOLD_GREEN}ESLint is already installed.${NC}"
fi

echo -e "${BOLD_YELLOW}Listing unused imports...${NC}"

# Run ESLint to list unused imports (without fixing)
npx eslint 'src/**/*.{js,jsx,ts,tsx}' --rule 'no-unused-vars:error'

echo -e "${BOLD_GREEN}Unused imports listed.${NC}"