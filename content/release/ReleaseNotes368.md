<!--
title: "Contrast 3.6.8 - September 2019"
description: "Contrast 3.6.8 September 2019"
tags: "3.6.8 September Release Notes"
-->

## Bug Fixes

* When impersonating an admin-level user in multiple organizations, the UI showed dashboard information and agent connection details for the admin's default organization.
* Filters didn't load correctly for the **Servers** grid.
* The form to configure output to of Protect events to syslog didn't accept some IP address formats.

## New and Improved Features

* Take a look at the application [flow map](user-apps.html#flowmap) to see where data from your application connects it to back-end systems and other applications in your organization. Every time you exercise your application, the Contrast agent reports information to the Contrast UI about new back-end systems and applications - no extra configuration required. To see the data map, go to your application's new **Flow Map** tab. 

* Use [sensitive data masking](admin-policymgmt.html#sensitive-data)...

* Use Contrast's new [PagerDuty integration](admin-orgintegrations.html#pagerduty) to receive attack notifications outside of the UI. Each notification automatically provides details on the attack, including the application, server and source IP involved. Go to the **user menu > Organization Settings > Integrations tab** to connect your PagerDuty account to your Contrast organization.


## Agent Updates

### Java summary


### .NET agent summaries

The .NET team improved accuracy of Assess SQL-Injection against EF-Core, the Protect XSS rule, and handling of odd URLs when deciding whether or not to analyze events during servicing of a request. We also fixed several bugs that could result in warnings in agent log files.

#### .NET Framework 

For the .NET Framework agent, the team implemented beta support for a Protect Cross-Site Request Forgery rule, and extended the Protect Unsafe File Upload rule to handle file uploads under Web API applications. We also fixed the following bugs: 

* A bug where the agent could cause an application to error when the application attempted to access web.config
* A bug where the agent could cause a process crash during process shutdown when chained with a specific APM profiler
* A bug where the upgrade process could modify the agent configuration file, if the file had been edited before install but not modified since
 
#### .NET Core

For the .NET Core agent, the team implemented the Protect Unsafe File Upload rule.

### Node.js summary 

The Node team released Beta support for the Kraken.js web framework. We updated our internal logging to standardize reporting at non-DEBUG levels. We closed a defect where an application without a valid license in Protect mode would fail to start. An unlicensed application in Protect mode will now start with a log indicating that Protect mode is disabled due to a lack of licenses. The team resolved an issue where the Unsafe File Upload rule in the Hapi 17 framework wouldn't have the correct HTTP request context. Finally, we updated our internal test suite to include the Ubuntu Alpine image.

### Ruby summary 

The Ruby team updated the agent to use Contrast Service for input analysis of attack vectors. This update provides more consistent rule implementation for Protect rules as well as REP support during input analysis, while also providing more performance and requiring fewer resources on the instrumented application. We also continue to implement performance improvements in the Ruby Assess agent by implementing more granular marking of rewritten Ruby modules and preventing multiple attempts at rewriting a file. The agent now also limits the context where a propagation node needs to be copied. 

### Python summary

The Python team continues to work towards the Beta release of the Python Assess agent. In September, the Python team finalized support of the Pylons framework. The agent now has standard behavior of logging at non-DEBUG levels, and no longer reports deprecation warnings due to a escaped regular expression pattern. Finally, the python agent now supports the Contrast Service executable in read-only environments.  

