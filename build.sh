#!/bin/bash`r`n# Build C++ modules`r`ncd src/native || exit`r`ncmake . && make`r`ncd ../..`r`n# Build Electron app`r`nnpm run build
