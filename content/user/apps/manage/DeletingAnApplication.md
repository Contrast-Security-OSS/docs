<!--
title: "Deleting An Application"
description: "Instructions on how to delete an application"
tags: "user manage TeamServer application deleting"
-->


At times it may be necessary to fully delete an application, as opposed to simply archiving it. The primary reason for doing so is to return the application's enterprise license back into the license pool, making it available for use by other applications. It also removes findings associated with the application (like vulnerabilities and libraries) that are no longer needed or wanted.


## Step 1: Select Application

From the **Applications** page, navigate to the application you would like to delete. 


## Step 2: Stop Reporting Agents

From the **Application Overview** page, verify that no agents are reporting to the application. If so, find the list of servers that are reporting and manually disable them.

<a href="assets/images/DeleteApp_Dashboard.png" rel="lightbox" title="Application Overview"><img class="thumbnail" src="assets/images/DeleteApp_Dashboard.png"/></a>


## Step 3: Reset Application

It is considered best practice to reset the application to make sure all associated vulnerabilities, URL’s, and components are properly cleared.  Do this by clicking the **Application Settings** (gear) icon in the top right of the Application Overview page.

At the bottom of the dialog that follows, select **Reset Application**.

<a href="assets/images/DeleteApp_SettingsDialog.png" rel="lightbox" title="Application Settings Dialog"><img class="thumbnail" src="assets/images/DeleteApp_SettingsDialog.png"/></a>

>**Note:** You may also reset from the **Applications** page by selecting one or more applications and clicking the **Reset** batch action button.


## Step 4: Archive Application

Return to the **Application Settings** dialog and select **Archive Application**.

Once archived, your application will only be visable in the Applications page by checking the **Show Archive** filter in Advanced Settings. <br> Archived applications can be viewed in the list, but are restricted to findings such as vulnerabilities or libraries unless unarchived.  You can restore (unarchive) the application by selecting it and choosing **Unarchive** in either the row menu or batch action button.

>**Note:** You may also archive from the **Applications** page by selecting one or more applications and clicking the **Archive** batch action button.

<a href="assets/images/DeleteApp_UnarchiveFullDelete.png" rel="lightbox" title="Archived Application Options"><img class="thumbnail" src="assets/images/DeleteApp_UnarchiveFullDelete.png"/></a>


## Step 5: Delete Application

Deleting an application means all of its associated findings (vulnerabilities and libraries) will be permanently removed. From the archived application's row menu, click **Fully Delete**.


>**Note:** The application must be archived for this option to appear.  


## Deleting Applications Improperly

Deleting an application improperly can result in leftover agents that continue to report findings, in which case the application will get recreated and continue to consume the license. Users should make sure to disable any agents reporting on behalf of the application.

