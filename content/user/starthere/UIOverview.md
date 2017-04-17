<!--
title: "Getting Around the Contrast User Interface"
description: "General overview of the Contrast UI"
tags: "UI new user navigation"
-->

The Contrast interface is used for configuring Contrast agent deployments and triaging application weaknesses as we continuously monitor them. The UI provides a single view to analyze application vulnerabilities, discover vulnerable and out-of-date third-party libraries, and detect attacks. We also provide visibility into various environments to see how an application’s hidden risks are being handled through the development cycle. 

To get the best experience out of Contrast, familiarize yourself with the components of the UI that will most often be used. 

Here at Contrast, we work hard to engage and guide our users. Don’t hesitate to give us some suggestions! 
<a href="mailto:andria.mattsen@contrastsecurity.com; terra.caussin@contrastsecurity.com">Provide Feedback</a>

## Navigation
The top navigation bar is persistent as you move through Contrast - giving easy access to core pieces at any time. There are two versions of the top navigation bar depending on your system role and access levels. Most users will interface with the organization view. Users with system administration capabilities will have the luxury of toggling between the organization view and system administration view.

### Organization View

<a href="assets/images/TopNav_Org.png" rel="lightbox" title="Navigation for an Organization"><img class="thumbnail" src="assets/images/TopNav_Org.png"/></a>

| Component 		     | Description                                                                                                                                                                                  |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Organization Dashboard | Provides detailed insight for an organization’s portfolio. Get the big picture of all assets being managed, the health of applications, and overall status of findings. Return to this page at any time via the Contrast Security logo.            |
| Applications 			 | Searchable list of an organization’s applications. Perform various functions including application licensing, merging, tagging, archiving and restoring. Take a deep dive into any application for more information. |
| Servers 		         | Searchable list of an organization’s servers. Perform various functions including server environment designation, enabling Assessment and/or Protection, settings, tagging and deleting. Take a deep dive into any server for more information.                                                                         |
| Libraries 		     | Searchable list of libraries being used by all the applications in an organization. Perform limited functions including tagging and taking a look at manifests. Also provides statistics for known vulnerabilities present in libraries and out-of-date libraries.                          |
| Vulnerabilities        | Searchable list of vulnerabilities discovered by all the applications in an organization. Perform various functions including marking status, merging, sharing, tagging, exporting, and deleting. Take a deep dive into any vulnerability for more information and guidance for fixing it.                                                                    |
| Attacks 			     | Searchable list of attacks that are occurring/have occurred on all the applications in an organization. View attacks at the highest level or delve into the individual attack events. Perform various functions including blacklisting IPs, generating reports and creating exclusions or virtual patches.                                                                                                  |
| Vulnerability ID Search | Search Contrast using the vulnerability ID to quickly jump to the details of an application vulnerability.                                                                                                         |
| Add Application 	     | Provides universal access to onboard an application at any time to begin monitoring.                                                                                                    |
| Notifications 	     | Provides real-time feedback when key events happen through this in-application notification channel. Get notified about new vulnerabilities, active attacks, or offline servers and be able to react immediately.                                                                                                    |
| User Menu 	   	     | Provides access to subsidiary pages of Contrast such as personal account information, Organization Settings, Policy Management (if permissions allow), Reports, Release Notes and Help. If part of multiple organizations, toggle between them here as well.                                                                                                    |

### System Administration View
If you have system administration capabilities, you will be able to switch from the organization view to the system administration view via the User menu. When doing so, the top navigation bar changes. This is only available on an Enterprise On-Premises (EOP) installation.

<a href="assets/images/TopNav_Admin.png" rel="lightbox" title="Navigation for a System Administrator"><img class="thumbnail" src="assets/images/TopNav_Admin.png"/></a>

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


## Table Actions
Many pages within Contrast contain rows of data presented in table format. These tables have a built-in search mechanism to easily get to data of interest. Searches are performed on multiple columns and quickly display matched rows as you type. Coupled with the search field in many cases, Contrast provides quick views for immediate access to most frequently used filters.

Each table offers column sorting to alter the ordering of the data in exactly the way you want. In addition, tables offer actions that allow you to perform operations on individual rows or in bulk by selecting many rows. The goal? Get you to your data fast.

<a href="assets/images/ActionBar_OrgApps.png" rel="lightbox" title="Sample Table Actions"><img class="thumbnail" src="assets/images/ActionBar_OrgApps.png"/></a>

## Advanced Filtering 
Advanced filtering is available on each main listing of assets and findings - Applications, Servers, Libraries, Vulnerabilities, and Attacks. Simply click the **Advanced** link next to the search field. Here you’ll find panels of various data sets that allow you to limit the result set and hone in on the pieces that interest you.

For example, you could apply a filter to a list of Vulnerabilities to view only Cross-Site Scripting vulnerabilities that have a Critical severity and have yet to be remediated. 

<a href="assets/images/TraceFilter.png" rel="lightbox" title="Advanced Filtering"><img class="thumbnail" src="assets/images/TraceFilter.png"/></a>

## Delving Into the Details 
From any main page, you can drill into an asset or finding by clicking on its name within the table row. Contrast highlights metrics on the asset or finding for a quick snapshot of core data. Navigate the sub-pages to get more details on related pieces, view activity more closely, access review policy, or capture comments and collaborate with team members. 

<a href="assets/images/Details.png" rel="lightbox" title="Details View"><img class="thumbnail" src="assets/images/Details.png"/></a>
