<!--
title: "Contrast 3.2.2 November 2015"
description: "Contrast 3.2.2 November 2015"
-->

## Java Agent
* CONTRAST-6201: Suppress the clickjacking rule / anti cache control if the status code is not 200
* CONTRAST-6326: XSS is not detected when javax.ws.rs.core.Response.ok is used to generate the response
* CONTRAST-6333: Rules.xml is large and confusing. We should decompose it into manageable pieces.
* CONTRAST-6367: Library issue with file hashes starting with a zero
* CONTRAST-6371: Update IDs in Java Agent policy files
* CONTRAST-6418: Remove implicit multi-policy support from rules.xml
* CONTRAST-6431: Minor performance improvements
* CONTRAST-6461: Allow for command line override of proxy settings in the Java Agent
* CONTRAST-6468: Updated codesourcekey generator is throwing ArrayIndexOutOfBounds exceptions for non-libraries
* CONTRAST-6502: Unable to scan rt.jar
* CONTRAST-6506: JavaScript Analysis
* CONTRAST-6507: HSTS
* CONTRAST-6522: Create IAST rule for detecting untrusted deserialization
* CONTRAST-6523: Can't analyze libraries with spaces in their paths
* CONTRAST-6527: End deserialization of bitsets
* CONTRAST-6529: Detect untrusted deserialization exploits
* CONTRAST-6542: Add support for javax.persistence injection APIs
* CONTRAST-6584: Path traversal false positive in GWT
* CONTRAST-6585: Duplicate XSS vulnerabilities
* CONTRAST-6611: Problem capturing response in JBoss/Seam

## .Net Agent
* CONTRAST-1305: Create XML parsing for propagators
* CONTRAST-5865: Implement MVC5 Request Validaton Disabled Rule via Instrumentation
* CONTRAST-5965: Instrumentation on CLR4 x86 causes unknown 500 error
* CONTRAST-6003: .NET Level One Rule Support
* CONTRAST-6004: .NET Validators
* CONTRAST-6007: .NET Library Vulnerability Info / CVE Cache
* CONTRAST-6027: ContrastTray IIS Express application list handling
* CONTRAST-6160: Fix "The pipe is being closed." errors on Module's pipe
* CONTRAST-6221: Investigate CLR 2 InjectionHelper Using VS 2008
* CONTRAST-6347: Instrumentation mode causes SO crash on AjaxWebForms test app
* CONTRAST-6370: .NET Instrumentation Fails When A Method Ends In A Throw
* CONTRAST-6387: .NET InjectionHelpers Should Use ArrayList Instead Of Object In Sigs
* CONTRAST-6424: ExecutionEngineException under instrumentation for /mojoPortal/csshandler.ashx
* CONTRAST-6514: Profilers failing to load on some servers
* CONTRAST-6516: .NET Agent should not ignore System.* DLLs that are NOT loaded into the shared appDomain

## TeamServer
* CONTRAST-2008: Password Reset Email Should Indicate if Account Doesn't Exist
* CONTRAST-3975: .NET Library Endpoint
* CONTRAST-3976: Create new Library class for .NET and update Team Server to use this class
* CONTRAST-3977: Implement .NET Library Cache Building based on Nuget Info
* CONTRAST-4466: Populate trace title, subtitle and card caches regularly instead of on demand
* CONTRAST-5649: Header HTML fragment injection
* CONTRAST-5715: Need Confirmation of "Unsaved Changes" on Settings
* CONTRAST-5835: Custom rule details don't load from resources on filesystem under rulepack/rule-id directory
* CONTRAST-5836: There is no way to define the message on the Details tab for custom rules
* CONTRAST-5944: Vulnerability filter for current week is broken
* CONTRAST-6017: contrast-server.vmoptions overwritten on upgrade
* CONTRAST-6051: Styling Fixes for User Menu
* CONTRAST-6117: Deleting Multiple Traces Intermittently Causes Alerts To Popup Indefinitely
* CONTRAST-6119: NPE calculating trace hash
* CONTRAST-4236: Introduction of Enterprise Access Control Features
* CONTRAST-6312: Vulns Are Not Sorted Appropriately
* CONTRAST-6395: Column Sort by Application on Server Page Not Working Correctly
* CONTRAST-6396: Crypto bad mac and bad cipher rules share CWE
* CONTRAST-6434: Correct the Default Sort on Vulnerabilities Pg
* CONTRAST-6494: ActiveMQ KahaDB journal log files data clean up problem
* CONTRAST-6513: AD/LDAP Unable to Successfully Authenticate Admin Users
* CONTRAST-6531: Real Time Email Alerts not working
* CONTRAST-6543: TeamServer Vulnerability: Java RMI Server Insecure Default Configuration Java Code Execution
* CONTRAST-6557: Repeatedly prompted to save My Account settings
* CONTRAST-6567: TeamServer is not logging information about SSL configuration on startup
* CONTRAST-6568: Add Spring Social CVE
* CONTRAST-6596: Increase the character limit of the component.remotehost column
* CONTRAST-4489: Libraries should be deleted when they are no longer being reported by an app
* CONTRAST-6533: CVE details not populating for hashes that match the NVD
* CONTRAST-6366: Installer - MissingResourceException: Resource 'taskkill.exe' not found on Windows
* CONTRAST-5657: Installer has NPE when upgrading from 3.1.8 to 3.1.9
* CONTRAST-6120: Installer Should Check for the TeamServer Site Up Before Finishing
* CONTRAST-6537: Log4j2 doesn't roll and compress on windows.

## Crawler
* CONTRAST-5347: Crawler Windows Installer - Unable to reset port field
* CONTRAST-5348: Crawler Windows Installer - Error message is not clear
* CONTRAST-6053: Crawler installer should test api configuration
* CONTRAST-6548: Fix deserialization vulns

