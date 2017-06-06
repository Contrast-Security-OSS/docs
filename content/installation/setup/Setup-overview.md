<!--
title: "Overview"
description: "Overview of agent setup with Contrast"
tags: "EOP overview Contrast agents installation setup"
-->

Before you begin the process of setting up Contrast, explore the requirements, processes and benefits to including it in your current workflows. 

## Installation

Using Assess, Protect or both requires two installations:
* Central instance(s) of the Contrast application
* Agent for each web application server

We strongly advise the use of Contrast Software as a Service (SaaS). It’s SOC-2 Type II compliant, and gets security and feature updates as they become available. To connect to SaaS mode, follow the instructions provided to your administrator. These instructions also contain the credentials you need to log in to the Contrast application. 

To [install Contrast](installation-setupinstall.html) in your own environment, verify that your configuration complies with Contrast's[System Requirements](installation-setup.html#contrast-reqs).

## Agents 

To connect agents connected to Contrast, install an agent into your web application server. Contrast inventories all included servers, applications in each run, vulnerabilities in each application, and CVEs in each library used by each application.

### Java Agent 
The [Java agent](installation-java.html#java-overview) analyzes the behavior of Java web applications running on your container of choice.

### .NET Agent
The [.NET agent](installation-net.html#net-overview) analyzes the behavior of .NET web applications running on IIS as users interact with these applications.

### Node Agent
The [Node agent](installation-node.html#node-overview) analyzes the behavior of Node.js web applications by using established techniques, such as source-to-source compilation, to intercept and add Contrast's sensors to an application prior to execution. 
