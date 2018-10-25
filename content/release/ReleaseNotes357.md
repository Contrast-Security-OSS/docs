<!--
title: "Contrast 3.5.7 - October 2018"
description: "Contrast 3.5.7 October 2018"
tags: "3.5.7 October Release Notes"
-->


## Fixes

* 

## Improvements

* Keep an extra pair of eyes on vulnerabilities closures with our new option to require administrative approval. Go to the **Organization Settings > Applications page** to choose which closed statuses and severities require approval. When a user attempts to close a vulnerability with a status and severity you’ve chosen, the it goes into a Pending state until you approve or deny the change.

* Configure custom metadata fields to consistently tag and identify your applications. Admins must to the **Organization Settings > Applications** page to set up the custom fields, and may also choose to fail an application during onboarding if it doesn’t include all required fields. Users can then add the information during application onboarding with the formatted configuration properties we provide. Once applications are configured successfully, you can search for applications by the metadata, just like you would use any other tags.

* The Jenkins 2.8 plugin lets you query by build numbers or vulnerability timestamps, and also fail a build for only new vulnerabilities. For large-scale deployments, the plugin also supports the use of application UUIDs instead of application names.

## Agent Updates

### Java summary 

The Java agent now reports route-based application coverage for Jersey 2.26+. The Java team fixed an issue in which the agent would fail to instrument certain Equinox classes as well as a false positive when applications used `HttpServletRequest.getContextPath`. Springboot applications using the `contrast.standalone.appname` configuration accurately reports libraries. 

### .NET summary 

The .NET team added “System.Web.Mvc.UrlHelper.IsLocalUrl” as a validator for unsafe redirects, and improved agent performance when analyzed application communicates with web services using HttpClient. We also fixed bugs where the agent would fail to restart when disabling Assess when using profiler chaining, the agent did not respect TeamServerValidateCert in the agent’s configuration file, and the Azure App Service Extension would fail to analyze applications hosted outside of the expected bin directory.
 
### Node.js summary 


### Ruby summary 


### Python summary




