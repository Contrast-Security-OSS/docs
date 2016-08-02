<!--
title: "Getting Around The TeamServer User Interface"
description: "General overview of the Contrast UI"
tags: "UI navigation overview"
-->

The Contrast interface is used for configuring Contrast agent deployments and triaging application weaknesses as we continuously monitor them. The UI provides a single view within which to analyze application vulnerabilities, discover vulnerable and out-of-date third-party libraries, and detect attacks. We also provide visibility into various environments in order to see how an application’s hidden risks are being handled through the development cycle. 

To get the best experience out of Contrast, we suggest you familiarize yourself with the UI components that will most often be used. 

We work hard to engage and guide our users. Don’t hesitate to give us some suggestions! 
<a href="mailto:info@contrastsecurity.com">Provide Feedback</a>

## Navigation
The top navigation bar is persistent as you move through Contrast - providing easy access to core areas at any time. There are two versions of the top navigation bar, depending on your system role and access levels. Most users will interface with the Organization view. Users with System Administration capabilities will have the added capability of toggling between the Organization *and* System Administration views.

### Organization View

<a href="assets/images/TopNav_Org.png" rel="lightbox" title="Navigation for an Organization"><img class="thumbnail" src="assets/images/TopNav_Org.png"/></a>

| Component 		     | Description                                                                                                                                                                                  |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Organization Dashboard | Provides detailed insight into an organization’s portfolio. Displays the big picture of all assets being managed, the health of applications, and overall status of findings. Return to this page at any time via the Contrast Security logo.            |
| Applications 			 | Searchable list of an organization’s applications. Perform various functions including application licensing, merging, tagging, archiving, and restoring. Click on an individual application for more detailed information. |
| Server 		         | Searchable list of an organization’s servers. Perform various functions including server environment designation, enabling Assessment and/or Protection modes, settings, tagging, and deleting. Click on an individual server for more detailed information.                                                                         |
| Libraries 		     | Searchable list of libraries being used by all applications in an organization. Perform limited functions including tagging and taking a look at manifests. Also provides statistics for known vulnerabilities present in current and out-of-date libraries.                          |
| Vulnerabilities        | Searchable list of vulnerabilities discovered by all applications in an organization. Perform various functions including marking status, merging, sharing, tagging, exporting, and deleting. Drill down into any vulnerability for more information and remediation guidance.                                                                    |
| Attacks 			     | Searchable list of attacks that are occurring/have occurred on all applications in an organization. View attacks at the highest level or delve into individual attack events. Perform various functions including blacklisting IPs, generating reports, and creating exclusions or virtual patches.                                                                                                  |
| Vulnerabiity ID Search | Search Contrast using the vulnerability ID to quickly jump to the details of an application vulnerability.                                                                                                         |
| Add Application 	     | Provides universal access to onboard an application and begin monitoring at any time.                                                                                                    |
| Notifications 	     | Provides real-time feedback when key events occur via a notification channel within the application. Get notified about new vulnerabilities, active attacks, or offline servers and be able to react immediately.                                                                                                    |
| User Menu 	   	     | Provides access to subsidiary pages of Contrast such as personal account information, organization settings, policy management (if permissions allow), reports, release notes, and help. If part of multiple organizations, toggle between them here as well.                                                                                                    |

### System Administration View
If you have System Administration capabilities, you will be able to switch from the Organization view to the System Administration view via the user menu. When doing so, the top navigation bar changes. This is only available on an Enterprise On-Premise (EOP) installation.

<a href="assets/images/TopNav_Admin.png" rel="lightbox" title="Navigation for a System Administrator"><img class="thumbnail" src="assets/images/TopNav_Admin.png"/></a>

| Component     | Description                                                                                                |
|-------------------------|------------------------------------------------------------------------------------------------------------|
| Administrator Dashboard | Provides detailed insight across all organizations. A summary of assets and users being managed as well as a view into vulnerabilities and licensing. Return to this page at any time via the Contrast Security logo.                         |
| Organizations           | Searchable list of all organizations. An administrator can manage organizations and perform various functions including locking, granting or revoking licenses, viewing a license summary, and enabling Protection features for any organization.                             |
| Applications            | Searchable list of all applications (including those that have been archived) across all organizations. An administrator can modify licenses and edit application names. |
| Servers                 | Searchable list of all servers across all organizations. An administrator can view and edit server names.                                       |
| Vulnerabilities         | Searchable list of all discovered vulnerabilities along with their current status. Delve into any vulnerability for read-only information.           |
| Users                   | Management of users. An administrator can search, add, edit, and delete users.      |
| Groups                  | Management of system or organization access control groups. An administrator can search, add, edit, and delete groups here.      |
| Stats                   | Summary of Contrast performance metrics for the JVM, connected agents, and authenticated users.      |
| Administrator Menu      | Provides access to subsidiary administration pages of Contrast such as system settings, policy management, and help.      |


## Table Actions
Many pages within Contrast contain rows of data presented in table format. These tables have a built in search mechanism to easily locate data of interest. Searches are performed on multiple columns and quickly display matched rows as you type. Coupled with the search field in many cases, Contrast provides Quick Views for immediate access to the most frequently used filters.

Each table offers column sorting to alter the order of the data in exactly the way you want. Additionally, tables offer actions that may be applied either to individual rows, or in bulk by selecting many rows. The goal? Getting you to your data fast.

<a href="assets/images/ActionBar_OrgApps.png" rel="lightbox" title="Table Actions"><img class="thumbnail" src="assets/images/ActionBar_OrgApps.png"/></a>

## Advanced Filtering 
Advanced filtering is available on each main listing of assets and findings - Applications, Servers, Libraries, Vulnerabilities, and Attacks. Simply click the **Advanced** link alongside the search field. Here you’ll find panels of various data sets that allow you to narrow results and hone in on the pieces that interest you.

For example, you could apply filters to a list of Vulnerabilities that would allow you to view only Cross-Site Scripting vulnerabilities that have a Critical severity and have yet to be remediated. 

<a href="assets/images/TraceFilter.png" rel="lightbox" title="Advanced Filtering Example"><img class="thumbnail" src="assets/images/TraceFilter.png"/></a>

## Drilling Into The Details 
From any main page, you can drill into an asset or finding from the specific table row by clicking on the “Name”. Contrast highlights metrics on the asset or finding for a quick snapshot of core data. Navigate the sub-pages to get more details on related pieces, view activity more closely, access review policy, or capture comments and collaborate with team members. 

<a href="assets/images/Details.png" rel="lightbox" title="Details View"><img class="thumbnail" src="assets/images/Details.png"/></a>
