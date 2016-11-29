<!--
title: "Organization Settings"
description: "Overview of administrating and managing an organization."
tags: "TeamServer organization settings"
-->

Organization administrators have access to a number of configuration settings specific to operating and managing an organization. This includes administering users as well as setting up password policy, integrations, server defaults and more. These settings can be found by selecting **Organization Settings** in the [User menu](user_tsguideui.html#overview).

<a href="assets/images/Settings_Nav.png" rel="lightbox" title="Organization Settings"><img class="thumbnail" src="assets/images/Settings_Nav.png"/></a>
 
## General Information And Licensing
View basic information about your organization and configure high level preferences such as Date and Time formats. Get a picture of your organization's licensing. A summary will show the number of licenses being used as well as the number of licenses available to allocate to other assets. 

## Groups
[Organization groups](user_tsguideset.html#group) can be viewed, created, edited and deleted. Organization administrators use groups to designate a user's organization and application role. This provides the ability to customize what users can see and do in Contrast.

## Users
Manage users for an organization, including the ability to [add](user_tsguideset.html#user), edit or delete. Users can be assigned a default group (or role), be designated for API-Only use, and unlocked if for some reason they've been locked out. 

## Security
Organization administrators can manage [password policy](admin_tsconfig.html#pw), [IP restrictions](admin_tsconfig.html#ip), [two-step verification](admin_tsconfig.html#tsv) and session timeouts. In addition, an audit log is available and searchable by keyword and date.

## API
Contrast APIs are available to organization administrators for allowing access to other services. Get API keys emailed or rotate keys as needed. Learn more about it in our [API Documentation](dev_api3.html#openapi).

## Integrations
Contrast offers basic [integrations](user_tsguideset.html#integrate) with various tools including bugtrackers (JIRA, Bugzilla, and Serena) and notification channels (Slack, HipChat, and generic Webhooks). Authorize and connect the tools needed to streamline workflows.

## App Mappings
Consolidate multiple applications into a single, [merged application](user_tsguideapp.html#merge). The parent and child relationships of merged applications are visualized. These mappings can also be removed, which decouples a merged application from another application.

## Servers
The default configuration of a server (agent) can be defined here. The defaults include changing the server environment, log level, enabling/disabling assessment, capturing stacktraces, as well as turning on sampling to improve agent performance. Once the settings have been configured, the agent distributed by Contrast will inherit these settings.

<a href="assets/images/Server_Settings.png" rel="lightbox" title="Server Settings"><img class="thumbnail" src="assets/images/Server_Settings.png"/></a>

## Notifications
[Notifications](user_tsguideset.html#notifications) provide a mechanism for users of Contrast to be alerted in specific cases, such as the discovery of a vulnerability or an application being attacked. Based on what's enabled, these notifications can occur in Contrast and/or via email. Organization administrators can set the default notification settings for all users in their organization. 

## Report Settings
Report settings offer a single interface for organization administrators to define the template of hard copy reports. This essentially involves defining the default values for reports such as:

* Report Type
* Vulnerability Status
* Custom Footer

## Score Settings
Score settings for libraries can be customized by organization administrators. This setting provides the ability to configure vulnerability-only scoring or to use the default scoring algorithm, which includes the date and versioning of a library. In addition, the option is there to fail libraries that are in violation of any set library policy.

<a href="assets/images/Org_Score_Settings.png" rel="lightbox" title="Library Score Settings"><img class="thumbnail" src="assets/images/Org_Score_Settings.png"/></a>

