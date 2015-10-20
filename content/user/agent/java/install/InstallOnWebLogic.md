<!--
title: "Installing on WebLogic"
description: "Guideliness for configuring agents on WebLogic"
-->

## Getting Started on Unix

If you launch WebLogic yourself, you'll have to add Contrast's JVM parameter to the ***startWebLogic*** file in your installation's bin directory.
For UNIX-based operating systems, the path to this file looks like this:

````
/path/to/appserver/userprojects/domains/base_domain/bin/startWebLogic.sh
````
In this file, before the Java execution step, add the Contrast engine as a ```-javaagent``` to the ```JAVA_OPTIONS``` environment variable:
````
export JAVA_OPTIONS="$JAVA_OPTIONS -javaagent:/path/to/contrast.jar"
````

---

## Getting Started on Windows
For Windows systems, the path looks like this:
````
C:\Oracle\Middleware\userprojects\domains\base_domain\bin\startWebLogic.bat
````
At the beginning of the file, add the Contrast engine as a ```-javaagent``` to the ```JAVA_OPTIONS``` environment variable:
````
set JAVA_OPTIONS="%JAVA_OPTIONS%" -javaagent:"C:\path\to\contrast.jar" 
````
Of course, you'll have to substitute the path to ***contrast.jar*** and your WebLogic server for your environment.
