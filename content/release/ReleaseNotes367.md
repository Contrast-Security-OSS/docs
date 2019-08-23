<!--
title: "Contrast 3.6.7 - August 2019"
description: "Contrast 3.6.7 August 2019"
tags: "3.6.7 August Release Notes"
-->

## Bug Fixes

* User with active Assess licenses couldn't access the UI after Protect licenses expired. CONTRAST-22125
* Servers were labeled as Unlicensed when Protect was disabled for the organization. CONTRAST-36469
* Protect user couldn't save setting for output to Syslog when they entered a host name in the form fields. CONTRAST-37314

## New and Improved Features

Administrators can save time and effort by automatically provisioning or deprovisioning users with organizational groups. When the option is enabled in your organization's SSO settings, Contrast uses SAML authentication to automatically provision users with an organizational group when they log in. If the user is already a member of any Contrast groups that aren't allowed by the SSO settings, Contrast can also automatically remove the user from those organizational groups.

## Agent Updates

### Java summary


### .NET agent summaries

#### .NET Framework 

Fixed a bug where the Azure App Service agent would fail to respect rule mode settings
Improved communication with Contrast to reduce duplicate messages
Added a new “cookie-header-missing-flags” to identify when cookies are issued without the secure flag
Fixed a bug where “##ProductName##” would appear in Tray notifications during the upgrade process
 
#### .NET Core

Removed the requirement that the .NET Framework be installed on the server
Added a new “cookie-header-missing-flags” to identify when cookies are issued without the secure flag
Fixed a bug where libraries were detected but not reported by the agent

### Node.js summary 

The Node agent team is moving forward on support for the Kraken.js framework with support for routing, form uploads, and view layer code implemented this month. The agent now deploys with pre-built binaries that eases deployment to applications that depend on Yarn or in environments where a compilation pipeline is not available. In addition, the agent handles more detailed analysis of the URL object. Node agent team fixed an issue where syslog settings were not matched up to the common configuration specification, an issue where Hapi 17 sink was not excluding header for XSS, and an issue where libraries were not being reported to the Contrast UI.

### Ruby summary 

Much of the August release was focused on performance improvements in the agent, particularly when operating in assess mode. The agent now defers creation of the properties object on tracked strings ntil the first tag is generated, an optimization to prevent the properties object from being created on introspection of the string, reduction on string generation, and prioritize the use of faster native method over slower equivalents. A issue was resolved where Stored XSS vulnerabilities were not being discovered in some instances. A issue was closed to prevent redundant rewrites of ActiveRecord classes.

### Python summary

The python agent released a major update to source input analysis when operating in protect mode. This update allows for a reduction of processing within the client application while standardizing user input scoring across agent implementations. Common code for the Flask middleware was moved to the base class to be shared among all WSGI-derived middlewares. An issue was resolved where binary uploads in HTTP requests were being reported for analysis as if they were UTF-8. The team is also moving towards the Python Assess beta release.


