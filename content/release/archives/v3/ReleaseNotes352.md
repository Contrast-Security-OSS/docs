<!--
title: "Contrast 3.5.2 - May 2018"
description: "Contrast 3.5.2 May 2018"
tags: "3.5.2 May Release Notes"
-->

With .NET agent support for Azure App Service, a new applications grid to try out, and the Beta release of the Ruby Assess agent on its way, Contrast just upgraded your summer plans. 

## Fixes

* Sort **attack events** in the grid to find just what you're looking for. 
* Use automatic Jira ticket creation for child **applications**.
* Sort Assess Rules by severity in an application's **Policy** page and get accurate results. 
* Navigate to affected applications from attack **Notes** page. 


## Improvements 

* Use the new version of the [Contrast Maven Plugin](tools-build.html#maven)! It's automatically integrated with TravisCI and CircleCI build numbers, and there’s no need to manually configure JVM arguments.

* With our new applications grid in Beta, we’ve given you more direct access to filters while retaining them as you work, provided more insight to your vulnerabilities, and cleaned up the UI for more simplicity. Go to the **Applications** page to give it a try, and then let us know what you think!


## Agent Updates

### Java summary 

The Java agent team fixed over-reporting of Expression Language Injection, and improved accuracy of SQL-Injection and XSS rules for Protect. We also added protection against CVE-2018-1273. We now recognize several Assess sanitizers from Freemarker v2.3.2+. We also improved performance of the agent's Assess analysis in scenarios when calling ToString on an object lead to multiple exceptions in that class’s implementation of ToString. We improved reliability of agent initialization, library discovery, and the Java agent launcher downloading the Java agent from Contrast. 

### .NET summary 

Contrast now supports analysis of .NET applications hosted Azure App Service. See [Manual Installation](installation-netinstall.html#net-manual) and [Express Installation for Azure](installation-netinstall.html#net-express) for instructions on how to add the .NET agent to applications hosted by Azure App Service. While .NET team was working on that, we also:  

* Added a Protect rule for HTTP method tampering. 
* Fixed a bug where the agent’s instrumentation could modify the value of encoded XML under CLR2.
* Improved reliability of analysis of the HTTP response, especially under Classic Pipeline.
* Fixed a bug where Contrast could reject vulnerabilities from the .NET agent in limited scenarios.
* Improved reliability of agent initialization. 

Oh, and the agent will no longer falsely identify a weak hash algorithm in Microsoft reporting services.

### Node.js summary 

The Node agent team resolved issues related to an incorrect value being read from the PostgreSQL sensor when emitting event data. Additional sanitation methods for mustache templates are now supported. We've investigated and closed a string literal to string object transformation issue, a related issue where tag ranges after string concatenation were not being resolved as an integer value, and ensured that a propagation for strings handles as edge case where the length of the tag range is 0. The inventory mode now supports library versions in additional non-standard formats. Finally, the agent now supports code using the spread operator in additional contexts.

### Ruby summary 

The Ruby agent team fixed a bug in class name resolution from the require library paths. We also fixed an issue with the used class count, and closed an issue where an internal context object was being called with an incorrect argument. In preparation for the Ruby Assess Beta coming this summer, we implemented the stored XSS rule, and updated the trace event reporting to the Contrast application.

### Python summary

The Python agent team is preparing for general availability of the Python Protect agent at the end of the second quarter. We've fixed issues related to the used class count, and updated the library version reporting the Contrast application. We've also made updates in the stack frame reporting for attacks, and updated the [installation instructions](installation-python.html#python-install) for the Flask web framework.

