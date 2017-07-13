<!--
title: "Manage Users"
description: "Managing Users in Contrast"
tags: "Admin manage organization configuration TeamServer Users roles permissions API"
-->

Administrators (EOP customers only) can add users to the system via the SuperAdmin interface or within an organization. Adding a user to a [system group](admin-manageorgs.html#access) provides them access to the System Administration interface or allows them to perform activities across organizations in [cross-organization groups](admin-manageorgs.html#crossorg). More often, you can also add users within a single organization with a defined role to determine their application access and privileges.

To get started, go to the **Users** tab in the Organization Settings page. From there:

* Onboard new users by clicking the **Add User** button.
* See all users or focus on one in particular with the user search or quick views beside the search field.
* **View** the details of any user, including their permissions throughout the organization, by clicking the User Name.
* **Edit** a user from the **Edit User** page by clicking the User Name and make any modifications as needed. You can change their Organization Role or Application Access Group as well as enable or disable their access Contrast. Make sure to **Save** changes.
* **Delete** a user by clicking the trash can icon on the row. This action is also available in the lower-left corner of the Edit User page when viewing the details of a user. Once the action is confirmed, the user is removed and no longer has access to the organization. 

## User Roles
There are several roles that an administrator can assign to users within an organization. By default, the user doesn't possess any roles. If no role is assigned to a user for any or all applications, the user has no access to those applications. To learn more about each role, go to the [System, Organization and Application Roles](admin-manageorgsroleperm.html#roles) article. 

> **Note:** API-Only users can access Contrast's REST API, but can't log in to the user interface. Contrast doesn't recommend the creation of administrator API accounts.

