<!--
title: "Overview"
description: "Overview of setting up your agents with Contrast"
tags: "EOP overview Contrast agents started setup"
-->

Using Assess and/or Protect requires two installations:
* Central instance(s) of Contrast (TeamServer)
* Agent for each web application server

We strongly advise the use of our Contrast Software as a Service (SaaS). It’s SOC-2 Type II compliant and gets security and feature updates as they become available. To connect to the SaaS offering, follow the instructions provided to your administrator. These instructions also contain the credentials needed to log in. 

To [install Contrast](installation-setupinstall.html) in your own environment, you want to verify that your configuration complies with those that are supported and suggested, which is documented in the [System Requirements](installation-setup.html#contrast-reqs) article.
 
For getting the agents connected to Contrast, install an agent into your web application server. Contrast inventories all included servers, applications in each run, vulnerabilities in each application, and CVEs in each library used by each application. 

## Agents 

### Java Agent 
The Java Agent analyzes the behavior of Java web applications running on your container of choice.

[Supported Technologies](installation-java.html#java-supported)
[Installation](installation-javainstall.html)

### .NET Agent
The .NET Agent analyzes the behavior of .NET web applications running on IIS as users interact with these applications.

[Supported Technologies](installation-net.html#net-supported)
[Installation](installation-net.html#net-install)

### Node Agent
The Node Agent analyzes the behavior of Node.js web applications by using established techniques, such as source-to-source compilation, to intercept and add Contrast's sensors to an application prior to execution. 

[Supported Technologies](installation-node.html#node-supported)
[Installation](installation-node.html#node-install)