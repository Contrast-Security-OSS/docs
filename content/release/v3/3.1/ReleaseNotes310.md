<!--
title: "Contrast 3.1.0 Release Notes, October 3, 2014"
description: "Contrast 3.1.0 Release Notes, October 3, 2014"
tags: "3.1.0 October Release Notes"
-->

## New Features
* Added the ability to merge applications                        
* The .NET agent now automatically updates itself
* Added ability for on-premise customers to login with their ActiveDirectory UPN, email, or Logon ID
* Streamlined our response scanning technology in the Java agent, leading to better performance
* Reduced memory footprint of the Java agent
* API only users won't be locked due to inactivity
* Added better data flow support when analyzing WCF applications in the .NET agent
* Reduced log output significantly in on-premise installations
* Hid SHA-1 warnings in JRuby applications that come from JRuby internals
* Added usability enhancements to the on-premises installer
* Added the ability for admins to unlock their own users
* Added better support for the HDIV framework out of the box
* Added more support for identity tagging
* Added usability enhancements to key pages
* Added several performance improvements to the Contrast site   
* Added the ability for customers to configure their own logging

## Bug Fixes
* Fixed bug where JSP line numbers were being incorrectly reported in traces
* Fixed bug preventing rules from being disabled in some cases
* Fixed bug where failed logins, trace deletes wouldn't be captured in audit log
* Fixed bug where the Java agent was reporting XSS false positives when using Spring escape utilities
* Fixed bug where strange data flows were being identified due to incorrect data flow
* Fixed bug where closed vulnerabilities were being counted against the security score
* Fixed bug where changes to alert settings weren't being saved 
