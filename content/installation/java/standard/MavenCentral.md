<!--
title: "Download the Java Agent from Maven Central"
description: "Downloading the Java agent from Maven Central"
tags: "installation Java agent download"
-->

From Java agent version 3.6.3.8220 onward, Contrast releases each version of its Java agent to Maven Central using group ID `com.contrastsecurity` and artifact ID `contrast-agent`. Checkout [com.contrastsecurity:contrast-agent](https://search.maven.org/search?q=g:com.contrastsecurity%20AND%20a:contrast-agent&core=gav) releases on Maven Central.

Unlike the *jar* file you can download from the Contrast UI, the `contrast-agent` *jar* from Maven Central isn't preconfigured with connection parameters; instead, you must provide Contrast connection parameters using [Configuration](installation-javaconfig.html).

See our guides for more on downloading the Contrast agent from Maven Central:

* [Add the Agent to a Maven Project](installation-javaguides.html#maven)
* [Add the Agent to a Gradle Project with Docker](installation-javaguides.html#gradle)
* [Schedule Automatic Updates on Linux](installation-javaguides.html#cron)
