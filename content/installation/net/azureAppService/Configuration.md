<!--
title: "Configuring Contrast .NET Agent on Azure App Service"
description: "Configurations and tweaks for customizing the Contrast .NET agent running on Azure App Service"
tags: "configuration .Net Azure AppService tweaks "
-->

The following configurations can be overriden using Application Settings in the portal, or in your application's web.config file.  

For example to change a the default log level (`LogLevel` setting) you would change the configuration setting LogLevel.   Either add `CONTRAST_LogLevel` in the Azure portal, or add a `Contrast.LogLevel` application setting in the web.config file.  

The following configurations can be modified:

### Identification and Tagging

| Parameter           | Description | 
|---------------------|-------------|
| ServerName          | Customizes the display name used by the Contrast interface for the server running the Contrast.NET agent. If the **ServerName** configuration setting is not present, the server name is the **Resource Group** - **Region** of your application.  For example: `MyResourceGroup - US East`. 
| ServerEnvironment   | Set the environment value sent to Contrast. Valid `ServerEnvironment` values are `DEVELOPMENT`, `QA` or `PRODUCTION`. The default value is `QA`. 
| ServerTags          | Controls free-form tags sent to Contrast for servers; you can use tags to search for servers in the Contrast interface. See the article on [Application-Specific Settings](installation-netconfig.html#appname) for details on tagging applications, libraries and vulnerabilities.
| AppName    | Change the application name sent to the Contrast interface for this application. The default is your Azure App Service application name as set on Azure Portal       
| AppVersion | Controls the application version tag sent to Contrast.
| AppGroup   | Specifies the to which group this application will be added in the Contrast interface, if this application isn't  already a member of a group.        
| AppTags    | Controls free-form tags sent to Contrast for the application; you can use tags to search for specific applications in the Contrast interface.      
| LibraryTags   | Controls free-form tags sent to Contrast for the application's libraries; you can use tags to search for specific libraries in the Contrast interface.      
| FindingTags   | Controls free-form tags sent to Contrast for the application's vulnerabilities; you can use tags to search for specific vulnerabilities in the Contrast interface.      

### Diagnostics

| Parameter           | Description | 
|---------------------|-------------|
| LogLevel          | More detailed levels of logging degrade performance, but can generate useful information for debugging Contrast. The logging level is normally configured in [Server Settings](user-servers.html#settings) in the Contrast interface by default; however, you can also configure it at the agent level.   Options are Error, Warn, Info, Debug and Trace.  


### Performance Tweaks

| Parameter           | Description | 
|---------------------|-------------|
| StackTraceConfig                         | Limits stack traces captured by the agent. Configured in [Server Settings](user-servers.html#settings) in the Contrast interface by default. The default is **Full**. <li>**Full**: Captures all stack traces with file and line number information. Deployments must include *.PDB* files for line number information.</li><li>**Limited**: Better performance; captures all stack traces but without file and line number information. Best used for builds without debugging symbols (*.PDB* files).</li><li>**Minimal**: Best performance; doesn't capture intermediate propagator stack traces, no file and line information. Best used for Release builds and Production environments.</li> |
| ThreadAnalysis                           | Web (default) or Full.  Web follow data flow through normal web operations.  Full instruments all threading operations which adds overhead.  It can be used for more thorough analysis if your application manually creates background threads.
