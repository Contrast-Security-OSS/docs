<!--
title: "Jetty"
description: "Agent installation and running using the Jetty container"
tags: "java agent installation run Jetty"
-->

[Back to Quick Links](user_javainstall.html#links)

## Installation
Installing on Jetty is easy. Add the following lines to your ***${JETTY_DIR}\start.ini*** file:

``` 
-javaagent:${DOWNLOADS}/contrast.jar
```

Of course, you'll have to substitute the path to *contrast.jar* and the server for your environment.

## Running on Jetty
* Download the Contrast plugin (***contrast.jar***) from the TeamServer.

* Set your ```MAVEN_OPTS``` environment variable to contain Contrast's JVM parameters:

``` 
-javaagent:${DOWNLOADS}/contrast.jar
```

* Run your jetty:run or other Maven target normally.
* A Contrast startup message should appear in the Console (allow 1-2 minutes extra time for server startup).
* Navigate to your application, and allow an extra minute for it to start up.


## See Also

Not using ***jetty.ini***? Running Contrast from Other Jetty Launchers:

- [Running Contrast on Jetty with Maven Jetty Plugin](user_javainstall.html#jettyrun)

- [Running Contrast on an Eclipse WTP Application](user_javainstall.html#eclipse)

- [Running Contrast on an IntelliJ Application](user_javainstall.html#intellij)

- [Running Contrast on GlassFish with IntelliJ](user_javainstall.html#glassintellij)

- [Running Contrast on GlassFish with NetBeans](user_javainstall.html#netbeans)
