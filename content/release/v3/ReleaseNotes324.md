<!--
title: "Contrast 3.2.4 - January 2016"
description: "Contrast 3.2.4 January 2016"
-->

## Special Announcement

Contrast is pleased to announce the first release of NodeJS support for IAST. Contrast has spent the past several months developing and integrating agent support for primarily MEAN stack NodeJS applications (see: http://mean.io/). The first generation agent will continue to expand rule coverage and platform component support. 

## Java Agent

* CONTRAST-5356: Minor propagation issues - user confusion
* CONTRAST-6203: Centralization of Java Agent Options with Improved Documentation
* CONTRAST-6628: Support for the Play 2 Framework
* CONTRAST-6756: Performance improvement to *System.identityHashCode()*
* CONTRAST-6764: Trim Application name prior to sending to TeamServer
* CONTRAST-6789: Support Apache Karaf
* CONTRAST-6804: XXEController causing LinkageError
* CONTRAST-6943: Initialize Logging only once
* CONTRAST-6944: Create propagators for org.w3c.dom.*
* CONTRAST-6945: Create propagators for *com.fasterxml.jackson.databind.JsonNode*
* CONTRAST-6964: InstrumentationContext needs JavaDocs
* CONTRAST-6968: Update Agent propagator notation
* CONTRAST-6969: Java security policy detector rule
* CONTRAST-6970: Add reusable properties section to policies
* CONTRAST-6972: Fix incorrect trackobject in *base.xml*
* CONTRAST-6975: Make app activity polling time configurable
* CONTRAST-6988: No libraries in packed WARS in Tomcat 8
* CONTRAST-7022: Add a *-Dcontrast.mode=all* feature switch
* CONTRAST-7057: Detailed server version not showing up in SpringBoot application
* CONTRAST-7067: Early log initialization in JBoss environments causes stacktrace
* CONTRAST-7101: Race condition in inventorying may result in an application not being reported
* CONTRAST-7118: The *contrast.policy* flag should act like the *contrast.policy.overrides* flag

## .Net Agent

* CONTRAST-4521: Instrumentation data flow engine now collects header information under classic pipeline mode
* CONTRAST-6002: Config Switch: Logging Modified IL
* CONTRAST-6268: Improve logging of .NET runtime info
* CONTRAST-6372: .NET Agent ProfilerBehavior configuration, under *ProfilerBehavior=3* use Instrumentation engine against .NET 4 apps
* CONTRAST-6671: .NET Agent should not profile *roslyn\VBCSCompiler.exe*
* CONTRAST-6863: .NET Agent service should fail to start when another profiler is present 
* CONTRAST-6879: Contrast.NET Installer Should Uninstall Without Unnecessary Prompts
* CONTRAST-6919: Add Performance Tracking To Contrast.NET Instrumentation
* CONTRAST-6997: Add configuration switch for logging JITCompilation event with method signature
* CONTRAST-7102: .NET Service startup should remove old HttpModule from IIS config files to address 3.2.2->3.2.3 upgrades not removing 3.2.2 HttpModule

A future version of the .NET Agent will increase the .NET Framework version requirement from .NET 4.0 to .NET 4.5.2. Note that applications to be analyzed can still target .NET 2.0 and above but the server where the agent is installed will need .NET 4.5.2. This change follow Microsoft's EOL date (1/12/2016) for support of .NET 4.0/4.5 (see http://blogs.msdn.com/b/dotnet/archive/2015/12/09/support-ending-for-the-net-framework-4-4-5-and-4-5-1.aspx for more details).  


## TeamServer

* CONTRAST-5808: Infinite scrolling for TeamServer pages.
* CONTRAST-6207: SQL Performance Optimization.
* CONTRAST-6393: Header-injection finding is preventing unvalidated-redirect finding from being properly reported
* CONTRAST-6659: Filter improvements on the Server page.
* CONTRAST-6711: Refactored Login Page
* CONTRAST-6732: Add Ability to Edit App Importance Inline
* CONTRAST-6779: Consolidate Vulnerabilities/Traces Terminology in the UI
* CONTRAST-6807: Alerts to support Defend mode.
* CONTRAST-6839: Links in email alerts result in 404 error page
* CONTRAST-6841: Support for Karaf Libraries
* CONTRAST-6472: Organizational View of Vulnerabilities
* CONTRAST-6894: Add tags to search criteria
* CONTRAST-6897: Include Export All Option for App View > Vulns Page
* CONTRAST-6898: Include Export All Option for Main Vulns Page
* CONTRAST-6909: Applications Containing Crawler Records Throws Constraint Violations When Attempting to Delete an Application
* CONTRAST-6914: TeamServer installer should copy license file, not move it
* CONTRAST-6920: New alerts are not being sent to AD emails.
* CONTRAST-6932: Organization Setting: Change Server Mode to Sampling Throws Exception
* CONTRAST-6940: Add AppName, AppID, AppCode to Trace Export
* CONTRAST-7064: Titles are not unique in the *trace_data* for *Rule-App-TitleHash*
* CONTRAST-7083: Enforce EAC application visibility constraints before sending Vulnerability alert email

	
## OpenDocs

* Java Agent Custom Rules: https://docs.contrastsecurity.com/user_javarules.html
* .Net Agent Level 2 Rules: https://docs.contrastsecurity.com/user_netrules.html
* Java Agent Support for Karaf: https://docs.contrastsecurity.com/user_javainstall.html#karaf
* IIS Express Configuration: https://docs.contrastsecurity.com/user_netconfig.html#iis
* Granting and Revoking SuperAdmin Permissions: https://docs.contrastsecurity.com/admin_tsconfig.html#super
* Configuring TeamServer Logging: https://docs.contrastsecurity.com/admin_tsconfig.html#log
* Uninstalling TeamServer: https://docs.contrastsecurity.com/admin_tsinstall.html#uninstall
* Using the Encrypted Properties Editor: https://docs.contrastsecurity.com/admin_tsconfig.html#encrypt
* Backing Up MySQL: https://docs.contrastsecurity.com/admin_tsconfig.html#backup


## Database Migrations

* V3_2_4_000: Drops the column *role_id* from the table *USERS_ORGANIZATIONS*.
* V3_2_4_001: Addresses cascade delete issues with the Crawler micro-service.
* V3_2_4_002: New table specific for customers running the Defend module for Realtime Application Security Protection.
* V3_2_4_003: Addresses a schema deficiency with the tables associated with tagging.
* V3_2_4_004: Replaces the language Play with Java
* V3_2_4_005: One-time migration to improve the collision of hashes for duplicate traces.
* V3_2_4_006: One-time migration to update trace titles for Command Injection trace types. 
