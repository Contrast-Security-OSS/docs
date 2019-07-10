<!--
title: "Configure the agent with Karaf"
description: "Agent configuration using the Karaf application container"
tags: "java agent configuration Karaf apache"
-->

## Before You Start 

[Download and install the Java agent](installation-javastandard.html) from Contrast before proceeding with the **Configuration** instructions.

## Configuration

* Add a `KARAF_OPTS` environment variable containing the `-javaagent` flag before starting the container:

``` 
$ export KARAF_OPTS=-javaagent:/path/to/contrast.jar
```

* Next, run the Karaf server like normal. A Contrast startup message should appear in the standard output before the Karaf shell output.

* Navigate to your application, and allow an extra minute for it to start up.

## Additional System Properties

Many Karaf users may want to use two extra system properties when running Contrast:

* Use `contrast.classpath.libs` to tell Contrast to use the standard classpath libraries instead of libraries found in */WEB-INF/lib*.
* Use `contrast.appname` to name your application.
 
If you add these flags, it results in an export like the following:

```
$ export KARAF_OPTS="-Dcontrast.appname=MyKarafApp -Dcontrast.classpath.libs=true -javaagent:/path/to/contrast.jar"
```