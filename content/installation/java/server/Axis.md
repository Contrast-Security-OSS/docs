<!--
title: "Installing on Axis2"
description: "Axis2 installation process using Windows or startup script"
tags: "java agent installation Axis"
-->


If you run Axis2 from *axis2server.bat* (or *.sh*), Contrast recommends that you create a new startup script: `startup-with-contrast.bat`. This new script makes it easy to start up your server with or without Contrast. 

It should enable the Contrast JVM parameters and call the startup script, as shown in the following example. Of course, you'll have to substitute the path to *contrast.jar* and the Axis2 server for your environment.

``` sh
set PROGRAM_PARAMS="$PROGRAM_PARAMS -javaagent:${DOWNLOADS}\contrast.jar"
call ${AXIS_DIR} \bin\startup.bat
```

