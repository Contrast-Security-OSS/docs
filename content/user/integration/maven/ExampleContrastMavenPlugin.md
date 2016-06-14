<!--
title: "Example Configuration For The Contrast Maven Plugin"
description: "Example configuration the Contrast Maven Plugin"
tags: "jenkins agent maven teamserver"
-->

Below is an example TeamServer configuration for the Contrast Maven Plugin:

## Example Configuration

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

