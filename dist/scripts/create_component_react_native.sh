#!/bin/bash

# Check if a component name is provided
if [ -z "$1" ]; then
  echo "Please provide a component name."
  echo "Usage: ./create_component_react_native.sh <ComponentName>"
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
  echo "Component '$COMPONENT_NAME' already exists at $COMPONENT_FILE"
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
echo "Component '$COMPONENT_NAME' created successfully at $COMPONENT_FILE."

exit 0