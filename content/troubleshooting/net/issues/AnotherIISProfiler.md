<!--
title: "Contrast.NET Service Can't Start with Another Profiler Attached to IIS"
description: "Troubleshoot guide for .NET agent issues"
-->

## Symptoms

* The .NET agent doesn't start, and the following error message is displayed in the Tray application: 

    > *The Contrast .NET service cannot start with another profiler attached to IIS. COR_ENABLE_PROFILING: 0x01, COR_PROFILER: {BX7CFC47-3E35-2c2e-B495-534F93B28123}, COR_PROFILER_PATH:...*

The .NET agent is [required](installation-netinstall.html) to be the only .NET Profiler installed on IIS. The .NET agent uses the CLR Profiling API to perform data and code flow analysis - detect SQL-injection, XSS, weak cryptography, etc. - as well as to detect libraries and technologies used by the application. The Microsoft CLR has a built-in limitation that only one profiler can profile a process. This limitation comes from Microsoft and their implementation of the CLR. 

> **Note:** Many performance/APM tools, such as New Relic and AppDynamics, also use the CLR Profiling API, and can't be used on the same server as the Contrast .NET agent as a result.  

You can often identify the conflicting profiler by searching for the GUID in the Tray's error message (show as `BX7CFC47-3E35-2c2e-B495-534F93B28123` in the example above.)

## Solutions

To resolve the issue, complete the following steps to disable or uninstall the other software that has a profiler registered with or attached to IIS, restart IIS and then start the Contrast .NET agent. 

* Use *regedit* to edit the values under the `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment` key. 
* Set `COR_ENABLE_PROFILING` value to `0` and delete the `COR_PROFILER` value.

* You may also need to repeat this process for the following keys:
   * `HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\Session Manager\Environment`
   * `HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\Control\Session Manager\Environment`

> **Note:** Some profiling software does **not** remove the registry settings (`COR_ENABLE_PROFILING` and `COR_PROFILER`) used to attach a profiler to IIS when disabled or uninstalled; the registry and environment variable settings of those products must be removed manually. Consult the documentation for the uninstalled or disabled third-party profilers for more information.