<!--
title: "Configuring User Accounts"
description: "Startup guide for adding and editing users."
-->

## Getting Started
The primary job of the organizational Administrator is to manage your other Contrast users.

## Adding a User
* From ***/Contrast/login.html*** log in as an admin user
* Click on the **Admin** link in the top menu bar
* Click on the **Manage Users** button 
* Click on the **Create New User** button
* Fill out all the fields for your User. Make sure you verify the **Role** and **Can apply license to trial applications?** options so that your User will have the privileges to carry out the actions you intend.

**Stop here if mail server is set up or you are on SAAS – check email for activation link, else continue:**
* Click on the **Edit** button next to the new User
* Set a password for your User 
* Have that User log in and change their password 

## Editing a User
Administrators can edit users and their privileges via the Organization Settings menu. From there, select Users. A list of all credentialed users will be provided. Users can be removed, locked or edited.

## Groups
* A user's group dictates what privileges they have - it's like a role:
* The **view** group. This group has download and install Contrast and view all the Traces in the organization.
* The **edit** group. This group has all the rights of the **view** group, but can also edit Traces, create Engine profiles, and more.
* The **rules_admin** group. This group has all the rights of the **edit** group, but can also manage the rules for the organization and specific applications. Unless you have a license that supports rule customization, this is the essentially the same as the **edit** group.
* The **admin** group. This group has all the rights of the **rules_admin** group, but can also manage users, security settings, password policies, and more. 

## Password fields
If you don't want to update the user's password, simply leave these fields blank. Otherwise, you can update a user's password to any value, as long as it complies with the organizational [Password Policy](admin_tsconfig.html#pw).

## Enabled field
You can quickly lock out a user by unchecking their **Enabled** field.
