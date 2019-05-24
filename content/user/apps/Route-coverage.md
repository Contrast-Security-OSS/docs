<!--
title: "Route Coverage"
description: "Overview of setting up environments"
tags: "user UI applications route coverage exercised vulnerabilities"
-->

## About Route Coverage

Contrast observes the flow of data through routes in each of your applications. An application “route” is a combination of three distinct data points: the URL of the route, the HTTP verb associated with the request (e.g., Get or Post), and a unique signature based on that route's controller action. With Contrast's route coverage, you can see detailed information on the components of your application - such as which routes have been exercised versus which ones have not - and make decide where to focus your testing efforts. 

> **Hint:** When you consistently exercise each route in your application, the Contrast agent can successfully Assess and Protect the surface layer of your application, and discover vulnerabilities. 

### Agent configuration 

Contrast supports route coverage for the following frameworks: 

* **Java:** Jersey 2.x and Spring MVC 4.x 
* **.NET:** ASP.NET MVC (versions 4 and 5), WebForms, WebAPI and WCF
* **Node:** Express 
* **Ruby:** Rails and Sinatra
* **Python:** Django, Pyramid and Flask

For supported frameworks, route coverage consists of two parts:  

* **Discovered** routes: the full list of routes that Contrast has detected in an application 
* **Observed** routes: the routes in which Contrast has detected traffic

While coverage is enabled automatically for most Contrast agents, you must use the following property to specify the application name when deploying the **Java** agent: `-Dcontrast.agent.java.standalone_app_name=<example_name>`. If you don't include this property, the Java agent may only observe - but not discover - routes in your application. 

> **Note:** The **Java** and **Node** agents only report coverage information for the specifically instrumented frameworks listed above. For **unsupported frameworks**, neither agent displays any routes.


## View Route Details 

To see Contrast findings in the UI, select an application from the **Applications** grid. In your application's **Overview** tab, view the number of **Routes Exercised** compared to the number of total routes in your application. Click on the figure or select the **Route Coverage** tab to view details for each route that Contrast has identified in the application. 

<a href="assets/images/App-overview.png" rel="lightbox" title="View routes in your application Overview page"><img class="thumbnail" src="assets/images/App-overview.png"/></a>

Each layer of the chart represents routes that have been **discovered** by Contrast (but never exercised with the agent), **exercised** with the Contrast agent, and exercised and found to be **vulnerable**. Click on each layer to see how Contrast's findings have been updated each day. 

<a href="assets/images/App-route-coverage.png" rel="lightbox" title="View detailed coverage information for each route"><img class="thumbnail" src="assets/images/App-route-coverage.png"/></a>

View details on each route - including the servers on which it exists and the number of vulnerabilities found - in the **Route** grid. Click on the route signature to view the HTTP verb and URL, or click on the name of a server to go to the server's **Overview** page. Click on the vulnerability count in a grid row to view more information about each vulnerability in the application's **Vulnerabilities** page. (The number of critical vulnerabilities are noted with a red warning mark.)  

Use the dropdown menu to filter routes, or the search field to find specific routes in the grid. The date range (calendar) filter simultaneously updates your view in the grid and the chart. Users with administrator-level permissions can also click the **reset** icon to remove all routes listed in the grid. 



