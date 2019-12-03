<!--
title: "Configuration on WebLogic"
description: "Guideliness for configuring agents on WebLogic"
tags: "java agent configuration BEA Oracle WebLogic"
-->

## Before You Start 

[Download and install the Java agent](installation-javastandard.html) from Contrast before proceeding with the **Configuration** instructions.

## Configuration 

### Unix

If you launch WebLogic yourself, you must add Contrast's JVM parameter to the *startWebLogic* file in your installation's *bin* directory. For UNIX-based operating systems, the path to this file looks like:

```
/path/to/appserver/userprojects/domains/base_domain/bin/startWebLogic.sh
```

* In this file, add the Contrast engine as a `-javaagent` to the `JAVA_OPTIONS` environment variable before the Java execution step:

````
export JAVA_OPTIONS="$JAVA_OPTIONS -javaagent:/path/to/contrast.jar"
````

### Windows

For Windows systems, the path looks like:

```
C:\Oracle\Middleware\userprojects\domains\base_domain\bin\startWebLogic.bat
```

* At the beginning of the file, add the Contrast engine as a `-javaagent` to the `JAVA_OPTIONS` environment variable:

````
set JAVA_OPTIONS="%JAVA_OPTIONS%" -javaagent:"C:\path\to\contrast.jar" 
````

Of course, you need to substitute the path to *contrast.jar* and your WebLogic server for your environment.
