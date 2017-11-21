<!--
title: "Contrast 3.4.6 - November 2017"
description: "Contrast 3.4.6 November 2017"
tags: "3.4.6 November Release Notes"
-->

A few words here...

## Fixes

* Use the build number and server filters to find the right vulnerabilities in the grid. CONTRAST-18332, CONTRAST-17857
* Assess Rules edits are only for admins. CONTRAST-18432
* The Security Settings page is error free. CONTRAST-16916
* Create Virtual Patches from Attack Events CONTRAST-19187
* Default values for required fields and your complete list of potential assignees are there when you need them. CONTRAST-17649, CONTRAST-18907
* Use time and date filters in Attack Events and Vulnerabilities pages. CONTRAST-18937, CONTRAST-19019
* Filter Assess Rules by language. CONTRAST-18930
* Save changes in Password Settings without any confusing confirmation dialog. CONTRAST-18353
* Errors in the Server statistics dropdown are gone. CONTRAST-18961
* Use the spreadsheet to add users to an application access group during bulk import. CONTRAST-18836
* Set up two-way integration with JIRA, even if you change projects or issues types in the configuration. CONTRAST-18041
* Security Settings are smoothed out. CONTRAST-16916
* Clarified details for vulnerability events. CONTRAST-18571
* Removed irrelevant info from Organization Statistics and Attacks > Monitor page. CONTRAST-15668

In Progress: 
* https://contrast.atlassian.net/browse/CONTRAST-19055
* https://contrast.atlassian.net/browse/CONTRAST-15558
* https://contrast.atlassian.net/browse/CONTRAST-19005

## Improvements 

* Ever wondered if you could apply different [Assess Rules](admin-policymgmt.html#assess) to different applications? What if you want to track SQLi vulnerabilities on one application but not on another? With Assess Rules by application, your dreams for Java, Node and Ruby can come true. (And .NET will be coming soon!)

* Don’t be confused by different applications with the same display name. Contrast now requires [unique display names](user-apps.html#addapp), and will update your old ones for you. 
 
* If you have Node applications using Protect, say hello to three new rules: Server-side Javascript, Path Traversal and Command Injection. Head over to the Policy Management page to flip them on or off. 


## Agent Updates

* **Java Agent Summary:**

* **.NET Agent Summary:** 

* **Node.js Agent Summary:** 

* **Ruby Agent Summary:** 




