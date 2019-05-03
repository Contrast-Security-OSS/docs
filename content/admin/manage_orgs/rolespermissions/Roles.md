<!--
title: "System, Organization and Application Roles"
description: "Overview of system, organization and application roles within TeamServer"
tags: "Admin manage TeamServer roles observer superadmin system"
-->


## System Roles
Contrast offers system roles for Enterprise on Premises (EOP) customers responsible for administrating and managing the Contrast interface. There are three system roles:

* **SuperAdmin:** The SuperAdmin role is assigned to a select individual or group of individuals who are primarily responsible for the system administration of Contrast. These activities include installation, upgrades, licensing, integrations and other advanced configurations.

* **System Administrator:** The System Administrator role provides one or more users the ability to create, manage and delete organizations and groups. They can view users to assign them to groups.

* **Observer:** The Observer role provides one or more users read-only access to organizations, users, applications, groups and traces.  

## Organization Roles
Every user is provided a default role for the default organization. Users who are included in organization access control groups may be granted various roles across different organizations based on their involvement with a specific organization and the applications associated with that organization. There are four primary organization roles and a fifth role used to exclude users from accessing the organization.

* **Administrator:** The user is responsible for configuration and overall management of the organization. This user can license applications, manage user accounts, make purchases (SaaS Only) and perform other advanced configuration functions found in Organization Settings. 

* **Rules Admin:** The user has Edit-level privilege to rules as well as the ability to manage rule information at the organizational level. This includes tasks such as adding validation and sanitization methods, and adding organization guidance and references to existing rules.

* **Edit:** The user can interact with the full lifecycle of vulnerabilities as well as bring applications online and delete them. This user has no administration capabilities. This role is appropriate for the vast majority of Contrast users. 

* **View:** The user can access the Contrast interface and browse the organization's applications in read-only mode, but can't perform edits to traces or the application.

* **No Access:** The user can access the Contrast interface, but can't access the organization(s) that the administrator chose to block.

## Application Roles
When you include a user in an organization group, you can define individual application roles - in addition to their default organization role - for more granular control of user permissions with an application. By default, a user won't have any access to applications for which they haven't been assigned a role. There are four primary application roles and a fifth role used to block a user from accessing one or more applications.
 
* **Administrator:** The user has no restrictions within the application, including the ability to manage users' access.

* **Rules Admin:** The user has the same functionality as an Edit user; however, this user can also edit rules.

* **Edit:** The user can remediate findings, edit attributes about the application, and create or delete applications, and create servers. 

* **View:** The user has read-only access to the application, which limits the user to viewing application findings in Contrast. 

* **No Access:** The user has no access to the application(s) specifically blocked by an Administrator. 


