<!--
title: "Contrast 3.3.9 - April 2017"
description: "Contrast 3.3.9 April 2017"
tags: "3.3.9 March Release Notes"
-->

Check out new reporting on your organization and save personalized views of the Vulnerability Trend in this must-see release. In case that isn't enough, we made rule management a little bit easier, and even snuck in fixes to some nagging bugs. Right on!

## Fixes
* Restored ability to export Vulnerability Trend report to PDF with just the information you wanted 
* Resolved a couple bugtracker errors so you don’t run into issues sending vulnerabilities.
* Fixed page errors when user activates account 
* Fixed the search field in application's Activity tab 
* Addressed a few minor access control bugs. Whew!
* Figured out why PROBED attack events were still making it through IPs on Trusted Hosts.
* Able to run POPULATE-LIBRARY-CACHE with Ruby Artifacts 
* No more NPEs! Create users, process vulnerabilities, use library endpoints, configure bugtrackers and read attack details with no hassle. 
* Migration 3.3.9.018 fails on fresh installations 
* The Vulnerability page is back! Sorry about that, Admins...
* No more errors for SuperAdmins when you email API keys. You are authorized!
* Last Seen column in Servers page didn't change sorting
* Displaying all vulnerability detection rules in Policy Management
* Don't let Authentication Tokens keep you apart. We added a new tooltip for HipChat integrations to help you out.

## Improvements
* Organization Statistics: It’s like a minimap of all your app security stats.
* Filter and save Vulnerability Trend reports just the way you like them. 
* Now you can decide how your Assessment rules (policy) get applied throughout your portfolio.
* Search by CVE numbers and click on them in the CVE Shilds page for more details when managing your policy.
* We added rules that make it easy to apply policy to your portfolio based on application language. Finally! 
* Change the severity of a vulnerability right in the grid.
* Messaging in Attack Monitor is more precise. We love you, perfectionists.  
* Language Quick Views for rules make it easy to zero in to the rules that apply to your application language.
* See what rules have been modified without leaving the Assess Rules grid. 
* Welcome our new role, ServerAdmin! It has the configuration of SuperAdmin without any of the user management worries.
* Changes to .NET instrumentation mode

## Agent Updates
* **Java Agent Summary:** Must bug Arshan again and then add summary here...
* **.NET Agent Summary:** Added exclusions and enabled Syslog output for Protect, changed default instrumentation engine to duplex, and made a few improvements to agent performance, accuracy and reliability.
* **Node.js Agent Summary:** Added Better ES6 support, runtime enabling/disabling of instrumentation, database support and bug fixes for SQLite3 and fixed bug for tainted values in nested paramaters.



