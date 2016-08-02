<!--
title: "System, Organization and Application Roles"
description: "Overview of system, organization and application roles within TeamServer"
tags: "TeamServer roles observer superadmin system"
-->

## System Roles
System roles are offered for EOP (Enterprise on Premise) customers responsible for administrating and managing the TeamServer. There are three system roles presently:

| Role                 | Description                                                                                                                                                                                                                                                          |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SuperAdmin           | The SuperAdmin role is assigned to a select individual or group of individuals who is primarily responsible for the system administration of TeamServer. These activities include installation, upgrades, licensing, integrations and other advanced configurations. |
| System Adminsitrator | The system administrator role provides one or more users the ability to create, manage and delete organizations, users and groups.                                                                                                                                   |
| Observer             | The observer role provides one or more users read-only access to organizations, users, applications, groups and traces.                                                                                                                                              |

## Organization Roles
Organization roles have always existed in TeamServer. Every user is provided a default role for the default organization. Users that are included in organization access control groups may be granted various roles across different organizations based on their involvment with a specific organization and the applications associated with that organization. There are four primary organization roles. In addition, a fifth role called "no access" can be used to purposely exclude one or more users from accessing the organization.

| Role                 | Description                                                                                                                                                                                                                                                          |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Administrator | The organization administrator is responsible for configuration of the organization.This user has the ability license applications, manage user accounts and perform other advanced configuration functions found in the organization [settings menu](user_tsguideui.html#overview). |
| Editor        | The organization editor has the ability to interact with the full lifecycle of traces and vulnerabilities. This particular user has no administration capabilities. This user can bring applications online. He/she can delete them as well. No organization administration functions can be performed by a user with this role. The vast majority of users of TeamServer will have this role. |
| Rules Admin   | This user has edit privilege to rules. Essentially, this user role inherits all of the same functionality as a user with the editor role. |
| View          | Some organizations want their users to have read-only access to the findings presented in TeamServer. This role was designed to accommodate read-only access. |

## Application Roles
When a user is included in an organization group, there is an option to provide the user with a default organization role, as well as define individual application roles for more granular control of what a user can or cannot do with an application. There are five application roles:

| Role                 | Description                                                                                                                                                                                                                                                          |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| Administrator | A user with this role has no restrictions with the application. |
| Edit          | The user can remediate findings, edit attributes about the application, create/delete applications and servers. |
| Rules Admin   | This user has edit privilege to rules. Essentially, this user role inherits all of the same functionality as a user with the editor role. |
| View          | Some organizations want their users to have read-only access to the findings presented in TeamServer. This role was designed to accommodate read-only access to the application limiting the user to viewing application findings. |
| No Access     | The user has no access to the application. |

