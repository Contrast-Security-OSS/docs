<!--
title: "Contrast 3.5.6 - September 2018"
description: "Contrast 3.5.6 September 2018"
tags: "3.5.6 September Release Notes"
-->

Use YAML-based common configuration properties for all of our agents, and track your vulnerabilities with our [Agile Central](admin-orgintegrations.html#central) integration. 

## Fixes

* IE11 users can load the Contrast login page for SaaS and complete actions in the Servers grid row. 
* Delete a server without errors, even if you just deleted the application. 
* Protect will show as "on" for merged and child applications on Protect-enabled servers. 
* The Application page stops loading once your search is complete. 
* The Route Coverage page is free from Invalid Form errors. 
* Send a vulnerability to your configured bugtracker after you refresh the page. 

## Improvements

* Send vulnerabilities to [Agile Central](admin-orgintegrations.html#central) (FKA Rally) with our one-way integration that lets you set fields like Project Name, Defect State, Environment, Priority and more. 

* We changed the default filtering in the Applications grid to show you only licensed applications. Of course, you can still filter by your other favorite categories to make your search even easier.


## Agent Updates

### Java summary 

The Java team fixed a bug that caused Assess events to be labeled with the wrong type as well as a bug where user-provided Sanitizers that returned a new object could break data flow analysis. We added support of [YAML-based common configuration options](installation-javaconfig.html#java-yaml). We also improved reliability of Assess data flow analysis.

### .NET summary 

Users can now enable “profiler chaining” to allow the .NET agent to work alongside other third-party profilers such as New Relic, App Dynamics and Dynatrace. Set `agent.dotnet.enable_chaining=true` in the *contrast_security.yaml* [common configuration](installation-netconfig.html#net-yaml) file (or `ProfilerChainingEnabled=true` in the XML-based configuration file). The team made improvements to Protect to handle attacks via JSON deserialization within ASPNET MVC applications, instrumentation reliability within Web API applications, and Assess accuracy for interned strings within XML reading. We also fixed bugs where instrumentation lead to a crash on 32-bit applications on Windows Server 2008, the agent didn't use the configured agent data directory, and the agent would always use the “QA” environment settings for servers.

### Node.js summary 

The Node team added additional Assess rules - HTTP Only and Secure Flag Missing - for the Hapi 17 framework as well as additional support for session management. The team fixed issues related to file paths in the Windows OS, rendering of null values in templates, and an auto-update issue. We also added additional [common configuration options](installation-nodeconfig.html#node-yaml), and implemented initial metadata support for instrumented applications.

### Ruby summary 

The Ruby team has been working on performance enhancements to the agent. The team made asynchronous inventory and route analysis the default. We deferred instrumentation until explicitly enabled, refactored our gem analysis algorithm, and streamlined many of the utility methods. The agent is updated to align with changes to the [common configuration options](installation-rubyconfig.html#ruby-yaml), and added initial metadata support. In addition, the team is working towards general availability of the Ruby Assess features with the completion of the following Assess rules: XXE, NoSQL Injection and Unvalidated Redirect.

### Python summary

The Python team has continued to implement advanced Protect rules with updates to the Path Traversal rule. The agent now supports changes to the [common configuration options](installation-pythonconfig.html#python-yaml), and added initial metadata support. The service layer added support for binary request bodies.



