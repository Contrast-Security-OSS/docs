<!--
title: "Contrast Maven Plugin"
description: "Sample Maven build plugin using the Contrast Java SDK"
tags: "tools Maven SDK Integration Java"
-->

## About the Plugin

The Contrast Maven Plugin is used to integrate the Contrast *jar* with your build. It's capable of authenticating a user to Contrast, downloading the latest Java agent and verifying your build.

> **Note:** [Maven](https://maven.apache.org/) is a build tool that utilizes *pom.xml* files to configure your applications. It's used to build, package and test Java applications.

This guidance refers to version 2.0 of the Contrast Maven Plugin. For information on version 1.X, refer to the documentation in Contrast's [Github repository](https://github.com/Contrast-Security-OSS/contrast-maven-plugin/blob/contrast-maven-plugin-1.4/README.md).

## Access the Plugin

You can view the plugin code in Contrast's [Github repository](https://github.com/Contrast-Security-OSS/contrast-maven-plugin). You can also review how our two goals, `install` and `verify`, work.

<!-- The plugin can be found here on the Maven repository. -->

## Configuration

The table below shows all the parameters for the plugin. These settings are for connecting to Contrast and filtering your vulnerabilities.

| Parameter                    | Description                                             |
|------------------------------|---------------------------------------------------------|
| TeamServer Username          | Username/email for your user in Contrast |
| TeamServer Service Key       | Service Key found in Organization Settings             |
| TeamServer API Key           | API Key found in Organization Settings                 |
| TeamServer API Url           | API URL to your Contrast instance  <BR> (Use *app.contrastsecurity.com/Contrast/api* if you're a SaaS customer.)                    |
| TeamServer Organization Uuid | Organization UUID of the configured user found in Organization Settings |
| Application Name             | Name of application you set with `-Dcontrast.appname` <BR> (See the **Use the agent** section below.) |
| Minimum Severity Level       | Minimum severity level for which to filter (Note, Low, Medium, High, or Critical). <br> (This property is inclusive.) |
| Server Name                  | Name of server you set with `-Dcontrast.server` <BR> (See the **Use the agent** section below.) |
| serverPath  | False    |            | The server context path   |
| Jar Path                     | Path of a local *jar* file if you don't want to download the agent again                  |
| Skip Arg Line                | The Maven Plugin will modify jvm arguments depending on this value |


>**Note**: Even if your build succeeds, the plugin will fail the overall build if a vulnerability with adequate severity is found.


The following configuration is an example of a profile for the Contrast Maven Plugin. To run with this profile, use `mvn install -P run-with-contrast`.


```xml
<profile>
    <id>run-with-contrast</id>
    <build>
        <plugins>
            <plugin>
                <groupId>com.contrastsecurity</groupId>
                <artifactId>contrast-maven-plugin</artifactId>
                <version>2.0</version>
                <executions>
                    <execution>
                        <id>install-contrast-jar</id>
                        <goals>
                            <goal>install</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>verify-with-contrast</id>
                        <phase>post-integration-test</phase>
                        <goals>
                            <goal>verify</goal>
                        </goals>
                    </execution>
                </executions>
                <configuration>
                    <username>test_user</username>
                    <apiKey>testApiKey</apiKey>
                    <serviceKey>testServiceKey</serviceKey>
                    <apiUrl>https://app.contrastsecurity.com/Contrast/api</apiUrl>
                    <orgUuid>QWER-ASDF-ZXCV-ERTY</orgUuid>
                    <appName>MyAppName</appName>
                    <serverName>MyServerName</serverName>
                    <minSeverity>High</minSeverity>
                </configuration>
            </plugin>
        </plugins>
    </build>
</profile>
```

## JVM arguments

The Contrast Maven Plugin will configure your JVM arguments to use the Contrast agent by appending to the `argLine` property from the Maven properties. If you want to prevent this in order to build your own JVM arguments, set `skipArgLine` to `true` in the plugin properties.

### serverPath

Multi-module Maven builds can appear as different servers in TeamServer. If you would like to discourage this behavior and would rather see all modules appear under the same server in TeamServer, then please set the `serverPath` property.

## Containers

Please see the following articles for specific installation instructions:

* [Install the agent on Maven Apache Tomcat](installation-javainstall.html#apache)
* [Install the agent on Maven Cargo Plugin](installation-javainstall.html#cargo)
