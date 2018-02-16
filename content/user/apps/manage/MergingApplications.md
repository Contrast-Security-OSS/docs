<!--
title: "Merging and Unmerging Applications"
description: "Overview of application merging and unmerging"
tags: "user ui application manage merging"
-->


Merging two or more applications into a single application is a common operation performed by Organization Administrators responsible for bringing applications online. The main purpose of merging is to present a single application view in terms of scoring, discovered vulnerabilities and remediation purposes. Applications can be made up of components, which may show up individually in the application list. Merging allows you to logically organize all of an application's components into one entity within Contrast.

To merge an application, complete the following steps in the Contrast UI:

* Go to the **Applications** page. 
* In the grid, find the applications that you want to merge, and use the checkboxes to select them. 
* Select the **Merge** icon from the batch action menu at the top right of the grid. 

<a href="assets/images/Merge-apps.png" rel="lightbox" title="Merge applications"><img class="thumbnail" src="assets/images/Merge-apps.png"/></a>

* Choose one of the merged applications should represent the **Master Application**. 

Once your applications are merged, you'll see the **Master Application** accompanied by a crown icon. To see the application modules represented by the master, click the icon, or choose **Show child applications** from the **Advanced** filter options. To quickly get to any merged applications, use the **Merged** filter available from the search bar.

<a href="assets/images/Master-app-tooltip.png" rel="lightbox" title="Example of a Merged Application"><img class="thumbnail" src="assets/images/Master-app-tooltip.png"/></a>

## Unmerge Applications

There are a couple of ways to unmerge either all or specific application modules from the **Master Application**. 

From the **Applications** page, click the **Unmerge** action in the row menu of any master application. By default, this will unmerge all application modules represented; however, there is also an option to specifically define which modules are unmerged.

Click the crown icon in the application row or **Details** page to view each module in the **Application Modules** dialog. Select one, many or all modules, and click the button to **Unmerge Selected** applications. 

<a href="assets/images/App_Mappings.png" rel="lightbox" title="Unmerging A Master Application"><img class="thumbnail" src="assets/images/App_Mappings.png"/></a>
