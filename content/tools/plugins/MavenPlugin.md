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

| Parameter   | Required | Default    | Description                                                                       | Since |
|-------------|----------|------------|-----------------------------------------------------------------------------------|-------|
| username    | True     |            | Username in the Contrast application                                              |       |
| serviceKey  | True     |            | [Service Key](admin-orgsettings.html#apikey)                                      |       |
| apiKey      | True     |            | [API Key](admin-orgsettings.html#apikey)                                          |       |
| orgUuid     | True     |            | [Organization UUID](admin-orgsettings.html#apikey)                                |       |
| appName     | True     |            | Name of the application as seen in the Contrast UI                                |       |
| appVersion  | False    | See below  | The `appversion` to report to the Contrast application. See explanation below.    |       |
| apiUrl      | True     |            | API URL to your Contrast application                                              |       |
| serverName  | True     |            | Name of the server you set with `-Dcontrast.server`                               |       |
| serverPath  | False    |            | The server context path                                                           |    2.1|
| minSeverity | False    | Medium     | Minimum severity level to verify; options are Note, Low, Medium, High or Critical |       |
| jarPath     | False    |            | Path to *contrast.jar*, if you already have one downloaded                        |       |
| skipArgLine | False    | False      | If this is "true", the plugin will not alter the Maven `argLine` property in any way |    2.0 |

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

Multi-module Maven builds can appear as different servers in Contrast. If you want to discourage this behavior, and prefer to see all modules appear under the same server in Contrast, set the `serverPath` property.

## Containers

Please see the following articles for specific installation instructions:

* [Install the agent on Maven Apache Tomcat](installation-javainstall.html#apache)
* [Install the agent on Maven Cargo Plugin](installation-javainstall.html#cargo)
