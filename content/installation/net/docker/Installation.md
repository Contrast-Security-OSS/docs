<!--
title: "Installing Contrast .NET Framework agent in Docker"
description: "Guide to installing .NET Agent on Docker for Windows containers using the Nuget package"
tags: "installation configuration .Net Docker site nuget visualstudio"
-->

Use an image based on [microsoft/aspnet](https://hub.docker.com/_/microsoft-dotnet-framework-aspnet).  Contrast agent assemblies can be download from the [Contrast.NET.Azure.AppService nuget package](https://www.nuget.org/api/v2/package/Contrast.NET.Azure.AppService)

Then extract the nuget package and set the following environment variables on the application process.

| Environment variable       | Value                       |
| -------------------------- | --------------------------- |
| COR_ENABLE_PROFILING       | 1                           |
| COR_PROFILER               | {EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}   |
| COR_PROFILER_PATH_32       | <Unzipped nuget package path>\content\contrastsecurity\ContrastProfiler-32.dll   |
| COR_PROFILER_PATH_64       | <Unzipped nuget package path>\content\contrastsecurity\ContrastProfiler-64.dll   |
| CONTRAST\_\_AGENT\_\_DOTNET\_\_CONTAINER   | true                        |

Then use the Contrast yaml configuration file or environment variables to setup Contrast authentication and other settings.

Examples of the following use cases are provided in the [contrast-dotnet-examples](https://github.com/Contrast-Security-OSS/contrast-dotnet-examples) GitHub repo

1). ASP.NET application in the default AppPool
* [Dockerfile](https://github.com/Contrast-Security-OSS/contrast-dotnet-examples/blob/master/docker/netframework/Dockerfile-DefaultAppPool)
* [Entrypoint script](https://github.com/Contrast-Security-OSS/contrast-dotnet-examples/blob/master/docker/netframework/shared/startDefaultAppPool.ps1)

2). ASP.NET application in a custom AppPool
* [Dockerfile](https://github.com/Contrast-Security-OSS/contrast-dotnet-examples/blob/master/docker/netframework/Dockerfile-CustomAppPool)
* [Entrypoint script](https://github.com/Contrast-Security-OSS/contrast-dotnet-examples/blob/master/docker/netframework/shared/startCustomAppPool.ps1)
