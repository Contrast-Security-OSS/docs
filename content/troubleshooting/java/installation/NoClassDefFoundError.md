<!--
title: "Why Do I See The "NoClassDefFoundError"?"
description: "Explanation of the "NoClassDefFoundError""
tags: "troubleshoot java agent NoClassDefFoundError"
-->

## Issue

```java.lang.NoClassDefFoundError:com/.../EventController
```

This error usually indicates you've renamed your agent *jar* from its original name, *contrast.jar*. It might also mean that you're using an OSGi container like Felix or Equinox that should only use the **Java 1.5** agent.


## Solutions

* The name of the contrast agent file can't be changed.

* OSGi applications should only use the Java 1.5 agent, which has the same functionality as the Java agent but doesn't auto-update.
