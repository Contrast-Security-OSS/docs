<!--
title: "Server Settings"
description: "Overview of server settings"
tags: "user server settings"
-->

Server settings allow you to configure how your servers function in each environment. You can modify these configurations in the servers grid, or select Server Settings in the dropdown menu to work in the dialog. 

<a href="assets/images/Individual_Server_Settings.png" rel="lightbox" title="Server Settings dialog"><img class="thumbnail" src="assets/images/Individual_Server_Settings.png"/></a>

## The Basics

You can rename your server anything you like, and designate the environment in which a server will be running. Feel free to override the server log file path, too.

## Log Level

The Log Level field allows you to control which events are processed by server logging, and can help you more effectively capture events. Contrast generally recommends that you run in **Error** mode, unless a problem occurs and you're asked to collect more metrics by support.

Contrast's logs follow the general [Log4J standard](https://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/Level.html) and honor their level designations as much as possible. Contrast offers the following log levels:

* **Error:** Designates error events that might still allow the application to continue running.
* **Warn:** Designates potentially harmful situations.
* **Info:** Designates informational messages that highlight the progress of the application at coarse-grained level.
* **Debug:** Designates fine-grained informational events that are most useful to debug an application.
* **Trace:** Designates finer-grained informational events than the DEBUG.

## Assess Options

Assess provides detailed information on vulnerabilities discovered by Contrast so that you can track, share and receive remediation guidance. Turning Assess on allows you to enable sampling and designate how stacktraces are captured. Sampling allows Contrast to selectively analyze requests in order to avoid repeat analysis and improve server performance. Capturing stacktraces allows the server to collect data about the current state, including the lines of code being executed. Turning off results in less performance on the application(s); however, you'll have less clarity on where underlying security issues are occurring.

### Sampling

Sampling is a mode of operation in Contrast that greatly reduces the runtime performance penalty of the security analysis by eliminating redundant analysis on the same URLs. Once a URL has been properly *sampled*, you can stop monitoring during requests for that URL.

You can enable sampling while downloading an engine in the **Download the Engine** step of the installation wizard. To do this, perform the following steps:

1. Select **I want to configure a proxy or customize my settings**.
2. Select the **Sampling** tab and check the **Use Sampling** checkbox.
3. Input **Baseline**, **Frequency** and **Window** values.

#### Set sampling values

Contrast provides helpful default values, but you may want to configure these values more precisely.

* **Baseline:** The number of times a URL needs to be analyzed before it is considered *sampled*. Once a URL is hit this number of times, Contrast is *turned off* during future requests for that URL, which allows them to be processed a lot faster. 
* **Frequency:** After the **Baseline** samples of a URL have been taken, only every *N*th request is analyzed fully. Frequency is the *N* value.
* **Window:** After the given number of seconds passes, the *sampling window* is reset and the **Baseline** samples are drawn again.

#### Enable sampling through system properties

Java clients can also enable sampling by passing in the ```-Dcontrast.sampling``` JVM System property. Passing an empty system property enables sampling with a:

* **Frequency** of 5
* **Baseline** of 5
* **Window** of 180 

Alternatively, you can use ```-Dcontrast.sampling``` = X, Y, Z where: 

* X = **Baseline**
* Y = **Frequency** 
* Z = **Window**

## Protect Options

Protect provides monitoring of your servers and applications - identifying and blocking attacks in real time. Turning Protect on gives you the option to bot block, which allows Contrast to use simple signaturing to block traffic from scrapers, attack tools and other unwanted automation. You can also [output events to Syslog](user-servers.html#syslog) for one or multiple servers.

>**Note:** Turning Protect on by default requires that Protect licenses are automatically applied to servers.
