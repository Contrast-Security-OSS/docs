<!--
title: "Contrast 3.4.9 - February 2018"
description: "Contrast 3.4.9 February 2018"
tags: "3.4.9 February Release Notes"
-->

...

## Fixes

* Load your user lists, no matter how long they are. CONTRAST-21181
* Get one (and only one) notification of a new attack. CONTRAST-20883
* View vulnerability properties in Eval without fail. CONTRAST-20076 
* Enable Protect for all users in your organization without any superfluous options. CONTRAST-10411 
* View notes for .NET servers. CONTRAST-20549
* Send vulnerabilities to your email account straight from the master application. CONTRAST-12894
* Receive new asset notifications from your integrations, but only when you want them. CONTRAST-20793
* Use Affects Version(s) and multiselect fields when sending issues to JIRA. CONTRAST-20579, CONTRAST-20398
* Keep track of your child applications with the right Slack notifications. CONTRAST-20574
* Reload any step of the Add Agent wizard without losing your place. CONTRAST-12406
* Get the the credit you deserve for Protection Strength of Production servers. CONTRAST-19495
* Unmapped CVEs in libraries will be removed accordingly. CONTRAST-20720
* Enable and disable policies in an application's page without any errors. CONTRAST-19537
* No more misleading "Apply License" dialogs for Python and Ruby applications. CONTRAST-21105, CONTRAST-21194
* Organization defaults respect agent capabilities. CONTRAST-20488
* Add or edit Remediation Policies without errors. CONTRAST-21103
* View-level users can use the row action menu for vulnerabilities. CONTRAST-20716
* See all the beautiful icons, even in Internet Explorer. CONTRAST-20938
* The Organization Statistics report is back to normal. CONTRAST-19724

## Improvements 

* Contrast now integrates with your Identity Provider (IDP) via SAML to create and authenticate users. Set default roles in Contrast for each user, let the IDP talk to Contrast directly, and voila! (To set up an integration, go to the **user menu > Organization Settings > Single Sign On page**.) 

* Developers, rejoice! We've brought vulnerabilities directly into your integrated development environments (IDEs). If you use Eclipse, IntelliJ or VisualStudio, download the plugin from the respective marketplaces and follow the installation instructions.

* Contrast can instrument and report on vulnerabilities in applications that use VMWare Xenon.

* The Contrast Security Java Service Broker has been updated to support Pivotal versions 1.11, 1.12 and 2.0.


## Agent Updates

### Java summary 

The Java team improved accuracy of Protect deserialization and agent startup time. We also fixed a bug that could prevent some agent information from reaching Contrast as well as a race condition that could cause an application to become unresponsive under certain conditions. And, yes - it's true: We added support for the Xenon framework. 

### .NET summary 

The .NET team improved performance of analysis of JSON-based deserialization, handling of proxy settings as well as Assess accuracy. We also fixed a crash bug when analyzing applications running on IIS Express. 

### Node.js summary 

The Node team implemented major improvements in accuracy and stability as well as increased performance in Protect mode. We also added the CSRF rule for Protect, and closed out issues interacting MongoDB and React. We now have initial support for React server-side rendering and the Hapi h202 authentication library.

### Ruby summary 

The Ruby agent updated the CSRF token to reduce the risk of false positives introduced by the CSRF rule. We implemented a configuration option that allows the agent to be disabled from within the application without removing the gem from the application.  We’ve also been working on slimming down and standardizing the internal agent models.


