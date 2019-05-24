<!--
title: "Installing Contrast on DropWizard"
description: "DropWizard installation of the Contrast Java Agent"
tags: "java agent installation dropwizard"
-->


## Getting Started
Here's an example of how to run the Java Agent with your standalone/fatjar Dropwizard application:

````
java -javaagent:/path/to/contrast.jar -Dcontrast.standalone.appname="AppNameToReportUnder" -jar /path/to/your/app.jar server /path/to/your/appconfig.yml
````

The Java Agent will not be able to accurately count library usage if your project was configured to shade dependencies into your application's jar. Instead, the Java Agent will report a list of jars based on the information gathered from the pom.properties files provided with the included libraries.
