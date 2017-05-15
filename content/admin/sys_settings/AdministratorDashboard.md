<!--
title: "The Administrator's Dashboard"
description: "Explanation of Administrator tools"
tags: "Admin settings EOP SuperAdmin System Messages Monitoring"
-->

In addition to overall visibility into TeamServer, there are some specific tools designed to aid administrators in understanding scaling and performance issues, as well as to help troubleshoot user problems and get the most out of Enterprise Deployment.

## Charts And Metrics
Administrators have access to a **Stats** tab in the top navigation menu, which includes various charts and tables displaying valuable information about what is going on with the TeamServer application. At the top of the page, you can choose the refresh rate of these charts and tables.

<a href="assets/images/KB4-c03_4.png" rel="lightbox" title="Update Frequency Dropdown"><img class="thumbnail" src="assets/images/KB4-c03_4.png"/></a>

### Agent Activity
The Agent Activity chart displays how much traffic is coming in to the TeamServer from Contrast Agents. This includes various types of traffic an agent may send such as App Updates, Traces, and Coverage information.

<a href="assets/images/KB4-c03_5.png" rel="lightbox" title="Agent Activity"><img class="thumbnail" src="assets/images/KB4-c03_5.png"/></a>

Administrators can use this chart to identify peak times, average traffic metrics and make determinations about scaling their TeamServer deployment.

### Queue Breakdown
The Queue Breakdown chart provides insight into how effectively the TeamServer is handling the aforementioned agent traffic. If queues seem to be growing out of control faster than the TeamServer can handle them, it is a good indication that scaling up or out is necessary.

<a href="assets/images/KB4-c03_6.png" rel="lightbox" title="Queue Breakdown Chart"><img class="thumbnail" src="assets/images/KB4-c03_6.png"/></a>

This view gives you the option to clear the queues if you believe a problem has occurred and that clearing could resolve it (or if instructed to do so by a Contrast Support Agent). While extremely uncommon, it is possible that if corrupted data makes it into one of the Contrast queues, it could freeze the queue and stop processing.

### Logged In Users
This chart displays all users who are currently logged in to either the User or Administrator interface. Clicking on the **Show Details** icon on the right will display a modal with additional information about the session.


### Stats
The stats component shows various bits of information about the JVM and the system that TeamServer is running on.  It is broken down into Server, Memory and Memory Pool stats.

<a href="assets/images/KB4-c03_8.png" rel="lightbox" title="Server &amp; Memory Statistics Bars"><img class="thumbnail" src="assets/images/KB4-c03_8.png"/></a>
