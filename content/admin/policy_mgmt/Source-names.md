<!--
title: "Source Names"
description: "How to create and use the Source Names feature"
tags: "admin policy management ip attacks attacker source name"
-->

Use source names to quickly identify non-threatening internal traffic and testing while monitoring attack events in your organization. To create a source name, all you need is the IP information you want to mark as safe and a unique name you'll recognize in the Contrast UI. 

## About Source Names

Source names allow you to label one or more IP addresses and/or subnet masks with a display name of your choice. 
Once the source name is saved, Contrast displays it in the **Attacks > Monitor** page as well as the **Attacks Details** page instead of the user's IP address. You and other users in your organization can then quickly identify the named attacker as a known, friendly source when assessing attack events.   

> **Note:** Unlike the data for attackers labeled with source names, data for whitelisted IP addresses does not appear in the Contrast UI. 

## Create Source Names

To set up source names, go to the **user menu > Policy Management > IP Management page**, and select the **Source Names** tab. Click the button to **Add Source Name**. In the **Add Source Name** form, complete the following fields: 

* Select the **Name** by which you want to identify one or more IP addresses.
* Add the **IP Address/Subnet Mask** to identify by this source name. Use the link to **Add** more IP addresses or subnet masks, if necessary. 
* Use the dropdown menus to select the **Start** and **End** dates and times for the source name. You may choose to create a custom time span that starts on a past date; in this case, the source name applies retroactively to any attack events. 
* Once the fields are completed, click **Add** to save the source name. 

<a href="assets/images/Add-source-name.png" rel="lightbox" title="Add a source name"><img class="thumbnail" src="assets/images/Add-source-name.png"/></a>

## View Attackers by Source Name

Once a source name is added in your organization, it appears in the grid in the **Source Names** tab. Use the search field above the grid to find a grouping by source name or IP address.

<a href="assets/images/Source-names-tab.png" rel="lightbox" title="View a list of the source names in your organization"><img class="thumbnail" src="assets/images/Source-names-tab.png"/></a>

For more information about using source names to view attackers and attack events, see [Monitor Attacks](user-attacks.html#monitor). 

## Edit and Delete Names

### Edit an existing name 

To edit a source name, click on the name in the Source Names grid. Use the **Edit Source Name** form to update the necessary fields. Once you're finished making changes, select the **Save** button. 

When a source name is updated, the UI reflects the changes for all applicable attack events. If you change the criteria for the name, and some events no longer qualify, the name is removed from the events and replaced with the IP information. 

### Permanently delete a source name

To delete a source name, you can select the source name, and click on the **trashcan** icon below the **Edit Source Name** form. You can also select the trashcan icon in the **Source Names** grid. 

Once the name is deleted, all references to the name are replaced with the IP information in the UI. 

## Name Conflicts 

If the data reported for an attack event matches more than one source name, Contrast applies the name that you updated most recently.
