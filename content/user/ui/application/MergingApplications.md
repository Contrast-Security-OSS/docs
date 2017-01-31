<!--
title: "Merging and Unmerging Applications"
description: "Overview of application merging and unmerging"
tags: "TeamServer application merging"
-->

## Merging Applications
Merging two or more applications into a single application is a common operation performed by organization administrators responsible for bringing applications online. The main purpose of merging is to present a single application view in terms of scoring, discovered vulnerabilities and remediation purposes. Applications can be made up of components, which may show up individually in the application list. Merging allows you to logically organize all of an application's components into one entity within Contrast.


In order to merge an application, the user must be an Organization Administrator and follow these steps:

* Log in to Contrast
* Navigate to the **Applications** page
* Identify and select the applications to be merged via the checkboxes in the left column
* Select the **Merge** icon from the [Action Bar](user_tsguideui.html#overview)
* Determine which of the merged applications should represent the **Master Application**
* Voila!  

Now that your applications are merged, you will see the **Master Application** accompanied by an icon. You can always see the application modules represented by clicking this icon or choosing "Show child applications" from the **Advanced** filter options. To quickly get to any merged applications, there is a predefined **Merged** filter available from the search bar.

<a href="assets/images/Merged_App.png" rel="lightbox" title="Merge Applications Action"><img class="thumbnail" src="assets/images/Merged_App.png"/></a>

<a href="assets/images/Merged_App_Tooltip.png" rel="lightbox" title="Example of a Merged Application"><img class="thumbnail" src="assets/images/Merged_App_Tooltip.png"/></a>


## Unmerging Applications
Once applications are merged, there may be a time when they need to be separated from the **Master Application**. There are a couple of ways to unmerge either all, or specific application modules. 

From the **Applications** page, there will be an **Unmerge** action in the row menu of any master application. By default, this will unmerge all application modules represented; however, there will also be an option to specifically define what gets unmerged.

From the **Application Modules** dialog, there will be a corresponding checkbox for each application module. Selecting one, many, or all will present the option to **Unmerge Selected** applications. This dialog can be accessed by clicking the master application icon from either the **Applications** page or the **Master Application Details** page.


<a href="assets/images/App_Mappings.png" rel="lightbox" title="Unmerging A Master Application"><img class="thumbnail" src="assets/images/App_Mappings.png"/></a>
