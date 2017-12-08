<!--
title: ".NET Agent Configuration"
description: "Guide to configuring .NET agent settings"
tags: "installation microsoft agent configuration settings .Net"
-->

The Contrast configuration file *DotnetAgentService.exe.config* contains several settings that you can modify to change the .NET agent's behavior. Note that in all cases, configuration values in the agent configuration file will override any configuration values with the same name specified in the Contrast interface (e.g. logging level, sampling, and stack trace configuration).

## General
| Parameter                | Description                              | Version |
| ------------------------ | ---------------------------------------- | ------- |
| AutoUpdateBehavior       | <ul><li>Determines if the agent automatically updates to a newer version when a newer version is available on Contrast. The default value is *Daily*.</li><li>*Daily*: the agent checks for a new version on service start and every 24 hours afterwards.</li><li>*Startup*: the agent will only check for and install updates on service start</li><li>*Disabled*: the agent will check for but not install any updates.</li></ul> | 4.6+     |
| RestartIISOnConfigChange | <ul><li>Restarts IIS in the background if any of the following configuration settings are changed: *ProcessBlacklist*, *ProcessWhitelist*, *ProfilerBehavior* or *ResponseUrlWhiteListRegex*.</li><li>The default value is *true*. If set to *false*, you must restart IIS for changes to the noted configuration settings to take effect.</li></ul> | 3.2.7+  |



## Communication

| Parameter                   | Description                              | Version |
| --------------------------- | ---------------------------------------- | ------- |
| TeamServerUrl               | Overrides the Contrast URL that's packaged with the agent. This can be useful for networks that proxy the information. | All     |
| *ProxyAuth*, *ProxyAddress* | Controls the proxy (if any) used by the agent to connect to the Contrast interface.  Proxy credentials, if any, are stored in a separate **DotnetAgent.Protected** section as described below | All     |
| EncryptProtectedSettings    | Controls whether *ProxyUser* and *ProxyPass* settings are encrypted.  See *Proxy Credentials* below. | 4.2.0+  |
| TlsVersion                  | <ul><li>Controls the version of TLS that the agent uses to communicate with the Contrast interface.</li><li>Valid TlsVersion values include *Tls*, *Tls11* and *Tls12*.</li><li> Agent default behavior is *SecurityProtocolType.Tls* &#124; *SecurityProtocolType.Tls11* &#124; *SecurityProtocolType.Tls12*</li></ul> | 3.3.6+  |


### Proxy Credentials
To avoid storing sensitive proxy credentials in plain text, the agent stores them in the **DotnetAgent.Protected** section which is encrypted on startup.  To change existing credentials, delete the contents of the section and manually add the keys.  They will be re-encrypted on the next agent service startup.  To turn off this encryption use the set *EncryptProtectedSettings* setting above.

| Parameter | Description            | Version |
| --------- | ---------------------- | ------- |
| ProxyUser | Username for the proxy | All     |
| ProxyPass | Password for the proxy | All     |



## Display Customization and Tagging

