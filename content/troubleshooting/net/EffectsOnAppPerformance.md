<!--
title: "How Does The .NET Agent Affect App Performance?"
description: "Tips on improving application performance with the .NET agent"
tags: "troubleshoot configuration performance impact agent .Net"
-->

As you might expect, Contrast's analysis *does* make your app run a little slower. The good news is that it's generally not enough for anyone to complain about, and the results are definitely worth it.

### Request Processing Time

It's probably more important to think about how Contrast affects the round-trip time.  In typical applications,  Contrast doubles the round-trip time for a request that contains a lot of business logic.  Contrast will only affect the CPU processing time of your application.  Round trip times for static resources typically don't get measurably worse.  In many applications much time is spent waiting on databases and accessing remote resources. In requests where the total round-trip time is dominated by database or WebService calls, Contrast's effect will be less noticeable.

### Performance Tuning for Assess

If performance is really important to your environment, consider the following options:

* Ensure that the server meets the recommended [system requirements](installation-netinstall.html) and the server has enough free memory *before* the .NET agent is installed (ideally, applications should ideally use less than half of the available memory when the Contrast .NET Agent is not installed.) 
* Run Contrast in [Sampling](admin-orgsettings.html#org-server) mode and change sampling frequency to be less frequent.
* Change the stack trace [configuration](installation-netconfig.html) of Contrast to **Limited** or **Minimal**.
* Exclude some applications from instrumentation and analysis using [Application Pool Filtering](installation-netusage.html#iis).
* Run Contrast during nightly integration tests.
* Run Contrast in an alternate environment (QA system or DEV environment.)
* Run Contrast on a single node in a load balanced environment.
* The above options should provide the biggest boost to performance but if you still need to tune performance further you can try the following:
  * Check that the agent's [logging level](user-servers.html#settings) is set to Warn or Error. 
  * Disable analysis that requires capturing the HTTP response via [policy](installation-netpolicy.html#response).
