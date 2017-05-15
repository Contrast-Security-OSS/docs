<!--
title: "Contrast 3.1.7 Release Notes - June 2, 2015"
description: "Contrast 3.1.7 Release Notes - June 2, 2015"
tags: "3.1.7 June Release Notes"
-->

## Java Agent
* Addressed race condition that prevents the collection of library information and additional instrumentation.
* Added support for library analysis in EAR files for JBoss 4.2 and 5.x.
* Added library analysis support for SpringBoot standalone applications.
* Addressed issue where only the first verb-tampering vulnerability in web.xml would be reported.

### Custom Rules Update 
With the release of 3.1.7, we've updated the internal package structure of TeamServer.
In order to ensure the external rules you've implemented still compile, you will need to update the import statements of your scripts to match. A bulk find and replace operation should be sufficient for this.

The old package structure com.aspectsecurity.contrast.common was replaced with the new structure com.aspectsecurity.contrast.teamserver.model.
````
com.aspectsecurity.contrast.common.application.Application
com.aspectsecurity.contrast.common.trace.Trace
com.aspectsecurity.contrast.common.trace.TraceProperty
````
 
## .NET Agent
* Improved memory usage by the agent's background Windows service (ContrastService.exe).  ContrastService.exe should consume ~50% less memory and make better use of objects that must be allocated on the large object heap.
* Addressed an issue where the agent would fail to send vulnerabilities to TeamServer from a server where only IIS Express was deployed.
* The agent now has a limit of 100 events per vulnerability. (Matches the limit already present in the Java agent.)
* Added a new configuration option "StackTraceDepth" that limits the number of stack trace frames captured.  Capturing smaller stack traces can improve agent performance.
* Added a new configuration option "ProcessBlacklist" that instructs the agent to not monitor application pools on the blacklist. 
* The agent will now properly handle application domain unloads (for example when a web application is re-deployed.)  The agent will now properly dispose of objects it used to track assemblies, methods, and related information in the unloaded application domain.
 
## TeamServer
* Search functionality has been added to the Vulnerability page in the new User Interface.
* Discover date and severity information have been added to the vulnerabilities details summary page.
* Logout events were added to the audit log.
* Addressed issue where Alert emails were inconsistently delivered when using LDAP or AD authentication mechanism.
UI improvements
* Performance improvements
* Renaming of packages. Note, this change is only of consequence if you've implemented external rules. Before upgrading, the external Groovy files will need to be updated to reflect this package change.
 
##  Contrast Installer
* Updated Bundled JRE to v1.7.0_80
* Updated Bundled Tomcat to v7.0.61
* Bundled JRE can be overridden using the -manual switch on the command line. 
