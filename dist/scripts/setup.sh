#!/bin/bash

# Define vibrant color codes
BOLD_GREEN='\033[1;32m'
BOLD_RED='\033[1;31m'
BOLD_YELLOW='\033[1;33m'
BOLD_CYAN='\033[1;36m'
NC='\033[0m' # No Color

# Install node dependencies
echo -e "${BOLD_YELLOW}Installing npm dependencies...${NC}"
npm install

# Copy environment variables from .env.example to .env
if [ ! -f .env ]; then
    echo -e "${BOLD_YELLOW}Copying environment variables...${NC}"
    cp .env.example .env
    echo -e "${BOLD_GREEN}.env file created successfully.${NC}"
else
    echo -e "${BOLD_CYAN}.env file already exists. Skipping copy.${NC}"
fi

# Start the development server
echo -e "${BOLD_GREEN}Starting development server...${NC}"
npm start