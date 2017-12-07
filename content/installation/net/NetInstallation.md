<!--
title: "Contrast .NET Agent Installation"
description: "Contrast .NET Agent Installation."
tags: "installation agent .NET"
-->

The **Contrast.NET Agent** analyzes the behavior of .NET web applications as users interact with these applications.

To start analyzing an application, download the .NET agent installer from the Contrast interface and run this installer on the server where the web application is deployed.  You can then simply point your browser to the web application and use it as you normally would: click on links, submit forms using normal data, etc. The .NET agent's sensors will gather information about the application's security, architecture, and libraries. The results of the agent's analysis can be viewed on [Contrast](https://app.contrastsecurity.com).

## System Requirements

Before beginning installation, confirm the following:

- You have administrative access to a web server, and the server is supported by Contrast.
- There is a deployed application to be analyzed and the web application technology is supported by Contrast.
- No other .NET Profiler (such as performance or APM tools) are installed. 
- IIS can be restarted.
- The web server has network connectivity with Contrast. 
- The server meets the minimum requirements below. 

Once these requirements are met, you're ready to install the Contrast .NET Agent.

### Minimum requirements: 

* .NET Framework 4.5.1 present
* 2 CPU
* 4 GB memory

### Recommended requirements: 

* .NET Framework 4.5.1 present
* 4+ CPU
* 8+ GB memory  

> **Note:** 
> 1. The server must have .NET Framework 4.5.1 installed; however, this requirement doesn't extend to applications that need to be analyzed. The .NET agent can analyze web applications that run on supported CLRs: CLR 2 (.NET 3.5) and CLR 4 (.NET 4.0+). 
>
> 2. The Contrast .NET Agent roughly doubles the RAM requirements of analyzed applications. Applications should ideally use less than half of the available memory when the Contrast .NET Agent is not installed. 
>
> 3. The Contrast .NET Agent uses the CLR Profiling API to perform data and code flow analysis (i.e. detect SQL-injection, XSS, weak cryptography, etc.) as well as to detect libraries and technologies in use by analyzed applications. The Microsoft CLR has a built-in limitation that only one profiler can profile a process. This limitation comes from Microsoft and their implementation of the CLR. Please note that many performance/APM tools such as New Relic, AppDynamics, etc. also use the CLR Profiling API and therefore cannot be used on the same server as the Contrast .NET agent. For more details, refer to [Microsoft's CLR documentation](https://docs.microsoft.com/en-us/dotnet/framework/unmanaged-api/profiling/setting-up-a-profiling-environment)

## Supported Technologies

The Contrast.NET Agent supports analysis of web applications built on the following technologies:

| Technology                 | Supported                                |
| -------------------------- | ---------------------------------------- |
| .NET Framework             | 3.5, 4.0, 4.5, 4.5.1, 4.5.2, 4.6, 4.6.1, 4.6.2, 4.7, 4.7.1 |
| CLR                        | - CLR2<br />- CLR4                       |
| Web Servers                | - IIS<br />- IIS Express                 |
| Operating System           | - Windows 7, 8, 10<br />- Windows Server 2008 R2, 2012, 2012 R2, 2016<br />- Azure Virtual Machines, Cloud Services, Mobile Services |
| Processor Architecture     | The agent can be installed on both 32-bit and 64-bit systems. On 64 bit systems, you can use the agent to analyze both 32-bit and 64-bit web applications. |
| Web Application Frameworks | While Contrast has built explicit tests against only the frameworks listed below, there's a good chance that Contrast can still analyze your application if its framework simply wraps the typical ASP.NET classes (e.g., `System.Web.HttpRequest`). <br />- ASP.NET MVC 3-5  <br />- ASP.NET Web Forms<br />- ASP.NET Web Pages<br />- IIS-Hosted ASMX-based Web Services<br />- IIS-Hosted Web API<br />- IIS-Hosted WCF Services |
>**Note:** 
>* The **Mono** runtime isn't supported because Mono doesn't have a **Profiler API**. The Profiler API is an interface based on a **Component Object Model (COM)** and isn't supported on Linux.
>* The **Classic ASP** language isn't supported because Classic ASP applications don't run on the .NET runtime. 
>* Contrast doesn't support analysis of .NET Core applications at this time because .NET Core applications run on a different runtime (CoreCLR.)


## Installation

To install the agent, complete the following steps:

* Log in to the Contrast interface. 
* Click the button in the top navigation bar to **Add Agent**.
* Select the **.NET Agent** in the dropdown menu, and click the button to **Download Agent**. This downloads a zip archive file (e.g., *ContrastSetup_3.3.5.zip*). 

> **Note:** You might need to specify proxy authentication information required by your network before downloading the agent.

* Extract the archive on the web server, and run *ContrastSetup.exe*. This installs the .NET agent. 

## Silent Installation

The .NET agent installer supports the command line options below. These options are silent, which means that they don't require your interaction and don't present the installer's user interface.

* Install: `ContrastSetup.exe -s -norestart`

* Install and Do Not Start the Contrast.NET Tray Application: `ContrastSetup.exe -s -norestart StartTray=0`

* Uninstall: `ContrastSetup.exe -uninstall -s -norestart`

* Repair: `ContrastSetup.exe -s -repair`



## Changes Made by the Contrast .NET Agent Installer

Many users are curious about the changes made by the Contrast .NET agent and what impacts these changes may have. In all respects, the Contrast .NET agent installer is a normal Windows application installer built using standard MSI technology. The Contrast .NET Agent installer validates that the target server satisfies several requirements (e.g. the operating system is Windows Server 2008 R2 or greater). Assuming all requirements are met, the installer registers the .NET agent as a standard Windows program and makes the following changes:

- Places the agent’s files on disk in the specified install location (e.g. C:\Program     Files\Contrast.NET). This includes several DLLs and executables, notably the background Windows service that drives agent behavior. 
- Creates the specified data directory for the agent that is primarily used to store agent log files (e.g. C:\ProgramData\Contrast.NET.) 
- Registers the agent’s background Window service with the operating system.
- Reads the DotnetAgentSettings.ini file to customize the agent’s configuration file with details necessary to communicate with TeamServer (e.g. API key.)
- Registers several agent assemblies with the .NET global assembly cache so they can be loaded by instrumented applications.
- Starts the agent’s background Windows service and Tray (UI) application. This service has a number of responsibilities: 
  - Preparing the environment for instrumentation by registering the agent’s profiler component with IIS via environment variables and restarting IIS. This causes the CLR to load the agent’s profiler which is responsible for instrumenting analyzed applications. 
  - Communication with the Contrast interface.
  - Communication with Profiler and Sensor components via local named pipes. 

## Next Steps
* [Using the Contrast .NET Agent](installation-netoverview.html)  
* [Customize .NET Agent Configuration](installation-netconfig.html)  
