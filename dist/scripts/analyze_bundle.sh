#!/bin/bash

# Define vibrant color codes
BOLD_GREEN='\033[1;32m'
BOLD_RED='\033[1;31m'
BOLD_YELLOW='\033[1;33m'
BOLD_CYAN='\033[1;36m'
NC='\033[0m' # No Color

# Ensure webpack-bundle-analyzer is installed
npm install --save-dev webpack-bundle-analyzer

# Run the bundle analyzer with bright and bold colors
echo -e "${BOLD_CYAN}Analyzing bundle size...${NC}"

npx webpack-bundle-analyzer dist/stats.json

if [ $? -eq 0 ]; then
  echo -e "${BOLD_GREEN}Bundle analysis complete!${NC}"
else
  echo -e "${BOLD_RED}Bundle analysis failed.${NC}"
  exit 1
fi