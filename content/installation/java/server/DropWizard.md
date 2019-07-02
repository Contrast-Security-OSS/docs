<!--
title: "Installing Contrast on DropWizard"
description: "DropWizard installation of the Contrast Java Agent"
tags: "java agent installation dropwizard"
-->


To run the Java agent with your standalone or fat JAR Dropwizard application, use the following example:

````
java -javaagent:/path/to/contrast.jar -Dcontrast.appname="AppNameToReportUnder" -jar /path/to/your/app.jar server /path/to/your/appconfig.yml
````

The Java agent can't accurately count library usage if your project was configured to shade dependencies into your application's JAR. Instead, the Java agent will report a list of JARs based on the information gathered from the *pom.properties* files provided with the included libraries.
