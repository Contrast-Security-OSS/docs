<!--
title: "Configuring Contrast .NET Agent on Azure App Service"
description: "Configurations and tweaks for customizing the Contrast .NET agent running on Azure App Service"
tags: "configuration .Net Azure AppService tweaks "
-->

Azure App Service Agent Customization and Tweaks

Azure App Service the following configurations can be overriden using Application Settings in the portal, or in your application web.config file.  

For example to change a the default log level you would change the configuration setting LogLevel.   Either add _CONTRAST_LogLevel = %value%_ in the Azure portal, or add a _Contrast.LogLevel_ application setting in the web.config file.  

The following configurations can be modified:

Identification and Tagging
* ServerName
* ServerTags
* ServerEnvironment
* AppVersion
* AppGroup
* AppTags
* LibraryTags
* FindingTags
* Logging
* LogLevel
* LogDetailedFindings

Performance Tweaks
* StackTraceConfig
* CacheStackTraces
* EnableInstrumentationOptimizations
* ThreadAnalysis

See the regular documentation for more info on these settings - https://docs.contrastsecurity.com/installation-netconfig.html