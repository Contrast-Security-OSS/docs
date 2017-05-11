<!--
title: "Jetty"
description: "Agent installation and running using the Jetty container"
tags: "java agent installation run Jetty"
-->


## Installation
Installing on Jetty is easy. Add the following lines to your ***${JETTY_DIR}\start.ini*** file: ```-javaagent:${DOWNLOADS}/contrast.jar```

Of course, you'll have to substitute the path to *contrast.jar* and the server for your environment.

## Running on Jetty

<ol>
<li> Download the Contrast plugin (***contrast.jar***) from the TeamServer. </li>

<li> Set your ```MAVEN_OPTS``` environment variable to contain Contrast's JVM parameters: ```-javaagent:${DOWNLOADS}/contrast.jar``` </li>

<li> Run your jetty:run or other Maven target normally. </li>
<li> A Contrast startup message should appear in the Console (allow 1-2 minutes extra time for server startup). </li>
<li> Navigate to your application, and allow an extra minute for it to start up. </li>
</ol>

## More Information

Not using ***jetty.ini***? Running Contrast from Other Jetty Launchers:

- [Running Contrast on an Eclipse WTP Application](installation_javainstall.html#eclipse)

- [Running Contrast on an IntelliJ Application](installation_javainstall.html#intellij)

- [Running Contrast on GlassFish with IntelliJ or NetBeans](installation_javainstall.html#glass)

