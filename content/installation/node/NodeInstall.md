<!--
title: "Node.js Agent Installation"
description: "Installing the Node.js Agent"
tags: "NodeJS agent installation"
-->

## Prerequisites

To install the Node agent, you must have installed:

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


## Installation

After downloading from your account, install the agent from your application's root directory as follows:

``` sh
npm install node-contrast-#.#.#.tgz --no-save
```
This will add the agent to your *node_modules* folder without creating an entry in the dependencies list of your *package.json*.

> **Note:** If you use yarn, you can't run `yarn add node-contrast-#.#.#.tgz`. Yarn has known issues with packages that contain bundled dependencies like our agent package. Run the following **after** you install yarn:
 ``` sh
 mkdir -p node_modules/node_contrast && tar zxvf node_contrast-#.#.#.tgz --strip 1 -C node_modules/node_contrast
 ```

## Setup

When you download the Node agent, you will also be directed to download a configuration file. By default, the agent looks for this configuration file in your application's root directory and expects the file to be called *contrast_security.yaml*.

The minimum required *contrast_security.yaml* setup should look something like this:

``` yaml
contrast:
  url: https://app.contrastsecurity.com
  user_name: contrast_user
  api_key: demo
  service_key: demo
```


 Property                | Description
------------------------ | ------------
`contrast.api_key`       | Organization's [API key](user-account.html#profile)
`contrast.user_name`     | Contrast user account ID <br> (In most cases, this is your login ID)
`contrast.service_key`   | Contrast user account [service key](user-account.html#profile)
`contrast.url`           | Address of the Contrast installation you would like your agent to report to


For a full list of configuration options that can be placed in this file, see [Node Agent Configuration](installation-nodeconfig.html).

## Run the Agent

First, add the following script to your application's *package.json*:

``` javascript
"scripts": {
	"contrast": "node-contrast <app-main>.js",
	"start": ...,
	"test": ...
}
```

You can then run the agent with `npm run contrast`. You can change this `npm` script to include other runtime configurations, such as an alternate configuration file location. For more information, see [Node Agent Configuration](installation-nodeconfig.html).
