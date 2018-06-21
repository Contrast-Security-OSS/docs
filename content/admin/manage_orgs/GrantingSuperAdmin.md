<!--
title: "Granting SuperAdmin to Other Administrators"
description: "EOP guide for granting named SuperAdmin Accounts"
tags: "Admin manage SuperAdmin EOP grant permissions"
-->

Enterprise-on-Premises (EOP) customers can grant SuperAdmin permission to one or more user accounts. 

## Manage SuperAdmin Permissions

SuperAdmins can grant permission by navigating to the **user menu > SuperAdmin > User page**. To find the recipient, search for the user by their email, name or organization, or find their name in the grid. Select the user name to go to the **Edit User** page, where you can update their permission level to **SuperAdmin** in the **System Administration** field. 

<a href="assets/images/Edit-user.png" rel="lightbox" title="Edit user permission"><img class="thumbnail" src="assets/images/Edit-user.png"/></a>

> **Note:** You can quickly identify SuperAdmin users by the key icon by their user name in the grid.

## Use SuperAdmin Permissions

Users are most commonly granted SuperAdmin permission for auditing purposes. A SuperAdmin's primary responsibilities include:

* Managing [API Keys](admin-systemsecurity.html#manage-api) 
* General Settings
* Configuring [authentication](installation-setupauth.html)
* Security policies
* Mail configuration
* [Logging](installation-setupconfig.html#log)
* License for the Contrast application  
* [System messages](admin-systemsettings.html#message)

> **Note:** All SuperAdmin activities should come from individual accounts. Sharing an account with multiple users isn't a best practice, and can create issues down the road.

## System Access Control Groups

If your administration needs are less about managing the Contrast application, and more about managing end users and agent licenses, you might want to create a System Access Control Group. Users that have been granted the System Administrator role through a System Access Control Group can perform responsibilities including: 

* Create or remove [organizations](admin-onboardteam.html#org)
* Create or remove [users](admin-onboardteam.html#create-user)
* Create or remove [Access Control Groups](admin-manageorgs.html#access)
* User impersonation
* [Application licensing](user-apps.html#license)

## Learn More

* [Overview of System Settings](admin-systemsettings.html#system-glance)
* [User Roles & Permissions](admin-manageorgsroleperm.html#roles)

