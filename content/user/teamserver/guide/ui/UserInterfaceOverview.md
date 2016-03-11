<!--
title: "Using the TeamServer User Interface"
description: "General overview of the TeamServer UI"
tags: "TeamServer UI navigation"
-->

## Using the TeamServer User Interface
TeamServer is the primary interface for configuring your Contrast agent deployments and monitoring critical applications for vulnerabilities and threats. The UI provides a single view for analyzing application vulnerabilities, discover vulnerable and out-of-date third-party libraries, as well detect application threats and attacks in production.

As you start using the TeamServer UI to configure agents and analyze your applications, it's important to familiarize yourself with the components of the UI that will most oftent be used. The sections below describe the core elements of the UI.

## Top Navigation Bar
The top navigation bar follows users on every page as they traverse through the application. The links on this page element are visible from every page. There are two versions of the Top Navigation Bar depending on your current system role and access levels. Most users will interface with the organization version of the bar. Users with system administration capabilities will have the luxury of toggling to the system version of the bar.

### Organization View: Top Navigation Bar
The top navigation bar provides universal access to the following components within TeamServer:

<a href="assets/images/TopNav_Org.png" rel="lightbox" title="Top Navigation Bar for an Organization"><img class="thumbnail" src="assets/images/TopNav_Org.png"/></a>

| TeamServer Component   | Description                                                                                                                                                                                  |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Organization Dashboard | When a user selects the link for Contrast Security, he/she will navigate to a portfolio dashboard providing detailed insight to all applications, activity and portfolio scoring.            |
| Applications Portfolio | A user selects this link for a searchable list of applications. Various functions such as application licensing, merging, grouping, archiving and restoring can be performed from this page. |
| Server Portfolio       | A user selects this link for a searchable list of servers. From this page, servers can be edited, tagged or deleted.                                                                         |
| Libraries Overview     | From the libraries overview page, the user can see a ubiquitous view of all libraries associated with the entire portfolio of applications within the organization.                          |
| Reports Dashboard      | The reports dashboard provides a single interface to view organization-level charts for applications, traces and servers.                                                                    |
| Rules Configuration    | The rules page provides access to both vulnerability detection rules and security controls.                                                                                                  |
| Trace Searching        | A user may search using the trace ID to pull up the details of an application trace.                                                                                                         |
| Adding an Application  | This button provides universal access to on-board an application for monitoring purposes.                                                                                                    |

### System Administration View: Top Navigation Bar
When a user switches from the organization view to the system administration view, the top menu changes. This top menu for system administrators and SuperAdmins can only be viewed within an Enterprise On-Premise (EOP) installation. The following links are universally accessible from the Admin pages:

<a href="assets/images/TopNav_Admin.png" rel="lightbox" title="Top Navigation Bar for an System Administrators"><img class="thumbnail" src="assets/images/TopNav_Admin.png"/></a>

| Administration Page     | Description                                                                                                |
|-------------------------|------------------------------------------------------------------------------------------------------------|
| Administrator Dashboard | Summary view of vulnerabilities, applications and licensing for all organizations.                         |
| Organizations           | An administrator selects this page to create, delete and search organizations.                             |
| Users                   | An administrator selects this page to create, delete and search users.                                     |
| Applications            | An administrator selects this page to view all applications (including archived) across all organizations. |
| Traces                  | A universal page for searching all traces by language and rule type.                                       |
| Groups                  | An administrator can create, delete and manage System and/or Organization Access Control Groups.           |
| Stats                   | Summary page of TeamServer performance metrics for the JVM, connected agents and authenticated users.      |


## Settings Menu
The settings menu follows users ubiquitously throughout TeamServer. From this menu, users can access their personal account information, organization settings, system settings (EOP only), help and toggle between organizations.

### Organizational Settings Menu
When a user is a non-administrator, he/she can use this drop-down menu to change organization settings, toggle between organizations if an organization access control group has been created, as well as change their personal account information such as their password.

<a href="assets/images/Settings_Org.png" rel="lightbox" title="Settings Navigation Bar for an Organization"><img class="thumbnail" src="assets/images/Settings_Org.png"/></a>

### System Administration Settings Menu
When a user is an administrator, he/she can use this drop-down to change TeamServer system settings. The menu is the exact same as the Organization Settings Menu, however if a user has admin credentials, he/she will see a link called "Admin" which will toggle the user to the system administration pages.

<a href="assets/images/Settings_Admin.png" rel="lightbox" title="Settings Navigation Bar for an System Administrator"><img class="thumbnail" src="assets/images/Settings_Admin.png"/></a>

## Page Action Bar
Many of the pages within TeamServer offer an action bar embedded at the top of the page below the top navigation. These pages often contain rows data presented table format. The action bar allows certain operations to be performed in bulk or individually by selecting one or more rows and selecting one of the actions.

<a href="assets/images/ActionBar_OrgApps.png" rel="lightbox" title="Example Action Bar"><img class="thumbnail" src="assets/images/ActionBar_OrgApps.png"/></a>

## Trace Filter 
When a user is within an application and reviewing vulnerabilities, he/she may use the trace filter to limit the result set of traces meeting the search criteria. 

<a href="assets/images/TraceFilter.png" rel="lightbox" title="Trace Filter Search"><img class="thumbnail" src="assets/images/TraceFilter.png"/></a>
