<!--
title: "Using Contrast .NET on Microsoft Azure"
description: "Using Contrast .NET on Microsoft Azure"
tags: "configuration microsoft azure cloud agent installation .Net"
-->

Use the Contrast .NET Agent to analyze ASP.NET applications running on Azure Virtual Machines (VMs), Cloud Services or Mobile Services. (Unfortunately, you can't use Contrast on Azure Web Apps.) Follow the instructions below to set up the Contrast .NET Agent in your environment. 

## Azure Virtual Machines

Follow these steps to install the .NET agent on an Azure VM:

* Set up the Azure VM normally, and deploy the ASP.NET applications to be analyzed. </li>
* Log in to Contrast and download the .NET agent zip file. </li>
* Access the Azure VM by Remote Desktop. (See [Log on to a Windows virtual machine](https://azure.microsoft.com/en-us/documentation/articles/virtual-machines-log-on-windows-server).)

<a href="assets/images/KB3-e15_1.png" rel="lightbox" title="Azure Virtual Machine"><img class="thumbnail" src="assets/images/KB3-e15_1.png"/></a>

* Copy the .NET agent zip file to the Azure VM, and extract the archive. 
* Run the .NET agent installer (*ContrastSetup.exe*).
* Browse to and use the application normally so that Contrast can analyze it. 

<a href="assets/images/KB3-e15_2.png" rel="lightbox" title="Virtual Machine RDP"><img class="thumbnail" src="assets/images/KB3-e15_2.png"/></a>

## Azure Cloud Services or Mobile Services

* Set up the Azure Cloud Service normally, and deploy the ASP.NET applications to be analyzed. 
* Log in to Contrast, and download the .NET agent zip file.
* Access the Cloud Service instance by Remote Desktop. (See [Using Remote Desktop with Azure Roles](https://msdn.microsoft.com/en-us/library/azure/gg443832.aspx).) 

<a href="assets/images/KB3-e15_3.png" rel="lightbox" title="Cloud Remote Desktop Services"><img class="thumbnail" src="assets/images/KB3-e15_3.png"/></a>

* Copy the .NET agent zip file to the Cloud Service instance, and extract the archive. 
* Run the .NET agent installer (*ContrastSetup.exe*). 
* Browse to and use the application normally so that Contrast can analyze it. 

<a href="assets/images/KB3-e15_4.png" rel="lightbox" title="Cloud RDP"><img class="thumbnail" src="assets/images/KB3-e15_4.png"/></a>

## Azure Web Apps

Unfortunately, Contrast users can't install the Contrast agent on [Azure Web Apps](https://azure.microsoft.com/en-us/services/app-service/web/) at this time. While the .NET agent installer requires administrative privileges to run, Azure Web Apps users aren't granted administrative access to the underlying VM.


