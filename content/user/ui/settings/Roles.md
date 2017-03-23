<!--
title: "System, Organization and Application Roles"
description: "Overview of system, organization and application roles within TeamServer"
tags: "TeamServer roles observer superadmin system"
-->

## System Roles
Contrast offers system roles for Enterprise on Premises (EOP) customers responsible for administrating and managing the Contrast UI. There are three system roles:

| Role                 | Description                                                                                                                                                                                                                                                          |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SuperAdmin           | The SuperAdmin role is assigned to a select individual or group of individuals who are primarily responsible for the system administration of Contrast. These activities include installation, upgrades, licensing, integrations and other advanced configurations. |
| System Administrator | The System Administrator role provides one or more users the ability to create, manage and delete organizations and groups. They can view users to assign to groups.
| Observer             | The Observer role provides one or more users read-only access to organizations, users, applications, groups and traces.                                                                                                                                              |

## Organization Roles
Every user is provided a default role for the default organization. Users that are included in organization access control groups may be granted various roles across different organizations based on their involvement with a specific organization and the applications associated with that organization. There are four primary organization roles and a fifth role used to exclude one or more users from accessing the organization.

| Role                 | Description                                                                                                                                                                                                                                                          |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Administrator | The Organization Administrator is responsible for configuration of the organization. This user has the ability to license applications, manage user accounts and perform other advanced configuration functions found in [Organization Settings](user_tsguideui.html#overview). |
| Editor        | The Organization Editor can interact with the full lifecycle of traces and vulnerabilities as well as bring applications online and delete them. This user has no administration capabilities and can't perform any organization administration functions. This role is appropriate for the vast majority of Contrast users. |
| Rules Admin   | The Rules Administrator has edit privilege to rules. Essentially, this user role inherits the same functionality as a user with the Editor role. |
| View          | The user has read-only access to an organization's findings in Contrast. |
| No Access     | The user has no access to the organization. |


## Application Roles
When you include a user in an organization group, you have the option to provide the user with a default organization role, as well as define individual application roles for more granular control of what a user can or cannot do with an application. There are five application roles:

| Role                 | Description                                                                                                                                                                                                                                                          |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| Administrator | The Organization Administrator has no restrictions within the application. |
| Edit          | The Editor can remediate findings, edit attributes about the application, and create or delete applications and servers. |
| Rules Admin   | The Rules Administrator has edit privilege to rules. Essentially, this user role inherits the same functionality as a user with the Editor role. |
| View          | The user has read-only access to the application, which limits the user to viewing application findings in Contrast. |
| No Access     | The user has no access to the application. |

