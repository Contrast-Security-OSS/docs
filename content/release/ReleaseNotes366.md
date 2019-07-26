<!--
title: "Contrast 3.6.6 - July 2019"
description: "Contrast 3.6.6 July 2019"
tags: "3.6.6 July Release Notes"
-->

## Fixes

* Some pages in the UI flickered for users on Safari. 
* User had issue onboarding multiple .NET applications in the same pool.
* Impersonating users as a SuperAdmin resulted in errors.
* Users without applications couldn't see custom access groups in the UI.
* Applications tags were missing after applications were unmerged.
* Application queries timed out in some organizations.
* Daily digest emails were sent multiple times to the same recipients.
* Filters weren't respected when deleting vulnerabilities with "Select All" option.
* Jira integration didn't detect custom field to add multiple users.
* Merged applications ignored Assess rule disabled previously for one of the applications.
* Filters weren't respected when exporting vulnerabilities for merged applications.

## Improvements

* Export your application’s route coverage information to use and share outside the UI. To download the spreadsheet, go to the application’s **Route Coverage** tab, and select the icon above the grid to **Export Routes to CSV**. You can also export the same data via the APIs.
* The Node agent is available in the default Node Pivotal Cloud Foundry buildpack. You can also set up the Contrast tile to send any vulnerabilities up to your organization.

## Agent Updates

### Java summary

* Package managers
* Host installation
* IBM JDK8

### .NET agents 

The .NET Framework and .NET Core teams fixed an issue that could taint for some objects to be rendered incorrectly in the Contrast UI. We also improved creation of method signatures for methods with generic types. (This may invalidate previously created sanitizers and validators, if those signatures included generic types.)
 
#### .NET Framework summary

The .NET Framework team added a new Assess rule that detects when IIS is configured to send the unnecessary “X-Powered-By” header as well as a new Assess rule that detects when non-session cookies are missing the “secure” flag. We added a new Protect rule for ASP.NET applications that can block a potentially malicious file from being uploaded. We fixed a bug where instrumentation could cause an error in applications using a specific version (4.1.1.2) of System.Net.Http from a Nuget package rather than the BCL. We also added the following capabilities to our agent configuration: 

* The ability to change the agent’s service’s startup type to “Manual” via a command line flag on the installer (e.g., `SERVICE_STARTUP_TYPE_MANUAL=1`)
* The ability to suppress the agent’s service’s startup after installation via a command line flag on the installer (e.g., SUPPRESS_SERVICE_START=1)
* A workaround for applications that use `Server.Transfer` within error pages <br> (See the `agent.dotnet. restore_error_handling_after_sending_headers_behavior` configuration flag.)
 
#### .NET Core summary

You can now use the .NET Core agent on servers that have the .NET Framework agent installed. The team also added new Assess rules that detect when cookies are missing http-only or secure flags.


### Node.js summary 


### Ruby summary 


### Python summary


