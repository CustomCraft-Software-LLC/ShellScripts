#!/bin/bash

# Install node dependencies
echo "Installing npm dependencies..."
npm install

# Copy environment variables from .env.example to .env
if [ ! -f .env ]; then
    echo "Copying environment variables..."
    cp .env.example .env
fi

# Start the development server
echo "Starting development server..."
npm start