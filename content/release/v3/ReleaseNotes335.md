<!--
title: "Contrast 3.3.5 - Decemer 2016"
description: "Contrast 3.3.5 December  2016"
tags: "3.3.5 December Release Notes"
-->

*Please Note*: Contrast now offers protect for .Net applications. See https://www.contrastsecurity.com/security-influencers/contrast-security-makes-.net-applications-self-defending

## Java Agent
* CONTRAST-10954:	Add minimum supported JRockit version details to OpenDocs Supported Technologies page
* CONTRAST-11584:	Add simple timing to java-agent-memory-test
* CONTRAST-11387:	Investigate Dropwizard HTTP controller conflict
* CONTRAST-11344:	SourceController incorrectly assumes that the ret is the target
* CONTRAST-11339:	Enable Java Screener to run with an external TeamServer
* CONTRAST-11221:	Add build numbers to report headers
* CONTRAST-11220:	Add request count to AppActivity
* CONTRAST-2910: Need crossdomain.xml security check
* CONTRAST-11527:	Survive startup without TeamServer
* CONTRAST-10919:	User Attribution to attack event data - agent work
* CONTRAST-11291:	Update cached Spring library
* CONTRAST-11681:	Reduce startup penalty
* CONTRAST-11565:	Add Application-Version to preflight
* CONTRAST-7305: JarAnalyzer should cache and not explode
* CONTRAST-10920:	User Attribution to attack event data - TeamServer work
* CONTRAST-11448:	Tag ranges off on *2O propagation
* CONTRAST-11419:	Hierarchy exception seen in log (Windows)
* CONTRAST-11330:	Addressed a few reported false positives

## .Net Agent
* CONTRAST-11502:	.Net Library/CVE Research and Mapping for December Release
* CONTRAST-11523:	Fix Cookie parameter parsing in RASP
* CONTRAST-11458:	Rasp - verify querystring parameter in sql-injection
* CONTRAST-11446:	Propagate application defend setting updates from TeamServer to RASP
* CONTRAST-11421:	Rasp Stack traces
* CONTRAST-11251:	Port RASP HeaderValidators
* CONTRAST-11138:	Pass ApplicationDefend settings from service to sensors
* CONTRAST-11105:	Port AnalysisCache
* CONTRAST-11065:	Block/disable/monitor rasp rules based on TS defend settings
* CONTRAST-11064:	Implement RASP sample recording
* CONTRAST-10297:	Add integration test for RASP SQLi for MS SQL only
* CONTRAST-10295:	Implement reporting (pipe msg) of RASP events from sensors to service
* CONTRAST-10293:	Implement SQLi RASP rule input evaluation
* CONTRAST-8939:	.NET RASP IP Management 
* CONTRAST-8938:	.NET RASP XSS Rule
* CONTRAST-11121:	Activity Tab rendering incompletely
* CONTRAST-9955:	Process start notifications instead of AppInit to Load Monitor
* CONTRAST-11438:	Disable Inlining in Monitor for 4.5.2
* CONTRAST-11140:	Sign The ContrastMonitor Dlls In Jenkins
* CONTRAST-11676:	Multiple Apps In CPM AppDomain Throws An Exception
* CONTRAST-11581:	Screener fails since 3.3.4 with NRE in RaspManager
* CONTRAST-11576:	NRE in AspnetPlugin causing App Crash
* CONTRAST-11158:	Contrast Monitor Throws Stack Overflow Exception On CLR 4.5.2

## NodeJS Agent
* CONTRAST-8087:	NodeJS Support for Inventory Mode
* CONTRAST-7225:	Fix tests for appactivity to use new object format
* CONTRAST-11289:	Node Sails Screener
* CONTRAST-11447:	Crash From Streams with Tainted Data
* CONTRAST-11076:	Failing Rewrites
* CONTRAST-11070:	Node Agent Auto Update
* CONTRAST-11635:	Node-Contrast requires a vulnerable version of minimatch
* CONTRAST-10483:	NodeJS - Agent Should Stop Sending Requests if TeamServer Responds with 401
* CONTRAST-9668:	node: implement deadzoning for certain modules
* CONTRAST-9144:	Node Agent should stop sending activity if TeamServer returns 409
* CONTRAST-8357:	Honor 412 status code to stop agent activity (Node)
* CONTRAST-11630:	Error: Cannot find module './HTTPClient.js'
* CONTRAST-11618:	object traversal in propagation never resolving objects
* CONTRAST-11461:	node agent not sending up correct manifest information
* CONTRAST-11380:	Node Agent Download - Generate Config File

