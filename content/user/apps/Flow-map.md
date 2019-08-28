<!--
title: "Flow map"
description: "Learn how to view the flow of data through your application."
tags: "user UI applications flow map data access"
-->

The application flow map provides an interactive view of where data and resources are shared between your applications. 

## How It Works

Contrast uses data reported from your Contrast agent to the UI to build a detailed view of where data from your application flows within your organization and beyond it. You can determine if users and connected applications have the appropriate access. 

The agent performs matching through string credentials, and reports to the UI every time a user exercises the application. 

<a href="assets/images/Flow-map-active.png" rel="lightbox" title="Flow Map tab"><img class="thumbnail" src="assets/images/Flow-map-active.png"/></a>

If the agent is currently reporting data for this application, these columns are left blank.

<!-- In what scenarios would the agent not report this info? Not exercised? -->

<a href="assets/images/Flow-map-empty.png" rel="lightbox" title="No data in the Flow Map tab"><img class="thumbnail" src="assets/images/Flow-map-empty.png"/></a>

## Application Architecture

The **Application Architecture** section break down the view, presentation and service layers of the application's front end. You can also see foundational information about the application, including the environments in which it's deployed, letter grade, vulnerability statuses and attack status. 

### Layers

The **View** column displays the layer of technologies that determine what a browser sees and processes. The **Presentation** column displays the layer of technologies that generates the application view. The **Service** column displays the layer comprised of the database, LDAP driver or back end code performing the application logic.

Hover on an item in any of the lists to see how many instances of each type of library <!-- ? --> used in the application. If the agent reports any vulnerabilities, a warning icon appears beside the library in which they were found; hover over the icon for a links to the vulnerabilities' **Overview** pages.

### Browsers

If the application is being exercised while you're viewing the flow map, the **Browser** tab appears with a list of the browsers <!-- on which you can access the app or on which it's being accessed? -->.

## Back-End Systems

The **Back-End Systems** columns displays each of the system to which your application is connected. A solid line with lock indicates that the connection is encrypted; a dashed line shows that the connection is unencrypted or the state of encryption is unknown. Hover on a system for more details; click on the icon to highlight its connection to other applications. 

## Connected Applications

The **Connected Applications** column lists each of the applications that are connected to the primary application by a back-end system. To see connected applications that meet specific criteria, click the funnel icon to select filters from the dropdown menu, such as environment, application language and custom tags. The menu also shows [session metadata](user-vulnerableapps.html#session) fields for the primary application (not the connected applications), if available. Click the **See Flowmap** link to go to the Flow Map tab for that application. 

> **Note:** If a user isn't part of the necessary [access group](admin-manageorgs.html#access) to view details for a connected application, the affected application is omitted from their view in the column. 

