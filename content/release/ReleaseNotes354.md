<!--
title: "Contrast 3.5.4 - July 2018"
description: "Contrast 3.5.4 July 2018"
tags: "3.5.4 July Release Notes"
-->

Words...

## Fixes

* Filter Attacks by IP address to find the right ones in the grid. CONTRAST-23199
* Actions for attack details honor permissions of your application access group. CONTRAST-21174
* See only the right vulnerabilities in your server's Overview page. CONTRAST-24756
* Non-internet connected EOP users can see the complete list of their libraries. CONTRAST-23907
* Add an application to multiple access groups during onboarding. CONTRAST-19983
* Successfully sort Assess Rule by severity. (And then appreciate the alliteration.) CONTRAST-21640
* No more Security Controls for invalid targets, like primitives. CONTRAST-21981
* Contrast saves your auto-licensing configuration, even in Server Settings. CONTRAST-21901
* Build Number and Untracked filters work exactly as expected for your vulnerabilities. CONTRAST-17857, CONTRAST-24137

## Improvements

* Contrast stores the credentials you entered in your last Jira configuration, and automatically applies them when you set up the next one. You can also manage your credentials by adding news ones or editing an existing set.

* EOP customers can set proxy settings and rest assured that all integration traffic will flow through it.

## Agent Updates

### Java summary 

The Java team reduced the amount of memory used by agent’s Assess analysis, and fixed an issue where certain `java.lang.String` methods could cause application errors, if those methods were added as sanitizers or validators. We also added a new Malformed Header rule as well as protection against CVE-2018-1261. 

### .NET summary 

The .NET team improved the performance of the agent’s communication with the Contrast interface as well as the accuracy of unvalidated redirect analysis when the data source was `System.Web.HttpRequest.RawUrl`. And the Azure App Service Site Extension now checks for framework requirements. 

### Node.js summary 


### Ruby summary 


### Python summary



