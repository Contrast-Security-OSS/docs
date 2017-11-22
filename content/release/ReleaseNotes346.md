<!--
title: "Contrast 3.4.6 - November 2017"
description: "Contrast 3.4.6 November 2017"
tags: "3.4.6 November Release Notes"
-->

Tame unruly applications with improved Assess Rules, unique display names and a new Protect rule for Node.js. (For your in-laws, we recommend a nice Pinot.)

## Fixes

* Use the build number and server filters to find the right vulnerabilities in the grid. CONTRAST-18332, CONTRAST-17857
* Assess Rules edits are only for admins, but anyone can filter by language. CONTRAST-18432, CONTRAST-18930
* The Security Settings page is error free. CONTRAST-16916
* Create Virtual Patches from Attack Events. CONTRAST-19187
* Default values for required fields and your complete list of potential assignees are there when you need them. CONTRAST-17649, CONTRAST-18907
* Use time and date filters in Attack Events and Vulnerabilities pages. CONTRAST-18937, CONTRAST-19019
* Save changes in Password Settings without any confusing confirmation dialog. CONTRAST-18353
* No more errors in server statistics. CONTRAST-18961
* Add users to an application access group during bulk import. CONTRAST-18836
* Set up two-way integration with JIRA, even if you change projects or issues types in the configuration. CONTRAST-18041
* Security Settings are smoothed out. CONTRAST-16916
* Clarified details for vulnerability events. CONTRAST-18571
* Get the most-relevant info from Organization Statistics and Attacks pages. CONTRAST-15668
* Cleanly delete properties from vulnerabilities. CONTRAST-17981

## Improvements 

* Ever wondered if you could apply different [Assess Rules](admin-policymgmt.html#assess) to different applications? What if you want to track SQLi vulnerabilities on one application but not on another? With Assess Rules by application, your dreams for Java, Node and Ruby can come true. (And .NET will be coming soon!)

* Don’t be confused by different applications with the same display name. Contrast now requires [unique display names](user-apps.html#addapp), and will update your old ones for you. 
 
* If you have Node applications using Protect, say hello to a new rule: Server-side Javascript. Head over to the Policy Management page to flip it on or off. 

## Agent Updates

### Java 

### .NET 

### Node.js 

* We officially support node 8 (again, and for real this time because the [docs](installation-node.html#node-supported) say so). 
* We allow agent autoupdates in Windows. 
* We have a few more tricks up our sleeves when it comes to instrumenting non-configurable functions that don't want to be instrumented. 
* We fixed some busted propagation logic for substrings; a bug that'd cause ugly errors when we tried to report findings with circular objects in the values in any of their events; and a case where Promises in Node 4 and 6 caused us to lose context and not report findings. 
* We're saying no to doing anything inside webpack or zlib functions. 
* We improved accuracy in propagation.
* Last - but not least - the hardcoded-key and hardcoded-password are much less spammy.

### Ruby 
* We spent this month focusing on code quality. 
* We've added several new tests and refactored to remove some dead code paths. 
* We also tuned some detection methods in the SQLI and XSS rules, expanding coverage to include injectable parameter names and reducing the number of duplicate attack reports.




