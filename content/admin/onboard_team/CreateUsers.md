<!--
title: "Create Users"
description: "Creating Users in Contrast"
tags: "Admin onboarding user settings license defend protection create"
-->

System and Organization Administrators can create users individually, in groups, or through [Microsoft Active Directory](installation-setupauth.html#ad) (AD) or [LDAP](installation-setupauth.html#ldap) integrations. All users are required to have a default organization and a default role within that organization. 

>**Note:** Verify the [Roles](admin-manageorgsroleperm.html#roles) that you want to assign to users so that they have the appropriate level of functionality.

You may decide to designate an [Application Access Group](admin-onboardteam.html#group), which defines more administrative functionality or greater access restrictions for the users for specific applications.

## System Settings

As an Enterprise-on-Premises (EOP) customer, you can delegate users to perform system administration functions across organizations - such as managing users, groups, applications, licenses, API keys and security policies - if you created multiple organizations in Contrast as part of a multi-tenant deployment. See [Granting and Revoking SuperAdmin Permissions](admin-manageorgs.html#sa) to get started.

To create users as a System Administrator, go to the **User menu** and choose **SuperAdmin** in the **Use Contrast Security as** section. Select the **Users** page in the top navigation. 

### Individual users

To add a single user, complete the following steps. 

* Click the button above the grid to **Add User**.
* Enter the user's **First Name**, **Last Name** and **Email Address** in the provided fields. 
* Check the box if you want to **Require email activation** instead of requiring a password.
* Choose which of the **System Roles** should apply to the user in the dropdown menu. The default is **None**. 
* Choose the **Organization** to which the user belongs. 
* Choose the default **Organization Role** in the dropdown menu as well as an **Application Access Group** in the multiselect field.
* Choose the **Date Format**, **Time Format** and **Time Zone** in the dropdown menus. 
* The box to **Use Organization Settings** is checked by default. Uncheck the box to **Use Organization Settings** to create your own settings using the **Access** toggle, or to enable the checkbox to **make user API only**. 
* Use the toggle to enable **Protect** access for the user. The toggle is **off** by default. 
* Click the **Add** button to save the information and create the user.  

<a href="assets/images/Add-user-system-settings.png" rel="lightbox" title="Add a user as a SuperAdmin"><img class="thumbnail" src="assets/images/Add-user-system-settings.png"/></a>


### Multiple users 

To bulk add users, click the upload icon above the grid in the **Users** page to import a spreadsheet with the users' information. The spreadsheet must be CSV format, and include the following fields for each user. **All field headings and values in the spreadsheet must be formatted as shown.** 

#### Required information 

The following fields must be included in the spreadsheet. See the **Templates** section to download spreadsheets in CSV format. 

* **First Name** 
* **Last Name**
* **Email** or **Username** <br> See the **Authentication** section below for more requirements. 
* **Organization UUID** <br> To find the Organization UUID in the Contrast UI, impersonate the appropriate organization, and then go to the **Organization Settings > Organization tab > General Information** section.
* **Organization Role** <br> Values can be "View", "Edit", "Rules_admin" or "Admin".

#### Optional information 

To include the following fields in the spreadsheet, add a new column and value(s) for each as written below. 

* **Date Format** <br> The default value is the organization setting, such as "MM/dd/YYYY".
* **Time Format** <br> The default value is the organization setting, such as "hh:mm a".
* **Timezone** <br> The default value is the organization time zone.
* **Protect** <br> The default value is "Off".
* **Groups** <br> Values can be "View", "Edit", "Rules Admin", "Admin" or custom group names. Format multiple group names as "GroupA&&GroupB&&GroupC".
* **Language** <br> The value is determined by the value of the `lang.default` property in the *general.properties* configuration file for the Contrast application. The default value of the configuration property is `en` (English). 
* **System Administration** <br> The default value is "Off".
* **Email Activation** <br> If the value is "None", the default is "Required Password".
* **Password** <br> This field is required if the **Email Activation** field is set to "false". 
* **API only** <br> The default value is "Off".
* **Access** <br> The default value is "On".

#### Authentication methods

Users who have [HTTP Header](installation-setupauth.html#http-proxy), [LDAP](installation-setupauth.html#ldap) or [AD](installation-setupauth.html#ad) authentication configured must use the field heading **Username** in the spreadsheet. (If using the provided CSV template, you must replace the **Email** field heading with **Username**.) The username values entered in the spreadsheet and the authentication configuration must match exactly. 

#### Templates

Download **CSV templates** directly from the Contrast UI by hovering over the upload icon and clicking the link in the tooltip, or by clicking the links below. 

* [Database or SSO authentication](assets/attachments/user_upload/Contrast-user-upload-template-superadmin-email.csv)
* [HTTP Header, LDAP or AD authentication](assets/attachments/user_upload/Contrast-user-upload-template-superadmin-username.csv)

#### Upload progress

Once the spreadsheet upload is in progress, you can leave the page and continue with other tasks in Contrast. If the upload is successful, you'll see a confirmation message in the UI that includes the number of users uploaded. If the upload failed, you'll see an error message that includes the source of the error in the spreadsheet.

## Organization Settings

To create users as an Organization Administrator, go to the **User menu > Organization Settings > Users tab**. 

### Individual users

To add a single user, complete the following steps. 

* Click the button to **Add User** above the grid.
* Enter the user's **First Name**, **Last Name** and **Email Address** in the provided fields. 
* Choose the user's **Organization Role** in the dropdown menu. 
* Select an **Application Access Group** to which to add the user in the dropdown menu, if desired. 
* Choose **Date Format**, **Time Format** and **Time Zone** settings in the dropdown menus. 
* If you want to disable the user's access to your organization in the Contrast UI, use the **Access** toggle. (The user has access by default.)
* Check the box if you want the user to have **API Only** access. <br> (The user will have access Contrast's REST API, but won't have access to the Contrast UI.)
* Use the toggle to enable **Protect** access for the user. The toggle is **off** by default. 
* Click the **Add** button to save the information and create the user.  

<a href="assets/images/Add-user-org-settings.png" rel="lightbox" title="Add a user as an OrgAdmin"><img class="thumbnail" src="assets/images/Add-user-org-settings.png"/></a>

### Multiple users

To bulk add users, click the upload icon above the grid in the **Users** page to import a spreadsheet with the users' information. The spreadsheet must be CSV format, and include the following fields for each user. **All field headings and values in the spreadsheet must be formatted as shown.** 

#### Required information 

The following fields must be included in the spreadsheet. See the **Templates** section to download spreadsheets in CSV format. 

* **First Name**
* **Last Name** 
* **Email** or **Username** <br> See the **Authentication** section below for more requirements. 
* **Organization Role** <br> Values can be "View", "Edit", "Rules_admin" or "Admin".

#### Optional information 

To include the following fields in the spreadsheet, add a new column and value(s) for each as written below. 

* **Groups** <br> Values can be "View", "Edit", "Rules Admin", "Admin" or custom group names. Format multiple group names as "GroupA&&GroupB&&GroupC".
* **Date Format** <br> The default value is the organization setting, such as "MM/dd/YYYY".
* **Time Format** <br> The default value is the organization setting, such as "hh:mm a".
* **Timezone** <br> The default value is the organization time zone.
* **API only** <br> The default value is "Off".
* **Access** <br> The default value is "On".
* **Protect** <br> The default value is "Off".

#### Authentication methods

Users who have [HTTP Header](installation-setupauth.html#http-proxy), [LDAP](installation-setupauth.html#ldap) or [AD](installation-setupauth.html#ad) authentication configured must use the **Username** field heading in the spreadsheet. (If using the provided CSV template, you must replace the **Email** field heading with **Username**.) The username values entered in the spreadsheet and the authentication configuration must match exactly.  

#### Templates

Download CSV-formatted templates directly from the Contrast UI by hovering over the upload icon and clicking the link in the tooltip, or by clicking the links below. 

* [Database or SSO authentication](assets/attachments/user_upload/Contrast-user-upload-template-organizationadmin-email.csv)
* [HTTP Header, LDAP or AD authentication](assets/attachments/user_upload/Contrast-user-upload-template-organizationadmin-username.csv)
 
#### Upload progress

Once the spreadsheet upload is in progress, you can leave the page and continue with other tasks in Contrast. If the upload is successful, Contrast shows you a confirmation message with the number of users uploaded. If the upload failed, Contrast shows you an error message with the source of the error on the spreadsheet.

## User Status

Once added, each user's status is displayed on the main **Users** page so that you can see who's awaiting activation, active or inactive, or locked out of their account based on a security policy. For more information about user administration, read how to [Manage Users](admin-manageorgs.html#manage-user). 

<a href="assets/images/User-grid.png" rel="lightbox" title="Users grid for Organization Administrators"><img class="thumbnail" src="assets/images/User-grid.png"/></a>


