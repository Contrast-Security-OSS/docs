<!--
title: "Contrast 3.3.8 - March 2017"
description: "Contrast 3.3.8 March 2017"
tags: "3.3.8 March Release Notes"
-->

## Java Agent
* CONTRAST-12871	CVE shield CVE-2017-5638
* CONTRAST-12852	Investigate WildFly support
* CONTRAST-13167	Enforce a maximum TTL on traces
* CONTRAST-12799	Translate existing stack-blacklist to deadzones
* CONTRAST-12583	Update Sources and Propagators to know what policy they came from
* CONTRAST-12431	Add Governor
* CONTRAST-12417	ProtectionRuleActivityDTM should have a top level start time
* CONTRAST-13006	Screener tests failing after adding expected exploit to tests
* CONTRAST-12786	RedefinedFunctionSearcher misses b/c of concatenation
* CONTRAST-12783	StyleUrlInjectionSearcher is making an extra string
* CONTRAST-12782	MapAccessSeracher has an unnecessary loop 
* CONTRAST-12780	IndexTokenizer.nextToken() needlessly checks currentPos
* CONTRAST-12550	Create timeline view in log analysis
* CONTRAST-12385	Numeric reporting mismatch on some traces
* CONTRAST-12046	Source incorrectly noted as Synapse request
* CONTRAST-11996	String concat tag range mixup
* CONTRAST-12880  Some virtual patches won't work
* CONTRAST-12730  Add BETA tag to CVE-2016-4438 Java Rule
* CONTRAST-11074  SSRF Rule False Positives
* CONTRAST-9618   Add support for RMI and RPC entry points

## .NET Agent
* CONTRAST-9242	Monitor-based Instrumentation Should Support Level One Rules
* CONTRAST-12999	Monitor Should be loaded by Kernel Driver on Windows 2008 R2 and Windows 7
* CONTRAST-12812	Installer fails when AppDynamics is installed.
* CONTRAST-12690	Vulnerability Event Stack Traces should not contain frames for Contrast code
* CONTRAST-12525	Improve Handling of Static Resources
* CONTRAST-12418	ProtectionRuleActivityDTM Should Have a Top Level Start Time
* CONTRAST-12155	Add Report Analysis to DVNR
* CONTRAST-13037	.NET Agent Should Use Custom App Name or Version Tag Even If App's AppSettings are Protected or in Child Config
* CONTRAST-12971	.NET Agent Should Not Report csc.exe or other .NET compilers as a Server
* CONTRAST-12898	Windows 2008 R2 Is Not Honoring Code-Signing With RequireSignedAppInit_DLLs Flag
* CONTRAST-12749	DynamicSensorAssembly_ Should Not Be Included in App Libraries
* CONTRAST-12600	.NET Agent Sensors Generating Invalid Protobuf Messages
* CONTRAST-12516	.NET Agent named pipe messages are failing and named pipe breaking under load 
* CONTRAST-12327	Monitor Crashes Process On Managed 500 In Misconfigured MS WingTips App

