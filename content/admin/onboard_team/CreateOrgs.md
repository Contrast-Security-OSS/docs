<!--
title: "Create Organizations"
description: "Create Organizations in the Contrast UI"
tags: "Admin onboarding organizations license defense protect assess create"
-->

Contrast is a multi-tenant architecture in which a single software product can support many communities of related or potentially unrelated customers. Each customer is defined as a tenant. In Contrast, organizations serve as the tenant or customer. An organization is a group of related users and applications that are associated together for a business purpose. 

Organizations can be created by the System Administrator (SuperAdmin). All organizations created in Contrast require a unique name as well as an Organization Administrator (OrgAdmin) to oversee the organization. The OrgAdmin can be a new or existing Contrast user.  

## Add an Organization 

To add an organization in the UI, to the **user menu > SuperAdmin > Organizations page**. Click the button to **Add Organization**. In the **Add Organization** dialog, complete the following fields. 

* Enter the new **Organization Name**. 
* Use the toggle to enable **Protect**, if appropriate. 
* In the **License Consumption** section, use the radio buttons to **manually** or **automatically** apply allocated licenses. 
* Use the dropdown menus to choose a **Time Zone**, and **Date** and **Time** formats. 
* Complete the profile information for the OrgAdmin - including their email, name and password - as it should appear in the UI. 
* **Only** check the box to **Require Email Activation** if you have a mail server set up with the Contrast application.
* Click the button to **Create** the organization. 

<a href="assets/images/Create-org.png" rel="lightbox" title="Complete the fields in the Add Organization dialog"><img class="thumbnail" src="assets/images/Create-org.png"/></a>

You may continue to create as many organizations as you need for multi-tenant support. 

## License Consumption

Organizations are granted licenses by the SuperAdmin for Enterprise-on-Premises (EOP) installations and by the Contrast team for SaaS. A SuperAdmin can designate [how an organization's licenses are applied](admin-manageorgs.html#manage-license). They may require users to manually apply allocated licenses or automatically apply allocated licenses as new assets (applications and server) are onboarded. 

### Allocate licenses

If you're administering an EOP installation, you can allocate both Assess and Protect licenses to specific organizations. (This allows OrgAdmins and users with the proper role to license applications and servers within their organization.)

In the **Organizations** grid, find the organization and click the carrot in the grid row. Choose **Allocate Licenses** in the row action menu. Define the the number of licenses as well as expiration dates in the dialog that appears. 

<a href="assets/images/Allocate-licenses-system-settings.png" rel="lightbox" title="Allocate licenses in the Organizations grid"><img class="thumbnail" src="assets/images/Allocate-licenses-system-settings.png"/></a>

## Enable Protect

Contrast Protect customers can enable one or more organizations to use Protect after the organization is created and/or licensed. Go to the **Organizations** page, and use the toggle in the grid enable or disable coverage. Once Protect is enabled, Contrast asks you to select which users within the organization will receive Protect permissions.

## Organization Administration 

To view the UI for a particular organization, go to the **user menu** and select the organization name. For more information, read about how to [Manage Organizations](admin-manageorgsmultiple.html#manage-org). 



