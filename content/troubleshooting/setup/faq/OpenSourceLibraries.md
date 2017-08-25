<!--
title: "Open Source Libraries in an Application Show Up as Unknown"
description: "Open source libraries showing up as unknown"
tags: "troubleshoot setup FAQ Websphere libraries"
-->

Contrast identifies libraries by their **SHA-1** digest. If any repackaging of the library occurs, which WebSphere does by default, the digest is different. To prevent repackaging, you can add the following JVM system property:

```-Dorg.eclipse.jst.j2ee.commonarchivecore.ignore.web.fragment=true```
