<!--
title: "Server Defaults"
description: "Overview of server default settings"
tags: "Admin servers defaults organization settings sampling"
-->

Server Settings provide default configurations to be applied to new servers (agents) being brought on board. Organization administrators can customize these configurations and set defaults specifically to each environment. Go to the **User menu > Organization Settings > Servers tab** to get started.

<a href="assets/images/Server_Settings.png" rel="lightbox" title="Server Settings"><img class="thumbnail" src="assets/images/Server_Settings.png"/></a>

>**Note:** Administrators are emailed each time a server is licensed. As servers go up and down frequently, you may want to setup an email filter for any unwanted traffic. Contrast is working on making this configurable in the future.

## Log Level
The Log Level field allows you to control which events are processed by server logging, and can help you more effectively capture events. We generally recommend that you run in **Error** mode unless a problem occurs and you're asked to collect more metrics by support.

Contrast's logs follow the general [Log4J standard](https://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/Level.html), so we honor their level designations as much as possible. Contrast offers the following log levels:

* **Error:** Designates error events that might still allow the application to continue running.
* **Warn:** Designates potentially harmful situations.
* **Info:** Designates informational messages that highlight the progress of the application at coarse-grained level.
* **Debug:** Designates fine-grained informational events that are most useful to debug an application.
* **Trace:** Designates finer-grained informational events than the DEBUG.

## Automatic Server Cleanup
Automatic server cleanup enables a Contrast background task to run every five minutes to check if there is an organization with cleanup policies configured. For each organization with cleanup policies, Contrast checks if there are one or more servers with no activity received within the timeframe configured in the policy. Servers with no activity are disabled automatically and are no longer visible in the Servers grid. Contrast maintains information on vulnerabilities and attacks related to these servers, even after they're disabled. This feature is available for Java and .Net servers only.

The General section of the Servers page includes a checkbox to **Enable automatic server cleanup**. After selecting the box, default values are loaded into the fields as shown.

<a href="assets/images/Server_settings_automatic_cleanup.png" rel="lightbox" title="Automatic Server Cleanup"><img class="thumbnail" src="assets/images/Server_settings_automatic_cleanup.png"/></a>

## Assessment Options
Assessment provides detailed information on vulnerabilities discovered by Contrast so that you may track, share and receive remediation guidance. Turning Assessment on allows you to enable sampling and designate how stacktraces are captured. Sampling allows Contrast to selectively analyze requests in order to avoid repeat analysis and improve server performance. Capturing stacktraces allows the server to collect data about the current state, including the lines of code being executed. Turning this off results in less performance on the application(s); however, developers have less clarity on where underlying security issues are occurring.

### Sampling
Sampling is a mode of operation in Contrast that greatly reduces the runtime performance penalty of the security analysis. It reduces the performance by eliminating redundant analysis on the same URLs over and over. The idea is that once a URL has been properly *sampled*, you can stop monitoring during requests for that URL.

You can enable sampling while downloading an engine in the **Download the Engine** step of the installation wizard. To do this, perform the following steps:

1. Select **I want to configure a proxy or customize my settings**.
2. Select the **Sampling** tab and check the **Use Sampling** checkbox.
3. Input **Baseline**, **Frequency** and **Window** values.

#### Setting sampling values
Contrast provides default values, but you may want to configure these values more precisely.

* **Baseline:** The number of times a URL needs to be analyzed before it is considered *sampled*. Once a URL has been hit the given number of times, Contrast is *turned off* during future requests for that URL, which allows them to be processed a lot faster. 
* **Frequency:** After the **Baseline** samples of a URL are taken, only every **N**th request is analyzed fully. Frequency is the **N** value.
* **Window:** After this number of seconds passes, the *sampling window* is reset and the **Baseline** samples are drawn again.

#### Enabling sampling via system properties
Java agent customers can also enable sampling by passing in the ```-Dcontrast.sampling``` JVM System property. Passing an empty system property enables sampling with a:

* **Frequency** of 5
* **Baseline** of 5
* **Window** of 180 

Alternatively, you can use ```-Dcontrast.sampling``` = X, Y, Z where: 

* X = **Baseline**
* Y = **Frequency** 
* Z = **Window**

## Protection Options
Protection provides monitoring of your servers and applications - identifying and blocking attacks in real time. Turning Protection on gives you the option to bot block, which allows Contrast to use simple signaturing to block traffic from scrapers, attack tools and other unwanted automation.

You can also output events to Syslog for one or multiple servers. Read the article on [Output to Syslog](user-servers.html#syslog) to learn more about enabling this feature.

>**Note:** Turning Protection **on** by default requires licenses automatically be applied to servers.
