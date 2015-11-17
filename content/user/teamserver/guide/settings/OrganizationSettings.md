<!--
title: "Organization Settings"
description: "Overview of administrating and managing an organization."
-->

## About Organization Settings
Organization administrators have access to a menu of configuration settings specific for operating and managing users, servers and applications within an organization. Organization settings can be found by selecting "Organization Settings" from the [Settings menu](user_tsguideui.html#overview).

<a href="assets/images/Settings_Nav.png" rel="lightbox" title="Organization Settings"><img class="thumbnail" src="assets/images/Settings_Nav.png"/></a>
 
## Alerts
[Alerts](user_tsguideset.html#alert) provide a mechanism for users of TeamServer to construct rules and/or conditions to notify them via email about the discovery of a vulnerability under a particular threshold or condition.

## Security
Organization administrators can manage [password policies](admin_tsconfigset.html#pw), [IP restrictions](admin_tsconfigset.html#ip) and session timeouts. In addition, the audit log is searchable by keyword and date.

## API
Organization administrators navigate to the API settings page in order to email API keys, rotate keys and launch the [API Documentation Tool](dev_api3.html#openapi).

## BugTrackers
TeamServer offers basic integrations with various [issue and defect management systems](user_tsguideset.html#defect): Bugzilla, JIRA and Serena.

## App Mappings
TeamServer offers a capability to consolidate multiple applications into a single, [merged application](user_tsguideapp.html#merge). The relationships of merged applications are visualized from the Application Mappings page, where the parent and child applications are listed. In addition, the mappings can be removed, which decouples a merged application from another application.

## Groups
[Organization groups](user_tsguideset.html#group) can be viewed, created, edited and deleted from this Settings page. Organization administrators use groups to define a user's organization and application role. 

## Users
Users can be [created](user_tsguideset.html#user) and assigned a default organization from this Settings page. Users can also be edited and deleted from this page by organization administrators.

## Report Settings
The Report Settings page offers a single interface for organization administrators to define the template for hardcopy reports. This essentially involves defining the default values for reports such as:

* Report Type
* Vulnerability Status
* Custom Footer

## Score Settings
The score settings for libraries can be customized from the Organization Settings page. This setting allows organization administrators the ability to configure vulnerability-only scoring or use the default scoring algorithm which includes the date and versioning of a library.

<a href="assets/images/Org_Score_Settings.png" rel="lightbox" title="Library Score Settings"><img class="thumbnail" src="assets/images/Org_Score_Settings.png"/></a>

## Servers
The default configuration of a server (agent) can be configured from this Settings page. The defaults include changing the server environment, log level, enabling/disabling assessment, capturing stacktraces, as well as turning on sampling to improve agent performance. Once the settings have been configured, the agent distributed by TeamServer will inherit these settings.

<a href="assets/images/Server_Settings.png" rel="lightbox" title="Server Settings"><img class="thumbnail" src="assets/images/Server_Settings.png"/></a>
