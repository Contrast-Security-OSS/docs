
<!--
title: "Contrast .NET Core Agent Installation"
description: "Contrast .NET Core agent installation instructions."
tags: "installation agent .NET Core"
-->

## The Basics

To install the .NET agent, complete the following steps. The installation process for the IIS Express users is the same as self-hosted applications.

* Log in to the Contrast UI. 
* Click the button in the top navigation bar to **Add Agent**.
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
| C:\ProgramData\Contrast\dotnet\LOGS | Read/Write |

When running in IIS, make sure the application pool can access the above paths. For example, given an an application pool called `Default Web Site` using the default identity `ApplicationPoolIdentity`, ensure the user `IIS AppPool\Default Web Site` has the effective permissions to **read** the unzipped directory root.

## Enable the Agent

To enable the .NET Core agent on your application, you must set the following environment variables before running your application.

* CORECLR_PROFILER_PATH: Use the below matrix to find the correct profiler path
* CORECLR_ENABLE_PROFILING: `1`
* CORECLR_PROFILER: `{EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}`
* CONTRAST_INSTALL_DIRECTORY: \{\{ Unzipped Directory Root \}\}
* AGENT__DOTNET__CONTAINER: `true`
* CONTRAST_CONFIG_PATH: Path to yaml config file, such as `contrast_security.yaml`

| Platform | Profiler Path |
|--|--|
| Windows (64-bit) | \{\{ Unzipped Directory Root \}\}\runtimes\win-x64\native\ContrastProfiler.dll |
| Windows (32-bit) | \{\{ Unzipped Directory Root \}\}\runtimes\win-x86\native\ContrastProfiler.dll |

> **Notes:** 
 * The platform's CPU architecture is based on the CoreCLR's "bitness". For example, when using a 32-bit CoreCLR, you must use the 32-bit profiler, even if the OS is 64-bit.
 * Only the Windows platform is supported at this time.

### Running under IIS and IIS Express

Set the environment variables using either of these two methods:

* The application *web.config* via [ASP.NET Module Configuration](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/aspnet-core-module?view=aspnetcore-2.2#setting-environment-variables), as shown in the following example (recommended)

* The [application pool](https://docs.microsoft.com/en-us/iis/configuration/system.applicationHost/applicationPools/add/environmentVariables/#appcmdexe) on the server

> **Example of the "web.config" method:**
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
        <environmentVariable name="CORECLR_PROFILER_PATH" value="C:\contrast\dotnetcore\runtimes\win-x64\native\ContrastProfiler.dll" />
        <environmentVariable name="CORECLR_ENABLE_PROFILING" value="1" />
        <environmentVariable name="CORECLR_PROFILER" value="{EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}" />
        <environmentVariable name="CONTRAST_INSTALL_DIRECTORY" value="C:\contrast\dotnetcore\" />
        <environmentVariable name="AGENT__DOTNET__CONTAINER" value="true" />
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

### Running with a Launch Profile

Set the environment variables as part of your application startup script or as an ASP.NET Core launch profile.

> **Example:**
```json
    "MyAppWithContrastAgent": {      
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development",
        "CORECLR_PROFILER_PATH_64": "c:\\contrast\\dotnetcore\\ContrastProfiler-64.dll",
        "CORECLR_PROFILER_PATH_32": "c:\\contrast\\dotnetcore\\ContrastProfiler-32.dll",
        "CORECLR_ENABLE_PROFILING": "1",
        "CORECLR_PROFILER": "{EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}",
        "CONTRAST_INSTALL_DIRECTORY": "c:\\contrast\\dotnetcore\\",
        "AGENT__DOTNET__CONTAINER": "true",
        "CONTRAST_CONFIG_PATH": "c:\\contrast\\config\\MyApp\\contrast_security.yaml"
      }
      // other settings
    }
```

You can then run the application: 

```powershell
dotnet run --launch-profiler MyAppWithContrastAgent
```

## Next Steps

* [Use the Contrast .NET Core agent](installation-netcoreusage.html)  
* [Customize .NET Core agent configuration](installation-netcoreconfig.html)  
