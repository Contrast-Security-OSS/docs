<!--
title: "Contrast 3.1.3 Release Notes - January 22, 2015"
description: "Contrast 3.1.3 Release Notes - Jan 22, 2015"
-->

## On-Premises Installer
* New Look and Feel
* Added ability to customize how the contrast-server service is managed for Linux.
* Create a custom user/group, use an existing user/group or use the standard contrast_service user
* Use sudo, su or runas
* Rebuild LDAP Configuration to allow more complex integrations with Enterprise LDAP Servers
* Fixed bug where backup directory occasionally was set to the wrong permissions in Linux

## Java Agent 
* Support for Java 8
 
## .NET Agent
* Users can now customize the application name used by Contrast via an appSetting in the application’s web.config.
````
<add key="Contrast.AppName" value="MyAppNameHere" />
````
* Fixed several signatures for XPath Injection.
* ASP.NET AJAX UpdatePanel’s async postback should no longer be broken by the agent.
* The agent should no longer create an ever-increasing number of child threads. Additionally, the agent’s service should no longer crash due to a stack overflow exception.
* Resource handles should now be properly released by the agent.
* The agent’s service should now stop successfully when asked to stop.
 
## Team Server
* Added more detailed configuration for LDAP Enterprise Deployments (EOP Only)
* More information on configuring LDAP can be found in the EOP Administrator's Guide
* Fixed bug where "Suppress for this app" and "Disable for this app" options were not always working in the trace viewer
* Fixed bug where auto-complete findings were not rendering correctly 
