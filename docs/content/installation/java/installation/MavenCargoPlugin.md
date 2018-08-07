<!--
title: "Running Contrast with the Codehaus Maven Cargo Plugin"
description: "This document will outline the process for installing Contrast on an application using the Cargo plugin by Codehaus."
tags: "java agent installation maven codehaus"
-->


## Prerequisites
Download the Contrast plugin (***contrast.jar***) from the Contrast site.

## Instructions

* Add a ```<cargo.jvmargs>``` property to the ```<properties>``` section of ```<configuration>``` in your ***pom.xml***, like this: </configuration 

````
<build>
  <plugins>
    <plugin>
      <groupId>org.codehaus.cargo.maven2</groupId>
      <artifactId>cargo-maven2-plugin</artifactId>
      <configuration>
        <container>
          <containerId>tomcat5x</containerId>
          [...]
        </container>
        <configuration>
          <properties>
            <cargo.jvmargs>-javaagent:${DOWNLOADS}/contrast.jar -noverify</cargo.jvmargs>
          </properties>
        </configuration>
        [...]
      </configuration>
    </plugin>
  </plugins>
</build>
````

* Run your Maven target or Cargo unit test normally. 
* A Constart startup message should appear in the Console before your server messages appear. (Allow 1-2 extra minutes for server startup.) 
* Navigate to your application, and allow an extra minute for it to start up. 

For more information on adding JVM arguments to Cargo container, consult the [Cargo documentation](https://codehaus-cargo.github.io/cargo/Configuration+properties.html).
