<!--
title: "Organization Settings at a Glance"
description: "Overview of administrating and managing an organization."
tags: "Admin TeamServer organization settings"
-->

Organization Administrators have access to a variety of configuration settings for operating and managing an organization, such as administering users and setting up password policy, integrations and server defaults. Go to the **User menu* and choose **Organization Settings** to see all of the functions available. 

<!-- <a href="assets/images/Settings_Nav.png" rel="lightbox" title="Organization Settings"><img class="thumbnail" src="assets/images/Settings_Nav.png"/></a> --> 

## General Information
View basic information about your organization and configure high-level preferences including date and time formats in the **Organization** tab. 

## Groups
Use [Organization groups](admin-manageorgs.html#access) to designate a user's organization and application role, which determines what users can see and do in Contrast. You can create, view, edit and delete groups at any time. 

## Users
Manage users for an organization, by [adding](admin-onboardteam.html#create-user), editing or deleting them. You can also assign users to a default group (or role), designate them for API-only use and unlock their account. 

## Security
Manage [password policy](admin-systemsecurity.html#pwd) and session timeouts, [two-step verification](admin-orgsecurity.html#security-tsv) and [IP restrictions](admin-orgsecurity.html#security-ip). You can also access an [audit log](admin-orgsecurity.html#audit-log), where you can search for past activity in your organization by keyword and date.

## SSO

Single Sign-On (SSO) is an authentication service that allows access to multiple applications using one set of credentials. As a Super or Organization Administrator, you can [configure Contrast to use this service](installation-setupauth.html#sso-setup) for your organization.

## API
Contrast [APIs](tools-api.html#api-about) allow you to grant access to other services. You may have API keys emailed to you, and rotate keys as needed. 

## Integrations
Contrast offers basic [integrations](admin-orgintegrations.html) with various tools including bugtrackers (JIRA, Bugzilla and Serena) and notification channels (Slack, HipChat and generic Webhooks). Authorize and connect the tools you need to streamline workflows.

## Servers 
[Server Settings](admin-orgsettings.html#org-server) provide default configurations for new servers (agents) that are being brought on board. You can customize these configurations for each environment.

## Notifications
[Notifications](admin-orgsettings.html#org-notify) provide a mechanism for Contrast to alert users in specific cases, such as the discovery of a vulnerability or an attack on an application. These notifications occur in Contrast and/or by email. Organization Administrators can set the default notification settings for all users in their organization. 

## Report Settings
[Report Settings](admin-orgsettings.html#org-report) offer a centralized view of format options for hard-copy reports in your organization. Categories include:

* Report Type
* Vulnerability Status
* Vulnerability Tag
* Custom Footer

## Score Settings

[Score Settings](admin-orgsettings.html#score-settings) allow you to customize how Contrast calculates **Overall Score** and **Library Score**, and determine what letter grade (or score) is assigned within Contrast.   

