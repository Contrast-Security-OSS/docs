<!--
title: "Contrast .NET Agent Installation"
description: "Contrast .NET Agent Installation."
tags: "installation agent .NET"
-->

## The Basics

To install the .NET agent, complete the following steps.

* Log in to the Contrast UI. 
* Click the button in the top navigation bar to **Add Agent**.
* Select the **.NET Core** in the dropdown menu, and click the button to **Download Agent**. You might need to specify proxy authentication information required by your network before downloading the agent.
* Extract the downloaded zip archive (e.g., *ContrastSetup_18.4.56.zip*) on the web server, and place it in a directory that your applications can access. 


## Customize Your Installation

The downloaded zip archive contains a file called *contrast_security.yaml* which is used by the agent for configuration. This includes the authentication credentials and proxy settings the agent needs to connect to Contrast. 

You can fully configure the agent using the *contrast_security.yaml* file. See the agent [configuration](installation-netconfig.html#net-yaml) instructions for more information.

> **Example:** To change the default log level of the .NET agent, update the *contrast_security.yaml* file, add a new line and the code below, and then continue the installation as normal.
 ```
 agent:
  logger:
    level: TRACE
 ```

**Note:** If you have application-specific customizations, you can copy the *contrast_security.yaml* to a separate folder or rename it.  Otherwise all applications could use the same configuration file.

## Enable .NET Core Agent

To enable the .NET Core agent on your application, you will need to set the following environment variables before running your application

* CORECLR_PROFILER_PATH_64: ___[Path to ```ContrastProfiler-64.dll``` in 
the agent directory]___
* CORECLR_PROFILER_PATH_32: ___[Path to ```ContrastProfiler-32.dll``` in the agent directory]___
* CORECLR_ENABLE_PROFILING: ___1___
* CORECLR_PROFILER: ___{EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}___
* CONTRAST_INSTALL_DIRECTORY: ___[Path to agent directory]___
* AGENT__DOTNET__CONTAINER: true
* CONTRAST_CONFIG_PATH: path to yaml config file, such as ```contrast_security.yaml```

### Running under IIS

Either set the environment variables on the

* [Application Pool](https://docs.microsoft.com/en-us/iis/configuration/system.applicationHost/applicationPools/add/environmentVariables/#appcmdexe) on the server

* [ASP.NET Module Configuration](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/aspnet-core-module?view=aspnetcore-2.2#setting-environment-variables) in application web.config


### Running with a launch profile

These environment variables ca be set as part of your application startup script, or as a ASP.NET Core launch profile.  

>For Example:
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
```
dotnet run --launch-profiler MyAppWithContrastAgent
```

## Next Steps

* [Use the Contrast .NET Core agent](http://link/to/NetCore/Usage)  
* [Customize .NET Core agent configuration](http://linkback/NetAgent/Configuration)  
