<!--
title: "Contrast .NET Agent Supported Technology"
description: "Contrast .NET agent supported technology"
tags: "installation agent .NET windows azure supported technology"
-->

## .NET for Windows

The Contrast.NET agent supports analysis of web applications built on the following technologies.

| Technology                 | Supported versions                       |
| -------------------------- | ---------------------------------------- |
| .NET Framework             | 3.5, 4.0, 4.5, 4.5.1, 4.5.2, 4.6, 4.6.1, 4.6.2, 4.7, 4.7.1 |
| CLR                        | <li>CLR2</li> <br/> <li>CLR4</li>                       |
| Web Servers                | <li>IIS</li> <br/> <li>IIS Express</li>                 |
| Operating System           | <li>Windows 7, 8, 10</li><br/> <li>Windows Server 2008 R2, 2012, 2012 R2, 2016</li><br/><li>Azure Virtual Machines, Cloud Services, Mobile Services</li><br/><li> Azure App Service </li> |
| Processor Architecture     | The agent can be installed on both 32-bit and 64-bit systems. On 64-bit systems, you can use the agent to analyze both 32-bit and 64-bit web applications. |
| Web Application Frameworks | While Contrast has built explicit tests against only the frameworks listed below, Contrast may still be able to analyze your application, if its framework simply wraps the typical ASP.NET classes (e.g., `System.Web.HttpRequest`). <br> <li>ASP.NET MVC 3-5</li>  <br/> <li>ASP.NET Web Forms</li><br /> <li>ASP.NET Web Pages</li><br /> <li>IIS-Hosted ASMX-based Web Services</li><br /><li>IIS-Hosted Web API</li><br /><li>IIS-Hosted WCF Services</li> |

>**Notes:** 
> * The **Mono** runtime isn't supported because Mono doesn't have a **Profiler API**. The Profiler API is an interface based on a **Component Object Model (COM)**, and isn't supported on Linux.
> * The **Classic ASP** language isn't supported because Classic ASP applications don't run on the .NET runtime. 
> * Contrast doesn't support analysis of .NET Core applications at this time because .NET Core applications run on a different runtime (CoreCLR).

##.NET for Azure

The Contrast .NET agent for Azure App Service supports analysis of web applications built on the following technologies.

| Technology                 | Supported versions                       |
| -------------------------- | ---------------------------------------- |
| .NET Framework             | Your application must be set to use CLR4. Any application that can run on this version is supported. (.NET 4.7.1 is deployed currently on Azure. Version 3.5 isn't supported.)  |
| CLR                        | CLR4                       |
| Processor Architecture     | Both 32-bit and 64-bit applications are supported. |
| Web Application Frameworks | All of the frameworks supported by the Windows agent are analyzed on Azure. See [Supported Technologies](installation-netinstall.html#net-tech) for more information. |


> **Note:** Only applications using the full .NET Framework are currently supported. Contrast plans to add support for .NET Core applications in the future.



