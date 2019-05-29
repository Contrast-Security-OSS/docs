<!--
title: "Running Contrast with the Codehaus Maven Cargo Plugin"
description: "This document will outline the process for installing Contrast on an application using the Cargo plugin by Codehaus."
tags: "java agent installation maven codehaus"
-->


## Instructions

* Add a `<cargo.jvmargs>` property to the `<properties>` section of `<configuration>` in your ***pom.xml***:

````
<build>
  <plugins>
    <plugin>
      <groupId>org.codehaus.cargo</groupId>
      <artifactId>cargo-maven2-plugin</artifactId>
      <version>1.7.3</version>
      <configuration>
        <container>
          <containerId>jetty9x</containerId>
          [...]
        </container>
        <configuration>
          <properties>
            <cargo.jvmargs>-javaagent:${DOWNLOADS}/contrast.jar</cargo.jvmargs>
          </properties>
        </configuration>
        [...]
      </configuration>
    </plugin>
  </plugins>
</build>
````

* Run your Maven target or Cargo unit test as usual. 
* A Contrast startup message should appear in the console before your server messages appear. (Allow one or two extra minutes for server startup.)
* Navigate to your application, and allow an extra minute for startup.

## More Information

For more information on adding JVM arguments to Cargo container, see the [Cargo documentation](https://codehaus-cargo.github.io/cargo/Configuration+properties.html).

For a complete example of using Contrast with Maven and the cargo-maven2-plugin, see the article to [Add the Agent to a Maven Project](installation-javaguides.html#cargo).
