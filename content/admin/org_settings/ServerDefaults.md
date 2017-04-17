<!--
title: "Server Defaults"
description: "Overview of server default settings"
tags: "Admin servers defaults organization settings sampling"
-->

Server Settings provide default configurations to be applied to new servers (agents) being brought on board. You can customize these configurations specifically to each environment. 

<a href="assets/images/Server_Settings.png" rel="lightbox" title="Server Settings"><img class="thumbnail" src="assets/images/Server_Settings.png"/></a>

> **Note:** Administrators are emailed each time a server is licensed. As servers go up and down frequently, you may want to setup an email filter for any unwanted traffic. Contrast is working on making this configurable in the future.

## What Is Sampling?

Sampling is a mode of operation in Contrast that greatly reduces the runtime performance penalty of the security analysis. It reduces the performance by eliminating redundant analysis on the same URLs over and over. The idea is that once a URL has been properly *sampled*, you can stop monitoring during requests for that URL.

You can enable sampling while downloading an engine in the **Download the Engine** step of the installation wizard. To do this, perform the following steps:

* Select **I want to configure a proxy or customize my settings**
* Select the **Sampling** tab and check the **Use Sampling** checkbox

At this point, you can input **Baseline**, **Frequency** and **Window** values.


## Setting Sampling Values

The default values for **Baseline**, **Frequency** and **Window** will help a lot, but you may want to configure these values more precisely.

**Baseline:** This is how many times a URL needs to be analyzed before it is considered *sampled*. Once a URL has been hit this number of times, Contrast will be *turned off* during future requests for that URL, which will allow them to be processed a lot faster. 

**Frequency:** After the **Baseline** samples of a URL have been taken, only every **N**th request will be analyzed fully. Frequency is that **N** value.

**Window:** After this many seconds passes, the *sampling window* will be reset and the **Baseline** samples will be drawn again.


## Enabling Sampling In Java Agent Via System Properties

You can also enable sampling by passing in the ```-Dcontrast.sampling``` JVM System property. Passing an empty system property will enable sampling with a:

>**Frequency** of 5
>**Baseline** of 5
>**Window** of 180 

Alternatively, you can use ```-Dcontrast.sampling``` = X, Y, Z where: 

>X = **Baseline**
>Y = **Frequency** 
>Z = **Window**