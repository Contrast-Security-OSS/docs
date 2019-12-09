
<!--
title: "Contrast .NET Core Agent Installation"
description: "Contrast .NET Core agent installation instructions"
tags: "installation agent .NET Core windows linux"
-->

## Install Overview

To install the .NET agent, complete the following steps.
> Note: The installation process for self-hosted applications also applies to IIS Express users.

## Step One - Download the Contrast .NET Core Agent

<details><summary><b>Download From Contrast UI</b></summary>

* Log in to the Contrast UI.
* Click the **Add Agent** button in the top navigation bar.
* Select **.NET Core** in the dropdown menu, and click the **Download Agent** button for the platform on which your application is hosted. You might need to specify proxy authentication information, if required by your network, before downloading the agent.
* Proceed to **Step 2**, and click on the **Download Config File** button to download the agent's configurations.
* On the web server, extract the downloaded zip archive (e.g., *Contrast.NET.Core_1.0.1.zip*) to a directory that your applications have sufficient permissions to access.
* On the web server, place the downloaded configuration file in a directory that your applications have sufficient permissions to access.
</details>

## Step Two - Run the Application With Contrast .NET Core Agent

To enable the .NET Core agent on your application, you must set the following environment variables on your application's process.
Use the following table to find the correct CORECLR_PROFILER_PATH setting for the given architecture:

| Environment Variable | Platform | Value |
|--|--|--|
| CORECLR_PROFILER_PATH_64 | Windows (64-bit) | \{\{ Unzipped Directory Root \}\}\runtimes\win-x64\native\ContrastProfiler.dll |
| CORECLR_PROFILER_PATH_32 | Windows (32-bit) | \{\{ Unzipped Directory Root \}\}\runtimes\win-x86\native\ContrastProfiler.dll |
| CORECLR_PROFILER_PATH_64 | Linux (64-bit) | \{\{ Unzipped Directory Root \}\}\runtimes\linux-x64\native\ContrastProfiler.so |
| CORECLR_PROFILER | All | {8B2CE134-0948-48CA-A4B2-80DDAD9F5791}
| CORECLR_ENABLE_PROFILING | All | 1
| CONTRAST_CONFIG_PATH | All | \{\{ Path to yaml config \}\}

> **Note:** The platform's CPU architecture is based on the CoreCLR's bitness. For example when your application is using a 32-bit CoreCLR, you must use the 32-bit profiler, even if the OS is 64-bit.

<details><summary><b>Running from Powershell or Powershell Core (Windows)</b></summary>

Windows users running Powershell or Powershell Core can use it to set the environment variables.

**Example:**

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
</details>

<details><summary><b>Running from Bash (Linux)</b></summary>

Linux users running Bash can use it to set the environment variables.

**Example:**

```bash
export CORECLR_PROFILER_PATH_64=/usr/local/contrast/runtimes/linux-x64/native/ContrastProfiler.so
export CORECLR_ENABLE_PROFILING=1
export CORECLR_PROFILER={8B2CE134-0948-48CA-A4B2-80DDAD9F5791}
export CONTRAST_CONFIG_PATH=/etc/contrast/contrast_security.yaml
```

You can then run the application:

```bash
dotnet ./MyAppWithContrastAgent.dll
```
</details>

<details><summary><b>Running under IIS and IIS Express</b></summary>

Users running under IIS and IIS Express can set the environment variables using one of these two methods.

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

</details>

<details><summary><b>Running with a dotnet.exe launch profile</b></summary>

Users running with a dotnet.exe launch profile can use it to set the Contrast environment variables.

**Example:**

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

</details>

## Step 3 - Customize Your Installation

The agent uses the downloaded configuration file (e.g. *contrast_security.yaml*) to configure authentication credentials and proxy settings to connect to Contrast. You can fully configure the agent using the YAML file. See the agent [configuration guidelines](installation-netcoreconfig.html#netcore-yaml) for more information.

### Permissions

Ensure that the following paths are accessible by the runtime user of the application.

| Path | Usage | Customizable | Permissions |
| -- | -- | -- | -- |
| The path to YAML configuration file, such as *contrast_security.yaml* | Used to configure the agent | Yes; set the environment variable `CONTRAST_CONFIG_PATH` | Read |
| \{\{ Unzipped Directory Root \}\} | The root "installation" directory; stores the agent binaries | No | Read |
| Windows: ``%ProgramData%\Contrast\dotnet-core\logs`` <br><br> Linux: ``/var/tmp/contrast/dotnet-core/logs`` | Directory for Contrast agent logs. If missing, the directory will be created | Yes; set the environment variable `CONTRAST_CORECLR_LOGS_DIRECTORY` | Read/Write <br> (or inherited from a parent directory) |

When running in IIS, make sure that the application pool can access these paths. For example, given an application pool called `Default Web Site` using the default identity `ApplicationPoolIdentity`, ensure that the user `IIS AppPool\Default Web Site` has effective permissions to **read** the unzipped directory root.

## Next Steps

* [Use the Contrast .NET Core agent](installation-netcoreusage.html)
* [Customize .NET Core agent configuration](installation-netcoreconfig.html)
