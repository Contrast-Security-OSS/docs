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
The default configuration of a server (agent) can be defined in the **Servers** overview. The defaults include changing the server environment, log level, enabling/disabling assessment, capturing stacktraces, as well as turning on sampling to improve agent performance. Once you configure the settings, the agent distributed by Contrast inherits these settings.

<a href="assets/images/Server_Settings.png" rel="lightbox" title="Server Settings"><img class="thumbnail" src="assets/images/Server_Settings.png"/></a>

### Automatic Server Clean-up
Automatic server clean-up enables a Contrast background task to run every five minutes to check if there is an organization with cleanup policies configured. For each organization with cleanup policies, Contrast checks if there are one or more servers with no activitiy received within the timeframe configured in the policy. Servers with no activity are disabled automatically and are no longer visible in the Servers grid. 

> Note: Server cleanup only applies to Java and .Net servers.

#### Setting automatic cleanup policies

The **General** section of the **Servers** page includes a checkbox to **Enable automatic server cleanup**. After selecting the box, default values are loaded into the fields as shown. 

<!-- SCREENSHOT -->

You can create as many policies as needed for either a single policy type or muliple policy types.

<!-- The info related to these disabled servers are maintain (vulnerabilities, attacks) -->

Read our article on [Output to Syslog](user_tsguideservers.html#syslog) to learn more about enabling this feature in the **Servers** page.

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

