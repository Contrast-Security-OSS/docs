<!--
title: ".NET Agent Configuration"
description: "Guide to configuring .NET agent settings"
tags: "installation microsoft agent configuration settings .Net"
-->

The Contrast configuration file ***DotnetAgentService.exe.config*** contains several settings that you can modify to change the .NET agent's behavior. Starting with version 3.2.7, the .NET Agent automatically starts using new configuration values when this file is edited. Prior to 3.2.7, you must restart the .NET Agent's service in order for configuration changes to take effect. 


## General

| Parameter                                             | Description                                                                                                                             |
|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| TeamServerUrl                                         | Overrides the TeamServer URL that's packaged with the agent. This can be useful for networks that proxy the information. |
| *ProxyAuth*, *ProxyUser*, *ProxyPass*, *ProxyAddress* | Controls the proxy (if any) to be used by the agent to connect to TeamServer. |
| TlsVersion                                            | <ul><li>Controls the version of TLS the agent uses to communicate with TeamServer.</li><li>Valid TlsVersion values include *Tls*, *Tls11* and *Tls12*.</li><li> Agent default behavior is *SecurityProtocolType.Tls* &#124; *SecurityProtocolType.Tls11* &#124; *SecurityProtocolType.Tls12*</li></ul> |
| RestartIISOnConfigChange                              | <ul><li>Restarts IIS in the background if any of the following configuration settings are changed: *ProcessBlacklist*, *ProcessWhitelist*, *ProfilerBehavior* or *ResponseUrlWhiteListRegex*.</li><li>The default value is *true*. If set to *false*, you must restart IIS for changes to the noted configuration settings to take effect.</li></ul> | 
| AutoUpdateEnabled                                     | <ul><li> Controls whether or not the agent automatically updates to a newer version if a newer version is available on TeamServer.</li><li> The default value is *true*. If set to *false*, the agent doesn't automatically update.</li></ul>  | 
| Contrast.AppVersion                                   | <ul><li>** Applies to Contrast Agent v.3.3.6 and above.** </li><li> Controls the application version tag sent to TeamServer.</li><li>Note that setting *Contrast.AppVersion* in the agent's configuration file uses the same version tag for all applications that do NOT have *Contrast.AppVersion* set in their *web.config* file. See [Application-Specific Settings](installation-netconfig.html#appname) for more details.</li></ul> |


## Diagnostics
More detailed levels of logging degrade performance but may generate useful information for debugging Contrast. The default value is *warn*. 

| LogLevel | Controls the logging level |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Error    | Only log error conditions, such as unhandled exceptions                                                                                                                      |
| Warn     | Error messages plus unexpected conditions that don't impact the agent                                                                                                         |
| Info     | Error and warn messages plus general information about the agent's sensors (startup, shutdown, start and end of requests, etc.)                                                     |
| Debug    | All of the above plus some high-level debugging information (e.g. number of vulnerabilities detected for a request)                                                             |
| Trace    | All of the above as well as logging every trace event (e.g. *String.Concat*); this logging level greatly degrades performance                                                       |

<br />

| Parameter                                                 | Description
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ShouldLogMethodSignatures    | <ul><li> Controls logging of method signatures during CLR JIT compilation.</li><li> The default value is ```false```. Set to ```true``` to enable method signature logging.</li><li> Note that this setting has a noticeable impact on startup time.</li></ul> |
| ShouldLogModifiedIL    | <ul><li>Controls logging of the IL of instrumented methods during CLR JIT compilation.</li><li> The default value is ```false```. Set to ```true``` to enable instrumented method IL logging. </li><li> Note that this setting has a noticeable impact on startup time.</li></ul> |


## Performance

| Parameter                                                 | Description                                                                             |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------------|
| *SamplingBaseline*, *SamplingFrequency*, *SamplingWindow* | Enable and configure sampling mode.                                                    |
| *StackTraceConfig*                                      | <ul><li>Limits stack traces captured by the agent. Default is **Full**.</li><li> **Full** (default): Capture all stack traces with file and line number information. Note that deployments must include .PDB files for line number information.</li><li> **Limited**: Better performance. Capture all stack traces but without file and line number information. Best used for builds without debugging symbols (.PDB files).</li><li> **Minimal**: Best performance. Doesn't capture intermediate propagator stack traces, no file and line information. Best used for Release builds and production environments.</li></ul> |
      

