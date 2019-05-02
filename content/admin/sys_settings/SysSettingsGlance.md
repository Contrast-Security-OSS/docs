<!--
title: "System Settings at a Glance"
description: "How to access system settings"
tags: "admin access system settings"
-->

Enterprise-on-Premises (EOP) customers can manage their own instance of Contrast, including security policy, database settings and authentication. To modify system configuration settings for the Contrast application, you must have the [SuperAdmin role](admin-manageorgsroleperm.html#roles). Individual users can be granted SuperAdmin permission on a case-by-case basis. Organization administators, known as OrgAdmins, can also access and change many of these settings for a specific organization in **Organization Settings**.

### Find System Settings

To get started in System Settings, log in to the Contrast UI. In the top right corner (by your profile name and image) of the screen, select the dropdown **user menu** and then **SuperAdmin**. Once you're in the SuperAdmin view, open the user menu again, and select **System Settings**.

<a href="assets/images/System-settings-menu.png" rel="lightbox" title="Navigate to System Settings"><img class="thumbnail" src="assets/images/System-settings-menu.png"/></a>

## General Settings

General settings define the Contrast application URL for both browsing and RESTful requests. If you want to integrate with [Contrast Hub](https://hub.contrastsecurity.com) for library and CVE updates, you can select the option to "Try Hub". Any change to this value will require you to [Restart Contrast](installation-setupinstall.html#restart).

If you moved the installation, or had to change the hostname or IP address, simply update the **TeamServer URL** field with the new value. Again, any change will require a system restart. 

>**Note:** You will have to replace your agents so they know which address they should report to.

## Licensing

In the **Licensing** page, get a glimpse of license allocation, see if any licenses are nearing expiration, and update your license when needed. For more information, read how to [Manage Licenses](admin-manageorgs.html#manage-license) in **Organization Settings**. 

## Policy

Use the **Policy** page to manage the [compliance policy](admin-policymgmt.html#compliance-policy) for your organization(s) by creating restrictions or version requirements for libraries. Contrast will then flag libraries that violate the compliance settings, and alert you to violation.

## Security

Manage [password policies](admin-systemsecurity.html#pwd), [two-step verification](admin-orgsecurity.html#security-tsv), and [API and application key management](admin-systemsecurity.html#manage-api) from the **Security** page. You must restart the Contrast application after any change to these settings. 

## Authentication 

Contrast supports a the following [authentication providers](installation-setupauth.html#overview). Any change to this setting in the **Authentication** page requires a system restart.

* Embedded (stored within the Contrast application database)
* [LDAP](installation-setupauth.html#ldap)
* [Active Directory](installation-setupauth.html#ad)
* [Single Sign-On](installation-setupauth.html#sso-setup)

## Database

**Change this setting with caution.** It's very unlikely that a SuperAdmin will need change these values. In the event of a system restore operation, changes to the values of this configuration - such as the URL, which contains host information, or username and password - in **Database** page may be required. Any change to this value also requires a system restart.

## Mail

Contrast can send email notifications to users when significant events occur, like a password reset. Configure settings for a SMTP server using the following fields in the **Mail** page. 

* **Enable Mail:** Use the toggle to enable or disable the feature. 
* **Mail Protocol:** Values can be "SMTP" or "SMTPs". 
* **Mail Host:** The fully qualified address of the SMTP server.                   
* **Mail Port:** The likely value is "25".
* **Use SMTP Auth:** Check the box to enable this setting.                             
* **Mail User:** A user account for authentication purposes on the SMTP system. 
* **Mail Password:** The password for the mail user associated with the SMTP system.      
* **Mail From:** Use this setting to reset passwords and alerts.                              
* **Enable STARTTLSL:** Check the box to enable this setting.                                 

## Log Level

The SuperAdmin can [change the default log level](installation-setupconfig.html#log) for the various log files. Any change to this setting will take effect after a system restart.

## Score Settings

You can customize the [score settings](admin-orgsettings.html#score-settings) for both overall application score and libraries in the **Score Settings** page. This setting allows EOP administrators to configure how scores get calculated and permit an individual organization to override the setting. 

## System Messages

If you want to alert all users in your organizations to important changes, you can send a [system message](admin-systemsettings.html#message), which they'll receive every time they log in to Contrast until the message expires or is deleted. Select the **Create a Message** button in the **System Messages** page to get started. 

