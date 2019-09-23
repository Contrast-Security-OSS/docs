
<!--
title: "Contrast .NET Core Agent Installation"
description: "Contrast .NET Core agent installation instructions"
tags: "installation agent .NET Core windows linux"
-->

## The Basics

To install the .NET agent, complete the following steps. The installation process for self-hosted applications also applies to IIS Express users.

* Log in to the Contrast UI.
* Click the **Add Agent** button in the top navigation bar.
* Select **.NET Core** in the dropdown menu, and click the **Download Agent** button for the platform on which your application is hosted. You might need to specify proxy authentication information, if required by your network, before downloading the agent.
* Proceed to Step 2 and click on the **Download Config File** button to download the agent's configurations.
* On the web server, extract the downloaded zip archive (e.g., *Contrast.NET.Core_0.20.1.zip*) to a directory that your applications have sufficient permissions to access.
* On the web server, place the downloaded configuration file in a directory that your applications have sufficient permissions to access.

## Customize Your Installation

The agent uses the downloaded configuration file, *contrast_security.yaml*, to configure authentication credentials and proxy settings to connect to Contrast. You can fully configure the agent using the YAML file. See the agent [configuration guidelines](installation-netcoreconfig.html#netcore-yaml) for more information.

### Permissions

Ensure that the following paths are accessible by the runtime user of the application.

| Path | Usage | Customizable | Permissions |
| -- | -- | -- | -- |
| The path to YAML configuration file, such as *contrast_security.yaml*. | Used to configure the agent. | Yes | Read |
| \{\{ Unzipped Directory Root \}\} | The root "installation" directory, stores the agent binaries. | Yes | Read |
| %ProgramData%\Contrast\dotnet-core\logs (Windows) <br> /var/tmp/contrast/dotnet-core/logs (Linux) | Logs directory, if missing, the directory will be created. | Yes | Read/Write (or inherited from a parent directory) |

When running in IIS, make sure the application pool can access the these paths. For example, given an application pool called `Default Web Site` using the default identity `ApplicationPoolIdentity`, ensure the user `IIS AppPool\Default Web Site` has the effective permissions to **read** the unzipped directory root.

## Enable the Agent

To enable the .NET Core agent on your application, you must set the following environment variables on your application's process.

* CORECLR_PROFILER_PATH_64: Use the following table to find the correct Profiler path for 64-bit applications.
* CORECLR_PROFILER_PATH_32: Use the following table to find the correct Profiler path for 32-bit applications (Windows Only).
* CORECLR_ENABLE_PROFILING: `1`
* CORECLR_PROFILER: `{8B2CE134-0948-48CA-A4B2-80DDAD9F5791}`
* CONTRAST_CONFIG_PATH: Set the path to the YAML configuration file. It can be an absolute path (i.e., *C:\contrast\contrast_security.yaml* or */opt/contrast/contrast_security.yaml*) or a path relative to your application process's current directory (i.e., *my_custom_config.yaml*). If not set, the default is *C:\ProgramData\Contrast\dotnet-core\contrast_security.yaml* (Windows) or */etc/contrast/dotnet-core/contrast_security.yaml* (Linux). This setting is **optional**.


| Environment Variable | Platform | Profiler Path |
|--|--|--|
| CORECLR_PROFILER_PATH_64 | Windows (64-bit) | \{\{ Unzipped Directory Root \}\}\runtimes\win-x64\native\ContrastProfiler.dll |
| CORECLR_PROFILER_PATH_32 | Windows (32-bit) | \{\{ Unzipped Directory Root \}\}\runtimes\win-x86\native\ContrastProfiler.dll |
| CORECLR_PROFILER_PATH_64 | Linux (64-bit) | \{\{ Unzipped Directory Root \}\}\runtimes\linux-x64\native\ContrastProfiler.so |


> **Notes:**
 * The platform's CPU architecture is based on the CoreCLR's bitness. For example, when using a 32-bit CoreCLR, you must use the 32-bit profiler, even if the OS is 64-bit.

### Running from Powershell or Powershell Core (Windows)

Set the environment variables:

> **Example:**
```powershell
$env:CORECLR_PROFILER_PATH_64 = 'C:\contrast\dotnetcore\runtimes\win-x64\native\ContrastProfiler.dll'
$env:CORECLR_PROFILER_PATH_32 = 'C:\contrast\dotnetcore\runtimes\win-x86\native\ContrastProfiler.dll'
$env:CORECLR_ENABLE_PROFILING = '1'
$env:CORECLR_PROFILER = '{8B2CE134-0948-48CA-A4B2-80DDAD9F5791}'
$env:CONTRAST_CONFIG_PATH = 'C:\contrast\dotnet-core\contrast_security.yaml'
```

You can then run the application:
```powershell
dotnet .\MyAppWithContrastAgent.dll
```

### Running from Bash (Linux)

Set the environment variables:

> **Example:**
```bash
export CORECLR_PROFILER_PATH_64=/contrast/runtimes/linux-x64/native/ContrastProfiler.so
export CORECLR_ENABLE_PROFILING=1
export CORECLR_PROFILER={8B2CE134-0948-48CA-A4B2-80DDAD9F5791}
export CONTRAST_CONFIG_PATH=/contrast/contrast_security.yaml
```

You can then run the application:
```bash
dotnet ./MyAppWithContrastAgent.dll
```

### Running under IIS and IIS Express

Set the environment variables using either of these two methods:

* The `environmentVariables` section in the application *web.config* via [ASP.NET Module Configuration](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/aspnet-core-module?view=aspnetcore-2.2#setting-environment-variables), as shown below (recommended)

 ```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    ...
    <aspNetCore processPath="dotnet" arguments=".\ExampleNetCoreApp.dll" stdoutLogEnabled="false" stdoutLogFile=".\logs\stdout">
      <environmentVariables>
        <environmentVariable name="CORECLR_PROFILER_PATH_64" value="C:\contrast\dotnetcore\runtimes\win-x64\native\ContrastProfiler.dll" />
        <environmentVariable name="CORECLR_PROFILER_PATH_32" value="C:\contrast\dotnetcore\runtimes\win-x86\native\ContrastProfiler.dll" />
        <environmentVariable name="CORECLR_ENABLE_PROFILING" value="1" />
        <environmentVariable name="CORECLR_PROFILER" value="{8B2CE134-0948-48CA-A4B2-80DDAD9F5791}" />
        <environmentVariable name="CONTRAST_CONFIG_PATH" value="C:\contrast\dotnet-core\contrast_security.yaml" />
      </environmentVariables>
    </aspNetCore>
  </system.webServer>
</configuration>
 ```

* The [application pool](https://docs.microsoft.com/en-us/iis/configuration/system.applicationHost/applicationPools/add/environmentVariables/#appcmdexe) setting on the server


### Running with a dotnet.exe launch profile

Set the environment variables as part of your application startup script or as an ASP.NET Core launch profile.

> **Example:**
```json
    "MyAppWithContrastAgent": {
      "environmentVariables": {
        "CORECLR_PROFILER_PATH_64": "C:\\contrast\\dotnetcore\\runtimes\\win-x64\\native\\ContrastProfiler.dll",
        "CORECLR_PROFILER_PATH_32": "C:\\contrast\\dotnetcore\\runtimes\\win-x86\\native\\ContrastProfiler.dll",
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
