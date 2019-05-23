<!--
title: "Contrast 3.5.9 - December 2018"
description: "Contrast 3.5.9 December 2018"
tags: "3.5.9 December Release Notes"
-->

Our gift to you: completely revamped grids for all your applications, servers and vulnerabilities!

## Fixes

* Use the toggles in the grid to enable or disable Protect on Python servers. 
* Filter Assess Rules by language and see the correct results. 
* Use the Save button to make modifications to your Server Defaults policy. 
* Use corrected instructions and YAML configuration properties for the Proxy agent in the Add Agent wizard.
* Multiselect fields work correctly for Library Policy configurations.
* The Vulnerabilities grid shows information for parent applications only, and immediately reflects changes to vulnerability status. 
* Links to *grepcode.com* are replaced with links to [searchcode](https://searchcode.com/) in vulnerability Details.
* Save changes to Library Policy in System Settings without errors. 
* Set up automatic ticket creation in Jira integrations. 
* Filter counts match results in the Applications grid. 
* Set up an LDAP configuration with the best Base DN for you.

## Improvements

* Redesigned and enhanced grids for applications, servers, and vulnerabilities make the most important data easier to find and streamline your daily tasks. Improvements include, but are certainly not limited to, filters per column, enhanced search functions, instantly visible tags and easier access to row actions. If you have questions or suggestions for more improvements, use the **Give Us Feedback** button above any of the grids.

* Assign key:value pairs to applications during onboarding for better organization and tracking. Go to **Organization Settings > Applications** to define [custom fields](admin-orgsettings.html#app-defaults) - such as such as Application ID, Business Unit and Point of Contact - for new and existing applications. Contrast even provides a preformatted configuration property to copy and use in your own files. 

* Configure your [VSTS integration](admin-orgintegrations.html#vsts-tfs) to send tickets to a specific backlog for a subproject. 


## Agent Updates

### Java summary 

The Java team expanded coverage of the Protect Expression Language Injection rule to also cover RichFaces CVEs, including CVE-2018-14667. We improved the accuracy of a Regular Expression DoS rule as well as the reliability of a Protect CSRF rule. We also fixed an issue where the agent could fail to enable Assess rules if all rules were enabled. 

### .NET summary 

The .NET agent installer no longer requires a *DotnetAgentSettings.ini* file; it now requires a *contrast_security.yaml* file. Unlike the *.ini* file, the YAML file supports all of the .NET agent’s [configuration options](installation-netconfig.html#net-yaml).

The agent now detects new values for application version, group and tags in re-deployed *web.config* files without requiring a restart of the agent. Changes in Protect rule modes take effect without requiring a restart of the agent. The .NET team also completed the following bug fixes: 

* Profiler logs respect log level configuration
* The agent respects application version, group and tags values in *web.config* in IIS-Express-hosted applications
* A false positive where the agent would report cross-site scripting vulnerabilities from HTTP cookie sources
* The agent no longer reports WCF client methods as routes for an application

### Node.js summary 

In version 1.36.0, the Node team improved the accuracy of our hard-coded keys vulnerability detection. We fixed a bug that caused some vulnerability reports to be rejected due to having an invalid data type set for the server's port value. We also fixed a bug in the agent's startup process that, under certain policy conditions, prevented the agent from discovering route coverage information for Express.js applications.

### Ruby summary 

For the 2.0.10 release, Ruby team worked to enhance the agent's Assess functionality. We moved several method patches to *C* and refactored how extensions are generated to more reliably instrument applications in Assess mode. We also resolved a bug around parameter tracking in Assess, which allows for more accurate dataflow detection.

### Python summary

Version 1.4.0 brings new Protect enhancements for XSS, Path Traversal and Command Injection. The Python team also improved our library analysis architecture to be more memory efficient and use less processes. We made configuration updates to include backward compatibility of existing YAML files.


