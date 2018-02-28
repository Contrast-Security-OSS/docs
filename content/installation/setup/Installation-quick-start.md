<!--
title: "Quick Start Guide"
description: "Overview of installing Contrast"
tags: "quick start guide EOP overview Contrast agents installation setup"
-->

Before you begin the process of setting up Contrast, explore the requirements, processes and benefits to including it in your current workflows. 

## Set Up the Contrast Application 

The Contrast application for Enterprise-on-Premises (EOP) is designed for ease of deployment and simplicity of configuration. EOP customers must only set up the central Contrast application once per organization. 

Contrast strongly advises the use of Contrast's Software as a Service (SaaS) product. It’s SOC-2 Type II compliant, and gets security and feature updates as they become available. **To connect to SaaS mode, follow the instructions provided to your administrator.** These instructions also contain the credentials you need to log in to the Contrast application. SaaS customers can go the following section on **Agents** for the appropriate installation instructions. 

## Installation for EOP 

Using Assess, Protect or both as an EOP customer requires two installations:
* Central instance of the Contrast application
* Agent for each web application server

The installation contains all embedded components that make up the system configuration. These components include a Tomcat servlet container, MySQL database instance, Cassandra NoSQL instance and an Oracle Hotspot Java Virtual Machine. All of these components are embedded within the installation binary and deployed to a single server as part of the Contrast architecture.

As you prepare to [install Contrast](installation-setupinstall.html) in your own environment, verify that your configuration complies with Contrast's [system requirements](installation-setup.html#contrast-reqs) and [sizing requirements](installation-setup.html#size). You can also update Java options, and take advantage of Contrast logs and tools when you [run Contrast](installation-setup.html#run) on Windows or Linux. 

## Configuration  

To access configuration options, log in to the Administrative interface (/Contrast/superadmin/login.html). The bulk of the application's configuration is handled here. You can configure and update [authentication settings](installation-setupauth.html) from a variety of authentication providers, including Microsoft Active Directory, LDAP and Single Sign-On. Contrast can also be configured to automatically create a [MySQL backup](installation-setup.html#setup-mysql) of the database on a regular, scheduled basis. 

Begin [onboarding applications](installation-setup.html#onboard) by choosing an application server that you want Contrast to analyze. You can then download and install the Contrast agent that's right for you. 

## Agents 

To connect to Contrast agents, install an agent into your web application server. Contrast inventories all included servers, applications in each run, vulnerabilities in each application, and CVEs in each library used by each application.

* The [Java agent](installation-java.html#java-overview) analyzes the behavior of Java web applications running on your container of choice. 

* The [.NET agent](installation-netinstall.html) analyzes the behavior of .NET web applications running on IIS as users interact with these applications.

* The [Node agent](installation-node.html#node-overview) analyzes the behavior of Node.js web applications by using established techniques, such as source-to-source compilation, to intercept and add Contrast's sensors to an application prior to execution. 

* The [Ruby agent](installation-ruby.html#ruby-overview) provides runtime protection of Ruby on Rails web applications.

* The [Python agent](installation-python.html#python-overview) provides runtime protection of Django, Flask and Pyramid web applications.



