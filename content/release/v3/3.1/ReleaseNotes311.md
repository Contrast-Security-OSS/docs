<!--
title: "Contrast 3.1.1 Release Notes - November 4, 2014"
description: "Contrast 3.1.1 Release Notes - Nov 4, 2014"
tags: "3.1.1 November Release Notes"
-->

## Java Agent
* New Instrumentation Cache for quick retrieval of instrumented classes
* Bootstrap Mode for Turbo Performance Boost!
* Agent is now JMX Enabled - Access statistics and control the agent by passing -Dcontrast.jmx=true 
* Reduced memory footprint
* Refactored response scanning rules to be more performant
* Migrated agent to use SLF4J Logging Engine
* Fixed bug to allow agent to use https proxy
* Fixed bug creating false positives from Tomcat's BodyContentImpl
* HTTP Parameter Pollution Rule now detects empty actions
* Fixed JSP line numbers for included files

## .Net Agent
* .Net Agent now supports Classic Pipeline Mode
* Fixed bug where agent was sending requests for archived apps
* Fixed bug where installer fails ungracefully in environments without .NET 3.5
* Fixed bug when using http proxies
* Expanded XSS and Path Traversal Rules 
* Improved performance and fixed minor memory leak

## TeamServer
* Clarified AD Settings in Enterprise Installer Console Mode
* Fix NullPointerException in Installer when upgrading in Non-AD Modes
* Clarified evidence for HTTP Parameter Pollution rule
* Reduced log-spam for expected exceptions
* Fixed bug where child apps were not reset when the parent app was reset
* Fixed bug where excessive emails were generated when an agent used an inactive account 
