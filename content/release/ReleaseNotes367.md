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

Administrators can save time and effort by automatically controlling a user's organizational groups. When the option is enabled in your organization's SSO settings, Contrast uses SAML authentication to automatically provision users with an organizational group when they log in. If the user is already a member of any Contrast groups that aren't allowed by the SSO settings, Contrast can also automatically remove the user from those organizational groups. Go to the **user menu > Organization Settings > SSO tab** to see the options for yourself.

## Agent Updates

### Java summary


### .NET agent summaries

#### .NET Framework 

The .NET Framework team improved communication with the Contrast UI to reduce duplicate messages, and added new “cookie-header-missing-flags” to identify when cookies are issued without the secure flag. We also fixed a bug in which the Azure App Service agent would fail to respect rule mode settings as well as a bug in which “##ProductName##” would appear in Tray notifications during the upgrade process.
 
#### .NET Core

The .NET Core team removed the requirement that the .NET Framework be installed on the server. We also added new “cookie-header-missing-flags” to identify when cookies are issued without the secure flag, and fixed a in which libraries were detected but not reported by the agent.

### Node.js summary 

The Node team is moving forward on support for the Kraken.js framework; this month, we implemented support for routing, form uploads and view layer code. The agent now deploys with pre-built binaries that eases deployment to applications that depend on Yarn or applications in environments where a compilation pipeline isn't available. In addition, the agent handles more detailed analysis of the URL object. The team also fixed the following issues: 

* Syslog settings weren't matched up to the common configuration specification
* Hapi 17 sink wasn't excluding header for XSS
* Libraries weren't being reported to the Contrast UI

### Ruby summary 

For the Ruby team, much of the August release was focused on performance improvements in the agent, particularly when operating in Assess mode. The agent now defers creation of the properties object on tracked strings until the first tag is generated; this is an optimization to prevent the properties object from being created on introspection of the string, reduction on string generation, and prioritize the use of faster native method over slower equivalents. We resolved an issue in which Stored XSS vulnerabilities weren't being discovered in some instances. We also closed an issue to prevent redundant rewrites of ActiveRecord classes.

### Python summary

The Python team released a major update to source input analysis when operating in Protect mode. This update allows for a reduction of processing within the client application while standardizing user input scoring across agent implementations. We moved common code for the Flask middleware to the base class to be shared among all WSGI-derived middlewares. We resolved an issue in which binary uploads in HTTP requests were being reported for analysis as if they were UTF-8. The team is also moving towards the Python Assess beta release.


