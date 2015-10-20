<!--
title: ".NET Application Pool Blacklist"
description: "Information on blacklisting application pools"
-->

Some customers will find it necessary to disable Contrast.NET for specific applications on an instance of IIS. **Contrast 3.1.7** introduced a ```ProcessBlacklist``` that can be configured to remove the agent from specific application pools. If an application pool is blacklisted, the Contrast.NET agent will not attach to any applications using that application pool and there should be no performance impact for those applications.

>**Note:** The application pool blacklist functionality is only available for applications hosted on IIS versions 7 and higher

To disable Contrast.NET for a specific application, populate ```ProcessBlacklist``` with the appropriate application pool in ***C:\Program Files\Contrast.NET\ContrastSvc.exe.config***:

```
<!--Comma-separtated list of application pools that will be ignored by Contrast-->
<add key="ProcessBlacklist" value=""/>
```

For more information, see [.NET Agent Configuration](user_netconfig.html#config).

Web applications hosted on IIS run on application pools. By default, the username for an application pool is the same as the application pool's name (i.e. using the **ApplicationPoolIdentity** setting).

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
4. Open the most recent **ContrastProfiler** log (***ContrastProfiler_XXXX_XX_XX_XXXXXXXXX_00000.log***)
5. The application pool name will be on the line that starts with **Application pool username:** (see below)

<a href="assets/images/KB3-e05_3.jpg" rel="lightbox" title="Application Pool Username"><img class="thumbnail" src="assets/images/KB3-e05_3.jpg"/></a>
