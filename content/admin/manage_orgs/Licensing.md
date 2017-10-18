<!--
title: "License Management"
description: "Overview of Licensing visibility"
tags: "Admin manage SuperAdmin EOP SaaS RASP IAST Licensing"
-->


A SuperAdmin may grant separate Assess and Protect licenses to an organization in the **Organizations** page. Assess licenses apply to applications and Protect licenses apply to servers. The **Licenses** column in the organizations grid lists the number of used and unused licenses that have been granted. If licenses is nearing expiration, a red warning icon appears in the grid row. 

<a href="assets/images/Org-grid.png" rel="lightbox" title="Organizations page"><img class="thumbnail" src="assets/images/Org-grid.png"/></a>

## Allocate Licenses

To grant licenses to an organization, click the arrow in the grid row and select **Allocate Licenses** from the dropdown menu. In the dialog that appears...

The dialog that follows will allow you to choose the number of licenses as well as the desired expiration date if you are using Contrast's SaaS product.

In the case of EOP, expiration dates will already be set, as will the total number of licenses available to grant.  These counts will show in the dialog.

<a href="assets/images/Licenses-allocate.png" rel="lightbox" title="Allocate licenses dialog for SaaS"><img class="thumbnail" src="assets/images/Licenses-allocate.png"/></a>

## Manage Licenses

SuperAdmins can manage the licenses granted to an organization by choosing **License Summary** in the row menu dropdown, or by clicking on the license counts in the grid.

The **License Summary** dialog provides additional visibility and control of license information.  Expiration dates can be revised (if using SaaS) and unused granted licenses may be revoked from the organization if necessary.  When revoking licenses, note that the breakdown will update in real time.

<a href="assets/images/License-summary.png" rel="lightbox" title="License Summary dialog for SaaS"><img class="thumbnail" src="assets/images/License-summary.png"/></a>

## Organization Settings

An organization's administrator will have visibility into their licenses...


## Applying And Removing Protection Licenses

On the **Servers** page, a user must choose which server(s) they wish to apply a Protection license to.  Unlicensed servers will have a link to apply protection next to their name, and the toggle in the **Protect** column will be switched off and disabled.  The **Protect** link allows for quick and easy licensing of an individual server.  Applying a license can also be done via the row menu dropdown or in a batch by selecting servers and clicking the **Protection Licenses** (shield) in the batch action buttons.  One or more licenses may also be removed using this dropdown. Once a license is applied, the toggle will be enabled and Protection may be turned on.

<a href="assets/images/Licensing_Servers.png" rel="lightbox" title="Applying / Removing a Protection License"><img class="thumbnail" src="assets/images/Licensing_Servers.png"/></a>

>**Note:** Protection licenses are currently available for Java servers only.


### Lack Of Available Licenses

In the case where all available protection licenses have been consumed, the option to apply a license will be disabled. A license must be removed from a different server in order to go back into the pool for designation elsewhere.

If applying licenses to multiple servers at a time and there aren't enough available licenses remaining, the option to apply a license will be disabled until the user revises their selection.

Tooltips will instruct the user as to the reason the option is disabled in either case.

<a href="assets/images/Licensing_SelectionTooltip.png" rel="lightbox" title="Revise Selection Tooltip"><img class="thumbnail" src="assets/images/Licensing_SelectionTooltip.png"/></a>
