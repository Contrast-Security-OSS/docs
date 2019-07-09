<!--
title: "Configuration on Tomcat"
description: "Tomcat configuration process using Windows or startup script"
tags: "java agent configuration Tomcat"
-->

## Before You Start 

[Download and install the Java agent](installation-javastandard.html) from Contrast.

## Run Contrast from "startup.bat"

If you run Tomcat from *startup.bat*, Contrast suggests creating a new startup script, `startup-with-contrast.bat`. If you run Tomcat from *startup.sh*, the new startup script is `startup-with-contrast.sh`. This should enable the Contrast JVM parameters and call the startup script. 

For Windows, use `startup-with-contrast.bat`:

``` sh
set CATALINA_OPTS="%CATALINA_OPTS% -javaagent:${DOWNLOADS}\contrast.jar"
call ${TOMCAT_DIR} \bin\startup.bat
```

For Unix, use `startup-with-contrast.sh`:

``` sh
export CATALINA_OPTS="$CATALINA_OPTS -javaagent:${DOWNLOADS}/contrast.jar"
${TOMCAT_DIR}/bin/startup.sh
```

Of course, you'll have to substitute the path to *contrast.jar* and your Tomcat server for your environment. This new script will make it easy to start up your server with or without Contrast.

## Run Contrast from "setenv.bat"

Alternatively, if you have a *setenv.bat* or *setenv.sh* file as recommended by Tomcat, add the `-javaagent` configuration in that file in `CATALINA_OPTS`.

## Run Contrast on the Tomcat service in Windows

If you run Tomcat **as a service**, you must open the Tomcat service manager to change the JVM options to add the agent. You can do this by double clicking the Tomcat icon in the **System** tray (or right clicking and hitting **Configure**.) If the icon isn't there, you might have to start it manually by running *tomcat7w.exe* in the Tomcat bin directory.

<a href="assets/images/KB2-a01_1.png" rel="lightbox" title="System Tray Icon"><img class="thumbnail" src="assets/images/KB2-a01_1.png"/></a>

Switch to the Java tab to see where you need to add the `-javaagent` flag:

<br>

<a href="assets/images/KB2-a01_2.png" rel="lightbox" title="Tomcat Properties"><img class="thumbnail" src="assets/images/KB2-a01_2.png"/></a>

## More Information

Not using startup scripts or the Windows service? Here's how to run Contrast from other Tomcat launchers:

- [Run Contrast on Tomcat with Maven Apache Tomcat Plugin](installation-javaserver.html#apache)

- [Run Contrast on an Eclipse WTP Application](installation-javaserver.html#eclipse)

- [Run Contrast on an IntelliJ Application](installation-javaserver.html#intellij)

- [Run Contrast on a NetBeans Application](installation-javaserver.html#netbeans)
