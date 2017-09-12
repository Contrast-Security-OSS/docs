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
* Trusted HTTPS Proxy


To access the Authentication Settings in Contrast:
* Log in to the Superadmin Application.
* Click on the **Settings** option in the navigation bar.
* Click on the **Authentication** tab in the sidebar. 
 
<a href="assets/images/KB4-c02.png" rel="lightbox" title="Authentication Settings"><img class="thumbnail" src="assets/images/KB4-c02.png"/></a>
 
#### Changing Authentication Settings
When you switch between authentication modes, it's important to understand the impact that the change will have. 

First and foremost, **any users that were created under the previous authentication mode will no longer work**, unless you use the email addresses in the target authentication mode, and the users' email address is the same between the new and old authentication provider.

After you setup your new authentication mode and restart your server, **no users can login to Contast until their accounts are added to a new or existing organization**. Contrast recommends that the SuperAdmin takes care of the organization administrator accounts, and then each Organization Administrator is responsible for the users within that organization. 

> **Note:** When you use an external authentication provider mode (LDAP or AD), the username field when adding a user functions as a live search that shows users in the proper group <!-- and not already users within the application -->.