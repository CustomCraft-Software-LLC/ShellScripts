#!/bin/bash

# Define vibrant color codes
BOLD_GREEN='\033[1;32m'
BOLD_RED='\033[1;31m'
BOLD_YELLOW='\033[1;33m'
BOLD_CYAN='\033[1;36m'
NC='\033[0m' # No Color

# Function to check if a command is available
check_command() {
    command -v "$1" &> /dev/null
}

# Check if depcheck is installed, and install if not
if ! check_command depcheck; then
    echo -e "${BOLD_YELLOW}depcheck is not installed. Installing...${NC}"
    npm install -g depcheck
else
    echo -e "${BOLD_GREEN}depcheck is already installed.${NC}"
fi

echo -e "${BOLD_CYAN}Checking for unused dependencies...${NC}"

# Run depcheck to find unused dependencies and capture the JSON output
depcheck_output=$(npx depcheck --json)

# Check if depcheck ran successfully
if [ $? -ne 0 ]; then
    echo -e "${BOLD_RED}Error running depcheck. Please check your setup.${NC}"
    exit 1
fi

# Extract unused dependencies using basic string manipulation
# Searching for the "dependencies" key in the output
unused_deps=$(echo "$depcheck_output" | grep -o '"dependencies":{[^}]*}' | sed -e 's/"dependencies":{//' -e 's/}//' -e 's/"//g' -e 's/: / /g' | tr ' ' '\n' | awk NF)

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
    # Iterate through each dependency and uninstall
    while IFS= read -r dep; do
        npm uninstall "$dep"
    done <<< "$unused_deps"
    echo -e "${BOLD_GREEN}Unused dependencies have been removed.${NC}"
else
    echo -e "${BOLD_YELLOW}No changes made.${NC}"
fi