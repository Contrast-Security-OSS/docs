<!--
title: "Contrast 3.2.9 - June 2016"
description: "Contrast 3.2.9 June 2016"
tags: "3.2.9 June Release Notes"
-->

## Java Agent
* CONTRAST-4008: Improve taint tracking in deep propagation
* CONTRAST-7996: Add support for custom WebLogic 12 class loader
* CONTRAST-8096: Add system property to load custom rules JAR
* CONTRAST-8152: Save key used in map-based source events
* CONTRAST-8355: Honor 412 status code to stop agent reporting
* CONTRAST-8362: Improve support for *javax.xml.parsers.DocumentBuilder* propagation
* CONTRAST-8515: Improve support for Jackson 
* CONTRAST-8575: Improve support for bootstrapping IBM J9 classes outside of *rt.jar*
* CONTRAST-8604: Improve *BufferedTransferEncodingRule* blocking
* CONTRAST-8649: Expand scope of *contrast.noteamserver.enable* flag to all communication
* CONTRAST-8673: Improve RASP mode path traversal detection
* CONTRAST-8685: Improve FeatureSet parsing to ensure valid sampling values
* CONTRAST-8688: Improve RASP mode detection by filtering out empty values
* CONTRAST-8692: Set JavaAgent threads to daemon mode
* CONTRAST-8700: Improve support for non-standared Karaf installations
* CONTRAST-8737: Improve RASP mode XStream based untrusted deserialization detection
* CONTRAST-8746: Improve RASP mode error handling during input analysis 
* CONTRAST-8762: Improve RASP mode query string analysis to avoid extra reporting when resolved as parameters
* CONTRAST-8854: Improve detection of SQLServer database connections
* CONTRAST-8897: Add support for vulnerability type specific Level 1 rules
* CONTRAST-8954: Improve String cloning to handle empty Strings and StringBuilders


## .Net Agent
* CONTRAST-8086: Support for Inventory Mode
* CONTRAST-8187: .NET Agent should collect MVC action name for request-validation-disabled findings
* CONTRAST-8456: .NET Agent profiler logs not being deleted (keeping more than the limit)
* CONTRAST-8581: Contrast .NET can break applications running under specific Windows users with limited permissions
* CONTRAST-8582: .NET Agent can break Cassette asset bundling
* CONTRAST-8646: Error rendering StoredXSS in TeamServer received from .NET agent
* CONTRAST-8648: Contrast Causing Outage in CRM 2015
* CONTRAST-8650: XSS False Positive sourced by HttpClient Parsing .NET Web API Response
* CONTRAST-8698: .NET Agent causing SQL Connectivity issues / EF problems
* CONTRAST-8699: Stored-XSS False Positives in ELT
* CONTRAST-8730: Contrast .NET breaks redirect from "/" to default document under Classic Pipeline Mode
* CONTRAST-8734: Arbitrary Transfer Should Not Trigger If Taint Is At The End Of The Request
* CONTRAST-8772: Exception during .NET processing level one rules can cause service startup to fail
* CONTRAST-8789: IIS Express Dialog validation
* CONTRAST-8844: Run Stored-XSS only for EntityFramework
* CONTRAST-8950: NullReferenceException in AspnetPlugin.Init and AssociateWithCurrentThread
* CONTRAST-8979: .NET Agent can cause application to fail to start when clearing old log files


## NodeJS Agent
* CONTRAST-8641: Hardcoded password/key rules double reporting in some cases
* CONTRAST-8720: Node Agent causing IPC issues in cluster module
* CONTRAST-8742: Node: fs methods crash with tainted 'path'
* CONTRAST-8965: CLI displays incorrect usage instruction
* CONTRAST-8966: Node agent complaining that *./bin/package.json* doesn't exist
* CONTRAST-8968: Child process from cluster crashing with 'cannot read tainted of undefined'
* CONTRAST-8977: NodeJS: shebang causing rewrite/parse error
* CONTRAST-8978: NodeJS: *net.Socket.write* core overload to prevent TypeErrors


