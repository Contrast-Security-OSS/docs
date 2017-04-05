<!--
title: "Installing ColdFusion on JRun"
description: "ColdFusion installation process on JRun"
tags: "java agent installation coldfusion JRUN"
-->

[Back to Quick Links](user_javainstall.html#links)

## Getting Started
You can put the ```-javaagent``` JVM option into the ```java.args``` property in ***${JRUN}/bin/jvm.config***.

````
#
# VM configuration
#
...
java.args=-javaagent:/path/to/contrast.jar -Xmx512m -Dsun.io.useCanonCaches=false -XX:MaxPermSize=192m ...
````

Make sure to leave all the other JVM options in place! Once the server is restarted, Contrast will begin sending analytics for all the active applications.
