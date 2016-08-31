<!--
title: "Organizations Management"
description: "Overview of Supporting Multiple Organizations"
tags: "SuperAdmin EOP Organizations"
-->

## Deploying Multiple Organizations
Enterprise On Premise (EOP) customers have the ability to configure their system for multi-tenant support by creating more than one organization for use within the system. Organizations are created by SuperAdmins only. Contrast will create an initial or default organization as part of the installation process. Once the installation is complete, users with SuperAdmin credentials can create a second, third or more organizations by following these steps:

* Login to TeamServer as a SuperAdmin.
* Select Organizations from the top navigation menu.
* Select Add Organization from the button above the grid control.
* Supply valid information and the credentials of the default user. 
* Customers making use of Contrast's protection capability should toggle the switch "Protection" to enabled.

<a href="assets/images/OrgCreateProtect.png" rel="lightbox" title="Enable Protection"><img class="thumbnail" src="assets/images/OrgCreateProtect.png"/></a>

## Enable Protection to Users
Protection can be enabled long after an organization was initially created and/or licensed. In cases, like these, the SuperAdmin Organizations page has a simple switch that can be toggled to enable Protection for one or more organizations.


<a href="assets/images/EnableOrgProtect.png" rel="lightbox" title="Enabling Organization Protection After the Fact"><img class="thumbnail" src="assets/images/EnableOrgProtect.png"/></a>

Upon enabling reflection, the administrator will be prompted to select which users to grant Protect permissions.

<a href="assets/images/EnableOrgProtectApplyUsers.png" rel="lightbox" title="Enabling Organization Protection After the Fact"><img class="thumbnail" src="assets/images/EnableOrgProtectApplyUsers.png"/></a>
