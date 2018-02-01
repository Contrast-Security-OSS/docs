<!--
title: "Contrast 3.4.8 - January 2018"
description: "Contrast 3.4.8 January 2018"
tags: "3.4.8 January Release Notes"
-->

Instant Protect access for new users and conveniently located API credentials will make your resolutions a little bit easier to keep.  

## Fixes

* View merged applications and attack details with appropriate application access control. 
* Bulk user upload works like a charm. 
* Successfully sort attack events to get the best view. 
* Send vulnerabilities to JIRA with any Reporter you want. 
* Add an application to multiple access groups during onboarding. 
* Get notifications for new comments on vulnerabilities. 
* Library statistics charts show correct breakdowns. 
* Send all your bugs to TFS through a re-tuned integration. 
* SuperAdmins can test and save Internet Settings without any issues. 
* Smoothly delete multiple vulnerabilities. 
* Filter vulnerabilities by application, and get more accurate results. 

## Improvements 

* We moved your [API credentials](user-account.html#profile) to your My Account info at the bottom of the **Profile** page. (Admins can still manage them from [Organization](admin-orgsettings.html#apikey) and [System Settings](admin-systemsecurity.html#manage-api).) 

* Enable Protect for users with a simple toggle (or spreadsheet column) while [creating their accounts](admin-onboardteam.html#create-user). Your new users can see attacks on their applications without any delay! 

* Send details of vulnerable [libraries](user-libraries.html#manage-lib) straight to your email account - just like you send them to bugtrackers - and keep, track or share to your heart's content. 

* Edit any part of the Request URL before replaying the HTTP request. You can then replay the request (with the new URL) directly from Contrast.


## Agent Updates

### Java summary 


### .NET summary 


### Node.js summary 

The Node Protect agent enters beta in February including instrumentation of the Passport authentication library, PostgreSQL support, and improvements to the SQLi and NoSQLi Protect rules. In the Node Assess agent, we’ve improved the reporting on eval vulnerabilities, and enhanced compatibility with the Winston logging framework and the core-js third-party library.

### Ruby summary 

The Ruby team added a few performance and bug fixes. We now periodically query the Contrast application for updates to configuration. We’ve expanded coverage of the authentication methods to cover more Warden strategies. We’ve also implemented improvements in the SQLi, XSS (reflected), CRLF and Path Traversal rules to catch additional potentially malicious vectors.



