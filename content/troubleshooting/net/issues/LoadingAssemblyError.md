<!--
title: "Loading Assembly Error"
description: "Troubleshooting guide for .NET agent issues"
tags: "microsoft troubleshoot assembly loading agent .Net"
-->

**Error:** *Loading this assembly would produce a different grant set from other instances*

## Symptoms

* A page containing certain ASP.NET controls (such as the legacy ASP.NET **ReportViewer** control) throws an unhandled exception when Contrast.NET is running: 

    > *Loading this assembly would produce a different grant set from other instances*

* The application's ***web.config*** file specifies ```<trust legacyCasModel="true"```

## How To Solve

Contrast.NET's instrumentation data flow engine cannot be used with applications using the ```legacyCasModel="true"``` setting. Use one of the following strategies to resolve this issue:

* Set ```legacyCasModel="false"``` The **ReportViewer** control's performance will suffer but will still work.
* **OR** Change Contrast.NET's ```ProfilerBehavior``` setting to ```1``` for legacyCasModel support.  See [.NET Agent Configuration](user_netconfig.html#config)
* **OR** Configure Contrast.NET *to not analyze* the application pool containing the application with the **ReportViewer** control using the ```ProcessBlacklist``` setting.


## See Also

[Getting .NET Agent Logs](user_netinstall.html#logs)

[.NET Agent Configuration](user_netconfig.html#config)


