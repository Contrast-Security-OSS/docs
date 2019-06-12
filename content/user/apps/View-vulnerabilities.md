<!--
title: "Discover Vulnerabilities"
description: "Overview of discovering vulnerabilities"
tags: "user applications discover vulnerabilities quick start guide"
-->

 
Go to the **Vulnerabilities** tab from the application's **Overview** page to see a list of all vulnerabilities found in that application. Contrast shows you all the vulnerabilities it's discovered including SQL Injection, Cross-Site Scripting (XSS), Command Injection, Path Traversal, XML External Entity Processing (XXE), Cross-Site Request Forgery (CSRF), Java Deserialization and many more. 

> **Note:** For Contrast to find weaknesses and present findings, you must exercise your application. You can then track, share and receive remediation guidance for each vulnerability that Contrast reports. 

## Explore Vulnerability Data

View and manage basic information for each vulnerability in the grid. Or, click on a vulnerability for [more details](user-vulns.html#discover-vulns) including the type of vulnerability, guidance on how to fix it, line of code and the ability to replay the attack. 

To see all vulnerabilities in a certain category - such as vulnerabilities that are open - use the dropdown menu by the vulnerability count above the grid to choose the appropriate quick view. The view default is "All". You can also click on the **magnifying glass** icon to search for specific vulnerabilities. 

<a href="assets/images/Application-vulns-tab.png" rel="lightbox" title="View vulnerabilities found in your application by severity"><img class="thumbnail" src="assets/images/Application-vulns-tab.png"/></a>

### View the timeline

Click the chart symbol above the grid to view a timeline of the vulnerabilities. Use the buttons above the chart to view data by **Severity** or **Discovery**. Any filters you apply in the grid also update the data in the chart. Use the filter for the **Last Detected** column to update the time span shown in the timeline. 

Hover over the trend lines to see a breakdown of the data for that point in time. If you're viewing data by severity, this includes the number of vulnerabilities reported, the specific time stamp, and a breakdown of the total number of vulnerabilities by severity. If you're viewing data by discovery, this includes the number of vulnerabilities reported, the specific time stamp, and a breakdown the total number of vulnerabilities by status (newly discovered, duplicate or remediated). 

To see your application's vulnerability data in more detail, you can also configure your Contrast agent to report [session metadata](user-vulnerableapps.html#session). 

## Learn More 

For more information on analyzing, managing and exporting reports on vulnerabilities, see the following articles: 

* [Analyze Findings](user-vulns.html#analyze)
* [Manage Vulnerabilities](user-vulns.html#manage-vuln)
* [How to Fix Them](user-vulns.html#remediate)
* [About the Contrast API](tools-about.html#api-about)
