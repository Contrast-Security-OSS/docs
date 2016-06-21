<!--
title: "Contrast Maven Plugin"
description: "Sample Maven build plugin using the Contrast Java SDK"
tags: "Maven SDK Integration Java"
-->

## About the Contrast Maven Plugin

The Contrast Maven Plugin is used to integrate the Contrast jar with your build. It is capable of authenticating a user to TeamServer, downloading the latest java agent, and verifying your build.

[Maven](https://maven.apache.org/) is build tool that utilizes `pom.xml` files to configure your applications. It is used to build, package, and test Java applications.

## Access to the Plugin

The plugin code can be viewed in our Github [repository](https://github.com/Contrast-Security-OSS/contrast-maven-plugin). Here you can review how our two goals, `install` and `verify` work.

<!-- The plugin can be found here on the Maven repository. -->

## How to Use the Plugin

### Configuration

Below is a table showing all the different parameters for the plugin:

These settings are for connecting to TeamServer and filtering your vulnerabilities.

| Parameter                    | Description                                             |
|------------------------------|---------------------------------------------------------|
| TeamServer Username          | This is the username/email for your user in TeamServer. |
| TeamServer Service Key       | Service Key found in Organization Settings.             |
| TeamServer Api Key           | Api Key found in Organization Settings.                 |
| TeamServer Api Url           | API Url to your TeamServer instance.                    |
| TeamServer Organization Uuid | Organization Uuid of the configured user found in Organization Settings. |
| Application Name             | Name of application you set with -Dcontrast.appname. <BR> This is used to filter for your application. |
| Minimum Severity Level       | Minimum Severity level to filter for. One of Note, Low, Medium, High, Critical. This property is inclusive. |
| Server Name                  | Name of server you set with -Dcontrast.server. <BR> Use app.contrastsecurity.com/Contrast/api if you are a SaaS customer. |
| Jar Path                     | Path of a local jar file if you don't want to download the agent again.                  |

**Note**: Even if your build succeeds, the plugin will fail the overall build if a bad condition is found.

### Example

Below is an example TeamServer configuration for the Contrast Maven Plugin:

```xml
<plugin>
     <groupId>com.aspectsecurity.contrast</groupId>
     <artifactId>contrast-maven-plugin</artifactId>
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
         <apiUrl>http://www.app.contrastsecurity.com/Contrast/api</apiUrl>
         <orgUuid>QWER-ASDF-ZXCV-ERTY</orgUuid>
         <appName>Test Application</appName>
         <serverName>jenkins.slave1</serverName>
         <minSeverity>High</minSeverity>
     </configuration>
</plugin>
```
