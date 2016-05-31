<!--
title: "Contrast 3.2.8 - May 2016"
description: "Contrast 3.2.8 May 2016"
tags: "3.2.8 May Release Notes"
-->

## Java Agent
* CONTRAST-7570: On Java 6 and higher, all Level 1 Rule changes auto-apply without redeploy
* CONTRAST-7944: Update propagation for more clear Insert operations
* CONTRAST-8096: Add System property (*contrast.rules.jar*) to load custom rules JAR
* CONTRAST-8108: Add support for *java.nio.file.Paths* in Path Traversal vulnerability detection
* CONTRAST-8154: Scan parameter values as XML or JSON to account for either format being sent as request parameters
* CONTRAST-8182: Update propagation for more clear rendering in TeamServer
* CONTRAST-8212: Support for Java Agent on Pivotal Cloud Foundry PAAS
* CONTRAST-8276: Library/CVE Updates through May 2016
* CONTRAST-8311: Improvements for RASP SQL Injection detection
* CONTRAST-8318: RASP matching at exploit point needs to match intelligently against attack input
* CONTRAST-8326: Address *File.exists()*, which was causing a false positive because it calls File's constructor
* CONTRAST-8329: Support older versions of Freemarker to avoid XSS false negative
* CONTRAST-8358: RASP filtering for duplicate events from QueryString and parsed Input Parameters
* CONTRAST-8437: Reduce overhead when Assess and Defend are both enabled 
* CONTRAST-8441: Dead zone the *MQInternalCommuncations#receive()* method
* CONTRAST-8467: Tune CS-EXP-2 RASP rule to reduce XSS false positives
* CONTRAST-8589: Expand RASP XXE coverage for Java 5 API's

## .Net Agent
* CONTRAST-8277: Library/CVE Updates through May 2016
* CONTRAST-4104: Customize Install Directory and Logging Directory
* CONTRAST-8460: .NET Agent Sensors should create log file even when blocked by whitelist/blacklist to help w/ troubleshooting
* CONTRAST-8086: Inventory/Library Only Mode
* CONTRAST-8338: .NET Agent treating *NotModified* response code from TS as error, may stop comm. with TS after failed 'heartbeats'
* CONTRAST-6819: .NET Agent needs to use better methods to detect multiple XSS on the same page
* CONTRAST-8265: IIS Express Sensor Status Should Not Appear If IIS Express Is Not Installed
* CONTRAST-7813: .NET File Analysis should handle type load failure when inspecting *web.config*
* CONTRAST-8361: .NET Agent causes 400 error for WCF service with *Transfer-Encoding=chunked*
* CONTRAST-8403: .NET Agent HttpModule is still using process username rather than application pool name for whitelist/blacklist
* CONTRAST-8474: InjectionHelpers Are Not Versioned With Build Number
* CONTRAST-8469: IIS Express Tab Is Not Enabled When Tray Is Started After Service
* CONTRAST-8475: IIS App Pool Tab in .NET Tray Not Wide Enough/Too Many Columns
* CONTRAST-8492: DotnetSvc Fails In Some Cases During GetAppPools
* CONTRAST-8401: .NET Level One rules need to change 'System.Void' (from TeamServer) to 'void'
* CONTRAST-8263: .NET MapPath bitset is incorrect
* CONTRAST-6528: TeamServer identifies 'System.Web.Mvc' as from 'ZKCloud.WebApi/' not 'Microsoft.AspNet.Mvc'	
* CONTRAST-8376: Missing nuget packages in dotnet cache
* CONTRAST-8456: .NET Agent profiler logs not being deleted (keeping more than the limit)

## NodeJS Agent
* CONTRAST-7216: Array Propagation Improvements 
* CONTRAST-7582: Rule: Hardcoded-password
* CONTRAST-7585: Rule: Hardcoded-key
* CONTRAST-8278: Library/CVE Updates through May 2016
* CONTRAST-7205: Support the EJS View Template Engine
* CONTRAST-8400: *String.prototype.substr* propagator crashing with args[0] > 0
* CONTRAST-8448: Node agent sending empty sha hash values
* CONTRAST-8537: Propagation with 'undefined' args causes a crash in APPEND
* CONTRAST-8569: Teamserver support for hardcoded key/password

## TeamServer
> **Special Note About Logs**: Please note that TeamServer logs are now located in *$CONTRAST_HOME/data/logs*

* CONTRAST-8065: Remove Organization Short Name
* CONTRAST-8062: Add licensing information to Organization Settings Page
* CONTRAST-8181: Performance Analysis of Library Pages
* CONTRAST-8217: Vulnerability XML export should include the agent version that reported the vulnerability
* CONTRAST-7008: Allow Server to be Renamed
* CONTRAST-7628: Restrict API Users from Receiving Notifications
* CONTRAST-8300: Add environments filter to Servers Page
* CONTRAST-7784: Prune WATCHER_TASKS Table
* CONTRAST-8484: EOP *Log4J2.xml* Improvements
* CONTRAST-8388: Allow Contrast TeamServer to Generate a *Catalina.out* log
* CONTRAST-7356: Robust "Archive Confirmation" Needed for Merged Apps
* CONTRAST-8462: New Error Pages
* CONTRAST-8270: Trace Breakdown API - Total Count is Incorrect
* CONTRAST-8310: Server Filter Count - Tags Count Include Deleted Servers
* CONTRAST-8313: NPE Data Flow Rules
* CONTRAST-8291: Organization Settings > App Mappings, checkbox is too far right
* CONTRAST-8368: Servers Page Needs to Show Servers Associated to Child Apps
* CONTRAST-8264: 'MD5 hash algorithm used at' finding title for some hash vulns from .NET
* CONTRAST-8452: crypto-weak-randomness rule failing to create title
* CONTRAST-8427: Export traces as superadmin
* CONTRAST-8354: TeamServer sends emails to inactive users
* CONTRAST-8328: Catch and process exception when user is not found (LDAP)
* CONTRAST-8449: Reject libraries with empty hashes (sha1) before saving them in the database
* CONTRAST-7947: Clicking on "critical" in vulnerabilities column in application main page shows all vulnerabilities
* CONTRAST-8477: AD/LDAP Users can't share vulnerabilities
* CONTRAST-8273: Manual Backup File Name Incorrect
* CONTRAST-8574: Can't create superadmin user in LDAP/AD

## Database Migrations
* V3_2_8_000: Remove organization shortname
* V3_2_8_001: Add name field server
* V3_2_8_002: Org libraries manifest 
* V3_2_8_003: Fill Organization Library Manifest table
* V3_2_8_004: Clean app libraries model
* V3_2_8_005: Trace servers agent version
* V3_2_8_006: Update attacks model
* V3_2_8_007: Update appupdate model
* V3_2_8_008: Remove libraries no hash
* V3_2_8_009: Clean trace data model
* V3_2_8_010: Refactor servers fields
* V3_2_8_011: Remove trace data uk
* V3_2_8_012: Add unique app libraries table
* V3_2_8_013: Trim trace subtitles
* V3_2_8_014: Add protection for org
* V3_2_8_015: Update watcher task model
* V3_2_8_016: Rasp user events notes status
* V3_2_8_017: Increase trace property name length
* V3_2_8_018: Initialize app displayname field
* V3_2_8_019: Notificationslicense history
* V3_2_8_020: Refactor rasp user events notes status

## GitHub (Contrast-Security-OSS)
* CONTRAST-8163: V3 Support within the Java SDK
