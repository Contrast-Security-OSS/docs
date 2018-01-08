<!--
title: "How Does The .NET Agent Affect Application Performance?"
description: "Tips on improving application performance with the .NET agent"
tags: "troubleshoot configuration performance application impact agent .NET"
-->

As you might expect, Contrast's analysis makes your application run a little slower. But, the time difference is usually minimal, and the results are definitely worth it.

## Request Processing Time

It's more important to think about how Contrast affects the round-trip time. In typical applications, Contrast doubles the round-trip time for a request that contains a lot of business logic. Contrast only affects the CPU processing time of your application. Round-trip times for static resources don't get measurably worse in most cases. In many applications, a significant amount of time is spent waiting on databases and accessing remote resources. In requests where the total round-trip time is dominated by database or WebService calls, Contrast's effect is less noticeable.

## Performance Tuning for Assess

If performance is crucial to your environment, consider the following options.

* Ensure that the server meets the recommended [system requirements](installation-netinstall.html) and the server has enough free memory *before* the .NET agent is installed. (Ideally, applications should use less than half of the memory available when the Contrast .NET agent isn't installed.) 
* Run Contrast in [Sampling](admin-orgsettings.html#org-server) mode, and change sampling frequency to be less frequent.
* Change the stack trace [configuration](installation-netconfig.html) of Contrast to "Limited" or "Minimal".
* Exclude some applications from instrumentation and analysis using [Application Pool Filtering](installation-netusage.html#iis).
* Run Contrast during nightly integration tests.
* Run Contrast in an alternate environment (QA system or DEV environment).
* Run Contrast on a single node in a load balanced environment.

While the options above should provide the biggest boost to performance, you can try the following steps to tune performance further.

* Check that the agent's [logging level](user-servers.html#settings) is set to "Warn" or "Error". 
* Disable analysis that requires capturing the HTTP response through [policy](installation-netpolicy.html#response).
