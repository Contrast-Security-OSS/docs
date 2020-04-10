<!--
title: "Installing Contrast .NET Core via Nuget Azure App Service package"
description: "Guide to installing .NET Core Agent on Azure App Service using the Nuget package"
tags: "installation configuration .Net Azure AppService site nuget visualstudio netcore"
-->

Complete the following steps to manually install the .NET Core agent via Nuget.

## Step One: Create an application hosted on Azure App Service

* [Create an Azure account](https://portal.azure.com/), if you don't have one already.
* Follow the instructions to [create an .NET Core web application](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-dotnet), and deploy it to Azure App Service.
* Publish your application to Azure, and confirm that it works as expected without Contrast.

## Step Two: Add the Contrast NuGet Package to your application

Using the `dotnet` CLI:

* `dotnet add package Contrast.SensorsNetCore`

Using Visual Studio:

* Under the application project in the Solution Explorer, right click on **References** and select **Manage NuGet Packages**.

* Search for **Contrast.SensorsNetCore** package, select it and add it to your project.

* Build your application. Confirm that a *contrast* folder appears in your project. When the application is published, this folder appears in the build output directory.

## Step Three: Add application settings for Contrast

There are two primary ways to add the settings that Contrast needs:

* The Azure App Service Portal (Preferred)
* The **App Service Settings** dialog in Visual Studio's Publish to Azure App Service

### Configuring settings for Contrast in Azure App Service Portal

* Go to the **Configuration\Application Settings** blade of your web application in the Azure Portal.

* Add the following settings to use the .NET Core agent:

Windows:
```
CORECLR_ENABLE_PROFILING: 1
CORECLR_PROFILER: {8B2CE134-0948-48CA-A4B2-80DDAD9F5791}
CORECLR_PROFILER_PATH_32: <application directory>\contrast\runtimes\win-x86\native\ContrastProfiler.dll
CORECLR_PROFILER_PATH_64: <application directory>\contrast\runtimes\win-x64\native\ContrastProfiler.dll
```

Linux:
```
CORECLR_ENABLE_PROFILING: 1
CORECLR_PROFILER: {8B2CE134-0948-48CA-A4B2-80DDAD9F5791}
CORECLR_PROFILER_PATH: <application directory>/contrast/runtimes/linux-x64/native/ContrastProfiler.so
```

* Add .NET Core agent configuration settings

Using the [config file](installation-netcoreconfig.html#netcore-template):
```
CONTRAST_CONFIG_PATH: [Path to yaml config file]
```

Using environment variables, at minimum the following are required:
```
CONTRAST__API__URL: [IF USING ANOTHER SERVER THAN THE DEFAULT: https://app.contrastsecurity.com]
CONTRAST__API__USER_NAME: [REPLACE WITH YOUR AGENT USERNAME]
CONTRAST__API__SERVICE_KEY: [REPLACE WITH YOUR AGENT SERVICE KEY]
CONTRAST__API__API_KEY: [REPLACE WITH YOUR AGENT API KEY]
```

## Step Four: Publish the application to Azure

* Publish your application to Azure App Service once more (after you've installed the Contrast NuGet package and updated the **Configuration\Application Settings**).

* Once the application has loaded, use the application and then go to the Contrast UI. Verify that the server and application are active, and that any expected vulnerabilities appear.

## Update Your Installation

When redeploying a web application that has Contrast agent running, you may run into an error that says "Files in use" on *ContrastProfiler-64.dll* or *ContrastProfiler-32.dll*. This happens because the agent DLL files are locked by .NET, and can't be overwritten while the application is still running.

The DLL files must be unloaded before publishing. To unload them, stop the site, publish and then start the site back up. Alternately, you can change the `CORECLR_ENABLE_PROFILING` setting to `0` in the portal, publish and then change the setting back to `1`.
