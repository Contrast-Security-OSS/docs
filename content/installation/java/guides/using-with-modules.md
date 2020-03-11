<!--
title: "Using the Java Agent with Java 9+ Modules"
description: "How to use the Java agent with the Java module system"
tags: "java agent deployment modules module jigsaw"
-->

Java 9 introduced the Java Platform Module System (JPMS), and with it a new way to encapsulate code.
Contrast supports inspection of modules and launching of applications written with the JPMS.

The Java Agent requires that the `java.sql` package be required by the application's `module-info.java` files:

```java
module mymodule {
    requires java.sql;
}
```

or supplied by the `--add-modules` command-line argument at runtime:

```bash
java --add-modules java.sql --module-path libs --module mymodule/mycompany.App
```
