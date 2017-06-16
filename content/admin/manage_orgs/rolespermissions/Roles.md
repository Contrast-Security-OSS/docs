<!--
title: "System, Organization and Application Roles"
description: "Overview of system, organization and application roles within TeamServer"
tags: "Admin manage TeamServer roles observer superadmin system"
-->

## System Roles
Contrast offers system roles for Enterprise on Premises (EOP) customers responsible for administrating and managing the Contrast interface. There are three system roles:

| Role                 | Description                                                                                                                                                                                                                                                          |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SuperAdmin           | The SuperAdmin role is assigned to a select individual or group of individuals who are primarily responsible for the system administration of Contrast. These activities include installation, upgrades, licensing, integrations and other advanced configurations. |
| System Administrator | The System Administrator role provides one or more users the ability to create, manage and delete organizations and groups. They can view users to assign them to groups.
| Observer             | The Observer role provides one or more users read-only access to organizations, users, applications, groups and traces.                                                                                                                                              |

## Organization Roles
Every user is provided a default role for the default organization. Users that are included in organization access control groups may be granted various roles across different organizations based on their involvement with a specific organization and the applications associated with that organization. There are four primary organization roles and a fifth role used to exclude one or more users from accessing the organization.

| Role                 | Description                                                                                                                                                                                                                                                          |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Administrator | The Organization Administrator is responsible for configuration of the organization. This user can license applications, manage user accounts and perform other advanced configuration functions found in Organization Settings. |
| Edit       | The Organization Editor can interact with the full lifecycle of traces and vulnerabilities as well as bring applications online and delete them. This user has no administration capabilities and can't perform any organization administration functions. This role is appropriate for the vast majority of Contrast users. |
| Rules Admin   | The Rules Administrator has edit privilege to rules. Essentially, this user role inherits the same functionality as a user with the Editor role. |
| View          | The user has read-only access to an organization's findings in Contrast. |
| No Access     | The user has no access to the organization. |


## Application Roles
When you include a user in an organization group, you can provide the user with a default organization role, as well as define individual application roles for more granular control of user permissions with an application. By default, a user won't have any access to applications for which they haven't been assigned a role. There are four primary application roles and a fifth role used to block a user from accessing one or more applications.

| Role                 | Description                                                                                                                                                                                                                                                          |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| Administrator | The Organization Administrator has no restrictions within the application. |
| Edit          | The Edit-level user can remediate findings, edit attributes about the application, and create or delete applications and servers. |
| Rules Admin   | The Rules Administrator has the same functonality as an Editor user; however, this user can also edit rules. |
| View          | The user has read-only access to the application, which limits the user to viewing application findings in Contrast. |
| No Access     | The user has no access to the application(s) specified by an Administrator. |


