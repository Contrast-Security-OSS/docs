<!--
title: "Deleting An Application"
description: "Instructions on how to delete an application"
tags: "user manage ui application delete"
-->


Deleting an application returns the application's enterprise license back into the license pool, making the license available for use by other applications. It also removes findings associated with the application, like vulnerabilities and libraries, that you no longer need or want.


## Step 1: Select an application

In the **Applications** page, find the application you would like to delete, and click on its name. 

## Step 2: Stop reporting agents

From the **Application Overview** page, verify that no agents are reporting to the application. If so, find the list of servers that are reporting and manually disable them.

<!-- How do you disable them? -->

<a href="assets/images/DeleteApp_Dashboard.png" rel="lightbox" title="Application Overview"><img class="thumbnail" src="assets/images/DeleteApp_Dashboard.png"/></a>

If you don't disable all agents reporting on behalf of the application, leftover agents may continue to report findings, even after the application is deleted. As a result, the application would be recreated and continue to consume the license. 

## Step 3: Reset the application

It's best practice to reset the application to make sure that all associated vulnerabilities, URLs and components are properly cleared. Click the **Application Settings** (gear) icon in the top right of the **Application Overview** page. At the bottom of the dialog that appears, select the link to **Reset Application**.

<a href="assets/images/DeleteApp_SettingsDialog.png" rel="lightbox" title="Application Settings Dialog"><img class="thumbnail" src="assets/images/DeleteApp_SettingsDialog.png"/></a>

<!-- REPLACE IMAGE-->

>**Note:** You may also reset from the **Applications** page by selecting one or more applications and clicking the **Reset** batch action button.

## Step 4: Archive the application

Return to the **Application Defaults** dialog and select the link to **Archive Application**. Once archived, applications don't appear in the **Applications** page grid by default. 

To view archived applications in the grid, check the **Show archived** filter in **Advanced Settings**. The applications will then appear in the grid; however, you must restore them to view details beyond the grid. 

You can restore (unarchive) an application by selecting it in the grid, and choosing **Unarchive** in either the row menu or batch action button.

<a href="assets/images/DeleteApp_UnarchiveFullDelete.png" rel="lightbox" title="Archived Application Options"><img class="thumbnail" src="assets/images/DeleteApp_UnarchiveFullDelete.png"/></a>

<!-- REPLACE IMAGE-->

>**Note:** You may also archive or restore applications from the **Applications** page by selecting the appropriate applications in the grid, and clicking the **Archive** or **Unarchive Applications** batch action button.

## Step 5: Delete the application

When you delete an application, all of its associated findings (vulnerabilities and libraries) are permanently removed. From the archived application's row menu, click **Fully Delete**.

>**Note:** The application must be archived for this option to appear.  

