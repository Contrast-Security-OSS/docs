<!--
title: "Troubleshooting Problems With The .NET Agent"
description: "Troubleshooting guide for .NET agent issues"
-->

There are a number of issues that can be encountered when using the Contrast.NET Agent to analyze web applications. Reviewing the .NET agent's *log files* may be helpful when troubleshooting many of the following issues.

## The .NET Agent Cannot Connect To TeamServer

### Symptoms

* The .NET agent does not successfully start
* The *Contrast Tray* and/or .NET agent *logs* report errors when connecting to TeamServer: 

    >*Contrast.NET service failed to start. Contrast.NET cannot connect to TeamServer at: [https://app.contrastsecurity.com](https://app.contrastsecurity.com). The remote name could not be resolved:* ***app.contrastsecurity.com***

* Data from a server with the installed agent does not appear on TeamServer

### How To Solve

1. Open the .NET agent's configuration file, ***ContrastService.exe.config***, which is located in the agent's installation directory (i.e. ***C:/Program Files/Contrast.NET***)
2. Verify that the ```TeamServerUrl``` value (e.g. [https://app.contrastsecurity.com/Contrast](https://app.contrastsecurity.com/Contrast)) can be reached from a normal web browser on the server. If the URL cannot be reached, then you should review the network path and related settings between the server and TeamServer.
3. Verify proxy settings. If a normal web browser can connect to TeamServer but the agent cannot, then the agent may be missing the proxy settings required by your network environment. A proxy can be configured using the ```ProxyAuth```, ```ProxyUser```, ```ProxyPass``` and ```ProxyAddress``` values in the configuration file.
4. Verify that the API Key is correct. If the above settings are correct then the API Key used by the agent may have changed. Follow these *directions* to view your user's current API Key.


## TeamServer Does Not Recognize Third Party .NET Libraries

### Symptoms

* Popular third-party libraries such as **Entity Framework** are shown as **Unknown** or gray on TeamServer

### How To Solve

* There is no action to take at this time. Contrast uses a database of library file hashes to identify libraries (see the process for *Java libraries*). We are in the process of creating this database for .NET libraries based on information from the [Nuget](https://www.nuget.org/) package repository (the de facto standard repository for .NET libraries). We will update this page once the .NET library database is in place.


## Error: *Loading this assembly would produce a different grant set from other instances*

### Symptoms

* A page containing certain ASP.NET controls (such as the legacy ASP.NET **ReportViewer** control) throws an unhandled exception when Contrast.NET is running: 

    >*Loading this assembly would produce a different grant set from other instances*

* The application's ***web.config*** file specifies ```<trust legacyCasModel="true"```

### How To Solve

Contrast.NET does not support analysis of applications using the ```legacyCasModel="true"``` setting. Either:

* Set ```legacyCasModel="false"```. The **ReportViewer** control's performance will suffer but will still work.
* *Configure Contrast.NET to not analyze* the application pool containing the application with the **ReportViewer** control using the ```ProcessBlacklist``` setting.

## A Particular Resource Returns 0 Bytes Under Contrast.NET

### Symptoms

* A particular resource (page, image, etc.) works normally when the Contrast.NET agent is not running and stops working once the agent is running
* When using browser developer tools or something similar to view network traffic, the resource returns **0 bytes** while the Contrast.NET agent is running

### How To Solve

Contrast.NET uses a filter within a ```System.Web.IHttpModule``` to gather HTTP response data. There is a known Microsoft bug in the .NET framework: ```HttpModules``` with filters can cause resources such as ***WebResource.axd*** to return **0 bytes** (which can result in 500 status responses for embedded resources such as images).

* *Configure Contrast.NET* using the ```ResponseMode``` (value **0** or **2**) or ```ResponseUrlWhitelistRegex``` settings to prevent Contrast from applying the ```HttpModules``` filter to the resource.

## See Also

[Getting .NET Agent Logs](user_netfaq.html#logs)

[Using The .NET Contrast Tray](user_netfaq.html#tray)

[Accessing The API](dev_api2.html#access)

[Library Analysis](user_tsguidelib.html#analysis)

[.NET Agent Configuration](user_netconfig.html#config)


