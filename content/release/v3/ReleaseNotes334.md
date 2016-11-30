<!--
title: "Contrast 3.3.4 - November 2016"
description: "Contrast 3.3.4 November 2016"
tags: "3.3.4 November Release Notes"
-->

## Java Agent
* CONTRAST-9846:  Update propagation support for StringBuilder and StringBuffer setLength methods
* CONTRAST-10665: Enforce UTF-8 byte encoding in all outbound requests
* CONTRAST-10685: Allow XSS canary to create database sources
* CONTRAST-10803: Queue agent updates for next startup
* CONTRAST-10805: Introduce null checks in bootstrap propagation shortcuts
* CONTRAST-10842: Update "decrypt" in AESUtil with more explicit Cipher instance argument
* CONTRAST-10927: Add support for JavaEE web sockets
* CONTRAST-10936: Improve SimpleOrSearcher pattern matching
* CONTRAST-10966: Add XSS support for JSF's ResponseStateManager
* CONTRAST-11066: Set threshold for findings per rule in time period
* CONTRAST-11078: Improve activity report queuing 
* CONTRAST-11097: Improve ReDos vulnerability detection by caching pattern evalutations
* CONTRAST-11130: Add OGNL Injection detection to IAST
* CONTRAST-11155: Improve parameter naming by including map keys in vulnerability reports
* CONTRAST-11228: Add built in log compiler and analyzer 
* CONTRAST-11257: Significant performance improvements and memory impact reduction

## .Net Agent
* CONTRAST-11194: SQLi False Positives via cookie value in response generation and Request.ServerVariable keys accessed via index 
* CONTRAST-11116: HTTP Parameter Pollution false positive against static resources
* CONTRAST-10946: .NET HttpModule not setting log level correctly 
* CONTRAST-10945: .NET Profiler sending app pool Status_Shutdown message to service too early
* CONTRAST-10867: HTTPOnly false positive when multiple cookies present
* CONTRAST-10866: Anti-Clickjacking false positive against static resources
* CONTRAST-10792: .NET Agent FP on data flow through Try* control/validator methods

## NodeJS Agent
* CONTRAST-10846: node agent line of code count
* CONTRAST-9908: Sails - HTTP Dataflow Scoping
* CONTRAST-9907: Sails - Header Rules
* CONTRAST-9906: Sails - Sessions
* CONTRAST-10910: agent event handlers should run asynchronously
* CONTRAST-9505: Node agents should use daily log rotation by default
* CONTRAST-11282: servername only works from cli and not contrast.json
* CONTRAST-10891: node agent will still try to report libraries when it can't find a name, author, or version

## TeamServer
* CONTRAST-11177: What's New and Quick Tips
* CONTRAST-10863: Global Update to Role Formatting
* CONTRAST-8846: Support for SAML (Single Sign-On)
* CONTRAST-10767: Add Discussion section to Attack Overview Page
* CONTRAST-10743: Auto Licensing Support
* CONTRAST-10435: Update Remediation Policy Email/Notification to Include Policy Name
* CONTRAST-9480: Link to Expiring App Filter from SuperAdmin Organizations Page
* CONTRAST-11205: Allow Multi-Select for Applications (Create/Edit Group) in SA Portal
* CONTRAST-10440: Update Summary Title Sent to JIRA from Contrast (Bugtracker)
* CONTRAST-10249: Allow superadmin to change user's "predefined" role
* CONTRAST-9575: Allow Multi-Select for Applications (Create/Edit Group) in Org Portal
* CONTRAST-9368: Give admin Protect access when creating a new Protect-enabled organization
* CONTRAST-9132: In App Overview, indicate when you have servers but they have assess off
* CONTRAST-7970: Clean-up & Standardize Date Control
* CONTRAST-7850: Styling Revisions for Custom Notification Dialog Fields
* CONTRAST-7463: Add Access Group Assignment to Create User Dialog
* CONTRAST-6426: Add Filter Button on Users page (for SuperAdmin)
* CONTRAST-9785: Optimize BirtService queries
* CONTRAST-11155: SQL Injection false negative
* CONTRAST-11196: URLs length is bigger than DB allowed length
* CONTRAST-10686: ServerStart and ServerActivity not filtering validators and sanitizers by agent language
* CONTRAST-10845: 403 Page for Application Exclusions
* CONTRAST-10817: Error processing prevent_hash_collision trigger
* CONTRAST-10816: Remediation Policy notifications are not being created
* CONTRAST-10047: Most Recently Monitored Activity displays latest activity then auto-refreshes and disappears
* CONTRAST-9788: Deleting orgs from SuperAdmin times out, does not remove org

## Database Migrations
* V3_3_4_000: auto license preferences
* V3_3_4_001: fix attack snapshots
* V3_3_4_002: purge urlentries by lasttimeseen
* V3_3_4_003: add onboarding tables
* V3_3_4_004: disable regex dos
* V3_3_4_005: update urlentries model
* V3_3_4_006: license cleanup

## GitHub:
* Ticketbook Java Application: https://github.com/Contrast-Security-OSS/ticketbook
* NodeJS Sails Application: https://github.com/Contrast-Security-OSS/SailsTestBench
* Java SDK Updates: https://github.com/Contrast-Security-OSS/contrast-sdk-java

## OpenDocs:
* Configuring Single Sign-On: https://docs.contrastsecurity.com/admin_tsconfig.html#sso
* Installing on Axis: https://docs.contrastsecurity.com/user_javainstall.html#axis2
