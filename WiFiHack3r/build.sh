#!/bin/bash

# Build C++ modules
cd src/native || exit
cmake . && make
cd ../..

# Build Electron app
npm run build