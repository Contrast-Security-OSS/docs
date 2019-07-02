<!--
title: "EOP Credentials: Manage access accounts and passwords."
description: "EOP credentials: Manage access accounts and passwords."
tags: "Admin EOP maintenance Hub SuperAdmin credentials"
-->


There are two important credentials for Enterprise-on-Premises (EOP) users who manage an instance of the Contrast application:

* [Hub account](https://hub.contrastsecurity.com/)
* Contrast account

### Hub

Each Contrast customer has one Hub account. When the Hub account is activated, you're issued an activation link by email, which takes you directly to change your password. (This password change is required to finish activating the account.) It's crucial that you **save this password**. You'll need it to log into Hub to obtain license and product updates; it's also the initial password for the default Contrast administrator account after [installation](installation-setupinstall.html). Your Hub password is encrypted inside the license file. 

### Contrast

After Contrast is installed, you should see the following login screen for the Contrast UI.

<a href="assets/images/KB4-c01_1.png" rel="lightbox" title="Login to the Contrast application"><img class="thumbnail" src="assets/images/KB4-c01_1.png"/></a>

>**Note:** The hostname `contrastserver` (e.g., *https://contrastserver/Contrast*) should be either the IP address or hostname set up during Contrast installation.

At this login screen, the default administrator enters their Hub account credentials (email address and password) to access the UI as the default administrator account provisioned automatically during installation.

### SuperAdmin access 

There is a separate set of credentials for managing the Contrast application. The user with these credentials has a **SuperAdmin** role.

* **Username**: If the Hub user account is "jane.doe@mycompany.com", the SuperAdmin convention is "contrast_superadmin@mycompany.com".

* **Password**: This password is automatically provisioned in Contrast when the license file is downloaded from Hub. You can contact Support for more information.

## Learn More 

For more information about roles in Contrast, such as SuperAdmin, see [User Roles & Permissions](admin-manageorgsroleperm.html#roles).
