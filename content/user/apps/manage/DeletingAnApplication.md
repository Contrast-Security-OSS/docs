<!--
title: "Deleting An Application"
description: "Instructions on how to delete an application"
tags: "user manage ui application delete"
-->


Deleting an application returns the application's enterprise license back into the license pool, making the license available for use by other applications. It also removes findings associated with the application, like vulnerabilities and libraries, that you no longer need or want.

## Step 1: Select an application

In the **Applications** page, find the application you would like to delete, and click on its name. 

## Step 2: Stop reporting agents

From the **application Overview** page, verify that no servers are reporting to the application. If any servers are reporting, manually disable the servers in each environment by clicking the green **ON** button for Assess or Protect. In the dialog that appears, use the toggle to switch off the server, and click **Save**. Repeat this process for Assess and Protect in each environment, as needed. 

<a href="assets/images/App-overview-enabled-servers.png" rel="lightbox" title="Disable servers in the application's Overview page"><img class="thumbnail" src="assets/images/App-overview-enabled-servers.png"/></a>

If you don't disable all agents reporting on behalf of the application, leftover agents may continue to report findings, even after the application is deleted. As a result, the application would be recreated and continue to consume the license. 

## Step 3: Reset the application

It's best practice to reset the application to make sure that all associated vulnerabilities, URLs and components are properly cleared. Click the **Application Settings** (gear) icon in the top right of the **Application Overview** page. At the bottom of the dialog that appears, select the link to **Reset Application**.

<a href="assets/images/Application-defaults-dialog.png" rel="lightbox" title="Reset an application in the Application Defaults dialog"><img class="thumbnail" src="assets/images/Application-defaults-dialog.png"/></a>

You can also reset from the **Applications** page by selecting one or more applications, and clicking the **Reset** batch action button.

## Step 4: Archive the application

Return to the **Application Defaults** dialog and select the link to **Archive Application**. Or, you can archive applications from the **Applications** page by selecting the appropriate applications in the grid, and clicking the **Archive** batch action button.

Once archived, applications don't appear in the **Applications** page grid by default. To view archived applications in the grid, check the **Show archived** filter in **Advanced Settings**. The applications then appears in the grid; however, you must restore them to view details beyond the grid. 

### Restore an application

You can restore (unarchive) an application by selecting it in the grid, and choosing **Unarchive** in the row menu.

<a href="assets/images/Unarchive-app-row-menu.png" rel="lightbox" title="Use the row menu to manage an archived application"><img class="thumbnail" src="assets/images/Unarchive-app-row-menu.png"/></a>

You can also restore applications from the **Applications** page by selecting the appropriate applications in the grid, and clicking the **Unarchive Applications** batch action button.

## Step 5: Delete the application

When you delete an application, all of its associated findings (vulnerabilities and libraries) are permanently removed. From the archived application's row menu, click **Fully Delete**.

>**Note:** The application must be archived for this option to appear.  

