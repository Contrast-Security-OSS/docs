<!--
title: "Installing on Axis2"
description: "Axis2 installation process using Windows or startup script"
tags: "java agent installation Axis"
-->

[Back to Quick Links](user_javainstall.html#links)

## Running Contrast From "axis2server.bat" (or ".sh")

If you run Axis2 from **axis2server.bat**, we suggest creating a new startup script: **startup-with-contrast.bat**. It should enable the Contrast JVM parameters and call the startup script:

``` sh
set PROGRAM_PARAMS="$PROGRAM_PARAMS -javaagent:${DOWNLOADS}\contrast.jar"
call ${AXIS_DIR} \bin\startup.bat
```


Of course you'll have to substitute the path to **contrast.jar** and the Axis2 server for your environment. This new script will make it easy to start up your server with or without Contrast.