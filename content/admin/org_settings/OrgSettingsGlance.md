<!--
title: "Organization Settings at a Glance"
description: "Overview of administrating and managing an organization."
tags: "Admin TeamServer organization settings"
-->

Organization administrators have access to a variety of configuration settings that are specific to operating and managing an organization, such as administering users and setting up password policy, integrations and server defaults. You can find these settings by selecting **Organization Settings** in the user menu.

<a href="assets/images/Settings_Nav.png" rel="lightbox" title="Organization Settings"><img class="thumbnail" src="assets/images/Settings_Nav.png"/></a>
 
## General Information and Licensing
View basic information about your organization and configure high-level preferences such as Date and Time formats. Get a picture of your organization's licensing. A summary shows the number of licenses being used as well as the number of licenses available to allocate to other assets. 

## Groups
[Organization groups](admin_manageorgs.html#access) can be viewed, created, edited and deleted. Organization administrators use groups to designate a user's organization and application role. This provides the ability to customize what users can see and do in Contrast.

## Users
Manage users for an organization, including the ability to [add](admin_onboardteam.html#user), edit or delete them. Users can be assigned a default group (or role), designated for API-only use and unlocked if they've been locked out. 

## Security
Organization administrators manage [password policy](admin_systemsettings.html#pwd), [IP restrictions](admin_policymgmt.html#ip), [two-step verification](admin_systemsettings.html#twostep) and session timeouts. An audit log is also available and searchable by keyword and date.

## API
Contrast APIs are available to organization administrators for allowing access to other services. Get API keys emailed or rotate keys as needed. Learn more about them in our [API Documentation](tools_api.html#about).

## Integrations
Contrast offers basic [integrations](admin_orgsettings.html#integrate) with various tools including bugtrackers (JIRA, Bugzilla and Serena) and notification channels (Slack, HipChat and generic Webhooks). Authorize and connect the tools you need to streamline workflows.

## Servers 
[Server Settings](admin_orgsettings.html#org-server) provide default configurations to be applied to new servers (agents) being brought on board. You can customize these configurations specifically to each environment.

## Notifications
[Notifications](admin_orgsettings.html#notify) provide a mechanism for Contrast users to be alerted in specific cases, such as the discovery of a vulnerability or an application being attacked. These notifications can occur in Contrast and/or via email, depending on what options are enabled. Organization administrators can set the default notification settings for all users in their organization. 

## Report Settings
[Report settings](admin_orgsettings.html#report) offer a single interface for organization administrators to define the template of hard-copy reports. This essentially involves defining the default values for reports such as:

* Report Type
* Vulnerability Status
* Custom Footer

## Score Settings
[Score settings](admin_orgsettings.html#score-settings) allow for customization of how **Overall Application Score** and **Library Score** gets calculated and determines what letter grade (or score) is communicated within Contrast.   