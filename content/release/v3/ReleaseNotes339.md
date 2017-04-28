<!--
title: "Contrast 3.3.9 - April 2017"
description: "Contrast 3.3.9 April 2017"
tags: "3.3.9 March Release Notes"
-->

New reporting on your organization and the ability to save custom views of the Vulnerability Trend report make this release a must-see. We also made rule management a little bit easier, and even snuck in fixes to some annoying bugs. Right on!

## Fixes
* Restored your ability to export the Vulnerability Trend report to PDF with only the information you wanted.
* Resolved a couple of bugtracker errors so you don’t run into issues when sending vulnerabilities.
* Fixed page errors when activating a user account. 
* Fixed the search field in an application's Activity tab.
* Addressed a few minor access control bugs. Whew!
* Stopped the Agent from flagging Probed events from IPs on Trusted Hosts lists.
* Now able to run POPULATE-LIBRARY-CACHE with Ruby Artifacts. Yay!
* No more NPEs! Create users, process vulnerabilities, use library endpoints, configure bugtrackers and read attack details with no hassle. 
* Fixed Migration 3.3.9.018 from failing on fresh installations. 
* The Vulnerability page is back! Sorry about that, Admins...
* No more errors for SuperAdmins when you email API keys. You are authorized!
* The Last Seen column on the Servers page wasn't sorting...so, we fixed that.
* No longer displaying all vulnerability detection rules in Policy Management.
* Don't let Authentication Tokens keep you from making connections. We added a new tooltip for HipChat integrations to help you out.

## Improvements 
* Organization Statistics: It’s like a minimap of all your app security stats.
* Filter your Vulnerability Trend report just the way you like it, then save that view for easy access at any time. Now do it again. Ah, the convenience...
* Now you can decide how your Assessment rules (policy) get applied throughout your portfolio.
* Search by explicit CVE numbers and click on them in the CVE Shilds page to get more details when managing your policy.
* We added rules that make it easy to apply policy to your portfolio based on application language. Finally! 
* Change the severity of a vulnerability right in the grid. High five.
* Updated our messaging in Attack Monitor to be more precise.
* Language Quick Views for rules make it easy to zero in on the rules that apply to your application language.
* See what rules have been modified in the Assess Rules grid. 
* Welcome to our new role, ServerAdmin! It has the configuration of SuperAdmin without any of the user management worries.

## Agent Updates
* **Java Agent Summary:** Added some minor performance enhancements, better support for Equinox environments, and rules for RabbitMQ and Liferay. Also fixed multiple bugs.
* **.NET Agent Summary:** Added exclusions and enabled Syslog output for Protect. Changed the default instrumentation engine to Duplex mode. Made a few improvements to agent performance, accuracy and reliability.
* **Node.js Agent Summary:** Added better ES6 support and runtime enabling/disabling of instrumentation. Provided database support. Fixed bugs for SQLite3 and tainted values in nested parameters.



