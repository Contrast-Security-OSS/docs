<!--
title: "Configure Contrast with DropWizard"
description: "DropWizard configuration of the Contrast Java agent"
tags: "java agent installation dropwizard"
-->

## Before You Start

[Download and install the Java agent](installation-javastandard.html) from Contrast before proceeding with the **Configuration** instructions.

## Configuration 

To run the Java agent with your standalone or fat JAR Dropwizard application, use the following code sample:

````
java -javaagent:/path/to/contrast.jar -Dcontrast.appname="AppNameToReportUnder" -jar /path/to/your/app.jar server /path/to/your/appconfig.yml
````

The Java agent can't accurately count library usage if your project was configured to shade dependencies into your application's JAR. Instead, the Java agent will report a list of JARs based on the information gathered from the *pom.properties* files provided with the included libraries.
