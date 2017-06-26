<!--
title: "Contrast 3.4.1 - June 2017"
description: "Contrast 3.4.1 June 2017"
tags: "3.4.1 June Release Notes"
-->

New application Compliance policies, environment-specific defaults for servers, and a security standards filter for Vulnerability Trend reports make it easier to set your sights high and keep them there. You're not bossy - you're the boss! 

## Fixes
* Added some stickiness to New and Total views in Vulnerability Trend, so it's there when you come back to it.  
* De-bugged some bugtracker integrations (and made an ironic tee to prove it). 
* Cleared the way to create Rule Exclusions from Attack Events. 
* Sorted out mail configurations in our interface. 
* Updated security standards for one-time migration.
* Got the Applications page back up and running - load, search, add tags and export licensed (and only licensed) applications without any errors. 
* Re-empowered you (yeah, that's a word) to select Application Access Groups when adding users or poking around Organization Settings. 
* Stopped inserting vulnerabilities twice in logs. 

## Improvements 
* Tired of surprises? Set environment-specific [defaults for servers](admin-orgsettings.html#org-server) before they even come online! 
* Contrast now supports x509 client certificate authentication through a [Trusted HTTPS proxy](installation-setupauth.html#http-proxy).
* Protect log events now have the application name embedded in them for easier identification with other events. If only those phone numbers from last night were so easy...
* You should know if your blacklists, virtual patches or BotBlockers are working. So, we're going to show you in Attack Events and record them in all your logs. 
* Watch out for noncompliant applications with new Compliance policies based on rules or security standards like DISA STIG, PCI DSS or OWASP Top-10. Show them who's boss! 
* Put away the rose-colored glasses, and sort your applications by security standards with our new vulnerability standards filter in the Vulnerability Trend report. 
* A new user default for Access Control groups helps your roles avoid a nasty collision. (Unless, you know, you want to...)

## Agent Updates

* **Java Agent Summary:** We added accuracy improvements, performance enhancements, and better support for applications using *javax.jws* annotations and older versions of Struts 1 and JSTL. We also refactored key parts of our data flow engine in order to prepare for various enhancements.

* **.NET Agent Summary:** We added IIS Express support and looked into CLR2 support under Duplex instrumentation. We also added Protect bot blocking and body parsing to detect attacks in API applications, and got rid of a few bugs for overall accuracy and reliability. 

* **Node.js Agent Summary:** While were nearly one hundrd percent focused on Protect, we fixed a bug where libraries weren't reporting when an applications started from non-app-root directory.

