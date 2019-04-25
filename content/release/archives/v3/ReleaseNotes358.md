<!--
title: "Contrast 3.5.8 - November 2018"
description: "Contrast 3.5.8 November 2018"
tags: "3.5.8 November Release Notes"
-->

## Fixes

* Export data for all libraries in your organization without errors. 
* SuperAdmins can upload new user data. 
* Create Master applications during application merge. 
* The Dashboard shows the appropriate vulnerability count for each user's application access. 
* All vulnerability URL info is displayed correctly.
* LDAP connection issues for group creation are resolved.

## Improvements

* As of Contrast version 3.5.8, the auto-updating version of the Java agent is no longer available for download. The auto-update feature is not compatible with Contrast's design changes made to support the Java Platform Module System included in Java beginning with version 9. Existing agents with the auto-update feature will continue to function; however, once Contrast releases an agent capable of supporting Java 9+, they will no longer update to the latest version. 

 For more details on Java agent updates, see the **Java summary** below. 

* See your Protect data logs in SumoLogic via integration with the SIEM API. Browse through logs, and quickly find exactly what you’re looking for.

* Contrast upgraded to MySQL 5.7 for embedded MySQL. 


## Agent Updates

### Java summary 

The Java agent team improved accuracy of the Assess Path Traversal rule on Spring applications. We added better Assess support for Jersey 2.0, including route detection for Jersey 2.0+ applications. The agent also supports configuration of common configuration properties via environment variables. 

### .NET summary 

The .NET team fixed a bug in which the agent wasn't respecting the legacy `TeamServerValidateCert` configuration setting. We also fixed a bug in which the agent failed to restart properly when profiler chaining was enabled and the Assess or Protect mode was changed. We made improvements to: 

* The display of `System.Char[]` values in the trigger event of Assess vulnerabilities
* The performance of Assess analysis of applications that communicate with web services using `System.Net.Http.HttpClient`
* Assess accuracy for unvalidated redirects against the current request's URL

The agent supports Azure Application Service-hosted applications that are hosted outside of the *wwwroot/bin* directory.
 
### Node.js summary 

The Node agent now supports Node 10, the latest long-term support (LTS) version of Node. The Node team also updated support for TLS connections to Contrast UI using common configuration options. We modified the logging levels for the agent to match the other agents, and closed a bug in the Winston logger. We also enhanced logging around `Process.argv`.

### Ruby summary 

Ruby team has released the Assess agent! The Ruby agent also supports the common configuration entries to customize TLS connections to Contrast UI. Due to performance issues, we removed log enhancers for classes loaded after the agent has initialized. (This functionality will be re-enabled in the next release.)

### Python summary

The Python agent now supports communication to the Contrast Service using Unix sockets. The Python team updated configuration to support customized TLS connections to the Contrast UI. The agent also supports a periodic thread for verifying connection status in Contrast UI.

