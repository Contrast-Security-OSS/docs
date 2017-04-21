<!--
title: "Manage Users"
description: "Managing Users in Contrast"
tags: "Admin manage organization configuration TeamServer Users roles permissions API"
-->

Administrators have the ability to add users to the system via the SuperAdmin interface (EOP customers only) or within an organization. 

A user may be added to a [system group](admin_manageorgs.html#access) to gain access to the System Administration interface or to perform activities across organizations in [cross-organization groups](admin_manageorgs.html#crossorg). More typically, users can also be added within a single organization with a defined role to determine their application access and privileges.

Go to the **Users** section of the Organization Settings page. From there:

* Onboard any new users by clicking the **Add User** button
* See all users and hone in on anyone specific by searching or using the quick views alongside the user search
* **View** the details of any user by clicking the User Name. This will provide you insight into their persmissions throughout the organization.
* **Edit** a user from the Edit User page by clicking the User Name. Make any modifications as needed. You may change their Organization Role or Application Access Group as well as enable or disable their access Contrast. Make sure to Save changes.
* **Delete** any uesr by simply clicking the trash can icon on the row. This action can also be done if viewing the details of a user in the lower left corner of the Edit User page. Once this action is confirmed, the user is removed and will no longer have access to the organization. 

## User Roles
There are several different roles that can be selected for Users within an organization. We will discuss each of those roles briefly below.

### Administrator
The organization administrator is responsible for overall management of the organization within the Team Server. This user has the ability to add and delete users, update the configuration settings for an organization and make purchases (SaaS Only).

### Rules Admin
The rules administrator has all the privileges of the Edit user plus the ability to manage rule information at the organizational level. This includes things such as adding validation and sanitization methods, and adding organization guidance and references to existing rules.

### Edit
The edit user has all the rights of the view user plus the ability to edit information about traces such as updating triage status and making notes.

### View
The view user can access the user interface and browse the organization's applications in Read-Only mode. The view user does not have the ability to perform and edits to traces or the application.

### API Only Users
The ability also exists to create a so-called API Only User within an organization. This user has the ability to access the Team Server's REST API but not to log in to the user interface. An API Only user can also be granted and of the roles described above (creating administrator API accounts is not recommended).
