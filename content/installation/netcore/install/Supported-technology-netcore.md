<!--
title: "Contrast .NET Core Agent Supported Technology"
description: "Contrast .NET Core agent supported technology"
tags: "installation agent .NET Core windows azure supported technology"
-->

## .NET Core for Windows

The Contrast .NET Core agent supports analysis of web applications built on the following technologies.

| Technology                 | Supported versions                       |
| -------------------------- | ---------------------------------------- |
| .NET Core Runtime             | 2.1 and above |
| CLR                        | CoreCLR |
| Server container                | Kestrel                |
| Hosting container          | <li>Self-hosted</li><br /> <li>IIS</li><br /><li>IIS Express</li>
| Operating System           | <li>Windows 7, 8, 10</li><br/> <li>Windows Server 2008 R2, 2012, 2012 R2, 2016</li><br/><li>Azure Virtual Machines, Cloud Services, Mobile Services - TBD</li><br/><li> Azure App Service - TBD </li> |
| Processor Architecture     | The agent can be installed on both 32-bit and 64-bit systems. On 64-bit systems, you can use the agent to analyze both 32-bit and 64-bit web applications. |
| Web Application Frameworks | ASP.NET Core |

> * **Mono** runtime isn't supported because Mono doesn't have a **Profiler API**. 
> * Linux is currently not supported.
> * ASP.NET Core applications running under the .NET framework aren't supported.

<!-- ## .NET Core for Azure App Service 

TBD if we will support in the first release. -->