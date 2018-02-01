<!--
title: "Contrast 3.4.8 - January 2018"
description: "Contrast 3.4.8 January 2018"
tags: "3.4.8 January Release Notes"
-->

...


## Fixes

* View merged applications and attack details with appropriate application access control. CONTRAST-19960, CONTRAST-20154
* Bulk user upload feature works like a charm. CONTRAST-20452, CONTRAST-20068
* Service Keys work in the right organizations. CONTRAST-20254
* Successfully sort attack events to get the best view. CONTRAST-19751
* Add any Reporter you want, and send vulnerabilities through your JIRA integrations CONTRAST-19497
* Add an application to multiple access groups during onboarding. CONTRAST-19983
* Get notifications for new comments on vulnerabilities. CONTRAST-20223
* Send all your bugs to TFS through a re-tuned integration. CONTRAST-19777
* SuperAdmins can test and save Internet Settings without any issues. CONTRAST-20012
* Smoothly delete multiple vulnerabilities. CONTRAST-12211
* Observer-level users can export vulnerabilities and manage comments. CONTRAST-16929
* Filter vulnerabilities by application, and get more accurate results. CONTRAST-19040   

## Improvements 

* We moved your [API credentials](user-account.html#profile) to your My Account info at the bottom of the **Profile** page. (Admins can still manage them from [Organization](admin-orgsettings.html#apikey) and [System Settings](admin-systemsecurity.html#manage-api).) 

 *These are your credentials. There are many like it, but this one is yours.*

* Enable Protect for users with a simple toggle (or spreadsheet column) while [creating their accounts](admin-onboardteam.html#create-user). Your new users can see attacks on their applications without any delay! 

* Edit any part of the Request URL before replaying the HTTP request. You can then replay the request (with the new URL) directly from Contrast.


## Agent Updates

### Java summary 


### .NET summary 


### Node.js summary 

The Node Protect agent enters beta in February including instrumentation of the Passport authentication library, PostgreSQL support, and improvements to the SQLi and NoSQLi Protect rules. In the Node Assess agent, we’ve improved the reporting on eval vulnerabilities, and enhanced compatibility with the Winston logging framework and the core-js third-party library.

### Ruby summary 

The Ruby team added a few performance and bug fixes. We now periodically query TeamServer for updates to configuration. We’ve expanded coverage of the authentication methods to cover more Warden strategies. We’ve also implemented improvements in the SQLi, XSS (reflected), CRLF and Path Traversal rules to catch additional potentially malicious vectors.



