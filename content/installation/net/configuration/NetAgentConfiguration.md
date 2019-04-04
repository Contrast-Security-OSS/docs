<!--
title: ".NET Agent Configuration"
description: "Guide to configuring .NET agent settings"
tags: "installation microsoft agent configuration settings .Net"
-->

The Contrast configuration file *DotnetAgentService.exe.config* contains several settings that you can modify to change the behavior of the .NET agent for Windows. In all cases, configuration values in the agent configuration file will override any configuration values that have the same name specified in the Contrast UI (e.g., logging level, sampling and stack trace configuration).

> **Note:** These configuration values are considered legacy configuration options. New configuration values will only be supported via YAML-based configuration. All users are encouraged to migrate to [YAML configuration properties](installation-netconfig.html#net-yaml).

## General

| Parameter                | Description                              | Version |
| ------------------------ | ---------------------------------------- | ------- |
| AutoUpdateBehavior       | Determines if the agent automatically updates to a newer version when a newer version is available on Contrast. The default value is **Daily**.<li>**Daily**: The agent checks for a new version on service start and every 24 hours afterwards.</li><li>**Startup**: The agent only checks for and installs updates on service start</li><li>**Disabled**: The agent checks for, but doesn't install, any updates.</li> | 4.6+     |
| OverrideExistingProfiler |   Due to .NET Profiling API technology limitations, only one program can use it at a time. This API is commonly used by APM agents like NewRelic, AppDynamics or DynaTrace.  By default, this is set to "false"; the Contrast agent will fail to start if it detects another program using the .NET Profiling API so that the other program can continue working. If set to "true", Contrast will attempt to force itself to start, which will break the other agent.   | 18.3.4+ |
| RestartIISOnConfigChange | Contrast will automatically restart IIS in the background when any configuration settings that require IIS restart are changed. Changes that enable or disable Assess or Defend mode, add security controls, or change process whitelist or blacklist require restart. These changes can come from changing the application *config* file or from the Contrast website. The default value is "true". If set to "false", you must restart IIS for changes to the given configuration settings to take effect. | 3.2.7+  |
| RouteDiscoveryEnabled   | Turn on and off the route coverage collection feature.  The default is "true".  If set to "false", routes will not be collected for supported .NET frameworks. | 18.8.23


## Communication

| Parameter                   | Description                              | Version |
| --------------------------- | ---------------------------------------- | ------- |
| TeamServerUrl               | Overrides the Contrast URL that's packaged with the agent. This can be useful for networks that proxy the information. | All     |
| ProxyAuth, ProxyAddress | Controls the proxy used by the agent (if any) to connect to the Contrast interface. Proxy credentials (if applicable) are stored in a separate *DotnetAgent.Protected* section as described below. | All     |
| EncryptProtectedSettings    | Controls whether `ProxyUser` and `ProxyPass` settings are encrypted. See the **Proxy Credentials** section below. | 4.2.0+  |
| TlsVersion                  | Controls the version of TLS that the agent uses to communicate with the Contrast interface. Valid `TlsVersion` values include `Tls`, `Tls11` and `Tls12`. Agent default behavior is `SecurityProtocolType.Tls` &#124; `SecurityProtocolType.Tls11` &#124; `SecurityProtocolType.Tls12`. | 3.3.6+  |

### Proxy credentials

To avoid storing sensitive proxy credentials in plain text, the agent stores them in the *DotnetAgent.Protected* section which is encrypted on startup. To change existing credentials, delete the contents of the section and manually add the keys. They will be re-encrypted on the next agent service startup. To turn off this encryption, use the set `EncryptProtectedSettings` setting given in the previous section.

| Parameter | Description            | Version |
| --------- | ---------------------- | ------- |
| ProxyUser | Username for the proxy | All     |
| ProxyPass | Password for the proxy | All     |

## Display Customization and Tagging

| Parameter           | Description                              | Version |
| ------------------- | ---------------------------------------- | ------- |
| ServerName          | Customizes the display name used by the Contrast interface for the server running the .NET agent. If the **ServerName** configuration setting is not present, the .NET agent will use the computer name for the server's display name. You can view the computer name by viewing the **System** properties in the Windows **Control Panel**. | 3.1.4+  |
| Contrast.AppVersion | Controls the application version tag sent to Contrast. | 3.3.6+  |
| Contrast.AppGroup   | Specifies the group to which this application will be added in the Contrast UI, if this application is not already a member of a group. | 3.4.5+ |
| ServerEnvironment   | Controls the environment value sent to Contrast when servers are created. Valid `ServerEnvironment` values are `DEVELOPMENT`, `QA` or `PRODUCTION` (case insensitive). The default value is `QA`. This does not affect servers that already exist in Contrast. | 3.4.2+  |
| ServerTags          | Controls free-form tags sent to Contrast for servers; you can use tags to search for servers in the Contrast interface. See the article on [Application-Specific Settings](installation-netconfig.html#appname) for details on tagging applications, libraries and vulnerabilities. | 4.8.20+ |

> **Note:** Setting any of the `Contrast.*` (e.g., Contrast.AppVersion) parameters in the agent's configuration file will cause the agent to use the same parameter value for all applications that do **not** have that parameter set in their *web.config* file. See the article on [Application-Specific Settings](installation-netconfig.html#appname) for more details. 

## Diagnostics

More detailed levels of logging degrade performance, but can generate useful information for debugging Contrast. The logging level is configured in [Server Settings](user-servers.html#settings) in the Contrast interface by default; however, you can also configure it at the agent level. 


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
| ShouldLogMethodSignatures | Controls logging of method signatures during CLR JIT compilation. The default value is "false". Set to "true" to enable method signature logging. This setting has a noticeable impact on startup time but can help troubleshoot issues during application startup. | All     |



## Performance

| Parameter                                | Description                              |
| ---------------------------------------- | ---------------------------------------- |
| SamplingBaseline, SamplingFrequency, SamplingWindow | Enable and configure sampling mode. Configured in [Server Settings](user-servers.html#settings) in the Contrast interface by default. See the article on [Sampling](admin-orgsettings.html#org-server) for more information. |
| StackTraceConfig                         | Limits stack traces captured by the agent. Configured in [Server Settings](user-servers.html#settings) in the Contrast interface by default. The default is **Full**. <li>**Full**: Captures all stack traces with file and line number information. Deployments must include *.PDB* files for line number information.</li><li>**Limited**: Better performance; captures all stack traces but without file and line number information. Best used for builds without debugging symbols (*.PDB* files).</li><li>**Minimal**: Best performance; doesn't capture intermediate propagator stack traces, no file and line information. Best used for Release builds and Production environments.</li> |
| ThreadAnalysis                           | Web (default) or Full.  Web follows data flow through normal web operations. Full instruments all threading operations which adds overhead. It can be used for more thorough analysis if your application manually creates background threads.
| DetectPotentialSecurityControls          | Set to "true" or "false" (default). All code signatures will be checked if they are a potential security validator or sanitizer, when their code is JIT compiled.  Detected signatures are reported to Contrast website and can be set as validators or sanitizers there.  Set it to "false" to slightly improve start-up performance or bypass issues with this feature.



## Analysis

| Parameter                 | Description                              |
| ------------------------- | ---------------------------------------- |
| ResponseUrlWhiteListRegex | Controls the .NET agent's collection and analysis of response headers and bodies. Responses aren't captured and are analyzed for request paths (*HttpRequest.Path*) that match this regex. This setting is required to work around a known Microsoft bug in the .NET framework (*HttpModules*) with filters can cause resources such as ***WebResource.axd*** to return **0 bytes**. (This can result in 500 status responses for embedded resources, such as images.) The default value is *WebResource.axd*. |
| ProcessBlacklist          | Controls the .NET agent's monitoring of application pools. Set the value of this setting to a comma-separated list of application pool names that the agent shouldn't analyze. The agent should have no performance impact on applications that aren't analyzed due to this setting. This list accepts `*` as a wildcard.</li></ul> |
| ProcessWhitelist          | Controls the .NET agent's monitoring of application pools. You should set the value of this setting to a comma-separated list of application pool names that the agent should analyze. The agent doesn't monitory any other applications. The agent should have no performance impact on applications that aren't analyzed due to this setting. This list accepts `*` as a wildcard. |

See the [Application Pool Filter](installation-netusage.html#iis) article for more information on using `ProcessBlacklist` and `ProcessWhitelist` against IIS application pools. 

