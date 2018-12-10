<!--
title: "Deleting An Application"
description: "Instructions on how to delete an application"
tags: "user manage ui application delete"
-->


Deleting an application returns the application's enterprise license back into the license pool, making the license available for use by other applications. It also removes findings associated with the application, like vulnerabilities and libraries, that you no longer need or want.

## Step 1: Select an application

In the **Applications** grid, click on the application you would like to delete. 

## Step 2: Stop reporting agents

From the application **Overview** page, verify that no servers are reporting to the application. If any servers are reporting, manually disable the servers in each environment by clicking the green **On** button for Assess or Protect. In the dialog that appears, use the toggle to switch off the server, and click **Save**. Repeat this process for servers with Assess and/or Protect enabled in each environment, as needed. 

<a href="assets/images/App-overview.png" rel="lightbox" title="Disable servers in the application's Overview page"><img class="thumbnail" src="assets/images/App-overview.png"/></a>

If you don't disable all agents reporting on behalf of the application, leftover agents may continue to report findings, even after the application is deleted. As a result, the application would be recreated and continue to consume the license. 

## Step 3: Reset the application

It's best practice to reset the application to make sure that all associated vulnerabilities, URLs and components are cleared properly. Click the **Settings** (gear) icon in the top right of the application **Overview** page. At the bottom of the **Application Settings** dialog, select the link to **Reset Application**.

<a href="assets/images/Application-settings-dialog.png" rel="lightbox" title="Reset an application in the Application Settings dialog"><img class="thumbnail" src="assets/images/Application-settings-dialog.png"/></a>

You can also reset from the **Applications** page by clicking the **Reset** button in the application's grid row.

## Step 4: Archive the application

Return to the **Application Settings** dialog from the **Overview** page, and select the link to **Archive Application**. Or, you can archive applications from the **Applications** page by selecting the appropriate applications in the grid and clicking the **Archive** button.

Once archived, applications don't appear in the **Applications** grid by default. To view archived applications in the grid, use the dropdown menu to switch to the **Archived** quick view. The applications then appears in the grid; however, you must restore them to view details beyond the grid. 

<a href="assets/images/Delete-applications.png" rel="lightbox" title="Archive applications before you delete them"><img class="thumbnail" src="assets/images/Delete-applications.png"/></a>

To learn how to restore an archived application, go the application management [Overview](user-appsmanage.html#overview). 

## Step 5: Delete the application

**When you delete an application, all of its associated findings - i.e., vulnerabilities and libraries - are removed permanently.** To complete the deletion process, and select the **delete** (trashcan) icon in the archived application's grid row. In the dialog that appears, select the **Delete** button to confirm your choice. 

