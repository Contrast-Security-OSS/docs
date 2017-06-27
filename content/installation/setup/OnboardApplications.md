<!--
title: "Enabling Application Servers with Contrast"
description: "High-level overview for adding the Contrast agent to applications."
tags: "setup agent installation TeamServer onboarding application"
-->

## Identify an Application Server
Start using Contrast by identifying an application server that you want Contrast to analyze. You can choose any of the following types:

* Developer's local application server running in the integrated development environment (IDE)
* Continuous integration application server that's used during the automated testing process
* Test or QA application server
* Staging application server
* Embedded server in an appliance
* Application server running in a virtual machine
* Remote application server running in the cloud
* Production application server <br> (Using Contrast earlier in the lifecycle is generally advised.)

## Download the Contrast Agent
Log into the Contrast interface using your Organization Admin (not SuperAdmin) account. Your username and password are the same as the Contrast Hub credentials that you used to download the installer and license.

Click on the **Applications** tab and then the **Add Application** button to start the agent download and installation wizard.  Follow the on-screen instructions to configure and download the appropriate agent for the application server that you're enabling.

## Install the Agent
Follow the on-screen instructions to add the agent to your application server. Once you restart the application server, the Contrast agent should start and immediately connect to the Contrast application. If this doesn't happen, something may be preventing the agent from communicating with the application. The most common causes and solutions are:

* Firewalls that don't allow traffic to the Contrast application's IP address and port: You need to configure host or network firewall.
* Web gateways and proxies that require authentication: You can configure this in the agent configuration by returning to the **Agent Download** page, setting the proper configurations and getting a new agent.
* Contrast application server URL is misconfigured, so the agent is attempting to communicate with the wrong address. You can change this in the agent configuration, if necessary.

## Test the Configuration
Browse the applications on the application server with Contrast enabled - just click through a few pages and forms - to generate enough activity for good information on your application inventory and dashboard. You can check that Contrast is working by returning to the Dashboard of your Contrast interface to review results. From this point forward, you have an up-to-date application security dashboard for all the applications on that application server. 


