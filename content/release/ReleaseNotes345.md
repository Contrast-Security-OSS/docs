<!--
title: "Contrast 3.4.5 - October 2017"
description: "Contrast 3.4.5 October 2017"
tags: "3.4.5 October Release Notes"
-->

Words here...

## Fixes

* Improved data accuracy for Attack Events CONTRAST-17114
* Role permissions honored for Application Exclusions CONTRAST-16131
* Synced Assess Rules with vulnerability details CONTRAST-18129
* Fixed integration testing for Serena Business Management CONTRAST-18559
* Adjusted number of trace events showing in vulnerability Details CONTRAST-18445
* Update paging in vulnerability views CONTRAST-17783
* Better timing for tooltips in Vulnerability Trend chart CONTRAST-18404
* Correct work item description for Visual Studio Team Servers two-way integration CONTRAST-18022
* License Ruby applications from the Applications page CONTRAST-18174
* Correctly apply feature guard to Node CONTRAST-17130
* Consistently labeled source events CONTRAST-18042
* Display vulnerabilities without errors for Super and System Admins CONTRAST-17980
* Made FixLibrariesData Task a success again CONTRAST-17949
* Fixed string replacement errors CONTRAST-17831
* Restored Cold Fusion support CONTRAST-17726
* Corrected Attack Trend CONTRAST-16935
* Cancel a severity change, and we'll listen CONTRAST-17066

* CONTRAST-17740 ? 

* Straightened out email notifications for server updates and Remediation Policy CONTRAST-18310,CONTRAST-18219
* Eliminated errors when SaaS users navigate to Contrast or access API documentation CONTRAST-18120, CONTRAST-18205


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

* **Node.js Agent Summary:** 

* **Ruby Agent Summary:** 



