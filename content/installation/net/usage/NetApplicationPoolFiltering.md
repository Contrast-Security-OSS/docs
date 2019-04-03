<!--
title: "IIS Contrast .NET Agent Usage"
description: "Information on blacklisting/whitelisting application pools"
tags: "microsoft IIS pooling whitelist blacklist configuration agent installation .Net"
-->

The .NET agent automatically instruments all ASP.NET applications deployed to IIS by default. There is no action required to setup instrumentation of IIS-hosted applications beyond installing the .NET agent and ensuring the agent's background Windows is running. 

Users might want to exclude some applications from instrumentation for either of the following reasons: 
* You don't need to gather security, architecture and library information for excluded applications. 
* The applications need to avoid Contrast's performance overhead. (This is especially important for resource-constrained servers.)

In either case, you can use the .NET agent's application pool filtering feature. 

## Application Pool Filtering 

Web applications hosted on IIS run on application pools. If you need to disable the .NET agent for specific application pools on an instance of IIS, configure a `agent.dotnet.app_pool_blacklist`. When an application pool is blacklisted, the agent won't attach to any applications using that application pool, and there should be no performance impact for those applications.

Whitelisting and blacklisting are based on the application pool *name*. Application pool blacklists and whitelists also accept `*` as a variable-length wildcard. ("AppPool*" will match "AppPool1", "AppPool_arb", etc.)

>**Note:** Blacklisting an application takes precedence over whitelisting. Application pools that satisfy both lists won't be analyzed.

### Find an Application Pool 

You can find the application pool that's running an application using the following methods:

* Internet Information Services (IIS) Manager
* *AppCmd.exe*
* Contrast .NET Logs

Use **IIS Manager**: 

* Start IIS Manager: *%windir%\system32\inetsrv\InetMgr.exe*.
* Select a web application.
* Click **Basic Settings**.
* The application pool name is displayed in a form field. (See the image below.)

<a href="assets/images/KB3-e05_1.jpg" rel="lightbox" title="Application Pool Name"><img class="thumbnail" src="assets/images/KB3-e05_1.jpg"/></a>


Use ***AppCmd.exe***: 

* Run *cmd.exe* as an Administrator.
* Navigate to *C:\Windows\System32\inetsrv*.
* Enter the command `appcmd list apps`.
* A list of applications and their associated application pools appear. (See the image below.)

<a href="assets/images/KB3-e05_2.jpg" rel="lightbox" title="Application List"><img class="thumbnail" src="assets/images/KB3-e05_2.jpg"/></a>


Use **Contrast .NET Logs**: 

* Start the Contrast .NET agent.
* Browse to an application.
* In Windows, navigate to *C:\ProgramData\Contrast\dotnet\LOGS*.
* Open the most recent **Profiler** log (*Profiler_[AppPool]_XXXXXXXX_XX_XX_XX_XXX_XXXXX.log*).
* The application pool name is on the line that starts with **ApplicationPool Name:**.

## Blacklist an Application Pool

To disable the agent for a specific application, populate `agent.dotnet.app_pool_blacklist` with the appropriate application pool in *C:\ProgramData\Contrast\dotnet\contrast_security.yaml*:

```
# Comma-separated list of application pools ignored by Contrast
agent:
  dotnet:
    app_pool_blacklist: ExampleAppPoolName
```

## Whitelist an Application Pool 

If you need to only enable the agent for specific applications hosted by IIS, configure `agent.dotnet.app_pool_whitelist` to only analyze certain application pools. If an application pool is whitelisted, the agent analyzes the matching pools. There should be no performance impact for any other applications.

To enable the agent for only specific application pools, populate `agent.dotnet.app_pool_whitelist` with the appropriate application pool in *C:\ProgramData\Contrast\dotnet\contrast_security.yaml*:

```
# Comma-separated list of application pools exclusively profiled by Contrast
agent:
  dotnet:
    app_pool_whitelist: ExampleAppPoolName
```

For more information on the standard configuration for the agent, see the [Configuration Overview](installation-netconfig.html#overview).



