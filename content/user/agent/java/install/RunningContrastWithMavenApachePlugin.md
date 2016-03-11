<!--
title: "Running Contrast on Tomcat with Maven Apache Tomcat Plugin"
description: "Overview of the process for installation of Contrast on an application using the Apache Maven Tomcat plugin"
tags: "java agent installation maven plugin"
-->

This document will outline the process for installing Contrast on an application using the Apache Maven Tomcat plugin.

## Prerequisites

Download the Contrast plugin (**contrast.jar**) from the Contrast site.

## Option 1: Maven Profile

Add a profile to your **pom.xml** that adds the ```-javaagent``` flag to the ```JAVA_OPTS``` variable.

``` sh
<profiles>
   <profile>
      <id>run-with-contrast</id>
      <activation>
         <property>
            <name>contrast.enabled</name>
            <value>true</value>
         </property>
      </activation>
      <build>
         <plugins>
            <plugin>
               <groupId>org.apache.tomcat.maven</groupId>
               <artifactId>tomcat7-maven-plugin</artifactId>
               <version>2.3</version>
               <configuration>
                  <systemProperties>
                     <JAVA_OPTS>-javaagent:/path/to/contrast.jar</JAVA_OPTS>
                  </systemProperties>
               </configuration>
            </plugin>
         </plugins>
      </build>
   </profile>
</profiles>
```

Once the profile has been added you can launch a Contrast-enabled application using the system property ```contrast.enabled=true``` or by manually activating the ```run-with-contrast``` profile.

``` sh
mvn tomcat:run-war -Dcontrast.enabled=true
mvn tomcat:run-war -Prun-with-contrast
```

## Option 2: ```MAVEN_OPTS```

1. If you're **forking** your JVM, set your ```MAVEN_OPTS``` environment variable to contain Contrast's JVM parameters.
If you're **NOT forking** your JVM, set the ```mvn``` command to use the following JVM parameters like a normal process would:
``` sh
-javaagent:${DOWNLOADS}/contrast.jar
```
2. Run your ```tomcat:run-war``` or other Maven goal normally. Note that library analytics won't be collected if a goal besides ```run-war``` is chosen.
3. A Contrast startup message should appear in the **Console** (allow 1-2 minutes extra time for server startup)
4. Navigate to your application, and allow an extra minute for it to start up
