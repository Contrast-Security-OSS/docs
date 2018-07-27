<!--
title: "Why Do I See The "AbstractMethodError" with WebSphere on IBM Java 8"
description: "Explanation of the "AbstractMethodError""
tags: "troubleshoot java agent AbstractMethodError"
-->

## Issue

```
java.lang.AbstractMethodError:
```

## Cause and Solution

If you're experiencing this error on IBM Java 8, it's possible that your JVM doesn't include latest FixPack. 

Confirm that your JVM includes FixPack17 (FP17), which addresses several bugs, including JIT-related bugs that may lead to this error. If FP17 isn't included, you may try downloading and installing it, or applying the following iFix: http://www-01.ibm.com/support/docview.wss?uid=ibm10713519.
