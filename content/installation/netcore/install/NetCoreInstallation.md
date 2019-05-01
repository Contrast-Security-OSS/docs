
<!--
title: "Contrast .NET Core Agent Installation"
description: "Contrast .NET Core agent installation instructions"
tags: "installation agent .NET Core windows"
-->

## The Basics

To install the .NET agent, complete the following steps. The installation process for self-hosted applications also applies to IIS Express users.

* Log in to the Contrast UI. 
* Click the **Add Agent** button in the top navigation bar.
* Select **.NET Core** in the dropdown menu, and click the **Download Agent** button for the platform on which your application is hosted. You might need to specify proxy authentication information, if required by your network, before downloading the agent.
* Proceed to Step 2 and click on the **Download Config File** button to download the agent's configurations.
* On the web server, extract the downloaded zip archive (e.g., *ContrastSetup_18.4.56.zip*) to a directory that your applications have sufficient permissions to access.
* On the web server, place the downloaded configuration file in a directory that your applications have sufficient permissions to access.

## Customize Your Installation

The agent uses the downloaded configuration file, *contrast_security.yaml*, to configure authentication credentials and proxy settings to connect to Contrast. You can fully configure the agent using the YAML file. See the agent [configuration guidelines](installation-netcoreconfig.html#netcore-yaml) for more information.

### Permissions

Ensure that the following paths are accessible by the runtime user of the application.

| Path | Permissions |
|--|--|
| The path to YAML configuration file, such as *contrast_security.yaml*. | Read |
| \{\{ Unzipped Directory Root \}\} | Read |
| Data Directory (default: \{\{ Program Data Folder \}\}\Contrast\dotnet) | Read/Write |

When running in IIS, make sure the application pool can access the these paths. For example, given an application pool called `Default Web Site` using the default identity `ApplicationPoolIdentity`, ensure the user `IIS AppPool\Default Web Site` has the effective permissions to **read** the unzipped directory root.

## Enable the Agent

To enable the .NET Core agent on your application, you must set the following environment variables on your application's process.

* CORECLR_PROFILER_PATH_32: Use the following table to find the correct Profiler path for 32-bit applications.
* CORECLR_PROFILER_PATH_64: Use the following table to find the correct Profiler path for 64-bit applications.
* CORECLR_ENABLE_PROFILING: `1`
* CORECLR_PROFILER: `{8B2CE134-0948-48CA-A4B2-80DDAD9F5791}`
* CONTRAST_CONFIG_PATH: Set the path to the YAML configuration file. It can be an absolute path (i.e., *C:\contrast\contrast_security.yaml*) or a path relative to your application process's current directory (i.e., *my_custom_config.yaml*). If not set, the default is *`CONTRAST_DATA_DIRECTORY`\contrast_security.yaml*. This setting is **optional**.
* CONTRAST_DATA_DIRECTORY: Change the path to where agent logs are kept. The default is *C:\ProgramData\Contrast\dotnet*. This setting is **optional**. 


| Environment Variable | Platform | Profiler Path |
|--|--|--|
| CORECLR_PROFILER_PATH_32 | Windows (32-bit) | \{\{ Unzipped Directory Root \}\}\runtimes\win-x86\native\ContrastProfiler.dll |
| CORECLR_PROFILER_PATH_64 | Windows (64-bit) | \{\{ Unzipped Directory Root \}\}\runtimes\win-x64\native\ContrastProfiler.dll |

> **Notes:** 
 * The platform's CPU architecture is based on the CoreCLR's bitness. For example, when using a 32-bit CoreCLR, you must use the 32-bit profiler, even if the OS is 64-bit.
 * Only the Windows platform is supported at this time.
 * The required `CORECLR_PROFILER` variable `{EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}` has been updated to `{8B2CE134-0948-48CA-A4B2-80DDAD9F5791}`. This value is different for the .NET Framework agent.

### Running from Powershell

Set the environment variables:

> **Example:**
```powershell
$env:CORECLR_PROFILER_PATH_64 = 'C:\contrast\dotnetcore\runtimes\win-x64\native\ContrastProfiler.dll'
$env:CORECLR_PROFILER_PATH_32 = 'C:\contrast\dotnetcore\runtimes\win-x86\native\ContrastProfiler.dll'
$env:CORECLR_ENABLE_PROFILING = '1'
$env:CORECLR_PROFILER = '{8B2CE134-0948-48CA-A4B2-80DDAD9F5791}'
$env:CONTRAST_CONFIG_PATH = 'C:\contrast\dotnet\contrast_security.yaml'
```

You can then run the application: 
```powershell
dotnet .\MyAppWithContrastAgent.dll
```

### Running under IIS and IIS Express

Set the environment variables using either of these two methods:

* The application *web.config* via [ASP.NET Module Configuration](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/aspnet-core-module?view=aspnetcore-2.2#setting-environment-variables), as shown in the following example (recommended)

* The [application pool](https://docs.microsoft.com/en-us/iis/configuration/system.applicationHost/applicationPools/add/environmentVariables/#appcmdexe) on the server

> **Example of the *web.config* method:**
```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <handlers>
      <remove name="aspNetCore" />
      <add name="aspNetCore" path="*" verb="*" modules="AspNetCoreModule" resourceType="Unspecified" hostingModel="OutOfProcess" />
    </handlers>
    <aspNetCore processPath="dotnet" arguments=".\ExampleNetCoreApp.dll" stdoutLogEnabled="false" stdoutLogFile=".\logs\stdout">
      <environmentVariables>
        <environmentVariable name="CORECLR_PROFILER_PATH_64" value="C:\contrast\dotnetcore\runtimes\win-x64\native\ContrastProfiler.dll" />
        <environmentVariable name="CORECLR_PROFILER_PATH_32" value="C:\contrast\dotnetcore\runtimes\win-x86\native\ContrastProfiler.dll" />
        <environmentVariable name="CORECLR_ENABLE_PROFILING" value="1" />
        <environmentVariable name="CORECLR_PROFILER" value="{8B2CE134-0948-48CA-A4B2-80DDAD9F5791}" />
        <environmentVariable name="CONTRAST_CONFIG_PATH" value="C:\contrast\dotnet\contrast_security.yaml" />
      </environmentVariables>
    </aspNetCore>
  </system.webServer>
</configuration>
```

The `AspNetCoreModule` is supported in both IIS or IIS Express. The `AspNetCoreModuleV2` module (the default after .Net Core 2.2) is only supported in IIS or IIS Express when running with `hostingModel` set to `OutOfProcess` (the default when unset).

You can change the `hostingModel` option with either of these two directives:

```xml
<!-- web.config -->
<aspNetCore hostingModel="OutOfProcess" />

<!-- or in the csproj -->
<AspNetCoreHostingModel>OutOfProcess</AspNetCoreHostingModel>
```

### Running with a launch profile

Set the environment variables as part of your application startup script or as an ASP.NET Core launch profile.

> **Example:**
```json
    "MyAppWithContrastAgent": {      
      "environmentVariables": {
        "CORECLR_PROFILER_PATH_32": "c:\\contrast\\dotnetcore\\ContrastProfiler-32.dll",
        "CORECLR_PROFILER_PATH_64": "c:\\contrast\\dotnetcore\\ContrastProfiler-64.dll",    
        "CORECLR_ENABLE_PROFILING": "1",
        "CORECLR_PROFILER": "{8B2CE134-0948-48CA-A4B2-80DDAD9F5791}",        
        "CONTRAST_CONFIG_PATH": "c:\\contrast\\config\\MyApp\\contrast_security.yaml",
      }
    }
```

You can then run the application: 

```powershell
dotnet run --launch-profile MyAppWithContrastAgent
```

## Next Steps

* [Use the Contrast .NET Core agent](installation-netcoreusage.html)  
* [Customize .NET Core agent configuration](installation-netcoreconfig.html)  
