<!--
title: "Contrast 3.6.5 - June 2019"
description: "Contrast 3.6.5 June 2019"
tags: "3.6.5 June Release Notes"
-->

## Fixes

* Attempting to approve or deny pending vulnerabilities caused an error. CONTRAST-34589
* Default library score settings weren't reflected correctly in the application score. CONTRAST-35174
* Users with an Edit role couldn't export library data from the library's Overview page. CONTRAST-34594
* Sending a vulnerability to Jira with an attachment caused an error in some cases. CONTRAST-35082
* Managing user access groups caused internal server errors for SaaS users. CONTRAST-34481
* Cache issues prevented users from seeing vulnerability details after applying a license to an application. CONTRAST-34911
* Slack integration notifications ignored New Asset selections made in **Notification Settings**. CONTRAST-35335
* The **Libraries** grid timed out and returned errors in some users' SaaS environments. CONTRAST-34075

## Improvements

* Set up [Session metadata](user-vulnerableapps.html#session) you pinpoint the source of vulnerabilities for each of your applications. To start seeing session metadata, update your agent configuration to report one of the available metadata types, including build numbers, branch names, repositories, and committers. Go to your application’s **Vulnerabilities** tab to see the data in the new vulnerabilities timeline, and use the **Seen By** column in the grid to filter vulnerabilities by specific values.

* Use [source names](admin-ipmgmt.html#source-name) to label attack events by expected sources so you can promptly choose which attack events to investigate. All you need is the IP information for a known source (like a pen tester) to get started. When you view attacks in the **Attacks > Monitor** page and **Attacks Details** pages, Contrast will display the source name instead of the attacker’s IP information. (And we’ll be adding source names to the Attack Events grid next!)

* Contrast offers two new Protect rules against unsafe files: The Unsafe File Uploads rule blocks malicious files being uploaded to web applications, and the Zip File Overwrite rule protects against malicious files and directory structures within zip files uploaded to web applications. These rules available for all languages.


## Agent Updates

### Java summary


### .NET summary 

The .NET team added support for agent use within [Docker containers](installation-netinstall.html#net-docker) for .NET 4.5.2+ applications. We improved accuracy of insecure authentication protocol Assess rule, and added a new Assess rule to detect the “X-Powered-By” header. We fixed a bug that caused a null reference error in processing Exclusions. We also added support for setting `application.code`.

### .NET Core summary

The [.NET Core agent](installation-netcore.html#netcore-overview) for Windows is now available! The agent supports the same expansive Assess and Protect security policy as the .NET Framework agent.

### Node.js summary 



### Ruby summary 

The Ruby team delivered expanded rule coverage and better performance for the agent's 2.6.0 release. The agent now supports an Unsafe File Upload Protect rule to block attacks at perimeter as well as Server Side Request Forgery (SSRF) detection in Assess. We also enhanced our string instrumentation rewriting along with other under-the-hood performance improvements.

### Python summary

The Python 1.10.0 release introduces a few important changes. We are dropping support for Python 3.4 as it's reached it's End of Life date. We also allow users to set Protect rule modes in the [configuration YAML](installation-pythonconfig.html), which gives you easier control over deployed instances of the agent without having to use the Contrast UI. We also improved response handling on SecurityExceptions: In the instance application code catches our exception during an attack, the agent will send the exception after application code has completely if we need to block a request. Some minor bug fixes include the CSRF header used by the agent and improvements for the PyramidMiddleware with legacy Pyramid versions.


