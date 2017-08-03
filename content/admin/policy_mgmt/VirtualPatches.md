<!--
title: "Virtual Patches"
description: "Overview of virtual patches"
tags: "Admin virtual patches policy management protect"
-->

Virtual patches are short-term, custom defense rules that protect against specific, newly discovered vulnerabilities in your code. You can specify the criteria that each attack event needs to match, to which application(s) the patch applies and in which environments the patch is enabled. 

## Manage Virtual Patches 

Organization and Policy (Rules) Administrators can view and manage their virtual patches by going to the **User menu > Policy Management > Virtual Patches**. Find virtual patches by using the filters in the dropdown menu or entering the rule name in the search field above the grid. 

<!-- Add screenshot of the UI. -->

### Add a virtual patch

To add a virtual patch, click the button above the grid. 

<a href="assets/images/Add-virtual-patch.png" rel="lightbox" title="Add virtual patch"><img class="thumbnail" src="assets/images/Add-virtual-patch.png"/></a>

* In the **Add Virtual Patch** form, add a **Name** and **Description** for the patch. 

* In the **Apply to** section, use the radio button to choose whether the rule applies to specific **Applications**, an **Application language** or an **Application technology**. After clicking the appropriate button, use the multiselect field that appears to further refine your choice. 

* Use the dropdown menus to define the **Conditions** under which the patch should apply to your application selection(s). Select the link to **Add another condition** in a separate row, if necessary. 

### Edit a virtual patch 

Click on a name to edit the rule configuration. Click the trashcan icon below the **Edit Virtual Patch** form or in the grid row to delete a rule. You can also use the toggles in the grid to enable or disable each environment. 
