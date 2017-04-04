<!--
title: "Process Monitoring Tools"
description: "Notes on running Contrast with Process Monitoring tools"
tags: "node agent pm2 nodemon forever compatibility monitoring"
-->

## About Running Contrast With Process Monitoring Tools

Most process monitoring tools start your application themselves so they can keep track of the process as necessary. Contrast starts your application as part of its own process. As such, there are no known compatibility issues between process management tools and Contrast. However, it may take a bit of configuration to get things working as expected.

We recommend creating a new configuration for your tool, rather than modifying an existing one. The important necessary change should be in the 'script' you have your tool configured to run. The tool needs to see the main script as Contrast, rather than the application's entry point. Wherever arguments to the script can be set, the entry point to the application should be specified.

To illustrate the purpose change, take the example of running an application normally, where the application entry point is an argument to the Node binary:

```node app.js```

Compare it to what the ```npm run contrast``` command does, where the application entry point is an argument to Contrast:

```./node_modules/node_contrast app.js>```

The process monitoring tool needs to be configured such that Contrast is an argument to the process monitoring tool's binary, and the process monitoring tool passes your application's entry point to Contrast:

```<process monitoring tool> ./node_modules/node_contrast -- app.js>```

### PM2
There are a couple of ways we recommend using pm2 to start your application with Contrast:

**Command Line**

The command used to run Contrast normally, ```npm run contrast```, can be passed into pm2 via a command line argument:

```pm2 start --name appName_contrast npm -- run contrast```

Note that the ```--name``` flag is optional here and only used so that the process doesn't show up as "npm."

**Creating A New Configuration**

When creating a new configuration, the two important attributes needed for running with Contrast are ```script``` and ```args```. A sample configuration may look like this:

```javascript
{
  apps : [

    // First application
    {
      name      : "API",
      script    : "app.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    },
    // First application with Contrast; note different production environment
    {
      name      : "API - Contrast",
      script    : "./node_modules/node_contrast",
      args      : "app.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "development"
      }
    },
  ], {
  	...
  }
}
```
