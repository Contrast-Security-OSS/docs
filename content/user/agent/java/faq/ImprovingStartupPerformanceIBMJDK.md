<!--
title: "Improving Startup Performance With The IBM JDK"
description: "Instructions on improving startup performance using the IBM JDK"
-->

The time for an application to start up, referred to as **startup performance**, can be affected when Contrast is configured for assessment purposes. The startup is a crucial time for the agent as the main operation involves analyzing libraries for reporting purposes. Many applications are affected by **20% to 30%** as part of the startup cost for security analysis. Some applications can be affected by **2x to 3x** depending on the number of libraries loaded and the configuration of the **Permanent Generation** space.

Web applications leveraging the IBM JDK will often experience slower-than-expected startup times. A startup option is available for the JDK to streamline the performance of startup. IBM released a JDK option ```-Xquickstart```, which is disabled by default. Customers leveraging the IBM JDK can enable this option in their startup script and/or any location in which JVM parameters are managed (often in the WebSphere performance console). This particular JVM option causes the **Just In Time (JIT)** compiler to run with a subset of optimizations.

[IBM ```-Xquickstart``` Overview](http://www-01.ibm.com/support/knowledgecenter/SSYKE2_7.0.0/com.ibm.java.win.70.doc/diag/appendixes/cmdline/xquickstart.html?lang=en)

>*"The effect is faster compilation times that improve startup time, but longer-running applications might run slower. When the AOT compiler is active (both shared classes and AOT compilation enabled), ```-Xquickstart``` causes all methods to be AOT compiled. The AOT compilation improves the startup time of subsequent runs, but might reduce performance for longer-running applications. ```-Xquickstart``` can degrade performance if it is used with long-running applications that contain hot methods. The implementation of ```-Xquickstart``` is subject to change in future releases. By default, ```-Xquickstart``` is disabled. Another way to specify a behavior identical to ```-Xquickstart``` is to use the ```-client``` option. These two options can be used interchangeably on the command line."*

>**Note:** Customers should test their application without Contrast enabled to ensure this option does not cause any functional instability with their application. This option has been tested by Contrast, but as stated by IBM, this option is subject to change in future releases.
