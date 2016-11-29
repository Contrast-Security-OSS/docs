<!--
title: "Organizations within Contrast"
description: "Creating, Managing and Deleting Organizations"
tags: "TeamServer organizations license defense protect RASP IAST assess"
-->

## Overview
Contrast is a multi-tenant architecture in which a single software product can support many communities of related or potentially unrelated customers. Each customer is defined as a tenant. In Contrast, organizations serve as the tenant or customer. 

## What Are Organizations?
An organization is a group of related users and applications that are associated together for a business purpose. 

### Viewing Organizations
Users with a system administration role have the ability to view a list of one or more organizations in Contrast. The ability to view all organizations depends on whether the user has administrative access based on their [system access control group](user_tsguideset.html#access). 

To view existing organizations:

* Log in to Contrast
* Select Admin from the User menu
* Select Organizations from the top navigation menu
* Search using the name of the organization

### Creating Organizations
Organizations can be created by system administrators from the Organizations page. An organization will require a unique name, as well as an initial administrator to oversee the organization. This administrator can be a new user or an existing Contrast user. 

<a href="assets/images/Create_Org.png" rel="lightbox" title="Add Organization"><img class="thumbnail" src="assets/images/Create_Org.png"/></a>

* Log in to Contrast
* Select Admin from the User menu
* Select Organizations from the top navigation menu
* Click the **Add Organization** button

Next, provide the following pieces of required information:
- Organization Name
- Admin First Name
- Admin Last Name
- Admin Email
- Admin Password

### Managing Organizations
Users with SuperAdmin credentials will have the ability to impersonate another user account from the Organizations page via the **Manage Organization** row option. When this action is triggered, the default administrator account will be utilized for impersonation purposes.

### Locking And Unlocking An Organization
Organizations can be locked to prevent all users in an entire organization from accessing Contrast. If a specific organization is locked but the user has access to other organizations, the user will still be able to log in to Contrast; however, they will only be able to access the available (unlocked) organizations. 

### Deleting Organizations
Deleting an organization is a non-reversable operation. If an organization is deleted, all associations with the organization will also be deleted, including applications, vulnerabilities, libraries, and general activity. User accounts will not be deleted, but they will lose their association with the deleted organization.

#### Impersonating Users Within An Organization
Users with SuperAdmin priveleges have the ability to impersonate the organization administrator for a given organization when they select the **Manage Organization** row option. Impersonation gives a SuperAdmin the ability to view the organization settings, applications and vulnerabilities for a given organization using the identity of another user.

### License Management
Organizations are granted licenses by the SuperAdmin for On-Premises installations and by the Contrast team for SaaS. The license information is accessible from the **Organization Settings** page for an organization administrator. From the Organization overview, an administrator can review the state of licenses, specifically, the count of allocated licenses, the number of used licenses and the expiration date of the license. No actual editing of the license can be made from this screen.

<a href="assets/images/OrgSettings_license.png" rel="lightbox" title="License Statistics"><img class="thumbnail" src="assets/images/OrgSettings_license.png"/></a>

