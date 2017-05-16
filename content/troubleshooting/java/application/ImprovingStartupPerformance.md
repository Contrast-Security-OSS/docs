<!--
title: "Improving Startup Performance"
description: "Instructions on improving startup performance"
tags: "troubleshoot java agent performance IBM JDK startup quickstart skip cache"
-->

The time for an application to start up, referred to as **startup performance**, can be affected when Contrast is configured for assessment purposes. The startup is a crucial time for the agent, as the main operation involves analyzing libraries for reporting purposes. Many applications are affected by **20% to 30%** as part of the startup cost for security analysis. Some applications can be affected by **2x to 3x** depending on the number of libraries loaded and the configuration of the **Permanent Generation** space.

## Skip Deep Inspection

The Contrast Assess product deeply inspects every piece of bytecode loaded in the JVM. This extra analysis ensures that every possible place where security-relevant functionality is occurring gets a sensor loaded. In many environments, this is not necessary. Accordingly, this deep inspection will eventually be off by default.

To enable skipping these deep inspections, add the following JVM properties:

```
-Dcontrast.inspect.allclasses=false -Dcontrast.process.codesources=false
```
 
## Run It Again
The first time Contrast runs on a new environment, or with a new version of the agent or JVM, it will perform extra code analysis as it gets loaded. The results of this analysis is cached, so the next run will have a much faster startup (50-60%).

In PaaS or Docker environments where applications are run in essentially a "factory new" setting, it's likely that there is no "previous run" from which the cached analysis can be reused. This means that every run will have the maximum startup penalty. We will be providing functionality to accommodate these environments in the future.

## Using -Xquickstart in the IBM JDK
Web applications leveraging the IBM JDK will experience slower-than-expected startup times. A startup option is available for the JDK to streamline the performance of startup. IBM released a JDK option ```-Xquickstart```, which is disabled by default. Customers leveraging the IBM JDK can enable this option in their startup script and/or any location in which JVM parameters are managed (often in the WebSphere performance console). This particular JVM option causes the **Just In Time (JIT)** compiler to run with a subset of optimizations.

[IBM ```-Xquickstart``` Overview](http://www-01.ibm.com/support/knowledgecenter/SSYKE2_7.0.0/com.ibm.java.win.70.doc/diag/appendixes/cmdline/xquickstart.html?lang=en)

>*"The effect is faster compilation times that improve startup time, but longer-running applications might run slower. When the AOT compiler is active (both shared classes and AOT compilation enabled), ```-Xquickstart``` causes all methods to be AOT compiled. The AOT compilation improves the startup time of subsequent runs, but might reduce performance for longer-running applications. ```-Xquickstart``` can degrade performance if it is used with long-running applications that contain hot methods. The implementation of ```-Xquickstart``` is subject to change in future releases. By default, ```-Xquickstart``` is disabled. Another way to specify a behavior identical to ```-Xquickstart``` is to use the ```-client``` option. These two options can be used interchangeably on the command line."*

<br>

>**Note:** Customers should test their application without Contrast enabled to ensure this option does not cause any functional instability with their application. This option has been tested by Contrast, but as stated by IBM, this option is subject to change in future releases.
