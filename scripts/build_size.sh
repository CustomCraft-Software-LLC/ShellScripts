#!/bin/bash

echo "Building project..."
npm run build

echo "Calculating build size..."
du -sh build/

echo "Build size check complete."