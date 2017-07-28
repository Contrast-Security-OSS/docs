<!--
title: "Contrast 3.4.2 - July 2017"
description: "Contrast 3.4.2 July 2017"
tags: "3.4.2 July Release Notes"
-->

By sending more reports to the attack event record and adding access group names during application onboarding, agents are more powerful than ever.

## Fixes

* CONTRAST-15421: Linked correct version of our latest Release News in the User menu
* CONTRAST-12241, -15731: Launch API documentation from Contrast
* CONTRAST-15423: Cookie value conforms to RFC 6265
* CONTRAST-15810: Showing environment information in Application Overview page 
* CONTRAST-15786: Save and view Superadmin groups 
* CONTRAST-15556, -14367: Add a payload and retest updates your WebHook integration without leaving the page
* CONTRAST-14393: Edit servers in bulk without enabling Syslog 
* CONTRAST-12775, -15042: Adjusted Dashboard and Library Stats to show correct Library count and grade
* CONTRAST-14250: Corrected list of Not Seen applications in Organization Statistics
* CONTRAST-15615: Screener can start Contrast
* CONTRAST-15503: No more editing other users' comments on vulnerabilities
* CONTRAST-15544, -15671: SuperAdmins can login on the first try, and even assign licenses to an organization
* CONTRAST-15522: Update your expired password without the added shame of page errors
* CONTRAST-14988: Storing Syslog values correctly in the database
* CONTRAST-15133, -15520: See full stacktrace from .NET applications and create Security Controls in Vulnerability Details  
* CONTRAST-15029: Send bugs to JIRA locally 
* CONTRAST-15340, -15309, -15310: Application Importance, Attackers and Severity filters working in Attacks page 

## Improvements 

* We’re making it easier to add applications to the appropriate access groups by letting Admins add the group name during application onboarding.

* For our Protect users, agents now send virtual patch, IP blacklist and BotBlocker events to the attack event record. We also added some new advanced filters to help you make sure that you don’t get swamped by all those bad bots.

* We extended our exclusions technology to .NET Assess rules to you make Contrast even more accurate within your environment.

* Choose the right application language(s) for you when creating a virtual patch or a log enhancer.

* Get better visualization of vulnerability details - and more improvements to come! 

## Agent Updates

* **Java Agent Summary:** 

* **.NET Agent Summary:** We improved our XXE detection in Assess mode, and added support for Assess exclusions. We also added experimental support for CLR2 under Duplex mode (which supports Assess and Protect).

* **Node.js Agent Summary:** We improved error handling when the agent is given an invalid URL for the Contrast interface, and made the autocompletion prevention missing rule less permissive. We also found a few bugs in setting apiKey arguments in the command line, reporting URL activity, and applications loading the *requirejs* module, but those are long gone. 

* **Ruby Agent Summary:** We've officially entered beta! After the confetti cleared, we also updated the library and class usage code to more accurately reflect usage in the inventory reports, and implemented the Padding Oracle Protect rule. You'll also be seeing foundation work for NoSQL injection rules in MongoDB and an initial set of eight property-based Assess rules very soon.




