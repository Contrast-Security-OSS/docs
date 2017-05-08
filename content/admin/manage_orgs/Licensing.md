<!--
title: "License Management"
description: "Overview of Licensing visibility"
tags: "Admin manage SuperAdmin EOP SaaS RASP IAST Licensing"
-->

## Granting Licenses
A SuperAdmin may grant separate Assessment (IAST) and Protection (RASP) licenses to an organization via the **Organizations** page. Assessment licenses apply to applications while Protection licenses apply to servers. The **Licenses** column will list the number of used and unused licenses that have been granted for both types and a red warning icon will be displayed if licenses are nearing expiration.  

<a href="assets/images/Licensing_Grid.png" rel="lightbox" title="SuperAdmin Organizations Page"><img class="thumbnail" src="assets/images/Licensing_Grid.png"/></a>

Select **Grant Licenses** from the organization's row menu dropdown.  The dialog that follows will allow you to choose the number of licenses as well as the desired expiration date if you are using Contrast's SaaS product.

In the case of EOP, expiration dates will already be set, as will the total number of licenses available to grant.  These counts will show in the dialog.

<a href="assets/images/Licensing_Grant.png" rel="lightbox" title="Granting A License (SaaS)"><img class="thumbnail" src="assets/images/Licensing_Grant.png"/></a>


## Managing Granted Licenses

SuperAdmins can manage the licenses granted to an organization by choosing **License Summary** in the row menu dropdown, or by clicking on the license counts in the grid.

The **License Summary** dialog provides additional visibility and control of license information.  Expiration dates can be revised (if using SaaS) and unused granted licenses may be revoked from the organization if necessary.  When revoking licenses, note that the breakdown will update in real time.

<a href="assets/images/Licensing_Summary.png" rel="lightbox" title="License Summary (SaaS)"><img class="thumbnail" src="assets/images/Licensing_Summary.png"/></a>

<a href="assets/images/Licensing_SummaryEdit.png" rel="lightbox" title="Editing Licenses (SaaS)"><img class="thumbnail" src="assets/images/Licensing_SummaryEdit.png"/></a>


## Organization Settings

An organization's administrator will have visibility into their licenses via the **Organization Settings** page.  Thermometer charts for Assessment and Protection will break down used vs. unused licenses and a tooltip will reveal expiration dates for each.  They will also be able to see how licenses are being applied to their applications and servers.  If licenses are nearing expiration, the affected applications or servers will be listed and linked to on the right.

<a href="assets/images/Licensing_OrgSettings.png" rel="lightbox" title="Organization Settings License Summary"><img class="thumbnail" src="assets/images/Licensing_OrgSettings.png"/></a>


## Applying And Removing Protection Licenses

On the **Servers** page, a user must choose which server(s) they wish to apply a Protection license to.  Unlicensed servers will have a link to apply protection next to their name, and the toggle in the **Protect** column will be switched off and disabled.  The **Protect** link allows for quick and easy licensing of an individual server.  Applying a license can also be done via the row menu dropdown or in a batch by selecting servers and clicking the **Protection Licenses** (shield) in the batch action buttons.  One or more licenses may also be removed using this dropdown. Once a license is applied, the toggle will be enabled and Protection may be turned on.

<a href="assets/images/Licensing_Servers.png" rel="lightbox" title="Applying / Removing a Protection License"><img class="thumbnail" src="assets/images/Licensing_Servers.png"/></a>

>**Note:** Protection licenses are currently available for Java servers only.


### Lack Of Available Licenses

In the case where all available protection licenses have been consumed, the option to apply a license will be disabled. A license must be removed from a different server in order to go back into the pool for designation elsewhere.

If applying licenses to multiple servers at a time and there aren't enough available licenses remaining, the option to apply a license will be disabled until the user revises their selection.

Tooltips will instruct the user as to the reason the option is disabled in either case.

<a href="assets/images/Licensing_SelectionTooltip.png" rel="lightbox" title="Revise Selection Tooltip"><img class="thumbnail" src="assets/images/Licensing_SelectionTooltip.png"/></a>
