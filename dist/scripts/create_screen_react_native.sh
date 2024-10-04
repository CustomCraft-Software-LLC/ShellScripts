#!/bin/bash

# Define vibrant color codes
BOLD_GREEN='\033[1;32m'
BOLD_RED='\033[1;31m'
BOLD_YELLOW='\033[1;33m'
BOLD_CYAN='\033[1;36m'
NC='\033[0m' # No Color

# Check if a screen name is provided
if [ -z "$1" ]; then
  echo -e "${BOLD_RED}Please provide a screen name.${NC}"
  echo -e "${BOLD_YELLOW}Usage: ./create_screen_react_native.sh <ScreenName>${NC}"
  exit 1
fi

# Screen name (capitalizing the first letter to follow the React convention)
SCREEN_NAME=$1

# Create the screens directory if it doesn't exist
mkdir -p ./src/screens
echo -e "${BOLD_CYAN}Created directory: ./src/screens${NC}"

# Create the screen file
SCREEN_FILE="./src/screens/$SCREEN_NAME.js"

# Check if the file already exists
if [ -f "$SCREEN_FILE" ]; then
  echo -e "${BOLD_RED}Screen '$SCREEN_NAME' already exists at $SCREEN_FILE.${NC}"
  exit 1
fi

# Generate the screen component with navigation setup
cat > "$SCREEN_FILE" <<EOL
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const $SCREEN_NAME = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to $SCREEN_NAME</Text>
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
    fontSize: 20,
    color: '#333',
  },
});

export default $SCREEN_NAME;
EOL

# Output success message
echo -e "${BOLD_GREEN}Screen '$SCREEN_NAME' created successfully at $SCREEN_FILE.${NC}"

exit 0