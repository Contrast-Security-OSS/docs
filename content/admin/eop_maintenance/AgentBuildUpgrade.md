<!--
title: "Upgrade Agents on Contrast"
description: "Instructions for upgrading agents within the Contrast application for EOP"
tags: "Admin EOP maintenance agent administration upgrade"
-->

Enterprise-on-Premises (EOP) administrators can upgrade the Contrast agents independently within the Contrast application. Administrators can download a new agent from [Contrast Hub](https://hub.contrastsecurity.com), and copy the individual agent artifact(s) to a directory on the Contrast application. No restart of the application is required; the agent artifact dynamically reloads and becomes accessible for download.

## Configuration

EOP installations of the Contrast application (starting with version 3.2.7) are automatically configured to support a new directory: *$CONTRAST_HOME/data/agents*. This directory includes sub-directories for each of the agent languages. 

````
contrast-service@dev1eop1:~/contrast/data/agents$ ls -lrta
drwxrwxr-x  2 contrast-service contrast-service 4096 Apr 25 19:59 node
drwxrwxr-x  2 contrast-service contrast-service 4096 Apr 25 19:59 java
drwxrwxr-x  2 contrast-service contrast-service 4096 Apr 25 19:59 dotnet
drwxrwxr-x  6 contrast-service contrast-service 4096 Apr 25 19:59 .
drwxr-xr-x 13 contrast-service contrast-service 4096 Apr 25 20:01 ..
````

Agents are provided from [Contrast Hub](https://hub.contrastsecurity.com) and occasionally as a patch through [Contrast's Support portal](https://support.contrastsecurity.com). You can download the agent from one of those two locations, and copy it to the server hosting the Contrast application. Place it in the directory *$CONTRAST_HOME/data/agents/agentName*. As mentioned above, no restart is necessary.
