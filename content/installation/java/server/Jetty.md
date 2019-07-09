<!--
title: "Jetty"
description: "Agent configuration using the Jetty container"
tags: "java agent configuration run Jetty"
-->

## Before You Start 

[Download and install the Java agent](installation-javastandard.html) from Contrast.

## Configuration

To add the Contrast agent on Jetty, add the following lines to your *${JETTY_DIR}\start.ini* file: 

```
-javaagent:${DOWNLOADS}/contrast.jar*
```

Of course, you'll have to substitute the path to *contrast.jar* and the server for your environment.

## Run on Jetty

<ol>
<li> Download the Contrast plugin (*contrast.jar*) from the Contrast UI. </li>

<li> Set your `MAVEN_OPTS` environment variable to contain Contrast's JVM parameters: `-javaagent:${DOWNLOADS}/contrast.jar` </li>

<li> Run your `jetty:run` or other Maven target normally. </li>
<li> A Contrast startup message should appear in the console. (Allow one to two extra minutes for server startup). </li>
<li> Navigate to your application, and allow an extra minute for it to start up. </li>
</ol>

## More Information

Not using *jetty.ini*? Run Contrast from other Jetty launchers.

- [Run Contrast on an Eclipse WTP Application](installation-javaserver.html#eclipse)

- [Run Contrast on an IntelliJ Application](installation-javaserver.html#intellij)

- [Run Contrast on GlassFish with IntelliJ or NetBeans](installation-javaserver.html#glass)

