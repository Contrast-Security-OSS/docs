<!--
title: "Why does my open-source library show up as unknown?"
description: "Contrast does not recognize open-source libraries"
tags: "troubleshoot setup FAQ open source libraries"
-->


Contrast identifies libraries by their SHA-1 digest. If any repackaging of the library occurs, which WebSphere does by default, the digest is different. To prevent repackaging, you can add the following JVM system property:

```
-Dorg.eclipse.jst.j2ee.commonarchivecore.ignore.web.fragment=true
```



