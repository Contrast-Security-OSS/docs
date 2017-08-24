<!--
title: "Create Users"
description: "Creating Users in Contrast TeamServer"
tags: "Admin onboarding TeamServer user settings license defend protection create"
-->

System and Organization Administrators can create users individually, in groups, or through [Active Directory](installation-setupauth.html#ad) or [LDAP](installation-setupauth.html#ldap) integrations. All users are required to have a default organization and a default role within that organization. 

>**Note:** Verify the [Roles](admin-manageorgsroleperm.html#roles) that you want to assign to users so that they have the appropriate level of functionality.

You may decide to designate an [Application Access Group](admin-onboardteam.html#group), which provides more administrative functionality to the users for specific applications or restricts which applications the users in the group can view or modify.

## System Settings

Enterprise-on-Premises (EOP) customers can delegate users to perform system administration functions across organizations such as managing users, groups, applications, licenses, API keys and security policies. This assumes that you created multiple organizations in Contrast as part of a multi-tenant deployment. See [Granting and Revoking SuperAdmin Permissions](admin-manageorgs.html#sa) to get started.

To create users as a System Administrator, go to the **User menu** and choose **SuperAdmin** in the **Use Contrast Security as** section. Select the **Users** page in the top navigation. 

### Individual users

To add a single user, click the button to **Add User** above the grid, and complete the following steps: 

* Enter the user's **First Name**, **Last Name** and **Email Address** in the provided fields. 
* Check the box if you want to **Require email activation** instead of requiring a password.
* Choose which of the **System Roles** shoud apply to the user in the dropdown menu. The default is **None**. 
* Choose the **Organization** to which the user belongs. 
* Once you decide on an organization, you can choose the default **Organization Role** in the dropdown menu as well as an **Application Access Group** in the multiselect field.
* Choose the **Date Format**, **Time Format** and **Time Zone** in the dropdown fields. 
* The box to **Use Organization Settings** is checked by default. You can uncheck the box to create your own settings using the **Access** toggle or the box to **make user API only**. 
* Click the **Add** button to save the user's information. 

<a href="assets/images/User-system-admin.png" rel="lightbox" title="User page for Super Administrators"><img class="thumbnail" src="assets/images/User-system-admin.png"/></a>


### Multiple users 

To bulk add users, click the upload icon above the grid to import a spreadsheet with the users' information. The spreadsheet must be CSV or XLS format, and include the following field for each user: 

* First name 
* Last name 
* Email 
* Organization 
* Organization role 

You may also include the following information for each user in the spreadsheet: 

* Email Activation <br> (if "None", default is **Required Password**)
* System Admin <br> (default is **None**)
* Application access group <br> (default is **Unassigned**)
* Protect <br> (default is **Off**)
* Date Format <br> (default is **MM/dd/YYYY**)
* Time Format <br> (default is **hh:mm a**)
* Time zone <br> (default is your time zone)
* Use Organization Settings <br> (default is **On**)
* Access <br> (default is **On**)
* API only <br> (default is **Off**)

> **Note:** Hover over the upload icon for a reminder of required file formats and information fields. You can also download a **CSV template** by clicking the link in the tooltip. 

Once the spreadsheet upload is in progress, you can leave the page and continue with other tasks in Contrast. If the upload is successful, Contrast shows you a confirmation message with the number of users uploaded. If the upload failed, Contrast shows you an error message with the source of the error on the spreadsheet.

## Organization Settings

To create users as an Organization Administrator, go to the **User menu > Organization Settings > Users tab**. 

### Individual users

To add a single user, click the button to **Add User** above the grid, and complete the following steps: 

* Enter the user's **First Name**, **Last Name** and **Email Address** in the provided fields. 
* Choose the user's **Organization Role** in the dropdown menu. 
* Select an **Application Access Group** to which to add the user in the dropdown menu, if desired. 
* Choose **Date Format**, **Time Format** and **Time Zone** settings in the dropdown menus. 
* If you want to disable the user's access to your organization in the Contrast interface, use the **Access** toggle. (The user has access by default.)
* Check the box if you want the user to have **API Only** access. (The user will have access Contrast's REST API, but won't have access to the Contrast interface.)

<a href="assets/images/Create_User.png" rel="lightbox" title="Add a user as a Super Administrator"><img class="thumbnail" src="assets/images/Create_User.png"/></a>

### Multiple users

To bulk add users, click the upload icon above the grid to import a spreadsheet with the users' information. The spreadsheet must be CSV or XLS format, and include the following field for each user: 

* First name 
* Last name 
* Email 
* Organization role 

You may also include the following information for each user in the spreadsheet: 

* Application access group <br> (default is **Unassigned**)
* Protect <br> (default is **Off**)
* Date Format <br> (default is **MM/dd/YYYY**)
* Time Format <br> (default is **hh:mm a**)
* Time zone <br> (default is your time zone)
* Access <br> (default is **On**)
* API only <br> (default is **Off**)

> **Note:** Hover over the upload icon for a reminder of required file formats and information fields. You can also download a **CSV template** by clicking the link in the tooltip. 

Once the spreadsheet upload is in progress, you can leave the page and continue with other tasks in Contrast. If the upload is successful, Contrast shows you a confirmation message with the number of users uploaded. If the upload failed, Contrast shows you an error message with the source of the error on the spreadsheet.

## User Status

Once added, each user's status is displayed on the main **Users** page so that you can see who's awaiting activation, active or inactive, or locked out of their account based on a security policy. For more information about user administration, read how to [Manage Users](admin-manageorgs.html#manage-user). 

<a href="assets/images/User-grid.png" rel="lightbox" title="Users grid for Organization Administrators"><img class="thumbnail" src="assets/images/User-grid.png"/></a>



