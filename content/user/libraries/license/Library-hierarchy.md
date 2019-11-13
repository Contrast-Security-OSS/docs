<!--
title: "Library Hierarchy"
description: "View library dependencies hierarchy"
tags: "user library licenses hierarchy vulnerabilities sca"
-->

When an open source library is added to an application, all of it’s dependencies are also inherited. Some of those indirect dependencies could be introducing vulnerabilities into your applications. The Contrast SCA tool will identify all open source libraries and visualize these libraries as a hierarchical dependency tree.

 
In order to display library hierarchy for your application, we have to access your application code at pre-compile time, a different stage of the SDLC that our agents collect. We have provided the ‘Contrast SCA CLI Tool’ <link> specifically for this function, follow the directions there to enable the display of a dependency tree for your application. 


Viewing your dependency tree. 


Choose the application you want to view your dependency tree for from Applications in the main navigation.  
*The application must have have the Contrast-SCA tool <link>  installed via the command line.  

 

Select the Libraries tab on the navigation bar. 


 

Once the Libraries view of your application is presented click the Dependency Tree icon on the far right of the page to view the analysis of your application.  

 

After the page is loaded you will be presented a dependency tree of your application based on the data collected by the SCA CLI tool.  
 

 