<!--
title: ".NET Agent Configuration"
description: "Guide to configuring .NET agent settings"
-->

The Contrast Service's configuration file (***DotnetAgentService.exe.config***) contains several settings that can be modified to change the .NET agent's behavior.


## General

| Parameter                                             | Description                                                                                                                             |
|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| TeamServerUrl                                         | This value will override the TeamServer URL that's packaged with the agent. This can be useful for networks that proxy the information. |
| *ProxyAuth*, *ProxyUser*, *ProxyPass*, *ProxyAddress* | Controls the proxy (if any) to be used by the agent to connect to TeamServer.                                                           |


## Diagnostics
More detailed levels of logging will degrade performance but may generate useful information for debugging Contrast. The default value is *warn*. 

| LogLevel | Controls the *logging* level. |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| error    | Only log error conditions such as un-handled exceptions.                                                                                                                        |
| warn     | Error messages plus unexpected conditions that do not impact the agent.                                                                                                         |
| info     | Error and warn messages plus general information about the agent's sensors (startup, shutdown, start/end of requests, etc.)                                                     |
| debug    | All of the above plus some high-level debugging information (e.g. number of vulnerabilities detected for a request)                                                             |
| trace    | All of the above and every trace event is logged (e.g. *String.Concat*). This logging level greatly degrades performance.                                                       |

## Performance

| Parameter                                                 | Description                                                                             |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------------|
| *SamplingBaseline*, *SamplingFrequency*, *SamplingWindow* | Enable and configure *sampling mode*                                                    |
| *StackTraceDepth*                                         | Limits the number of stack trace frames captured by the agent. Default value is **20**. |


## Analysis

| Parameter                                                 | Description                                                                             |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------------|
| *ResponseMode*                                         | Controls the .NET agent's collection and analysis of response headers and bodies. |

<br>
1. **Response Analysis is Disabled**

   This improves agent performance **~10-15%**. This setting disables the following rules:  
  * autocomplete 
  * cache controls 
  * clickjacking  
  * HTTP and secure cookie flags 
  * HTTP authentication 
  * parameter pollution 
  * session rewriting 

2. **Contrast.NET Collects Response Headers and Full Response Body** 

   All rules are enabled. This is the **default** value.  

3. **Contrast.NET Collects Only Response Headers**

   The response body is not captured. This setting offers a small performance improvement. This setting disables the following rules: 
  * autocomplete 
  * clickjacking 
  * parameter pollution 

| Parameter                                                 | Description                                                                             |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------------|
| *ResponseUrlWhiteListRegex*                                         | Controls the .NET agent's collection and analysis of response headers and bodies. Responses are not captured and are analyzed for request paths (*HttpRequest.Path*) that match this regex. This setting is required to work around a known Microsoft bug in the .NET framework: *HttpModules* with filters can cause resources such as ***WebResource.axd*** to return **0 bytes** (which can result in 500 status responses for embedded resources such as images). The default value for this setting is: ***WebResource.axd*** |
| *ProcessBlacklist*                                         | Controls the .NET agent's monitoring of *application pools*. This setting's value should be set to a comma-separated list of application pool usernames that should not be analyzed by Contrast.NET. Contrast.NET should have no performance impact on applications that are not analyzed due to this setting. |



## See Also

[Getting .NET Agent Logs](user_netfaq.html#logs)

[Sampling](user_tsfaq.html#sample)

[.NET Application Pool Blacklist](user_netconfig.html#pool)
