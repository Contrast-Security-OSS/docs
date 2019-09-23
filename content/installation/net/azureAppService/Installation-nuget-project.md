<!--
title: "Installing Contrast .NET Framework agent via Nuget Azure App Service package"
description: "Guide to installing .NET Framework Agent on Azure App Service using the Nuget package"
tags: "installation configuration .net framework Azure AppService nuget visualstudio"
-->

Complete the following steps to manually install the .NET agent via Nuget.

## Step One: Create an application hosted on Azure App Service

* [Create an Azure account](https://portal.azure.com/), if you don't have one already.
* Follow the instructions to [create an ASP.NET web application](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-dotnet-framework), and deploy it to Azure App Service.
* Publish your application to Azure, and confirm that it works as expected without Contrast.

## Step Two: Add the Contrast NuGet Package to your application

In Visual Studio:

* Under the application project in the Solution Explorer, right click on **References** and select **Manage NuGet Packages**.

* Search for **Contrast.Net.Azure.AppService** package, select it and add it to your project.

* Build your application. Confirm that Contrast assemblies (e.g., `ContrastProfiler-64.dll`) are in a new *contrastsecurity* folder that's created in application's root directory.

## Step Three: Add application authentication settings for Contrast

There are two primary ways to add the authentication settings that Contrast needs:

* The **App Service Settings** dialog in Visual Studio's Publish to Azure App Service
* The Azure App Service Portal

You might notice that the following text appears when you installed the Contrast .NET NuGet package:

 ```
------------------------------------------------------------
---- Contrast .NET Framework Agent for Azure App Service ---
------------------------------------------------------------

This package includes files required to run the Contrast .NET Core agent.  These files have been installed in your "<application directory>/contrastsecurity" folder
To use the Contrast agent, you must set following settings on your Azure App Service Web App.

1. Publish your app to Azure App Service.

2. Go to portal.azure.com, log in, go to App Services and navigate to your Web App.

3. Navigate to the Configuration section and then set the following in the 'Application Settings' area.

COR_ENABLE_PROFILING:			1
COR_PROFILER:					{EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}
COR_PROFILER_PATH_32:		    D:\Home\site\wwwroot\contrastsecurity\ContrastProfiler-32.dll
COR_PROFILER_PATH_64:			D:\Home\site\wwwroot\contrastsecurity\ContrastProfiler-64.dll
CONTRAST_INSTALL_DIRECTORY:		D:\Home\site\wwwroot\contrastsecurity\

If using a configuration yaml file, include it in the application and set this setting.
CONTRAST_CONFIG_PATH:           D:\Home\site\wwwroot\[path to contrast_security.yaml within the application]

Alternately the agent can be configured with environment variables.  At minimum set these settings for authentication:

CONTRAST__API__URL:             [Optional, if using another server than the default: https://app.contrastsecurity.com]
CONTRAST__API__USER_NAME:       [Replace with agent user name]
CONTRAST__API__SERVICE_KEY:     [Replace with agent service key]
CONTRAST__API__API_KEY:         [Replace with agent api key]

4. Save changes to the Configuration section.


Go to https://docs.contrastsecurity.com/installation-netconfig.html for more configuration options."
```

Go to the **Application Settings** area of your application in the Azure Portal. Set the Contrast authentication keys that the agent needs to connect to Contrast, and click **Save**. (You can get your authentication keys from your [Profile](user-account.html#profile) in the Contrast UI.)

## Step Four: Publish the application to Azure

* Using Visual Studio, publish your application to Azure App Service once more (after you've installed the Contrast NuGet package and specified the Application Settings).

* Once the application has loaded, use the application and then go to the Contrast UI. Verify that the server and application are active, and that any expected vulnerabilities appear.

## Update Your Installation

When redeploying a web application that has Contrast agent running, you may run into an error that says "Files in use" on *ContrastProfiler-64.dll* or *ContrastProfiler-32.dll*. This happens because the agent DLL files are locked by .NET, and can't be overwritten while the application is still running.

The DLL files need to be unloaded before publishing. To unload them, stop the site, publish and then start the site back up. Alternately, you can change the `COR_ENABLE_PROFILING` setting to `0` in the portal, publish and then change the setting back to `1`.

