<!--
title: "Upgrading Agents within the Contrast application"
description: "Troubleshooting issues after upgrading agents within the Contrast application"
tags: "troubleshoot setup EOP maintenance agent administration upgrade"
-->

Enterprise-on-Premise (EOP) administrators can download a new agent from the [Contrast Hub Site](https://hub.contrastsecurity.com) and copy the individual agent artifact(s) to a directory on the Contrast application. In the event an issue happens after copying files during [configuration](admin-eop.html#agent), review the *contrast.log* located under *$CONTRAST_HOME/logs* for more information about what's causing an issue within the Contrast application. A few troubleshooting techniques are outlined in the following sections. 

## Permissions Issue on the Agent

If this issue occurs, make sure to verify that the user who owns the *$CONTRAST_HOME* directories and files happens to be the same owner of the agent files placed in the respective directories. Try to avoid copying files as the ROOT user or another named user. Make sure the ownership (contrast-service) and permissions (755) match other files and directories under *$CONTRAST_HOME*. 

## File Placed in the Wrong Directory

It may seem obvious to place the NodeJS agent in the Node directory and the same for other agents, but you should always double-check that the files are in the right directory. If the wrong files are placed in a particular directory, the server shouldn't have an issue. However, you won't be able to download the updated agent until the file is moved to the appropriate directory.

## Size of Download Doesn't Match

Occasionally, downloads can become corrupt when transferring via download over HTTP/HTTPS as well as copying files from one machine to the next. If this happens, double-check the file size from the original source. If a file was placed on Contrast's download site but is corrupt, don't hesitate to log a ticket with our [Support Team](https://support.contrastsecurity.com) for remediation.

## Agent Version Is Lower than the Last Contrast Agent

The service that handles agent updates is designed to look for the latest agent based on build number. If you place an older agent in this directory, the agent probably won't be accessible for download from the Contrast application.

