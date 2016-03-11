<!--
title: "The Administrator's Dashboard"
description: "The Administrator's Dashboard can be a little intimidating at first, especially for new Administrators. Understanding the components on this dashboard can aid administrators in understanding scaling and performance issues as well as helping to troubleshoot user problems and get the most out of your Enterprise Deployment."
tags: "EOP SuperAdmin System Messages Monitoring"
-->

## System Messages
As Contrast becomes an integral part of your development lifecycle, it may become necessary to let users know when things like scheduled downtime will occur or let them know that an update has been applied and Java 1.5 users should update their agents to the latest version. System Messages provides this functionality to Administrators. 

### Setting a new System Message
To set a new System Message access the Administrator's Dashboard and click the **Manage System Messages** button in the top left corner of the dashboard. 
This will bring up a dialog that will allow you to set a message that will be broadcast to all users (after login, or immediately if they are already logged in) until the message expires or is deleted.

When a user logs on and a system message has been set, they will immediately be presented with the message and must acknowledge it before they can continue.


### Deactivating System Messages
Occasionally, you may expect something to take hours and instead it takes only a few minutes. In those cases you may with to deactivate an active system message. To do so, access the Manage System Messages dialog and click the "Active Messages" tab. 

To delete a message, click the (  X  ) button next to the message you would like to remove.

## Charts and Metrics
The bulk of the Administrator's Dashboard is made up of various charts and tables that display valuable information about what is going on with the TeamServer application. In the top left, under the Manage System Messages button is a drop-down that will allow you to set the refresh rate of these charts and tables.

<a href="assets/images/KB4-c03_4.png" rel="lightbox" title="Update Frequency Dropdown"><img class="thumbnail" src="assets/images/KB4-c03_4.png"/></a>

### Agent Activity
The Agent Activity chart displays how much traffic is coming in to the TeamServer from Contrast Agents. This includes various types of traffic that an agent may send such as App Updates, Traces, and Coverage information.

<a href="assets/images/KB4-c03_5.png" rel="lightbox" title="Agent Activity"><img class="thumbnail" src="assets/images/KB4-c03_5.png"/></a>

Administrators can use this chart to identify peak times, average traffic metrics and make determinations about scaling their TeamServer deployment.

### Queue Breakdown
The Queue Breakdown chart breaks down all the traffic that Contrast Agents are sending to the TeamServer and provides insight into how effectively the TeamServer is handling that traffic. If queues seem to be growing out of control faster than the TeamServer can handle them it is a good indication that scaling up or out is necessary.

<a href="assets/images/KB4-c03_6.png" rel="lightbox" title="Queue Breakdown Chart"><img class="thumbnail" src="assets/images/KB4-c03_6.png"/></a>

This view also gives you the option to clear the queues if you believe a problem has occurred and clearing the queues could resolve this problem (or if instructed to do so by a Contrast Support Agent). While extremely uncommon it is possible that if corrupted data makes it into one of the Contrast queues, it could freeze the queue and stop processing.

### Logged in Users
The logged in users chart displays all users who are currently logged in to either the User's or Administrative interface. Clicking on details will show you additional information about the session.


### Stats
The stats component show various bits of information about the JVM and system that TeamServer is running on.

<a href="assets/images/KB4-c03_8.png" rel="lightbox" title="Server &amp; Memory Statistics Bars"><img class="thumbnail" src="assets/images/KB4-c03_8.png"/></a>
