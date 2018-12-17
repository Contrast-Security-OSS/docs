<!--
title: "Managing Applications"
description: "Overview of the core operations for an application from the action bar."
tags: "user ui application manage archiving restoring resetting deleting"
-->

Contrast users can manage applications based on their [organization or application role](admin-manageorgsroleperm.html#roles). Manage individual applications in the grid, or use the action bar to make changes in bulk.

<a href="assets/images/Applications-grid.png" rel="lightbox" title="See all of your applications in the grid"><img class="thumbnail" src="assets/images/Applications-grid.png"/></a>

## Change Application Names 

To change an application name, click on the the application's name in the grid to go to its **Overview** page. Click on the name at the top of the page to update the text, or click on the **Settings** icon and update the name in the **Application Defaults** dialog. **Each application within an organization must have an unique name.** 

> **Note:** SuperAdmins can also edit application names by clicking on the name in the grid. 

## Tag Applications

Tag one or more applications to improve search functionality in the Contrast UI. You can also add [custom metadata fields](admin-orgsettings.html#app-defaults) during onboarding, which you can use the same way. (It's also very different from [merging applications](user-appsmanage.html#merge).)

To tag a single application, hover over the grid row and select the tag icon. To tag multiple applications at the same time, use the check marks to select the appropriate grid rows, and select the tag icon in the bottom action bar. Enter the tag name in the dialog that appears and select the button to **Save** your changes.

<a href="assets/images/Tag-applications-grid.png" rel="lightbox" title="Tag applications in the grid"><img class="thumbnail" src="assets/images/Tag-applications-grid.png"/></a>

## Sort and Filter Applications 

There are a few way to narrow down the number of applications in the grid: 

* To see all applications in the a certain category - such as merged, unlicensed or archived applications - use the dropdown menu by the application count above the grid to choose the appropriate quick view. The grid defaults to **All**. 

* To find specific applications, click on the **search** tool above the grid, and type the name of the application or application tag you want to locate. 

* To **sort** the applications in the grid, use the dropdown menu to the upper-right side of the grid to sort by name, importance or language in ascending or descending order. 

* To filter applications in your current view of the grid, select the **filter** (funnel) icon for the **Application** or **Open Vulnerabilities** columns. In the dropdown menu, select the filter(s) that you want to apply. To remove the selected filters, select the **Clear** link beside the filter icon. 

<a href="assets/images/Filter-applications-grid.png" rel="lightbox" title="Filter applications in the grid"><img class="thumbnail" src="assets/images/Filter-applications-grid.png"/></a>

## Archive Applications

If an application should longer collect vulnerabilities, but you want to keep it in your organization for historical purposes, the best solution is to archive the application. Archiving an application maintains the integrity of past application data, such as vulnerabilities and libraries, but the agent no longer reports vulnerabilities to the Contrast application; the application is essentially turned off. Archived applications also improve your overall portfolio score, as they don't count against the total score. 

To archive an individual application, hover over the application's grid row, and select the **archive** (box) icon. To archive multiple applications, use the check marks to select the appropriate rows, and select the archive icon from the action bar. In the dialog that appears, select the **Archive** button to confirm your choice. 

<a href="assets/images/Archive-applications-grid.png" rel="lightbox" title="Archive applications in the grid"><img class="thumbnail" src="assets/images/Archive-applications-grid.png"/></a>

To see all archived applications, go to the **Archived** quick view in the **Applications** grid. From this view, you can **restore** or [delete applications](user-appsmanage.html#delete). 

> **Note:** Archiving an application doesn't free up a license in Contrast. The only way to return a license back to the pool of available licenses is to archive, reset and then fully delete the application. (See the sections below to **Reset** and **Delete Applications**.)

### Unarchive applications 

Once an application is archived, an administrator can restore the application. The application becomes visible by default, and all vulnerabilities and issues immediately impact the portfolio score.

> **Note:** If an application was reset, there is no way to restore the purged data. 

To unarchive an application, go the **Archived** quick view in the grid. To unarchive an individual application, hover over the application's grid row, and select the **unarchive** (arrow) icon. To unarchive multiple applications, use the check marks to select the appropriate rows, and select the unarchive icon from the bottom menu. In the dialog that appears, select the **Unarchive** button to confirm your choice. 

<a href="assets/images/Unarchive-applications-grid.png" rel="lightbox" title="Unarchive archived applications in the grid"><img class="thumbnail" src="assets/images/Unarchive-applications-grid.png"/></a>

## Reset Applications

Resetting an application purges all of the data associated with it, but doesn't remove the application. (Users often reset applications to clear all history and findings associated with a specific application.)

To reset an application, hover over the grid row and select the reset icon. (This must be done individually.) In the dialog that appears, select the **Reset** button to confirm your choice. 

<a href="assets/images/Reset-applications-grid.png" rel="lightbox" title="Reset an application in the grid"><img class="thumbnail" src="assets/images/Reset-applications-grid.png"/></a>

## Delete Applications 

You must archive an application before you can fully delete it. You aren't required to reset the application, as the deletion process truncates any associated data; however, Contrast recommends that you review the data and reset the application before you delete it. 

For step-by-step instructions, go to the [Delete Applications](user-appsmanage.html#delete) article. 


