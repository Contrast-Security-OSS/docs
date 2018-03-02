<!--
title: "Contrast 3.4.9 - February 2018"
description: "Contrast 3.4.9 February 2018"
tags: "3.4.9 February Release Notes"
-->

...

## Fixes

* Load your user lists, no matter how long they are. CONTRAST-21181
* View vulnerability properties in Eval without fail. CONTRAST-20076 
* https://contrast.atlassian.net/browse/CONTRAST-20729
* Get one (and only one) notification of a new attack. CONTRAST-20883
* Enable Protect for all users in your organization without any superfluous options. CONTRAST-10411 
* Send vulnerabilities to your email account straight from the master application. CONTRAST-12894

## Improvements 

* Contrast now integrates with your Identity Provider (IDP) via SAML to create and authenticate users. Set default roles in Contrast for each user, let the IDP talk to Contrast directly, and voila! (To set up an integration, go to the **user menu > Organization Settings > Single Sign On page**.) 

* Developers, rejoice! We've brought vulnerabilities directly into your integrated development environments (IDEs). If you use Eclipse, IntelliJ or VisualStudio, download the plugin from the respective marketplaces and follow the installation instructions.

* Contrast can instrument and report on vulnerabilities in applications that use VMWare Xenon.

* The Contrast Security Java Service Broker has been updated to support Pivotal versions 1.11, 1.12 and 2.0.


## Agent Updates

### Java summary 

The Java team... 

### .NET summary 

The .NET team...

### Node.js summary 

The Node team implemented major improvements in accuracy and stability as well as increased performance in Protect mode. We also added the CSRF rule for Protect, and closed out issues interacting MongoDB and React. We now have initial support for React server-side rendering and the Hapi h202 authentication library.

### Ruby summary 

The Ruby agent updated the CSRF token to reduce the risk of false positives introduced by the CSRF rule. We implemented a configuration option that allows the agent to be disabled from within the application without removing the gem from the application.  We’ve also been working on slimming down and standardizing the internal agent models.


