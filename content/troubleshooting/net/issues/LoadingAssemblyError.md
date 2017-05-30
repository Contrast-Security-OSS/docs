<!--
title: "Loading Assembly Error"
description: "Troubleshooting guide for .NET agent issues"
tags: "microsoft troubleshoot assembly loading agent .Net"
-->

## The Issue

**Error:** *Loading this assembly would produce a different grant set from other instances*.

## Symptoms

* A page containing certain ASP.NET controls (such as the legacy ASP.NET **ReportViewer** control) throws an unhandled exception when Contrast.NET is running: 

    > *Loading this assembly would produce a different grant set from other instances*

* The application's ***web.config*** file specifies ```<trust legacyCasModel="true"```

## How to Solve

Contrast.NET's instrumentation data flow engine cannot be used with applications using the ```legacyCasModel="true"``` setting. Use one of the following strategies to resolve this issue:

* Set ```legacyCasModel="false"``` The **ReportViewer** control's performance will suffer but will still work. 
<br> **OR** </br>
* Change Contrast.NET's ```ProfilerBehavior``` setting to ```1``` for legacyCasModel support. See [.NET Agent Configuration](installation-netconfig.html)
<br> **OR** </br>
* Configure Contrast.NET *to not analyze* the application pool containing the application with the **ReportViewer** control using the ```ProcessBlacklist``` setting.


## More Information

* [Getting .NET Agent Logs](troubleshooting-net.html#net-logs)

* [.NET Agent Configuration](installation-netconfig.html)


