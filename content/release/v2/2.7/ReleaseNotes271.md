<!--
title: "Contrast 2.7.1 Release Notes, April 21st, 2014"
description: "Contrast 2.7.1 Release Notes, April 21st, 2014"
-->

## New Features:
* Added 14 new security rules for .NET agents!
* Changed coverage mode to URL-based instead of method-based.
* Added scalability improvements to the TeamServer for faster page render on key pages.
* Added "identity tagging" experimental feature which allows data validation rules to be much smarter.
* Disabled Header Injection rule by default, as most modern servers are not vulnerable.
* Created JavaDocs for writing custom rules with the Java agent.
* Added the ability to "deeply" tag an object as validated, encoded, etc.
* Sped up Java agent start time around 9%.
* Added better support for Play! Framework (2.2.+)
* Sped up runtime performance of the Java agent by using smarter regular expressions.
* Changed default severity and confidence level for several rules.
* Sped up runtime performance of .NET agent with various improvements.
* Added the ability to have the Contrast rules driven from a System property in the Java agent.

## Bug Fixes:
* Fixed bug in REST API when pulling traces under rare conditions.
* Fixed several bugs with displaying traces.
* Fixed bug where login failures weren't reported to the audit log.
* Fixed bug when reporting to new JIRA instances (tested on JIRA-2.0.0m26).
* Fixed rare false positive case in unexploitable unchecked redirect vulnerabilities.
* Fixed bug in startup that prevented Contrast from being used in Google AppEngine.
* Fixed bug that prevented some ColdFusion applications from showing analytics.
* Fixed bug that showed an empty Platform page for ColdFusion applications.
* Fixed bug that prevented XXE findings from being captured in the Java agent. 
