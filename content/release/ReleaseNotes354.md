<!--
title: "Contrast 3.5.4 - July 2018"
description: "Contrast 3.5.4 July 2018"
tags: "3.5.4 July Release Notes"
-->

Just in: Ruby agent 2.0 and improvements for your integrations! 

## Fixes

* Filter Attacks by IP address to find the right ones in the grid. 
* See the right vulnerabilities in your server's Overview page.
* Non-internet connected Enterprise-on-Premises (EOP) users can see the complete list of their libraries. 
* Don't get tripped up by Security Controls for invalid targets. 
* Set up auto-licensing for servers, and see your saved selection across the UI. 
* Build Number and Untracked filters work exactly as expected for your vulnerabilities. 
* Delete an organization with assigned licenses. 

## Improvements

* Contrast stores the credentials you entered in your last Jira configuration, and automatically applies them when you set up the next one. You can also manage your credentials by adding news ones or editing an existing set.

* EOP users can set proxy settings and rest assured that all integration traffic will flow through it.

## Agent Updates

### Java summary 

The Java team reduced the amount of memory used by agent’s Assess analysis. We fixed an issue where certain `java.lang.String` methods, if added as sanitizers or validators, could cause application errors. We also added a new Malformed Header rule as well as protection against CVE-2018-1261. 

### .NET summary 

The .NET team improved the performance of the agent’s communication with the Contrast interface as well as the accuracy of unvalidated redirect analysis when the data source was `System.Web.HttpRequest.RawUrl`. Also, the Azure App Service Site Extension now checks for framework requirements. 

### Node.js summary 

The Node team added agent compatibility with the NewRelic APM agent. In the Protect feature, we improved the NoSQLi rule with support for classifier detection in MongoDB, and SQLi now has a new hook in the MySQL query interface. In the Assess feature, we can now track data propagation through user-defined input to the required statement, and we improved data flow on global constructors (e.g., `String`, `Function`).

### Ruby summary 

The Ruby agent entered 2.0 with an embedded service that eliminates the need for a second gem. The embedded service starts on application launch, is compatible with multiple applications on the same server, and can be controlled via rake tasks. The 2.0 version of the agent includes improvements in how the application name is determined and better application version determination.

### Python summary

The Python agent has safer common configuration loading, and can accept configuration items from command line and environment variables. The team also added additional tests for Django applications with MySQL. 


