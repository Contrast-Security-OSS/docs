<!--
title: "Contrast .NET Azure App Service Agent Supported Technology"
description: "Contrast .NET azure appservice agent supported technology"
tags: "installation agent .NET Azure AppService supported technology"
-->


The Contrast .NET Azure App Service agent supports analysis of web applications built on the following technologies:

| Technology                 | Supported versions                       |
| -------------------------- | ---------------------------------------- |
| .NET Framework             | Your application must be set to use CLR4 (currently version .NET 4.7.1 is deployed on Azure).  Any application that can run on this version is supported.  Choosing .NET 3.5 is not supported.  |
| CLR                        | CLR4                       |
| Processor Architecture     | Both 32-bit and 64-bit applications are supported |
| Web Application Frameworks | All of the frameworks supported by the Windows agent are analyzed on Azure.  See [Supported Technologies](installation-netinstall.html#net-tech)  for more info. |

> Only application using the full .NET Framework are currently supported.  .NET Core applications will be supported in the future.