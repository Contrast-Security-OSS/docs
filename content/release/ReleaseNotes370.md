<!--
title: "Contrast 3.7.0 - January 2020"
description: "Contrast 3.7.0 January 2020"
tags: "3.7.0 January Release Notes"
-->

## Bug Fixes

* Fixed Assess vulnerability reporting for Mulesoft based applications. 

* Ruby token authentication timed out when running Contrast with Passenger 6.0.

* Some customers were not able to use route-based auto-verification with Python

* For the Python agent, handle_exception was not raising the original exception. Now it does with the entire stack trace.

* Node Agent 2.10.1 was crashing with Express based applications.

## New and Improved Features

PDF Compliance Reports now include the latest Payment Card Industry (PCI) Security Standard version: PCI 3.2.1

Sensitive data masking is now available for all language agents.

## Agent Updates

### Java Agent Summary

Accuracy improved for Assess and Protect, in particular, data flow accuracy for Java 11 applications. Added route-based auto-verification support and improved configuration error reporting.

### Node.js Agent Summary 

This release includes several performance improvements and fixes. All customers should upgrade to this version.  

### Python Agent Summary 

Improvements are mostly related to Assess. This includes fixes to sqlite3 patching, support for the Assess SSRF rule, auto-verification, reporting, and communication with Contrast Service. The agent no longer sends an XSS vulnerability if the response content type is whitelisted. It can also create an XSS vulnerability outside of rendering a template for django, flask, or werkzeug-compliant frameworks.

### Ruby Agent Summary 

The Ruby team has focused on internal improvements for this release. We have increased support for our reporting of technologies that appear on the Contrast UI when running with Sinatra applications. We now comply with SSRF+CSRF specifications. We reduced namespace pollution for applications no longer running Contrast.
