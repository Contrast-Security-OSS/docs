<!--
title: "Loading Assembly Error"
description: "Troubleshooting guide for .NET agent issues"
tags: "microsoft troubleshoot assembly loading agent .Net"
-->

## Issue

**Error:** *Loading this assembly would produce a different grant set from other instances*.

## Symptoms

* A page containing certain ASP.NET controls, such as the legacy ASP.NET **ReportViewer** control, throws an unhandled exception when Contrast.NET is running: 

    > *Loading this assembly would produce a different grant set from other instances*

* The application's *web.config* file specifies `<trust legacyCasModel="true"`.

## Solution

You can't use the Contrast.NET's instrumentation data flow engine with applications using the `legacyCasModel="true"` setting. Use one of the following strategies to resolve this issue:

* Set `legacyCasModel="false"`. The **ReportViewer** control's performance will suffer but will still work. 
<br> **OR** </br>
* Configure Contrast.NET to **not analyze** the application pool containing the application with the **ReportViewer** control using the `ProcessBlacklist` setting.


## More Information

* [Getting .NET Agent Logs](troubleshooting-net.html#net-logs)

* [.NET Agent Configuration](installation-netconfig.html)


