#!/bin/bash

# Define basic color codes
BOLD_GREEN='\033[1;32m'
BOLD_RED='\033[1;31m'
BOLD_YELLOW='\033[1;33m'
BOLD_CYAN='\033[1;36m'
NC='\033[0m' # No Color

# Function to check if a command is available
check_command() {
    command -v "$1" &> /dev/null
}

# Function to install jq based on OS
install_jq() {
    echo -e "${BOLD_YELLOW}Attempting to install jq...${NC}"
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux (Debian-based)
        if check_command apt; then
            sudo apt-get update && sudo apt-get install -y jq
        elif check_command yum; then
            sudo yum install -y jq
        else
            echo -e "${BOLD_RED}Unsupported Linux distribution. Please install jq manually.${NC}"
            exit 1
        fi
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        if check_command brew; then
            brew install jq
        else
            echo -e "${BOLD_RED}Homebrew not found. Please install Homebrew and try again.${NC}"
            exit 1
        fi
    elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
        # Windows
        echo -e "${BOLD_YELLOW}Please download and install jq from https://stedolan.github.io/jq/download/ for Windows.${NC}"
        exit 1
    else
        echo -e "${BOLD_RED}Unsupported OS. Please install jq manually.${NC}"
        exit 1
    fi
}

# Prompt to ask if the user agrees to install jq
ask_install_jq() {
    read -p "jq is required but not installed. Do you want to install it? (y/n): " confirm
    if [[ $confirm == [yY] ]]; then
        install_jq
    else
        echo -e "${BOLD_RED}jq installation declined. Exiting.${NC}"
        exit 1
    fi
}

# Ensure depcheck is installed
if ! check_command depcheck; then
    echo -e "${BOLD_YELLOW}depcheck is not installed. Installing...${NC}"
    npm install -g depcheck
else
    echo -e "${BOLD_GREEN}depcheck is already installed.${NC}"
fi

# Ensure jq is installed (for parsing JSON)
if ! check_command jq; then
    ask_install_jq
else
    echo -e "${BOLD_GREEN}jq is already installed.${NC}"
fi

# Run depcheck in the current directory
echo -e "${BOLD_CYAN}Checking for unused dependencies...${NC}"

depcheck_output=$(npx depcheck --json 2>&1) # Capture stdout and stderr

# Check if depcheck ran successfully
if [ $? -ne 0 ]; then
    echo -e "${BOLD_RED}Error running depcheck:${NC}"
    echo "$depcheck_output"  # Show the error details
    exit 1
fi

# Extract unused dependencies from the depcheck output using jq
unused_deps=$(echo "$depcheck_output" | jq -r '.dependencies[]')

# If no unused dependencies are found
if [ -z "$unused_deps" ]; then
    echo -e "${BOLD_GREEN}No unused dependencies found.${NC}"
    exit 0
else
    echo -e "${BOLD_RED}Unused dependencies found:${NC}"
    echo -e "${BOLD_YELLOW}$unused_deps${NC}"
fi

# Prompt the user for confirmation to remove the dependencies
read -p "Remove these dependencies? (y/n): " confirm

if [[ $confirm == [yY] ]]; then
    echo -e "${BOLD_CYAN}Removing unused dependencies...${NC}"
    npm uninstall $unused_deps
    echo -e "${BOLD_GREEN}Unused dependencies removed.${NC}"
else
    echo -e "${BOLD_YELLOW}No changes made.${NC}"
fi