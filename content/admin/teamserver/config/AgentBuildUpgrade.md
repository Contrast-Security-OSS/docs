<!--
title: "Upgrading Agents for Download within an EOP TeamServer"
description: "Instructions for upgrading agents for download purposes within and EOP TeamServer"
tags: "EOP agent administration upgrade TeamServer"
-->

## Getting Started
Enterprise On Premise (EOP) TeamServer administrators have the ability to upgrade the Contrast language agents independently within TeamServer. In prior releases of Contrast, the agents were bundled with the TeamServer updater artifact. Administrators now have the ability to download a new agent from the [Contrast Hub Site](https://hub.contrastsecurity.com) and copy the individual agent artifact(s) to a directory on TeamServer. No restart of TeamServer is required as the agent artifact will dynamically reload and become accessible for download.

## How To Configure
EOP installations of TeamServer (starting with version 3.2.7) are automatically configured to support a new directory: *$CONTRAST_HOME/data/agents*. Within this directory are sub-directories for each of the agent languages. Note that there is a single directory for NodeJS and DotNet. However, we include two directories for Java in order to support the 1.5 agent and the 1.6 self-updating launcher agent.

````
contrast-service@dev1eop1:~/contrast/data/agents$ ls -lrta
drwxrwxr-x  2 contrast-service contrast-service 4096 Apr 25 19:59 node
drwxrwxr-x  2 contrast-service contrast-service 4096 Apr 25 19:59 java-launcher
drwxrwxr-x  2 contrast-service contrast-service 4096 Apr 25 19:59 java
drwxrwxr-x  2 contrast-service contrast-service 4096 Apr 25 19:59 dotnet
drwxrwxr-x  6 contrast-service contrast-service 4096 Apr 25 19:59 .
drwxr-xr-x 13 contrast-service contrast-service 4096 Apr 25 20:01 ..
````
Agents will be provided from the [Contrast Hub Site](https://hub.contrastsecurity.com) and occasionally as a patch via [Contrast's Support Site](https://support.contrastsecurity.com). Simply download the agent from one of those two locations and copy it to the server hosting the Contrast TeamServer application. Place it in the directory *$CONTRAST_HOME/data/agents/agentName*. As mentioned above, no restart is necessary.

## What If My Server Has Issues After Copying Files?
In the event an issue happens, please review the *contrast.log* located under *$CONTRAST_HOME/logs* for more information about what is causing an issue within TeamServer. Below are a few troubleshooting techniques in the event of an issue.

### Permissions Issue On The Agent
If this issue occurs, make sure to verify that the user who owns the *$CONTRAST_HOME* directories and files happens to be the same owner of the agent files placed in the respective directories. Try to avoid copying files as the ROOT user or another named user. Make sure the ownership (contrast-service) and permissions (755) match other files and directories under *$CONTRAST_HOME*. 

### File Placed In The Wrong Directory
It may seem obvious to place the NodeJS agent in the Node directory and the same for other agents. Accidents do happen and be prepared to double check whether the files are in the right directory. If the wrong files are placed in a particular directory, the server should not have an issue. However, you won't be able to download the updated agent until the file is moved to the appropriate directory.

### Size Of Download Does Not Match
Occasionally, downloads can become corrupt when transferring via download over HTTP/HTTPS as well as copying files from one machine to the next. If this happens, double check the file size from the original source. If by chance a file was placed on Contrast's download site, but is corrupt, please do not hesitate to log a ticket with our [Support Team](https://support.contrastsecurity.com) for remediation.

### Agent Is Lower Version Than Last TeamServer Agent
The service that handles agent updates is designed to look for the latest agent based on build number. If by chance you place an older agent in this directory, in all likelihood the agent will not be accessible for download from the TeamServer.
