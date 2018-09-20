<!--
title: "Organizations Management"
description: "Overview of Supporting Multiple Organizations"
tags: "Admin manage multiple SuperAdmin EOP Organizations"
-->

## Deploy Multiple Organizations

Enterprise-on-Premises (EOP) customers can configure their system for multi-tenant support by creating more than one organization within the system. Contrast will create an initial or default organization as part of the installation process. Once complete, users with [SuperAdmin](admin-manageorgs.html#sa) credentials may create additional organizations by completing the following steps.

* Log in to your account in the Contrast UI. 
* Navigate to the **user menu > (Use Contrast Security as:) SuperAdmin > Organizations page**. 
* Click the **Add Organization** button above the grid. 
* Supply valid information and the credentials of designated administrator of the new organization (OrgAdmin). 
* Customers making use of Contrast's Protect capability should toggle the **Protection** switch ON to enable it for the organization

## Enable Protect

Protection can be enabled after an organization was initially created and/or licensed. In cases like these, the SuperAdmin **Organizations** page has a simple switch that can be toggled to enable Protection for one or more organizations.

<a href="assets/images/EnableOrgProtect.png" rel="lightbox" title="Enabling Organization Protection After the Fact"><img class="thumbnail" src="assets/images/EnableOrgProtect.png"/></a>

Upon enabling Protect, the administrator will be prompted to select which users to grant these permissions to.

<a href="assets/images/EnableOrgProtectApplyUsers.png" rel="lightbox" title="Choosing Which Users To Enable Protection For"><img class="thumbnail" src="assets/images/EnableOrgProtectApplyUsers.png"/></a>
