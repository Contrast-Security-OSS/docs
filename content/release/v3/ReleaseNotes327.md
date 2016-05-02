<!--
title: "Contrast 3.2.7 - April 2016"
description: "Contrast 3.2.7 April 2016"
tags: "3.2.7 April"
-->

## Special Note About External Rules
Customers who write or have implemented custom rules in TeamServer should read this [article](admin_tsinstall.html#external) prior to upgrading to 3.2.7.

## Java Agent
* CONTRAST-8243: Ability to Canary SQL Statements (RASP)
* CONTRAST-8090: Library/CVE Research through CVE-2016-4043
* CONTRAST-7558: Improve Analysis of Concurrent XSS Requests
* CONTRAST-8064: Performance Improvement of Preflight Communication with TeamServer
* CONTRAST-8145: Honor Exceptions in IAST
* CONTRAST-7798: Performance Improvement for Trace Tagging
* CONTRAST-7903: Cookie Recognized as Source of SQL injection
* CONTRAST-7954: Add MJ12 Bot to List of Known Bots for Blocking
* CONTRAST-8026: Expand Blacklists for Crypto Rules
* CONTRAST-8241: Xerces Entity Resolves Occurs Twice in XXE RASP Data
* CONTRAST-7728: Alter Source Creation to Better Handle Maps and Collections
* CONTRAST-7755: XSS Attacks Marked Ineffective (RASP)
* CONTRAST-7804: Improvements to Exceptions Rules (RASP)
* CONTRAST-7944: Fix highlighting offset problem that "appears" to be off by the number of chars in the name of the JSP file
* CONTRAST-7955: XXE FP
* CONTRAST-7958: OOM Heap Issue
* CONTRAST-7962: Improve Reporting for Anti-Clickjacking
* CONTRAST-7989: Suppress Stacktrace from Agent ERROR Log Level
* CONTRAST-8025: Catch Excpetions from Permission Errors During Log Creation
* CONTRAST-8033: Trigger Virtual Patches (RASP)
* CONTRAST-8034: Apparent Defects in Hash Algorithm IAST findings
* CONTRAST-8035: Fix NPE in VirtualPatches
* CONTRAST-8041: TeamServer and Agent Expect Different Formats for Log Enhancers
* CONTRAST-8153: Add Custom Security Control Support to Freemarker Triggers
* CONTRAST-8196: Wrap XXE Sensors in Catch to Avoid Throwing Exceptions (RASP)
* CONTRAST-8216: XSS and SQLi Detection Improvement (RASP)

## .Net Agent
* CONTRAST-8091: .NET Agent: Library/CVE Research and Mapping for April Release
* CONTRAST-8056: .NET stored-xss Rule vs. Entity Framework 
* CONTRAST-7645: .NET Agent should detect and use configuration changes without restarting service
* CONTRAST-7787: .NET Agent Tray should link to appropriate help/docs article when possible 
* CONTRAST-4794: .NET Agent should enable/disable analysis (Deploy/Remove Sensors) without restarting service
* CONTRAST-7536: .NET service xml reading should disable DTD
* CONTRAST-7634: .NET Agent should display an error when there's a Contrast error in a specific application pool
* CONTRAST-7670: Improve .net xxe rule for *XmlReader.Create* with settings
* CONTRAST-7797: Contrast.NET Should Only Flag Plaintext Connection String With Credentials
* CONTRAST-7858: .NET Agent now uses ~10% less memory for instrumentation-based analysis
* CONTRAST-8000: Improve performance of StackFrameResolver locking
* CONTRAST-8046: Leave WAS Registry Environment Changes In Place While Service Is Running
* CONTRAST-8112: Tray Should Be Consistent With Sensor Light Coloring
* CONTRAST-8238: .NET agent should use new version endpoint to fix autoupdate on SaaS
* CONTRAST-7879: *System.String System.String.Replace*(*System.Char,System.Char*) should not propagate when the string is already tainted and nothing is replaced
* CONTRAST-7880: *unvalidated-redirect* FP under *instr -* string does not start with taint
* CONTRAST-7907: .NET Agent should treat text from WebForms controls as tainted
* CONTRAST-7966: ContrastSvc Not Checking For Update After First Day
* CONTRAST-7986: *web.config* analysis not using same appPool filtering as profiler
* CONTRAST-7990: Use IIS Application Pool Name rather than IIS Application Pool Identity for Contrast .NET White/BlackList
* CONTRAST-7997: URL Count/AppActivity Not Being Reported After Some .NET Agent Upgrades to 3.2.6
* CONTRAST-8002: Unhandled Exception During HttpModulePlugin in CLR2/IPM
* CONTRAST-8018: Potential Path-Traversal FP for .NET
* CONTRAST-8079: .NET Agent sending findings to TeamServer with wrong request URI
* CONTRAST-8192: .net 'IgnoreNumericServerVariables' not working for string[] sources

## NodeJS Agent
* CONTRAST-7573: node rule: xxssprotection-header-disabled
* CONTRAST-7575: node rule: hsts-header-missing
* CONTRAST-7593: node rule: csp-header-missing
* CONTRAST-7595: node rule: xcontenttype-header-missing
* CONTRAST-7931: node: add propagators for the base64-url module
* CONTRAST-8037: Node: Add proxy flag to agent
* CONTRAST-8001: Node Agent Not Passing Command Line Args
* CONTRAST-8015: Node agent does not resolve config correctly
* CONTRAST-8045: Append method not respecting whether tags were on right or left side of append
* CONTRAST-8122: *Buffer.write* does not accept a String Object
* CONTRAST-8170: *Buffer.protoype.byteLength* causing crash in 4.0.0
* CONTRAST-8180: Provider rules sending incorrect uri format in http request info
* CONTRAST-8213: Windows Compatibility


## TeamServer
* CONTRAST-7999: Update logging in TS around agent activity
* CONTRAST-7945: Add/Edit Trace Notes should require application permission, not org permission
* CONTRAST-7953: Improve Rendering of XXE Evidence
* CONTRAST-8041: TeamServer and Agent expect different formats for log enhancers
* CONTRAST-8070: Resetting Superadmin password should unlock the account
* CONTRAST-8113: Improve Calculation of Library Analysis Grade
* CONTRAST-8153: Validator Security Control not working with Java agent
* CONTRAST-7896: Email Updates All Around - All The Things
* CONTRAST-8032: Update TSV 'Can't Sign In' Workflow for Users with Email Notification
* CONTRAST-7983: Activity Digest Template Fixes
* CONTRAST-6579: Unable to Switch a User's Status from Inactive to Active in the UI
* CONTRAST-7756: Blocked Status Color Change (RASP)
* CONTRAST-8220: Deleting an Organization Causes Constraint Violation
* CONTRAST-7482: Attack Notification Revision (RASP)
* CONTRAST-7875: Implement Attack Update workflow for Additional Application (RASP)
* CONTRAST-8203: Isolate hub proxy configuration from system properties
* CONTRAST-7927: Exceptions for Events and Attacks (RASP)
* CONTRAST-8061: Implement System Notification For Expiring Applications
* CONTRAST-8073: Add "Languages" Filter to Apps Pg.
* CONTRAST-6784: Organization Default Date & Time Format
* CONTRAST-7767: Messaging for Users with No Org Role
* CONTRAST-7830: Support for Agent Updates Outside of Contrast War File
* CONTRAST-8081: Servers - New Filter by agent version
* CONTRAST-8204: "Add Exception" Dialog Rework (RASP)
* CONTRAST-7431: Default Selection Inputs to "All" when Re-enabling Notification
* CONTRAST-7924: Problem exporting vulnerability from the vulnerability drilldown page
* CONTRAST-7968: Generate Incident Report link is broken
* CONTRAST-7984: Activity Digest Showing Excessive Duplication
* CONTRAST-7987: Activity Digest emails are not being sent every day
* CONTRAST-7992: Rule repeating in daily digest for RASP attack update (RASP)
* CONTRAST-8004: AgentActivityEnricher (JmsAgentActivity queue) is filling up
* CONTRAST-8036: Invalid virtual patches can be created
* CONTRAST-8042: Graceful Handling of Traces with NULL HTTP Data
* CONTRAST-8049: Notification concats names of apps under attack (RASP)
* CONTRAST-8098: Vulnerability count at top of page is incorrect
* CONTRAST-8141: Minimum Password Change Interval Locks First Time Users from Changing Passwords on Setup
* CONTRAST-8218: Changes to Exceptions don't get picked up by agent
* CONTRAST-7252: Replace Windward with BIRT for Hard Copy Reports
* CONTRAST-7967: Trace Discussion reload task is being executed multiple times
* CONTRAST-8105: Libraries stats are being loaded twice
* CONTRAST-8106: Reduce amount data sent in Get Libraries endpoint
* CONTRAST-8039: Missing Search Bar for Users with View Permissions
* CONTRAST-8040: Tool bars are missing for users with View Permission
* CONTRAST-8057: Notification Messages are not visible in medium/large screens
* CONTRAST-8109: Vulnerable Libraries Failing to Display When Filtering in a Merged Application
* CONTRAST-8195: Datepicker CSS is broken
* CONTRAST-8008: Update Vulnerability Status Messaging
* CONTRAST-7979: Add Tags To Search Criteria for Vulnerabilities
* CONTRAST-8075: Implement New Empty State When Org Has No Registered Apps
* CONTRAST-7682: Don't allow to tag archived apps
* CONTRAST-7689: Tag filter remains after all tags deleted
* CONTRAST-7799: TSV Setup Wizard, clear verification code field if code is not valid
* CONTRAST-7871: Application list is not shown if vulnerable filter is selected
* CONTRAST-8007: Error Handling Using Incorrect Icon
* CONTRAST-8085: ERROR LOG: ERROR (FixOracleFalsePositives.java:67) Unable to delete Oracle JDBC false positves: Duplicate key name 'classname_idx'
* CONTRAST-8194: Libraries - Hide archived apps in 'App' Using column

## OpenDocs
*  [Installing on Play](user_javainstall.html#play)
* [Two Step Verification](admin_tsconfig.html#tsv)
* [Upgrading Agents with TeamServer EOP](admin_tsconfig.html#agents)
* [Everything You Wanted to Know About Notifications](user_tsguideset.html#alert)
* [Migrating External Rules from 3.2.6 to 3.2.7+](admin_tsinstall.html#external)

## Database Migrations
* V3_2_7_000: Remove Invalid XXE Samples
* V3_2_7_001: Rules Exceptions Model
* V3_2_7_002: Add defense fields app snapshots items (RASP)
* V3_2_7_003: Add organization snapshot items
* V3_2_7_004: Add fields to application snapshot items
* V3_2_7_005: Update users lastpasswordchangetime field
* V3_2_7_006: Clean trace httprequest
* V3_2_7_007: Update defense scores field
* V3_2_7_008: Refactor log enhancer
* V3_2_7_009: Fill Log Enhancer Environment
* V3_2_7_010: Remove unused columns log
* V3_2_7_011: Add date/time format fields to organizations
* V3_2_7_012: Refactor ip blacklist
* V3_2_7_013: Fill Ip Blacklist Environment
* V3_2_7_014: Remove ip blacklist fields
* V3_2_7_015: Add rasp render fields
* V3_2_7_016: Fix constraints
* V3_2_7_017: Refactor virtual patch model
* V3_2_7_018: Fill Virtual Patch Environment
* V3_2_7_019: Remove unused columns virtual
