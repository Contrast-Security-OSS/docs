<!--
title: "Contrast 3.5.3 - June 2018"
description: "Contrast 3.5.3 June 2018"
tags: "3.5.3 June Release Notes"
-->

Python Protect...

## Fixes

* Policies will take effect for child applications. CONTRAST-24004, CONTRAST-24033 
* Tags render correctly for IE11 users. CONTRAST-23496
* No more teasing View-level users with **Apply License** options. CONTRAST-23502
* Click the link to clear Advanced filters in the Libraries page. CONTRAST-22944
* Critical vulnerabilities disappear from your Dashboard as soon as you mark them "Not a Problem". CONTRAST-23588

## Improvements 

* EOP customers can setup a proxy in the Contrast application, and trust Contrast to filter all of their integration traffic through it as well. CONTRAST-14868 


## Agent Updates

### Java summary 


### .NET summary 


### Node.js summary 

The Node team made a variety of performance and compatibility improvements including: better compatibility with the New Relic APM agent, fixing an issue with PostgreSQL options, and compatibility with applications that run `uglify-js` in their deployment pipeline. The agent also handles the case where the *package.json* isn't included in a application. Finally, the team added some propagation enhancements for better assess accuracy in `String.split` and `Array.join`.

### Ruby summary 

The Ruby team implemented coverage statistics for the Protect agent, and improved class name resolution from the code file paths.

### Python summary

Python Protect enters General Availability with this release! Remaining tasks for the Python team included tracking routes identified in the application for coverage statistics. We also added a new default location for configuration files under */etc/contrast*.


