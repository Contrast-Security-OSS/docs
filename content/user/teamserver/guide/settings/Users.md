<!--
title: "Creating, Managing and Deleting Users in TeamServer"
description: "Creating, Managing and Deleting Users in TeamServer"
-->

## Viewing Users in TeamServer
### Viewing Users as a System Administrator
To view a list of users within the system administrator interface:

* Login to TeamServer.
* Toggle to the Admin pages via the Settings Menu.
* Select Users from the top navigation menu.
* Search for users by email, name or organization name.

### Viewing Users as an Organization Administrator
To view a list of users within a single organization:

* Login to TeamServer.
* Select Organization Settings via the Settings Menu.
* Select Users from the side navigation menu.
* Search for users by email, name or status.

## Creating Users
Users can be created by the System Administrator, as well as by the Organization Administrator. All users created in TeamServer will be required to have a default organization and a default role within that organization. Users can be added directly to TeamServer, one user at a time. Users can also be added via an integration with [Active Directory](admin_tsconfigint.html#ad2) or [LDAP](admin_tsconfigint.html#ldap).

### Creating Users as a System Administrator

* Login to TeamServer.
* Toggle to the Admin pages via the Settings Menu.
* Select Users from the top navigation menu.
* Select "Create a User"
* Provide the required inputs
** Email
** First Name
** Last Name
** Default Organization
** Default Organization Role

#### Inviting Users to TeamServer
Users can be invited to join TeamServer via an email activation. This option only exists when a user is created by the System Administrator. This option requires email activation.

### Creating Users as an Organization Administrator

<a href="assets/images/Create_User.png" rel="lightbox" title="Create a User"><img class="thumbnail" src="assets/images/Create_User.png"/></a>


* Login to TeamServer.
* Select Organization Settings via the Settings Menu.
* Select Users from the side navigation menu.
* Select "Add a User".
* Provide the required inputs.
** Email
** First Name
** Last Name
** Default Organization Role


## Managing Users

### Unlocking User Accounts (System Administration)
Users accounts can be locked based on failed login attempts or for not logging into TeamServer for an extended period of time. In the case of user account becoming locked, use the following steps:

* Login to TeamServer as a System Administrator.
* Select Admin from the Settings Menu.
* Select Users from the top menu navigation.
* Search for the specific user.
* Select the checkbox next to the user's email.
* Click on "Unlock"

### Granting and Revoking SuperAdmin (System Administration)
[See granting and revoking SuperAdmin].()

### Impersonating Users 
Users granted the SuperAdmin permission have the ability impersonate a user account. Impersonation allows a SuperAdmin user to become the account of another named user and view their organization content.

### Restricting Organization Access
Access can be restricted from both the System Administration (Users) and Organization Settings (Users)view of searchable users by toggling the button under "Access" from the green state to grey state.

### Deleting Users
Users can be deleted by System Administrators and Organization Administrators. We recommend disabling users by restricting access prior to deleting. The operation of deleting a user is a permanent operation. Therefore, we suggest that user accounts be deleted when absolutely necessary.
