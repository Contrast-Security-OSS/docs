<!--
title: "Contrast 3.4.4 - September 2017"
description: "Contrast 3.4.4 September 2017"
tags: "3.4.4 September Release Notes"
-->

Congratulations, Ruby! Version 1.0.0 has arrived along with new bugtracker integration features like configuration for customized URLs and automatic ticket creation. 

## Fixes

* Added event tag and source type options. 
* Adjusted mismatched grades in your library views.
* Resolved internal server error when you browse through libraries. 
* Fixed links in vulernabilities' Details pages. 
* Synced work item types with severity levels in VSTS integration. 
* Fixed link in Dataflow StackTrace. 
* Restored agent communication when server environment is Null. 
* ADFS working on all nodes. 
* Updating data fields in libraries the right way. 
* Got rid of instrumentation validation errors for .NET servers. 
* Mended menu options for Node applications. 
* Restored the "Never" option for Password and Inactive Account Expiration.
* Test Diagnostics connection after disabling Proxy. 
* Re-populating SAML translate. 


## Improvements 

* Our response to Struts2 vulnerabilities: An update to Contrast on September 9 that adds CVE 2017-9805 to our library inventory data as well as an update to our Protect deserialization rule to stop attackers from exploiting this particular vulnerability.

* Contrast now supports user authentication using Active Directory Federation Services! To set up the feature, download the *pem* file from your Identity Provider, and upload it your **Single Sign-On** page in Contrast. 

* We revamped your views of vulnerabilities: redundant trace details - like string operations - are now collapsed, formatting is enhanced and traces are presented more accurately. 

* Automatically export any new vulnerability to [JIRA](admin-orgintegrations.html#jira), [Team Foundation Server (TFS) or Visual Studio Team Services (VSTS)](admin-orgintegrations.html#vsts-tfs) with the check of a box. You set the threshold for vulnerabilities based on rules or severity, and Contrast exports new vulnerabilities over whenever they meet the criteria.

* Imagine if you could create hundreds - no, thousands - of users at the push of a button...and now you can! Just [put your users’ details in a CSV file](admin-onboardteam.html#create-user), and upload it to Contrast. Contrast creates all of the users and grants them access. 

* Have a customized VSTS or TFS URL? Go ahead and set up your bugtracker in the **Integrations** page.

## Agent Updates

* **Java Agent Summary:** We added protection for CVE-2017-9804 as well as requirements to [level 2 rules](installation-javapolicy.html#level2) to support improved summary and detail view of traces on Contrast. We also improved the accuracy of an XXE rule, and fixed a bug in which the agent reported an incorrect library count when you used `contrast.override.appname`.

* **.NET Agent Summary:** We improved agent performance and accuracy, and added support for analysis of SignalR-based applications. We also fixed a bug where certain special characters could prevent the agent from sending vulnerability details to Contrast.

* **Node.js Agent Summary:** While we were getting ready to support hapi and node 8, we did a ton of housekeeping. Among our repairs are issues with our method for bundling dependencies, using lazy routers in Express and Syslog client usage on Windows. 

* **Ruby Agent Summary:** We're proud to announce that the [Ruby agent](installation-ruby.html#ruby-overview) has left beta and version 1.0.0 is now available in Contrast 3.4.4! We’ve been working on performance and fine tuning the pattern recognition for the XSS, SQLi and CMDi rules. We closed a bug where the Oga XML library wasn't being checked for the XXE vulnerability. We also refined some of our unit tests and added screener testing for RailsGoat, and built a dedicated screener for Sinatra applications.




