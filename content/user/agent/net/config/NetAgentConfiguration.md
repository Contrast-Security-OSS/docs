<!--
title: ".NET Agent Configuration"
description: "Guide to configuring .NET agent settings"
tags: "microsoft agent configuration settings .Net"
-->

The Contrast Service's configuration file (***DotnetAgentService.exe.config***) contains several settings that can be modified to change the .NET agent's behavior.  Starting with version 3.2.7, the .NET Agent will automatically start using new configuration values when this file is edited.  Prior to 3.2.7, the .NET Agent's service must be restarted in order for configuration changes to take effect. 


## General

| Parameter                                             | Description                                                                                                                             |
|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| TeamServerUrl                                         | This value will override the TeamServer URL that's packaged with the agent. This can be useful for networks that proxy the information. |
| *ProxyAuth*, *ProxyUser*, *ProxyPass*, *ProxyAddress* | Controls the proxy (if any) to be used by the agent to connect to TeamServer. |
| RestartIISOnConfigChange                              | Will restart IIS in the background if any of the following configuration settings are changed: *ProcessBlacklist*, *ProcessWhitelist*, *ProfilerBehavior*, *ResponseUrlWhiteListRegex*. The default value is *true*. If set to *false* then IIS must be restarted by the user in order for changes to the noted configuration settings to take effect. | 


## Diagnostics
More detailed levels of logging will degrade performance but may generate useful information for debugging Contrast. The default value is *warn*. 

| LogLevel | Controls the *logging* level |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| error    | Only log error conditions such as un-handled exceptions.                                                                                                                        |
| warn     | Error messages plus unexpected conditions that do not impact the agent.                                                                                                         |
| info     | Error and warn messages plus general information about the agent's sensors (startup, shutdown, start/end of requests, etc.)                                                     |
| debug    | All of the above plus some high-level debugging information (e.g. number of vulnerabilities detected for a request).                                                             |
| trace    | All of the above and every trace event is logged (e.g. *String.Concat*). This logging level greatly degrades performance.                                                       |

<br />

| Parameter                                                 | Description
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ShouldLogMethodSignatures    | Controls logging of method signatures during CLR JIT compilation. The **default** value is ```false```. Set to ```true``` to enable method signature logging (note that this setting has a noticeable impact on startup time.)  |
| ShouldLogModifiedIL    | Controls logging of the IL of instrumented methods during CLR JIT compilation. The **default** value is ```false```. Set to ```true``` to enable instrumented method IL logging (note that this setting has a noticeable impact on startup time.)  |

## Performance

| Parameter                                                 | Description                                                                             |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------------|
| *SamplingBaseline*, *SamplingFrequency*, *SamplingWindow* | Enable and configure *sampling mode*.                                                    |
| *StackTraceConfig*                                      | Limits stack traces captured by the agent. Default is **Full**.<br/> - **Full** (default): Capture all stack traces with file and line number information.  **Note:** deployments must include .PDB files for line number information.<br/> - **Limited**: Better Performance.  Capture all stack traces but without file and line number information.  Best used for builds without debugging symbols (.PDB files).<br/> - **Minimal**: Best performance.  Does not capture intermediate propagator stack traces, no file and line information.  Best used for Release builds and production environments. |

        

## Analysis

| Parameter                                                 | Description                                                                             |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------------|
| *ProfilerBehavior*                                         | Controls the data flow engine used and amount of instrumentation performed by the .NET agent |

<br/>

1. **legacyCasModel Support**

   The agent uses profiling Enter-Leave events for data flow analysis and performs minimal instrumentation.  This mode supports web applications with the ```<trust legacyCasModel="true">``` configuration.  This mode has a small number of scenarios where a reflected-xss false negative can occur depending upon the encoding method used.

2. **Enter-Leave Data Flow** 

   This is the **default** value.  The agent uses profiling Enter-Leave events for data flow analysis and instruments several encoding methods to return new objects.  This mode is more accurate than **1** above. 

3. **Instrumentation**

   The agent uses instrumentation for data flow analysis against web applications running on CLR4 (.NET 4+) and Enter-Leave events against CLR2 (.NET2-3.5) applications.  For CLR4 applications, Vulnerability stack traces will include line numbers if .PDB files are present in the application's bin directory.  Instrumentation mode is more stable and has comparable performance. 

4. **Instrumentation with Logging**

   This mode has the same behavior as **3** but also enables Enter-Leave events for .NET 4.0 applications for additional logging. This additional logging can be specified in the policy file's ```<logging>``` section. Note that this mode is much slower than **3** and is intended only for debugging. 

<br>

| Parameter                                                 | Description                                                                             |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------------|
| *ResponseUrlWhiteListRegex*                                         | Controls the .NET agent's collection and analysis of response headers and bodies. Responses are not captured and are analyzed for request paths (*HttpRequest.Path*) that match this regex. This setting is required to work around a known Microsoft bug in the .NET framework: *HttpModules* with filters can cause resources such as ***WebResource.axd*** to return **0 bytes** (which can result in 500 status responses for embedded resources such as images). The default value for this setting is: ***WebResource.axd*** |
| *ProcessBlacklist*                                         | Controls the .NET agent's monitoring of *application pools*. This setting's value should be set to a comma-separated list of application pool usernames that should not be analyzed by Contrast.NET. Contrast.NET should have no performance impact on applications that are not analyzed due to this setting. This list accepts ```*``` as a wildcard.|
| *ProcessWhitelist*                                         | Controls the .NET agent's monitoring of *application pools*. This setting's value should be set to a comma-separated list of application pool usernames that should be analyzed by Contrast.NET. All other applications will not be monitored. Contrast.NET should have no performance impact on applications that are not analyzed due to this setting. This list accepts ```*``` as a wildcard. |


## See Also

[Getting .NET Agent Logs](user_netinstall.html#logs)

[Sampling](user_tsfaq.html#sample)

[.NET Application Pool Filtering](user_netconfig.html#pool)
