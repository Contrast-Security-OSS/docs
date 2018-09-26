<!--
title: "Loading Assembly Error"
description: "Troubleshooting guide for .NET agent issues"
tags: "microsoft troubleshoot assembly loading agent .NET"
-->

## Issue

* A page containing certain ASP.NET controls, such as the legacy ASP.NET **ReportViewer** control, throws an unhandled exception when the .NET agent is running: 

    > *Loading this assembly would produce a different grant set from other instances*

* The application's *web.config* file specifies `<trust legacyCasModel="true"`.

## Solution

You can't use the Contrast .NET agent with applications using the `legacyCasModel="true"` setting. Use one of the following strategies to resolve this issue:

* Set `legacyCasModel="false"`. The **ReportViewer** control's performance will suffer but will still work. 

* Use the `ProcessBlacklist` setting to configure the .NET agent to **not analyze** the application pool containing the application with the **ReportViewer** control. See the article on [Application Pool Filtering](installation-netusage.html#iis) for more details.
