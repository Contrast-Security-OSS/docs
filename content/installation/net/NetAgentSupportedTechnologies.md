<!--
title: ".NET Agent Supported Technologies"
description: "List of technologies supported by the .NET agent"
tags: "installation supported technologies agent .Net"
-->

The Contrast.NET Agent supports analysis of web applications built on the following technologies:

## Supported Operating Systems
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
The server must have .NET Framework 4.5.1 installed; however, this requirement does not extend to applications that need to be analyzed. The .NET Contrast Agent can analyze web applications that run on CLR 2.0 (.NET 2.0/3.0/3.5) or CLR 4 (.NET 4.0+). 

## Supported CLRs
* 2.0 (.NET 2.0/3.0/3.5)
* 4.0 (.NET 4.0+)

## Architecture
The .NET Contrast Agent can be installed on both 32-bit and 64-bit architectures and can be used to analyze both 32-bit and 64-bit web applications. 

## Web Application Frameworks
* ASP.NET MVC 2-5
* ASP.NET Web Forms
* ASP.NET Web Pages
* IIS-Hosted Web API
* IIS-Hosted WCF Services

Don't see your application's framework here? There's a good chance that Contrast can still analyze your application if its framework simply wraps the typical ASP.NET classes (e.g. ```System.Web.HttpRequest```). We just haven't built explicit tests against every framework yet. 

>**Note:** The **Mono** runtime is not supported because Mono does not have a **Profiler API**. The Profiler API is a **Component Object Model (COM)**-based interface and is not supported on Linux.  

>**Note:** The **Classic ASP** language is not supported because Classic ASP applications do not run on the .NET runtime. 

In CLR 2.0, dataflow analysis can be stopped by three string methods (```String.Insert```, ```String.Remove``` and ```String.Replace```) that are implemented in native code and cannot currently be monitored by Contrast. These methods are fully analyzed for applications running on CLR 4.0.