## Analysis

| Parameter                                                 | Description                                                                             |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------------|
| *UseDuplex*                                         | <ul><li>Controls the instrumentation engine used by the .NET agent.</li><li> Enabling Duplex mode allows the .NET Agent to be used alongside other profiling tools. Protect features require the use of Duplex mode.</li><li> The default value is *false*. If set to *true*, the .NET Agent Service must be restarted by the user in order for changes to the noted configuration settings to take effect. </li><li> Note that Duplex mode only analyzes applications running on CLR4.</li></ul>|
| *ProfilerBehavior*                                         | <ul><li>Controls the data flow engine used and the amount of instrumentation performed by the .NET agent.</li><li> Note that this setting is ignored by Duplex mode. </li></ul> |
| *EnableInstrumentationOptimizations*                       | <ul><li>**Applies to Contrast Agent v.3.2.9 and above.** </li><li> Optionally disable code optimizations under instrumentation-based flow analysis when ProfilerBehavior=3 (Instrumentation mode). </li><li> The default is ```true```. Set to ```false``` to disable. </li></ul>


**1. legacyCasModel Support**

The agent uses profiling Enter-Leave events for data flow analysis and performs minimal instrumentation. This mode supports web applications with the ```<trust legacyCasModel="true">``` configuration. There are a few scenarios where a `reflected-xss` false negative can occur, depending upon the encoding method used.

**2. Enter-Leave Data Flow** 

The agent uses profiling Enter-Leave events for data flow analysis and instruments several encoding methods to return new objects. This mode is more accurate than **mode 1**. 

**3. Instrumentation**

This is the **default** value. The agent uses instrumentation for data flow analysis against web applications running on CLR4 (.NET 4+). For CLR4 applications, Vulnerability stack traces include line numbers if .PDB files are present in the application's bin directory. Instrumentation mode is more stable and has comparable performance. 

**4. Instrumentation With Logging**

This mode has the same behavior as **mode 3**, but also enables Enter-Leave events for .NET 4.0 applications for additional logging. You can specify this additional logging in the policy file's ```<logging>``` section. Note that this mode is much slower than **mode 3** and is intended only for debugging. 

<br>

| Parameter                                                 | Description                                                                             |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------------|
| *ResponseUrlWhiteListRegex*                                         | <ul><li> Controls the .NET agent's collection and analysis of response headers and bodies. </li><li> Responses aren't captured and are analyzed for request paths (*HttpRequest.Path*) that match this regex. </li><li>This setting is required to work around a known Microsoft bug in the .NET framework (*HttpModules*) with filters can cause resources such as ***WebResource.axd*** to return **0 bytes**. (This can result in 500 status responses for embedded resources, such as images.) </li><li> The default value for this setting is: ***WebResource.axd***</li></ul> |
| *ProcessBlacklist*                                         | <ul><li>Controls the .NET agent's monitoring of application pools. </li><li> This setting's value should be set to a comma-separated list of application pool names that shouldn't be analyzed by Contrast.NET. </li><li> Contrast.NET should have no performance impact on applications that aren't analyzed due to this setting. </li><li> This list accepts ```*``` as a wildcard.</li></ul>|
| *ProcessWhitelist*                                         | <ul><li>Controls the .NET agent's monitoring of application pools. </li><li> This setting's value should be set to a comma-separated list of application pool names that should be analyzed by Contrast.NET. All other applications aren't monitored. </li><li> Contrast.NET should have no performance impact on applications that aren't analyzed due to this setting. </li><li> This list accepts ```*``` as a wildcard. </li></ul>|


## More Information

* [Getting .NET Agent Logs](troubleshooting-net.html#net-logs)

* [Sampling](admin-orgsettings.html#org-server)

* [.NET Application Pool Filtering](installation-netconfig.html#pool)

* [Application-Specific Settings](installation-netconfig.html#appname)
