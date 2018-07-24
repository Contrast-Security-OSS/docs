<!--
title: "Why Do I See The "NoClassDefFoundError"?"
description: "Explanation of the "NoClassDefFoundError""
tags: "troubleshoot java agent NoClassDefFoundError"
-->
## Issue

```
java.lang.NoClassDefFoundError:com/contrastsecurity/
```
This error usually indicates you've renamed your agent *jar* from its original name, *contrast.jar*. 

It might also mean that you're using an OSGi container, like Felix or Equinox, that should only use the **Java 1.5** agent. 

## Solutions

* The name of the Contrast agent file can't be changed.

* OSGi applications should only use the Java 1.5 agent, which has the same functionality as the Java agent but doesn't auto-update. 

* Starting with version 3.5.4, you can try running with `-Dcontrast.automaticbootdelegation`, which will attempt to supplement classloading behavior to increase the visibility of Contrast agent classes.
