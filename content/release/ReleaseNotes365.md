<!--
title: "Contrast 3.6.5 - June 2019"
description: "Contrast 3.6.5 June 2019"
tags: "3.6.5 June Release Notes"
-->

## Fixes

* Default library score settings weren't reflected correctly in the application score.
* Attempting to approve or deny pending vulnerabilities caused an error.
* Users with an Edit role couldn't export library data from the library's **Overview** page.
* Sending a vulnerability to Jira with an attachment caused an error in some cases.
* Managing user access groups caused internal server errors for some SaaS users.
* Cache issues prevented users from seeing vulnerability details after applying a license to an application.
* Slack integration notifications ignored New Asset selections made in **Notification Settings**.
* The **Libraries** grid timed out and returned errors in some users' SaaS environments.

## Improvements

* Set up [session metadata](user-vulnerableapps.html#session) to pinpoint the source of vulnerabilities for each of your applications. To get started, configure your agent to report one of the available metadata types, including build numbers, branch names, repositories, and committers. Go to your application’s **Vulnerabilities** tab to see the data in the new vulnerabilities timeline, and use the **Seen By** column in the grid to filter vulnerabilities by specific values.

* Use [source names](admin-ipmgmt.html#source-name) to label attack events by expected sources so you can promptly choose which attack events to investigate. All you need is the IP information for a known source (like a pen tester) to get started. When you view attacks in the **Attacks > Monitor** page and **Attacks Details** pages, Contrast will display the source name instead of the attacker’s IP information. (We’ll be adding source names to the Attack Events grid next!)

* Contrast offers two new Protect rules against unsafe files: The Unsafe File Uploads rule blocks malicious files being uploaded to web applications, and the Zip File Overwrite rule protects against malicious files and directory structures within zip files uploaded to web applications. These rules available for all languages.


## Agent Updates

### Java summary

Check back next release for updates!

### .NET summary 

The .NET team added support for agent use within [Docker containers](installation-netinstall.html#net-docker) for .NET 4.5.2+ applications. We improved accuracy of an insecure authentication protocol Assess rule, and added a new Assess rule to detect the “X-Powered-By” header. We fixed a bug that caused a null reference error in processing exclusions. We also added support for setting `application.code`.

### .NET Core summary

The [.NET Core agent](installation-netcore.html#netcore-overview) for Windows is now available! The agent supports the same expansive Assess and Protect security policy as the .NET Framework agent, just for your .NET Core applications. To start using the agent, check out the [system requirements](installation-netcore.html#netcore-system), and then [download and install](installation-netcoreinstall.html) the agent from the Contrast UI. 

### Node.js summary 

The Node.js team expanded rule coverage and better precision for our 2.4.0 release. We now support an Unsafe File Upload Protect rule (in Express and Koa) to block attacks or monitor at perimeter, as well as Server Side Request Forgery (SSRF) detection in Assess. We properly block Protect rules in Hapi by returning 403 not 500 in certain cases. Lastly, we've added support for multi-part form uploads in Koa.

### Ruby summary 

The Ruby team delivered expanded rule coverage and better performance for our 2.6.0 release. The agent now supports an Unsafe File Upload Protect rule to block attacks at perimeter as well as Server Side Request Forgery (SSRF) detection in Assess. We also enhanced our string instrumentation rewriting along with other under-the-hood performance improvements.

### Python summary

The Python agent's 1.10.0 release introduces a few important changes. We're dropping support for Python 3.4 as it's reached its End of Life date. We also allow users to set Protect rule modes in the [configuration YAML](installation-pythonconfig.html), which gives you more control over deployed instances of the agent without using the Contrast UI. We also improved response handling on SecurityExceptions: In the instance application code catches our exception during an attack, the agent will send the exception after application code has completed, if we need to block a request. Some minor bug fixes include the CSRF header used by the agent and improvements for the PyramidMiddleware with legacy Pyramid versions.

