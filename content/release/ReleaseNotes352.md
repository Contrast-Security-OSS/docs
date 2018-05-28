<!--
title: "Contrast 3.5.2 - May 2018"
description: "Contrast 3.5.2 May 2018"
tags: "3.5.2 May Release Notes"
-->

Contrast .NET agent support for Azure App Service...

## Fixes

* Sort attack events in the grid CONTRAST-22807
* Automatic Jira ticket creation works for child apps. CONTRAST-23355 
* Sort Assess Rules by severity in an application's Policy page, and see accurate results. CONTRAST-22538
* Navigate to affected applications from attack **Notes** page. CONTRAST-22808


## Improvements 

* Use the new version of the [Contrast Maven Plugin](tools-build.html#maven)! There’s no need to manually configure JVM arguments, and the plugin is now automatically integrated with TravisCI and CircleCI build numbers.

* Our new applications grid is in Beta! We’ve given you more direct access to filters while retaining them as you work, provided more insight to your vulnerabilities, and cleaned up the UI for more simplicity. Go to the **Applications** page to give it a try, and then let us know what you think!


## Agent Updates

### Java summary 

Our team fixed over-reporting of Expression Language Injection, and improved accuracy of SQL-Injection and XSS rules - all for Protect. We also added protection against CVE-2018-1273. 

Will now recognize several Assess sanitizers from Freemarker v2.3.2+, and improved performance of the agent's Assess analysis in scenarios when calling ToString on an object lead to multiple exceptions in that class’s implementation of ToString.

We improved reliability of agent initialization, library discovery, and the Java agent launcher downloading the Java agent from Contrast. 

### .NET summary 

Contrast now supports analysis of .NET applications hosted Azure App Service. See [Manual Installation](installation-netinstall.html#net-manual) and [Express Installation for Azure](installation-netinstall.html#net-express) for instructions on how to add the .NET agent to applications hosted by Azure App Service.

While we were working on that, we also:  

* Added a Protect rule for HTTP method tampering. 
* Fixed a bug where the agent’s instrumentation could modify the value of encoded XML under CLR2.
* Improved reliability of analysis of the HTTP response, especially under Classic Pipeline.
* Fixed a bug where Contrast could reject vulnerabilities from the .NET agent in limited scenarios.
* Improved reliability of agent initialization. 

Oh, and the agent will no longer falsely identify a weak hash algorithm in Microsoft reporting services.

### Node.js summary 


### Ruby summary 


### Python summary

