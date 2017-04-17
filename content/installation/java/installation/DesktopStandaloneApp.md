<!--
title: "How To Run The Java Agent On A Desktop Or Standalone App"
description: "Instructions for running Java agent on desktop or standalone app"
tags: "java agent desktop installation"
-->

The process is pretty much the same, but you have to also pass a name in the ```contrast.appname``` system property under which to collect vulnerabilities.

```
-Dcontrast.appname=AcmeDesktopApp -javaagent:<path>/contrast.jar
```

## See Also

[Java Agent Installation](installation_javainstall.html)