## TeamServer
* CONTRAST-8837: Change required field settings in application settings API
* CONTRAST-8941: TraceValidationHelper rejecting module names with - in the name
* CONTRAST-6745: Simplified Level 1 Rules and Configuration
* CONTRAST-6952: Update Vulnerabilities Filters to Behave & Look Like the Others
* CONTRAST-7681: Add Confirmation When Merging Vulns
* CONTRAST-7709: Add Ability to See/Search Child Apps on Applications Page
* CONTRAST-7842: Still Showing Emails in Users Column of Custom Notifications
* CONTRAST-8019: Add Commenting Functionality to Vulnerability Status Marking
* CONTRAST-8177: Vulnerability Count for Paging Changes
* CONTRAST-8201: Centralized Licensing Management
* CONTRAST-8372: TeamServer reports wrong number of lines of custom code
* CONTRAST-8381: CVE-2014-0114 is for Struts, not Struts2
* CONTRAST-8424: Session Timeout rule is throwing an exception
* CONTRAST-8470: "Apply License" Missing from App Row Menu
* CONTRAST-8499: Update Vulnerability/CVE Display in Library Details (Unity)
* CONTRAST-8502: Merge traces feature must validate that all selected traces are from same rule type
* CONTRAST-8508: Vulnerability "Send To" Dialogs Need Rework
* CONTRAST-8510: Total Vulnerabilities are not matching the filter count
* CONTRAST-8526: Update "Vulnerable" Icon in Activity Tab To Our Severity Badges
* CONTRAST-8562: Application Filter Count in Library and Server/Library is not enforcing EAC
* CONTRAST-8586: Licensing Capability for RASP
* CONTRAST-8667: Open New Browser Tab When Executing "Replay Request"
* CONTRAST-8690: Add 'last_reset' date to applications table
* CONTRAST-8695: When Part of Multiple Orgs, Can't Switch Between Them
* CONTRAST-8701: User with View Permission Should Not Be Able to Download/On-Board
* CONTRAST-8703: "Defense" Needs to Read "Protection" on the Apps Main Page with RASP
* CONTRAST-8704: Menu Highlight Inconsistency on Vuln Details Pg
* CONTRAST-8705: Tooltip Constrained to Column Width on Library Details Pg
* CONTRAST-8753: Externalize the properties in *ContrastEhcacheStatic.xml*
* CONTRAST-8835: 403 error loading trace details when org has no enterprise licenses
* CONTRAST-8981: Revisions to Child Apps Display


## Database Migrations
* V3_2_9_000: Update rasp rule names
* V3_2_9_001: Add JMS Channel Security Control
* V3_2_9_001: Update Protection Rule Exception Model
* V3_2_9_002: Add Static EHCache Properties
* V3_2_9_002: Trace Notes Status
* V3_2_9_003: Organizations Drop Protection Allow Override 
* V3_2_9_003: Invalidate Static Caches
* V3_2_9_004: Trace event add Fieldname
* V3_2_9_005: Possible Sanitizers Validators 
* V3_2_9_006: Updated application dates
* V3_2_9_007: Add name sanitizer validator
* V3_2_9_008: Rasp protection license model
* V3_2_9_009: Update app license model
* V3_2_9_010: Disable protection unlicensed servers
* V3_2_9_011: Refactor trace notes status
* V3_2_9_012: Add vulnerability rule field to security controls


## GitHub
* Contrast Jenkins Plugin: https://github.com/Contrast-Security-OSS/contrast-jenkins-plugin
* Contrast Maven Plugin: https://github.com/Contrast-Security-OSS/contrast-maven-plugin
* Contrast Gradle Plugin: https://github.com/Contrast-Security-OSS/contrast-gradle-plugin
* Sample Gradle Application: https://github.com/Contrast-Security-OSS/Contrast-Sample-Gradle-Application
* Gradle Based Web App Onboarding With Vagrant: https://github.com/Contrast-Security-OSS/contrast-vagrant-project


## OpenDocs
* [ActiveMQ Disk Full](troubleshooting-setupinstallation.html#activemq)
* [Java Agent Supported Technologies](installation-java.html#java-supported)
* [.Net Supported Technologies](installation-net.html#net-supported)
* [NodeJS Supported Technologies](installation-node.html#node-supported)
