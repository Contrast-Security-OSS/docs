<!--
title: "System Settings at a Glance"
description: "How to access system settings"
tags: "admin access system settings"
-->

Enterprise On-Premises (EOP) customers can manage their own instance of Contrast. To modify the TeamServer configurations around the system, you must have the [SuperAdmin role](admin_manageorgsroleperm.html#roles). Individual users can be granted SuperAdmin on a case-by-case basis. Many of these settings are accessible and can be changed within a specific organization via **Organization Settings** by an organization administrator as well.

To get to System Settings: 

* Log in to Contrast 
* Navigate to the user menu in the upper right 
* Select **SuperAdmin** in the "Use Contrast Security as:" section
* Once in the SuperAdmin view, select **System Settings** from that same menu

<a href="assets/images/Settings_Admin.png" rel="lightbox" title="Settings Navigation Bar for an System Administrator"><img class="thumbnail" src="assets/images/Settings_Admin.png"/></a>

Take a quick peek at the configuration options you'll find inside the System Settings. These settings allow a SuperAdmin to manage security policy, database settings, authentication and more.

## General Settings
The general settings defines the Contrast TeamServer URL for both browsing and RESTful requests. In addition, if an administrator would like to integrate with [Contrast Hub](https://hub.contrastsecurity.com) for updates of libraries and CVE's, the option to "Try Hub" can be selected. Any change to this value will require you to [Restart Contrast](installation_setupinstall.html#restart).

In the event you moved the installation or had to change the hostname or IP address, here is the place to make that change. Simply update the TeamServer URL field with the new value. Again, any change will require a system restart. 

>**Note:** You will have to replace your agents so they know which new address to report to

## Licensing
Get a glimpse into license allocation, see if any licenses are nearing expiration, and update your license when needed. 

## Policy
Manage the library compliance policy for your organization(s). Setup restrictions or version requirements for library usage which will flag violations that break compliance settings.

## Security
Manage [password policies](admin_systemsettings.html#pwd), two-step authentication, API key management, and session timeouts. Any change to this setting will require a system restart. 

## Authentication 
Contrast supports a variety of [authentications providers](installation_setupauth.html#overview):

* Embedded: Stored within the Contrast TeamServer database
* [LDAP](installation_setupauth.html#ldap)
* [Active Directory](installation_setupauth.html#ad)
* [Single Sign-On](installation_setupauth.html#sso)

Any change to this setting will require a system restart.

## Database
**Change this setting with caution.** It is very unlikely that a SuperAdmin should need change these values. In the event of system restore operation, the values of this configuration such as URL (contains host information), as well as username and password may require a change. Any change to this value will require a system restart.

## Mail
Contrast can send email notifications to users when significant events occur (e.g. resetting passwords). You can configure a SMTP server as follows:

| Setting         | Possible Values                                              |
|-----------------|--------------------------------------------------------------|
| Enable Mail     | Enabled or Disabled                                          |
| Mail Protocol   | SMTP or SMTPs                                                |
| Mail Host       | Fully qualified address of the SMTP server.                  |
| Mail Port       | Likely 25                                                    |
| Mail User       | User account for authentication purposes on the SMTP system. |
| Mail From       | Resetting passwords and alerts                               |
| Mail Password   | Password for mail user associated with the SMTP system.      |
| Use SMTP Auth   | Checked or Unchecked                                         |
| Enable STARTTLS | Checked on Unchecked   

## Log Level
The SuperAdmin can change the default log level for the various TeamServer log files. Any change to this setting will take place after a system restart.

## Score Settings
The score settings for both overall application score and libraries can be customized. This setting allows EOP administrators to configure how scores get calculated, as well as determine if an individual organization can override the setting. For more information, see [Score Settings](admin_orgsettings.html#score).

## System Messages
SuperAdmins have the ability to send a system message to all users upon immediate login. A simple message and expiration date are required inputs. All users will receive this message every time they login to Contrast until the message expires or is deleted.

For more on configuring system messages, see [System Messages](admin_systemsettings.html#message)
