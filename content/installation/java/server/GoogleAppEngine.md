<!--
title: "Configure Contrast with Google App Engine"
description: "Guidelines for configuring an agent with the Google App Engine"
tags: "java agent configuration Google engine"
-->


To add the Contrast agent in your Google App Engine environment, complete the steps in the following **Configuration** instructions. 

> **Note:** Contrast only works in your locally deployed (dev/test) instance of App Engine. The the locally deployed instance of App Engine supports the Java instrumentation libraries required by Contrast; but, Google App Engine cloud doesn't.

## Before You Start

[Download and install the Java agent](installation-javastandard.html) from Contrast before proceeding with the **Configuration** instructions.

## Configuration

If you're using Maven to [deploy your application](https://developers.google.com/appengine/docs/java/gettingstarted/creating), you need to edit your *pom.xml* file under `<build>/<plugins>/<plugin>` with a `groupid` of `<groupId>com.google.appengine</groupId>` and `artifactid` of `<artifactId>appengine-maven-plugin</artifactId>`.

* Add the following block: 

````
<configuration>
  <jvmFlags>
    <jvmFlag>-javaagent:/path_to_contrast/contrast.jar</jvmFlag>
    <jvmFlag>-Dcontrast.rootapp=NAMEOFYOURAPP</jvmFlag>
  </jvmFlags>
</configuration>
````

* The result should be similar to: 

````
<plugin>
  <groupId>com.google.appengine</groupId>
  <artifactId>appengine-maven-plugin</artifactId>
  <version>1.9.0</version>
  <configuration>
    <jvmFlags>
      <jvmFlag>-javaagent:/path_to_contrast/contrast.jar</jvmFlag>
      <jvmFlag>-Dcontrast.rootapp=NAMEOFYOURAPP</jvmFlag>
    </jvmFlags>
  </configuration>
</plugin>
````

> **Note:** If you don't provide the `-Dcontrast.rootapp jvmFlag`, Contrast will refer to your application by the name `ROOT`.
 
* Once this is done, you can run: 

````
mvn clean install
mvn appengine:devserver
````

Now your application will launch with the Contrast agent monitoring the application.

