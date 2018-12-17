<!--
title: "One Application per JVM"
description: "The java agent will be moving to a single application per JVM."
tags: "installation reporting java agent configuration"
-->

## One Application per JVM 
In an upcoming release the java agent will be moving to a mandatory one application per JVM reporting model.  Currently, only the java agent supports the option of partitioning reporting from a single process into multiple applications.  The move to one application per JVM will provide better consistency in configuration and reporting across technology stacks.  It also better reflects current best practices in web application packaging and deployment, targeting cloud infrastructures with dynamically deployable and scalable application clusters.  The new model eliminates the sometimes unreliable heuristics (based request context path) currently used to partition requests to specific applications, and so will provide better reporting.

In preparation for this change, and consistent with the preference for configuration property names consistent with the YAML definitions, two existing application naming properties are being deprecated and will, in a future release, no longer be honored.  The preferred application name configuration property is now application.name and should replace usages of the property contrast.override.appname.  As all deployments in the near future will be one application per JVM, the usage of contrast.standalone.appname will no longer be required to indicate that reporting model, and the application name should be specified with property application.name.
 
