<!--
title: "Contrast 3.6.0 - January 2019"
description: "Contrast 3.6.0 January 2019"
tags: "3.6.0 January Release Notes"
-->


## Fixes

* Access **Reports** from the user menu without errors. CONTRAST-30049
* Language-specific Assess rules display the correct applications to which they apply. CONTRAST-22748
* Windows and Linux filepaths for Java configuration in the **Add Agent** wizard are straightened out. CONTRAST-29411, CONTRAST-29831
* Successfully delete an IP address you'd added in **Organization Settings > Security** tab. CONTRAST-23474
* Clone Profiles with Proxy properties in the **Add Agent** wizard. CONTRAST-29408
* The **Vulnerabilities** page show data instead of error messages. CONTRAST-29696

## Improvements

Check back next release for new features! 


## Agent Updates

### Java summary 

The Java team improved accuracy of Protect SQL-Injection, XSS, and Expression Language Injection rules, as well as the Assess SQL-Injection rule. We fixed several errors that do not affect analysis, but would cause noise within agent logs: 
* NullPointerException when observing certain database technologies as an architecture component
* NullPointerException when observing a web service without a port as an architecture component
* NullPointerException when reflecting over SaxParser

We also fixed an error that could occur under the Play framework, and reduced log severity when the agent can't determine the database type of a database architecture component. We added support for using `contrast` namespace for command line and system property YAML configuration properties (e.g., `contrast.application.name`). 

#### Java 1.5 support

**Java 1.5 is no longer supported as of version 3.6.0 of the Java agent.** The Java agent supports most Java runtimes for version 1.6 - 1.8. For a complete list of supported Java runtimes, see 
[Supported Technologies](https://docs.contrastsecurity.com/installation-java.html#java-supported).

### .NET summary 

The .NET team fixed an issue where the agent could cause an error when ASPX pages are used to generate CSS files.

### Node.js summary 

The Node team released the last 1.x agent before migrating to the new dataflow tracking technology in the 2.0 version of the agent that we plan to release in February. This version of the agent has updates to prevent side effects in data flow through ternary statements as well as updates to the Syslog support.

### Ruby summary 

The Ruby team added support for server names that contain non-UTF8 characters, and fixed a defect where the agent couldn't send activity messages when the path segment of the URI was nil. In Assess mode, the agent includes updates to better handle edge cases with frozen strings.

### Python summary

The Python team added support for Python 3.7. We added additional support for the metadata feature by sending metadata in the application startup message. The agent also includes support for a configuration to disable automatic startup of the service in environments where the service is being launched by and external runner.




