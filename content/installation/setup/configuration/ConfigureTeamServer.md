<!--
title: "Configuring TeamServer"
description: "There are a great deal of configurable options to customize how your deployment of TeamServer behaves. You can configure how and when Contrast functions with just a few clicks."
tags: "installation setup Authentication configuration settings SuperAdmin"
-->

## Access the Configuration
To access Contrast configuration options, log in to the [Administrative interface](***/Contrast/superadmin/login.html***) and then click on the **Settings** menu in the navigation bar. Most of the Contrast application's configuration is handled through the configuration menu.

> **Note:** Database settings aren't available after 3.1.0 since the database is embedded and managed outside of the Contrast application.

## Authentication Settings

To access the Authentication Settings in Contrast, click on **Settings** in the navigation bar and then the **Authentication** tab in the sidebar. 
 
<a href="assets/images/KB4-c02.png" rel="lightbox" title="Authentication Settings"><img class="thumbnail" src="assets/images/KB4-c02.png"/></a>

For more information on changing Authentication Settings, go to the [Authentication Overview](installation-setupauth.html) article.

### Authentication modes

* Embedded Mode: When this mode is enabled, all authentication is handled by the application, and database credentials are stored (using a one-way hash) in the internal Contrast database. No additional configuration is needed for this authentication mode.

* LDAP Mode: See [Configuring LDAP Authentication](installation-setupauth.html#ldap).

* Active Directory Mode: See [Configuring Active Directory](installation-setupauth.html#ad).

* Single Sign-On: See [Configuring Single Sign-On](installation-setupauth.html#sso-setup).

## More Information 
* [Configuring User Directories](installation-setupconfig.html#user).



