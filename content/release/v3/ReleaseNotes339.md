<!--
title: "Contrast 3.3.9 - April 2017"
description: "Contrast 3.3.9 April 2017"
tags: "3.3.9 March Release Notes"
-->

## Fixes
* Restored ability to export Vulnerability Trend report to PDF with just the information you wanted CONTRAST-13329
* Fixed page errors when user activates account CONTRAST-13562
* Fixed the search field in application's Activity tab CONTRAST-13500
* New users now have access to all orgs specified in org group CONTRAST-13754
* Agent continued to flag Probed events from these IPs on Trusted Hosts lists
* Able to run POPULATE-LIBRARY-CACHE with Ruby Artifacts CONTRAST-13597
* No more NPEs! Create users, process vulnerabilities, use library endpoints, configure bugtrackers and read attack details with no hassle. CONTRAST-13790
* Migration 3.3.9.018 fails on fresh installations CONTRAST-13861
* The Vulnerability page is back! Sorry about that, Admins... CONTRAST-13746
* Good news, Edit Users - send a vulnerability to bugtrackers with no errors CONTRAST-13852
* No more errors for SuperAdmins when you email API keys. You are authorized! CONTRAST-13825 
* Last Seen column in Servers page didn't change sorting CONTRAST-13504
* Couldn't send vulns to Bugtracker, even though JIRA connection works CONTRAST-13556
* Displaying all vulnerability detection rules in Policy Management CONTRAST-12947

## Improvements
* Organization Statistics: It’s like a minimap of all your app security stats.
* Filter and save Vulnerability Trend reports just the way you like them. 
* Now you can decide how your Assessment rules (policy) get applied throughout your portfolio.
* Search by explicit CVE numbers and click on them in the CVE Shilds page to get more details when managing your policy.
* We added rules that make it easy to apply policy to your portfolio based on application language. Finally! 
* Change the severity of a vulnerability right in the grid. 
* Updated our messaging in Attack Monitor to be more precise
* Language Quick Views for rules make it easy to zero in to the rules that apply to your application language.
* See what rules have been modified in the Assess Rules grid. 
* Welcome to our new role, ServerAdmin! It has the configuration of SuperAdmin without any of the user management worries.

<!-- Waiting on ZooKeeper -->

## Agent Updates
* **Java Agent Summary:** Add summary here...
* **.NET Agent Summary:** Added exclusions and enabled Syslog output for Protect, changed default instrumentation engine to duplex, and made a few improvements to agent performance, accuracy and reliability.
* **Node.js Agent Summary:** Added Better ES6 support, runtime enabling/disabling of instrumentation, database support and bug fixes for SQLite3 and fixed bug for tainted values in nested paramaters.



