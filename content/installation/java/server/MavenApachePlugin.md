<!--
title: "Running Contrast on Tomcat with Maven Apache Tomcat Plugin"
description: "Overview of the process for configuration of Contrast on an application using the Apache Maven Tomcat plugin"
tags: "java agent configuration maven plugin"
-->

Use the following instructions to add Contrast to an application using the Apache Maven Tomcat plugin.

## Before You Start 

[Download and install the Java agent](installation-javastandard.html) from Contrast before proceeding with the **Configuration** instructions.

## Configuration

* If you're forking your JVM, set your `MAVEN_OPTS` environment variable to contain Contrast's JVM parameters.

 * On Windows:

 ``` sh
 set MAVEN_OPTS=-javaagent:C:\Path\To\contrast.jar
 mvn -Dmaven.tomcat.port=8181 clean package tomcat7:run-war
 ```

 * On Linux:

 ``` sh
 export MAVEN_OPTS="-javaagent:/path/to/contrast.jar"
 mvn -Dmaven.tomcat.port=8181 clean package tomcat7:run-war
 ```

* If you are **not** forking your JVM, set the `mvn` command to use the following JVM parameters like a normal process would:

 ``` sh
 -javaagent:/path/to/contrast.jar
 ```

* Run with the `tomcat7:run-war` or other Maven goal normally. 

> **Note:** Library analytics won't be collected if you choose a goal besides `run-war`.

* A Contrast startup message should appear in the **Console**. (Allow one to two extra minutes for server startup.)
* Navigate to your application, and allow an extra minute for it to start up.
