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
* Slack integration notifications ignored New Asset selections made in Notification Settings. CONTRAST-35335
* Libraries grid timed out and returned errors in some users' SaaS environments. CONTRAST-34075

## Improvements

Set up session metadata to pinpoint the source of vulnerabilities reported for each application. Metadata can include build numbers, branch names, committers, versions and more. Once your Contrast agent is configured to report session metadata, go to your application’s Vulnerabilities tab to see the data in the new vulnerabilities timeline. You can also use the Seen By column in the grid to filter vulnerabilities by specific values.

Use source names to label attack events by expected sources so you can promptly choose which attack events to investigate. All you need is the IP information for a known source (like a pen tester) to get started. To create a source name or see existing source names in your organization, go to the IP Management page in Policy Management and select the Source Names tab. When you view attacks in the Attacks > Monitor page and Attacks Details pages, Contrast will display the source name instead of the attacker’s IP information. (We’ll be adding source names to the Attack Events grid next!)

Contrast Protect has two new protection rules against unsafe files. The Unsafe File Uploads rule blocks malicious files being uploaded to web applications. The Zip File Overwrite rule protects against malicious files and directory structures within zip files uploaded to web applications. These rules are in customer beta and available across all languages.


## Agent Updates

### Java summary


### .NET summary 

The .NET agent now supports use within [Docker containers](installation-netinstall.html#net-docker) for .NET 4.5.2+ applications. We improved accuracy of insecure authentication protocol Assess rule, and added a new Assess rule to detect the “X-Powered-By” header. We fixed a bug that caused a null reference error in processing Exclusions. We also added support for setting `application.code`.

### .NET Core summary

The [.NET Core agent](installation-netcore.html#netcore-overview) for Windows is now available! The agent supports the same expansive Assess and Protect security policy as the .NET Framework agent.

### Node.js summary 



### Ruby summary 

The Ruby team delivered expanded rule coverage and better performance for the 2.6.0 release. The agent now supports an "Unsafe File Upload" Protect rule to block attacks at perimeter as well as Server Side Request Forgery (SSRF) detection in Assess. We've also enhanced our string instrumentation rewriting along with other under-the-hood performance improvements.

### Python summary

Python 1.10.0 release has introduced a few important changes. One change is dropping support for Python 3.4 since it has reached it's End of Life date. Another change allows users to set Protect Rule modes in the configuration yaml. This should allow for easier control over deployed instances of the agent without having to use the Contrast UI. The last major change was improvements to response handling on SecurityException's. In the instance application code catches our exception during an attack, the agent will send the exception after application code has completely if we need to block a request. Some minor bugs included in this release are fixing the CSRF header used by the agent and improvements for the PyramidMiddleware with legacy Pyramid versions.


