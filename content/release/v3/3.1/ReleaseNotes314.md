<!--
title: "Contrast 3.1.4 Release Notes - February 24, 2015"
description: "Contrast 3.1.4 Release Notes - Feb 24, 2015"
-->

## Java Agent
* Fixed over-tainting in Tomcat's JSPWriterImpl character array, no longer reporting false positives in jsp:include tags

## .Net Agent
* Now supports analysis of applications hosted on IIS Express. IIS Express-hosted applications can be analyzed by Contrast by starting the application via the new "IIS Express" tab in Contrast Tray.  Additionally the .NET agent no longer requires full IIS to be installed.
* The server name provided by the .NET agent can now be customized by adding a <add key="ServerName" value="MyCustomServerNameHere" /> value to the appSettings section of ContrastService.exe.config in the agent's installation directory.
* Vulnerability code events will now include a value for all parts of method calls (i.e. this object, parameters, and return value).  Previously the .NET agent only provided values for primitive types.
* Known Issue: .NET Agent version 3.1.3 will fail to auto-update to version 3.1.4.  Agents with version prior to 3.1.3 (e.g. 3.1.2 or 3.1.1) are unaffected and should update normally.  Version 3.1.3 users should uninstall 3.1.3 (via the Control Panel) and then install 3.1.4.  This issue will be resolved in the next release.  
* Should no longer break application functionality that relies on AJAX requests.
* Should now provide accurate values and taint coloring for StringBuilder propagation events in vulnerabilities.
* Resolved an issue where the agent could crash when parsing an assembly's metadata.
* Resolved an issue where the agent's HTTP communication with Team Server could get backed up during periods of heavy load.
* Resolved an issue where auto-update was saving new installers outside of the Contrast.NET ProgramData folder.
* Should now only create a limited number of log files and should log repeated error conditions less frequently. 
* Resolved an issue where the agent could fail to retrieve the initial list of applications hosted on IIS due to a bad version value in an application pool's configuration.
* Should no longer create vulnerabilities from null System.Uri sources
* Can now be uninstalled without the presence of the ContrastSettings.ini file in the original location where the installer was run
* Improved reliability of inter-process communication between agent components.

## TeamServer
* Improvements to LDAP and Active Directory integrations including multi-tenant, multi-domain active directory forests with referrals and Enterprise LDAP integrations
* Fixed bug rendering trace titles and subtitles on Cryto Rules (old UI - trace tree)

## Contrast Installer
* Fixed bug where updates were not overwriting old libraries
* Cleaned up the upgrade path to provide more useful and friendly messaging when updating where the old database is inaccesible 
