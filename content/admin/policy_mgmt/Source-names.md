<!--
title: "IP Management"
description: "Overview of IP management"
tags: "admin policy management ip attacks attacker protect"
-->

Use source names to quickly identify non-threatening internal traffic and testing while monitoring attacks in your organization. To create a source name, all you need is the IP addresses and/or subnet masks you want to mark as safe and a name you'll recognize in the Contrast UI. Once the name is saved, Contrast will display it in the Attacks grids instead of the users' IP addresses. 

## Create Source Names

To set up source names, go to the **user menu > Policy Management > IP Management page** and select the **Source Names** tab. Click the button to **Add Source Name**. In the Add Source Name form, complete the following fields: 

* Select the **Name** by which you want to identify this grouping of IP addresses.
* Add the **IP Address/Subnet Mask** to include in this group. Use the link to **Add** more IP addresses or subnet masks, if necessary. 
* Use the dropdown menus to select the **Start** and **End** dates and times for the source name. 
<!-- * Apply to past events..? -->
* Once the fields are completed, click **Add** to save the Source Name. 

<a href="assets/images/Add-source-name.png" rel="lightbox" title="Add a source name"><img class="thumbnail" src="assets/images/Add-source-name.png"/></a>

## View Source Names

Once a source name is added in your organization, it appears in the grid in the **Source Names** tab. Use the search field above the grid to find a grouping by name or IP address.

For more information about using source names to view attackers and attack events, see [Monitor Attacks](user-attacks.html#monitor). 

## Edit and Delete Names

### Edit an existing name 

To edit a source name, click on the name in the Source Names grid. Use the **Edit Source Name** form to update the necessary fields. Once the changes are complete, select the **Save** button. 

Once the name is updated, the UI will reflect the changes for all applicable events. If you change the criteria for the name, and some events no longer qualify, the name is removed from the events and replaced with the IP address. 

### Permanently delete a source name

To delete a source name, you can select the Source Name, and click on the **trashcan** icon below the **Edit Source Name** form. You can also select the trashcan icon in the **Source Names** grid. 

Once the name is deleted, all references to the name are replaced with the IP address in the UI. 

## Name Conflicts 

If the data reported for an attack event matches more than one source name, the name that you most recently updated is applied.

<!-- What if IP is blacklisted or blacklisting is attempted? -->
