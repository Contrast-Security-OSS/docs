<!--
title: "Managing Users in TeamServer"
description: "Managing Users in TeamServer"
tags: "configuration TeamServer Users roles permissions API"
-->

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
