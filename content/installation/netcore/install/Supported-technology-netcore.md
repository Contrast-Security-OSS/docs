

<!--
title: "Contrast .NET Core Agent Supported Technologies"
description: "Contrast .NET Core agent supported technologies"
tags: "installation agent .NET Core windows linux azure supported technologies"
-->

## Platform Support

### .NET Core for Windows

#### Distributions

The Contrast .NET Core agent supports analysis of web applications built on the following technologies when executing within a Windows environment. The agent can be used on both 32-bit and 64-bit systems. On 64-bit systems, you can use the agent to analyze both 32-bit and 64-bit web applications. Refer the the following table for supported versions.

| OS                         | Supported versions     | Architectures |
| -------------------------- | ---------------------- | ------------- |
| Windows Server (LTSC)      | 2008 R2, 2012, 2012 R2, 2016, 2019 | x86, x64 |
| Windows Server (SAC)       | 1809, 1903              | x64     |
| Windows Workstation        | 7, 8/8.1, 10            | x86, x64     |


The agent does **not** support the following Windows distributions at this time:

* Windows on ARM

#### Technologies

Under Windows, the .NET Core agent supports the following technologies:

| Technology                 | Supported versions                       |
| -------------------------- | ---------------------------------------- |
| Server container           | Kestrel, IISHttpServer                   |
| Hosting container          | Self-hosted, IIS, IIS Express            |

When running on Windows, the agent does **not** support the following technologies at this time:

* Http.sys (formerly called WebListener)

### .NET Core for Linux

#### Distributions 

The .NET Core agent supports the following Linux distributions: 


| OS                         | Supported versions     | Architectures |
| -------------------------- | ---------------------- | ------------- |
| Ubuntu                     | 18.04 (Bionic), 16.04 (Xenial) | x64   |
| Debian                     | 9 (Stretch)            | x64           |
| openSUSE                   | 15 (Leap)              | x64           |
| Alpine                     | >= 3.7                 | x64           |
| CentOS                     | 7                      | x64           |

The agent does **not** currently support the following Linux distributions. Support will be added in a future release.

- Red Hat Enterprise Linux 6/7

#### Technologies

Under Linux, the .NET Core agent supports the following technologies:

| Technology                 | Supported versions                       |
| -------------------------- | ---------------------------------------- |
| Server container           | Kestrel                                  |
| Hosting container          | Self-hosted                              |

### .NET Core for MacOS

The .NET Core agent does **not** support the MacOS platform at this time.

## Framework Support

The .NET Core agent supports the following frameworks: 

| Technology                 | Supported versions                       |
| -------------------------- | ---------------------------------------- |
| Web application frameworks | ASP.NET Core (2.1.X, 2.2.X, 3.0.X, 3.1.X)              |

The agent does **not** support the following technologies at this time:

* .NET Core or ASP.NET Core version 2.0 or below
* ASP.NET Core applications running under the .NET framework (Windows) or Mono (Linux/Windows)

## Runtime Support

The .NET Core agent supports the following technologies: 

| Technology                 | Supported versions                       |
| -------------------------- | ---------------------------------------- |
| .NET Core Runtime          | 2.1.3+, 2.2.X, 3.0.X, 3.1.X                              |
| .NET Core Target           | 2.1 (netcoreapp2.1), 2.2 (netcoreapp2.2), 3.0 (netcoreapp3.0), 3.1 (netcoreapp3.1) |

> **Note:** .NET Core 2.1.X support requires .NET Core Runtime 2.1.3 or higher due to [a bug in the .NET Core profiling API](https://github.com/dotnet/coreclr/issues/18448).

The agent does **not** support the following technologies at this time:

* Self-contained deployments
* Framework-dependent executables

## Unsupported Scenarios

The .NET Core agent does **not** support the following scenarios:

* Running with an ASP.NET Core application that's a higher version than the runtime (e.g., an application with the .NET Core 2.1 runtime that references ASP.NET Core 2.2)
* Running with a .NET Core application for which the referenced ASP.NET Core version and the target runtime selected during compilation time don't match
