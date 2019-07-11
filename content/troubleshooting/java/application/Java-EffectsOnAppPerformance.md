<!--
title: "How Does The Java Agent Affect App Performance?"
description: "Tips to improve app performance with the Java agent"
tags: "troubleshoot java agent performance latency startup"
-->

Effects on Application Performance

## Request Processing Time

It's more important to think about how Contrast affects the round-trip time. Contrast only affects the CPU processing time of your application. Round-trip times for static resources don't get measurably worse in most cases. In many applications, a significant amount of time is spent waiting on databases and accessing remote resources. In requests where the total round-trip time is dominated by database or WebService calls, Contrast's effect is less noticeable.

## Performance Tuning for Assess

Here are some steps you can take to tune performance for Assess:

Ensure that the server meets the recommended system requirements and the server has enough free memory before the .NET agent is installed. (Ideally, applications should use less than half of the memory available when the Contrast .NET agent isn't installed.)
Run Contrast in Sampling mode, and change sampling frequency to be less frequent.
Change the stack trace configuration of Contrast to "Limited" or "Minimal".
Exclude some applications from instrumentation and analysis using Application Pool Filtering.
Run Contrast during nightly integration tests.
Run Contrast in an alternate environment (QA system or DEV environment).
Run Contrast on a single node in a load balanced environment.
While the options above should provide the biggest boost to performance, you can try the following steps to tune performance further.

Check that the agent's logging level is set to "Warn" or "Error".
Disable analysis that requires capturing the HTTP response through policy.

## Memory

Contrast also requires some memory to operate. If you're running close to your memory limits, using Contrast might put you over the limit. To account for Contrast, add the following memory:

1. Add 32MB of PermGen space in HotSpot JVM that use PermGen
2. Add another 128MB to the maximum heap size

Our minimum requirements for memory are 1.8x maximum heap used during normal application usage. Most of the time, the above steps are more than enough.

## More Information

* [Sampling](admin-orgsettings.html#server)
* [Java Agent System Properties](installation-javaconfig.html#system)
