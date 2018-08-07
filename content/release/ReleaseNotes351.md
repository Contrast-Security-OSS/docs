<!--
title: "Contrast 3.5.1 - April 2018"
description: "Contrast 3.5.1 April 2018"
tags: "3.5.1 April Release Notes"
-->

Does dealing with issues feel like herding cats? Use new integration options and enhanced Jenkins plugin features to help yourself out! 

## Fixes

* Erroneous info has been removed from your Audit Log. 
* Send vulnerabilities to your bugtracker, even for those of Note severity. 
* Save changes to fields in your JIRA integration.
* Edits to your HipChat integration will now show up in the room immediately. 
* EOP customers can complete login tests for LDAP authentication. 
* Put validation in place for the Jira integration host URL to help you avoid problems.
* No more LDAP configuration errors due to URLs that contain spaces. Our apologies!  

## Improvements 

* Use our Jenkins plugin with a proxy or try a new flag to disregard Contrast findings for a specific Jenkins job. You can even try Results Only mode: Contrast will set the job status of a build to a customized status, like as "Not Build", "Aborted" or "Unstable".

* In the tradition of JIRA, VSTS/TFS and Bugzilla support, we present to you GitHub issues - yet another way to send those vulnerabilities out of Contrast (and your applications)!

* Get ready for even more vulnerability details with Slack! New info includes server, application and rule names as well as time of detection. 


## Agent Updates

### Java summary 

Java Protect accuracy just got better! We improved analysis of encoded attacks and added detection of command injection used by JexBoss. Work was completed to improve reliability of both agent initialization and timeout within the value specified by `-Dcontrast.timeout` configuration. We boosted performance of Assess analysis against J2EE applications as well as fixing locking and concurrent modification of policy.

### .NET summary 

.NET Assess fixed a few bugs - one where the data flow analysis stopped when data went through a "potential security control" and another where limited vulnerabilities would be rejected by Contrast. We made improvements to memory usage by reducing the number of allocations used by Assess data flow analysis, and implemented new rules:

* CSP Header Missing
* Insecure CSP Policy
* IE XSS Protection Disabled
* x-content-type-options Header Missing
 
In addition, performance was enhanced by consolidating several IPC messages, and a fix was put in place when instrumenting "Outsystems" third-party components. The .NET agent installer will now read the `RestartIISOnConfigChange` configuration value from the *DotnetAgentSettings.ini* file. See [Assess Rules](installation-netinstall.html#net-install) for more information.

### Node.js summary 

Node Protect has multiple performance improvements in the handling of source inputs by rule, and added a stricter demarcation of the Assess and Protect contexts. We fixed an issue in the CSRF rule that could cause timeouts in blocked requests. Specifically for our Assess feature, we resolved an issue where required paths were not strings. Node has improved auto-update to correctly check Contrast UI version numbers and now supports the YAML-based common configuration file. As Node 4 is at the end of its life, this is the last agent to officially support Node 4. And we're looking forward to supporting Node 10 in October! 

### Ruby summary 

Ruby works toward beta-level Assess support at the end of Q2. For the Protect agent, we had updates to our SQLi rule, exclusions honor the "all" condition from the Contrast UI, and configuration files can be added to a standard Contrast directory. There's also a new feature where the request body can be excluded from results sent to the Contrast UI. We had an issue where the CVE-2017-0898 shield was blocking assets in development mode, but it's fixed now! We've updated our library dependencies in both the agent and the service reducing the potential for incompatibilities in user environments.

### Python summary

Python Protect is available to beta partners. We added Pyramid support as well as better reporting on the XSS rule in the Contrast UI. We fixed an issue where specific regex patterns were causing an exception in Python 2.7.5 and Python 2.7.6. We addressed the problem where older versions of pip were causing an exception and fixed a false negative issue in the SQLi rule. The agent correctly applies IP blacklist configurations to the `X-Forwarded-For header.
