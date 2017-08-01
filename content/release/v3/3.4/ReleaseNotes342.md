<!--
title: "Contrast 3.4.2 - July 2017"
description: "Contrast 3.4.2 July 2017"
tags: "3.4.2 July Release Notes"
-->

With new agent reports for virtual patch, IP blacklist and BotBlocker events - not to mention more powerful Advanced filters - the Attacks page is more lethal than ever before. Just choose a language to start the creative process. 

## Fixes

* Linked the latest Release News in the User menu.
* API documentation is ready for launch (again). 
* Cookie value conforms to RFC 6265.
* Environment information is back in Application Overview page. 
* Add a payload and retest updates to your WebHook integration without leaving the page.
* Dashboard and Library Stats show your correct Library count and grade.
* Edit servers in bulk without enabling Syslog. 
* Deflated number of Not Seen applications in Organization Statistics. 
* No more editing other users' comments on vulnerabilities.
* SuperAdmins can login on the first try, save and view groups, and even assign licenses to an organization.
* Update your expired password without the added shame of page errors.
* See the full stacktrace from .NET applications and create Security Controls in Vulnerability Details.  
* Syslog values are stored correctly in the database.
* Send bugs to JIRA locally. 
* Application Importance, Attackers and Severity filters are revived in the Attacks page. 

## Improvements 

* We’re making it easier to add applications to the appropriate access groups by letting Admins determine the group by name during application onboarding.

* For our Protect users, agents now send virtual patch, IP blacklist and BotBlocker events to the Attack Events record. We also added some new Advanced filters to help you make sure that you don’t get swamped by all those bad bots.

* We extended our exclusions technology to .NET Assess rules to you make Contrast even more accurate within your environment.

* Choose the right application language(s) for you when creating a virtual patch or log enhancer.

* Get better visualization of vulnerability details - and more improvements to come! 

## Agent Updates

* **Java Agent Summary:** We introduced a new CVE Shield for CVE-2017-9791, added adaptive optimization techniques to improve performance over time, improved support for various libraries and frameworks, and introduced memory usage improvements. We also fixed a few false positives and one false negative.

* **.NET Agent Summary:** We improved our XXE detection in Assess mode, and added support for Assess exclusions. We also added experimental support for CLR2 under Duplex mode (which supports both Assess and Protect).

* **Node.js Agent Summary:** We improved error handling when the agent is given an invalid URL for the Contrast interface, and made the autocompletion prevention missing rule less permissive. We also found a few bugs in setting apiKey arguments in the command line, reporting URL activity, and applications loading the *requirejs* module, but those are long gone. 

* **Ruby Agent Summary:** We've officially entered beta! After the confetti cleared, we updated the library and class usage code to more accurately reflect usage in the inventory reports, and implemented the Padding Oracle Protect rule. You'll also be seeing foundation work for NoSQL injection rules in MongoDB and an initial set of eight property-based Assess rules very soon.




