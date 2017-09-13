<!--
title: "Improving Startup Performance"
description: "Instructions on improving startup performance"
tags: "troubleshoot java agent performance IBM JDK startup quickstart skip cache"
-->

The time for an application to start up, called **startup performance**, can be affected when Contrast is configured for assessment purposes. The startup is a crucial time for the agent, as the main operation involves analyzing libraries for reporting purposes. Many applications are affected by **20 to 30 percent** as part of the startup cost for security analysis. Some applications can be affected by **two to three times** depending on the number of libraries loaded and the configuration of the **Permanent Generation** space.

## Skip Deep Inspection

The Contrast Assess product deeply inspects every piece of bytecode loaded in the JVM to ensures that it loads a sensor everywhere security-relevant functionality occurs. However, this isn't necessary in many environments, and deep inspection is eventually turned off by default.

To skip deep inspections, add the following JVM properties:

```
-Dcontrast.inspect.allclasses=false -Dcontrast.process.codesources=false
```
 
## Run It Again

The first time Contrast runs on a new environment, or with a new version of the agent or JVM, it performs extra code analysis as it's  loaded. The results of this analysis is cached, and the next run has a much (50-60 percent) faster startup.

In PaaS or Docker environments where applications are run in a nearly factory new setting, there's probably not a previous run from which the cached analysis can be reused. This means that every run will have the maximum startup penalty. We will be providing functionality to accommodate these environments in the future.

## Startup Options

Web applications leveraging the IBM JDK experience slower-than-expected startup times. A startup option is available for the JDK to streamline the performance of startup. IBM released a JDK option `-Xquickstart`, which is disabled by default. Customers leveraging the IBM JDK can enable this option in their startup script and/or any location in which JVM parameters are managed (often in the WebSphere performance console). This particular JVM option causes the **Just In Time (JIT)** compiler to run with a subset of optimizations.

For more information about how the `-Xquickstart` option works, read the [IBM `-Xquickstart` Overview](http://www-01.ibm.com/support/knowledgecenter/SSYKE2_7.0.0/com.ibm.java.win.70.doc/diag/appendixes/cmdline/xquickstart.html?lang=en).

>**Note:** Customers should test their application without Contrast enabled to verify that the `-Xquickstart` option doesn't cause any functional instability with their application. This option has been tested by Contrast, but this option is subject to change in future releases, as stated by IBM.


