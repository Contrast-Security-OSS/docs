<!--
title: "Why Do I See The "NoClassDefFoundError"?"
description: "Explanation of the "NoClassDefFoundError""
tags: "troubleshoot java agent NoClassDefFoundError"
-->

## Issue

```java.lang.NoClassDefFoundError:com/.../EventController
```

This error usually indicates you've renamed your agent jar from its original name, ***contrast.jar***. It may also mean that you're using an OSGi container like Felix or Equinox that is having trouble working with our auto-updating agent.

## Solution

The name of the contrast agent file can't be changed, and OSGi applications should only use the non-auto updating agent (also called the "1.5 agent".
