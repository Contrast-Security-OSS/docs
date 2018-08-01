<!--
title: "Route Coverage"
description: "Overview of setting up environments"
tags: "user UI applications route coverage exercised vulnerabilities"
-->

## About Route Coverage

A “route” is a combination of three distinct data points: the Normalized URL of the route, HTTP verb associated with the request (e.g., Get or Post) and method signature of the controller action. By exercising each route in your application consistently, the Contrast agent can successfully assess the surface layer of your application and discover vulnerabilities. 

### Agent configuration 

Route coverage is available for Java Spring, .NET MVC and Webforms, and Node Express users. 

Route Coverage is enabled automatically for .NET or Node applications. For Java applications, you must specify the application name, using the following command, when deploying the Java agent: `-Dcontrast.appname = <example name>`. 

## View Route Details 

In your application's **Overview** tab, view the number of **Routes Exercised** compared to the number of total routes in your application. Click on the figure, or select the **Route Coverage** tab to view details for each route that Contrast has identified in the application. 

<a href="assets/images/App-overview.png" rel="lightbox" title="View routes in your application Overview"><img class="thumbnail" src="assets/images/App-overview.png"/></a>

Each layer of the chart represents routes that have been **discovered** by Contrast (but never exercised), **exercised** with Contrast, and exercised but **vulnerable**. Click on each layer to see how Contrast's findings have been updated each day. 

<a href="assets/images/App-route-coverage.png" rel="lightbox" title="View detailed coverage information for each route"><img class="thumbnail" src="assets/images/App-route-coverage.png"/></a>

You can also view details of each route, including the number of vulnerabilities found and the servers on which it exists, in the **Route** grid. Click on the vulnerability count in a grid row to view them in the application's **Vulnerabilities** page. (The number of critical vulnerabilities are noted in the grid row with a red warning mark.) Click on the name of a server to go to the server's **Overview** page. 

Use the filters or the search field to find certain routes. 

Admin-level users can click the reset icon to remove all routes listed in the grid. The date range (calendar) filter simultaneously updates your view in the grid and the chart.

<!-- If you suspect that there are more routes in your application that Contrast has yet to discover, click the **import** icon to upload a CSV spreadsheet of all known routes. -->





