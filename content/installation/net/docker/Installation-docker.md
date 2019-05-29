<!--
title: "Installing Contrast .NET Framework agent in Docker"
description: "Guide to installing .NET agent on Docker for Windows containers using the NuGet package"
tags: "installation configuration .net docker nuget visual studio"
-->

The following instructions show you how install and configure the Contrast .NET agent in Docker for Windows using the NuGet package. Examples of the finished code exist in a [GitHub repository](https://github.com/Contrast-Security-OSS/contrast-dotnet-examples).

## Install the Agent 

Complete the following steps to install and configure the agent. 

* To begin, use an image based on [Microsoft ASP.NET](https://hub.docker.com/_/microsoft-dotnet-framework-aspnet). 

* You can download Contrast agent assemblies from the [Contrast.NET.Azure.AppService NuGet package](https://www.nuget.org/api/v2/package/Contrast.NET.Azure.AppService).

* Extract the NuGet package, and set the following environment variables on the application process.

| Environment variable       | Value                       |
| -------------------------- | --------------------------- |
| COR_ENABLE_PROFILING       | 1                           |
| COR_PROFILER               | {EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}   |
| COR_PROFILER_PATH_32       | <Unzipped nuget package path>\content\contrastsecurity\ContrastProfiler-32.dll   |
| COR_PROFILER_PATH_64       | <Unzipped nuget package path>\content\contrastsecurity\ContrastProfiler-64.dll   |
| CONTRAST\_\_AGENT\_\_DOTNET\_\_CONTAINER   | true                        |

* Use the [YAML configuration](installation-netconfig.html#net-yaml) file or environment variables to set Contrast authentication and other settings for the agent.

## Examples

Examples of the following use cases are provided in the [contrast-dotnet-examples](https://github.com/Contrast-Security-OSS/contrast-dotnet-examples) GitHub repository. 

### ASP.NET application in the default AppPool

* [Dockerfile](https://github.com/Contrast-Security-OSS/contrast-dotnet-examples/blob/master/docker/netframework/Dockerfile-DefaultAppPool)
* [Entrypoint script](https://github.com/Contrast-Security-OSS/contrast-dotnet-examples/blob/master/docker/netframework/shared/startDefaultAppPool.ps1)

### ASP.NET application in a custom AppPool

* [Dockerfile](https://github.com/Contrast-Security-OSS/contrast-dotnet-examples/blob/master/docker/netframework/Dockerfile-CustomAppPool)
* [Entrypoint script](https://github.com/Contrast-Security-OSS/contrast-dotnet-examples/blob/master/docker/netframework/shared/startCustomAppPool.ps1)
