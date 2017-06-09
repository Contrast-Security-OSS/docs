<!--
title: "Server Defaults"
description: "Overview of server default settings"
tags: "Admin servers defaults organization settings sampling"
-->

Server Settings provide default configurations to be applied to new servers (agents) being brought on board. Organization administrators can customize these configurations and set defaults specifically to each environment. Go to the **User menu > Organization Settings > Servers tab** to get started.

<a href="assets/images/Server-settings.png" rel="lightbox" title="Server settings"><img class="thumbnail" src="assets/images/Server-settings.png"/></a>

>**Note:** Administrators are emailed each time a server is licensed. As servers go up and down frequently, you may want to setup an email filter for any unwanted traffic. Contrast is working on making this configurable in the future.

## Log Level
The Log Level field allows you to control which events are processed by server logging, and can help you more effectively capture events. Contrast generally recommends that you run in **Error** mode unless a problem occurs and you're asked to collect more metrics by support.

For more details on log levels, go to the [Server Settings](user-servers.html#settings) article.

## Automatic Server Cleanup
Automatic server cleanup enables a Contrast background task to run every five minutes to check if there is an organization with cleanup policies configured. For each organization with cleanup policies, Contrast checks if there are one or more servers with no activity received within the timeframe configured in the policy. Servers with no activity are disabled automatically and are no longer visible in the Servers grid. Contrast maintains information on vulnerabilities and attacks related to these servers, even after they're disabled. This feature is available for Java and .Net servers only.

The General section of the Servers page includes a checkbox to **Enable automatic server cleanup**. After selecting the box, default values are loaded into the fields as shown.

<a href="assets/images/Server_settings_automatic_cleanup.png" rel="lightbox" title="Automatic Server Cleanup"><img class="thumbnail" src="assets/images/Server_settings_automatic_cleanup.png"/></a>

## Assessment Options
Assessment provides detailed information on vulnerabilities discovered by Contrast so that you may track, share and receive remediation guidance. Turning Assessment on allows you to enable sampling and designate how stacktraces are captured. 

For more information on sampling and stacktraces, go to the [Server Settings](user-servers.html#settings) article.

## Protection Options
Protection provides monitoring of your servers and applications - identifying and blocking attacks in real time. Turning Protection on gives you the option to bot block, which allows Contrast to use simple signaturing to block traffic from scrapers, attack tools and other unwanted automation. 

You can also output events to Syslog for one or multiple servers. Read the article on [Output to Syslog](user-servers.html#syslog) to learn more about enabling this feature.

>**Note:** Turning Protection **on** by default requires that Protect licenses are automatically applied to servers.
