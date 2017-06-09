<!--
title: "Authentication"
description: "Overview of authentication topics"
tags: "installation setup EOP system settings connect authentication overview "
-->

Contrast supports a variety of authentications providers:

* Embedded: Stored within the Contrast TeamServer database
* LDAP
* Active Directory
* Single Sign-On
* HTTP Header

## Changing Authentication Settings
Changing this setting will require a system restart.

When switching between authentication modes it is important to understand the impact it will have. First and foremost, any users that have been created under the previous authentication mode will no longer work. There is one exception to this rule. If you use email addresses in the target authentication mode and the email address for users is the same between both the old and new authentication provider, the user mappings will continue to work.

After you have setup your new authentication mode and restarted your server, no users will be able to login to the Contrast until their accounts are added to a new or existing organization. The best approach for doing this is for the SuperAdmin to take care of the organization administrator accounts then each organization administrator is responsible for the users within that organization. Note that when using an external authentication provider mode (LDAP or AD), the username field when adding a user functions as a live search showing users that are in the proper group and not already users within the application.