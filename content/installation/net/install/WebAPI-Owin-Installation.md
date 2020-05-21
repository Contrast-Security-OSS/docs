<!--
title: "Contrast .NET Agent Web API and OWIN Installation"
description: "Contrast .NET agent Web API and OWIN Installation"
tags: "installation agent .NET web api owin"
-->

The .NET agent supports analysis of Web API applications that are 'self-hosted' with the 'Open Web Interface for .NET' (OWIN) in the 2 modes outlined below.

Note: We don't support Web API applications hosted in the IIS integrated pipeline using the SystemWeb HttpModule or those deployed via an 'OWIN Host'.

Both deployment modes below require that the Agent has already been installed by following the steps in [Installation for Windows
](https://docs.contrastsecurity.com/installation-netinstall.html#net-windows).

## WebAPI hosted by OWIN deployed as a command line application

Once the Agent is installed, you need to set the following environment variables before running the command line application that is being used to self-host OWIN:

| Environment variable       | Value                       |
| -------------------------- | --------------------------- |
| COR_ENABLE_PROFILING       | 1                           |
| COR_PROFILER               | {EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}   |
| COR_PROFILER_PATH_32       | C:\Program Files\Contrast\dotnet\ContrastProfiler-32.dll   |
| COR_PROFILER_PATH_64       | C:\Program Files\Contrast\dotnet\ContrastProfiler-64.dll   |
| CONTRAST\_\_AGENT\_\_DOTNET\_\_CONTAINER   | true                        |

## WebAPI hosted by OWIN deployed as a Windows service