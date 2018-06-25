<!--
title: "Contrast 3.5.3 - June 2018"
description: "Contrast 3.5.3 June 2018"
tags: "3.5.3 June Release Notes"
-->

Congrats, Python Protect! You made it to the big time. 

## Fixes

* Assess rules take effect for child applications. 
* Tags render correctly for IE11 users. 
* Removed view of **Apply License** options for View-level users.
* Use the link to clear Advanced filters in the Libraries page. 
* Critical vulnerabilities disappear from your Dashboard as soon as you mark them "Not a Problem". 

## Improvements 

EOP customers can setup a proxy in the Contrast application, and trust Contrast to filter all of their integration traffic through it as well. 

## Agent Updates

### Java summary 


### .NET summary 

The .NET team added an Assess rule for HSTS header missing as well as support for `Contrast.AppName` in DPAPI protected configs. We also fixed a concurrency issue that could cause an `InvalidOperationException` along with issues where headers set in *global.asax* were not analyzed by Assess sensors and incorrect sources were reported for some Assess vulnerabilities. 

### Node.js summary 

The Node team made a variety of performance and compatibility improvements including: better compatibility with the New Relic APM agent, fixing an issue with PostgreSQL options, and compatibility with applications that run `uglify-js` in their deployment pipeline. The agent also handles the case where the *package.json* isn't included in a application. Finally, the team added some propagation enhancements for better Assess accuracy in `String.split` and `Array.join`.

### Ruby summary 

The Ruby team implemented coverage statistics for the Protect agent, and improved class name resolution from the code file paths.

### Python summary

Python Protect enters General Availability with this release! Remaining tasks for the Python team included tracking routes identified in the application for coverage statistics. We also added a new default location for configuration files under */etc/contrast*.


