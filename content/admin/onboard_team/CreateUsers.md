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
* Choose which of the **System Roles** should apply to the user in the dropdown menu. The default is **None**. 
* Choose the **Organization** to which the user belongs. 
* Once you decide on an organization, you can choose the default **Organization Role** in the dropdown menu as well as an **Application Access Group** in the multiselect field.
* Choose the **Date Format**, **Time Format** and **Time Zone** in the dropdown fields. 
* The box to **Use Organization Settings** is checked by default. You can uncheck the box to create your own settings using the **Access** toggle or the box to **make user API only**. 
* Click the **Add** button to save the user's information. 

<a href="assets/images/User-system-admin.png" rel="lightbox" title="Add a user as a Super Administrator"><img class="thumbnail" src="assets/images/User-system-admin.png"/></a>


### Multiple users 

To bulk add users, click the upload icon above the grid in the **Users** page to import a spreadsheet with the users' information. The spreadsheet must be CSV format, and include the following fields for each user. **All field headings and values in the spreadsheet must be formatted as shown.** 

* **First Name** 
* **Last Name**
* **Email** <br> (For users who have [HTTP Header](installation-setupauth.html#http-proxy) or [LDAP authentication](installation-setupauth.html) configured, the field should appear as **Username**.) 

* **Organization UUID**

> **Note:** Find the Organization UUID in the Contrast interface by impersonating the appropriate organization, and then going to **Organization Settings > Organization tab > General Information section**. 

* **Organization Role** <br> ("View", "Edit", "Rules_admin" or "Admin")

Hover over the upload icon to see tooltip with a list of the required fields. You can also download **CSV templates** that include [the Email field](assets/attachments/user_upload/Contrast-user-upload-template-superadmin-email.csv) or [the Username field](assets/attachments/user_upload/Contrast-user-upload-template-superadmin-username.csv) by clicking the links in the tooltip. 

#### Optional information 

The following information is optional for each user. To include the fields in the spreadsheet, add a new column and value(s) for each as given below. 

* **Email Activation** <br> (If "None", default is "Required Password")
* **System Administration** <br> (Default is "Off")
* **Application access group** <br> (View, Edit, Rules Admin, Admin or custom group names; format multiple group names as "GroupA&GroupB&GroupC")
* **Date Format** <br> (Default is the organization setting, such as "MM/dd/YYYY")
* **Time Format** <br> (Default is the organization setting, such as "hh:mm a")
* **Time zone** <br> (Default is the organization time zone)
* **Access** <br> (Default is "On")
* **API only** <br> (Default is "Off")

Once the spreadsheet upload is in progress, you can leave the page and continue with other tasks in Contrast. If the upload is successful, Contrast shows you a confirmation message with the number of users uploaded. If the upload failed, Contrast shows you an error message with the source of the error on the spreadsheet.

## Organization Settings

To create users as an Organization Administrator, go to the **User menu > Organization Settings > Users tab**. 

### Individual users

To add a single user, click the button to **Add User** above the grid, and complete the following steps: 

* Enter the user's **First Name**, **Last Name** and **Email Address** in the provided fields. 
* Choose the user's **Organization Role** in the dropdown menu. 
* Select an **Application Access Group** to which to add the user in the dropdown menu, if desired. 
* Choose **Date Format**, **Time Format** and **Time Zone** settings in the dropdown menus. 
* If you want to disable the user's access to your organization in the Contrast interface, use the **Access** toggle. <br> (The user has access by default.)
* Check the box if you want the user to have **API Only** access. <br> (The user will have access Contrast's REST API, but won't have access to the Contrast interface.)

<a href="assets/images/Create_User.png" rel="lightbox" title="Add a user as an Organization Administrator"><img class="thumbnail" src="assets/images/Create_User.png"/></a>

### Multiple users

To bulk add users, click the upload icon above the grid in the **Users** page to import a spreadsheet with the users' information. The spreadsheet must be CSV format, and include the following fields for each user. **All field headings and values in the spreadsheet must be formatted as shown.** 

* **First Name**
* **Last Name** 
* **Email** <br> (For users who have [HTTP Header](installation-setupauth.html#http-proxy) or [LDAP authentication](installation-setupauth.html) configured, the field should appear as **Username**.) 

* **Organization Role** <br> ("View", "Edit", "Rules_admin" or "Admin")

Hover over the upload icon to see a tooltip with a list of the required fields. You can also download **CSV templates** that include [the Email field](assets/attachments/user_upload/Contrast-user-upload-template-organizationadmin-email.csv) or [the Username field](assets/attachments/user_upload/Contrast-user-upload-template-organizationadmin-username.csv) by clicking the links in the tooltip. 

#### Optional information 

The following information is optional for each user. To include the fields in the spreadsheet, add a new column and value(s) for each as given below. 

* **Application access group** <br> (View, Edit, Rules Admin, Admin or custom group names; format multiple group names as "GroupA&GroupB&GroupC")
* **Protect** <br> (Default is "Off")
* **Date Format** <br> (Default is the organization setting, such as "MM/dd/YYYY")
* **Time Format** <br> (Default is the organization setting, such as "hh:mm a")
* **Time zone** <br> (Default is the organization time zone)
* **Access** <br> (Default is "On")
* **API only** <br> (Default is "Off")

Once the spreadsheet upload is in progress, you can leave the page and continue with other tasks in Contrast. If the upload is successful, Contrast shows you a confirmation message with the number of users uploaded. If the upload failed, Contrast shows you an error message with the source of the error on the spreadsheet.

## User Status

Once added, each user's status is displayed on the main **Users** page so that you can see who's awaiting activation, active or inactive, or locked out of their account based on a security policy. For more information about user administration, read how to [Manage Users](admin-manageorgs.html#manage-user). 

<a href="assets/images/User-grid.png" rel="lightbox" title="Users grid for Organization Administrators"><img class="thumbnail" src="assets/images/User-grid.png"/></a>



