<!--
title: "Contrast 3.3.6 - January 2017"
description: "Contrast 3.3.6 January 2017"
tags: "3.3.6 January Release Notes"
-->

## Java Agent
* CONTRAST-11839	Create a per-URL thread log splitter
* CONTRAST-10838	Create Protect rule for Struts2 / CVE-2016-3081
* CONTRAST-10835	Create Protect rule for Struts2 / CVE-2016-3082
* CONTRAST-11991	Java OOM error when running Nessus scan with Assess and Protect
* CONTRAST-11719	Improving Protect / Command Injection detection
* CONTRAST-11939	Don't report CSRF attacks against login URLs
* CONTRAST-11897	Create "delayed startup" flag
* CONTRAST-11686	Create a primordial blacklist feature
* CONTRAST-11681	Reduce startup penalty
* CONTRAST-12094	Prevent ContextManager uncapped growth
* CONTRAST-11994	False positive
* CONTRAST-11989	CVE-2016-3081 shield failing for WebSphere85
* CONTRAST-11986	Customer NPE causes crash
* CONTRAST-11934	False positives with padding oracle
* CONTRAST-11900	Update Java Agent to new Timestamp
* CONTRAST-11862	WebLogic blowing up on context change
* CONTRAST-11818	Deadlock on startup with agent
* CONTRAST-11723	Agent not properly handling a null message sent through Vert.x event bus
* CONTRAST-11468	JarAnalyzer should not use File


## .Net Agent
* CONTRAST-11871	.Net Library/CVE Research and Mapping for January Release
* CONTRAST-11933	IPBlacklist not populating serverActivity
* CONTRAST-11117	Implement SecurityLogger class for RASP
* CONTRAST-9091	    add version tag to append to vulns
* CONTRAST-11904	Installer Silent Mode Should Put All Files In the Same Directory
* CONTRAST-10624	Ensure AppDomain RollForward Doesn't Happen During Another AppDomain Setup
* CONTRAST-12012	Assess Mode Is Not Passing Technology Signatures To Agent
* CONTRAST-12011	Assess Control Events not rendering return value correctly ('unknown') for .NET Web Apps
* CONTRAST-11692	RootPath CPM integration test failing in Monitor mode
* CONTRAST-11654	x86 CPM tests failing under monitor/detours
* CONTRAST-11482	.NET agent is sending null values instead of empty arrays in AppActivity report (inventory)


## NodeJS Agent
* CONTRAST-11872	Library/CVE Research and Mapping for January Release
* CONTRAST-11277	Troubleshooting FAQ Section
* CONTRAST-11293	Gate Some Rules From Static Content
* CONTRAST-11808	Refactor rules export 'apply', which should be renamed to 'handle'
* CONTRAST-11856	Mongo / Mongoose map-reduce rewrite issue
* CONTRAST-11795	Node agent shutting off after 1 min due to faulty timer
* CONTRAST-9559	    Evaluate Internal Methods for TypeError Agent Issues.



