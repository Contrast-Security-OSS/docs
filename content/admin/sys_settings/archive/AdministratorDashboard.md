<!--
title: "The Administrator Dashboard"
description: "Explanation of SuperAdmin tools"
tags: "Admin settings EOP SuperAdmin System Messages Monitoring"
-->

The Stats dashboard is designed to help administrators get the most out of Enterprise-on-Premises (EOP) deployment through better understanding of scaling and performance issues, as well as to help troubleshoot user problems.

Go to the **Stats** page from the top navigation menu to view data on your Contrast application. At the top of the page, use the button to change the refresh rate of the charts and tables.

<!-- ### Agent Activity

The Agent Activity chart displays how much traffic is coming in to the TeamServer from Contrast Agents. This includes various types of traffic an agent may send such as App Updates, Traces, and Coverage information.

<a href="assets/images/KB4-c03_5.png" rel="lightbox" title="Agent Activity"><img class="thumbnail" src="assets/images/KB4-c03_5.png"/></a>

Administrators can use this chart to identify peak times, average traffic metrics and make determinations about scaling their TeamServer deployment. -->

## Queue Breakdown

The **Queue Breakdown** chart shows you how effectively the Contrast application is handling the agent traffic. If queues seem to be growing faster than Contrast can handle them, it's a good indication that you should scale up or out.

<a href="assets/images/KB4-c03_6.png" rel="lightbox" title="Queue Breakdown Chart"><img class="thumbnail" src="assets/images/KB4-c03_6.png"/></a>

While extremely uncommon, it's possible that corrupted data could make it into one of the Contrast queues, and cause the queue to freeze and stop processing. If you believe a problem has occurred and that clearing could resolve it, or if instructed to do so by a Contrast Support Agent, click the **Clear Queues** button. 

## Logged In Users

The **Logged In Users** chart displays all users who are currently logged in to either the user or administrator UI. Click on the **Show Details** icon to see additional information about each user's session.

## Stats

The Stats section shows compiled information about the JVM and the system on which Contrast is running. The data is separated into **Server**, **Memory** and **Memory Pool** tables.

<a href="assets/images/KB4-c03_8.png" rel="lightbox" title="Server &amp; Memory Statistics Bars"><img class="thumbnail" src="assets/images/KB4-c03_8.png"/></a>
