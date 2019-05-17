<!--
title: "Discover Vulnerabilities"
description: "Overview of discovering vulnerabilities"
tags: "user applications discover vulnerabilities quick start guide"
-->

 
Go to the **Vulnerabilities** tab from the application's **Overview** page to see a list of all vulnerabilities found in that application. Contrast shows you all the vulnerabilities it's discovered including SQL Injection, Cross-Site Scripting (XSS), Command Injection, Path Traversal, XML External Entity Processing (XXE), Cross-Site Request Forgery (CSRF), Java Deserialization and many more. 

View and manage basic information in the grid; or, click on a vulnerability for more details, including the type of vulnerability, guidance on how to fix it, line of code and the ability to replay the attack. 

<!-- Is the view always the 'last day'? -->

Use the buttons above the chart to view data by **Severity** or **Discovery**. Any filters you apply in the grid will also update the data in the chart. 

<a href="assets/images/Application-vulns-tab.png" rel="lightbox" title="View vulnerabilities found in your application by severity"><img class="thumbnail" src="assets/images/Application-vulns-tab.png"/></a>

Hover over the trend lines for a tooltip with a breakdown for that point in time. If you're viewing data by severity, this includes the number of vulnerabilities reported, the specific time stamp, and a breakdown of the total number of vulnerabilities by severity. If you're viewing data by discovery, this includes the number of vulnerabilities reported, the specific time stamp, and a breakdown the total number of vulnerabilities by status (newly discovered, duplicate or remediated).

> **Note:** For Contrast to find weaknesses and present findings, you must exercise your application. You can then track, share and receive remediation guidance for each vulnerability that Contrast reports. 

To see your application's vulnerabilities in more detail, learn how to configure agents to report [metadata by session](user-vulnerableapps.html#session). 

## Learn More 

For more information on analyzing, managing and exporting reports on vulnerabilities, read the following articles: 

* [Discover Vulnerabilities](user-vulns.html#discover-vulns)
* [Analyze Findings](user-vulns.html#analyze)
* [Manage Vulnerabilities](user-vulns.html#manage-vuln)
* [How to Fix Them](user-vulns.html#remediate)
* [About the Contrast API](tools-about.html#api-about)
