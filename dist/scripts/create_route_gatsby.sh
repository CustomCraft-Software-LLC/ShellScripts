#!/bin/bash

# Check if a route name is provided
if [ -z "$1" ]; then
  echo "Please provide a route name."
  echo "Usage: ./create_route_gatsby.sh <RouteName>"
  exit 1
fi

# Route name (capitalize first letter)
ROUTE_NAME=$1

# Create the route component
ROUTE_DIR="./src/pages"
ROUTE_FILE="$ROUTE_DIR/$ROUTE_NAME.js"
mkdir -p "$ROUTE_DIR"

# Generate the route file
cat > "$ROUTE_FILE" <<EOL
import React from 'react';

const $ROUTE_NAME = () => {
  return (
    <div>
      <h1>$ROUTE_NAME Page</h1>
    </div>
  );
};

export default $ROUTE_NAME;
EOL

# Output success message
echo "Route '$ROUTE_NAME' created successfully at $ROUTE_FILE."

exit 0