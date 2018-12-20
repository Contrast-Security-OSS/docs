<!--
title: "Contrast 3.5.9 - December 2018"
description: "Contrast 3.5.9 December 2018"
tags: "3.5.9 December Release Notes"
-->

Our gift to you: completely revamped grids for all your for applications, servers, and vulnerabilities! 

## Fixes

* ...


## Improvements

* Redesigned and enhanced grids for applications, servers, and vulnerabilities make the most important data easier to find and streamline your daily tasks. Improvements include, but are certainly not limited to, filters per column, enhanced search functions, instantly visible tags and easier access to row actions. If you have questions or suggestions for more improvements, use the **Give Us Feedback** button above any of the grids.

* Assign key:value pairs to applications during onboarding for better organization and tracking. Go to **Organization Settings > Applications** to define [custom fields](admin-orgsettings.html#app-defaults) - such as such as Application ID, Business Unit and Point of Contact - for new and existing applications. Contrast even provides a preformatted configuration property to copy and use in your own files. 

* Configure your [VSTS integration](admin-orgintegrations.html#vsts-tfs) to send tickets to a specific backlog for a subproject. 


## Agent Updates

### Java summary 


#### One application per JVM 

In an upcoming release, the Java agent will move to a mandatory one application per JVM reporting model. This change provides more consistency across agent configuration and reporting across technology stacks. It also better reflects current best practices in web application packaging and deployment, targeting cloud infrastructures with dynamically deployable and scalable application clusters. The new model also eliminates the sometimes unreliable heuristics (based request context path) currently used to partition requests to specific applications, and will provide better reporting as a result.

In preparation for the new model, application naming properties `contrast.override.appname` and `contrast.standalone.appname` are being deprecated and replaced by `application.name`. As of a future release, the deprecated properties will no longer be honored. [Java System Properties](installation-javaconfig.html#system) will be updated to reflect each stage of these changes. 

### .NET summary 

 
### Node.js summary 


### Ruby summary 

Ruby team has been working to enhance the agent's Assess functionality. We've worked to move several method patches to *C* and refactored how extensions are generated to more reliably instrument applications in Assess mode. We also resolved a bug around parameter tracking in Assess, which allows for more accurate dataflow detection.

### Python summary

