#!/bin/bash

# Define vibrant color codes
BOLD_GREEN='\033[1;32m'
BOLD_RED='\033[1;31m'
BOLD_YELLOW='\033[1;33m'
BOLD_CYAN='\033[1;36m'
NC='\033[0m' # No Color

# Building the project
echo -e "${BOLD_CYAN}Building project...${NC}"
npm run build

# Check if the build was successful
if [ $? -eq 0 ]; then
  echo -e "${BOLD_GREEN}Project built successfully!${NC}"
else
  echo -e "${BOLD_RED}Build failed.${NC}"
  exit 1
fi

# Calculating build size
echo -e "${BOLD_YELLOW}Calculating build size...${NC}"
du -sh build/

# Completion message
echo -e "${BOLD_GREEN}Build size check complete.${NC}"