#!/bin/bash

# Check if depcheck is installed
if ! command -v depcheck &> /dev/null; then
  echo "depcheck is not installed. Installing..."
  npm install -g depcheck
else
  echo "depcheck is already installed."
fi

echo "Checking for unused dependencies..."

# Run depcheck to find unused dependencies
unused_deps=$(npx depcheck --json | jq -r '.dependencies[]')

if [ -z "$unused_deps" ]; then
  echo "No unused dependencies found."
  exit 0
else
  echo "The following unused dependencies were found:"
  echo "$unused_deps"
fi

# Prompt the user for confirmation before uninstalling
read -p "Do you want to remove these dependencies? (y/n): " confirm

if [[ $confirm == [yY] ]]; then
  echo "Removing unused dependencies..."
  for dep in $unused_deps; do
    npm uninstall "$dep"
  done
  echo "Unused dependencies have been removed."
else
  echo "No changes made."
fi