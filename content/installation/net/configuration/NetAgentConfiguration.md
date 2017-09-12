<!--
title: ".NET Agent Configuration"
description: "Guide to configuring .NET agent settings"
tags: "installation microsoft agent configuration settings .Net"
-->

The Contrast configuration file *DotnetAgentService.exe.config* contains several settings that you can modify to change the .NET agent's behavior. Starting with version 3.2.7, the .NET agent automatically starts using new configuration values when this file is edited.  


## General

| Parameter                                             | Description                                                                                                                             |
|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| TeamServerUrl                                         | Overrides the Contrast URL that's packaged with the agent. This can be useful for networks that proxy the information. |
| *ProxyAuth*, *ProxyUser*, *ProxyPass*, *ProxyAddress* | Controls the proxy (if any) used by the agent to connect to the Contrast interface. |
| TlsVersion                                            | <ul><li>Controls the version of TLS that the agent uses to communicate with the Contrast interface.</li><li>Valid TlsVersion values include *Tls*, *Tls11* and *Tls12*.</li><li> Agent default behavior is *SecurityProtocolType.Tls* &#124; *SecurityProtocolType.Tls11* &#124; *SecurityProtocolType.Tls12*</li></ul> |
| RestartIISOnConfigChange                              | <ul><li>Restarts IIS in the background if any of the following configuration settings are changed: *ProcessBlacklist*, *ProcessWhitelist*, *ProfilerBehavior* or *ResponseUrlWhiteListRegex*.</li><li>The default value is *true*. If set to *false*, you must restart IIS for changes to the noted configuration settings to take effect.</li></ul> | 
| AutoUpdateEnabled                                     | <ul><li> Determines if the agent automatically updates to a newer version when a newer version is available on Contrast.</li><li> The default value is *true*. If set to *false*, the agent doesn't automatically update.</li></ul>  | 
| Contrast.AppVersion                                   | <ul><li>** Applies to Contrast Agent v.3.3.6 and above.** </li><li> Controls the application version tag sent to Contrast.</li><li>Setting *Contrast.AppVersion* in the agent's configuration file uses the same version tag for all applications that do **not** have *Contrast.AppVersion* set in their *web.config* file. See the article on [Application settings](installation-netconfig.html#appname) for more details.</li></ul> |


## Diagnostics

More detailed levels of logging degrade performance, but can generate useful information for debugging Contrast. The default value is *Warn*. 

| LogLevel | Controls|
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Error    | Only log error conditions, such as unhandled exceptions                                                                                                                      |
| Warn     | *Error* messages and unexpected conditions that don't impact the agent                                                                                                         |
| Info     | *Error* and *Warn* messages as well as general information about the agent's sensors (startup, shutdown, start and end of requests, etc.)                                                     |
| Debug    | *Info* messages and some high-level debugging information (e.g., number of vulnerabilities detected for a request)                                                             |
| Trace    | *Debug* messages as well as logging every trace event (e.g., *String.Concat*); this logging level greatly degrades performance                                                       |

<br />

| Parameter                                                 | Description
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ShouldLogMethodSignatures    | <ul><li> Controls logging of method signatures during CLR JIT compilation.</li><li> The default value is `false`. Set to `true` to enable method signature logging.</li><li> This setting has a noticeable impact on startup time.</li></ul> |


## Performance

| Parameter                                                 | Description                                                                             |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------------|
| *SamplingBaseline*, *SamplingFrequency*, *SamplingWindow* | Enable and configure sampling mode.                                                    |
| *StackTraceConfig*                                      | <ul>Limits stack traces captured by the agent. The default is **Full**.<li> **Full**: Captures all stack traces with file and line number information. Deployments must include *.PDB* files for line number information.</li><li> **Limited**: Better performance; captures all stack traces but without file and line number information. Best used for builds without debugging symbols (*.PDB* files).</li><li> **Minimal**: Best performance; doesn't capture intermediate propagator stack traces, no file and line information. Best used for Release builds and Production environments.</li></ul> |
      

## Analysis

| Parameter                                                 | Description                                                                             |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------------|
| *ResponseUrlWhiteListRegex*                               | <ul><li> Controls the .NET agent's collection and analysis of response headers and bodies. </li><li> Responses aren't captured and are analyzed for request paths (*HttpRequest.Path*) that match this regex. </li><li>This setting is required to work around a known Microsoft bug in the .NET framework (*HttpModules*) with filters can cause resources such as ***WebResource.axd*** to return **0 bytes**. (This can result in 500 status responses for embedded resources, such as images.) </li><li> The default value for this setting is *WebResource.axd*.</li></ul> |
| *ProcessBlacklist*                                         | <ul><li>Controls the .NET agent's monitoring of application pools. </li><li> This setting's value should be set to a comma-separated list of application pool names that shouldn't be analyzed by Contrast.NET. </li><li> Contrast.NET should have no performance impact on applications that aren't analyzed due to this setting. </li><li> This list accepts `*` as a wildcard.</li></ul>|
| *ProcessWhitelist*                                         | <ul><li>Controls the .NET agent's monitoring of application pools. </li><li> This setting's value should be set to a comma-separated list of application pool names that should be analyzed by Contrast.NET. All other applications aren't monitored. </li><li> Contrast.NET should have no performance impact on applications that aren't analyzed due to this setting. </li><li> This list accepts `*` as a wildcard. </li></ul>|


## More Information

* [Getting .NET Agent Logs](troubleshooting-net.html#net-logs)

* [Sampling](admin-orgsettings.html#org-server)

* [.NET Application Pool Filtering](installation-netconfig.html#pool)

* [Application-Specific Settings](installation-netconfig.html#appname)


