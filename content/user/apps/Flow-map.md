<!--
title: "Flow map"
description: "Learn how to view the flow of data through your application."
tags: "user UI applications flow map data access"
-->

The application flow map provides an interactive view of where data and resources are going between your applications. 

## How It Works

Contrast uses data reported from your Contrast agent to the UI to build a detailed view of where data from your application flows within your organization and beyond it. You can determine if users and connected applications have the appropriate access. 

The agent performs matching through string credentials. 

<!-- I'm assuming data is refreshed each time the agent reports to the UI. How often is this? -->

<a href="assets/images/Flow-map-active.png" rel="lightbox" title="Flow Map tab"><img class="thumbnail" src="assets/images/Flow-map-active.png"/></a>

If the agent hasn't detected any back end systems or connected applications...

<!-- In what scenarios would the agent not report this info? Not exercised? -->

<a href="assets/images/Flow-map-empty.png" rel="lightbox" title="No data in the Flow Map tab"><img class="thumbnail" src="assets/images/Flow-map-empty.png"/></a>

## Application Architecture

The **Application Architecture** section break down the **View**, **Presentation** and **Service** layers of the application's front end. 

See the attack status, environments, vulnerability statuses, etc.

### View

The View column displays the layer of technologies that determine what a browser sees and processes. 

### Presentation 

The Presentation tab displays the layer of technologies that generates the application view. 

### Service

The Service tab displays the layer comprised of the database, LDAP driver or back end code performing the application logic.


## Back End Systems

A solid line with lock indicated that the connection is encrypted; a dashed line is unencrypted or unknown. 


## Connected Applications

Click the funnel icon select filters...The dropdown menus shows metadata fields for the main application you're viewing (not the connected applications).

Click the **See Flowmap** link to go to the Flow Map tab for that application. 

> **Note:** If a user isn't part of the necessary [access group](admin-manageorgs.html#access) to view details for a connected application, the affected application is omitted from their view in the column. 

