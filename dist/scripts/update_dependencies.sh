#!/bin/bash

# Define vibrant color codes
BOLD_GREEN='\033[1;32m'
BOLD_RED='\033[1;31m'
BOLD_YELLOW='\033[1;33m'
BOLD_CYAN='\033[1;36m'
NC='\033[0m' # No Color

echo -e "${BOLD_YELLOW}Updating npm dependencies...${NC}"
npm outdated

echo -e "${BOLD_YELLOW}Upgrading npm dependencies...${NC}"
npm update

echo -e "${BOLD_GREEN}Dependencies updated.${NC}"