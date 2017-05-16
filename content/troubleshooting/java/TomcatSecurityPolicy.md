<!--
title: "How to Handle Tomcat's Java Security Policy"
description: "How to Handle Tomcat's Java Security Policy"
tags: "troubleshoot java agent tomcat security policy"
-->

Some Java applications define custom permissions enforced via the ***catalina.policy*** file in ***$CATALINA_BASE/conf/catalina.policy***. When applications run with this Java security policy, the Contrast Java agent requires an additional grant of permission to the agent JAR file. Without this permission, the application will either fail to instrument, or potentially fail to execute correctly. For more information about the ```catalina.policy``` please [read this](https://tomcat.apache.org/tomcat-7.0-doc/security-manager-howto.html).

The Contrast Java Agent reads files when analyzing runtime code and reading cached data. The agent writes files when saving analysis results and log files. The agent also inspects sensitive data, like ```ClassLoaders``` and ```ProtectionDomains```. In addition, the 
contrast agent automatically updates and may cause problems when new permissions are required. In order to do all of these operations and more, the agent requires a permission grant within the ```catalina.policy```.

In this scenario it is suggested that the agent be given the ubiquitous "AllPermission". Update the path in this example to the real file path to the ***contrast.jar*** agent file.


```java
grant codeBase "file:/path/to/contrast.jar" {
  permission java.security.AllPermission;
};
```
