<!--
title: "Node.js Agent Installation"
description: "Installing the Node.js Agent"
tags: "NodeJS agent installation"
-->

## Prerequisites
In order to install the Node agent, you must install a C++ compiler toolchain if you do not already have one installed (ex: Clang, GCC, or MSVC).

You must also install Python in order for [Node-gyp](https://github.com/nodejs/node-gyp) (Node's build tool) to function.

If you're able to build other modules with C++ bindings like [node-sass](https://www.npmjs.com/package/node-sass) and [sqlite3](https://github.com/mapbox/node-sqlite3), then you should be fine for Contrast.

Note: the official [node Docker images](https://hub.docker.com/_/node/) come with all of the prerequisites pre-installed.

#### Windows

To install the necessary compiler toolchain on Windows, run `npm install -g --production windows-build-tools`.

If you are using a Node version older than 8.0, you must use `windows-build-tools` version 3.0 (not the neweset version: 4.0).

### macOS

MacOS ships with the `clang` compiler suite. Type `clang --version` to ensure that you have the compiler installed. If clang is **not** already installed, run `$ xcode-select --install` to install it.

## Linux

Often, Linux distributions will ship with a C++ compiler toolchain. You can verify by typing `c++ --version`. If you do not have a C++ compiler installed, install the `g++` package available from most Linux package managers.


## Installation

After downloading from your account, install the agent from your application's root directory as follows:

``` sh
npm install node-contrast-#.#.#.tgz
```
This will add the agent to your *node_modules* folder without creating an entry in the dependencies list of your *package.json*.

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


For a full list of configuration options that can be placed in this file, see [Node Agent Configuration](installation-node.html#node-config).

## Run the Agent

First, add the following script to your application's *package.json*:

``` javascript
"scripts": {
	"contrast": "node-contrast <app-main>.js",
	"start": ...,
	"test": ...
}
```

Then, the agent can be run with ```npm run contrast```. This npm script can be changed to include other runtime configurations, such as an alternate configuration file location. For more information, see [Node Agent Configuration](installation-node.html#node-config).

## Errors that can arise during installation

`Invalid ELF Header` - This error occurs when a native C++ module targeting Linux has been compiled for a non-Linux target. Ensure that you are installing the agent from a compatible system.
