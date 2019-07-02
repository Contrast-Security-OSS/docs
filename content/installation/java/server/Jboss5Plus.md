<!--
title: "Installing Contrast on JBoss 5 and Higher Versions"
description: "JBoss5 and higher agent installation process using Windows or startup script"
tags: "java agent installation JBoss RedHat"
-->


## Run JBoss from "run.bat" or "standalone.bat"

If you run JBoss from *domain.bat*, *standalone.bat*, or *run.bat* with a *.conf* file, Contrast recommends modifying the configuration file. It should enable the Contrast JVM parameters and then return to the start up script. To do this, simply append the following line to the end of your *.conf* file: 

````
set JAVA_OPTS=-javaagent:{path-to-jboss-direcotry}\contrast.jar %JAVA_OPTS%
````

Of course, you'll have to substitute the path to ***contrast.jar*** and your JBoss server directory for your environment. 

## Run JBoss in Domain Mode

If you're running JBoss 6 EAP or JBoss 7.x in Domain mode using *domain.bat* or *domain.sh*, you must add the `-javaagent` switch to the JVM options in *$JBOSS_HOME/domain/configuration/domain.xml*. Here's an example file snippet:

````
<server-group ...>
  <jvm name="default">
    <jvm-options>
      <option value="-javaagent:/path/to/contrast.jar"/>
    </jvm-options>
  </jvm>
...
</server-group>
````

## More Information

* [Run Contrast on an Eclipse WTP application](installation-javaserver.html#eclipse)
* [Run Contrast on an IntelliJ application](installation-javaserver.html#intellij)
* [Run Contrast on GlassFish using IntelliJ or NetBeans](installation-javaserver.html#glass)
