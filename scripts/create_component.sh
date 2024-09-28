#!/bin/bash

# Function to display usage
usage() {
  echo "Usage: $0 <ComponentName> [--tsx] [--jsx] [--stories] [--css] [--help]"
  echo "Options:"
  echo "  --tsx      Generate TypeScript (.tsx) component"
  echo "  --jsx      Generate JavaScript (.jsx) component"
  echo "  --stories  Include Storybook stories"
  echo "  --css      Include CSS file"
  echo "  --help     Display this help message"
  exit 1
}

# Check if a component name was provided
if [ -z "$1" ]; then
  usage
fi

# Define component name and default options
COMPONENT_NAME=$1
INCLUDE_TSX=false
INCLUDE_JSX=false
INCLUDE_STORIES=false
INCLUDE_CSS=false

# Parse options
shift
while [[ $# -gt 0 ]]; do
  case $1 in
    --tsx)
      INCLUDE_TSX=true
      ;;
    --jsx)
      INCLUDE_JSX=true
      ;;
    --stories)
      INCLUDE_STORIES=true
      ;;
    --css)
      INCLUDE_CSS=true
      ;;
    --help)
      usage
      ;;
    *)
      usage
      ;;
  esac
  shift
done

# If no component type is specified, prompt user for input
if [ "$INCLUDE_TSX" = false ] && [ "$INCLUDE_JSX" = false ]; then
  echo "Please specify the component type."
  echo "Select from the following options:"
  read -p "Do you want to generate a TypeScript component? (y/n): " use_tsx
  if [[ "$use_tsx" =~ ^[Yy]$ ]]; then
    INCLUDE_TSX=true
  fi

  read -p "Do you want to generate a JavaScript component? (y/n): " use_jsx
  if [[ "$use_jsx" =~ ^[Yy]$ ]]; then
    INCLUDE_JSX=true
  fi
fi

# Create component directory
mkdir -p "src/components/$COMPONENT_NAME"

# Function to create TSX component
create_tsx() {
  cat <<EOL > "src/components/$COMPONENT_NAME/$COMPONENT_NAME.tsx"
import React from 'react';

interface ${COMPONENT_NAME}Props {
  // Define your props here
}

const $COMPONENT_NAME: React.FC<${COMPONENT_NAME}Props> = (props) => {
  return (
    <div>
      {/* Component content goes here */}
      <h1>$COMPONENT_NAME Component</h1>
    </div>
  );
};

export default $COMPONENT_NAME;
EOL

  if [ "$INCLUDE_STORIES" = true ]; then
    # Create Storybook file for TSX
    cat <<EOL > "src/components/$COMPONENT_NAME/$COMPONENT_NAME.stories.tsx"
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import $COMPONENT_NAME from './$COMPONENT_NAME';

export default {
  title: 'Components/$COMPONENT_NAME',
  component: $COMPONENT_NAME,
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof $COMPONENT_NAME>> = (args) => <${COMPONENT_NAME} {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Set default props here
};
EOL
  fi

  if [ "$INCLUDE_CSS" = true ]; then
    # Create CSS file
    cat <<EOL > "src/components/$COMPONENT_NAME/$COMPONENT_NAME.css"
/* Styles for $COMPONENT_NAME component */
EOL
  fi
}

# Function to create JSX component
create_jsx() {
  cat <<EOL > "src/components/$COMPONENT_NAME/$COMPONENT_NAME.jsx"
import React from 'react';

const $COMPONENT_NAME = (props) => {
  return (
    <div>
      {/* Component content goes here */}
      <h1>$COMPONENT_NAME Component</h1>
    </div>
  );
};

export default $COMPONENT_NAME;
EOL

  if [ "$INCLUDE_STORIES" = true ]; then
    # Create Storybook file for JSX
    cat <<EOL > "src/components/$COMPONENT_NAME/$COMPONENT_NAME.stories.jsx"
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import $COMPONENT_NAME from './$COMPONENT_NAME';

export default {
  title: 'Components/$COMPONENT_NAME',
  component: $COMPONENT_NAME,
} as Meta;

const Template: StoryFn = (args) => <${COMPONENT_NAME} {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Set default props here
};
EOL
  fi

  if [ "$INCLUDE_CSS" = true ]; then
    # Create CSS file
    cat <<EOL > "src/components/$COMPONENT_NAME/$COMPONENT_NAME.css"
/* Styles for $COMPONENT_NAME component */
EOL
  fi
}

# Generate files based on the selected types
if [ "$INCLUDE_TSX" = true ]; then
  create_tsx
fi

if [ "$INCLUDE_JSX" = true ]; then
  create_jsx
fi

# Provide feedback
echo "Component '$COMPONENT_NAME' has been created."
if [ "$INCLUDE_STORIES" = true ]; then
  echo "Stories have been included."
fi
if [ "$INCLUDE_CSS" = true ]; then
  echo "CSS file has been included."
fi