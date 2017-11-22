<!--
title: "Contrast 3.4.6 - November 2017"
description: "Contrast 3.4.6 November 2017"
tags: "3.4.6 November Release Notes"
-->

Tame unruly applications with improved Assess Rules, unique display names and a new Protect rule for Node.js. 

## Fixes

* Use date, build number and server filters to find the right vulnerabilities in the grid. 
* Assess Rules can only be edited by admins, but anyone can filter by language. 
* Security Settings are sorted out. 
* Create Virtual Patches from Attack Events. 
* Tuned up JIRA configuration fields so you can use default values for required fields, add assignees and update issue types without any problems. 
* Use time filters to find Attack Events. 
* Save changes in Password Settings without a confusing confirmation dialog. 
* No more errors in server statistics.
* Add users to an application access group during bulk import. 
* View vulnerability event details more clearly. 
* Get only relevant info from Organization Statistics and Attacks pages. 
* Cleanly delete properties from vulnerabilities. 
 
## Improvements 

* Ever wondered if you could apply different [Assess Rules](admin-policymgmt.html#assess) to different applications? What if you want to track SQLi vulnerabilities on one application but not on another? With Assess Rules by application, your dreams for Java, Node and Ruby can come true. (And .NET will be coming soon!)

* Don’t be confused by different applications with the same name. Contrast now requires [unique display names](user-apps.html#addapp), and will update your old ones for you. 
 
* If you have Node applications using Protect, say hello to a new rule: Server-side Javascript. Head over to the Policy Management page to flip it on or off. 

## Agent Updates

### Java summary 

We improved rendering for vulnerabilities from applications using Struts, Spring and JAX as well as rendering of Assess findings involving the response body. We also added CVE Shields for CVE-2017-12615, CVE-2017-12616 and CVE-2017-12617. For Assess, we're recognizing new command-injection sinks and additional ESAPI encoders as sanitizers. We also fixed traces involving `StringBuilder.insert`, messages to Contrast and a few minor issues with library findings. For Protect, we can handle vulnerabilities found outside of a request context, and implemented additional patterns to cut out false positives. 

### .NET summary 

We brought back the Profiler-based mode for instrumentation, which now supports Protect features, for CLR4 applications. (Duplex-based instrumentation is now deprecated, and we plan to remove this mode in a future release.)

### Node.js summary 

We officially support node 8 again (and for real this time because the [docs](installation-node.html#node-supported) say so). We allow agent autoupdates in Windows, improved accuracy in propagation, and have a few more tricks up our sleeves when it comes to instrumenting non-configurable functions that don't want to be instrumented. We also fixed some busted propagation logic for substrings; a bug that'd cause ugly errors when we tried to report findings with circular objects in the values in any of their events; and a case where Promises in Node 4 and 6 caused us to lose context and not report findings. Last, but not least: the hardcoded-key and hardcoded-password are much less spammy, and we're saying no to doing anything inside `webpack` or `zlib` functions. 

### Ruby summary 

We spent this month focusing on code quality. We've added several new tests and refactored to remove some dead code paths. We also tuned some detection methods in the SQLI and XSS rules, expanding coverage to include injectable parameter names and reducing the number of duplicate attack reports.