## TeamServer
* CONTRAST-11528	Use neutral bitset format
* CONTRAST-11026	RASP Output to Syslog
* CONTRAST-10838	Create RASP rule for Struts2 / CVE-2016-3081
* CONTRAST-10772	Backend Work to Add Ability to Search Start or End Date Field (Attacks)
* CONTRAST-10450	[Parent] Vulnerability Trend Chart With Filtering
* CONTRAST-12130	[Backport] Expose Y-Axis for Vulnerability Trend Parent Chart
* CONTRAST-11935	Timeout observed in handling agent startup message
* CONTRAST-11824	Update preflight to use JSON
* CONTRAST-11734	Lower Log Level in LibraryScoringHelper
* CONTRAST-11694	Persist Attack Monitor Filters While In Attacks Section
* CONTRAST-11500	Add back the ability to browse to a license file and update TeamServer
* CONTRAST-11431	Move Birt debug flag into general.properties
* CONTRAST-11334	Implement spring-retry for AppActivity processing (attacks)
* CONTRAST-11035	Update Error Message When Connection to Bugtracker Cannot be Made
* CONTRAST-10987	Expand the Search to also Match Rule for Attacks and Events
* CONTRAST-10718	Attack Traffic Timeline
* CONTRAST-10451	[Parent] Reports Page Revisions (with Vuln Trend)
* CONTRAST-10086	Improve JIRA Integration Errors
* CONTRAST-10081	Support for non-default HTTPS protocols for JIRA
* CONTRAST-10077	More urgent warning message with rotate API keys
* CONTRAST-9944	    SuperAdmin > Users Page Updates
* CONTRAST-12086	Error processing library cache from hub
* CONTRAST-12055	Login Issues
* CONTRAST-12002	"Invalid email" typo needs to be corrected
* CONTRAST-12001	Unable to generate reports in Eval
* CONTRAST-12000	Use generic select organization label instead of first real organization when adding users in Superadmin
* CONTRAST-11995	Delete false positives in migration
* CONTRAST-11992	TeamServer Startup Should Fail Against Unsupported Databases
* CONTRAST-11981	Error calculating trace title
* CONTRAST-11932	Superadmin can't edit password from other users
* CONTRAST-11908	com.google.gson.JsonSyntaxException: java.lang.NumberFormatException: empty String
* CONTRAST-11876	App Overview Server Modals Blank
* CONTRAST-11854	Vulns Page Reload Not Honoring Advanced Filter
* CONTRAST-11845	User Icon Still Incorrect in SuperAdmin pages
* CONTRAST-11836	3.3.5 EOP has the older version of the node agent
* CONTRAST-11821	TeamServer Mobile Sign In Creating Session
* CONTRAST-11802	Trend line graph icon not working
* CONTRAST-11789	Unable to calculate high bit
* CONTRAST-11765	Incorrect Severity Filter in rasp monitor page
* CONTRAST-11742	Attacks Monitor, show scrollbar only if needed
* CONTRAST-11741	Libraries, some libraries are marked as custom when they are not
* CONTRAST-11736	App Create Returns Virtual Patches With Invalid Evaluation
* CONTRAST-11735	Can't add users from the org portal in AD/LDAP environment
* CONTRAST-11704	IP Block page does not accept CIDR format ip addresses
* CONTRAST-11682	Attack Monitor Minor Bugs
* CONTRAST-11644	Send To Bugtracker Telling Me No Configs, But There Are?
* CONTRAST-11484	Invalid character(s) in library manifest again
* CONTRAST-11340	Groups Page Application Count is Incorrect
* CONTRAST-11292	Group name is not camel case
* CONTRAST-11199	Admin > Applications > Advanced Filter, "See More" link is not working for Organizations and Technologies filters
* CONTRAST-11175	[EOP] Admin > Applications, License column is not being populated 
* CONTRAST-11111	Wrong Color/Icon for App with only Protection
* CONTRAST-11091	Expiring License Notification Incorrect When Application Archived
* CONTRAST-9959	    LDAP/AD UI bugs in authentication settings
* CONTRAST-9847	    HipChat alerts are "empty" on iPhone client
* CONTRAST-9703	    Organization filter not working on admin applications page



## Database Migrations
* V3_3_6_000: Add cve 2016 3082 rule
* V3_3_6_001: save trace bugtracker details
* V3_3_6_002: Set Org Libraries Manifest To UTF8
* V3_3_6_003: Add cve 2016 3081 rule
* V3_3_6_004: Add syslog fields
* V3_3_6_005: Remove trace fp
* V3_3_6_006: Added user avatars


## GitHub:
* Updates to Contrast Maven Plugin: https://github.com/Contrast-Security-OSS/contrast-maven-plugin
* Updates to Contrast Gradle Plugin: https://github.com/Contrast-Security-OSS/contrast-gradle-plugin
* Updates to Contrast Cloud Foundry Build Pack for Java: https://github.com/Contrast-Security-OSS/java-buildpack (Branch)
* Updates to the Contrast Ruby SDK: https://github.com/Contrast-Security-OSS/contrast-sdk-ruby
* Updates to the Contrast Java SDK: https://github.com/Contrast-Security-OSS/contrast-sdk-java
* Updates to Ticketbook, a purposely vulnerable application: https://github.com/Contrast-Security-OSS/ticketbook

## OpenDocs:
* Node Agent Troubleshooting: https://docs.contrastsecurity.com/user_nodefaq.html#trouble
* Node Agent Connectivity Issues: https://docs.contrastsecurity.com/user_nodefaq.html#connect
* Node Agent Performance: https://docs.contrastsecurity.com/user_nodefaq.html#perf
* Node Working with Other Agents: https://docs.contrastsecurity.com/user_nodefaq.html#behavior
* Node Process Monitoring Tools: https://docs.contrastsecurity.com/user_nodefaq.html#processmonitoring
