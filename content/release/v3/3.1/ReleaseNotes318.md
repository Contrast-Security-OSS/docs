<!--
title: "Contrast 3.1.8 Release Notes - July 13, 2015"
description: "Contrast 3.1.8 Release Notes - July 13, 2015"
tags: "3.1.8 July Release Notes"
-->

## Java Agent
* Support for JDBI
* Support for Dropwizard
* Support for Mustache
* Support for Netty
* Support for Guava
* Support for Freemarker
 
## .Net Agent
* Improved stability of the .NET agent
* The .NET agent will now look for configuration-based vulnerabilities whenever a web application is updated or redeployed.  (Previously the agent only looked for configuration-based vulnerabilities on service start.)
* The .NET agent will now produce a minidump file when the agent encounters an error that would crash the worker process. These minidump files can be sent to Contrast and will help us resolve these types of issues faster.
* Improved the time the agent's Windows service takes to start up.  The agent should now reliably start up in virtual environments when the VM is suspended and later restored.
* NOTE: A future release will require .NET 3.5 to be installed in order to analyze .NET 2.0/3.0/3.5 applications.  There will be no change in requirements for analyzing .NET 4.0+ applications.
 
 
## TeamServer
* Deprecated the old UI and disabled all UI toggling.
* UI redesign for the Vulnerability tab within an application.
* Enabled administrators the ability to manage the grading scheme for vulnerable libraries.
* TeamServer will reject libraries missing a name.
* TeamServer will present emails in HTML format.
* TeamServer can now be installed by non-root user.
    
 
## Crawler
* Addressed issues with Crawl durations beyond 60 minutes.
* Minor UI fixes to improve the organization of Crawl results and history.
* Enhancement to present the number of idle and active crawler services available to TeamServer.
