<!--
title: "How To Run The Java Agent On A Desktop Or Standalone App"
description: "Instructions for running Java agent on desktop or standalone app"
tags: "java agent desktop configuration"
-->

## Before You Start

[Download and install the Java agent](installation-javastandard.html) from Contrast before proceeding with the **Configuration** instructions.

## Configuration 

The process to run the Java agent on a desktop or standalone application very similar to the standard process for a web application. The significant difference is that you must also pass a name in the `contrast.appname` system property under which to collect vulnerabilities:

```
-Dcontrast.appname=AcmeDesktopApp -javaagent:<path>/contrast.jar
```
