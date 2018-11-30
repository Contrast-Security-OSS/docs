<!--
title: "Managing Applications"
description: "Overview of the core operations for an application from the action bar."
tags: "user ui application manage archiving restoring resetting deleting"
-->

Contrast users can manage applications based on their [organization or application role](admin-manageorgsroleperm.html#roles). Manage individual applications in the grid, or use the action bar to make changes in bulk. To archive, restore, reset or delete applications, see the step-by-step instructions in the [Delete Applications](user-appsmanage.html#delete) article.  

<a href="assets/images/Applications-grid.png" rel="lightbox" title="See all of your applications in the grid"><img class="thumbnail" src="assets/images/Applications-grid.png"/></a>

## Change Application Names 

To change an application name, click on the the application's name in the grid to go to its **Overview** page. Click on the name at the top of the page to update the text, or click on the **Settings** icon and update the name in the **Application Defaults** dialog. **Each application within an organization must have an unique name.** 

> **Note:** SuperAdmins can also edit application names by clicking on the name in the grid. 

## Tag Applications

Tag one or more applications to improve search functionality in the Contrast UI. You can also add [custom metadata fields](admin-orgsettings.html#app-defaults) during onboarding, which you can use the same way. (It's also very different from [merging applications](user-appsmanage.html#merge).)

To tag a single application, hover over the grid row and select the tag icon. To tag multiple applications at the same time, use the check marks to select the appropriate grid rows, and select the tag icon in the bottom action bar. Enter the tag name in the dialog that appears and select the button to **Save** your changes.

## Filter Applications 



## Archive Applications

You can archive applications that should no longer collect traces, but that you want to keep for historical purposes. Archiving an application maintains the integrity of application data, such as traces and libraries, but essentially turns the application "off". When an application is archived, the agent is informed of the application status and no longer sends traces to the Contrast application. Archived applications also improve your overall portfolio score, as they don't count against the total score. 

A small gray box appears to the right of the application name when it's in an archived state. By default, these applications don't show up in the **Applications** grid. However, you can check the **Show Archived** option in **Advanced Settings** to view and interact with an archived application.

> **Note:** Archiving an application doesn't free up a license in Contrast. The only way to return a license back to the pool of available licenses is to archive, reset and then fully delete the application. (See the sections below to **Reset** and **Delete Applications**.)

### Restore applications 

Once an application is archived, an administrator can restore the application. (Restoring an application is the inverse of archiving an application.) The application becomes visible by default, and all vulnerabilities and issues immediately impact the portfolio score.

> **Note:** If an application was reset, there is no way to restore the purged data. 

## Reset Applications

Resetting an application purges all of the data associated with it, but doesn't remove the application. (Users often reset applications to clear all history and findings associated with a specific application.)

To reset an application, hover over the grid row and select the reset icon. (This must be done individually.) In the dialog that appears, select the **Reset** button to confirm your choice. 

## Delete Applications 

You must archive an application before you can fully delete it. You aren't required to reset the application, as the deletion process truncates any associated data; however, Contrast recommends that you review the data and reset the application before you delete it. 

To delete an application, go the **Archived** applications view. Hover over the grid row, and select the trashcan (delete) icon. (This must be done individually.) In the dialog that appears, select the **Delete** button to confirm your choice. 