There are three important things to call out for the 3.3.8 release of the .NET Agent:
  1. **Windows Server 2008 R2 Patch Requirement**: The .NET Agent now requires that operating system has specific security patch that adds support for SHA-2 based code signing (https://www.microsoft.com/en-us/download/details.aspx?id=46148). The .NET Agent's Monitor-based instrumentation components are code signed using SHA-2 and therefore the agent now requires this capability. 
  2. **Versioning Change**: The next release of the .NET Agent will move to a new versioning scheme to address some limitations of installer technology. The agent currently uses four version numbers (e.g. 1.2.3.4) and will be moving to three version numbers (e.g. 1.2.3). The next release of the .NET Agent will be version 4.0.0.
  3. **CLR2 Assess Support**: The next release of the .NET Agent will change the default instrumentation engine to Monitor (rather the Profiler.) Any CLR2 applications will, by default, not be analyzed by Assess rules in the next release. Note that Protect rules currently only support CLR4 applications.


## NodeJS Agent
* CONTRAST-12659	Add Serialization Demo to NodeTestBench
* CONTRAST-12709	Added new Propagation Events for Better Data-flow analysis 
* CONTRAST-12707	Fix for hooks needed outside of request scope

## TeamServer
* CONTRAST-12688	Add Export Capability for Library Details to Library Pages
* CONTRAST-11608	Add New Option to Score Settings for "Ignore Library Scoring"
* CONTRAST-11607	Ability to Ignore Library Scoring in Overall Score
* CONTRAST-11169	Allow Configuration of Additional Fields in JIRA When Setting Up Integration
* CONTRAST-8660	Bamboo Plugin for TeamServer
* CONTRAST-7831	Add Ability to Change Severity of Individual Vulnerability
* CONTRAST-13004	Admin > Stats, Display queue size data in table format
* CONTRAST-12843	Access Group Confirmation For Multi-Org Users
* CONTRAST-12691	Do not send data to Live View if app is trial
* CONTRAST-12685	Reduce logging level for saml metadata exceptions
* CONTRAST-12675	Do Not Require Group for User Creation
* CONTRAST-12586	Add Filters to Vulnerability Trend Chart (Build, Tags, Compliance)
* CONTRAST-12475	Show me the number of online servers
* CONTRAST-12315	SuperAdmin > Users Styling Revisions
* CONTRAST-11398	Update SuperAdmin > Groups Page
* CONTRAST-11397	Update Org Settings > Groups Page
* CONTRAST-11297	Add Attacker User Agent info to notes section
* CONTRAST-9984	Delete Libraries
* CONTRAST-7340	Tag libraries endpoint should allow for "tagging all"
* CONTRAST-13146	Disable user editing capabilities for SystemAdmins
* CONTRAST-13101	Filters not reset after removing a tag (which is selected)
* CONTRAST-13086	Server Overview Protection Toggle Not Working
* CONTRAST-13052	Server Properties Returning null for Node and Ruby
* CONTRAST-12938	Unable to send to bugtracker from Vulnerabilities page
* CONTRAST-12927	Main navbar vulns icon is too high
* CONTRAST-12916	Admin User page. Don't show all the orgs if the system admin/observer
* CONTRAST-12836	Unable to Quick License an Application from Overview Page
* CONTRAST-12834	Don't Allow Selection of Org Role That Will Never Be Saved (Due to Mutli-Org Collisions)
* CONTRAST-12833	Only Allow Selection of One Default Group
* CONTRAST-12826	Tell agents about changes to server configuration
* CONTRAST-12806	Cannot edit Org role in Admin Portal Org Group
* CONTRAST-12701	Some email clients show a very Contrast logo in the notification email
* CONTRAST-12697	Attack filter on "environment" doesn't carry over into attack events
* CONTRAST-12682	Hub > Read timeout retrieving data from hub
* CONTRAST-12648	Changing syslog settings doesn't alert agents
* CONTRAST-12606	 .NET Agent Cannot Connect To TeamServer (unauthorized after a few hours)
* CONTRAST-12592	Incorrect library stats
* CONTRAST-12245	Order of Vulnerabilities Changes - Making it Hard to Triage
* CONTRAST-12152	Several rules aren't mapped for reporting
* CONTRAST-12039	Assess Control Events not rendering return value correctly ('unknown') for .NET Web Apps
* CONTRAST-11898	NonUniqueResultException processing AppUpdate report
* CONTRAST-11745	"Restore Superadmin Session" link is not available after applying a license to an app
* CONTRAST-11669	Inconsistent Container Value Being Given on Same Server

## Database Migrations
* 3.3.8.000	Ruby sqli protection rule
* 3.3.8.001	Add cve 2017 5638
* 3.3.8.002	Create protection rules cve
* 3.3.8.003	Update Trace Pages Titles
* 3.3.8.004	Alter app libraries model
* 3.3.8.005	Move SAML Settings
* 3.3.8.006	Create server cleanup policy table
* 3.3.8.007	Agent language features
* 3.3.8.008	Agent Language Feature  App Exclusions
* 3.3.8.009	Agent Language Feature  Syslog
* 3.3.8.010	Agent Language Feature  Virtual Patches
* 3.3.8.011	Agent Language Feature  Protection
* 3.3.8.012	Add overall score settings
* 3.3.8.013	Create jira integration


## Github
* [Python SDK](https://github.com/Contrast-Security-OSS/contrast-sdk-python)
* [Bamboo CI Plugin](https://github.com/Contrast-Security-OSS/contrast-bamboo-plugin)


## OpenDocs
* [Python SDK Tutorial](tools_sdkaccess.html#python)
* [Bamboo Plugin](tools_sdk.html#bamboo)
* [Cloud Foundry](installation_javainstall.html#cloud)
* [Improving SSL Setup](admin_systemsettings.html#ssl)
