#!/bin/bash

# Define vibrant color codes
BOLD_GREEN='\033[1;32m'
BOLD_RED='\033[1;31m'
BOLD_YELLOW='\033[1;33m'
BOLD_CYAN='\033[1;36m'
NC='\033[0m' # No Color

# Check if a hook name was provided
if [ -z "$1" ]; then
  echo -e "${BOLD_RED}Please provide a hook name.${NC}"
  exit 1
fi

HOOK_NAME=$1
HOOK_DIR="src/hooks"

# Create the hooks directory if it doesn't exist
mkdir -p "$HOOK_DIR"
echo -e "${BOLD_CYAN}Created directory: $HOOK_DIR${NC}"

# Create the hook file with a basic template
cat <<EOL > "$HOOK_DIR/use$HOOK_NAME.js"
// Custom Hook: use$HOOK_NAME

import { useState } from 'react';

const use$HOOK_NAME = () => {
  const [state, setState] = useState(null);

  // Custom hook logic here

  return [state, setState];
};

export default use$HOOK_NAME;
EOL

echo -e "${BOLD_GREEN}use$HOOK_NAME custom hook created successfully at $HOOK_DIR/use$HOOK_NAME.js.${NC}"