<!--
title: "Configuring Contrast .NET Agent on Azure App Service"
description: "Configurations and tweaks for customizing the Contrast .NET agent running on Azure App Service"
tags: "configuration .Net Azure AppService tweaks "
-->

The .NET agent for Azure App Service can be configured using the environment variable convention of agent configuration. See [YAML configuration properties](installation-netconfig.html#net-yaml) for more information and a full list of supported configuration options.

> **Example:** To change the agent's logging level, add `CONTRAST__AGENT__LOGGER__LEVEL` in the Azure portal.

You can also specify specific `application` configuration options in an application's *web.config* file. For the agent to pick up customized application settings, you must place these settings in the application *web.config* file's root configuration `appSettings` section. See [application-specific settings](installation-netconfig.html#appname) for more details.

## Legacy Configuration Options

The following configuration values for Azure App Service are considered **legacy** configuration options. New configuration values are only supported as YAML-based configuration. All users are encouraged to migrate to [YAML configuration properties](installation-netconfig.html#net-yaml).

You can override these configurations using Application Settings in the Azure portal, or in your application's *web.config* file. You can also modify the following configurations.

> **Example:** To change a the default log level, change the configuration setting `LogLevel` by either adding `CONTRAST_LogLevel` in the Azure portal or adding a `Contrast.LogLevel` application setting in the *web.config* file.  

### Identification and tagging

| Parameter           | Description | 
|---------------------|-------------|
| ServerName          | Customizes the display name used by the Contrast UI for the server running the .NET agent. If the **ServerName** configuration setting isn't present, the server name is the **Resource Group** - **Region** of your application (e.g.,`MyResourceGroup - US East`). 
| ServerEnvironment   | Set the environment value sent to Contrast when servers are created. Valid `ServerEnvironment` values are `DEVELOPMENT`, `QA` or `PRODUCTION` (case insensitive). The default value is `QA`. This does not affect servers that already exist in Contrast.
| ServerTags          | Controls free-form tags sent to Contrast for servers; you can use tags to search for servers in the Contrast interface. See the article on [Application-Specific Settings](installation-netconfig.html#appname) for details on tagging applications, libraries and vulnerabilities.
| AppName    | Change the application name sent to the Contrast interface for this application. The default is your Azure App Service application name as set on Azure Portal.       
| AppVersion | Controls the application version tag sent to Contrast.
| AppGroup   | Specifies the to which group this application will be added in the Contrast interface, if this application isn't  already a member of a group.        
| AppTags    | Controls free-form tags sent to Contrast for the application; you can use tags to search for specific applications in the Contrast UI.      
| LibraryTags   | Controls free-form tags sent to Contrast for the application's libraries; you can use tags to search for specific libraries in the Contrast UI.      
| FindingTags   | Controls free-form tags sent to Contrast for the application's vulnerabilities; you can use tags to search for specific vulnerabilities in the Contrast UI.      

### Diagnostics

| Parameter           | Description | 
|---------------------|-------------|
| LogLevel            | More detailed levels of logging degrade performance, but can generate useful information for debugging Contrast. The logging level is configured in [Server Settings](user-servers.html#settings) in the Contrast UI by default; however, you can also configure it at the agent level. Options are `Error`, `Warn`, `Info`, `Debug` and `Trace`.  


### Performance tweaks

| Parameter           | Description | 
|---------------------|-------------|
| StackTraceConfig                  | Limits stack traces captured by the agent. This is configured in [Server Settings](user-servers.html#settings) in the Contrast UI by default. The default is `Full`. <li>`Full`: Captures all stack traces with file and line number information. Deployments must include *.PDB* files for line number information.</li><li>`Limited`: Better performance; captures all stack traces but no file and line number information. Best used for builds without debugging symbols (*.PDB* files).</li><li>`Minimal`: Best performance; doesn't capture intermediate propagator stack traces, or file and line information. Best used for Release builds and Production environments.</li> |
| ThreadAnalysis                    | Useful for more thorough analysis if your application manually creates background threads. Choose `Web` (default) or `Full`. Web follows data flow through normal web operations. Full instruments all threading operations which adds overhead. 


