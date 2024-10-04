#!/bin/bash

# Define vibrant color codes
BOLD_GREEN='\033[1;32m'
BOLD_RED='\033[1;31m'
BOLD_YELLOW='\033[1;33m'
BOLD_CYAN='\033[1;36m'
NC='\033[0m' # No Color

# Check if a component name is provided
if [ -z "$1" ]; then
  echo -e "${BOLD_RED}Please provide a component name.${NC}"
  echo -e "${BOLD_YELLOW}Usage: ./create_component_react_native.sh <ComponentName>${NC}"
  exit 1
fi

# Component name (capitalizing the first letter to follow the React convention)
COMPONENT_NAME=$1

# Create the components directory if it doesn't exist
mkdir -p ./src/components

# Create the component file with the provided name
COMPONENT_FILE="./src/components/$COMPONENT_NAME.js"

# Check if the file already exists
if [ -f "$COMPONENT_FILE" ]; then
  echo -e "${BOLD_RED}Component '$COMPONENT_NAME' already exists at $COMPONENT_FILE${NC}"
  exit 1
fi

# Generate a basic React Native component structure in the file
cat > "$COMPONENT_FILE" <<EOL
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const $COMPONENT_NAME = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from $COMPONENT_NAME!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default $COMPONENT_NAME;
EOL

# Output success message
echo -e "${BOLD_GREEN}Component '$COMPONENT_NAME' created successfully at $COMPONENT_FILE.${NC}"

exit 0