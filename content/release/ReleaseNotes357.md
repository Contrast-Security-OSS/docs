<!--
title: "Contrast 3.5.7 - October 2018"
description: "Contrast 3.5.7 October 2018"
tags: "3.5.7 October Release Notes"
-->

Set up administrative approval for vulnerability closures and see route coverage for Jersey applications. 

## Fixes

* Sort servers in the grid by "Last Seen". 
* Custom footers will display correctly with page contents. 
* Option to add Virtual Patches for .NET is available.
* Compliance Violation email notifications have working links. 
* Filtered vulnerabilities in the UI and API returns show the same count. 
* Status updates are shown correctly in Vulnerability Trend chart. 

## Improvements

* Use our new option to [require administrative approval](admin-orgsettings.html#app-defaults) when a user attempts to close a vulnerability. Go to the **Organization Settings > Applications page** to choose which closed statuses and severities require approval. When a user attempts to close a vulnerability with a status and severity you’ve chosen, the it goes into a Pending state until you approve or deny the change.

* The [Jenkins 2.8 plugin](tools-ci.html#jenkins) lets you query by build numbers or vulnerability timestamps, and also fail a build for only new vulnerabilities. For large-scale deployments, the plugin also supports the use of application UUIDs instead of application names.

## Agent Updates

### Java summary 

The Java agent now reports [route-based application coverage](user-apps.html#route) for Jersey 2.26+. The Java team fixed an issue in which the agent would fail to instrument certain Equinox classes as well as a false positive when applications used `HttpServletRequest.getContextPath`. Springboot applications using the `contrast.standalone.appname` configuration accurately reports libraries. 

### .NET summary 

The .NET agent team added “System.Web.Mvc.UrlHelper.IsLocalUrl” as a validator for unsafe redirects, and improved agent performance when analyzed application communicates with web services using HttpClient. We also fixed bugs where:  

* The agent failed to restart when disabling Assess when using profiler chaining
* The agent did not respect TeamServerValidateCert in the agent’s configuration file
* The Azure App Service Extension would fail to analyze applications hosted outside of the expected bin directory
 
### Node.js summary 

Check back next month for an update on our latest (and greatest) work.

### Ruby summary 

The Ruby agent team is preparing the final updates for GA of the Ruby Assess agent. The team has also been working on performance by optimizing the initial inventory message and moving library analysis into its own thread. We fixed an issue where Rails under Passenger wasn't correctly generating routes for GET requests as well as a separate issue where Sinatra wasn't starting in Assess mode and `class_eval` was being used.

### Python summary

Python has been continuing to implement the REP Protect rules with the Path Traversal rule complete. The Python agent team made a few updates to the implementation of the [common configuration properties](installation-pythonconfig.html#python-config), including support for the global enable flag, more support for ENV overrides, and a fix where an ENV variable allows the entire configuration section to be omitted in the YAML file.


