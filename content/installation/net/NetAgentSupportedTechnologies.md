<!--
title: ".NET Agent Supported Technologies"
description: "List of technologies supported by the .NET agent"
tags: "installation supported technologies agent .Net"
-->

The Contrast.NET Agent supports analysis of web applications built on the following technologies:

* Windows 7
* Windows 8
* Windows 10
* Windows Server 2008 R2
* Windows Server 2012
* Windows Server 2016
* Azure Virtual Machines 
* Azure Cloud Services
* Azure Mobile Services
 
## .NET Version

The server must have .NET Framework 4.5.1 installed; however, this requirement doesn't extend to applications that need to be analyzed. The .NET agent can analyze web applications that run on supported CLRs: CLR 2 (.NET 3.5) and CLR 4 (.NET 4.0+). 

## Architecture

You can install the .NET agent on both 32-bit and 64-bit architectures, and use them to analyze both 32-bit and 64-bit web applications. 

## Web Application Frameworks

While Contrast has built explicit tests against only the frameworks listed below, there's a good chance that Contrast can still analyze your application if its framework simply wraps the typical ASP.NET classes (e.g., `System.Web.HttpRequest`).

* ASP.NET MVC 2-5
* ASP.NET Web Forms
* ASP.NET Web Pages
* IIS-Hosted ASMX-based Web Services
* IIS-Hosted Web API
* IIS-Hosted WCF Services

>**Note:** 
* The **Mono** runtime isn't supported due to differences between the internals of the Microsoft CLR and Mono runtime.  
* The **Classic ASP** language isn't supported because Classic ASP applications don't run on the .NET runtime. 
* Contrast doesn't support analysis of .NET Core applications at this time because .NET Core applications run on a different runtime (CoreCLR.)