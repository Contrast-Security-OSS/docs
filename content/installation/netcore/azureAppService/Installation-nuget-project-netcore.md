<!--
title: "Installing Contrast .NET Core via Nuget Azure App Service package"
description: "Guide to installing .NET Core Agent on Azure App Service using the Nuget package"
tags: "installation configuration .Net Azure AppService site nuget visualstudio netcore"
-->

Complete the following steps to manually install the .NET Core agent via Nuget.

## Step One: Create an application hosted on Azure App Service

* [Create an Azure account](https://portal.azure.com/), if you don't have one already.
* Follow the instructions to [create an ASP.NET web application](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-dotnet-framework), and deploy it to Azure App Service.
* Publish your application to Azure, and confirm that it works as expected without Contrast.

## Step Two: Add the Contrast NuGet Package to your application

In Visual Studio:

* Under the application project in the Solution Explorer, right click on **References** and select **Manage NuGet Packages**.

* Search for **Contrast.Net.Azure.AppService** package, select it and add it to your project.

* Build your application. Confirm that a `contrast` folder appears in your project.  When the application is compiled this folder will appear in the build output directory.

## Step Three: Add application authentication settings for Contrast

There are two primary ways to add the authentication settings that Contrast needs:

* The **App Service Settings** dialog in Visual Studio's Publish to Azure App Service
* The Azure App Service Portal

You might notice that the following text appears when you installed the Contrast .NET NuGet package:

 ```
------------------------------------------------------------
--------- Contrast .NET Core Agent Readme ------------------
------------------------------------------------------------

This package includes files required to run the Contrast .NET Core agent.  These files have been installed in your "<application directory>/contrast" folder
To use the Contrast agent, you must set following environment variables on your application process.

CORECLR_ENABLE_PROFILING: 1
CORECLR_PROFILER: {8B2CE134-0948-48CA-A4B2-80DDAD9F5791}
CORECLR_PROFILER_PATH_32: <application directory>\contrast\runtimes\win-x64\native\ContrastProfiler.dll
CORECLR_PROFILER_PATH_64: <application directory>\contrast\runtimes\win-x86\native\ContrastProfiler.dll

The agent requires valid authentication to the Contrast web site.  To configure the agent using the yaml configuration add this
environment variable.  More information: https://docs.contrastsecurity.com/installation-netcoreconfig.html#netcore-template

CONTRAST_CONFIG_PATH: [Path to yaml config file]

Alternately the agent can be fully configured using environment variables   At minimum the following are required:

CONTRAST__API__URL: [IF USING ANOTHER SERVER THAN THE DEFAULT: https://app.contrastsecurity.com]
CONTRAST__API__USER_NAME: [REPLACE WITH YOUR AGENT USERNAME]
CONTRAST__API__SERVICE_KEY: [REPLACE WITH YOUR AGENT SERVICE KEY]
CONTRAST__API__API_KEY: [REPLACE WITH YOUR AGENT API KEY]

---------- Stand-alone process or Docker Containers ---------
Set the environment using your shell or Docker container.
More information: https://docs.contrastsecurity.com/installation-netcoreinstall.html#netcore-windows


---------- Azure App Service --------------------------------
Set the environment variables in the your App Service web app.
1. Go to portal.azure.com, log in, go to App Services and navigate to your Web App.
2. Navigate to the 'Configuration' section.
3. Add all the settings described above in the 'Application settings' area.  They will be added as environment variables in your application process.
4. Save changes to restart the application.

---------- IIS Hosted ---------------------------------------
Add the environment variables in the <environmentVariables> section of the <system.webServer><aspnetNetCore> section in the web.config file.
More information: https://docs.contrastsecurity.com/installation-netcoreinstall.html#running-under-iis-and-iis-express

```

Go to the **Application Settings** area of your application in the Azure Portal. Set the Contrast authentication keys that the agent needs to connect to Contrast, and click **Save**. (You can get your authentication keys from your [Profile](user-account.html#profile) in the Contrast UI.)

## Step Four: Publish the application to Azure

* Using Visual Studio, publish your application to Azure App Service once more (after you've installed the Contrast NuGet package and specified the Application Settings).

* Once the application has loaded, use the application and then go to the Contrast UI. Verify that the server and application are active, and that any expected vulnerabilities appear.

## Update Your Installation

When redeploying a web application that has Contrast agent running, you may run into an error that says "Files in use" on `ContrastProfiler-64.dll` or `ConrastProfiler-32.dll`.

This happens because the agent `dll` files are locked by .NET, and can't be overwritten while the application is still running. The `dll` files need to be unloaded before publishing. To unload them, stop the site, publish and then start the site back up.  Alternately, you can change the `CORECLR_ENABLE_PROFILING` setting to `0` in the portal, publish and then change the setting back to `1`.

