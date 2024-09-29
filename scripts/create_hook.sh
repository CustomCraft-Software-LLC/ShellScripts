#!/bin/bash

# Check if a hook name was provided
if [ -z "$1" ]; then
  echo "Please provide a hook name."
  exit 1
fi

HOOK_NAME=$1
HOOK_DIR="src/hooks"

# Create the hooks directory if it doesn't exist
mkdir -p $HOOK_DIR

# Create the hook file with a basic template
cat <<EOL > $HOOK_DIR/use$HOOK_NAME.js
// Custom Hook: use$HOOK_NAME

import { useState } from 'react';

const use$HOOK_NAME = () => {
  const [state, setState] = useState(null);

  // Custom hook logic here

  return [state, setState];
};

export default use$HOOK_NAME;
EOL

echo "use$HOOK_NAME custom hook created successfully."