<!--
title: ".Net Agent Installation"
description: "Installing the Contrast .NET Agent."
tags: "installation agent .Net"
-->

## System Requirements

Minimum requirements: 

* .NET Framework 4.5.1 present
* 2 CPU
* 4 GB memory

> **Note:** Contrast 3.3.1 required .NET 4.5.2, but this requirement was reduced to 4.5.1 in Contrast 3.3.2.

Recommended requirements: 

* .NET Framework 4.5.1 present
* 4+ CPU
* 8+ GB memory  

## Get Started

Before beginning installation, confirm the following:

* You have administrative access to a web server, and the server is supported by Contrast.
* There is a deployed application to be analyzed, and the web application [technology](installation-net.html#net-supported) is supported by Contrast.
* The server meets the minimum **System Requirements** given in the previous section. 
* IIS can be restarted.
* The web server has network connectivity with Contrast. 

Once these requirements are met, you're ready to install the Contrast .NET Agent.

## Installation

To install the agent, complete the following steps:

* Log in to the Contrast interface. 
* Click the button in the top navigation bar to **Add an Application**.
* Select the **.NET Agent** in the dropdown menu, and click the button to **Download Agent**. This downloads a zip archive file (e.g., *ContrastSetup_3.3.5.zip*). 

> **Note:** You might need to specify proxy authentication information required by your network before downloading the agent.

* Extract the archive on the web server, and run *ContrastSetup.exe*. This installs the .NET agent. 

To start analyzing an application, use the web application as you normally would in your browser: click on links, submit forms using normal data, etc.  The .NET Contrast Agent’s sensors will gather information about the application’s security, architecture, and libraries. You can view the results of the agent’s analysis in the Contrast interface.

## Silent Installation

The .NET agent installer supports the command line options below. These options are silent, which means that they don't require your interaction and don't present the installer's user interface.

* Install: `ContrastSetup.exe -s -norestart`

* Install and Do Not Start the Contrast.NET Tray Application: `ContrastSetup.exe -s -norestart StartTray=0`

* Uninstall: `ContrastSetup.exe -uninstall -s -norestart`

* Repair: `ContrastSetup.exe -s -repair`


## Customize Configuration

If you want to customize the agent's behavior to better suit your needs, follow the instructions in these articles: 

* [Configure Proxy, Performance, Logging, and Analysis](installation-netconfig.html)

* [Exclude Applications from Analysis](installation-netconfig.html#pool)

* [Customize the Server Name](installation-netconfig.html#server)

* [Customize Application Names](installation-netconfig.html#appname)
