<!--
title: "Why Do I See The "NoClassDefFoundError"?"
description: "Explanation of the "NoClassDefFoundError""
tags: "troubleshoot java agent NoClassDefFoundError"
-->

## Issue

```
java.lang.NoClassDefFoundError:com/contrastsecurity/
```

## Causes and Solutions 

### Agent file name

This error usually indicates you've renamed your agent *jar* from its original name, *contrast.jar*. The *contrast.jar* file name has to match a file that's already inside the *jar*. (If you unzip *contrast.jar*, look at the file *META-INF/MANIFEST.mf*.) If it doesn't match, it will cause classloading issues. 

The solution: Don't rename the Contrast agent file. 

### OSGi container

It might also mean that you're using an OSGi container, like Felix or Equinox, that should only use the **Java 1.5** agent.

The solution: Only use the Java 1.5 agent, which has the same functionality as the Java agent but doesn't auto-update.

### Other solutions 

Starting with version 3.5.4, you can try running with `-Dcontrast.automaticbootdelegation`, which will attempt to supplement classloading behavior to increase the visibility of Contrast agent classes.

