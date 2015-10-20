<!--
title: ".NET Agent Supported Technologies"
description: "List of technologies supported by the .NET agent"
-->

The Contrast.NET Agent supports analysis of web applications built on the following technologies:

Server | Host | Runtime | Web Application Framework
:----- |:---- |:------- | :------------------------
Windows Vista | IIS6 | CLR 2.0 (.NET Framework 2.0 - 3.5) | ASP.NET Web Applications
Windows 7 | IIS7 | CLR 4.0+ (.NET Framework 4.0+) | ASP.NET Web Pages
Windows 8 | IIS8 |  | ASP.NET Web Forms
Windows Server 2003 | IIS Express |  | ASP.NET MVC 2-5
Windows Server 2008 |  |  | IIS-Hosted WCF Service Host
Windows Server 2012 |  |  | IIS-Hosted Web API
Azure Virtual Machine  |  |



>**Note:** The **Mono** runtime is not supported because Mono does not have a **Profiler API**. The Profiler API is a **Component Object Model (COM)**-based interface and is not supported on Linux.



In CLR 2.0, dataflow analysis can be stopped by three string methods (```String.Insert```, ```String.Remove``` and ```String.Replace```) that are implemented in native code and cannot currently be monitored by Contrast. These methods are fully analyzed for applications running on CLR 4.0.
