<!--
title: "Testing on a Server Outside Eclipse"
description: "Testing on a Server Outside Eclipse"
-->

## Getting Started
When the plugin first loads in Eclipse, it will deploy a Contrast Agent, a jar file beginning with the file name ***contrast-engine-***, to the user home directory under the hidden folder ***.contrast*** To monitor a server running outside of Eclipse, you will need this file. In the context below, ```${version}``` is the version number trailing this file name.  

### Running a server with your account
If you're running a server independent of Eclipse using the same account with which Eclipse is running, getting reports is pretty simple. As with the standard Contrast Agent installation, simply add the following line to the file where you set the JAVA_OPTS of your server:
````
 Linux:
set JAVA_OPTS="$JAVA_OPTS -javaagent:${USER_HOME}/.contrast/contrast-engine-${version}.jar"
 Windows:
set JAVA_OPTS="%JAVA_OPTS% -javaagent:${USER_HOME}/.contrast/contrast-engine-${version}.jar"
````  
### Running a server with a different user account
If you're running a server with a different user account but on the same machine, the process is almost the same as above, but you will need to set an additional configuration flag to the file where you modify the JAVA_OPTS of your server. If, however, you're running a server on a different machine, you will need to copy the Contrast Agent file to that machine and place it into a ".contrast" directory in the ${USER_HOME} before attempting to run with the following flags.
````
 Linux:
set JAVA_OPTS="$JAVA_OPTS -javaagent:${USER_HOME}/.contrast/contrast-engine-${version}.jar \
 -Dcontrast.dir=${USER_HOME}/.contrast"

 Windows:
set JAVA_OPTS="%JAVA_OPTS% -javaagent:${USER_HOME}/.contrast/contrast-engine-${version}.jar \
-Dcontrast.dir=${USER_HOME}/.contrast"
```` 
