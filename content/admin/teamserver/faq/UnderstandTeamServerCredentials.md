<!--
title: "EOP TeamServer credentials: Managing access accounts and passwords."
description: "EOP TeamServer credentials: Managing access accounts and passwords."
-->

## How do credentials work in TeamServer?
There are two important credentials for managing a TeamServer instance:
* [The Hub account](https://hub.contrastsecurity.com/)
* [The SuperAdmin account](http://MyTeamServer:8080/Contrast/superadmin/login.html)

There is only one Hub account per customer.  When the Hub account is activated, the user will be issued an activation link via email, which takes the user directly to a change password feature (a process required to finish activating the account). It is crucial that the user SAVE THIS PASSWORD, as it is necessary for logging in to Hub to obtain license and product updates.  The user's Hub password is also encrypted inside the license file, and will be the initial password for the default admin account after installation.

After installation the following login screen should be displayed: 

http://MyTeamServer:8080/Contrast/login.html

<a href="assets/images/KB4-c01_1.png" rel="lightbox" title="TeamServer Login"><img class="thumbnail" src="assets/images/KB4-c01_1.png"/></a>


The hostname ‘MyTeamServer’ shown in the above URL should be either be the IP address or hostname setup during TeamServer installation.

At this login screen, the default admin will enter his/her Hub account credentials (email address and password) to access the TeamServer as the default admin account provisioned automatically during installation.

### SuperAdmin Access to TeamServer: 

There is a separate credential for managing the TeamServer installation, called SuperAdmin.

* username: contrast_superadmin@example.com
* password: (contact Support)

If the Hub user account is john.doe@mycompany.com, the SuperAdmin convention is:
contrast_superadmin@mycompany.com

Note: This password is the password automatically provisioned in TeamServer when the license file was downloaded from Hub.

## References:
* Standard Login URL: http://MyTeamServer:8080/Contrast/login.html
* SuperAdmin URL: http://MyTeamServer:8080/Contrast/superadmin/login.html 
