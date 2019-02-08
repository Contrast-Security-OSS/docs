<!--
title: "Contrast .NET Agent Supported Technology"
description: "Contrast .NET agent supported technology"
tags: "installation agent .NET windows azure supported technology"
-->

## .NET for Windows

The Contrast .NET agent supports analysis of web applications built on the following technologies.

| Technology                 | Supported versions                       |
| -------------------------- | ---------------------------------------- |
| .NET Core Runtime             | 2.1 and above |
| CLR                        | CoreCLR |
| Server container                | Kestrel                |
| Operating System           | <li>Windows 7, 8, 10</li><br/> <li>Windows Server 2008 R2, 2012, 2012 R2, 2016</li><br/><li>Azure Virtual Machines, Cloud Services, Mobile Services - TBD</li><br/><li> Azure App Service - TBD </li> |
| Processor Architecture     | The agent can be installed on both 32-bit and 64-bit systems. On 64-bit systems, you can use the agent to analyze both 32-bit and 64-bit web applications. |
| Web Application Frameworks | ASP.NET Core |

>**Notes:** 
> * The **Mono** runtime isn't supported because Mono doesn't have a **Profiler API**. The Profiler API is an interface based on a **Component Object Model (COM)**, and isn't supported on Linux.
> * ASP.NET Core running under .NET Framework is not supported

## .NET Core for Azure App Service 

TBD if we will support in the first release.