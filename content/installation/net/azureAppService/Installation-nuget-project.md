<!--
title: "Installing Contrast via Nuget Azure App Service package"
description: "Guide to installing Contrast .NET Agent on Azure App Service using the Nuget package"
tags: "installation configuration .Net Azure AppService site nuget visualstudio"
-->

Complete the following steps for Manual Installation of the .NET agent via Nuget.

## Step One: Create an application hosted on Azure App Service

* Create an Azure account if you don't have one already: https://portal.azure.com/ 
* Follow the instructions to create an ASP.NET web application and deploy it to Azure App Service: https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-dotnet-framework 
* Publish your application to Azure and confirm that it works as expected without Contrast. 

## Step Two: Add the Contrast NuGet Package to your application 

In Visual Studio:

* In the Solution Explorer, under the application project, right click on References and select "Manage NuGet Packages" 

* Search for __Contrast.Net.Azure.AppService__ package.  Select it and add it to your project

* Build your application.  Confirm that Contrast assemblies (e.g. `Contrast.Sensors.dll` and `ContrastProfiler-32.dll`) are in your application's bin directory. You can easily navigate to the bin directory by right clicking on the project in Visual Studio and selecting "Open Folder in File Explorer" and then navigating to the "bin" directory from there. 

## Step Three: Add application authentication settings for Contrast 

There are two primary ways to add the authentication settings that Contrast needs.

* The "App Service Settings" dialog in Visual Studio's Publish to Azure App Service 
* The Azure App Service Portal

You may have noticed the following text appear when you installed the Contrast .NET NuGet package:** 

 ```
 Added package 'Contrast.NET.Azure.WebSites.18.X.X' to 'packages.config'  
 Executing script file 'C:\yourprojectpath\packages\Contrast.NET.Azure.WebSites.18.4.14\tools\net451\install.ps1'...
 ***Package install is complete***

 Please make sure to add the following configurations to your Azure Web App prior to deploying.
 1. Go to portal.azure.com, log in, go to App Services and navigate to your Web App.
 2. Navigate to the 'Application Settings' section and set the following settings:
 Key Value
 ---------------------------------------
 CONTRAST_TeamServerUrl [IF USING ANOTHER SERVER THAN THE DEFAULT: https://app.contrastsecurity.com]
 CONTRAST_TeamServerUserName [REPLACE WITH YOUR AGENT USERNAME]
 CONTRAST_TeamServerServiceKey [REPLACE WITH YOUR AGENT SERVICE KEY]
 CONTRAST_TeamServerApiKey [REPLACE WITH YOUR AGENT API KEY]
 COR_ENABLE_PROFILING 1
 COR_PROFILER {EFEB8EE0-6D39-4347-A5FE-4D0C88BC5BC1}
 COR_PROFILER_PATH_32 D:\Home\site\wwwroot\bin\ContrastProfiler-32.dll
 COR_PROFILER_PATH_64 D:\Home\site\wwwroot\bin\ContrastProfiler-64.dll

 Go to https://docs.contrastsecurity.com/installation-netazureappservice.html for more configuration options.
```


Go to "Application Settings" area of your application in the Azure Portal.  Set the Contrast TeamServer applications that the agent needs to connect to Contrast, and click Save.  You can get your authentication keys from "My Account" link in top right corner in Contrast website.

## Step Four: Publish application to Azure 

* Using Visual Studio, publish your application to Azure App Service once more (after you've installed the Contrast NuGet package and specified the Application Settings above).

* Once the application has loaded, use the application and then go to the Contrast web site.  Verify that the server and application are active, and any expected vulnerabilities appear.

> **Note:** You may run into a "Files in use" error on `ContrastProfiler-32.dll` or `ConrastProfiler-64.dll` when re-deploying a web app with our Nuget package.  To work around this issue, you can either stop the site or set _COR_ENABLE_PROFILING=0_ before deploying.  Restart the site or set _COR_ENABLE_PROFILING=1_ after the deploy is complete. This is not a problem when using the [Express Installation using  Site Extensions](#site-extension-installation).

