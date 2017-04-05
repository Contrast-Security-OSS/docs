<!--
title: "Running on Jetty"
description: "Agent on-boarding for Jetty container"
tags: "java agent running Jetty"
-->

[Back to Quick Links](user_javainstall.html#links)

## Prerequisites
Download the Contrast plugin (***contrast.jar***) from the TeamServer.

## Instructions

* Set your ```MAVEN_OPTS``` environment variable to contain Contrast's JVM parameters:

``` 
-javaagent:${DOWNLOADS}/contrast.jar
```

* Run your jetty:run or other Maven target normally.
* A Contrast startup message should appear in the Console (allow 1-2 minutes extra time for server startup).
* Navigate to your application, and allow an extra minute for it to start up.
