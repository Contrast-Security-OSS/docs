<!--
title: "Contrast 3.5.0 - March 2018"
description: "Contrast 3.5.0 March 2018"
tags: "3.5.0 March Release Notes"
-->

Welcome, Python! 

## Fixes

* Attack notifications are being sent by your Slack integration. CONTRAST-18738
* Your view of **Attacks** honors application access levels and filters you've set. CONTRAST-21206, CONTRAST-21623, CONTRAST-21172, CONTRAST-21173
* Retain your filters in the **Servers** page, even when you take action in the grid. CONTRAST-8142
* Use the link to **Contact Support** in the user menu. CONTRAST-21885
* Notifications for new vulnerable libraries stop if you disable them. CONTRAST-19605
* Vulnerability trend chart is in sync with the **Vulnerability** page grid. CONTRAST-21405
* **Applications** grid loads completely and consistently. CONTRAST-21301
* Download the Ruby agent without any workarounds. CONTRAST-21262
* Surplus trace details are gone from your vulnerabilities. CONTRAST-21342

## Improvements 

* Wondering about the daily breakdown of your [Protect license usage](user-reports.html#orgstats)? Head over to the **Organization Statistics** page to find out. We’ll show you the number of servers protected, peak daily usage and much more. 

* When you export a vulnerability, the Vulnerability Overview and Notes fields are sent over with all of the regular info for new JIRA or VSTS/TFS tickets.

* Ensure that your applications are compliant to the OWASP Top 10 2017 standard, and generate reports based on the compliance standard.

<!-- * We protect your Java applications from a new remote code execution CVE discovered in the Spring Data REST library. (You can get rid of that custom virtual patch now.) -->

<!-- * Spread the good news, .NET Protect people: We support XXE as a new rule! -->


## Agent Updates

### Java summary 


### .NET summary 


### Node.js summary 

The Protect features of the Node agent officially entered GA this month with some final work on the CSRF rule, additional patterns for the CMD injection rule, a better matcher for the Bot Blocker rule, a fix for virtual patches, and better stack trace reporting. We've also updated our error reporting when the config file is not found, allowed for global environment variables to supersede configuration options, and added configuration flags for disabling protect and assess features. We've had a few updates for better Windows support and better technology reporting from the agent.

### Ruby summary 

The Ruby agent had an update to the SQL injection to resolve a false negative and simplified access to the configuration object in multi-process web server environments. We had a fix to limit the size of the pending message queue when the service is unavailable and provide better feedback if the logging directory is in a non-writable state. We've also made our gem dependencies less strict to reduce the possibility of gem conflicts for the service layer.

### Python summary

The Python Protect agent begins its beta phase with support of the full set of Protect rules and a new, high-speed service layer.


