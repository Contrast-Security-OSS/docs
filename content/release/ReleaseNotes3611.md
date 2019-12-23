<!--
title: "Contrast 3.6.11 - December 2019"
description: "Contrast 3.6.11 December 2019"
tags: "3.6.11 December Release Notes"
-->

## Bug Fixes

* Assess and Protect did not accurately detect XML External Entities, SQL Injection, Cross-Site Scripting, Secure Cookies, and Command Injection.

* Node probe events reported to security/syslog logger as a result of inputs getting classified as "worth_watching."

* Node agent didn't catch unvalidated redirects through the Express webserver.

* .NET Framework agent reported false positives against the New Relic agent.

* .NET Core agent logged to stdout for communications with Contrast.

* Ruby agent depended on concurrent-ruby that conflicted with some versions of Rails.

* Ruby agent startup time was not reliable in Heroku and Pivotal Cloud Foundry deployment environments.

* Ruby agent third-party gems overrode core functionality of the Class, Module, and Object classes, including FactoryBot and Rollbar.

## New and Improved Features

* We released the **[Microsoft Teams Integration](admin-orgintegrations.html#microsoftteams).**

* When Protect is set to “Monitor mode” for Regex DOS, Padding Oracle and Zip File Overwrite rules, attack events will now be reported as "Suspicious" instead of "Exploited". This means there is suspicious activity but not a confirmed exploit.

* Now Contrast can **[automatically verify a remediated vulnerability]().** Go to Organization Settings > Vulnerability Management to enable auto-verification by application, rule type, and environment. 

* The [Attestation Report]() is now available as a PDF from an application's details page. It is formatted to include information about the application's open and closed vulnerabilities, open source security status, and route coverage information. 

* Java agent increased accuracy for both Assess and Protect and improved logging for containerized applications.  

* For Ruby agent, instrumented methods now allow improved dataflow detection through File and Regex creation and usage.



## Agent Updates

### Java Agent Summary

Java agent improved accuracy and user experience:
* Configured an agent to log in to a console stream no longer produces an additional log file. 
* Assessed data flow accuracy improved for Java 11 applications.  
* Route Coverage for Struts 2 applications is now supported. 

### Node.js Agent Summary 

The Node.js agent now supports the new feature to auto-verify remediations. **Note:** Pending end of support for Node.js 8 As per Node.js LTS policy, support for Node.js 8 will be deprecated in the January agent release. 

### Ruby Agent Summary 

The Ruby agent now supports the new feature to auto-verify remediations. We also focused on third-party compatibility this month, specifically with those gems which undefine or redefine the signature of core methods, including const_defined? and other constant accessors. 

In addition, updates have been made to the Contrast Service runner, allowing for the detection and cessation of zombie processes. 

