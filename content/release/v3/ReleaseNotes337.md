<!--
title: "Contrast 3.3.7 - February 2017"
description: "Contrast 3.3.7 February 2017"
tags: "3.3.7 February Release Notes"
-->

###############################################################################
# Contrast 3.3.7 - February 2016
###############################################################################

## Java Agent
* CONTRAST-12179	Default agent configuration when TeamServer in unavailable
* CONTRAST-10839	Create RASP rule for Struts2 / CVE-2016-4438
* CONTRAST-10818	Add UDP syslog functionality
* CONTRAST-12409	NPE in Java Agent
* CONTRAST-12338	Support json_string escape builtin in freemarker
* CONTRAST-12281	Prevent interning issues in Hibernate
* CONTRAST-12013	Improve dynamic instrumentation
* CONTRAST-11952	Improved SQL injection defenses when using Hibernate transformations
* CONTRAST-11896	What happened to Application name for my agents?
* CONTRAST-11597	Implement a PropagationEventContext (or CodeEventContext or SnapShotContext?)
* CONTRAST-12390	Error parsing dropwizard pom.properties
* CONTRAST-12383	NPE in Grails parameter check creates logspam
* CONTRAST-12330	Require volume of BadPaddingExceptions before reporting Padding Oracle attack
* CONTRAST-12172	Padding oracle attack exceptions
* CONTRAST-10926	Don't report unexploitable issues resulting from header names
* CONTRAST-12416	Use single timestamp when sending attack data


## .NET Agent
* CONTRAST-12596	.NET Agent should log request body on TeamServer communication errrors
* CONTRAST-12595	DotnetAgentService.exe.log should log monitor mode, server name, received TS settings on service start
* CONTRAST-12517	.NET Agent should adjust offset calculation to account for CRLF in Protect 
* CONTRAST-10296	Implement .NET Protect Screener for SQLi
* CONTRAST-12594	SQLi FP for System.Guid.TryParseGuid in Monitor mode
* CONTRAST-12188	Symantec anti-virus flagging DotnetAgentHttpModule4.dll as a threat
* CONTRAST-12690	.NET Agent should remove its dynamic names in from stack traces sent to TeamServer
* CONTRAST-11392	.NET Agent Should Send analyzed request metrics to TeamServer
* CONTRAST-12599	.NET Agent Profiler/Monitor can generate bad XML for assemblies sent to service
* CONTRAST-12537	.NET Agent should not check for other profilers at startup if using monitor 
* CONTRAST-12515	.NET Agent AutoUpdate Failing with \\ in Path
* CONTRAST-12440	.NET Agent is not sending AppActivity in profiler mode
* CONTRAST-12414	.NET Agent reports duplicate attack events with blockedAtPerimeter mode 
* CONTRAST-12407	.NET Agent reporting cache-controls-missing and clickjacking against static resources and duplicating results for URLs with numeric IDs
* CONTRAST-12387	.NET Agent Whitelist Broken under monitor mode 
* CONTRAST-12327	.NET Agent Monitor Crashes Process On Managed 500 In MS WingTips
* CONTRAST-12255	.NET Agent should check if XMLResolver is null for certain XXE trigger methods
* CONTRAST-12255  .NET Agent should use xml-encoded tag for XmlConvert and XmlEncode control methods
* CONTRAST-12120	.NET Monitor Causes Process Crash on CreateAppDomain when App is Redeployed


## NodeJS Agent
* CONTRAST-11945	add config option for CAs so that users can point to custom certs
* CONTRAST-11076	Fix failing rewrites
* CONTRAST-12361	add config option for AppActivityPeriod
* CONTRAST-12546	fix crashing if error occurs before startup or update but after tsReporter.onboard is called
* CONTRAST-11987	fix for Object.create(null)

