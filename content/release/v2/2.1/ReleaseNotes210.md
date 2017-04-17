<!--
title: "Contrast 2.1.0 Release Notes, May 15th, 2013"
description: "Contrast 2.1.0 Release Notes, May 15th, 2013"
tags: "2.1.0 May Release Notes"
-->

## New Features:
* WebLogic now supported.
* Contrast now detects [XXE (XML eXternal Entity processing) vulnerabilities](https://www.owasp.org/index.php/XML_External_Entity_(XXE)_Processing).
* Introduced smart auto-grouping of vulnerabilities
* Our Enterprise-On-Premise customers now have auto-update functionality.
* On-Premise Customers can now store their Contrast TeamServer data in MySQL, SQL Server, Oracle or PostgreSQL databases.
* Refactored large tooltips to be less invasive.
* Change vulnerability counting to reflect findings that customers consider "closed".
* Added a few new JAR-to-CVE mappings.
* Added detection of commonly used security controls.
* Enhanced visualization of stacktraces for vulnerability events.
* Hid some events from vulnerabilities that didn't help understanding the vulnerability.

## Bug Fixes:
* Fixed an error that prevented apps that bundled older xercesImpl.jar dependencies with their apps from working with Contrast.
* Fixed a few incorrect JAR-to-CVE mappings.
* Fixed performance problems with timely processing reports from monitored applications. Customers would occasionally see mild to severe lags in seeing updated data in their dashboard.
* Fixed bug where certain rule changes didn't invalidate engine caches.
* Fixed wording in a few vulnerability text.
* Fixed rounding error in application size calculations.
* Fixed rare bug where locked out users couldn't reset their password.
* Made the order of vulnerabilities returned in the Trace Viewer tree more predictable.
* Fixed bugs in JBoss 7.0 and all versions of WebSphere.
* Changed cache spooling conditions in the engine to avoid massively slow startup times on heavyweight containers (WebSphere, JBoss). 
