<!--
title: "Deleting An Application"
description: "Instructions on how to delete an application"
tags: "TeamServer application deleting"
-->

## Delete Applications From Any Page
At times it may be necessary to delete an application. Fully deleting an application returns the enterprise license back to the pool of licenses available for other applications. It also removes findings (like vulnerabilities and libraries) associated with an application in which a user no longer needs.


## Step 1: Select Application

In the applications page select the application in which you would like to delete. 

<a href="assets/images/Deleting_App_01.png" rel="lightbox" title="Selecting An Application through the tab"><img class="thumbnail" src="assets/images/Deleting_App_01.png"/></a>


## Step 2: Stop Any Current Agents

From the applications Overview page, make sure no agents are reporting to the application. If so, find the list of servers that are reported for this application and disable.

<a href="assets/images/Deleting_App_02.png" rel="lightbox" title="Application Overview"><img class="thumbnail" src="assets/images/Deleting_App_02.png"/></a>

<a href="assets/images/Deleting_App_03.png" rel="lightbox" title="Selecting An Application through the tab"><img class="thumbnail" src="assets/images/Deleting_App_03.png"/></a>


## Step 3: Reset Application

It is best to [reset](user_tsguideapp.html#manage) the application to make sure all vulnerabilities, URL’s, and components are properly deleted from the application.

<a href="assets/images/Deleting_App_04.png" rel="lightbox" title="Reset Application Dialogue Box"><img class="thumbnail" src="assets/images/Deleting_App_04.png"/></a>


## Step 4: Archive Application

Archive the application.

<a href="assets/images/Deleting_App_06.png" rel="lightbox" title="Archive Dialogue Confirmation"><img class="thumbnail" src="assets/images/Deleting_App_06.png"/></a>

>**Note:** Your application will not be seen in the default applications but can be found through the **Show Archive** box in the Advanced Settings. <br> Archived applications can be viewed, but are restricted to findings such as vulnerabilities or libraries unless unarchived.

<a href="assets/images/Deleting_App_05.png" rel="lightbox" title="<q>Application List for Show Archived</q>"><img class="thumbnail" src="assets/images/Deleting_App_05.png"/></a>


## Step 5: Delete Application

Go back the **Applications** tab and click **Fully Delete**. You should be taken to a prompt that will allow you to fully delete the application.

<a href="assets/images/Deleting_App_07.png" rel="lightbox" title="Action button for fully deleting an Application"><img class="thumbnail" src="assets/images/Deleting_App_07.png"/></a>

<a href="assets/images/Deleting_App_08.png" rel="lightbox" title="Dialogue for deleting an application"><img class="thumbnail" src="assets/images/Deleting_App_08.png"/></a>


>**Note:** Applications must be archived for this option to appear.  


## Note About Deleting Applications Improperly
Deleting an application improperly can result in left over agents to still report findings. If so, the app deleted will get recreated. Users should make sure to disable any agents reporting on behalf of the application.
