<!--
title: "Installing on Tomcat"
description: "Tomcat installation process using Windows or startup script"
tags: "java agent installation Tomcat"
-->


## Running Contrast from "startup.bat" (or ".sh")

If you run Tomcat from `startup.bat`/`startup.sh`, Contrast suggests creating a new startup script, `startup-with-contrast.bat`/`startup-with-contrast.sh`. It should enable the Contrast JVM parameters and call the startup script:

For Windows `startup-with-contrast.bat`:
``` sh
set CATALINA_OPTS="%CATALINA_OPTS% -javaagent:${DOWNLOADS}\contrast.jar"
call ${TOMCAT_DIR} \bin\startup.bat
```

For Unix `startup-with-contrast.sh`:
``` sh
export CATALINA_OPTS="$CATALINA_OPTS -javaagent:${DOWNLOADS}/contrast.jar"
${TOMCAT_DIR}/bin/startup.sh
```

Alternatively, if you have a `setenv.bat`/`setenv.sh` file as recommended by the Tomcat docs, add the -javaagent configuration there in `CATALINA_OPTS`.

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

- [Running Contrast on Tomcat with Maven Apache Tomcat Plugin](installation-javainstall.html#apache)

- [Running Contrast on an Eclipse WTP Application](installation-javainstall.html#eclipse)

- [Running Contrast on an IntelliJ Application](installation-javainstall.html#intellij)

- [Running Contrast on a NetBeans Application](installation-javainstall.html#netbeans)
