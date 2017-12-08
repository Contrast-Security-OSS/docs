<!--
title: "A Particular Resource Returns 0 Bytes Under Contrast.NET"
description: "Troubleshooting guide for .NET agent issues"
tags: "troubleshoot zero bytes agent installation .Net"
-->

## Symptoms
* A particular resource (page, image, etc.) works normally when the Contrast.NET agent is not running and stops working once the agent is running
* When using browser developer tools or something similar to view network traffic, the resource returns **0 bytes** while the Contrast.NET agent is running

## How to Solve
Contrast.NET uses a filter within a ```System.Web.IHttpModule``` to gather HTTP response data. There is a known Microsoft bug in the .NET framework: ```HttpModules``` with filters can cause resources such as ***WebResource.axd*** to return **0 bytes** (which can result in 500 status responses for embedded resources such as images).

* Configure the .NET agent using the ```ResponseUrlWhitelistRegex``` settings to prevent Contrast from applying the ```HttpModules``` filter to the resource. See [Configuration](installation-netconfig.html) for more information.

**OR**
 
* Disable collection and analysis of HTTP response bodies by disabling full-content-analysis (```<full-content-analysis enabled="false">```) in ```%ProgramData%\Contrast.NET\customerPolicy.xml```. See [Custom Policy](installation-netpolicy.html#response) for more information.
