<!--
title: "How To Run The Java Agent On A Desktop Or Standalone App"
description: "Instructions for running Java agent on desktop or standalone app"
tags: "java agent desktop installation"
-->

The process is pretty much the same, but you have to also pass a name in the ```contrast.standalone.appname``` system property under which to collect vulnerabilities.

```
-Dcontrast.standalone.appname=AcmeDesktopApp -javaagent:<path>/contrast.jar
```

