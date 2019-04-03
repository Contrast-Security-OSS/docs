<!--
title: ".NET Agent Supported Technologies"
description: "General Usage of the Contrast .NET Agent"
tags: "installation usage agent .Net"
-->

## How It Works

Contrast agents are designed to require little to no interaction from the user to setup instrumentation. Once installed, the .NET agent automatically instruments ASP.NET applications deployed to IIS. Agent analysis is performed as applications are exercised by users (or by automated scripts or tests). You can view the results of the agent's analysis on the [Contrast application](https://app.contrastsecurity.com).

The Contrast .NET agent consists of several components:

* The background **Windows Service** (*DotnetAgentService.exe*) that prepares the environment for instrumentation and manages communication between agent components. This is the main service that controls agent behavior. You can disable Contrast's instrumentation and analysis by stopping the agent's background Windows service. 

* The **.NET Profiler** that instruments applications to weave in method calls out to agent sensors. 

* **Sensors** that gather security, architecture and library information. 

* The **.NET Contrast Tray**, a Windows system tray application that displays high-level information about the health of the agent.

### IIS restart

Contrast automatically restarts IIS when you install the agent as well as any time that the .NET agent is stopped or started. The .NET Profiling API requires that profiled processes be started **with** a profiler. Therefore, the .NET agent must restart IIS (and any IIS worker processes) to attach the Contrast profiler. This process is similar to how other profiling products (e.g., memory or performance profilers) behave. You may want to change the configuration of any web server monitoring tools that raise alarms when IIS restarts. The .NET agent restarts IIS by stopping the Windows Process Activation Service (WAS), and then starts any previously running services that are dependent on WAS, such as World Wide Web Publishing Service (w3svc). In some cases, users needed to manually configure service dependencies so that WAS-dependent services restart with IIS (e.g., MSMQ Listener Adapter). 

## Analysis

### Start the agent 

To start the agent, and consequently enable analysis, complete either of the the following sets of instructions. 

#### Option one

* Go to **Windows Start**, and select **Services**.
* Right click on **Contrast .NET Main Service**, and select **Start**

#### Option two 

* From an administrator command prompt, use `net start DotnetAgentSvc`.

>**Note:** By default, the Contrast .NET Main Service starts automatically when Windows starts as well as when the agent is first installed.

### Stop the agent 

To stop the agent, and consequently disable Contrast instrumentation and analysis, complete either of the the following sets of instructions. 

#### Option one

* Go to **Start** and select **Services**.  
* Right click on **Contrast .NET Main Service** and select **Stop**. 

#### Option two

* From an administrator command prompt, use `net stop DotnetAgentSvc`.

## .NET Contrast Tray          

The **.NET Contrast Tray** is a Windows system tray application (*ContrastTray.exe*) that displays high-level information about the health of the agent. The following image demonstrates an example of a healthy agent.

<a href="assets/images/UsingTray.png" rel="lightbox" title="Healthy Agent"><img class="thumbnail" src="assets/images/UsingTray.png"/></a>

>**Note:** The Contrast Tray isn't required to be running to analyze applications with Contrast; the Contrast Tray exists only to provide status information about the agent. This information is useful when verifying that the agent is behaving as expected, particularly when the agent is first installed.

### Status indicators 

* **Agent Windows Service** displays a green light when the Contrast Service has been installed correctly and is running

* **TeamServer** displays a green light when the Agent Windows Service can communicate with the [Contrast application](https://app.contrastsecurity.com). The most-common error that causes communication to fail is incorrect proxy settings.

* **IIS Sensors** displays a green light when an application hosted on IIS has been loaded and instrumented. A yellow light is displayed when the agent has set up instrumentation, but IIS hasn't loaded an application yet. 

* **IIS Express Sensors** displays a green light when an application hosted on IIS-Express has been loaded and instrumented. A yellow light is displayed when the agent has set up instrumentation but IIS-Express hasn't loaded an application yet. A red light is displayed when environment variables have not been set for IIS-Express. See [IIS-Express usage](installation-netusage.html#iisexpress).

### Tabs

* The **Action** tab provides high-level instructions for using the .NET agent; these instructions change based on the agent's state. For example, if the agent can't connect to Contrast, the Action tab provides details on the error and suggestions on how to resolve the problem. 

* The **IIS** tab displays a list of all web applications running on the IIS server. The name displayed matches the alias used by IIS to identify the application unless a [custom application name](installation-netconfig.html#appname) has been specified. The **URLs** column displays the number of unique URLs (not including the query string) for the application that the agent has observed. The **Last Activity** column displays the time of the last request analyzed by the agent for that application. This tab is only displayed if IIS is installed.

* The **IIS AppPools** tab displays a list of all application pools configured on the IIS server. This tab displays each application pool's configuration - architecture, pipeline mode, CLR version, identity - and whether or not applications in that application pool will be analyzed. Application pool analysis is configured using the .NET agent's [Application Pool Filtering](installation-netusage.html#iis). This tab is only displayed if IIS is installed.

* The **IIS Express** tab displays a list of all web applications set up to run on IIS Express. This tab is only displayed if IIS Express is installed.

* The **Console** tab includes status and error messages that are useful for troubleshooting problems with the Contrast .NET agent.

