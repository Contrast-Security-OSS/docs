<!--
title: "Contrast 3.2.3 - December 2015"
description: "Contrast 3.2.3 December 2015"
-->

## Special Announcement
Contrast is pleased to announce the first release of NodeJS support for IAST. Contrast has spent the past several months developing and integrating agent support for primarily MEAN stack NodeJS applications (see: http://mean.io/). The first generation agent will continue to expand rule coverage and platform component support. 


## Java Agent
* CONTRAST-4612: Refactor library class usage out of APPUPDATE and into APPACTIVITY
* CONTRAST-6655: Library support for WebSphere Liberty
* CONTRAST-6737: LinkageError on WebLogic 9/Java 5
* CONTRAST-6748: Switching stacktrace mode to SOME/ALL causes blowups
* CONTRAST-6773: Autocomplete rule missing HTTP request
* CONTRAST-6785: Java 1.5 API used in StringUtil

## .Net Agent
* CONTRAST-5575: .NET Installer Should Ensure References To Old Module Are Removed
* CONTRAST-5993: Improve Performance of Scope Checks Under Instrumentation
* CONTRAST-6423: Allow developers to specify search paths for VS2015 IIS Express config files 
* CONTRAST-6497: Implement Application Pool Whitelist for .NET Agent
* CONTRAST-6554: EL Profiler: Fix *target=Parameter* taggers to properly tag output parameters
* CONTRAST-6575: ELT Profiler exceptions
* CONTRAST-6614: *System.ExecutionEngineException* in *Int32.Parse* and *Int32.TryParse* tests under instrumentation
* CONTRAST-6782: Profiler needs to *xmlencode db connectionstring* before sending to service
* CONTRAST-6670: ELT Profiler issue in *SourcePropagatorAction* for *NameValueCollection.GetValues(System.String)*
* CONTRAST-6678: ELT Profiler issue in *ThreadData::Reset*
* CONTRAST-6679: ELT Profiler issue in *vc\include\internal_concurrent_hash.h*
* CONTRAST-6680: ELT profiler issue in *TraceData::AddPropagatorEventToTrace*
* CONTRAST-6681: ELT Profiler issue in *internal_concurrent_hash.h while deep in MVC*
* CONTRAST-6782: Profiler needs to *xmlencode db connectionstring* before sending to service

## TeamServer
* CONTRAST-3940: Upgrade Embedded MySQL to 5.6.28
* CONTRAST-5952: Applications Table On the Dashboard Overflows On Windows/Chrome
* CONTRAST-6134: Team Server hangs if there is no *contrast.lic* file
* CONTRAST-6169: Searching by trace ID in merged apps sets content of vulnerability tree to child app
* CONTRAST-6402: TeamServer Support of free form text-based tagging for servers, applications and vulnerabilities.
* CONTRAST-6435: Update Search Inputs Across Pages
* CONTRAST-6500: Vulnerabilities No Longer Fading
* CONTRAST-6563: Update Help/Learn More Links to New OpenDocs
* CONTRAST-6564: Update User Menu with Explicit Links to Help & Support
* CONTRAST-6571: Sorting Inconsistencies for Libraries
* CONTRAST-6594: Cannot filter by environment as keyword on server page
* CONTRAST-6600: Change the Default MySQL Backup Location Directory to a Different Location
* CONTRAST-6688: Windows is not able to able to resolve *${CONTRAST_HOME}* in SSL Settings
* CONTRAST-6690: Create Link to Organization Reports in the Settings Menu
* CONTRAST-6692: Creating cross-organizational access group throws exception
* CONTRAST-6694: Change the label for application size from an M to Mloc or MB
* CONTRAST-6800: Server Delete Option Not Working

## Crawler
* CONTRAST-6673: Crawler no root installer
