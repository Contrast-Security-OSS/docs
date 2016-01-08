<!--
title: "Installing On Karaf"
description: "Agent installation using the Karaf app container"
-->

## Installing On Karaf
Add a ```KARAF_OPTS``` environment variable containing the ```-javaagent``` flag before starting the container:

``` 
$ export KARAF_OPTS=-javaagent:/path/to/contrast.jar
```

Afterwards, run the Karaf server like normal. A Contrast startup message should appear in the standard output before the Karaf shell output.

Navigate to your application, and allow an extra minute for it to start up.


## Note

Many Karaf users will probably want to use two extra system properties when running Contrast:
 * *contrast.classpath.libs*, which tells Contrast to use the standard classpath libraries instead of libraries found in */WEB-INF/lib*
 * *contrast.appname*, which allows you to name your application
 
Adding these flags will result in an export that looks more like the following:

```
$ export KARAF_OPTS="-Dcontrast.appname=MyKarafApp -Dcontrast.classpath.libs=true -javaagent:/path/to/contrast.jar"
```