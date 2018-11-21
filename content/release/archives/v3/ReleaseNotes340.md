<!--
title: "Contrast 3.4.0 - May 2017"
description: "Contrast 3.4.0 May 2017"
tags: "3.4.0 May Release Notes"
-->


Our new Visual Studio Team Services and improved JIRA integrations make it even easier to keep track of your bugs. (We fixed a few of our own bugs while we were in the area, too.) Of course, you have to check out Protection coverage for applications on your way over. We'll help you stay on track!  

## Fixes
* Weeded out duplicate information in application security PDF report.
* Let you change Protection policy for all rules, all at once.
* Fixed agent directory permissions during EOP upgrade.
* Superadmin can export trace XML for vulnerabilities in Production.
* Straightened out new asset and new vulnerability notifications. 
* Navigate to Notes for .Net servers without fear of 403s.
* Syslog features - like validation support for IPV6 - are up and running.
* Disabled editing of Protection policies for child applications. 
* Save new integrations and send vulnerabilities with JIRA no matter what's in your fields.
* Delete a licensed application and still keep the license in the organization. Win, win. 
* No more group interference when you update organization roles. You do you.
* Restored module filter for vulnerabilities in merged applications. 
* Got rid of duplicate vulnerabilities displaying in Applications page.
* Addressed application permissions for Access Group members.

## Improvements 
* With User Attribution, Contrast enriches attack data with user information so you can put a (user)name to the face...err...IP address.
* Created a brand new integration to export vulnerabilities from Contrast directly into [Visual Studio Team Services or Team Foundation Server](admin-orgintegrations.html#vsts-tfs).
* Select two-way integration in your [JIRA configuration](admin-orgintegrations.html#jira) to automatically update the status of a vulnerability (or vulnerabilities - we won’t judge) in Contrast when you close the corresponding ticket.
* Security controls for Node are here! If you know your data is secure, go ahead and add those Input Validator or Sanitizer APIs into Contrast.
* Use the new filter in the Vulnerability Trend chart to search for applications that are out of compliance. 
* Need to Blacklist a range of IPs? Just add them to the newly extended fields for Attacks, Events and IP management.
* Look for the new Protection coverage for applications in Organization Statistics, Attack Monitor and, of course, the Applications page. 
* Find any empty servers and focus on libraries by language with new Advanced filters.

## Agent Updates
* **Java Agent Summary:** We made improvements to heap usage as well as the accuracy of Assess and Protect Rules. We also added better support for applications running in Pivotal Cloud Foundry.
* **.NET Agent Summary:** We added Protect Virtual Patches, Protect Path-Traversal and .NET 4.7 Support. We even improved reliability of Duplex instrumentation. You can also specify the agent environment as a configuration setting as well as control the instrumentation mode used by the agent in Contrast.
* **Node.js Agent Summary:** We support level 1 rule creation as well as runtime enabling and disabling of Security Controls and Assess rules. We also send server environment information to Contrast. Library reporting errors have been a bit too verbose, so they'll be better from now on. 



