<!--
title: "Enabling Application Servers with Contrast"
description: "High-level overview for adding the Contrast agent to applications."
-->

## Identify an application server to enable with Contrast
The first step is to identify an application server that you want Contrast to analyze.  You can choose any of the following types of application servers:
* Developer's local application server running in the IDE
* Continuous integration application server that is used during the automated testing process
* Test or QA application server
* Staging application server
* Embedded server in an appliance
* Application server running in a virtual machine
* Remote application server running in the cloud
* Production application server (generally we recommend using Contrast earlier in the lifecycle if possible)

## Download the Appropriate Contrast Agent
The next step is to log into your Contrast TeamServer using your Organization Admin (not superadmin) account.  Your user name and password are the same as the Contrast Hub credentials that you used to download the installer and license.

Click on the **Applications** tab and find the **Add Application** button.  This will start the Agent download and installation wizard.  Follow the on-screen instructions to configure and download the appropriate Agent for the application server you are enabling with Contrast.

## Install the Agent
Follow the simple on-screen instructions to add the agent to your application server.  Once you restart the application server, Contrast Agent should start and immediately connect to the Contrast TeamServer.  If not, then something may be preventing the Agent from communicating with the TeamServer.  The most common causes of this are:
* Firewalls that do not allow traffic to the TeamServer's IP address and port - need to configure host or network firewall
* Web gateways and proxies that require authentication - This can be configured in the Agent config by returning to the Agent Download page, setting the proper configurations, and getting a new Agent.
* Contrast Application Server URL is misconfigured, so the Agent is attempting to communicate with the wrong address.  This can be changed in the Agent configuration if necessary.

## Browse Applications
The next step is to browse the applications on the newly Contrast-enabled application server a bit.  Just click through a few pages and forms, and that should generate enough activity to generate good information on your application inventory and dashboard.

## Check Results in Your Contrast TeamServer Dashboard
Finally, you can check that Contrast is working by returning to your Contrast TeamServer dashboard to review results.  From this point forward, you'll have an up-to-date application security dashboard for all the applications on that application server. 
