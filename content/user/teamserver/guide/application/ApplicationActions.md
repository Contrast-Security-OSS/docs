<!--
title: "Managing Applications"
description: "Overview of the core operations for an application from the action bar."
-->

## Managing Applications
Users of TeamServer, depending on either their [organization or application role](user_tsguideset.html#roles) have the ability to manage applications. Certain functions can be found in the action bar or inline. Operations found in the action bar can be performed in bulk.

<a href="assets/images/Application_Action_Bar.png" rel="lightbox" title="Application Action Bar"><img class="thumbnail" src="assets/images/Application_Action_Bar.png"/></a>

## Archiving Applications
Archiving an application is an operation that maintains the integrity of data for an application such as traces and libraries, but essentially turns the application to an off status.

Applications that should no longer collect traces, but are wanted for historical purposes can be archived. When an application is archived, the agent will be informed of the application status. It will no longer send traces to TeamServer. Applications that are archived will also improve the overall portfolio score, as they will not count against the total score. 

When an application is archived, a small grey box will reside to the right of the application name. By default these applications will not show up in the applications search page. By checkmarking the "Show Archived" option, users will have access to view and interact with an archived application.

<a href="assets/images/Archived_App.png" rel="lightbox" title="Example Archived Application"><img class="thumbnail" src="assets/images/Archived_App.png"/></a>

Archiving an application does not free up a license within TeamServer. The only way to return a license back to the pool of available licenses is to archive and reset an application, then perform a fully delete option to the application.

## Restoring Applications
Once an application is archived, a user with an administator role may choose to restore the application. Restoring an application is the inverse of archiving an application. The application becomes visible by default. All vulnerabilities and issues immediately impact the portfolio score.

If an application has been reset and all of the data is purged, there is no concept of restoring purged data. In this case the data is completely lost.

## Resetting Applicatins
Customers will often reset applications for the purpose of clearing all history and findings associated with a given application. Resetting doesn't remove the application, but rather purges all of the data associated to the application.


## Fully Delete an Application 
Applications cannot be fully deleted unless the application is archived. The application is not required to be reset as the deletion process will truncate any associated data. It is recommended that the data be reviewed and ideally reset prior to a full delete. 


## Grouping Applications
Grouping is very different from [merging applications](). Grouping is a simple way to tag or label one or more applications for searching purposes. There are no other advantages in TeamServer for grouping other than using the Group atribute to improve searching of applications.
