<!--
title: "Granting SuperAdmin to Other Administrators"
description: "EOP guide for granting named SuperAdmin Accounts"
tags: "Admin manage SuperAdmin EOP grant permissions"
-->

Enterprise-on-Premises (EOP) customers can grant one or more named user accounts with SuperAdmin permission. 

## Manage SuperAdmin Permissions

Permission is granted via the action bar on the User page. Simply search for the user by their email, name or organization. From this page, select the user name to grant or revoke SuperAdmin permissions. Users that are granted SuperAdmin will display a small key icon to the right of their email address.

<a href="assets/images/ActionBar_AdminUser.png" rel="lightbox" title="Admin Action Bar"><img class="thumbnail" src="assets/images/ActionBar_AdminUser.png"/></a>

## Use SuperAdmin Permissions

The most common reason to grant a user SuperAdmin permission is auditing purposes. (Sharing an account with multiple users isn't a best practice, and can create issues down the road.) All SuperAdmin activities should come from individual accounts.

SuperAdmins' primary responsibilities include:

* Managing API Keys (rotating and sending)
* General Settings
* Configuring authentication (DB, Active Directory or LDAP)
* Security policies
* Mail configuration
* Logging
* License for the Contrast application  
* System messages

## System Access Control Groups

If your administration needs are less about managing the Contrast application, and more about managing end users and agent licenses, you might want to consider creating a System Access Control Group. Users that have been granted the System Administrator role through a System Access Control Group can perform responsibilities including: 

* Create or remove organizations
* Create or remove users
* Create or remove Access Control Groups
* User impersonation
* Application licensing
