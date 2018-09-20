<!--
title: "Contrast 3.5.0 - March 2018"
description: "Contrast 3.5.0 March 2018"
tags: "3.5.0 March Release Notes"
-->

With the Python agent in beta and Protect features available for Node, it's like a whole new world. (*A new fantastic point of view...*)

## Fixes

* Retain your filters in the **Servers** page, even when you take action in the grid.
* Attack notifications are being sent by your Slack integration. 
* Use the link to **Contact Support** in the user menu. 
* Notifications for new vulnerable libraries stop if you disable them. 
* Your view of **Attacks** honors application access levels and filters you've set. 
* Vulnerability trend chart is in sync with the **Vulnerability** page grid. 
* **Applications** grid loads completely and consistently. 
* Download the Ruby agent without any workarounds. 
* Surplus trace details are gone from your vulnerability view. 

## Improvements 

* Wondering about the daily breakdown of your [Protect license usage](user-reports.html#orgstats)? Head over to the **Organization Statistics** page to find out. We’ll show you the number of servers protected, peak daily usage and much more. 

* When you export a vulnerability, the Vulnerability Overview and Notes fields are sent over with all of the regular info for new JIRA or VSTS/TFS tickets.

* Ensure that your applications are compliant to the OWASP Top 10 2017 standard, and generate reports based on the compliance standard.


## Agent Updates

### Java summary 

The Java team improved blocking of Protect Path Traversal Rule and added protection against CVE-2017-8046. We also fixed a bug where the agent could fail to block at perimeter an attack embedded within JSON/XML. 

### .NET summary 

The .NET team added an XXE Rule for Protect and improved agent accuracy (i.e., Protect Command Injection and Assess handling of ASP.NET server variables). We reduced the agent’s impact to performance of Web API applications by ~7% as well as the number of allocations used by the agent’s Assess analysis. We also fixed the following issues: 
* Several safe errors in agent sensors that could lead to excessive logging and impact performance
* Clickjacking false positive when X-Frame-Options header was added at the native level by IIS
* An error where agent analysis could fail to initialize when an application pool is configured to use a low-privilege user

### Node.js summary 

The Protect features of the Node agent officially entered GA this month with some final work on the CSRF rule, additional patterns for the CMD injection rule, a better matcher for the Bot Blocker rule, a fix for virtual patches and better stack trace reporting. We've also updated our error reporting when the *config* file isn't found, allowed for global environment variables to supersede configuration options, and added configuration flags for disabling Protect and Assess features. Finally, we've had a few updates for better Windows support and better technology reporting from the agent.

### Ruby summary 

The Ruby agent updated the SQL injection to resolve a false negative, and simplified access to the configuration object in multi-process web server environments. We added a fix to limit the size of the pending message queue when the service is unavailable and provide better feedback if the logging directory is in a non-writable state. We've also made our gem dependencies less strict to reduce the possibility of gem conflicts for the service layer.

### Python summary

The [Python](installation-python.html#python-overview) Protect agent begins its beta phase with support of the full set of Protect rules and a new, high-speed service layer.


