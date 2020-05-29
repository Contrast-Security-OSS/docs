<!--
title: "Contrast .NET Agent Supported Technology"
description: "Contrast .NET agent supported technology"
tags: "installation agent .NET windows azure supported technology"
-->

## .NET for Windows

The Contrast .NET agent supports analysis of web applications built on the following technologies.

| Technology                 | Supported versions                       |
| -------------------------- | ---------------------------------------- |
| .NET Framework             | 4.7.1, 4.7.2, 4.8 |
| CLR                        | CLR4 |
| Web Servers                | <li>IIS</li> <br/> <li>IIS Express</li>                 |
| Operating System           | <li>Windows 10</li><br/> <li>Windows Server 2012, 2012 R2, 2016, 2019</li><br/><li>Azure Virtual Machines, Cloud Services, Mobile Services</li><br/><li> Azure App Service </li> |
| Processor Architecture     | The agent can be installed on both 32-bit and 64-bit systems. On 64-bit systems, you can use the agent to analyze both 32-bit and 64-bit web applications. |
| Web Application Frameworks | While Contrast has built explicit tests against only the frameworks listed below, Contrast may still be able to analyze your application, if its framework simply wraps the typical ASP.NET classes (e.g., `System.Web.HttpRequest`). <br> <li>ASP.NET MVC 3-5</li>  <br/> <li>ASP.NET Web Forms</li><br /> <li>ASP.NET Web Pages</li><br /> <li>IIS-Hosted ASMX-based Web Services</li><br /><li>IIS-Hosted Web API</li><br /><li>IIS-Hosted WCF Services</li> <br /><li>OWIN Hosted Web API (via a Windows service or a command line application)</li> |

>**Notes:**
> * The **Mono** runtime isn't supported because Mono doesn't have a **Profiler API**. The Profiler API is an interface based on a **Component Object Model (COM)**, and isn't supported on Linux.
> * The **Classic ASP** language isn't supported because Classic ASP applications don't run on the .NET runtime.
> * The .NET Framework agent does NOT support analysis of .NET Framework ASP.NET Core applications.
> * The .NET Framework agent does NOT support applications running under a trust levels lower than **Full**. 
> * For Azure App Service, .NET Framework applications must use the .NET Framework [Site Extension](https://www.nuget.org/packages/Contrast.NET.Azure.SiteExtension/) or [Nuget package](https://www.nuget.org/packages/Contrast.NET.Azure.AppService/). .NET Core applications must use the .NET Core-specific [Nuget package](https://www.nuget.org/packages/Contrast.SensorsNetCore/) or [Site Extension](https://www.nuget.org/packages/Contrast.NetCore.Azure.SiteExtension/).

The .NET agent can also run in Docker on a Windows-based image that includes IIS and .NET Framework 4.7.1 or higher. Contrast recommends that you base your image on [Microsoft ASP.NET](https://hub.docker.com/_/microsoft-dotnet-framework-aspnet). See the [.NET Docker documentation](installation-netinstall.html#net-docker) for detailed installation instructions.
