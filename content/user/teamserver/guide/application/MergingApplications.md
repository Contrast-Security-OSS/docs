<!--
title: "Merging and Unmerging Applications"
description: "Overview of application merging and unmerging"
-->

## Merging Applications
Merging two or more applications into a single application is a common operation performed by organization administrators responsible for bring applications online. The main purpose of merging an application is to present a single application in terms of scoring, discovered vulnerabilities and remediation purposes. Often a single agent will be configured against an application, but that application will present itself as two or more applications. 

In order to merge an application, the user must be an organization administrator. Follow these steps below:

* Login to TeamServer.
* Navigate to the Applications Page.
* Identify the applications to be merged from the search filter.
* Checkmark the two or more applications to be merged.
* Select the "Merge" icon from the [Action Bar](user_tsguideui.html#overview).
* Determine which of the merged applications should be the "Master Application".
* Search for the "Master Application" and identify the merged application icon.

<a href="assets/images/Merged_App.png" rel="lightbox" title="Example Merged Application"><img class="thumbnail" src="assets/images/Merged_App.png"/></a>

**Please Note**: A simple tip for searching applications to be merged is to label these applications using the group attribute. This is particularly important when the list of applications spans the paging limitation at the bottom of the screen. Assign a group name to each application to be merged. Then filter the list by searching for the group name. Use the steps above to merge the applications.

## Remove Mappings (Unmerge)
Once two or more applications are merged, there may be a time when they need to become separated from the master application. There are two wasy to separate merged applications. The first can be done within the master application from the settings tab. The second can be done from the organization settings page via "App Mappings".

<a href="assets/images/App_Mappings.png" rel="lightbox" title="Remove Mappings"><img class="thumbnail" src="assets/images/App_Mappings.png"/></a>

### Application Settings

* Login to TeamServer
* Navigate to the Applications Page.
* Identify the master application.
* Select the Settings tab.
* Select Managed Merged Apps.
* Checkmark each application to be separated.
* Select Remove Mappings.

### Organization Settings

* Login to TeamServer.
* From the settings menu, select Organization Settings.
* Select App Mappings.
* Checkmark each application to be separated.
* Select Remove Mappings.
