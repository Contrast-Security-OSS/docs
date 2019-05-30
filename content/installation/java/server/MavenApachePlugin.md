<!--
title: "Running Contrast on Tomcat with Maven Apache Tomcat Plugin"
description: "Overview of the process for installation of Contrast on an application using the Apache Maven Tomcat plugin"
tags: "java agent installation maven plugin"
-->


This document will outline the process for installing Contrast on an application using the Apache Maven Tomcat plugin.

## Prerequisites

Download the Contrast plugin (*contrast.jar*) from the TeamServer that you work with, either Contrast's SaaS deployment or your EOP installation.

## Installation with ```MAVEN_OPTS```

1. If you are **forking** your JVM, set your ```MAVEN_OPTS``` environment variable to contain Contrast's JVM parameters.<br><br>
	On Windows:
	``` sh
	set MAVEN_OPTS=-javaagent:C:\Path\To\contrast.jar
	mvn -Dmaven.tomcat.port=8181 clean package tomcat7:run-war
	```
	On Linux:
	``` sh
	export MAVEN_OPTS="-javaagent:/path/to/contrast.jar"
	mvn -Dmaven.tomcat.port=8181 clean package tomcat7:run-war
	```

	If you are **NOT forking** your JVM, set the ```mvn``` command to use the following JVM parameters like a normal process would:

	``` sh
	-javaagent:/path/to/contrast.jar
	```

2. Run with the ```tomcat7:run-war``` or other Maven goal normally. Note that library analytics won't be collected if a goal besides ```run-war``` is chosen.
3. A Contrast startup message should appear in the **Console** (allow 1-2 minutes extra time for server startup).
4. Navigate to your application, and allow an extra minute for it to start up.
