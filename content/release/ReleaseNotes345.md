<!--
title: "Contrast 3.4.5 - October 2017"
description: "Contrast 3.4.5 October 2017"
tags: "3.4.5 October Release Notes"
-->

Remediate old vulnerabilities, tag from any agent and apply Assess Rules to new applications - it's automatic. 

## Fixes

* Data in for Attack Events is more accurate CONTRAST-17114
* Retain role permissions when managing Application Exclusions CONTRAST-16131
* Assess Rules are consistent with vulnerability details CONTRAST-18129
* Integration testing for Serena Business Management is successful CONTRAST-18559
* Paging in vulnerability views CONTRAST-17783
* Better timing for tooltips in Vulnerability Trend chart CONTRAST-18404
* Correct work item description for Visual Studio Team Servers two-way integration CONTRAST-18022
* License Ruby applications from the Applications page CONTRAST-18174
* Feature guard applies correctly to Node CONTRAST-17130
* Labels for source events are complete CONTRAST-18042
* Super and System Admins can view vulnerabilities without errors CONTRAST-17980
* FixLibrariesData Task is successful again CONTRAST-17949
* String replacement errors are gone CONTRAST-17831
* Restored Cold Fusion support CONTRAST-17726
* Corrected Attack Trend CONTRAST-16935

* Cancel a vulnerability severity change, and we'll listen now CONTRAST-17066

* CONTRAST-17740 ? 

* The deluge of email notifications for server updates and Remediation Policy is over CONTRAST-18310,CONTRAST-18219
* SaaS users can navigate to Contrast in another tab or access API documentation without any errors CONTRAST-18120, CONTRAST-18205


## Improvements 

* Remediation Policies have a new outcome: [automatically remediate a vulnerability](admin-policymgmt.html#remediate). After you select this option, Contrast will change the vulnerability status to “Auto-Remediated”, if it hasn’t rediscovered the vulnerability by your given deadline. 

* Tag vulnerabilities, applications, servers or libraries automatically from any agent - just like you wanted. (Hint: This practice is especially helpful when multiple groups are working within Contrast and want to quickly filter without taking the time for manual tagging.)

* Manage [Assess Rules](admin-policymgmt.html#assess) per application to customize your security requirements. You can also set a default policy that will apply to newly onboarded applications. 

* Set our .NET agents to a pending update state when a new agent is available. In this state, .NET agents will wait for users to restart their IIS servers before installing an update.

* We added CVE Shields for the following vulnerabilities in Ruby Gems: CVE-2017-0898, CVE-2017-14033, CVE-2017-14064.

* Choose which [vulnerability](user-apps.html#vulns) and [library](user-apps.html#libraries) data fields to export. The power is yours.

* Just like JIRA, but for our VSTS users: vulnerabilities status are updated in Contrast when you change the status of a VSTS ticket.


## Agent Updates

* **Java Agent Summary:** 

* **.NET Agent Summary:** 

* **Node.js Agent Summary:** We fixed propagation through template strings as well as issues that prevented some findings from being rendered, caused false positives in crypto-bad-mac and crypto-bad-ciphers rules, and also caused very large library reports to time out and go unreported. We also added Assess rules to detect missing HttpOnly and Secure flags in session cookies in Hapi.

* **Ruby Agent Summary:** 



