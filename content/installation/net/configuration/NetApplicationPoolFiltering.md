<!--
title: ".NET Application Pool Filtering"
description: "Information on blacklisting/whitelisting application pools"
tags: "microsoft IIS pooling whitelist blacklist configuration agent installation .Net"
-->

Web applications hosted on IIS run on application pools. If you need to disable the Contrast.NET agent for specific application pools on an instance of IIS, configure a `ProcessBlacklist`. When an application pool is blacklisted, the agent won't attach to any applications using that application pool, and there should be no performance impact for those applications.


## How it Works

Whitelisting and blacklisting are based on the applicaton pool *name*. In versions prior to 3.2.7, application pool filtering was based on *process username* (i.e., using the **ApplicationPoolIdentity** setting), which is the same as the application pool's name by default.

>**Note:** Blacklisting an application takes precedence over whitelisting. Application pools that satisfy both lists won't be analyzed.

As of 3.2.3, application pool blacklists and whitelists also accept `*` as a variable-length wildcard.  

>**Example:** "AppPool*" will match "AppPool1", "AppPool_arb", etc.


## Find an Application Pool 

You can find the application pool that's running an application using the following methods:

* Internet Information Services (IIS) Manager
* *AppCmd.exe*
* Contrast.NET Logs

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


Use **Contrast.NET Logs**: 

* Start the Contrast.NET agent.
* Browse to an application.
* In Windows, navigate to *C:\ProgramData\Contrast.NET\LOGS*.
* Open the most recent **Profiler** or **Duplex** log (*Profiler_[AppPool]_XXXXXXXX_XX_XX_XX_XXX_XXXXX.log*).
* The application pool name is on the line that starts with **ApplicationPool Name:**.

## Blacklist an Application Pool

To disable the agent for a specific application, populate `ProcessBlacklist` with the appropriate application pool in *C:\Program Files\Contrast.NET\DotnetAgentService.exe.config*:

```
<!--Comma-separtated list of application pools ignored by Contrast-->
<add key="ProcessBlacklist" value=""/>
```

>**Note:** The application pool blacklist functionality is only available for applications hosted on IIS versions 7 and higher.

## Whitelist an Application Pool 

If you need to only enable the agent for specific applications hosted by IIS, configure a `ProcessWhitelist` (introduced in Contrast 3.2.3) to only analyze certain application pools. If an application pool is whitelisted, the agent analyzes the matching pools. There should be no performance impact for any other applications.

To enable the agent for only specific application pools, populate `ProcessWhitelist` with the appropriate application pool in *C:\Program Files\Contrast.NET\DotnetAgentService.exe.config*:

```
<!--Comma-separated list of application pools exclusively profiled by Contrast-->
<add key="ProcessWhitelist" value=""/>
```

For more information on the standard configuration for the agent, see the [Configuration Overview](installation-netconfig.html#overview).



