<!--
title: "Installing Contrast using Azure App Service Site Extension"
description: "Guide to installing Contrast .NET Agent on Azure App Service using Site Extensions"
tags: "installation configuration .Net Azure AppService site extension"
-->

Complete the following steps for Express Installation of the .NET agent via Azure Portal Extensions.

## Step One: Create an application hosted on Azure App Service

* Create an Azure account if you don't have one already: https://portal.azure.com/ 
* Follow the instructions to create an ASP.NET web application and deploy it to Azure App Service: https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-dotnet-framework 
* Publish your application to Azure and confirm that it works as expected without Contrast

## Step Two: Add application settings for Contrast 
<!-- What does "(see section below on adding application settings)" mean? -->

These are the Application Settings that the agent needs to connect to Contrast.  Go to My Account in top right corner in Contrast website to get your keys.


| Key                        | Value                       |
| -------------------------- | ---------------------------------------- |
| CONTRAST_TeamServerUserName             | [REPLACE WITH YOUR AGENT USERNAME]  |
| CONTRAST_TeamServerServiceKey           | [REPLACE WITH YOUR AGENT SERVICE KEY]  |
| CONTRAST_TeamServerApiKey               | [REPLACE WITH YOUR AGENT API KEY]  |
| CONTRAST_TeamServerUrl                  | Optional - defaults to https://app.contrastsecurity.com.  Replace with another url if using a TeamServer hosted elsewhere  |

## Step Three: Add the site extension to the hosted application

* In the Azure Portal, select your hosted application
* Select "Extensions"

    <a href="assets/images/AzureSite_SelectExtensionTab.png" rel="lightbox" title="Extension Tab of Azure App Service Web App"><img class="thumbnail" src="assets/images/AzureSite_SelectExtensionTab.png"/></a>

* Click "+ Add"
* Select the Contrast.NET Site Extension

    <a href="assets/images/AzureSite_SelectContrastExtension.png" rel="lightbox" title="Select Contrast.NET Site Extension from Extension List"><img class="thumbnail" src="assets/images/AzureSite_SelectContrastExtension.png"/></a>

* Click "OK" and agree to the terms and conditions
* Wait a few seconds and confirm the site extension installed correctly

    <a href="assets/images/AzureSite_ContrastExtensionInstalled.png" rel="lightbox" title="Contrast.NET Site Extension Installed Popup"><img class="thumbnail" src="assets/images/AzureSite_ContrastExtensionInstalled.png"/></a>

* Go back to the application overview and "Restart" the application
* Navigate to the application
* Confirm the application is reporting to Teamserver

> **Note:** The agent can also be installed from the _Site Extensions_ area of your application management SCM (Kudu) site. 


