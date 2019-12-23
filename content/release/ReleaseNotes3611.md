<!--
title: "Contrast 3.6.11 - December 2019"
description: "Contrast 3.6.11 December 2019"
tags: "3.6.11 December Release Notes"
-->

## Bug Fixes

* Assess and Protect were not detecting the following accurately: XML External Entities, SQL Injection, Cross-Site Scripting, Secure Cookies, and Command Injection.

* Probe events were being reported to security/syslog logger as a result of inputs getting classified as `WORTH_WATCHING`(SUP-838)  

* Unvalidated redirects were not caught through Express. (SUP-842) 

* DotNet Framework was reporting false positive against New Relic agent.

* Logging to stdout was required for communications with Contrast.

* Dependency on concurrent-ruby conflicted with some versions of Rails.

* Agent startup time made startups unreliable in Heroku and Pivotal Cloud Foundry deployment environments.

* Third party gems that override core functionality of the Class, Module, and Object classes, including FactoryBot and Rollbar were blocking compatibility.

## New and Improved Features

* Now you can automatically verify when a vulnerability is remediated! Go to Organization Settings >  Vulnerability Management to enable auto-verification per application, per rule type, and by environment. See <link to RBAV docs> for more details on usage. 

* There is a new report type that you can generate from an application’s details page. The “Attestation Report” is a PDF report with new formatting and includes information about the applications open and closed vulnerabilities, open source security status, and route coverage information. See <link to Attestation docs page> for more details. 

* Improved logging for containerized applications
** Accuracy increased for both Assess and Protect. 
** Configuring an agent to log in to a console stream no longer produces an additional log file. 

* Assess data flow accuracy improved for Java 11 applications. 

* Route Coverage for Struts 2 applications now supported. 

* The Node.js agent provides support for the Team Server route-based auto-verification feature.

* Instrumented methods now allow improved dataflow detection through File and Regex creation and usage.



## Agent Updates

### Java Agent Summary

The Java team focused on accuracy fixes and improvements for both Assess and Protect.

### Node.js summary 

Pending end of support for Node.js 8 As per Node.js LTS policy, support for node.js 8 will be deprecated in the January agent release.

### Ruby summary 

The Ruby team focused on third party compatibility this month, specifically with those gems which undefine or redefine the signature of core methods, including const_defined? and other constant accessors. 

In addition, updates have been made to the Contrast Service runner, allowing for the detection and cessation of zombie processes. Also, startup time was improved to reduce the likelihood of timeouts when installed in applications running in Heroku or Pivotal Cloud Foundry pipelines.

