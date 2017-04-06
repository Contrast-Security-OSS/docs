<!--
title: "Installing Contrast on Google App Engine"
description: "Guidelines for configuring an agent with the Google App Engine"
tags: "java agent installation Google"
-->


## Getting Started
To install the Contrast agent in your Google App Engine environment, please follow the following instructions.

Note that Contrast only works in your locally deployed (dev/test) instance of App Engine. The Google App Engine cloud doesn't support the Java instrumentation libraries required by Contrast, but the locally deployed instance of App Engine does.

Assuming you are using Maven to deploy your application as described [here](https://developers.google.com/appengine/docs/java/gettingstarted/creating), you need to edit your ***pom.xml*** file under ```<build>/<plugins>/<plugin>``` with a ```groupid``` of: ```<groupId>com.google.appengine</groupId>``` and ```artifactid``` of: ```<artifactId>appengine-maven-plugin</artifactId>```

Add the following block: 

````
<configuration>
  <jvmFlags>
    <jvmFlag>-javaagent:/path_to_contrast/contrast.jar</jvmFlag>
    <jvmFlag>-Dcontrast.rootapp=NAMEOFYOURAPP</jvmFlag>
  </jvmFlags>
</configuration>
````
to end up with something like: 
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
NOTE: If you don't provide the ```-Dcontrast.rootapp jvmFlag```, Contrast will simply refer to your application by the name ```ROOT```.
 
Once this is done, you can simply run: 
````
mvn clean install
mvn appengine:devserver
````
Now your application will launch with the Contrast agent monitoring the application.
