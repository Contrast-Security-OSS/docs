<!--
title: "Contrast 3.4.5 - October 2017"
description: "Contrast 3.4.5 October 2017"
tags: "3.4.5 October Release Notes"
-->

Remediate old vulnerabilities, tag from any agent, and apply and Assess Rules to new applications - it's automatic. 

## Fixes

* Admins retain role permissions when managing Application Exclusions CONTRAST-16131
* Assess Rules are consistent with vulnerability details CONTRAST-18129
* Views of the Attack Trend and Attack Events are more accurate CONTRAST-17114, CONTRAST-16935
* Integration testing for Serena Business Management is successful CONTRAST-18559
* Tooltips in Vulnerability Trend chart show up at the right time CONTRAST-18404
* Correct work item description for Visual Studio Team Servers two-way integration CONTRAST-18022
* License Ruby applications from the Applications page CONTRAST-18174
* Feature guard applies correctly to Node CONTRAST-17130
* Labels for source events are complete CONTRAST-18042
* Super and System Admins can view vulnerabilities without errors CONTRAST-17980
* FixLibrariesData Task is successful again CONTRAST-17949
* Cold Fusion support is restored CONTRAST-17726
* Vulnerability severity changes stop when you cancel them CONTRAST-17066
* Parameters in vulnerability overview display correctly CONTRAST-17740 
* Unwanted email notifications for server updates and Remediation Policy are done CONTRAST-18310,CONTRAST-18219
* SaaS users can navigate to Contrast in browser tabs and access API documentation CONTRAST-18120, CONTRAST-18205

## Improvements 

* Do yourself a favor, and create default settings for new applications in your organization. Just go to the new **Applications** tab in Organization Settings, and set up [Application Defaults](admin-orgsettings.html#app-defaults) based on levels of importance, existing policies and Assess licensing.

* Remediation Policies have a new outcome: [automatically remediate a vulnerability](admin-policymgmt.html#remediate). After you select this option, Contrast will change the vulnerability status to “Auto-Remediated”, if it hasn’t rediscovered the vulnerability by your given deadline. 

* Tag vulnerabilities, applications, servers or libraries automatically from any agent - just like you wanted. (Hint: This practice is especially helpful when multiple groups are working within Contrast and want to quickly filter without taking the time for manual tagging.)

* Manage [Assess Rules](admin-policymgmt.html#assess) per application to customize your security requirements. You can also set a default policy that will apply to newly onboarded applications. 

* Set our .NET agents to a pending update state when a new agent is available. In this state, .NET agents will wait for users to restart their IIS servers before installing an update.

* Choose which [vulnerability](user-apps.html#vulns) and [library](user-apps.html#libraries) data fields to export. The power is yours.

* Just like JIRA, but for our VSTS users: vulnerabilities status are updated in Contrast when you [change the status of a VSTS work item](admin-orgintegrations.html#vsts-tfs).

## Agent Updates

* **Java Agent Summary:** We improved a Protect SQL-injection rule, and captured additional information to improve our display and comprehension of several vulnerability types. We also fixed an issue in which some limited traces produced by the agent couldn't be processed by Contrast, a header-injection false positive under JBoss/netty, and a bug in which libraries under Vert.X and Netty weren't reported.

* **.NET Agent Summary:** We added support for .NET 4.7.1, captured additional information to improve our display and comprehension of several vulnerability types, and fixed an error in which the agent read POST data originating from an ASP.NET UpdatePanel too early. We improved reliability of instrumentation by fixing issues in which the Windows registry reported an incorrect version of the .NET framework and instrumentation conflicted with certain CLR compiler optimizations. We also improved the accuracy of potential security control detection and agent performance (especially against WCF applications). 

* **Node.js Agent Summary:** We spent this month adding Hapi framework support as well as ensuring compatibility with Node 8.0. We’ve made substantial updates to provide more accurate trace handling for Assess, and continue to move towards the beta release of Protect features in the Node agent with Server-side JavaScript injection handling and CSRF support. We fixed propagation through template strings; we also fixed  a few issues that prevented some findings from being rendered, caused false positives in crypto-bad-mac and crypto-bad-ciphers rules, and led to very large library reports to time out and go unreported. 

* **Ruby Agent Summary:** We added CVE shields – dedicated rules for blocking reported vulnerabilities – for CVE-2017-0890, CVE-2017-14033 and CVE-2017-14064. We also added added additional refinements to the NoSQL injection rule for MongoDB. The agent now reports to Contrast metadata tags for application, server and libraries; new agents also support the Contrast Security standard configuration format.





