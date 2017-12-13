<!--
title: "Contrast .NET Agent Installation"
description: "Contrast .NET Agent Installation."
tags: "installation agent .NET"
-->

The **Contrast .NET agent** analyzes the behavior of .NET web applications as users interact with these applications.

To start analyzing an application, download the .NET agent installer from the Contrast interface and run this installer on the server where the web application is deployed. You can then point your browser to the web application and use it as you normally would: click on links, submit forms using normal data, etc. The .NET agent's sensors will gather information about the application's security, architecture and libraries. The results of the agent's analysis can be viewed in the [Contrast interface](https://app.contrastsecurity.com).

## System Requirements

Before beginning installation, confirm that you can meet the following requirements:

- You have administrative access to a web server, and the server is supported by Contrast.
- There is a deployed application to be analyzed, and the web application technology is supported by Contrast.
- No other .NET Profiler (such as performance or APM tools) are installed. 
- IIS can be restarted.
- The web server has network connectivity with Contrast. 
- The server meets the minimum requirements (stated below). 

**Minimum requirements:**

* .NET Framework 4.5.1 present
* 2 CPU
* 4 GB memory

**Recommended requirements:**

* .NET Framework 4.5.1 present
* 4+ CPU
* 8+ GB memory  

> **Note:** 
> 1. The server must have .NET Framework 4.5.1 installed; however, this requirement doesn't extend to applications that need to be analyzed. The .NET agent can analyze web applications that run on supported Common Language Runtimes (CLRs): CLR 2 (.NET 3.5) and CLR 4 (.NET 4.0+). 
>
> 2. The Contrast .NET Agent roughly doubles the RAM requirements of analyzed applications. Applications should use less than half of the available memory when the Contrast .NET Agent is not installed. 
>
> 3. The Contrast .NET Agent uses the CLR Profiling API to perform data and code flow analysis - detect SQL-injection, XSS, weak cryptography, etc. - as well as to detect libraries and technologies used by analyzed applications. The Microsoft CLR has a built-in limitation that only one profiler can profile a process. This limitation comes from Microsoft and their implementation of the CLR. Many performance/APM tools such as New Relic and AppDynamics also use the CLR Profiling API; therefore, you can't use them on the same server as the Contrast .NET agent. For more details, refer to [Microsoft's CLR documentation](https://docs.microsoft.com/en-us/dotnet/framework/unmanaged-api/profiling/setting-up-a-profiling-environment).

## Supported Technologies

The Contrast.NET agent supports analysis of web applications built on the following technologies:

| Technology                 | Supported versions                       |
| -------------------------- | ---------------------------------------- |
| .NET Framework             | 3.5, 4.0, 4.5, 4.5.1, 4.5.2, 4.6, 4.6.1, 4.6.2, 4.7, 4.7.1 |
| CLR                        | <li>CLR2</li> <br/> <li>CLR4</li>                       |
| Web Servers                | <li>IIS</li> <br/> <li>IIS Express</li>                 |
| Operating System           | <li>Windows 7, 8, 10</li><br/> <li>Windows Server 2008 R2, 2012, 2012 R2, 2016</li><br/><li>Azure Virtual Machines, Cloud Services, Mobile Services</li> |
| Processor Architecture     | The agent can be installed on both 32-bit and 64-bit systems. On 64-bit systems, you can use the agent to analyze both 32-bit and 64-bit web applications. |
| Web Application Frameworks | While Contrast has built explicit tests against only the frameworks listed below, Contrast may still be able to analyze your application, if its framework simply wraps the typical ASP.NET classes (e.g., `System.Web.HttpRequest`). <br> <li>ASP.NET MVC 3-5</li>  <br /> <li>ASP.NET Web Forms</li><br /> <li>ASP.NET Web Pages</li><br /> <li>IIS-Hosted ASMX-based Web Services</li><br /><li>IIS-Hosted Web API</li><br /><li>IIS-Hosted WCF Services</li> |

>**Note:** 
> * The **Mono** runtime isn't supported because Mono doesn't have a **Profiler API**. The Profiler API is an interface based on a **Component Object Model (COM)**, and isn't supported on Linux.
> * The **Classic ASP** language isn't supported because Classic ASP applications don't run on the .NET runtime. 
> * Contrast doesn't support analysis of .NET Core applications at this time because .NET Core applications run on a different runtime (CoreCLR).

## Installation

To install the agent, complete the following steps:

* Log in to the Contrast interface. 
* Click the button in the top navigation bar to **Add Agent**.
* Select the **.NET Agent** in the dropdown menu, and click the button to **Download Agent**. You might need to specify proxy authentication information required by your network before downloading the agent.
* Extract the downloaded zip archive (e.g., *ContrastSetup_3.3.5.zip*) on the web server, and run *ContrastSetup.exe*. This installs the .NET agent. 

## Silent Installation

The .NET agent installer supports the command line options below. These options are silent, which means that they don't require your interaction and don't present the installer's user interface.

* Install: `ContrastSetup.exe -s -norestart`

* Install and Do Not Start the Contrast.NET Tray Application: `ContrastSetup.exe -s -norestart StartTray=0`

* Uninstall: `ContrastSetup.exe -uninstall -s -norestart`

* Repair: `ContrastSetup.exe -s -repair`


## Changes Made by the Agent Installer

Many users are curious about the changes made by the Contrast .NET agent and what impacts these changes may have. In all respects, the Contrast .NET agent installer is a normal Windows application installer built using standard MSI technology. The Contrast .NET agent installer validates that the target server satisfies several requirements (e.g., the operating system is Windows Server 2008 R2 or greater). If all requirements are met, the installer registers the .NET agent as a standard Windows program and makes the following changes:

- Places the agent’s files on a disk in the specified install location (e.g., *C:\ProgramFiles\Contrast.NET*). This includes several dynamic link library (DLLs) and executables, such as the background Windows service that drives agent behavior. 
- Creates the specified data directory for the agent that is primarily used to store agent log files (e.g., *C:\ProgramData\Contrast.NET*). 
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
