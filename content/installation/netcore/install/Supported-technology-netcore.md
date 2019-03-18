<!--
title: "Contrast .NET Core Agent Supported Technologies"
description: "Contrast .NET Core agent supported technologies"
tags: "installation agent .NET Core windows azure supported technologies"
-->

## .NET Core for Windows

The Contrast .NET Core agent supports analysis of web applications built on the following technologies.

| Technology                 | Supported versions                       |
| -------------------------- | ---------------------------------------- |
| .NET Core Runtime             | 2.1 and above |
| CLR                        | CoreCLR |
| Server container                | Kestrel                |
| Hosting container          | <li>Self-hosted</li><br /> <li>IIS</li><br /><li>IIS Express</li>
| Operating System           | <li>Windows 7, 8, 10</li><br/> <li>Windows Server 2008 R2, 2012, 2012 R2, 2016</li>|
| Processor Architecture     | The agent can be installed on both 32-bit and 64-bit systems. On 64-bit systems, you can use the agent to analyze both 32-bit and 64-bit web applications. |
| Web Application Frameworks | ASP.NET Core |

The following technologies aren't supported by the .NET Core agent at this time. 

* Linux/OSX
* Http.sys (formerly called WebListener) and IISHttpServer (used when hosting with `AspNetCoreModuleV2` module with `InProcess` enabled)
* Self-contained deployments 
* Framework-dependent executables
* .NET Core version 3.0 or above 
* ASP.NET Core applications running under the .NET Framework 

