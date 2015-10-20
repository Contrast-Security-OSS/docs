<!--
title: "Installing Contrast on JBoss 5 and Higher Versions"
description: "JBoss5 and higher agent installation process using Windows or startup script"
-->

## Running JBoss from run.bat or standalone.bat (or .sh)
Installing on JBoss is easy. If you run JBoss from ***domain.bat***, ***standalone.bat***, or ***run.bat*** with a ***.conf*** file, we suggest modifying the configuration file. It should enable the Contrast JVM parameters and then return to the start up script. To do this, simply append the following line to the end of your ***.conf*** file: 

````
set JAVA_OPTS=-javaagent:{path-to-jboss-direcotry}\contrast.jar %JAVA_OPTS%
````

Of course, you'll have to substitute the path to ***contrast.jar*** and your JBoss server directory for your environment. 

## Running JBoss 6 EAP/JBoss 7.X in Domain Mode
If you're running in domain mode (using ***domain.bat*** or ***domain.sh***), you'll have to add the ```-javaagent``` switch to the JVM options in ***$JBOSS_HOME/domain/configuration/domain.xml***. Here's an example file snippet:

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

## See Also

* [Running Contrast on an Eclipse WTP application](user_javainstall.html#eclipse)

* [Running Contrast on an IntelliJ application](user_javainstall.html#intellij)

* [Running Contrast on GlassFish with IntelliJ](user_javainstall.html#glassintellij)

* [Running Contrast on GlassFish with NetBeans](user_javainstall.html#glassnetbeans)
