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
* Windows Server 2016 R2
* Azure Virtual Machines 
* Azure Cloud Services
* Azure Mobile Services
 
## .NET Version
The server must have .NET Framework 4.5.1 installed; however, this requirement does not extend to applications that need to be analyzed. The .NET Contrast Agent can analyze web applications that run on CLR 4 (.NET 4.0+) and CLR2 (.NET 3.5 SP1). 

## Supported CLRs
* 2.0 (.NET 3.5 SP1)
* 4.0 (.NET 4.0+)

## Architecture
The .NET Contrast Agent can be installed on both 32-bit and 64-bit architectures and can be used to analyze both 32-bit and 64-bit web applications. 

## Web Application Frameworks
* ASP.NET MVC 2-5
* ASP.NET Web Forms
* ASP.NET Web Pages
* IIS-Hosted ASMX-based Web Services
* IIS-Hosted ASP.NET Web API
* IIS-Hosted WCF Services

Don't see your application's framework here? There's a good chance that Contrast can still analyze your application if its framework simply wraps the typical ASP.NET classes (e.g. ```System.Web.HttpRequest```). We just haven't built explicit tests against every framework yet. 

>**Note:** 
* The **Mono** runtime isn't supported.
* The **Classic ASP** language isn't supported because Classic ASP applications don't run on the .NET runtime. 
* All relevant data flow methods are instrumented by and analyzed by Contrast for applications running on .NET CLR.
