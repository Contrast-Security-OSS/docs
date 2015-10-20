<!--
title: "Configuring TeamServer"
description: "There are a great deal of configurable options to customize how your deployment of TeamServer behaves. You can configure how and when Contrast functions with just a few clicks."
-->

## Accessing TeamServer Configuration
To access the TeamServer configuration options, first log in to the Administrative interface at ***/Contrast/superadmin/login.html*** - once you have logged in, click on the **Settings** menu in the navigation bar. 

### Configuration Menu
The configuration menu gives you the most options for configuring how the TeamServer behaves, the bulk of the application's actual configuration is handled through this interface.

### Authentication Settings
See [Configuring User Directories](admin_tsconfig.html#user)

### Database Settings (Deprecated)
Database settings will no longer be available after 3.1.0 since the database is embedded and wholly managed outside of the TeamServer application itself.

### Auth Mode Settings
* Accessing Authentication Settings in TeamServer
* To access the Authentication Settings in TeamServer:
* Login to the Superadmin Application
* Click on the Settings option in the navigation bar
* Click on Authentication in the left navigation
 
<a href="assets/images/KB4-c02.png" rel="lightbox" title="Authentication Settings"><img class="thumbnail" src="assets/images/KB4-c02.png"/></a>
 
## Changing Authentication Settings
When switching between authentication modes it is important to understand the impact that changing will have. First and foremost, any users that have been created under the previous authentication mode will no longer work. There is one exception to this rule. If you use email addresses in the target authentication mode and the email address for users is the same between both the old and new authentication provider the user mappings will continue to work. 

After you have setup your new authentication mode and restarted your server, no users will be able to login to the TeamServer until their accounts are added to a new or existing organization. The best approach for doing this is for the superadmin to take care of the organization administrator accounts then each organization administrator is responsible for the users within that organization. Note that when using a external authentication provider mode (LDAP or AD) the username field when adding a user functions as a live search showing users that are in the proper group and not already users within the application.

### Embedded Mode
When this mode is enabled all authentication is handled by the application and database credentials are stored (using a one-way hash) in the internal Contrast database. No additional configuration is needed for this authentication mode.

### LDAP Mode
See [Configuring LDAP Authentication](admin_tsconfigint.html#ldap)

### Active Directory Mode
See [Configuring Active Directory](admin_tsconfigint.html#ad) 
