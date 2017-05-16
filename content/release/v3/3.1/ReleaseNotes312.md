<!--
title: "Contrast 3.1.2 Release Notes - December 9, 2014"
description: "Contrast 3.1.2 Release Notes - Dec 9, 2014"
tags: "3.1.2 December Release Notes"
-->

## On-Premises Installer
* Updated End-User License Agreement
* Removed sudo dependency for installer (still required for contrast-server)

## Java Agent
* Fixed bug causing false positives for PDF
* Fixed bug where Library Analysis was showing 0's for class counts
* Now capturing HTTP request body in traces

## .Net Agent
* Can now be installed on Windows Server 2003
* Can now analyze applications hosted on IIS6
* Fixed bug where library used class count was not updated
* Fixed bug where agent would not install if Team Server could not be reached or network connectivity was poor
* Added more common framework methods that use weak hash algorithms to the weak hash algorithm blacklist
* Added sources: HttpRequest.UserAgent,HttpRequest.Referrer,HttpRequest.UserLanguages

## Team Server
* Fixed bug where agents running Oracle Java 6 were unable to connect using TLS (EOP Only)
* Fixed bug where some sanitizers/validators could not be deleted
* Added URL to Trace to JIRA and Email trace sharing options

## REST API
* Fixed bug where Evidence and Events fields are null for some traces
* Added Severity Ratings to Trace object 
