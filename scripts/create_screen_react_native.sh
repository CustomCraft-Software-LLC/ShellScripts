#!/bin/bash

# Check if a screen name is provided
if [ -z "$1" ]; then
  echo "Please provide a screen name."
  echo "Usage: ./create_screen_react_native.sh <ScreenName>"
  exit 1
fi

# Screen name (capitalizing the first letter to follow the React convention)
SCREEN_NAME=$1

# Create the screens directory if it doesn't exist
mkdir -p ./src/screens

# Create the screen file
SCREEN_FILE="./src/screens/$SCREEN_NAME.js"

# Check if the file already exists
if [ -f "$SCREEN_FILE" ]; then
  echo "Screen '$SCREEN_NAME' already exists at $SCREEN_FILE"
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
echo "Screen '$SCREEN_NAME' created successfully at $SCREEN_FILE."

exit 0