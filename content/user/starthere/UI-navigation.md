<!--
title: "Getting Around the Contrast User Interface"
description: "General overview of the Contrast UI"
tags: "UI navigation"
-->

The Contrast interface is used for configuring Contrast agent deployments and triaging application weaknesses as we continuously monitor them. The UI provides a single view to analyze application vulnerabilities, discover vulnerable and out-of-date third-party libraries, and detect attacks. We also provide visibility into various environments to see how an application’s hidden risks are being handled through the development cycle. 

To get the best experience out of Contrast, familiarize yourself with the components of the UI that you'll use most often. 

Here at Contrast, we work hard to engage and guide our users. Don’t hesitate to <a href="mailto:andria.mattsen@contrastsecurity.com,terra.caussin@contrastsecurity.com">give us some suggestions</a>! 

## Navigation

The top navigation bar is persistent as you move through Contrast - giving easy access to core pieces at any time. There are two versions of the top navigation bar depending on your system role and access levels. Most users will interface with the organization view. Users with system administration capabilities will have the luxury of toggling between the organization view and system administration view.

### Organization view

<a href="assets/images/Dashboard-org-view.png" rel="lightbox" title="View the dashboard as an Organization Administrator"><img class="thumbnail" src="assets/images/Dashboard-org-view.png"/></a>

| Component 		     | Description                                                                                                                                                                                  |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Organization Dashboard | Provides detailed insight for an organization’s portfolio. Get the big picture of all assets being managed, the health of applications, and overall status of findings. Return to this page at any time via the Contrast Security logo.            |
| Applications 			 | Searchable list of an organization’s applications. Perform various functions including application licensing, merging, tagging, archiving and restoring. Take a deep dive into any application for more information. |
| Servers 		         | Searchable list of an organization’s servers. Perform various functions including server environment designation, enabling Assessment and/or Protection, settings, tagging and deleting. Take a deep dive into any server for more information.                                                                         |
| Libraries 		     | Searchable list of libraries being used by all the applications in an organization. Perform limited functions including tagging and taking a look at manifests. Also provides statistics for known vulnerabilities present in libraries and out-of-date libraries.                          |
| Vulnerabilities        | Searchable list of vulnerabilities discovered by all the applications in an organization. Perform various functions including marking status, merging, sharing, tagging, exporting, and deleting. Take a deep dive into any vulnerability for more information and guidance for fixing it.                                                                    |
| Attacks 			     | Searchable list of attacks that are occurring/have occurred on all the applications in an organization. View attacks at the highest level or delve into the individual attack events. Perform various functions including blacklisting IPs, generating reports and creating exclusions or virtual patches.                                                                                                  |
| Search | Search any asset in Contrast by name or vulnerability ID to quickly jump to details.                                                                                                         |
| Add Agent     | Download an agent to begin monitoring your applications.                                                               |
| Notifications 	     | Provides real-time feedback when key events happen through this in-application notification channel. Get notified about new vulnerabilities, active attacks, or offline servers and be able to react immediately.                                                                                                    |
| User Menu 	   	     | Provides access to subsidiary pages of Contrast such as personal account information, Organization Settings, Policy Management (if permissions allow), Reports, Release Notes and Help. If part of multiple organizations, toggle between them here as well.                                                                                                    |

### System Administration view

If you have system administration capabilities, you will be able to switch from the organization view to the system administration view in the user menu. When doing so, the top navigation bar changes. This is only available on an Enterprise-on-Premises (EOP) installation.

<a href="assets/images/Dashboard-super-view.png" rel="lightbox" title="View the dashboard as a System Administrator"><img class="thumbnail" src="assets/images/Dashboard-super-view.png"/></a>

| Administration Page     | Description                                                                                                |
|-------------------------|------------------------------------------------------------------------------------------------------------|
| Administrator Dashboard | Provides detailed insight across all organizations. A summary of assets and users being managed as well as a view into vulnerabilities and licensing. Return to this page at any time via the Contrast Security logo.                         |
| Organizations           | Searchable list of all organizations. An administrator can manage organizations and perform various functions including locking, granting or revoking licenses, viewing a license summary, and enabling Protection features for any organization.                             |
| Applications            | Searchable list of all applications (including archived) across all organizations. An administrator can modify licenses and edit application names. |
| Servers                 | Searchable list of all servers across all organizations. An administrator can view and edit server names.                                       |
| Vulnerabilities         | Searchable list of all vulnerabilities discovered along with their current status. Delve into any vulnerability for read-only information.           |
| Users                   | Management of users. An administrator can search, add, edit, and delete users.      |
| Groups                  | Management of system or organization access control groups. An administrator can search, add, edit, and delete groups from here.      |
| Stats                   | Summary of Contrast performance metrics for the JVM, connected agents, and authenticated users.      |
| Administrator Menu      | Provides access to subsidiary administration pages of Contrast such as System Settings, Policy Management, and Help.      |


## Grid Actions

Contrast displays primary assets and findings - applications, servers, libraries, vulnerabilities and attacks - in table format with rows of data. Use the search field to quickly find the data you need. You can also use the quick views to refine data by the most frequently used categories. 

<a href="assets/images/Vulnerabilities-grid.png" rel="lightbox" title="View vulnerabilities in the grid"><img class="thumbnail" src="assets/images/Vulnerabilities-grid.png"/></a>

In each grid, complete actions to manage your organization - such as merging applications or sending a vulnerability to your bugtracker - for individual or multiple items. For individual items, hover over the grid row, and select the appropriate icon for each action. For multiple items, use the check marks to select each row, and use the icons in the bottom action bar to complete each action. 

### Sorting and filtering 

Sort and filter data in the grids to adjust your focus. Use the dropdown menu above the grids to select a quick view of findings in certain categories, such as licensed applications or open vulnerabilities. You can also use the filters in the grid columns to find specific sets of findings, such as servers with the same tags. The **Sort** menu above the right corner of the grid lets you sort all findings in your current view by certain variables, such as application name (alphabetically), in ascending or descending order. 

<a href="assets/images/Servers-filter.png" rel="lightbox" title="Sort and filtering findings in the UI"><img class="thumbnail" src="assets/images/Servers-filter.png"/></a>

## The Details 

From any main page, you can drill into an asset or finding's details by clicking on its name within the table row. Contrast highlights metrics on the asset or finding for a quick snapshot of core data. Use the tabs in each details page to find more details on related pieces, view activity more closely, access review policy, or capture comments and collaborate with team members. 

<a href="assets/images/Details.png" rel="lightbox" title="Details View"><img class="thumbnail" src="assets/images/Details.png"/></a>
