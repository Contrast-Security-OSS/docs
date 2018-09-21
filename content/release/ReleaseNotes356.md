<!--
title: "Contrast 3.5.6 - September 2018"
description: "Contrast 3.5.6 September 2018"
tags: "3.5.6 September Release Notes"
-->

Lots of words...

## Fixes

* Complete actions in the Servers grid row, even if you're using EI11. 
* Delete a server without errors, even if you just deleted the application. CONTRAST-27209
* Protect will show as "on" for merged and child applications on Protect-enabled servers. CONTRAST-23185


## Improvements

* Send vulnerabilities to [Agile Central](admin-orgintegrations.html#central) (FKA Rally) with our one-way integration that lets you set fields like Project Name, Defect State, Environment, Priority and more. 

* We changed the default filtering in the Applications grid to show you only licensed applications. Of course, you can still filter by your other favorite categories to make your search even easier.


## Agent Updates

### Java summary 


### .NET summary 


### Node.js summary 

The Node team added additional Assess rules - HTTP Only, Secure Flag Missing - for the Hapi 17 framework as well as additional support for session management. The team fixed issues related to file paths in the Windows OS, rendering of null values in templates, and an auto-update issue. We also <!-- added additional common configuration options and --> implemented the initial metadata support for instrumented application.

### Ruby summary 

The Ruby team has been working on performance enhancements to the agent. The team made asynchronous inventory and route analysis the default. We've deferred instrumentation until explicitly enabled, refactored our gem analysis algorithm and streamlined many of the utility methods. The agent is updated to align with changes to the common configuration options, and initial metadata support has been added. In addition, the team is working towards general availability of the Ruby Assess features with the completion of the following Assess rules: XXE, NoSQL Injection and Unvalidated Redirect.

### Python summary

The Python team has continued to implement advanced Protect rules with updates to the Path Traversal rule. The agent now supports changes to the common configuration options, and initial metadata support has been added. The service layer added support for binary request bodies.



