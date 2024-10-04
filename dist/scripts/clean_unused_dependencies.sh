#!/bin/bash

# Define vibrant color codes
BOLD_GREEN='\033[1;32m'
BOLD_RED='\033[1;31m'
BOLD_YELLOW='\033[1;33m'
BOLD_CYAN='\033[1;36m'
NC='\033[0m' # No Color

# Check if depcheck is installed
if ! command -v depcheck &> /dev/null; then
  echo -e "${BOLD_YELLOW}depcheck is not installed. Installing...${NC}"
  npm install -g depcheck
else
  echo -e "${BOLD_GREEN}depcheck is already installed.${NC}"
fi

echo -e "${BOLD_CYAN}Checking for unused dependencies...${NC}"

# Run depcheck to find unused dependencies
unused_deps=$(npx depcheck --json | jq -r '.dependencies[]')

if [ -z "$unused_deps" ]; then
  echo -e "${BOLD_GREEN}No unused dependencies found.${NC}"
  exit 0
else
  echo -e "${BOLD_RED}The following unused dependencies were found:${NC}"
  echo -e "${BOLD_YELLOW}$unused_deps${NC}"
fi

# Prompt the user for confirmation before uninstalling
read -p "Do you want to remove these dependencies? (y/n): " confirm

if [[ $confirm == [yY] ]]; then
  echo -e "${BOLD_CYAN}Removing unused dependencies...${NC}"
  for dep in $unused_deps; do
    npm uninstall "$dep"
  done
  echo -e "${BOLD_GREEN}Unused dependencies have been removed.${NC}"
else
  echo -e "${BOLD_YELLOW}No changes made.${NC}"
fi