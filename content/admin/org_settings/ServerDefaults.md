<!--
title: "Server Defaults"
description: "Overview of server default settings"
tags: "Admin servers defaults organization settings sampling"
-->

Server Settings provide default configurations to new servers (agents) being brought on board. Organization administrators can customize these configurations and set specific defaults for each environment. 

## How It Works

### Log levels
The Log Level field allows you to control which events are processed by server logging, and can help you more effectively capture events. Contrast generally recommends that you run in **Error** mode unless a problem occurs and you're asked to collect more metrics by support.

For more details on log levels, go to the article on [Server Settings](user-servers.html#settings).

### Automatic server cleanup
Automatic server cleanup enables a Contrast background task to run every five minutes to check if there is an organization with cleanup policies configured. For each organization with cleanup policies, Contrast checks if there are one or more servers with no activity received within the timeframe configured in the policy. Servers with no activity are disabled automatically and are no longer visible in the Servers grid. Contrast maintains information on vulnerabilities and attacks related to these servers, even after they're disabled. This feature is available for Java and .Net servers only.

### Assess options
Assess mode provides detailed information on vulnerabilities discovered by Contrast so that you may track, share and receive remediation guidance. Turning Assess on allows you to enable sampling and designate how stacktraces are captured. 

For more information on sampling and stacktraces, go to the [Server Settings](user-servers.html#settings) article.

### Protect options
Protect mode provides monitoring of your servers and applications - identifying and blocking attacks in real time. Turning Protect on gives you the option to bot block, which allows Contrast to use simple signaturing to block traffic from scrapers, attack tools and other unwanted automation. 

Protect mode also allows you to output events to Syslog for one or multiple servers. Contrast offers syslog message categories according to the [Syslog RFC 3164](https://www.ietf.org/rfc/rfc3164.txt) specification for severity. Read the article on [Output to Syslog](user-servers.html#syslog) to learn more about enabling this feature.

#### Automatic licensing 

Ensure that new servers receive full, immediate coverage from Contrast by automatically applying Protect licenses.

>**Note:** Administrators receive emails each time a server is licensed. As servers go up and down frequently, you may want to setup an email filter for any unwanted traffic. Contrast is working on making this configurable in the future.

## Set Up Defaults

Go to the **User menu > Organization Settings > Servers tab** to start setting up defaults.

<a href="assets/images/Server-defaults-tab.png" rel="lightbox" title="Set up server defaults"><img class="thumbnail" src="assets/images/Server-defaults-tab.png"/></a>

### Environment 

* Use the dropdown menu to choose the environment in which you want to apply the default. Check the box if you want to set this as the **default environment** for servers.  

* Use the dropdown menu to choose the **Log Level**. The default selection is **Error**. 

* Check the box to **Enable automatic server cleanup**. 
	* Use the multiselect field to choose the **Environment** in which to apply automatic cleanup. The default is **All environments**.
	* Use the number control and dropdown fields to set the amount of time that Contrast must wait to disable servers **After Being Offline**. The defaults are **12** and **Hour(s)**. 

<a href="assets/images/Server_settings_automatic_cleanup.png" rel="lightbox" title="Set up automatic server cleanup"><img class="thumbnail" src="assets/images/Server_settings_automatic_cleanup.png"/></a>

### Assess

* Use the dropdown menu to choose which stacktraces Contrast captures. The default selection is **ALL**. 

* Check the box to **Enable sampling for higher performance**. Choose the numerical values for the following fields: 
	* **Baseline**: The number of times that Contrast analyzes URLs to complete sampling. The default setting is **5**. 
	* **Frequency**: The number of times that Contrast analyzes URLs after the Baseline is achieved. The default setting is **10**. 
	* **Window**: The number of seconds that Contrast retains samples before reverting to the Baseline. The default setting is **180**. 

<a href="assets/images/Server-defaults-sampling.png" rel="lightbox" title="Enable sampling"><img class="thumbnail" src="assets/images/Server-defaults-sampling.png"/></a>

### Protect

* Check the box to **Enable bot blocking**. 

* Check the box to **Enable output of Protect events to Syslog**. 
	* Enter the **IP Address** and **Port** in the given fields. Use the dropdown menu to chose the **Facility**. 
	* Click on the event severity badges, and use the dropdown menu to choose a message **Severity** level for each one. The defaults are:
	 * **1 - Alert** for Exploited
	 * **4 - Warning** for Blocked
	 * **5 - Notice** for Probed 

<a href="assets/images/Server-default-syslog.png" rel="lightbox" title="Configure output to Syslog"><img class="thumbnail" src="assets/images/Server-default-syslog.png"/></a>

* Check the box to **Automatically apply Protect licenses to new servers**.

>**Note:** Turning Protect **on** by default requires that Protect licenses are automatically applied to servers.

