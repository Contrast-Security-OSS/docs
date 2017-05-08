<!--
title: "Server Settings"
description: "Overview of server settings"
tags: "user server settings"
-->

Server Settings allows you to configure how your server functions. You can modify these configurations directly inline on the main Servers page or from the Server Settings dialog triggered from any single server. 

<a href="assets/images/Individual_Server_Settings.png" rel="lightbox" title="Server Settings"><img class="thumbnail" src="assets/images/Individual_Server_Settings.png"/></a>

## The Basics
You can rename your server anything you'd like as well as designate which environment a server will be running on. Feel free to override the server log file path too.

## Log Level
The log level field allows you to control which events are processed by server logging, and can help you more effectively capture events. We generally recommend that you run in **Error** mode unless a problem occurs and you're asked to collect more metrics by support.

Contrast's logs follow the general [Log4J standard](https://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/Level.html), so we honor their level designations as much as possible. Contrast offers the following log levels:

* **Error:** Designates error events that might still allow the application to continue running.
* **Warn:** Designates potentially harmful situations.
* **Info:** Designates informational messages that highlight the progress of the application at coarse-grained level.
* **Debug:** Designates fine-grained informational events that are most useful to debug an application.
* **Trace:** Designates finer-grained informational events than the DEBUG.

## Assessment Options
Assessment provides detailed information on vulnerabilities discovered by Contrast so that you may track, share and receive remediation guidance. Turning Assessment on allows you to enable sampling and designate how stacktraces are captured. Sampling allows Contrast to selectively analyze requests in order to avoid repeat analysis and improve server performance. Capturing stacktraces allows the server to collect data about the current state, including the lines of code being executed. Turning this off results in less performance on the application(s); however, you'll have less clarity on where underlying security issues are occurring.

### Sampling
Sampling is a mode of operation in Contrast that greatly reduces the runtime performance penalty of the security analysis. It reduces the performance by eliminating redundant analysis on the same URLs over and over. The idea is that once a URL has been properly *sampled*, you can stop monitoring during requests for that URL.

You can enable sampling while downloading an engine in the **Download the Engine** step of the installation wizard. To do this, perform the following steps:

* Select **I want to configure a proxy or customize my settings**
* Select the **Sampling** tab and check the **Use Sampling** checkbox

At this point, you can input **Baseline**, **Frequency** and **Window** values.

#### Setting sampling values
The default values provided will help a lot, but you may want to configure these values more precisely.

* **Baseline:** This is how many times a URL needs to be analyzed before it is considered *sampled*. Once a URL has been hit this number of times, Contrast will be *turned off* during future requests for that URL, which will allow them to be processed a lot faster. 
* **Frequency:** After the **Baseline** samples of a URL have been taken, only every **N**th request will be analyzed fully. Frequency is that **N** value.
* **Window:** After this many seconds passes, the *sampling window* will be reset and the **Baseline** samples will be drawn again.

#### Enabling sampling via system properties (Java agent)
You can also enable sampling by passing in the ```-Dcontrast.sampling``` JVM System property. Passing an empty system property will enable sampling with a:

>**Frequency** of 5
>**Baseline** of 5
>**Window** of 180 

Alternatively, you can use ```-Dcontrast.sampling``` = X, Y, Z where: 

>X = **Baseline**
>Y = **Frequency** 
>Z = **Window**

## Protection Options
Protection provides monitoring of your servers and applications - identifying and blocking attacks in real time. Turning Protection on gives you the option to bot block, which allows Contrast to use simple signaturing to block traffic from scrapers, attack tools and other unwanted automation.

You can also output events to syslog for one or multiple servers. Read our article on [Output to Syslog](user_servers.html#syslog) to learn more about enabling this feature.

>**Note:** Turning Protection ON by default requires licenses automatically be applied to servers.