## TeamServer
* CONTRAST-12792	Create dedicated TTL for agent activity queue
* CONTRAST-12694	Remove FixTomcatStringCacheFalsePositives and FixOracleFalsePositives tasks
* CONTRAST-12606	.NET Agent Cannot Connect To TeamServer (unauthorized after a few hours)
* CONTRAST-12098	Flag/Mark Rules as Beta in UI
* CONTRAST-12093	Updates to Syslog
* CONTRAST-11830	Add Protection License Designation to Server Overview
* CONTRAST-11817	Styling Revisions for Attack Monitor Widgets
* CONTRAST-11815	Styling Revisions for Attack Monitor > No Attacks
* CONTRAST-11492	Revised Optional TSV Onboarding
* CONTRAST-10819	Reports Page > Vuln Trend PDF Export Capability
* CONTRAST-12688	UI - Add Export Capability for Library Details to Library Pages
* CONTRAST-12426	Bubble Up UI Errors For SA Node Restriction
* CONTRAST-11123	Add Export Capability for Library Details to Library Pages
* CONTRAST-10992	First Application Onboard Congrats Dialog
* CONTRAST-10775	UI: Present Option in Date Control to Select Start or End Date (Attacks Only)
* CONTRAST-12335	Application Library - CVE hover link doesn't work
* CONTRAST-12635	Split vulnerability trend applications dropdown by license
* CONTRAST-12633	Implement JMS Queue > Map > DB approach for Urls and Agent Stats processing
* CONTRAST-12632	Remove triggered field from LogEnhacers and IPBlacklists tables
* CONTRAST-12631	Change JMS concurrency to 1 for appactivity elements queue
* CONTRAST-12630	Split app activity items into their own JMS queue
* CONTRAST-12506	SAML Metadata Config Url
* CONTRAST-12499	Update "Monitored Apps" Section on No Attacks View
* CONTRAST-12482	Allow TeamServer to skip app activity reports from Trial apps
* CONTRAST-12481	Refactor URLEntry workflow
* CONTRAST-12474	Maximum Session Timeout is Honored
* CONTRAST-12396	Switch Focus to Password On New SSO Login
* CONTRAST-12278	Set Hipchat webhook notification dynamically based on type
* CONTRAST-12243	Move "Fail Libraries in Violation of Policy" Checkbox
* CONTRAST-12176	Remove duplicated elements from AppUpdate/AppActivity report (libraries, technologies, components, urls) before processing the report
* CONTRAST-12164	Attack Monitor Drilldown Filters (Eliminate Probed Accordingly)
* CONTRAST-12147	New User Wizard After Registration Email
* CONTRAST-12133	Include Link to Vulnerablity Trend From an Application
* CONTRAST-12127	TeamServer Node Agent Configuration File Name
* CONTRAST-11960	Expose Y-Axis for Vulnerability Trend Parent Chart
* CONTRAST-11912	Only Show Master Apps & Licensed Apps on Vuln Trend Filter
* CONTRAST-11857	Redirect User to Login Page When Session Expires
* CONTRAST-11816	Node Agent Onboarding Improvements
* CONTRAST-11743	Attacks Monitor, multiselect filter is cleared out on server environment change
* CONTRAST-11709	Add Unmerge Capability on Apps Grid/App Modules Dialog
* CONTRAST-11693	Poll Attack Monitor Stats And Data
* CONTRAST-11108	List Servers on the Library Details Page
* CONTRAST-9560	Allow Tagging of Attacks and Events
* CONTRAST-8861	Libraries Tab Within an App Should Bump Up
* CONTRAST-12776	Access denied occurring on main dash after login, no obvious pattern
* CONTRAST-12701	Some email clients show a very Contrast logo in the notification email
* CONTRAST-12554	Improve PurgeTraceFalsePositives performance
* CONTRAST-12413	SAML: User not found not being redirected based on Org Settings
* CONTRAST-12405	Org admin user unable to change permissions of org user
* CONTRAST-12125	NPE when user login for the first time in AD/LDAP with a bad configuration
* CONTRAST-12060	Report displaying incorrect information
* CONTRAST-11983	NPE loading trace HTTP details 
* CONTRAST-11973	Unable to merge vulns within a merged app

## Database Migrations
* V3_3_7_000: multi-app bugtracker configurations
* V3_3_7_001: ruby xss protection rule
* V3_3_7_002: fix invalid agent versions
* V3_3_7_003: add unique helper trace data
* V3_3_7_004: create email domain table
* V3_3_7_005: add cve 2016 4438 
* V3_3_7_006: Update XContentType Titles
* V3_3_7_007: update xcontenttype rule
* V3_3_7_008: add auto increment email domain table
* V3_3_7_009: create tags attacks
* V3_3_7_010: update url entry model
* V3_3_7_011: remove fp stored procedure
* V3_3_7_012: update ipblacklist logenhancers model
* V3_3_7_013: update org log enhancer trigger
* V3_3_7_014: update trace fp sp


## GitHub:
* Updates to Sheepdog: https://github.com/Contrast-Security-OSS/sheepdog
* Updates to NodeTest Bench: https://github.com/Contrast-Security-OSS/NodeTestBench
* Updates to .NET SDK: https://github.com/Contrast-Security-OSS/contrast-sdk-dotnet
* Contrast Pivotal Tile: https://github.com/Contrast-Security-OSS/contrast-pivotal-tile
* Cloud Foundry Java Build Pack: https://github.com/Contrast-Security-OSS/java-buildpack
* Cloud Foundry Service Broker: https://github.com/Contrast-Security-OSS/contrast-service-broker


## OpenDocs:
* Using Assess and Protect Exclusions: https://docs.contrastsecurity.com/user_tsguideapp.html#exclusions
* Working with Cloud Foundry and Pivotal: https://docs.contrastsecurity.com/user_javainstall.html#cloud
