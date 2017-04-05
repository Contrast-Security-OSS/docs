<!--
title: "Installing on Jetty"
description: "Agent installation using the Jetty container"
tags: "java agent installation Jetty"
-->

[Back to Quick Links](user_javainstall.html#links)

## Running Contrast from the command line or script:
Installing on Jetty is easy. Add the following lines to your ***${JETTY_DIR}\start.ini*** file:

``` 
-javaagent:${DOWNLOADS}/contrast.jar
```

Of course, you'll have to substitute the path to contrast.jar and server for your environment.


## See Also

Not using ***jetty.ini***? Running Contrast from Other Jetty Launchers:


- [Running Contrast on Jetty with Maven Jetty Plugin](user_javainstall.html#jettyrun)

- [Running Contrast on an Eclipse WTP Application](user_javainstall.html#eclipse)

- [Running Contrast on an IntelliJ Application](user_javainstall.html#intellij)

- [Running Contrast on GlassFish with IntelliJ](user_javainstall.html#glassintellij)

- [Running Contrast on GlassFish with NetBeans](user_javainstall.html#netbeans)
