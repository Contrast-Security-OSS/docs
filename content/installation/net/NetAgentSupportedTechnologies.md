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
The server must have .NET Framework 4.5.1 installed; however, this requirement does not extend to applications that need to be analyzed. The .NET Contrast Agent can analyze web applications that run on CLR 2 (.NET 3.5) and CLR 4 (.NET 4.0+). 

## Supported CLRs
* 2.0 (.NET 3.5)
* 4.0 (.NET 4.0+)

## Architecture
The .NET Contrast Agent can be installed on both 32-bit and 64-bit architectures and can be used to analyze both 32-bit and 64-bit web applications. 

## Web Application Frameworks
* ASP.NET MVC 2-5
* ASP.NET Web Forms
* ASP.NET Web Pages
* IIS-Hosted ASMX-based Web Services
* IIS-Hosted Web API
* IIS-Hosted WCF Services

Don't see your application's framework here? There's a good chance that Contrast can still analyze your application if its framework simply wraps the typical ASP.NET classes (e.g. ```System.Web.HttpRequest```). We just haven't built explicit tests against every framework yet. 

>**Note:** 
* The **Mono** runtime isn't supported due to differences between the internals of the Microsoft CLR and Mono runtime.  
* The **Classic ASP** language isn't supported because Classic ASP applications don't run on the .NET runtime. 
* Contrast does not support analysis of .NET Core applications (yet) because .NET Core applications run on a different runtime (CoreCLR.)