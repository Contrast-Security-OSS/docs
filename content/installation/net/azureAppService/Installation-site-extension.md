<!--
title: "Installing Contrast using Azure App Service Site Extension"
description: "Guide to installing .NET Agent on Azure App Service using Site Extensions"
tags: "installation configuration .Net Azure AppService site extension"
-->

Complete the following steps for Express Installation of the .NET agent via Azure Portal Extensions. <!-- Should "Express Installation" be capitalized? -->

## Step One: Create an application hosted on Azure App Service

* Create an [Azure account](https://portal.azure.com/), if you don't have one already. 
* Follow the instructions to [create an ASP.NET web application](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-dotnet-framework), and deploy it to Azure App Service. 
* Publish your application to Azure, and confirm that it works as expected without Contrast.

## Step Two: Add application settings for Contrast  
<!-- What does "(see section below on adding application settings)" mean? -->

The following values are the Application Settings that the agent needs to connect to Contrast. You can get your authentication keys from your [Profile](user-account.html#profile) in the Contrast UI.


| Key                        | Value                       |
| -------------------------- | ---------------------------------------- |
| CONTRAST_TeamServerUserName             | Replace with your agent username. |
| CONTRAST_TeamServerServiceKey           | Replace with your agent service key. |
| CONTRAST_TeamServerApiKey               | Replace with your agent API key.  |
| CONTRAST_TeamServerUrl                  | Defaults to https://app.contrastsecurity.com. Replace with another URL, if you're using a Contrast application that's hosted elsewhere. (**Optional**)  |

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


