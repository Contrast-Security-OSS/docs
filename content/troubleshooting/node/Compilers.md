<!--
title: "Node.js Compiler Installation"
description: "Installing a compiler for Node.js agent < 2.6.0"
tags: "Node.js compiler installation"
-->
## Compiler Installation

From 2.0.0 to 2.5.1 of the Node agent, you must have installed:

* A C++ compiler toolchain (e.g., Clang, GCC or MSVC) and a POSIX-compatible `make`

* Python (which is needed for [Node-gyp](https://github.com/nodejs/node-gyp), Node's build tool, to function)

> **Notes:**
 * If you can build other modules with C++ bindings like [node-sass](https://www.npmjs.com/package/node-sass) and [sqlite3](https://github.com/mapbox/node-sqlite3), you probably meet all of the requirements for Contrast.
 * The official [Node Docker images](https://hub.docker.com/_/node/) come with all of the prerequisites installed.

### Windows

To install the necessary compiler toolchain on Windows, run `npm install -g --production windows-build-tools`. If you're using a Node version older than 8.0, you must use `windows-build-tools` version 3.0 (not 4.0, the newest version).

### macOS

macOS ships with the `clang` compiler suite. Use `clang --version` to ensure that you have the compiler installed. If Clang is **not** already installed, run `$ xcode-select --install` to install it.

### Linux

Linux distributions often ship with a C++ compiler toolchain. You can verify that the compiler is installed with `c++ --version`. If you don't have a C++ compiler installed, install the `g++` package available from most Linux package managers.

