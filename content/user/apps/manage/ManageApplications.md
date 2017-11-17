<!--
title: "Managing Applications"
description: "Overview of the core operations for an application from the action bar."
tags: "user TeamServer application manage archiving restoring resetting deleting"
-->

Contrast users can manage applications based on their [organization or application role](admin-manageorgsroleperm.html#roles). Manage individual applications in the grid, or use the Action Bar to make changes in bulk. 

<a href="assets/images/Applications-page.png" rel="lightbox" title="Applications page"><img class="thumbnail" src="assets/images/Applications-page.png"/></a>

## Change Application Name 

Change an application name by going to the application's details page. Click on the name at the top of the page to update the text, or click on the Settings icon and update the name in the **Application Defaults** dialog. **All applications within an organization must have unique names.** 

<!-- Should this address System Settings? -->

## Archive Applications

Archiving is an operation that maintains the integrity of application data such as Traces and Libraries, but essentially turns the application to an "Off" status.

Applications that should no longer collect traces, yet are wanted for historical purposes, can be archived. When an application is archived, the agent will be informed of the application status. It will no longer send traces to TeamServer. Applications that are archived will also improve the overall portfolio score, as they will not count against the total score. 

When an application is archived, a small grey box will reside to the right of the application name. By default, these applications will not show up in the Applications search page. By checkmarking the **Show Archived** option, users will be able to view and interact with an archived application.

<a href="assets/images/Archived_App.png" rel="lightbox" title="Example Archived Application"><img class="thumbnail" src="assets/images/Archived_App.png"/></a>

Archiving an application does not free up a license within TeamServer. The only way to return a license back to the pool of available licenses is to archive and reset an application, then perform a full delete option to the application (see below).

## Restore Applications (Unarchive)
Once an application is archived, a user with an Administrator role may choose to restore the application. Restoring an application is the inverse of archiving an application. The application becomes visible by default. All vulnerabilities and issues immediately impact the portfolio score.

If an application has been reset and all of the data is purged, there is no concept of restoring purged data. In this case the data is completely lost.

## Reset Applications
Customers will often reset applications for the purpose of clearing all history and findings associated with a given application. Resetting doesn't remove the application, but rather purges all of the data associated with it.

## Fully Delete Applications 
Applications cannot be fully deleted unless they are archived first. The application is not required to be reset as the deletion process will truncate any associated data; however, it is recommended as a best practice that the data be reviewed and ideally, reset, prior to a full delete. For a full guide to deleting applications, see [Deleting An Application](user-appsmanage.html#delete)

## Grouping Applications
Grouping is very different from [merging applications](user-appsmanage.html#merge). Grouping is a simple way to tag or label one or more applications for search purposes. There are no other advantages in TeamServer for grouping other than using the Group attribute to improve search functionality.
