<!--
title: "How the Java Agent Affects App Performance"
description: "Tips to improve app performance with the Java agent"
tags: "troubleshoot java agent performance latency startup"
-->

While Contrast's analysis makes your application run a little more slowly, the benefits of the analysis results far outweigh the disruption caused by the brief delay.

## Startup Time

When you start your server with Contrast, you should see a few messages that Contrast is performing its JIT bytecode transformations to add security sensors to the JVM. This startup JIT period takes 8-12 seconds on a fast developer laptop and about 30-40 seconds on outdated, resource-starved, QA server hardware.

## Request Processing Time

It's important to recognize how Contrast affects time round-trip. In typical applications, Contrast adds around 2x round-trip time to a request that contains a lot of business logic with all the bells and whistles turned on. Round-trip times for static resources aren't noticeably affected for most users. During requests in which database or Web Service calls dominate the total round-trip time, Contrast's effect is even less noticeable.

## Memory

Contrast requires some memory to operate. To account for Contrast, add 32MB of PermGen space in HotSpot JVMs and then another 128MB to the maximum heap size.

## Methods to Improve Performance 

If better performance is crucial to your environment, consider the following options:

* Run Contrast in **sampling** mode to gain 33% performance boost.
* Run Contrast with **bootstrap performance enhancements** to gain 30% performance boost.
* Turn off **stack trace collection** to gain 30% performance boost and reduce memory footprint.
* Turn off **response scanning** to gain 5% performance boost and somewhat reduce memory footprint.
* Run Contrast during **nightly integration tests**.
* Turn off data flow rules by adding `-Dcontrast.propagators=false` to gain 50% performance boost.
* Run Contrast in an **alternate (QA system or DEV) environment**.
* Run Contrast on a **single node in a load-balanced environment**.

## More Information

* [Sampling](admin-orgsettings.html#server)

* [Add Bootstrap Speed Enhancements to the Java Agent](installation-javaconfig.html#bootstrap)

* [Java Agent System Properties](installation-javaconfig.html#system)

