<!--
title: "License Management"
description: "Overview of allocating and managing licenses"
tags: "Admin manage SuperAdmin EOP SaaS Assess Protect Licensing"
-->

Allocate, revoke and manage Assess and Protect licenses for individual organizations as a SuperAdmin. An Organization Admin may then apply and remove Protect licenses for servers in their organization. 

## Supervise Licenses

A SuperAdmin may grant separate Assess and Protect licenses to an organization in the **Organizations** page. (Assess licenses apply to applications and Protect licenses apply to servers.) The **Licenses** column in the organizations grid lists the number of used and unused licenses that have been granted. If licenses are nearing expiration, a red warning icon appears in the grid row. 

<a href="assets/images/Org-grid.png" rel="lightbox" title="Organizations page"><img class="thumbnail" src="assets/images/Org-grid.png"/></a>

SuperAdmins can also view current license usage, update an EOP license, and manage impending expirations in the **User menu > System Settings > Licensing tab**. 

<a href="assets/images/System-settings-licensing.png" rel="lightbox" title="View Licensing in System Settings"><img class="thumbnail" src="assets/images/System-settings-licensing.png"/></a>

### Allocate Licenses

To grant licenses to an organization, click the caret in the grid row and select **Allocate Licenses** from the row action dropdown menu. In the dialog that appears, SaaS users can enter the number of Assess and/or Protect licenses in the given fields to allocate to that organization. Click in the corresponding **Expiration Date** fields to make your selections on the calendars. EOP users can choose to allocate licenses from the total number available, which is shown in dialog along with the predetermined expiration dates. 

<a href="assets/images/Licenses-allocate.png" rel="lightbox" title="Allocate licenses dialog for SaaS"><img class="thumbnail" src="assets/images/Licenses-allocate.png"/></a>

### License Summary

You can manage the licenses granted to an organization by choosing **License Summary** in the row action dropdown menu, or by clicking on the license counts in the grid. The **License Summary** dialog provides thermometer charts of the organization's Assess and Protect licenses as well as upcoming expiration dates. SaaS users can use the links to **Allocate more licenses** or **Revoke unused licenses**. 

<a href="assets/images/License-summary.png" rel="lightbox" title="License Summary dialog for SaaS"><img class="thumbnail" src="assets/images/License-summary.png"/></a>

### Automatically apply licenses

Automatically apply licenses to newly onboarded applications in the **Licensing** tab in System Settings. Use the toggle to **Automatically apply licenses to new applications** in the Assess section and the toggle to **Automatically apply licenses to new servers** in the Protect section. In the dialog that appears, select the button to cancel the action, apply licenses to new organizations only, or apply licenses to all current organizations. 

<a href="assets/images/Auto-license-confirmation.png" rel="lightbox" title="Confirm auto-licensing options"><img class="thumbnail" src="assets/images/Auto-license-confirmation.png"/></a>

Once the option is turned on for Protect, use the multiselect field to choose the environments in which automatic licensing applies; the default selection is "Production". 

> **Note:** The checkbox to **Allow organization override** gives Organization Admins the option to reconfigure your selections in their organization; it's selected by default. 

#### Organization dialog 

You may also automatically apply licenses when adding an organization in the **Organizations** page using the radio button in the dialog that appears. (The default selection requires users to manually allocate licenses.) Enabling Protect using the toggle in the dialog also enables the check box to **Automatically apply allocated licenses** to servers. 

<a href="assets/images/Add-organization-dialog.png" rel="lightbox" title="Configure auto-licensing in the Add Organization dialog"><img class="thumbnail" src="assets/images/Add-organization-dialog.png"/></a>

## Apply and Remove Licenses

An Organization Administrator can apply, remove and view details on their Protect licenses in the **Servers** page grid, their Assess licenses in the **Applications** page grid, or all licenses in the **Organization Settings > Organization tab > Licensing panel**.

### Apply licenses

To apply a Protect license to an an individual server, click the **UNLICENSED** link beside the server name, or click the caret in the grid row and choose **Apply Protect License** from the row action dropdown menu. To apply Protect licenses to multiple servers, select the checkboxes in the appropriate grid rows, click the shield icon in the batch actions menu above the grid, and choose **Apply Protect License** from the menu. Click the **Apply License** button in the confirmation dialog. 

Once a license is applied, the Protect toggle is enabled in the grid rows for the applicable servers.

<a href="assets/images/Servers-unlicensed.png" rel="lightbox" title="Apply a Protect license"><img class="thumbnail" src="assets/images/Servers-unlicensed.png"/></a>

#### Available licenses

If your organization has consumed all allocated licenses, or if the organization doesn't have enough licenses available for the number of servers selected, the option to apply a license is disabled. Hover over the disabled selection to **Apply Protect Licenses** for more information. To return a license to the pool of available licenses for the organization, you must remove it from a server. 

#### Automatically apply licenses

If a SuperAdmin chose to apply automatic licensing to all organizations, you can use the toggles to disable and re-enable automatic Assess licensing for new applications as well as automatic Protect licensing for new servers. Once Protect is enabled, you can also use the multiselect field to choose the environments in which automatic licensing applies. 

<a href="assets/images/Org-settings-licensing.png" rel="lightbox" title="Configure auto-licensing in the Licensing panel"><img class="thumbnail" src="assets/images/Org-settings-licensing.png"/></a>

> **Note:** If a SuperAdmin disabled organization override, the toggles are not available; however, you can still view details on current licenses. 

### Remove licenses 

To remove licenses from an individual server, click the caret in the grid row and choose **Remove Protect License** from the row action dropdown menu. To remove Protect licenses from multiple servers, select the checkboxes in the appropriate grid rows, click the badge icon in the batch action menu above the grid, and choose **Remove Protect License** from the menu. Click the **Remove** button in the confirmation dialog. 

<a href="assets/images/Servers-remove-license.png" rel="lightbox" title="Remove Protect license"><img class="thumbnail" src="assets/images/Servers-remove-license.png"/></a>

> **Note:** All licenses that you remove immediately return to the pool of available licenses for the organization. 



