
<!--
title: "Contrast .NET Core Agent Supported Technologies"
description: "Contrast .NET Core agent supported technologies"
tags: "installation agent .NET Core windows azure supported technologies"
-->

# Platform Support

## .NET Core for Windows

The Contrast .NET Core agent supports analysis of web applications built on the following technologies when executing within a Windows environment. Refer the the following table for supported versions.

| Technology                 | Supported versions                       |
| -------------------------- | ---------------------------------------- |
| .NET Core Runtime          | >= 2.1 and < 3.0                         |
| CLR                        | CoreCLR                                  |
| Server container           | Kestrel and IISHttpServer                |
| Hosting container          | <li>Self-hosted</li><br /> <li>IIS</li><br /><li>IIS Express</li> |
| Operating System           | <li>Windows 7, 8, 10</li><br/> <li>Windows Server 2008 R2, 2012, 2012 R2, 2016, 2019</li> |
| Processor Architecture     | The agent can be used on both 32-bit and 64-bit systems. On 64-bit systems, you can use the agent to analyze both 32-bit and 64-bit web applications. |
| Web Application Frameworks | ASP.NET Core (>= 2.1 and < 3.0)          |

When running on Windows, the following technologies aren't supported by the .NET Core agent at this time:

* Http.sys (formerly called WebListener).
* Self-contained deployments.
* Framework-dependent executables.
* .NET Core or ASP.NET Core versions 3.0 or above.
* .NET Core or ASP.NET Core version 2.0 or below.
* ASP.NET Core applications running under the .NET Framework.
* Windows on ARM.

## .NET Core for Linux

The Linux platform is not supported by the .NET Core agent at this time.

# Unsupported Scenarios

The .NET Core agent does not support the following scenarios:

* Running with an ASP.NET Core with a higher version than that of the runtime. For example, when running an application with the .NET Core 2.1 runtime that references ASP.NET Core 2.2.
* Running with a NET.Core application application that has a mismatch between the referenced ASP.NET Core version and the target runtime selected during compilation time.
