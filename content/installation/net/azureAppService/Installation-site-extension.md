<!--
title: "Installing Contrast using Azure App Service Site Extension"
description: "Guide to installing .NET Agent on Azure App Service using Site Extensions"
tags: "installation configuration .Net Azure AppService site extension"
-->

Complete the following steps for express installation of the .NET agent via Azure Portal Extensions.

## Step One: Create an application hosted on Azure App Service

* Create an [Azure account](https://portal.azure.com/), if you don't have one already.
* Follow the instructions to [create an ASP.NET web application](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-dotnet-framework), and deploy it to Azure App Service.
* Publish your application to Azure, and confirm that it works as expected without Contrast.

## Step Two: Add application settings for Contrast

The following values are the Application Settings that the agent needs to connect to Contrast. You can get your authentication keys from your [Profile](user-account.html#profile) in the Contrast UI.


| Key                        | Value                       |
| -------------------------- | ---------------------------------------- |
| CONTRAST\__API__USER_NAME       | Replace with your agent username. |
| CONTRAST\__API__SERVICE_KEY | Replace with your agent service key. |
| CONTRAST\__API__API_KEY     | Replace with your agent API key.  |
| CONTRAST\__API__URL         | Defaults to https://app.contrastsecurity.com. Replace with another URL, if you're using a Contrast application that's hosted elsewhere. (**Optional**)  |

## Step Three: Add the site extension to the hosted application

* In the Azure Portal, select your hosted application.
* Select **Extensions**.

<a href="assets/images/AzureSite_SelectExtensionTab.png" rel="lightbox" title="Select the Extension tab for your hosted application"><img class="thumbnail" src="assets/images/AzureSite_SelectExtensionTab.png"/></a>

* Click **+ Add**.
* Select the **Contrast.NET Site Extension**.

<a href="assets/images/AzureSite_SelectContrastExtension.png" rel="lightbox" title="Choose the Contrast.NET Site Extension from the list"><img class="thumbnail" src="assets/images/AzureSite_SelectContrastExtension.png"/></a>

* Click **OK**, and agree to the terms and conditions.
* Wait a few seconds and confirm the site extension installed correctly.

<a href="assets/images/AzureSite_ContrastExtensionInstalled.png" rel="lightbox" title="Confirm the installation"><img class="thumbnail" src="assets/images/AzureSite_ContrastExtensionInstalled.png"/></a>

* Go back to the application overview and **Restart** the application.
* Navigate to the application, and confirm the application is reporting to Contrast.

> **Note:** The agent can also be installed from the **Site Extensions** area of your application management SCM (Kudu) site.

## Update Your Installation

If a new version of the agent is available, it will be indicated in the Azure Portal or Kudu dashboard. You must stop the site before starting the update; otherwise, the update may fail.
