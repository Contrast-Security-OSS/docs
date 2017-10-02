<!--
title: "Contrast Maven Plugin"
description: "Sample Maven build plugin using the Contrast Java SDK"
tags: "tools Maven SDK Integration Java"
-->

## About the Plugin

The Contrast Maven Plugin is used to integrate the Contrast *jar* with your build. It's capable of authenticating a user to Contrast, downloading the latest Java agent and verifying your build.

> **Note:** [Maven](https://maven.apache.org/) is a build tool that utilizes *pom.xml* files to configure your applications. It's used to build, package and test Java applications.

## Access the Plugin

You can view the plugin code in Contrast's Github [repository](https://github.com/Contrast-Security-OSS/contrast-maven-plugin). You can also review how our two goals, `install` and `verify`, work.

<!-- The plugin can be found here on the Maven repository. -->

## Configuration

The table below shows all the parameters for the plugin. These settings are for connecting to Contrast and filtering your vulnerabilities.

| Parameter                    | Description                                             |
|------------------------------|---------------------------------------------------------|
| TeamServer Username          | Username/email for your user in Contrast |
| TeamServer Service Key       | Service Key found in Organization Settings             |
| TeamServer API Key           | API Key found in Organization Settings                 |
| TeamServer API Url           | API URL to your Contrast instance                    |
| TeamServer Organization Uuid | Organization UUID of the configured user found in Organization Settings |
| Application Name             | Name of application you set with `-Dcontrast.appname` <BR> (This is used to filter for your application.) |
| Minimum Severity Level       | Minimum severity level for which to filter (Note, Low, Medium, High, or Critical). <br> (This property is inclusive.) |
| Server Name                  | Name of server you set with `-Dcontrast.server` <BR> (Use *app.contrastsecurity.com/Contrast/api* if you're a SaaS customer.) |
| Jar Path                     | Path of a local *jar* file if you don't want to download the agent again                  |


>**Note**: Even if your build succeeds, the plugin will fail the overall build if a bad condition is found.


An example configuration for the Contrast Maven Plugin:

```xml
<plugin>
    <groupId>com.contrastsecurity</groupId>
    <artifactId>contrast-maven-plugin</artifactId>
    <version>1.3</version>
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
        <serviceKey>testServiceKEy</serviceKey>
        <apiUrl>http://app.contrastsecurity.com/Contrast/api</apiUrl>
        <orgUuid>QWER-ASDF-ZXCV-ERTY</orgUuid>
        <appName>VehicleMPG-Master</appName>
        <serverName>jenkins.slave1</serverName>
        <minSeverity>High</minSeverity>
    </configuration>
</plugin>
```
