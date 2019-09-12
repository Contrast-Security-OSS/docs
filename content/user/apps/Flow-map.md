<!--
title: "Flow map"
description: "Learn how to view the flow of data through your application."
tags: "user UI applications flow map data access"
-->

The application flow map provides an interactive view of where data and resources are shared within your organization and beyond it.

## How It Works

Every time you exercise an application, the Contrast UI uses data reported from your Contrast agent to create a detailed diagram of your application, the layers of technologies within it and the back-end systems to which it connects. As more applications are exercised within your organization and their back-end systems are identified by the agent, Contrast also identifies which applications are connected to the application you're currently viewing by shared back-end systems. 

The diagram in each application's **Flow Map** tab organizes information into three connected sections: **Application Architecture**, **Back-End Systems** and **Connected Applications**. By viewing all of the connections to your application, you can see the entire landscape of systems and resources that are associated with the application. By focusing on connections between individual systems and applications, you can also determine if users and connected applications in your organization have appropriate access to the current application and sensitive data potentially associated with it. 

<a href="assets/images/Flow-map-active.png" rel="lightbox" title="View the connections between your applications in the Flow Map tab"><img class="thumbnail" src="assets/images/Flow-map-active.png"/></a>

The agent performs application matching through string credentials. Other instrumented applications that share common string credentials - e.g., REST endpoints, database connection, or other unique host and port combinations - are displayed as connected applications. If the agent isn't currently reporting data for the current application, the **Back-End Systems** and **Connected Applications** sections are left blank.

<a href="assets/images/Flow-map-empty.png" rel="lightbox" title="If the agent hasn't reported data for back-end systems or connected applications, these sections are unpopulated"><img class="thumbnail" src="assets/images/Flow-map-empty.png"/></a>

## Application Architecture

The **Application Architecture** section breaks down the view, presentation and service layers of the application's front end. You can also see foundational information about the application, including the environments in which it's deployed, letter grade, vulnerability statuses and attack status. 

### Layers

The **View** column displays the layer of technologies that determine what a browser sees and processes. The **Presentation** column displays the layer of libraries that generates the application view. The **Service** column displays the layer comprised of the database, LDAP driver or back end code performing the application logic.

Hover on an item in any of the lists to see how many instances of each type of library are used in the application, or click on the library to go to the library's page in the UI. If the agent reports any vulnerabilities, a warning icon appears beside the library in which they were found; hover over the icon for links to the vulnerabilities' **Overview** pages.

### Browsers

If the application is being accessed by another user while you're viewing the flow map, the **Browser** tab appears with a list of the browsers on which it's being accessed. Hover over the icons to see more details, such as the browser type and version. 

## Back-End Systems

The **Back-End Systems** columns displays each of the systems to which your application is connected. Hover on the cylinder icon for databases, the globe icon for URLs, or the plug icon for LDAP databases to see more details on each system; click on an icon to highlight its connection to other applications. A solid line with lock indicates that the connection is encrypted; a dashed line shows that the connection is unencrypted or the state of encryption is unknown.  

## Connected Applications

The **Connected Applications** column lists each of the applications that are connected to the primary application by a back-end system. To see connected applications that meet specific criteria, click the funnel icon to select filters from the dropdown menu, such as environment, application language and custom tags. The menu also shows [session metadata](user-vulnerableapps.html#session) fields for the primary application (not the connected applications), if available. Click the **See Flowmap** link to go to the Flow Map tab for that application. 

> **Note:** If a user isn't part of the necessary [access group](admin-manageorgs.html#access) to view details for a connected application, the affected application is omitted from their view in the column. 

