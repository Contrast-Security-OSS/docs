<!--
title: "Installing Contrast via Nuget Azure App Service package"
description: "Guide to installing .NET Agent on Azure App Service using the Nuget package"
tags: "installation configuration .Net Azure AppService site nuget visualstudio"
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

* Build your application. Confirm that Contrast assemblies (e.g., `Contrast.Sensors.dll` and `ContrastProfiler-32.dll`) are in your application's *bin* directory.
 * You can easily navigate to the *bin* directory by right clicking on the project in Visual Studio, selecting **Open Folder in File Explorer** and going to the directory from there.

## Step Three: Add application authentication settings for Contrast

There are two primary ways to add the authentication settings that Contrast needs:

* The **App Service Settings** dialog in Visual Studio's Publish to Azure App Service
* The Azure App Service Portal

You might notice that the following text appears when you installed the Contrast .NET NuGet package:

 ```
 Added package 'Contrast.NET.Azure.WebSites.18.X.X' to 'packages.config'
 Executing script file 'C:\yourprojectpath\packages\Contrast.NET.Azure.WebSites.18.4.14\tools\net451\install.ps1'...
 ***Package install is complete***

 Please make sure to add the following configurations to your Azure Web App prior to deploying.
 1. Go to portal.azure.com, log in, go to App Services and navigate to your Web App.
 2. Navigate to the 'Application Settings' section and set the following settings:
 Key Value
 ---------------------------------------
 CONTRAST__API__URL [IF USING A SERVER OTHER THAN THE DEFAULT: https://app.contrastsecurity.com]
 CONTRAST__API__USER_NAME [REPLACE WITH YOUR AGENT USERNAME]
 CONTRAST__API__SERVICE_KEY [REPLACE WITH YOUR AGENT SERVICE KEY]
 CONTRAST__API__API_KEY [REPLACE WITH YOUR AGENT API KEY]
 CONTRAST_INSTALL_DIRECTORY D:\Home\site\wwwroot\contrastsecurity\
 COR_ENABLE_PROFILING 1
 COR_PROFILER {EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}
 COR_PROFILER_PATH_32 D:\Home\site\wwwroot\contrastsecurity\ContrastProfiler-32.dll
 COR_PROFILER_PATH_64 D:\Home\site\wwwroot\contrastsecurity\ContrastProfiler-64.dll

 Go to https://docs.contrastsecurity.com/installation-netazureappservice.html for more configuration options.
```

Go to the **Application Settings** area of your application in the Azure Portal. Set the Contrast applications that the agent needs to connect to Contrast, and click **Save**. (You can get your authentication keys from your [Profile](user-account.html#profile) in the Contrast UI.)

## Step Four: Publish the application to Azure

* Using Visual Studio, publish your application to Azure App Service once more (after you've installed the Contrast NuGet package and specified the Application Settings).

* Once the application has loaded, use the application and then go to the Contrast UI. Verify that the server and application are active, and that any expected vulnerabilities appear.

## Update Your Installation

When redeploying a web application that has Contrast agent running, you may run into an error that says "Files in use" on `ContrastProfiler-32.dll` or `ConrastProfiler-64.dll`.

This happens because the agent `dll` files are locked by .NET, and can't be overwritten while the application is still running. The `dll` files need to be unloaded before publishing. To unload them, stop the site, publish and then start the site back up.  Alternately, you can change the `COR_ENABLE_PROFILING` setting to `0` in the portal, publish and then change the setting back to `1`.

