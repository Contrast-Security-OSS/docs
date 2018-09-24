<!--
title: "Contrast .NET Agent Installation"
description: "Contrast .NET Agent Installation."
tags: "installation agent .NET"
-->

## The Basics

To install the .NET agent, complete the following steps:

* Log in to the Contrast interface. 
* Click the button in the top navigation bar to **Add Agent**.
* Select the **.NET Agent** in the dropdown menu, and click the button to **Download Agent**. You might need to specify proxy authentication information required by your network before downloading the agent.
* Extract the downloaded zip archive (e.g., *ContrastSetup_18.4.56.zip*) on the web server, and run *ContrastSetup.exe*. This installs the .NET agent. 


## Customize Your Installer

The downloaded zip archive contains a file called *DotnetAgentSettings.ini*, which is used to bootstrap your installation by pre-setting the application *config* file with your authentication credentials and proxy settings. The following settings can also be added to the *ini* file.

These additional settings allow you to pre-populate your [configuration](installation-netconfig.html) with commonly changed settings. 

> **Example:** To disable automatic updates of Contrast .NET agent, update the *ini* file, add `AutoUpdateEnabled=false` on a new line, and then continue the installation as normal.


| Parameter                | Description                              | Version |
| ------------------------ | ---------------------------------------- | ------- |
| AutoUpdateEnabled        | Sets the `AutoUpdateBehavior` setting in the *config* file. Setting this to **true** sets update behavior to Daily; setting it to **false** sets it to Disabled.  | 4.6+     |
| EncryptProtectedSettings | Sets the corresponding `EncryptProtectedSettings` setting in the *config* file, and controls whether `ProxyUser` and `ProxyPass` settings are encrypted. See [**Proxy Credentials**](installation-netconfig.html#proxy-credentials) for more information. | 4.2.0+  |
| OverrideExistingProfiler |  Sets the corresponding `OverrideExistingProfiler` setting in the *config* file. Due to .NET Profiling API technology limitations, only one program can use it at a time. This API is commonly used by APM agents like NewRelic, AppDynamics or DynaTrace. The default setting is **false**; Contrast agent will fail to start if it detects another program using the .NET Profiling API, which allows the other program/agent to continue working. If set to **true**, Contrast will attempt to force itself to start, which will break the other agent.   | 18.3.4+ |
| RestartIISOnConfigChange | Sets the corresponding `RestartIISOnConfigChange` setting in the config file.  If enabled, Contrast will automatically restart IIS in the background if any of the configuration settings that require IIS restart are changed.  Changes that require restart are those that enable or disable Assess or Defend mode, add security controls, or change process whitelist or blacklist.  These changes can come from changing the application *config* file or from Contrast website. The default value is **true**. If set to **false**, you must restart IIS for changes to the stated configuration settings to take effect. | 18.4.69+  |
| ServerEnvironment   | Controls the environment value sent to Contrast. Valid `ServerEnvironment` values are `DEVELOPMENT`, `QA` or `PRODUCTION`. The default value is `QA`. | 3.4.2+  |


## Silent Installation

The .NET agent installer supports the command line options below. These options are silent, which means that they don't require your interaction and don't present the installer's UI.

* Install: `ContrastSetup.exe -s -norestart`

* Install and Do Not Start the Contrast .NET Tray Application: `ContrastSetup.exe -s -norestart StartTray=0`

* Uninstall: `ContrastSetup.exe -uninstall -s -norestart`

* Repair: `ContrastSetup.exe -s -repair`


## Changes Made by the Agent Installer

Many users are curious about the changes made by the Contrast .NET agent and what impacts these changes may have. In all respects, the Contrast .NET agent installer is a normal Windows application installer built using standard MSI technology. The Contrast .NET agent installer validates that the target server satisfies several requirements (e.g., the operating system is Windows Server 2008 R2 or greater). If all requirements are met, the installer registers the .NET agent as a standard Windows program and makes the following changes:

- Places the agent’s files on a disk in the specified install location (e.g., *C:\ProgramFiles\Contrast\dotnet*). This includes several dynamic link library (DLLs) and executables, such as the background Windows service that drives agent behavior. 
- Creates the specified data directory for the agent that is primarily used to store agent log files (e.g., *C:\ProgramData\Contrast\dotnet*). 
- Registers the agent’s background Window service with the operating system.
- Reads the *DotnetAgentSettings.ini* file to customize the agent’s configuration file with details necessary to communicate with the Contrast application (e.g., API key).
- Registers several agent assemblies with the .NET global assembly cache so they can be loaded by instrumented applications.
- Starts the agent’s background Windows service and Tray (UI) application. This service has a number of responsibilities: 
  - Preparing the environment for instrumentation by registering the agent’s profiler component with IIS through environment variables and restarting IIS. This causes the CLR to load the agent’s profiler, which is responsible for instrumenting analyzed applications. 
  - Communication with the Contrast interface.
  - Communication with Profiler and Sensor components through local named pipes. 

## Next Steps

* [Use the Contrast .NET agent](installation-netusage.html#usage)  
* [Customize .NET agent configuration](installation-netconfig.html)  
