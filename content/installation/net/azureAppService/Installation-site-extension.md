<!--
title: "Installing Contrast using Azure App Service Site Extension"
description: "Guide to installing Contrast .NET Agent on Azure App Service using Site Extensions"
tags: "installation configuration .Net Azure AppService site extension"
-->

I. Create an Application Hosted on Azure App Service

1. Create an Azure account if you don't have one already: https://portal.azure.com/ 
2. Follow the instructions to create an ASP.NET web application and deploy it to Azure App Service: https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-dotnet-framework 
3. Publish your application to Azure and confirm that it works as expected without Contrast

II. Add Application Settings for Contrast (see section below on adding application settings)

These are the Application Settings that the agent needs to connect to Contrast.  Go to My Account in top right corner in Team Server to get your keys.

* CONTRAST_TeamServerUrl: https://app.contrastsecurity.com
* CONTRAST_TeamServerUserName: [REPLACE WITH YOUR AGENT USERNAME]
* CONTRAST_TeamServerServiceKey: [REPLACE WITH YOUR AGENT SERVICE KEY]
* CONTRAST_TeamServerApiKey: [REPLACE WITH YOUR AGENT API KEY]

III. Add the Site Extension to the Hosted Application

1. In the Azure Portal, select your hosted application
2. Select "Extensions"

    <a href="assets/images/AzureSite_SelectExtensionTab.png" rel="lightbox" title="Extension Tab of Azure App Service Web App"><img class="thumbnail" src="assets/images/AzureSite_SelectExtensionTab.png"/></a>

3. Click "+ Add"
4. Select the Contrast.NET Site Extension

    <a href="assets/images/AzureSite_SelectContrastExtension.png" rel="lightbox" title="Select Contrast.NET Site Extension from Extension List"><img class="thumbnail" src="assets/images/AzureSite_SelectContrastExtension.png"/></a>

5. Click "OK" and agree to the terms and conditions
6. Wait a few seconds and confirm the site extension installed correctly

    <a href="assets/images/AzureSite_ContrastExtensionInstalled.png" rel="lightbox" title="Contrast.NET Site Extension Installed Popup"><img class="thumbnail" src="assets/images/AzureSite_ContrastExtensionInstalled.png"/></a>

7. Go back to the application overview and "Restart" the application
8. Navigate to the application
9. Confirm the application is reporting to Teamserver