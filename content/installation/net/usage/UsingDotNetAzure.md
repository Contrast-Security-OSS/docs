<!--
title: "Using Contrast .NET on Microsoft Azure"
description: "Using Contrast .NET on Microsoft Azure"
tags: "configuration microsoft azure cloud agent installation .Net"
-->

Use the Contrast .NET agent to analyze ASP.NET applications running on Azure Virtual Machines (VMs), Cloud Services, Mobile Services or Azure App Service (formerly Azure Web Sites). Follow the instructions below to set up the .NET agent in your environment. 

## Azure Virtual Machines

Complete the following steps to install the .NET agent on an Azure VM:

* Set up the Azure VM as you would normally, and deploy the ASP.NET applications to be analyzed. 
* Log in to Contrast, and [download the .NET agent zip file](installation-netinstall.html#net-install). 
* Access the Azure VM by Remote Desktop. (See [Log on to a Windows virtual machine](https://azure.microsoft.com/en-us/documentation/articles/virtual-machines-log-on-windows-server).)

<a href="assets/images/KB3-e15_1.png" rel="lightbox" title="Azure Virtual Machine"><img class="thumbnail" src="assets/images/KB3-e15_1.png"/></a>

* Copy the .NET agent zip file to the Azure VM, and extract the archive. 
* Run the .NET agent installer (*ContrastSetup.exe*).
* Browse to and use the application so that Contrast can analyze it. 

<a href="assets/images/KB3-e15_2.png" rel="lightbox" title="Virtual Machine RDP"><img class="thumbnail" src="assets/images/KB3-e15_2.png"/></a>

## Azure Cloud Services or Mobile Services

* Set up the Azure Cloud Service as you would normally, and deploy the ASP.NET applications to be analyzed. 
* Log in to Contrast, and [download the .NET agent zip file](installation-netinstall.html#net-install).
* Access the Cloud Service instance by Remote Desktop. (See [Using Remote Desktop with Azure Roles](https://msdn.microsoft.com/en-us/library/azure/gg443832.aspx).) 

<a href="assets/images/KB3-e15_3.png" rel="lightbox" title="Cloud Remote Desktop Services"><img class="thumbnail" src="assets/images/KB3-e15_3.png"/></a>

* Copy the .NET agent zip file to the Cloud Service instance, and extract the archive. 
* Run the .NET agent installer (*ContrastSetup.exe*). 
* Browse to and use the application normally so that Contrast can analyze it. 

<a href="assets/images/KB3-e15_4.png" rel="lightbox" title="Cloud RDP"><img class="thumbnail" src="assets/images/KB3-e15_4.png"/></a>

## Azure App Service (formerly Azure Web Apps)

Follow the instructions to install the agent for Azure App Service via [Nuget](installation-netinstall.html#net-manual) or [Azure Portal Extensions](installation-netinstall.html#net-express).  


