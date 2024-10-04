#!/bin/bash

# Define vibrant color codes
BOLD_GREEN='\033[1;32m'
BOLD_RED='\033[1;31m'
BOLD_YELLOW='\033[1;33m'
BOLD_CYAN='\033[1;36m'
NC='\033[0m' # No Color

# Cleaning the project
echo -e "${BOLD_YELLOW}Cleaning project...${NC}"
rm -rf node_modules
rm -rf package-lock.json
rm -rf build

if [ $? -eq 0 ]; then
  echo -e "${BOLD_GREEN}Project cleaned successfully!${NC}"
else
  echo -e "${BOLD_RED}Failed to clean the project.${NC}"
  exit 1
fi

# Reinstalling dependencies
echo -e "${BOLD_CYAN}Reinstalling dependencies...${NC}"
npm install

if [ $? -eq 0 ]; then
  echo -e "${BOLD_GREEN}Dependencies installed successfully!${NC}"
else
  echo -e "${BOLD_RED}Failed to install dependencies.${NC}"
  exit 1
fi

# Rebuilding the project
echo -e "${BOLD_CYAN}Rebuilding project...${NC}"
npm run build

if [ $? -eq 0 ]; then
  echo -e "${BOLD_GREEN}Project rebuilt successfully!${NC}"
else
  echo -e "${BOLD_RED}Build failed.${NC}"
  exit 1
fi

# Done
echo -e "${BOLD_GREEN}Done.${NC}"