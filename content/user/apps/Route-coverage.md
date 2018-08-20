<!--
title: "Route Coverage"
description: "Overview of setting up environments"
tags: "user UI applications route coverage exercised vulnerabilities"
-->

## About Route Coverage

An application “route” is a combination of three distinct data points: the normalized URL of the route, the HTTP verb associated with the request (e.g., Get or Post) and the method signature of the controller action. When you consistently exercising each route in your application, the Contrast agent can successfully Assess and Protect the surface layer of your application, and discover vulnerabilities. 

### Agent configuration 

Contrast supports route coverage for the following frameworks: 

* Java: Spring Spring MVC 4.x 
* .NET: ASP.NET MVC (versions 4 and 5), WebForms, WebAPI and WCF
* Node: Express 
* Ruby: Rails and Sinatra
* Python: Django, Pyramid and Flask

Coverage is enabled automatically for .NET or Node applications. For Java applications, you must use the following command to specify the application name when deploying the Java agent: `-Dcontrast.appname = <example name>`. 

## View Route Details 

To see Contrast findings in the UI, select an application from the **Applications** grid. In your application's **Overview** tab, view the number of **Routes Exercised** compared to the number of total routes in your application. Click on the figure or select the **Route Coverage** tab to view details for each route that Contrast has identified in the application. 

<a href="assets/images/App-overview.png" rel="lightbox" title="View routes in your application Overview"><img class="thumbnail" src="assets/images/App-overview.png"/></a>

Each layer of the chart represents routes that have been **discovered** by Contrast (but never exercised with the agent), **exercised** with the Contrast agent, and exercised and found to be **vulnerable**. Click on each layer to see how Contrast's findings have been updated each day over the past week. 

<a href="assets/images/App-route-coverage.png" rel="lightbox" title="View detailed coverage information for each route"><img class="thumbnail" src="assets/images/App-route-coverage.png"/></a>

View details on each route - including the servers on which it exists and the number of vulnerabilities found - in the **Route** grid. Click on the vulnerability count in a grid row to view more information about each vulnerability in the application's **Vulnerabilities** page. (The number of critical vulnerabilities are noted with a red warning mark.) Click on the name of a server to go to the server's **Overview** page. 

Use the filters or the search field to find certain routes. The date range (calendar) filter simultaneously updates your view in the grid and the chart. Users with administrator-level permissions can also click the reset icon to remove all routes listed in the grid. 

<!-- If you suspect that there are more routes in your application that Contrast has yet to discover, click the **import** icon to upload a CSV spreadsheet of all known routes. -->



