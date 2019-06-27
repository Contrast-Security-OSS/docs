<!--
title: "Configuring Contrast .NET Core Agent on Azure App Service"
description: "Configurations and tweaks for customizing the Contrast .NET Core agent running on Azure App Service"
tags: "configuration .net Azure AppService netcore"
-->

## Configuration Methods

Configure the .NET Core agent for Azure App Service in the Azure Portal, a *web.config* file or a YAML configuration file. 

### Azure Portal

You can configure the .NET Core agent using the environment variable convention of agent configuration. Add all settings to the **Application Settings** section of the **Configuration** blade in the Azure Portal using [environment variable syntax](installation-netconfig.html#environment-variables).

> **Examples:** <br>
 * To change the agent's logging level (`agent.logger.level`) to trace, add a setting with key `CONTRAST__AGENT__LOGGER__LEVEL` and value `TRACE`. <br>
 * To change the agent's server name (`server.name`) to "MyServer", add a setting with key `CONTRAST__SERVER__NAME` and value `MyServer`.

### web.config file

You can also specify specific `application` configuration options in an application's *web.config* file. For the agent to pick up customized application settings, you must place these settings in the application *web.config* file's root configuration `appSettings` section. See [application-specific settings](installation-netconfig.html#appname) for more details.

### YAML file

Instead of setting individual options in the Azure Portal, you may use a YAML configuration file containing Contrast settings. First, upload the file to your Azure web application by including it in your application deployment or using the Kudu console. Then add an application setting, `CONTRAST_CONFIG_PATH`, that points to this file.

> **Example:** To use the *contrast_security.yaml* file in the root of your application, add an application setting with key `CONTRAST_CONFIG_PATH` and value *D:\Home\site\wwwroot\contrast_security.yaml*. Application files in Azure App Service are deployed to *D:\home\site\wwwroot*.

## Common Configuration Options

The following tables outline some common configuration settings for Azure App Service and their default values. These settings can be included in the YAML configuration file or in Application Settings using environment variable syntax.  This is a subset of all configurations that are available when using [YAML configuration properties](installation-netconfig.html#netcore-yaml).

### Identification and tagging

| Parameter           | Description |
|---------------------|-------------|
| server.name          | Customizes the display name used by the Contrast UI for the server running the .NET agent. If this configuration setting isn't present, the server name is the **Resource Group** - **Region** of your application (e.g.,`MyResourceGroup - US East`).
| server.environment   | Set the environment value sent to Contrast when servers are created. Valid values are `DEVELOPMENT`, `QA` or `PRODUCTION` (case insensitive). The default value is `QA`. This does not affect servers that already exist in Contrast.
| server.tags          | Controls free-form tags sent to Contrast for servers; you can use tags to search for servers in the Contrast interface. See the article on [Application-Specific Settings](installation-netconfig.html#appname) for details on tagging applications, libraries and vulnerabilities.
| application.name    | Change the application name sent to the Contrast interface for this application. The default is your Azure App Service name as seen in the Azure Portal.
| application.version | Controls the application version tag sent to Contrast.  Default is none.
| application.group   | Specifies the to which group this application will be added in the Contrast interface, if this application isn't already a member of a group.  Default is none.
| application.tags    | Controls free-form tags sent to Contrast for the application; you can use tags to search for specific applications in the Contrast UI.  Default is none.
| inventory.tags   | Controls free-form tags sent to Contrast for the application's libraries; you can use tags to search for specific libraries in the Contrast UI.  Default is none.
| assess.tags   | Controls free-form tags sent to Contrast for the application's vulnerabilities; you can use tags to search for specific vulnerabilities in the Contrast UI.  Default is none.

### Diagnostics

| Parameter           | Description |
|---------------------|-------------|
| agent.logger.level            | More detailed levels of logging degrade performance, but can generate useful information for debugging Contrast. The logging level is configured in [Server Settings](user-servers.html#settings) in the Contrast UI by default; however, you can also configure it at the agent level. Options are `Error`, `Warn`, `Info`, `Debug` and `Trace`.


### Performance tweaks

| Parameter           | Description |
|---------------------|-------------|
| assess.stacktraces  | Limits stack traces captured by the agent. This is configured in [Server Settings](user-servers.html#settings) in the Contrast UI by default. The default is `ALL`. <li>`ALL`: Captures all stack traces with file and line number information. Deployments must include *.PDB* files for line number information.</li><li>`SOME`: Better performance; captures all stack traces but no file and line number information. Best used for builds without debugging symbols (*.PDB* files).</li><li>`NONE`: Best performance; doesn't capture intermediate propagator stack traces, or file and line information.  Stack traces for sources and sinks are still captured. Best used for Release builds and Production environments.</li> |
| assess.event_detail    | Control the values captured by Assess vulnerability events. `Full` captures most values by calling ToString on objects, which can provide more info but causes increased memory usage. `Minimal` (default) has better performance as it only captures String type objects as strings and uses type name for other object type values.
| agent.dotnet.thread_analysis    | Useful for more thorough analysis if your application manually creates background threads. Choose `Web` (default) or `Full`. Web follows data flow through normal web operations. Full instruments all threading operations which adds overhead.

