<!--
title: "Understanding User Permissions"
description: "Understanding User Permissions"
tags: "Admin manage TeamServer permissions"
-->

User permissions are dictated by [access control groups](admin-manageorgs.html#access). These groups provide the ability to define capabilities and restrictions to a set of users at either the System or Organization level. Permissions are defined within each access control group, and leverage predefined roles as the input for allowing or restricting capability within the system.

## Viewing User Organization Permissions
Users with System Administration and/or SuperAdmin privileges can review user permissions by going to **System Administration > Users > User Permissions**. If a user has access to more than one organization, they can view organizations individually by toggling between them. They can also filter applications from the list. Each application states the user's role for that application, taking into account any application exceptions that may have been defined in an organization group.

## Viewing User System Permissions
Users with System Administration and/or SuperAdmin privileges can review user permissions by going to **System Administration > Users > User Permissions**. If a user has been included in a System group, they can see the organization as well as the assigned organization role (No Access, SuperAdmin, Observer or System Administrator).

## Viewing Organization Permissions
Each user can view their own permissions within their organization. Within the organization, select "Your Account" from the user menu. This provides a detailed view of the assigned permissions. The matrix communicates the user's role for each application within the organization. 
