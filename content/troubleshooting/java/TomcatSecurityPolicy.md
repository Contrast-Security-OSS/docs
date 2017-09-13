<!--
title: "How to Handle Tomcat's Java Security Policy"
description: "How to Handle Tomcat's Java Security Policy"
tags: "troubleshoot java agent tomcat security policy"
-->

## About the Policy
Some Java applications define custom permissions enforced by the *catalina.policy* file in *$CATALINA_BASE/conf/catalina.policy*. When applications run with this Java security policy, the Contrast Java agent requires an additional grant of permission to the agent JAR file. 

For more information about the `catalina.policy`, read [this Tomcat documentation](https://tomcat.apache.org/tomcat-7.0-doc/security-manager-howto.html).

## How It Works

Permission within the *catalina.policy* file allows the Java agent to complete crucial operations, such as: 

* Reading files when analyzing runtime code and reading cached data.
* Writing files when saving analysis results and log files.
* Inspecting sensitive data, like `ClassLoaders` and `ProtectionDomains`. 
* Updating automatically, which may cause problems when new permissions are required. 

Without this permission, the application either fails to instrument or potentially fails to execute correctly. 

## Grant Permission

In this example, Contrast suggests that you give the agent the ubiquitous `AllPermission`. Update the path shown below to the real file path in the *contrast.jar* agent file.


```java
grant codeBase "file:/path/to/contrast.jar" {
  permission java.security.AllPermission;
};
```