## TeamServer
* CONTRAST-11600:	Attack Monitor Search Input Truncates
* CONTRAST-11358:	Attack Monitor Search Typeahead Endpoint
* CONTRAST-11352:	Attack Monitor Timeline Endpoint
* CONTRAST-11033:	Target Applications Endpoint
* CONTRAST-11031:	Attack Events Breakdown Endpoint
* CONTRAST-11027:	Attackers API Updates
* CONTRAST-10711:	Track/Store Volume of Traffic
* CONTRAST-10746:	Attack Monitor Widget Interaction
* CONTRAST-10745:	Monitor Views & Filtering
* CONTRAST-10742:	No Attacks View
* CONTRAST-10728:	Target Applications Widget
* CONTRAST-10727:	Attack Events Widget
* CONTRAST-10725:	Attackers Widget
* CONTRAST-11668:	Attack Monitor Count Links Inconsistent
* CONTRAST-11599:	Attack Monitor Header Count Links
* CONTRAST-11494:	Update Attack Stats to include Requests per Second
* CONTRAST-11493:	Add Rule Id to filter for attack monitor endpoints
* CONTRAST-11413:	Rework Attack Monitor Logic With Updated Statuses
* CONTRAST-11377:	Added Severity column to Attack
* CONTRAST-10710:	Current Status Badge
* CONTRAST-10709:	New Attacks Page Sub-Navigation Style
* CONTRAST-11362:	Attackers API Revisions
* CONTRAST-8806:	Allow Users to Set up BugTrackers From Send To Action
* CONTRAST-11420:	Playful Discussion messages should not be appearing
* CONTRAST-10459:	Vulnerability Trend - Dashboard Mini Chart
* CONTRAST-11593:	Add child icon to dropdown pill
* CONTRAST-9574:	Master App as Exception Should Provide Role to all Child Apps
* CONTRAST-10979:	EOP Installer: Implement moving to Java 1.8
* CONTRAST-11575:	Wrong Font Size for Libraries with Violations
* CONTRAST-11086:	Missing Question Mark in Delete Users Confirmation Dialog
* CONTRAST-11229:	Attack Monitor Support
* CONTRAST-10986:	Implement New Attack Details Page - Discussion Tab
* CONTRAST-11274:	Remove unnecessary scrollbar in Onboarding page
* CONTRAST-11561:	Change "Confirmed Remediated" Label to "Fixed" for Mark As Options
* CONTRAST-11504:	What's New and QuickTips: Ensure Engineering and Product Complete Documentation and Commit for 3.3.5
* CONTRAST-11497:	Tweak vuln trend chart so it displays nicely in the "mini" mode
* CONTRAST-11379:	Revisions to Node Agent Download Workflow
* CONTRAST-11371:	Add November artifacts to Cache
* CONTRAST-11337:	Add empty 3.3.5 version to Onboarding artifact
* CONTRAST-11332:	Make background task to eliminate FPs
* CONTRAST-11301:	Remove Colons From Labels on Vuln Details > Notes Tab
* CONTRAST-10476:	Simplify Attack Status/Result Values
* CONTRAST-11376:	Accept and display build tags passed from agent system property
* CONTRAST-7965:	UI: Present Option in Date Control to Select Last or First Detected (Vulns Only)
* CONTRAST-2910:	Need crossdomain.xml security check
* CONTRAST-11597:	Implement a PropagationEventContext (or CodeEventContext or SnapShotContext?)
* CONTRAST-11470:	Protection Policy should only show rules applicable to the server language 
* CONTRAST-11429:	Library Score Calculation Incorrect
* CONTRAST-11426:	Position vuln trend chart swap icon correctly
* CONTRAST-11331:	Allow .NET servers to enabled protection mode
* CONTRAST-11214:	Add a Tooltip to the Timeline on Attack Details
* CONTRAST-10864:	SAML: Wrong error when attempting to use SSO on a Saas Org with no configuration
* CONTRAST-10303:	Add creation time field to servers
* CONTRAST-10074:	Add "Confirmed Remediated" vulnerability status
* CONTRAST-9658:	Applications Page vulnerability column should reflect open vulns only
* CONTRAST-9491:	Replace AttackID with UUID value
* CONTRAST-11691:	Attack Duration Appears to be Inaccurate (Attack Details)
* CONTRAST-11651:	Onboarding Content Error If Version Equal to Previous Version
* CONTRAST-11643:	Error when trying to store DB somewhere other than the default dir
* CONTRAST-11615:	Export to XML or CSV requires edit access
* CONTRAST-11603:	Wrong Login Error for EOP with SSO Enabled
* CONTRAST-11602:	ClusteredTime error in the attack graph
* CONTRAST-11582:	Vulnerability Trend is not displaying all the status in Total mode
* CONTRAST-11580:	Fix/Remove invalid artifacts entries
* CONTRAST-11574:	No default org error when attempting login by user created in admin portal
* CONTRAST-11496:	App Fully Delete Broken in UI
* CONTRAST-11483:	Hub -TeamServer integration failing
* CONTRAST-11462:	SuperAdmin settings preferences button missing text
* CONTRAST-11455:	Advanced Filter Issue Counts Incorrect on RASP Attacks Drill Down Page
* CONTRAST-11451:	Error executing POPULATE-LIBRARY-CACHE task
* CONTRAST-11430:	NPE in lib update
* CONTRAST-11428:	Refactor FS migration script to enable SAML by default
* CONTRAST-11418:	Protection Toggle Disabled At All Times on Server Details
* CONTRAST-11416:	NPE when viewing attacks without events
* CONTRAST-11412:	Library update isn't working in TeamServer
* CONTRAST-11411:	NPE processing app activity
* CONTRAST-11386:	SSO - 405 Method Not Allowed 
* CONTRAST-11384:	Protection notifications are sent to all users
* CONTRAST-11372:	Wrong IP Address Displayed in App > Attacks Tab
* CONTRAST-11361:	SSO Config Panel "Close" Button Not Operable
* CONTRAST-11360:	SSO Quick Tip Moves Below Content When Scrolling
* CONTRAST-11350:	User should be part of the organization when it is created in the org portal
* CONTRAST-11335:	server activity response is always being sent to agent regardless of last update time
* CONTRAST-11312:	Dashboard Score Calculation Incorrect 
* CONTRAST-11256:	Update build - extract angular-ui-bootstrap from minified ui.js
* CONTRAST-11255:	Organization License Summary Counts Are Incorrect
* CONTRAST-11252:	teamserver deadlock during node screener run
* CONTRAST-11246:	403 error, Policy Management > Application Exclusions when organization has RASP/protection disabled
* CONTRAST-11146:	Wrong License Counts For SuperAdmin
* CONTRAST-11119:	HTML Injection in dropdowns components
* CONTRAST-11038:	Login page inline messages not displaying on prod (only icon is shown)
* CONTRAST-10971:	TS - Bugzilla connection error - Expected methodResponse element, got html
* CONTRAST-10913:	If all apps are archived, the getting started page is displayed, but cannot unarchive apps
* CONTRAST-10892:	Unable to Archive Applications in Bulk
* CONTRAST-9882:	Generic Webhook form is not aligned to form title

## Database Migrations
* V3_3_5_000: Create rasp attacks notes
* V3_3_5_001: Remove Duplicate Status
* V3_3_5_002: Refactor attack status
* V3_3_5_003: Update trace status
* V3_3_5_004: Protection rules by language
* V3_3_5_005: Add creation language fields server
* V3_3_5_006: Add severity to attack
* V3_3_5_007: Create rasp application request activity
* V3_3_5_008: Libraries refactor


## GitHub:
* Updates to NodeTestBench: https://github.com/Contrast-Security-OSS/NodeTestBench
* Updates to SheepDog: https://github.com/Contrast-Security-OSS/sheepdog

## OpenDocs:
* Support Technologies: https://docs.contrastsecurity.com/user_javagetstart.html#support
