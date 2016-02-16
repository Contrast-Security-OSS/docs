<!--
title: "Loading Assembly Error"
description: "Troubleshooting guide for .NET agent issues"
-->

**Error:** *Loading this assembly would produce a different grant set from other instances*

## Symptoms

* A page containing certain ASP.NET controls (such as the legacy ASP.NET **ReportViewer** control) throws an unhandled exception when Contrast.NET is running: 

    >*Loading this assembly would produce a different grant set from other instances*

* The application's ***web.config*** file specifies ```<trust legacyCasModel="true"```

## How To Solve

Contrast.NET does not support analysis of applications using the ```legacyCasModel="true"``` setting. Either:

* Set ```legacyCasModel="false"```. The **ReportViewer** control's performance will suffer but will still work.
* *Configure Contrast.NET to not analyze* the application pool containing the application with the **ReportViewer** control using the ```ProcessBlacklist``` setting.


## See Also

[Getting .NET Agent Logs](user_netinstall.html#logs)

[.NET Agent Configuration](user_netconfig.html#config)


