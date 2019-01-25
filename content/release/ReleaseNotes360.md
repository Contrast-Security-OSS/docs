<!--
title: "Contrast 3.6.0 - January 2019"
description: "Contrast 3.6.0 January 2019"
tags: "3.6.0 January Release Notes"
-->


## Fixes

* 

## Improvements

Check back next release! 


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


### Ruby summary 


### Python summary



