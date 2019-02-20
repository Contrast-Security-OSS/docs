
<!--
title: "Contrast .NET Agent Installation"
description: "Contrast .NET Agent Installation."
tags: "installation agent .NET"
-->

## The Basics

To install the .NET agent, complete the following steps.

* Log in to the Contrast UI. 
* Click the button in the top navigation bar to **Add Agent**.
* Select **.NET Core** in the dropdown menu, and click the **Download Agent** button for the platform your application will be hosted on. You might need to specify proxy authentication information, if required by your network, before downloading the agent.
* Proceed to step 2 and click on the **Download Config File** button to download the agent's configurations.
* On the web server, extract the downloaded zip archive (e.g. *ContrastSetup_18.4.56.zip*) to a directory that your applications have sufficient permissions to access.
* On the web server, place the downloaded config file in a directory that your applications have sufficient permissions to access.


## Customize Your Installation

The downloaded configuration file called *contrast_security.yaml* is used by the agent to configure authentication credentials and proxy settings used to connect to Contrast. 

You can fully configure the agent using the *contrast_security.yaml* file. See the agent [configuration](installation-netconfig.html#net-yaml) instructions for more information.

> **Example:** To change the default log level of the .NET agent, update the *contrast_security.yaml* file, add a new line and the code below, and then continue the installation as normal.
 ```yaml
 agent:
  logger:
    level: TRACE
 ```
 
## Enable .NET Core Agent

To enable the .NET Core agent on your application, you will need to set the following environment variables before running your application:

* CORECLR_PROFILER_PATH: ___Use the below matrix to find the correct profiler path___
* CORECLR_ENABLE_PROFILING: `1`
* CORECLR_PROFILER: `{EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}`
* CONTRAST_INSTALL_DIRECTORY: ___{{ Unzipped Directory Root }}___
* AGENT__DOTNET__CONTAINER: `true`
* CONTRAST_CONFIG_PATH: ___Path to yaml config file, such as ```contrast_security.yaml```___

| Platform | Profiler Path |
|--|--|
| Windows (64-bit) | `{{ Unzipped Directory Root }}\runtimes\win-x64\native\ContrastProfiler.dll` |
| Windows (32-bit) | `{{ Unzipped Directory Root }}\runtimes\win-x86\native\ContrastProfiler.dll` |
| Linux (64-bit) | `{{ Unzipped Directory Root }}/runtimes/linux-x64/native/ContrastProfiler.so` |
| OSX (64-bit) | `{{ Unzipped Directory Root }}/runtimes/osx-x64/native/ContrastProfiler.so` |

> **Note:** the platform's CPU architecture is based on the CoreCLR's "bitness". For example, when using a 32-bit CoreCLR you must use the 32-bit profiler even if the OS is 64-bit.
> **Note:** only the Windows platform is supported at this time.

### Running under IIS

Set the environment variables using either of these two methods:

* In application web.config via [ASP.NET Module Configuration](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/aspnet-core-module?view=aspnetcore-2.2#setting-environment-variables) (recommended)

* [Application Pool](https://docs.microsoft.com/en-us/iis/configuration/system.applicationHost/applicationPools/add/environmentVariables/#appcmdexe) on the server

### Running with a Launch Profile

These environment variables ca be set as part of your application startup script, or as a ASP.NET Core launch profile.  

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

The application can then be run with: 
```powershell
dotnet run --launch-profiler MyAppWithContrastAgent
```

## Next Steps

* [Use the Contrast .NET Core agent](http://link/to/NetCore/Usage)  
* [Customize .NET Core agent configuration](http://linkback/NetAgent/Configuration)  
