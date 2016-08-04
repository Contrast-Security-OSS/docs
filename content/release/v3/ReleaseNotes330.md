<!--
title: "Contrast 3.3.0 - July 2016"
description: "Contrast 3.3.0 July 2016"
tags: "3.3.0 July Release Notes"
-->

## Java Agent
* CONTRAST-6966: Improve Level 2 Rules Documentation
* CONTRAST-8712: Improve Null Pointer checks
* CONTRAST-9031: Improve support for Level 1 Rules
* CONTRAST-9050: Honor IAST exceptions for Grizzly input
* CONTRAST-9051: Honor IAST exceptions for Netty input
* CONTRAST-9141: Honor new TeamServer response code to stop reporting
* CONTRAST-9147: Honor RASP blocking for Netty XSS
* CONTRAST-9148: Honor RASP parameter resolution for Netty
* CONTRAST-9155: Improve suggested security controls by reporting tainted parameter
* CONTRAST-9318: Improve Command Injection RASP Rule
* CONTRAST-9333: Support Dropwizard 0.9.2

## .Net Agent
* CONTRAST-8841: Add 'Skip-Analysis' Methods to *policy.xml*
* CONTRAST-9285: Unnecessary propagation events created during *NameValueCollection.Add(collection)* hurt performance
* CONTRAST-9003: .NET agent not finding *request-validation-disabled* for MVC controller actions
* CONTRAST-8955: Index out of range exception during persistent-xss rule's handling of certain *SELECT* statements
* CONTRAST-9187: *System.ArrayTypeMismatchException* in *HttpRequestMessage.ToString* during trace creation 
* CONTRAST-8715: FP Using *System.Xml.XmlTextWriter.WriteString()*
* CONTRAST-8652: Add *ClientConfigPaths.GetHash* to hash blacklist for .NET
* CONTRAST-8107: Investigate additional *JSON.NET* Encoders

## NodeJS Agent
* CONTRAST-9021: Fixes for missing eval context
* CONTRAST-9282: Core Overload for URL parse
* CONTRAST-9484: Core Overload for outbound HTTP
* CONTRAST-9397: Appactivity messages from agent reporting as wrong report type
* CONTRAST-9494: Policy disabling from CLI/config

## TeamServer
* CONTRAST-6346: Improved Filtering and Searching
* CONTRAST-8988: IAST Remediation Policy
* CONTRAST-9146: Extensible JMX Monitoring Platform
* CONTRAST-8389: Improved Library Policy
* CONTRAST-9137: Refactor JMS trace queue processing
* CONTRAST-9059: JIRA integration does not consistently create Bug ticket type
* CONTRAST-9115: SuperAdmin Applications Page Performance Issues
* CONTRAST-9112: Vulnerabilities for Archived Applications Showing Up in Server Page
* CONTRAST-9343: IE Bug - Server Overview / Vuln Page Not Rendering Properly
* CONTRAST-9044: Update Offline Presence Indicator Color (Color Blindness)
* CONTRAST-8207: Org Portal > Servers - Sorting is lost after editing a Server
* CONTRAST-9096: Export Trace is no longer available in Vulnerability details page
* CONTRAST-8795: Receiving Notifications when Unsubscribed
* CONTRAST-9273: TeamServer Goes Into Endless Loop When License Expired
* CONTRAST-9418: Activemq log files are filling up with failed transactions

## Database Migrations
* V3_3_3_000: Library Policy Support
* V3_3_3_001: System Library Policy Support
* V3_3_3_002: Trace Property Cleansing
* V3_3_3_003: FK Notifications for Attacks Event Comment
* V3_3_3_004: Organization Library Versioning
* V3_3_3_005: Order Exception Types 
* V3_3_3_006: Fail Library Policy
* V3_3_3_007: Set New Assets to True
* V3_3_3_008: Add Remediation Policy Model
* V3_3_0_009: Update Traces Title to Remove Module
* V3_3_3_010: Update Server Environment Model

## GitHub
* .Net Dvnr Application: https://github.com/Contrast-Security-OSS/dotnet-dvnr

## OpenDocs
* Generating a HAR File: https://docs.contrastsecurity.com/user_tsfaq.html#har
* Jenkins Plugin: https://docs.contrastsecurity.com/dev_sdkjava.html#changeanchor6
* Gradle Plugin: https://docs.contrastsecurity.com/dev_sdkjava.html#changeanchor5
* Maven Plugin: https://docs.contrastsecurity.com/dev_sdkjava.html#changeanchor4
* Java SDK FAQ: https://docs.contrastsecurity.com/dev_sdkjava.html#changeanchor3
