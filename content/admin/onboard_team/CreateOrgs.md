<!--
title: "Create Organizations"
description: "Creating Organizations within Contrast TeamServer"
tags: "Admin onboarding TeamServer organizations license defense protect assess create"
-->

Contrast is a multi-tenant architecture in which a single software product can support many communities of related or potentially unrelated customers. Each customer is defined as a tenant. In Contrast, organizations serve as the tenant or customer. An organization is a group of related users and applications that are associated together for a business purpose. 

Organizations can be created by the System Administrator. All organizations created in Contrast will require a unique name as well as an administrator to oversee the organization. This administrator can be a new user or an existing Contrast user.  

* Log in to Contrast 
* Navigate to the user menu in the upper right 
* Select **SuperAdmin** in the "Use Contrast Security as:" section
* Select **Organizations** from the top navigation
* Click the **Add Organization** button
* Fill out all fields. Do **not** check *Require Email Activation* unless you have a mail server set up with TeamServer.

<a href="assets/images/Create_Org.png" rel="lightbox" title="Add Organization"><img class="thumbnail" src="assets/images/Create_Org.png"/></a>

You may continue to create as many organizations as you need for multi-tenant support. To administor a particular organization, you can access that via the user menu in the upper right by selecting that organization. 

## License Consumption
A System Administrator (SuperAdmin) can designate how an organization's licenses get applied. They may require users to manually apply allocated licenses or automatically apply allocated licenses as new assets (applications and server) are onboarded. 

Organizations are granted licenses by the System Administrator (SuperAdmin) for On-Premises installations and by the Contrast team for SaaS. If you are administoring an On-Premises installation, you can allocate both Assessment and Protection licenses to specific organizations via the row menu. The number of licenses as well as expiration dates can be defined. This allows Organization Administrators and users with the proper role to license applications and servers within their organization.

## Enabling Protection
Customers making use of Contrast's Protection capability can enable one or more organizations after the organization is created and/or licensed. There is a toggle switch to enable Protection in the main Organizations table.

Upon enabling Protection, the administrator will be prompted to select which users to grant these permissions to.

For more information, read about how to [Manage Organizations](admin-manageorgsmultiple.html#manage-org). 


