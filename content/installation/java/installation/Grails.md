<!--
title: "Installing on Grails"
description: "Agent installation using Grails"
tags: "java agent installation grails"
-->


## Running Contrast from the command line or script:
To add a JVM option like Contrast requires, you should set a ```GRAILS_OPTS``` environment variable, like this:

``` 
export GRAILS_OPTS="$GRAILS_OPTS -javaagent:${DOWNLOADS}/contrast.jar"

grailsw run-app
```

Of course, you'll have to substitute the path to contrast.jar. This is trivial to do, but if you don't already use ```GRAILS_OPTS``` to set your JVM options, this will clobber the default JVM options! This could cause ```OutOfMemoryErrors``` and other issues.

The default JVM options are as follows:

````
-server -Xmx768M -Xms64M -XX:PermSize=32m -XX:MaxPermSize=256m -Dfile.encoding=UTF-8
````
