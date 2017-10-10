<!--
title: "Contrast 3.2.1 - Patch Release November 11, 2015"
description: "Contrast 3.2.1 - October 26, 2015"
tags: "3.2.1 November Release Notes"
-->

## Critical Java Vulnerability Issue Addressed
There is a widespread and significant “deserialization” vulnerability in Java environments. Any application that accepts serialized Java objects – whether in custom code, libraries, frameworks, or the application server – is likely vulnerable. Learn more about the vulnerability on the Contrast Security [Blog](http://www.contrastsecurity.com/security-influencers/java-serialization-vulnerability-threatens-millions-of-applications).

* Contrast Security can help you address this vulnerability in your Java applications as a new rule type.
* Contrast Enterprise TeamServer – based on Java – has been patched in our Software-as-a-Service offering, and an Enterprise-on-Premise fix is available now for Contrast Enterprise version 3.2.1. 


## Java Agent
* CONTRAST-5844: NPE on Java Agent for Verb Tampering
* CONTRAST-5837: Eliminate FP for XSS
* CONTRAST-5713: Exception caused by Java-Agent's Netty instrumentation
* CONTRAST-6108: Add MongoDB to Live techs page
* CONTRAST-6289: Agent is not finding all of the libraries used in a standalone application (fatjar w/ embedded container) on the first scan if contrast.appname is defined
* CONTRAST-6313: Multivalued sources could miss source filters
* CONTRAST-6335: Java agent disrupts Felix OSGi services
* CONTRAST-5785: The log-level of "No Common Superclass" exception thrown by the OSGiFriendlyClassWriter should be downgraded
* CONTRAST-5784: Downgrade log-level of Could not report startup to local HTTP listener (no more errors will be reported)
* CONTRAST-6137: Add support for Jetty8/CXF combination
* CONTRAST-6129: Cache the results of System property lookups
* CONTRAST-5983: cache-control finding should not be issued for 404 responses
* CONTRAST-6147: Log Rotation for the Java Agent and Option to Disable Logging Entirely
* CONTRAST-5941: Grizzly Support for Java Agent
* CONTRAST-5383: Support Data Access Client: Redis
* CONTRAST-5407: Support verticles deployed by the "vertx" command-line executable

## TeamServer
* CONTRAST-3977: Implement .NET Library Cache Building based on Nuget Information
* CONTRAST-5291: Reduce storage dependency on the JAVA TEMP directory
* CONTRAST-5768: Incorrect Contrast Icon on Windows Installations
* CONTRAST-5867: Archived Application should not create stack in TeamServer log file
* CONTRAST-5669: Password policy using default value instead of min value for validation
* CONTRAST-6162: ApplicationActivityWS should return 409 instead of 500 HTTP code when the app is archived
* CONTRAST-6148: Add not-null restrictions to name and shortName fields in organizations table
* CONTRAST-5769: JavaIO Temp DIR Leaving Artifacts on the File System After Restart
* CONTRAST-6158: TeamServer responds with HTTP 500 on .NET vulnerability that contains binary null
* CONTRAST-6220: DB and directory resources missing from Live tab
* CONTRAST-6223: Broken links in DefaultProtectionRule and TraceDescriptionBuilder
* CONTRAST-6204: Daily Alerts Not Sending
* CONTRAST-6157: Recent Activity fails to populate when going from vulnerability to main screen
* CONTRAST-5832: Links are missing from library CVEs
* CONTRAST-6187: REST API Doc - Missing REST endpoint doc annotations in v3
* CONTRAST-5825: Inconsistent icon use/labels for Settings pg.
* CONTRAST-6270: Trace Search in header is not working
* CONTRAST-6266: Vulnerabilities Grid Isn't Constrained to Browser Width
* CONTRAST-6292: Broken datepicker in trace viewer
* CONTRAST-6159: Redirect to license expired page upon session expiration
* CONTRAST-6124: REST API Doc - Non GET requests getting sent as www-form-url-encoded instead of application/json
* CONTRAST-6016: Email Alert not coming from setting in UI
* CONTRAST-6017: contrast-server.vmoptions overwritten on upgrade
* CONTRAST-5700: Current page indicator
* CONTRAST-6153: Review of eTag Implementation

## .Net Agent
* CONTRAST-5557: Access Violation In String.Concat With Empty String In WebAPI
* CONTRAST-5958: URLs Not Updating In Tray On W2K3
* CONTRAST-6151: .NET Agent fails to start on JPN servers because it falsely thinks it failed to install the HttpModule
* CONTRAST-6106: StringBuilder Remove Test TagRanges Don't Match
* CONTRAST-6094: Add System.Web.HttpServerUtility.HtmlEncode to policy
* CONTRAST-6064: AV in HeaderInjection.cpp
* CONTRAST-6078: StackOverflow crash in Web API
* CONTRAST-5862: Instrumentation Crypto Rules Against Methods of Form Foo.Create("Bar") Failing
* CONTRAST-6013: Instrumentation Dataflow Rule Triggers Are Missing TagRanges
* CONTRAST-6213: Exception deserializing dataflow finding
* CONTRAST-6146: Contrast.NET Tray Not Showing Contrast Alias For IIS Express
* CONTRAST-6222: IIS Express Not Reporting Config App.Name For Initial Findings
* CONTRAST-6163: .NET Agent may be sending appActivity for archived apps
* CONTRAST-5986: Access Violation in Microsoft's Concurrent Hash Map
* CONTRAST-5778: get parameter names in performant way
* CONTRAST-5982: cache-control finding should not be issued for 404 responses
* CONTRAST-5866: Service Should Be Responsible for Deleting Old Log Files (Sensors may not have permission)
* CONTRAST-5576: Security Plugin - Add Propogation/TagRanges for StringBuilder
* CONTRAST-6195: try UnmanagedExports library to fix CLR2 x64
* CONTRAST-6167: .NET Agent should not report 'Disconnected' if activity call fails (log warning to console but don't flip tray to disc status)
* CONTRAST-6004: .Net Validator Support
* CONTRAST-5999: Sensors Skip Framework Code


## Crawler:
* CONTRAST-5347: Crawler Windows Installer - Unable to reset port field
* CONTRAST-5348: Crawler Windows Installer - Error message is not clear
* CONTRAST-6053: Crawler installer should test api configuration
