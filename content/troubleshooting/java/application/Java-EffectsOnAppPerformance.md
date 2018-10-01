<!--
title: "How Does The Java Agent Affect App Performance?"
description: "Tips to improve app performance with the Java agent"
tags: "troubleshoot java agent performance latency startup"
-->

As you might expect, Contrast's analysis does make your app run a little slower. The good news is it's generally not enough for anyone to complain about, and the results are definitely worth it.


## Startup Time

When you start your server with Contrast, you'll see a few messages that indicate that Contrast is performing its JIT bytecode transformations to add security sensors to the JVM. This startup JIT period will take 8-12 seconds on a fast developer laptop, and maybe 30-40 seconds on outdated, resource-starved QA server hardware.

## Request Processing Time

It's probably more important to think about how Contrast affects the round-trip time. In typical applications, Contrast adds around 2x round-trip time to a request that contains a lot of business logic with all the bells and whistles turned on. Round trip times for static resources typically don't get measurably worse. In requests where the total round-trip time is dominated by database or Web Service calls, Contrast's effect will be less noticeable.

If better performance is really important to your environment, consider the following options:

* Run Contrast in *sampling* mode (gain 33% performance boost)
* Turn off *response scanning* (gain 5% performance boost, and somewhat reduce memory footprint)
* Run Contrast during nightly integration tests
* Turn off data flow rules (add ```-Dcontrast.propagators=false```, gain 50% performance boost)
* Run Contrast in an alternate environment (QA system or DEV environment)
* Run Contrast on a single node in a load balanced environment

## Memory

Contrast also requires some memory to operate. If you're running close to your memory limits, using Contrast might put you over the limit. To account for Contrast, add the following memory:

1. Add 32MB of PermGen space in HotSpot JVM that use PermGen
2. Add another 128MB to the maximum heap size

Our minimum requirements for memory are 1.8x maximum heap used during normal application usage. Most of the time, the above steps are more than enough.

## More Information

* [Sampling](admin-orgsettings.html#server)
* [Java Agent System Properties](installation-javaconfig.html#system)
