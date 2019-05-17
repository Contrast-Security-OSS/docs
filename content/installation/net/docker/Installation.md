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
| AGENT__DOTNET__CONTAINER   | true                        |

Then use the Contrast yaml configuration file or environment variables to setup Contrast authentication or other settings.

Docker file example:

>Insert link or embed Dockerfile-example

Entrypoint startup script example:

>Insert link or embed start.ps1
