<!--
title: "EOP Credentials: Manage access accounts and passwords."
description: "EOP credentials: Manage access accounts and passwords."
tags: "Admin EOP maintenance Hub SuperAdmin credentials"
-->

## How Credentials Work

There are two important credentials for managing an instance of the Contrast application:

* [Hub account](https://hub.contrastsecurity.com/)
* Contrast account

There is only one Hub account per customer. When the Hub account is activated, the user is issued an activation link via email, which takes the user directly to a change password feature. (This password change is required to finish activating the account). It's crucial that the user **saves this password**, as it is necessary for logging in to Hub to obtain license and product updates. The user's Hub password is also encrypted inside the license file, and is the initial password for the default administrator account after installation.

After installation the following login screen should be displayed.

<a href="assets/images/KB4-c01_1.png" rel="lightbox" title="Login to the Contrast application"><img class="thumbnail" src="assets/images/KB4-c01_1.png"/></a>

https://contrastserver/Contrast

>**Note:** The hostname `contrastserver` shown in the above URL should be either the IP address or hostname set up during Contrast installation.

At this login screen, the default administrator enters their Hub account credentials (email address and password) to access the application as the default administrator account provisioned automatically during installation.

For more information and step-by-step instructions for installing the Contrast application, see the [Installation section](installation-setupinstall.html).

### SuperAdmin access 

There is a separate credential for managing the application installation, called SuperAdmin.

* Username: If the Hub user account is "john.doe@mycompany.com", the SuperAdmin convention is "contrast_superadmin@mycompany.com".

* Password: Contact Support. This password is automatically provisioned in Contrast when the license file is downloaded from Hub.

For more information about roles in Contrast, such as SuperAdmin, see the article on [User Roles & Permissions](admin-manageorgsroleperm.html#roles).
