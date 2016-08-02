<!--
title: "Why Open Source Libraries In An Application May Show Up As Unknown"
description: "Explanation of open source libraries showing up as unknown"
tags: "TeamServer Websphere libraries troubleshooting"
-->

## Issue

We identify libraries by their **SHA-1** digest. Thus, if any repackaging of the library occurs, the digest will be different.


## Solution

WebSphere does this repackaging by default. To prevent it, you can add the following JVM system property:

```-Dorg.eclipse.jst.j2ee.commonarchivecore.ignore.web.fragment=true```
