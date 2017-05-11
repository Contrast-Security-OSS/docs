<!--
title: "Installing on Tomcat"
description: "Tomcat installation process using Windows or startup script"
tags: "java agent installation Tomcat"
-->


## Running Contrast from "startup.bat" (or ".sh")

If you run Tomcat from `startup.bat`, we suggest creating a new startup script, `startup-with-contrast.bat`. It should enable the Contrast JVM parameters and call the startup script:

``` sh
set JAVA_OPTS="%JAVA_OPTS% -javaagent:${DOWNLOADS}\contrast.jar"
call ${TOMCAT_DIR} \bin\startup.bat
```

Of course, you'll have to substitute the path to ***contrast.jar*** and your Tomcat server for your environment. This new script will make it easy to start up your server with or without Contrast.

## Running Contrast on the Tomcat service in Windows

If you run Tomcat from **as a service**, changing the JVM options to add the agent requires opening the Tomcat service manager. You can do this by double clicking the Tomcat icon in the System tray (or right clicking and hitting **Configure**.) If the icon is not there, you might have to start it manually by running ***tomcat7w.exe*** in the Tomcat bin directory.

<br>

<a href="assets/images/KB2-a01_1.png" rel="lightbox" title="System Tray Icon"><img class="thumbnail" src="assets/images/KB2-a01_1.png"/></a>

Switching to the Java tab will show you where you need to add the ```-javaagent``` flag:

<br>

<a href="assets/images/KB2-a01_2.png" rel="lightbox" title="Tomcat Properties"><img class="thumbnail" src="assets/images/KB2-a01_2.png"/></a>

## More Information

Not using startup scripts or the Windows service? Here's how to run Contrast from other Tomcat Launchers:

- [Running Contrast on Tomcat with Maven Apache Tomcat Plugin](installation_javainstall.html#apache)

- [Running Contrast on an Eclipse WTP Application](installation_javainstall.html#eclipse)

- [Running Contrast on an IntelliJ Application](installation_javainstall.html#intellij)

- [Running Contrast on a NetBeans Application](installation_javainstall.html#netbeans)
