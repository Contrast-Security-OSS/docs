<!--
title: "Contrast 3.2.6 - March 2016"
description: "Contrast 3.2.6 March 2016"
-->

## Java Agent
* CONTRAST-7641: Improve accuracy of *log-injection* rule
* CONTRAST-7717: Replace wildcard argument version of ```writeTo``` sink with the explicit sink
* CONTRAST-7724: RASP trigger tuning to improve attack detection
* CONTRAST-7745: Tune DeadZones to improve Java Agent performance and reduce memory impact
* CONTRAST-7299: Trace trigger refactor to reduce duplicates
* CONTRAST-7532: Address Library Issue for DropWizard
* CONTRAST-7661: Inheritable sources are throwing exceptions during transformation
* CONTRAST-7675: Java autoupdate does not work when ```-Dcontrast.teamserver.url``` is specified
* CONTRAST-7686: Agent not recognizing some WebLogic codesource URIs
* CONTRAST-7694: Decrease impact on Adobe CQ app
* CONTRAST-7802: Leverage ```IOUtils.closeQuietly()``` to make file reads end cleanly

## .Net Agent
* CONTRAST-7497: .NET Agent should let users disable rules in *policy.xml* by editing customerPolicy.xml
* CONTRAST-7738: .NET Agent service should catch all exceptions for starting ```filesystemwatcher```
* CONTRAST-7788: Add ```System.String System.Configuration.ClientConfigPaths.GetHash(System.IO.Stream)``` to bad-mac blacklist
* CONTRAST-7789: False Positive on Request Validation Disabled
* CONTRAST-6783: Profiler crash dump in .NET4 x86 concurrent hash 
* CONTRAST-7513: .NET agent should handle file paths on network drives better
* CONTRAST-7523: .NET Agent should NOT find *authorization-rules-misordered* for authorization section with only an *allow all* rule nested under a *deny all* rule
* CONTRAST-7552: Add ```Newtonsoft.Json.Utilities.JavaScriptUtils.WriteEscapedString``` to tag-lists
* CONTRAST-7556: Invalid xml with ```&#x0;``` in request values from sensors
* CONTRAST-7747: ArgumentException in .NET ```EventController.HostThread```
* CONTRAST-7790: Contrast.NET Svc Fails If .NET Framework 2.0 Is Installed
* CONTRAST-7807: Inaccurate number of classes are being reported
* CONTRAST-7814: Increase .NET Agent Service's max message size
* CONTRAST-7759: Improve concurrency handling and performance of .NET Instrumentation 

## NodeJS Agent
* CONTRAST-7222: Tag range commands
* CONTRAST-7427: Allow config to accept *serviceKey* for better matching
* CONTRAST-7234: Propogation
* CONTRAST-7561: Node: Relative App Directory
* CONTRAST-7823: Node.JS Agent Download Missing from Log


## TeamServer
* CONTRAST-5498: Duplicated properties in *hub.properties* and *general.properties*
* CONTRAST-7685: Issues sent to JIRA should put HTTP requests/code in code block
* CONTRAST-7730: Hard Copy Reports Showing Incorrect Start Date in the Executive Summary
* CONTRAST-7607: Add **Return to Login** link to Expired License page
* CONTRAST-7655: Add Play onboarding instructions
* CONTRAST-4166: TeamServer Notifications
* CONTRAST-6574: Text on Screen Improvement for AD and LDAP Group Screen
* CONTRAST-7496: Add Application Wizard
* CONTRAST-7602: Prevent unlimited TSV backup code attempts
* CONTRAST-7606: Compress Vulnerability Downloads into Zip Format Prior to Download
* CONTRAST-6797: utf8 charset support
* CONTRAST-7015: Update message on delete app modal
* CONTRAST-7481: Order the App Mappings by Parent Application in Alphabetical Order
* CONTRAST-7537: Application > Libraries Grid: Dates overflow
* CONTRAST-7539: Applications: Applying filter doesn't honor search text
* CONTRAST-7543: Vulnerabilities Sticky Header Stacks
* CONTRAST-7608: LDAP Failing to catch exception
* CONTRAST-7627: All vulnerabilities screen includes vulnerabilities for archived apps
* CONTRAST-7649: Exporting traces doesn't include properties or evidence
* CONTRAST-7762: Library Pages Missing Filter by Server
* CONTRAST-7744: Unable to Load TSV Login Properties
* CONTRAST-7806: URL's marked as Vulnerable in the Activity tab that are then reported as "No Vulnerability Found" in the Vulnerability tab
* CONTRAST-7837: Audit log should be pushing INFO level statements, not WARN
* CONTRAST-7302: Confusion about the username in AD/LDAP
* CONTRAST-7803: Library Page - Filter by Server
* CONTRAST-7819: Get Application Endpoint - Does not return the 'notes' field
* CONTRAST-5107: Header injection findings should specify the header name
* CONTRAST-7683: TeamServer can't handle Traces w/o ```<stack/>``` element


## Crawler
* CONTRAST-6589: Add the ability to pass PhantomJS options in Crawler
* CONTRAST-5049: Add the ability to specify HTTP headers in crawl requests

> **Special Note for Crawler Users:** 
The new release of Crawler and changes to TeamServer will force old Crawler configurations to become obsolete. Previous versions of Crawler (3.1.7, 3.2.2 or 3.2.3) will not work with TeamServer 3.2.6 or higher.


## OpenDocs
* Two-Step Verification: https://docs.contrastsecurity.com/admin_tsconfig.html#tsv
* .Net and Ninject: https://docs.contrastsecurity.com/user_netfaq.html#ninject
* Installing Play with the Java Agent: https://docs.contrastsecurity.com/user_javainstall.html#play

## Database Migrations
* V3_2_6_000: Custom Notifications Support
* V3_2_6_001: Descriptions for Custom Notifications
* V3_2_6_002: Support for sorting vulnerabilities by severity
* V3_2_6_003: FK for Trace Comment Notifications
* V3_2_6_004: Notification Digests
* V3_2_6_005: UTF-8 Character Support
* V3_2_6_006: Cascade delete support for RASP attacks
* V3_2_6_007: Support for failed TSV Codes
* V3_2_6_008: Refactor Application Date/Time Fields
* V3_2_6_009: Application Notes
* V3_2_6_010: Crawler Configuration
* V3_2_6_011: Support for aggregate URLs
* V3_2_6_012: Stored Procedure for aggregate URLs
* V3_2_6_013: Support for environment snapshots
* V3_2_6_014: Create Attack Snapshots
* V3_2_6_015: Aggregate server agent snaphots
* V3_2_6_016: Agent activity by server
* V3_2_6_017: Aggregate agent activity by server
* V3_2_6_018: Stored Procedure for aggregate agent activity by application