| Parameter           | Description                              | Version |
| ------------------- | ---------------------------------------- | ------- |
| ServerName          | Customizes the display name used by the Contrast interface for the server running the Contrast.NET agent. If the **ServerName** configuration setting is not present, the .NET agent will use the computer name for the server's display name. You can view the computer name by viewing the **System** properties in the Windows **Control Panel**. | 3.1.4+  |
| Contrast.AppVersion | Controls the application version tag sent to Contrast. | 3.3.6+  |
| Contrast.AppName    | Controls the application name sent to Contrast.        | 3.1.3+  |
| Contrast.AppGroup   | Specifies the group this application will be added to in the Contrast interface if this application is not already a member of a group. | 3.4.5+ |
| ServerEnvironment   | Controls the environment value sent to Contrast. Valid ServerEnvironment values are DEVELOPMENT, QA or PRODUCTION. The default value is QA. | 3.4.2+  |
| ServerTags          | Controls free form tags sent to Contrast for servers; tags can be used to query for servers in the Contrast interface. See the article on [Application settings](installation-netconfig.html#appname) for details on tagging Applications, Libraries, and Vulnerabilities. | 4.8.20+ |

> *Note*: Setting any of the `Contrast.*` (e.g. Contrast.AppVersion) parameters in the agent's configuration file will cause the agent to use the same parameter value for all applications that do **not** have that parameter set in their `web.config` file. See the article on [Application settings](installation-netconfig.html#appname) for more details. 


## Diagnostics

More detailed levels of logging degrade performance, but can generate useful information for debugging Contrast. The logging level is configured via [Server Settings](user-servers.html#settings) in the Contrast interface by default but it can also be configured at the agent level. 


| LogLevel | Controls                                 |
| -------- | ---------------------------------------- |
| Error    | Only log error conditions, such as unhandled exceptions |
| Warn     | *Error* messages and unexpected conditions that don't impact the agent |
| Info     | *Error* and *Warn* messages as well as general information about the agent's sensors (startup, shutdown, start and end of requests, etc.) |
| Debug    | *Info* messages and some high-level debugging information (e.g., number of vulnerabilities detected for a request) |
| Trace    | *Debug* messages as well as logging every trace event (e.g., *String.Concat*); this logging level greatly degrades performance |

<br />

| Parameter                 | Description                              | Version |
| ------------------------- | ---------------------------------------- | ------- |
| ShouldLogMethodSignatures | <ul><li> Controls logging of method signatures during CLR JIT compilation.</li><li> The default value is `false`. Set to `true` to enable method signature logging.</li><li> This setting has a noticeable impact on startup time but can help troubleshoot issues during application startup.</li></ul> | All     |



## Performance

| Parameter                                | Description                              |
| ---------------------------------------- | ---------------------------------------- |
| SamplingBaseline, SamplingFrequency, SamplingWindow | Enable and configure sampling mode. See [Sampling](admin-orgsettings.html#org-server) for more information. Configured via [Server Settings](user-servers.html#settings) in the Contrast interface by default. |
| StackTraceConfig                         | <ul>Limits stack traces captured by the agent. The default is **Full**.<li> **Full**: Captures all stack traces with file and line number information. Deployments must include *.PDB* files for line number information.</li><li> **Limited**: Better performance; captures all stack traces but without file and line number information. Best used for builds without debugging symbols (*.PDB* files).</li><li> **Minimal**: Best performance; doesn't capture intermediate propagator stack traces, no file and line information. Best used for Release builds and Production environments.</li><li>Configured via [Server Settings](user-servers.html#settings) in the Contrast interface by default.</ul> |



## Analysis

| Parameter                 | Description                              |
| ------------------------- | ---------------------------------------- |
| ResponseUrlWhiteListRegex | <ul><li> Controls the .NET agent's collection and analysis of response headers and bodies. </li><li> Responses aren't captured and are analyzed for request paths (*HttpRequest.Path*) that match this regex. </li><li>This setting is required to work around a known Microsoft bug in the .NET framework (*HttpModules*) with filters can cause resources such as ***WebResource.axd*** to return **0 bytes**. (This can result in 500 status responses for embedded resources, such as images.) </li><li> The default value for this setting is *WebResource.axd*.</li></ul> |
| ProcessBlacklist          | <ul><li>Controls the .NET agent's monitoring of application pools. </li><li> This setting's value should be set to a comma-separated list of application pool names that shouldn't be analyzed by Contrast.NET. </li><li> Contrast.NET should have no performance impact on applications that aren't analyzed due to this setting. </li><li> This list accepts `*` as a wildcard.</li></ul> |
| ProcessWhitelist          | <ul><li>Controls the .NET agent's monitoring of application pools. </li><li> This setting's value should be set to a comma-separated list of application pool names that should be analyzed by Contrast.NET. All other applications aren't monitored. </li><li> Contrast.NET should have no performance impact on applications that aren't analyzed due to this setting. </li><li> This list accepts `*` as a wildcard. </li></ul> |

See [Application Pool Filter](installation-netusage.html#iis) for more information on using ProcessBlacklist and ProcessWhitelist against IIS application pools. 

