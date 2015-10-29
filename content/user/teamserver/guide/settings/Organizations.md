<!--
title: "Organizations within TeamServer"
description: "Creating, Managing and Deleting Organizations"
-->

## Overview
TeamServer is a multi-tenant architecture in which a single of software can support many communities of related or potentially unrelated customers. Each customer is defined as a tenant. In TeamServer, organizations serve as the tenant or customer. 

## What Are Organizations?
An organization is a group of related users and applications that are associated together for a business purpose. 

### Viewing Organizations in TeamServer
Users with a system administration role have the ability to view a list of one or more organizations in TeamServer. The ability to view all organizations depends on whether the user has administrative access based on their [system access control group](). 

To view existing organizations in TeamServer:

* Login to TeamServer.
* Select Admin from the Settings Menu.
* Select Organizations from the top navigation menu.
* Search using the name of the organization.

### Creating Organizations in TeamServer
Organizations can be created by system administrators from the Organization page. An organization will require a unique name, as well as an initial administrator to oversee the organization. The initial administrator must be a unique user account. 

<a href="assets/images/Create_Org.png" rel="lightbox" title="Create an Organization"><img class="thumbnail" src="assets/images/Create_Org.png"/></a>

* Login to TeamServer.
* Select Admin from the Settings Menu.
* Select Organizations from the top navigation menu.
* Select "Create an Organization" 
* Provide the following pieces of required information
** Organization Name
** Short Name
** Admin First Name
** Admin Last Name
** Admin Email
** Admin Password

### Managing Organizations in TeamServer
Users with SuperAdmin credentials will have the ability to impersonate another user account via the manage button from the Organization search page. When the "Manage" button is selected for an organization, the default administrator account will be utilized for impersonation purposes.

### Locking and Unlocking an Organization
Organizations can be locked to prevent all users from an entire organization to access TeamServer. If a specific organization is locked, but the user has access to other organizations, the user will be able to login to TeamServer. If they attempt to access the locked organization, they will receive a warning message. 

### Deleting Organizations from TeamServer
Deleting an organization is a non-reversable operation. If an organization is deleted, all associations with the organization will also be deleted such as applications, traces, activity and libraries. User accounts will not be deleted, but they will lose their association with the deleted organization.

#### Impersonating Users within an Organization
Users with SuperAdmin credentials have the ability to impersonate the organization administrator for a given organization when they select the "Manage" button from the action bar. Impersonation gives the SuperAdmin the ability to view the organization settings, applications and traces for a given organization using the identity of another user.
