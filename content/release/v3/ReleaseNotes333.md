<!--
title: "Contrast 3.3.3 - October 2016"
description: "Contrast 3.3.3 October 2016"
tags: "3.3.3 October Release Notes"
-->

## Java Agent
* CONTRAST-9929: Add support for Axis2 Server
* CONTRAST-10061: Improve MongoDB instrumentation
* CONTRAST-10099: Improve Padding Oracle attack detection
* CONTRAST-10266: Improve attack detection in non-standard deserialization 
* CONTRAST-10309: Improve the Java Settings Documentation for the setting contrast.classpath.libs
* CONTRAST-10322: Improve deadzoning to speed defend mode analysis and reduce memory impact 
* CONTRAST-10328: Java Library/CVE Research and Mapping for October Release
* CONTRAST-10332: Include "X-Contrast-Agent" header in all the requests sent to the TeamServer
* CONTRAST-10354: Filter out vulnerabilities reported in third-party software
* CONTRAST-10437: Ensure underlying JSON writer is emptied before next object is serialized 
* CONTRAST-10474: Tune HardcodedPassword Rule
* CONTRAST-10478: Improve performance of vulnerability lifecycle management and tracing
* CONTRAST-10713: Ensure no duplicate vulnerabilities in one preflight message

## .Net Agent
* CONTRAST-10327: .Net Library/CVE Research and Mapping for October Release
* CONTRAST-10235: Add config option to .net agent to specify TLS version to use
* CONTRAST-10333: Include "X-Contrast-Agent" header in all the requests sent to the TeamServer

## NodeJS Agent
* CONTRAST-9909: RethinkDB Support
* CONTRAST-10076: Resolved Argument Parsing Bugs
* CONTRAST-10326: NodeJS Library/CVE Research and Mapping for October Release
* CONTRAST-10334: Include "X-Contrast-Agent" header in all the requests sent to the TeamServer
* CONTRAST-10473: Node agent htmlUtil incorrectly retrieving elements
* CONTRAST-10489: Resolved duplicates in preflight messages
* CONTRAST-7507: Remediation advice for header-injection


## TeamServer
* CONTRAST-7808: Incorrect CVE to Library Mappings
* CONTRAST-7964: Search Last and First Detected
* CONTRAST-9489: Capture the Stack Trace of An Issue for Download from the UI
* CONTRAST-9524: Implement Universal Search in Banner - SuperAdmin
* CONTRAST-9613: Missing Attacker and Application Info When Being Attacked (Threats Overview)
* CONTRAST-9749: In the applications page, resets to 'all' apps are not applied to apps not scrolled to in infinite scroll
* CONTRAST-9756: "Manage Notifications" Is in Wrong Place (Integrations)
* CONTRAST-9773: Show JIRA error messages
* CONTRAST-9783: Eliminate Deadlocks Everywhere...Oh Yeah!
* CONTRAST-9792: Manage servo.log with log4j
* CONTRAST-10016: Malformed App Activity report
* CONTRAST-10021: TeamServer SMTP notification error filling up logs
* CONTRAST-10056: EOP makes outbound connection attempts to https://dev-139023.oktapreview.com
* CONTRAST-10180: Address Data Retention for Attacks and Events
* CONTRAST-10193: Configure URLValidator to Accept Local URLs
* CONTRAST-10229: NonUniqueResultException processing path-traversal vulns again
* CONTRAST-10250: Select existing user as admin for new organization
* CONTRAST-10256: Can't select individual applications when creating virtual patch
* CONTRAST-10300: Rework For User's Permissions Pg (Your Account > Permissions)
* CONTRAST-10301: Getting notifications for attacks that do not exist
* CONTRAST-10408: Unable to process LDAP urls
* CONTRAST-10421: RASP attacks and events not displayed
* CONTRAST-10422: Cache Busting is Busted
* CONTRAST-10439: Delete RASP attacks with no events
* CONTRAST-10724: Allow Time Filtering on Attacks/Attack Events Grids
* CONTRAST-10755: Include expired license packs on license revoke
* CONTRAST-10778: Invalid character(s) in library manifest

## Database Migrations
* V3_3_3_000: remove attack notifications from suppressed attacks
* V3_3_3_001: remove hubspot field from user
* V3_3_3_002: add primary key to saml
* V3_3_3_003: remove attack limit preference
* V3_3_3_004: remove org fk to login activity
* V3_3_3_005: purge rasp_data_sp
* V3_3_3_006: purge rasp_aggs_sp
* V3_3_3_007: create retention policy model
* V3_3_3_008: remove_aggs_sp
* V3_3_3_009: remove_aggs_tables
* V3_3_3_010: remove unknown ldap components
* V3_3_3_011: delete zero events attacks
* V3_3_3_012: clean trace duplicate hashes
* V3_3_3_013: Sanitize Trace Duplicate Hashes Table
* V3_3_3_014: refactor trace duplicate hashes
* V3_3_3_015: fix message text error on duplicate trace
* V3_3_3_016: saml properties and table revisions

## GitHub
* Java SDK Updates: https://github.com/Contrast-Security-OSS/contrast-sdk-java
* NodeTestBench Updates: https://github.com/Contrast-Security-OSS/NodeTestBench


## OpenDocs
* Configuring the JRE: https://docs.contrastsecurity.com/admin_tsconfig.html#jre
* MySQL Logging: https://docs.contrastsecurity.com/admin_tsfaq.html#mysqllog
* Installing on Axis2: https://docs.contrastsecurity.com/user_javainstall.html#axis2
