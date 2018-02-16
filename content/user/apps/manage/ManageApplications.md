<!--
title: "Managing Applications"
description: "Overview of the core operations for an application from the action bar."
tags: "user ui application manage archiving restoring resetting deleting"
-->

Contrast users can manage applications based on their [organization or application role](admin-manageorgsroleperm.html#roles). Manage individual applications in the grid, or use the Action Bar to make changes in bulk. To archive, restore, rest or delete applications, see the step-by-step instructions in the [Delete Applications](user-appsmanage.html#delete) article.  

<a href="assets/images/Applications-page.png" rel="lightbox" title="Applications page"><img class="thumbnail" src="assets/images/Applications-page.png"/></a>

## Change Application Names 

To change an application name, go to the application's details page. Click on the name at the top of the page to update the text, or click on the **Settings** icon and update the name in the **Application Defaults** dialog. **Each application within an organization must have an unique name.** 

> **Note:** Super Admins can also edit application names by clicking on the name in the **Applications** page grid. 

## Archive Applications

Applications that should no longer collect traces, but are wanted for historical purposes, can be archived. Archiving an application maintains the integrity of application data, such as traces and libraries, but essentially turns the application "off".

When an application is archived, the agent is informed of the application status and no longer sends traces to the Contrast application. Archived applications also improve your overall portfolio score, as they don't count against the total score. 

A small gray box appears to the right of the application name when it's in an archived state. By default, these applications don't show up in the **Applications** grid. However, you can check the **Show Archived** option in **Advanced Settings** to view and interact with an archived application.

<a href="assets/images/Archived_App.png" rel="lightbox" title="Example Archived Application"><img class="thumbnail" src="assets/images/Archived_App.png"/></a>

> **Note:** Archiving an application doesn't free up a license in Contrast. The only way to return a license back to the pool of available licenses is to archive, reset and then fully delete the application. (See the sections below to **Reset** and **Delete Applications**.)

### Restore (unarchive) applications 

Once an application is archived, an administrator can restore the application. (Restoring an application is the inverse of archiving an application.) The application becomes visible by default, and all vulnerabilities and issues immediately impact the portfolio score.

If an application was reset, there is no way to restore the purged data. 

## Reset Applications

Resetting an application purges all of the data associated with it, but doesn't remove the application. (Users often reset applications to clear all history and findings associated with a specific application.)

## Delete Applications 

You must archive an application before you can fully deleted it. You aren't required to reset the application, as the deletion process truncates any associated data; however, Contrast recommends that you review the data and reset the application before you delete it. 

## Group Applications

Grouping is a simple way to tag or label one or more applications for search purposes. (And very different from [merging applications](user-appsmanage.html#merge).) It allows you to use the the Group attribute to improve search functionality in the Contrast UI.


