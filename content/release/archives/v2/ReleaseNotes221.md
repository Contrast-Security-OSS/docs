<!--
title: "Contrast 2.2.1 Release Notes, July 30th, 2013"
description: "Contrast 2.2.1 Release Notes, July 30th, 2013"
tags: "2.2.1 July Release Notes"
-->

## New Features
* Architecture view now contains Apache HttpClient connections
* Architecture view now contains Apache CXF connections
* Automatic note generation when vulnerability status changes
* Customizable e-mail alerts to update the user of application health and remediation status 
* Downloadable PDF reports with OWASP-2013 Top 10, DISA STIG, and PCI compliance analysis 
* Folder icons now reflect status of vulnerabilities each group contains
* Implementation of 508 compliance for accessibility to disabled users 
* New rules for Hibernate Injection detection
* New rules for OWASP Java Encoder Project 
* New vulnerability status icons
* New superadmin homepage 
* New rule update feature allows contrast to apply updated rule sets from the Contrast Team
* Support for JBoss 5 servers

## Bug Fixes
* Applications are set to trial by default so users can choose which to monitor 
* Application Portfolio page miscounts applications when some are archived, fixed
* Cannot “jump” to traces by header search bar anymore, fixed
* Engine hangs indefinitely when TeamServer queue is full, fixed
* Hibernate triggering many SQLi false positives, fixed
* JAR analysis not discarding old results if updated JAR now being used, fixed
* Log4J configuration collision with WebLogic 11G, fixed
* New focus colorization feature introduces element resize problems, fixed
* "Organize by" -> Severity on the “Vulnerabilities” tab of the application dashboard does not work, fixed
* Refreshing the application dashboard always goes to "Libraries" tab, fixed 
