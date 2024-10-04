#!/bin/bash

# Define vibrant color codes
BOLD_GREEN='\033[1;32m'
BOLD_RED='\033[1;31m'
BOLD_YELLOW='\033[1;33m'
BOLD_CYAN='\033[1;36m'
NC='\033[0m' # No Color

# Function to display usage
usage() {
  echo -e "${BOLD_YELLOW}Usage:${NC} $0 <ComponentName> [--tsx] [--jsx] [--stories] [--css] [--help]"
  echo -e "${BOLD_GREEN}Options:${NC}"
  echo "  --tsx      Generate TypeScript (.tsx) component"
  echo "  --jsx      Generate JavaScript (.jsx) component"
  echo "  --stories  Include Storybook stories"
  echo "  --css      Include CSS file"
  echo "  --help     Display this help message"
  exit 1
}

# Function to ask a yes/no question
ask_yes_no() {
  local prompt="$1"
  while true; do
    read -p "$prompt (y/n): " yn
    case $yn in
      [Yy]* ) return 0;;
      [Nn]* ) return 1;;
      * ) echo -e "${BOLD_RED}Please answer yes (y) or no (n).${NC}";;
    esac
  done
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

# Ask the user if they want to include TSX, JSX, stories, and CSS
if ask_yes_no "Do you want to create a TypeScript (.tsx) component?"; then
  INCLUDE_TSX=true
fi

if ask_yes_no "Do you want to create a JavaScript (.jsx) component?"; then
  INCLUDE_JSX=true
fi

if ask_yes_no "Do you want to include Storybook stories?"; then
  INCLUDE_STORIES=true
fi

if ask_yes_no "Do you want to include a CSS file?"; then
  INCLUDE_CSS=true
fi

# Ensure src/components directory exists
COMPONENT_ROOT="src/components"
if [ ! -d "$COMPONENT_ROOT" ]; then
  mkdir -p "$COMPONENT_ROOT"
  echo -e "${BOLD_CYAN}Created directory: $COMPONENT_ROOT${NC}"
fi

# Check if the component directory already exists
COMPONENT_DIR="$COMPONENT_ROOT/$COMPONENT_NAME"
if [ -d "$COMPONENT_DIR" ]; then
  echo -e "${BOLD_RED}Component '$COMPONENT_NAME' already exists in '$COMPONENT_DIR'. Aborting creation.${NC}"
  exit 1
fi

# Create component directory
mkdir -p "$COMPONENT_DIR"
echo -e "${BOLD_CYAN}Created directory: $COMPONENT_DIR${NC}"

# Function to create TSX component
create_tsx() {
  cat <<EOL > "$COMPONENT_DIR/$COMPONENT_NAME.tsx"
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
    cat <<EOL > "$COMPONENT_DIR/$COMPONENT_NAME.stories.tsx"
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
    cat <<EOL > "$COMPONENT_DIR/$COMPONENT_NAME.css"
/* Styles for $COMPONENT_NAME component */
EOL
  fi
}

# Function to create JSX component
create_jsx() {
  cat <<EOL > "$COMPONENT_DIR/$COMPONENT_NAME.jsx"
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
    cat <<EOL > "$COMPONENT_DIR/$COMPONENT_NAME.stories.jsx"
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
    cat <<EOL > "$COMPONENT_DIR/$COMPONENT_NAME.css"
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
echo -e "${BOLD_GREEN}Component '$COMPONENT_NAME' has been created successfully.${NC}"
if [ "$INCLUDE_STORIES" = true ]; then
  echo -e "${BOLD_GREEN}Stories have been included.${NC}"
fi
if [ "$INCLUDE_CSS" = true ]; then
  echo -e "${BOLD_GREEN}CSS file has been included.${NC}"
fi