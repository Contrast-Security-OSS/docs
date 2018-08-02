<!--
title: "Contrast 3.4.9 - February 2018"
description: "Contrast 3.4.9 February 2018"
tags: "3.4.9 February Release Notes"
-->

Customize your vulnerability management style with the newly supported Xenon framework and IDE plugins.  

## Fixes

* Load your user lists, no matter how long they are. 
* Get one (and only one) notification of a new attack. 
* View vulnerability properties in Eval without fail. 
* Enable Protect for all users in your organization without any superfluous options. 
* View notes for .NET servers. 
* Send vulnerabilities to your email account straight from the master application. 
* Receive new asset notifications from your integrations, but only when you want them. 
* Use Affects Version(s) and multiselect fields when sending issues to JIRA. 
* Keep track of your child applications with the right Slack notifications. 
* Reload any step of the "Add Agent" wizard without losing your place. 
* Get the the credit you deserve for Protection Strength of Production servers. 
* Unmapped CVEs in libraries will be removed accordingly. 
* Enable and disable policies in an application's page without any errors. 
* No more misleading "Apply License" dialogs for Python and Ruby applications. 
* Organization defaults respect agent capabilities. 
* Add or edit Remediation Policies without errors. 
* View-level users can use the row action menu for vulnerabilities. 
* See all the beautiful icons, even in Internet Explorer. 
* The Organization Statistics report is back to normal. 

## Improvements 

* Developers, rejoice! We've brought vulnerabilities directly into your integrated development environments (IDEs). If you use [Eclipse](https://marketplace.eclipse.org/content/contrast-eclipse), [IntelliJ](https://plugins.jetbrains.com/plugin/10335-contrast) or [VisualStudio](https://marketplace.visualstudio.com/items?itemName=contrast-security.contrast-vs-ext), download the [plugins](https://contrast-security-oss.github.io/) from the respective marketplaces and follow the installation instructions.

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

The Ruby agent updated the CSRF token to reduce the risk of false positives introduced by the CSRF rule. We implemented a configuration option that allows the agent to be disabled from within the application without removing the gem from the application. We’ve also been working on slimming down and standardizing the internal agent models.


