<!--
title: "Merging and Unmerging Applications"
description: "Overview of application merging and unmerging"
tags: "user ui application manage merging"
-->

Merging two or more applications into a single application is a common operation performed by Organization Administrators responsible for bringing applications online. The main purpose of merging is to present a single application view for the purposes of scoring, discovered vulnerabilities and remediation. Applications can be made up of components, which may show up individually in the application list. Merging also allows you to logically organize all of an application's components into one entity in Contrast.

## Create a Master Application 

To merge applications, complete the following steps in the Contrast interface:

* Go to the **Applications** page. 
* Find the applications that you want to merge, and use the checkboxes in the grid to select them. 
* Select the **Merge** icon from the batch action menu at the top right of the grid. 

<a href="assets/images/Merge-apps.png" rel="lightbox" title="Use the batch action menu to merge applications"><img class="thumbnail" src="assets/images/Merge-apps.png"/></a>

* Choose one of the merged applications to represent the **master application**. 

Once your applications are merged, you'll see the **master application** name accompanied by a crown icon. To see the application modules represented by the master, click the icon, or choose **Show child applications** from the **Advanced** filter options. To quickly get to any merged applications, use the **Merged** filter available from the search bar.

<a href="assets/images/Master-app-tooltip.png" rel="lightbox" title="A master (merged) application"><img class="thumbnail" src="assets/images/Master-app-tooltip.png"/></a>

## Unmerge Applications

There are a couple of ways to unmerge either all or specific application modules from the master application. 

From the **Applications** page, click the **Unmerge** action in the row menu of any master application. By default, this will unmerge all application modules represented; however, there is also an option to specifically define which modules are unmerged.

Click the crown icon in the application row or **Details** page to view each module in the **Application Modules** dialog. Select one, many or all modules, and click the button to **Unmerge Selected** applications. 

<a href="assets/images/App_Mappings.png" rel="lightbox" title="Unmerge application modules"><img class="thumbnail" src="assets/images/App_Mappings.png"/></a>
