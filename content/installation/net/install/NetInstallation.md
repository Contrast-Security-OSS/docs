<!--
title: "Contrast .NET Agent Installation"
description: "Contrast .NET Agent Installation."
tags: "installation agent .NET"
-->

## The Basics

To install the .NET agent, complete the following steps.

* Log in to the Contrast UI. 
* Click the button in the top navigation bar to **Add Agent**.
* Select the **.NET Agent** in the dropdown menu, and click the button to **Download Agent**. You might need to specify proxy authentication information required by your network before downloading the agent.
* Extract the downloaded zip archive (e.g., *ContrastSetup_18.4.56.zip*) on the web server, and run *ContrastSetup.exe*. This installs the .NET agent. 


## Customize Your Installation

The downloaded zip archive contains a file called *contrast_security.yaml* which is used by the agent for configuration. This includes the authentication credentials and proxy settings the agent needs to connect to Contrast. 

You can fully configure the agent using the *contrast_security.yaml* file. See the agent [configuration](installation-netconfig.html#net-yaml) instructions for more information.

> **Example:** To disable automatic updates of the .NET agent, update the *contrast_security.yaml* file, add a new line and the code below, and then continue the installation as normal.
 ```
 agent:
  auto_update:
    enable: false
 ```

> **Note:** The *contrast_security.yaml* file is copied to the agent's data directory by the installer (*C:\ProgramData\Contrast\dotnet\contrast_security.yaml* by default). The installer does **not** copy the YAML file if it already exists at the destination.

## Silent Installation

The .NET agent installer supports following the command line options. These options are silent, which means that they don't require your interaction and don't present the installer's UI.

* Install: `ContrastSetup.exe -s -norestart`

* Install and do not start the Contrast .NET Tray Application: `ContrastSetup.exe -s -norestart StartTray=0`

* Install using the YAML file specified: `ContrastSetup.exe -s PathToYaml=c:\contrast_security.yaml`

* Uninstall: `ContrastSetup.exe -uninstall -s -norestart`

* Repair: `ContrastSetup.exe -s -repair`

## Changes Made by the Agent Installer

Many users are curious about the changes made by the .NET agent and the impacts these changes may have. In all respects, the Contrast .NET agent installer is a normal Windows application installer built using standard MSI technology. The .NET agent installer validates that the target server satisfies several requirements (e.g., the operating system is Windows Server 2008 R2 or greater). If all requirements are met, the installer registers the .NET agent as a standard Windows program and makes the following changes.

- Places the agent’s files on a disk in the specified install location (e.g., *C:\Program Files\Contrast\dotnet*). This includes several dynamic link libraries (DLLs) and executables, such as the background Windows service that drives agent behavior. 
- Creates the specified data directory for the agent that's primarily used to store agent log files and configuration (e.g., *C:\ProgramData\Contrast\dotnet*). 
- Registers the agent’s background Window service with the operating system.
- Starts the agent’s background Windows service and Tray (UI) application. This service has a number of responsibilities: 
  - Preparing the environment for instrumentation by registering the agent’s profiler component with IIS through environment variables, and restarting IIS. This causes the CLR to load the agent’s profiler, which is responsible for instrumenting analyzed applications. 
  - Communication with the Contrast UI.
  - Communication with profiler and sensor components through local named pipes. 

## Next Steps

* [Use the Contrast .NET agent](installation-netusage.html#usage)  
* [Customize .NET agent configuration](installation-netconfig.html)  
