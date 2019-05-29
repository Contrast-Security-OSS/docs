<!--
title: "Download the Java Agent from Maven Central"
description: "Downloading the Java agent from Maven Central"
tags: "installation Java agent download maven"
-->

Beginning with Java agent version 3.6.3.8220, Contrast releases each version of its Java agent to Maven Central using group ID `com.contrastsecurity` and artifact ID `contrast-agent`. Go to [com.contrastsecurity:contrast-agent](https://search.maven.org/search?q=g:com.contrastsecurity%20AND%20a:contrast-agent&core=gav) to see the releases on Maven Central.

Although the *jar* file you can [download from the Contrast UI](installation-javastandard.html#contrast-ui) is preconfigured with connection parameters, you must provide Contrast connection parameters using the agent [configuration properties](installation-javaconfig.html) when using the *contrast-agent.jar* from Maven Central.

To learn how to download the Contrast agent from Maven Central, use the following guides:

* [Add the Agent to a Maven Project](installation-javaguides.html#maven)
* [Add the Agent to a Gradle Project with Docker](installation-javaguides.html#gradle)
* [Schedule Automatic Updates on Linux](installation-javaguides.html#cron)
