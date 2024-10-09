#!/bin/bash

# Define basic color codes for feedback
BOLD_GREEN='\033[1;32m'
BOLD_RED='\033[1;31m'
BOLD_YELLOW='\033[1;33m'
BOLD_CYAN='\033[1;36m'
NC='\033[0m' # No Color

# Function to check if a command exists
check_command() {
    command -v "$1" &> /dev/null
}

# Function to install jq if it's not installed
install_jq() {
    echo -e "${BOLD_YELLOW}Installing jq...${NC}"
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo apt-get update && sudo apt-get install -y jq
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        brew install jq
    elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
        winget install --id jqlang.jq
    else
        echo -e "${BOLD_RED}Unsupported OS for automatic jq installation. Please install jq manually.${NC}"
        exit 1
    fi
}

# Ensure jq is installed
ensure_jq() {
    if ! check_command jq; then
        install_jq
    else
        echo -e "${BOLD_GREEN}jq is already installed.${NC}"
    fi
}

# Function to clean unused dependencies from package.json
clean_unused_dependencies() {
    echo -e "${BOLD_CYAN}Checking for unused dependencies in package.json...${NC}"

    # Extract all dependencies from package.json
    all_deps=$(jq -r '.dependencies, .devDependencies | keys[]' package.json)

    # Compare with actual imports and find unused dependencies
    unused_deps=()
    for dep in $all_deps; do
        # If the dependency is not found in any of the project's source files, add it to the unused list
        if ! grep -qr "$dep" .; then
            unused_deps+=("$dep")
        fi
    done

    # If no unused dependencies are found, exit
    if [ ${#unused_deps[@]} -eq 0 ]; then
        echo -e "${BOLD_GREEN}No unused dependencies found in package.json.${NC}"
        exit 0
    else
        echo -e "${BOLD_RED}Unused dependencies found:${NC}"
        for dep in "${unused_deps[@]}"; do
            echo -e "${BOLD_YELLOW}$dep${NC}"
        done
    fi

    # Prompt the user for confirmation to remove unused dependencies
    read -p "Do you want to remove these unused dependencies? (y/n): " confirm
    if [[ $confirm == [yY] ]]; then
        echo -e "${BOLD_CYAN}Removing unused dependencies...${NC}"
        npm uninstall "${unused_deps[@]}"
        if [ $? -ne 0 ]; then
            echo -e "${BOLD_RED}Error occurred while uninstalling dependencies.${NC}"
        else
            echo -e "${BOLD_GREEN}Unused dependencies removed.${NC}"
        fi
    else
        echo -e "${BOLD_YELLOW}No changes made.${NC}"
    fi
}

# Main flow
main() {
    # Ensure jq is installed for parsing package.json
    ensure_jq

    # Check and remove unused dependencies from package.json
    clean_unused_dependencies
}

main