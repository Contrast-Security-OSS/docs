<!--
title: ".NET Application Pool Filtering"
description: "Information on blacklisting/whitelisting application pools"
tags: "microsoft IIS pooling whitelist blacklist configuration agent installation .Net"
-->

Some customers will find it necessary to disable Contrast.NET for specific applications on an instance of IIS. **Contrast 3.1.7** introduced a ```ProcessBlacklist``` that can be configured to remove the agent from specific application pools. If an application pool is blacklisted, the Contrast.NET agent will not attach to any applications using that application pool and there should be no performance impact for those applications.

To disable Contrast.NET for a specific application, populate ```ProcessBlacklist``` with the appropriate application pool in ***C:\Program Files\Contrast.NET\DotnetAgentService.exe.config***:

```
<!--Comma-separtated list of application pools that will be ignored by Contrast-->
<add key="ProcessBlacklist" value=""/>
```

For more information, see [.NET Agent Configuration](user_netconfig.html#config).

Customers could find the need to only enable Contrast.NET for specific applications hosted by IIS. Contrast 3.2.3 introduced a ```ProcessWhitelist``` that can be configured to only analyze certain application pools. If an application pool is whitelisted, the Contrast.NET agent will analyze the matching pools and there should be no performance impact for any other applications.

To enable Contrast.NET for only specific applications, populate ```ProcessWhitelist``` with the appropriate application pool in ***C:\Program Files\Contrast.NET\DotnetAgentService.exe.config***:

```
<!--Comma-separated list of application pools that will exclusively be profiled by Contrast-->
<add key="ProcessWhitelist" value=""/>
```

For more information, see [.NET Agent Configuration](user_netconfig.html#config).

>**Note:** Blacklisting an application takes precedence over whitelisting.  Application pools satisfying both lists will not be analyzed.

As of 3.2.3, application pool blacklists and whitelists also accept ```*``` as a variable-length wildcard.  Example: "AppPool*" will match "AppPool1", "AppPool_arb", etc.

>**Note:** The application pool blacklist functionality is only available for applications hosted on IIS versions 7 and higher.

Web applications hosted on IIS run on application pools. Starting with version 3.2.7, whitelisting and blacklisting are based on applicaton pool *name*.  In versions prior to 3.2.7, application pool filtering was based on *process username* which by default (i.e. using the **ApplicationPoolIdentity** setting) is the same as the application pool's name.

**The application pool running an application can be discovered using the following:**

* Internet Information Services (IIS) Manager
* ***AppCmd.exe***
* Contrast.NET Logs


## Internet Information Services (IIS) Manager

1. Start IIS Manager (***%windir%\system32\inetsrv\InetMgr.exe***)
2. Select a web application
3. Click **Basic Settings**
4. The application pool name will be displayed in a form field (see below)

<a href="assets/images/KB3-e05_1.jpg" rel="lightbox" title="Application Pool Name"><img class="thumbnail" src="assets/images/KB3-e05_1.jpg"/></a>


## ***AppCmd.exe***

1. Run ***cmd.exe*** as an **Administrator**
2. Navigate to ***C:\Windows\System32\inetsrv***
3. Enter the command ```appcmd list apps```
4. A list of applications and their associated application pools will appear (see below)

<a href="assets/images/KB3-e05_2.jpg" rel="lightbox" title="Application List"><img class="thumbnail" src="assets/images/KB3-e05_2.jpg"/></a>


## Contrast.NET Logs

1. Start the Contrast.NET agent
2. Browse to an application
3. In Windows, navigate to ***C:\ProgramData\Contrast.NET\LOGS***
4. Open the most recent **Profiler** log (***Profiler_[AppPool]_XXXXXXXX_XX_XX_XX_XXX_XXXXX.log***)
5. The application pool name will be on the line that starts with **ApplicationPool Name:** 

