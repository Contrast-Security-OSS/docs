<!--
title: "Configuring TeamServer Settings"
description: "Configuring TeamServer Settings"
-->

## Role of the SuperAdmin
The SuperAdmin is an [EOP role]() that has the ability to modify and manage TeamServer System Settings. Individual users can be [granted SuperAdmin]() on a case by case basis. Only the SuperAdmin has access to these settings below. Many of these settings are accessible and can be changed via the [Organization Settings]() by an organization administrator. Only the SuperAdmin can set these values as the default system values. 

## Configuring Settings from the User Interface
If a user is a SuperAdmin, he/she will have access to the system settings menu. To view this menu:

<a href="assets/images/Settings_Admin.png" rel="lightbox" title="Settings Navigation Bar for an System Administrator"><img class="thumbnail" src="assets/images/Settings_Admin.png"/></a>

* Login to TeamServer
* Select SuperAdmin from the settings menu
* Select System Settings

### General Settings
The general setting page defines the TeamServer URL for both browsing and RESTful requests. In addition, if an administrator would like to integrate with Hub for updates of libraries and CVS, the option to "Try Hub" can be selected. Any change to this value will require a system restart.

### Authentication 
TeamServer supports three [authentications providers](admin_tsconfig.html#user):

* Embedded: Stored within the TeamServer database
* [LDAP](admin_tsconfigint.html#ldap)
* [Active Directory](admin_tsconfigint.html#ad2)

Any change to this setting will require a system restart.

### Security
SuperAdmin users can manage [password policies](admin_tsconfigset.html#pw), API key management and session timeouts. Any change to this setting will require a system restart. 

### Mail
TeamServer can send email notifications to users when significant events occur (e.g. resetting passwords and alerts). To configure a SMTP server:

<a href="assets/images/Configure_Mail.png" rel="lightbox" title="Configure SMTP"><img class="thumbnail" src="assets/images/Configure_Mail.png"/></a>

* Login to TeamServer.
* Select SuperAdmin from the settings menu.
* Select System Settings.
* Select Mail.
* Complete the information as follows:

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
| Enable STARTTLS | Checked on Unchecked                                         |

### Database
*Change this setting with caution.* It is very unlikely that a SuperAdmin will ever have to change the values of this table. In the event of system restore operation, the values of this configuration such as URL (contains host information), as well as username and password may change from time to time. Any change to this value will require a system restart.

### Log Level
The SuperAdmin can change the default log level for the various TeamServer log files. Any change to this setting will take place after a system restart.

<a href="assets/images/Configure_Log.png" rel="lightbox" title="Configure Logging"><img class="thumbnail" src="assets/images/Configure_Log.png"/></a>

### Score Settings


### TeamServer License
The TeamServer license and subsequent application licensing is managed from this location. The licensecan be updated directly in the [UI](admin_tsfaq.html#license) from this page.

### System Messages
SuperAdmins have the ability to send a system message to all users upon immediate login. A simple message and expiration date are required inputs for the message. All users will receive this message every time they login to TeamServer until the message expires or is deleted.

<a href="assets/images/System_Message.png" rel="lightbox" title="System Messages "><img class="thumbnail" src="assets/images/System_Message.png"/></a>
