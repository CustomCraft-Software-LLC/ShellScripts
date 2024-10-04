#!/bin/bash

# Detect project type based on the files and package.json dependencies
if [ -f "package.json" ]; then
  if grep -q 'react-native' package.json; then
    PROJECT_TYPE="react-native"
  elif grep -q 'gatsby' package.json; then
    PROJECT_TYPE="gatsby"
  elif grep -q 'electron' package.json; then
    PROJECT_TYPE="electron"
  else
    PROJECT_TYPE="react"
  fi
else
  echo "No package.json found. Please run this script in a project directory."
  exit 1
fi

# Create .env file based on the project type
if [ -f ".env" ]; then
  echo ".env file already exists."
  exit 1
fi

echo "Creating .env file for $PROJECT_TYPE project..."

# Default environment variables
cat > .env <<EOL
# Default environment variables
API_URL=https://api.example.com
EOL

if [ "$PROJECT_TYPE" == "react-native" ]; then
  echo "ANDROID_API_KEY=your_android_api_key" >> .env
  echo "IOS_API_KEY=your_ios_api_key" >> .env
elif [ "$PROJECT_TYPE" == "gatsby" ]; then
  echo "GATSBY_API_KEY=your_gatsby_api_key" >> .env
elif [ "$PROJECT_TYPE" == "electron" ]; then
  echo "ELECTRON_API_KEY=your_electron_api_key" >> .env
fi

echo ".env file created successfully for $PROJECT_TYPE project."

exit 0