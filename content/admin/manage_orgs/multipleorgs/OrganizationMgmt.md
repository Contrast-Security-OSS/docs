<!--
title: "Organizations Management"
description: "Overview of Supporting Multiple Organizations"
tags: "Admin manage multiple SuperAdmin EOP Organizations"
-->

## Deploying Multiple Organizations
Enterprise On Premise (EOP) customers have the ability to configure their system for multi-tenant support by creating more than one organization for use within the system. Organizations may only be created by SuperAdmins. Contrast will create an initial or default organization as part of the installation process and once complete, users with SuperAdmin credentials may create additional organizations by following these steps:

1. Log in to TeamServer as a SuperAdmin
2. Select **Organizations** from the top navigation menu
3. Click the **Add Organization** button above the grid control
4. Supply valid information and the credentials of the default user 
5. Customers making use of Contrast's Protection capability should toggle the **Protection** switch ON to enable it for the organization

<a href="assets/images/OrgCreateProtect.png" rel="lightbox" title="Enable Protection When Creating Organization"><img class="thumbnail" src="assets/images/OrgCreateProtect.png"/></a>

## Enabling Protection
Protection can be enabled after an organization was initially created and/or licensed. In cases like these, the SuperAdmin **Organizations** page has a simple switch that can be toggled to enable Protection for one or more organizations.


<a href="assets/images/EnableOrgProtect.png" rel="lightbox" title="Enabling Organization Protection After the Fact"><img class="thumbnail" src="assets/images/EnableOrgProtect.png"/></a>

Upon enabling Protection, the administrator will be prompted to select which users to grant these permissions to.

<a href="assets/images/EnableOrgProtectApplyUsers.png" rel="lightbox" title="Choosing Which Users To Enable Protection For"><img class="thumbnail" src="assets/images/EnableOrgProtectApplyUsers.png"/></a>
