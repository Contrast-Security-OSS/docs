<!--
title: "Using Contrast .NET on Microsoft Azure"
description: "Using Contrast .NET on Microsoft Azure"
tags: "microsoft azure cloud agent installation .Net"
-->

The Contrast .NET Agent can be used to analyze ASP.NET applications running on Azure Virtual Machines, Cloud Services, or Mobile Services.  Unfortunately, Contrast cannot be used on Azure Websites at this time.

Follow the instructions below to set up the Contrast .NET Agent in your environment. 

## Using Contrast .NET on Azure Virtual Machines

Follow these steps to install the .NET agent on an Azure Virtual Machine:

* Set up the Azure Virtual Machine normally and deploy the ASP.NET applications to be analyzed.
* Log in to the Contrast TeamServer and download the .NET Agent zip file.
* Access the Azure VM by Remote Desktop ([Log on to a Windows virtual machine](https://azure.microsoft.com/en-us/documentation/articles/virtual-machines-log-on-windows-server))

<a href="assets/images/KB3-e15_1.png" rel="lightbox" title="Azure Virtual Machine"><img class="thumbnail" src="assets/images/KB3-e15_1.png"/></a>

* Copy the .NET Agent zip file to the Azure VM and extract the archive.
* Run the .NET Agent installer (***ContrastSetup.exe***)
* Browse to and use the application normally in order to have Contrast analyze it.

<a href="assets/images/KB3-e15_2.png" rel="lightbox" title="Virtual Machine RDP"><img class="thumbnail" src="assets/images/KB3-e15_2.png"/></a>

## Using Contrast .NET on Azure Cloud Services or Mobile Services

* Set up the Azure Cloud Service normally and deploy the ASP.NET applications to be analyzed.
* Log in to the Contrast TeamServer and download the .NET Agent zip file.
* Access the Cloud Service Instance by Remote Desktop ([see Using Remote Desktop with Azure Roles](https://msdn.microsoft.com/en-us/library/azure/gg443832.aspx))

<a href="assets/images/KB3-e15_3.png" rel="lightbox" title="Cloud Remote Desktop Services"><img class="thumbnail" src="assets/images/KB3-e15_3.png"/></a>

* Copy the .NET Agent zip file to the Cloud Service Instance and extract the archive.
* Run the .NET Agent installer (***ContrastSetup.exe***)
* Browse to and use the application normally in order to have Contrast analyze it.

<a href="assets/images/KB3-e15_4.png" rel="lightbox" title="Cloud RDP"><img class="thumbnail" src="assets/images/KB3-e15_4.png"/></a>

## Azure Websites

Contrast cannot be used on Azure Websites because the .NET Agent installer requires administrative privileges to run and Azure Website users are not granted administrative access to the underlying VM.
