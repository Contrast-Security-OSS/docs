<!--
title: "Granting SuperAdmin to Other Administrators"
description: "EOP guide for granting named SuperAdmin Accounts"
tags: "Admin manage SuperAdmin EOP grant permissions"
-->


## Grant/Revoke SuperAdmin Permissions To Named User Accounts (EOP Only)
Enterprise On-Premise (EOP) customers have the ability to grant one or more named user accounts with SuperAdmin permission. In previous versions of TeamServer, only one user could be identified as a SuperAdmin. This user was often named "contrast_superadmin". Now individual named accounts can be identified and granted SuperAdmin capabilities. 

### Granting And Revoking SuperAdmin Permissions
Permission is granted via the action bar on the User page. Simply search for the user by their email, name or organization. From this page, select the user name to grant or revoke SuperAdmin permissions. Users that are granted SuperAdmin will display a small key icon to the right of their email address.

<a href="assets/images/ActionBar_AdminUser.png" rel="lightbox" title="Admin Action Bar"><img class="thumbnail" src="assets/images/ActionBar_AdminUser.png"/></a>

### Why Grant SuperAdmin Permissions
The number one reason for granting a named user account as SuperAdmin is for auditing purposes. Using a shared account across users is not a best practice and can create issues down the road. We suggest that named user accounts be granted SuperAdmin. Going forward all SuperAdmin activities should come from the named accounts.

SuperAdmins' primary responsibilites include:

* Managing API Keys (Rotating and Sending)
* General Settings
* Configuring Authentication (DB, Active Directory or LDAP)
* Security Policies
* Mail Configuration
* Logging
* License for TeamServer 
* System Messages

### Choosing Between SuperAdmin Vs. System Access Control Groups
If your system administration needs are less about managing the TeamServer and more about managing end users and agent licenses, you may want to consider creating a System Access Control Group. Users that have been granted System Administrator via a System Access Control Group have the ability to perform System Administrator responsibilities which may be sufficient for most administrative users. The list of capabilities includes:

* Creating/Removing Organizations
* Creating/Removing Users
* Creating/Removing Access Control Groups
* User Impersonation
* Application Licensing
