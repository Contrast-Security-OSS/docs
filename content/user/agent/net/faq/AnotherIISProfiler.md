<!--
title: "Contrast.NET Service Cannot Start with Another Profiler Attached to IIS"
description: "Troubleshooting guide for .NET agent issues"
-->

## Symptoms

* The Contrast.NET Agent does not start and the following error message is displayed in the Tray application: 

    > *The Contrast.NET service cannot start with another profiler attached to IIS. COR_ENABLE_PROFILING: 0x01, COR_PROFILER: {BX7CFC47-3E35-2c2e-B495-534F93B28123}, COR_PROFILER_PATH:...*

The Contrast .NET Agent uses the CLR Profiling API to perform data and code flow analysis (i.e. detect SQL-injection, XSS, weak cryptography, etc.) as well as to detect libraries and technologies in use by the application. The Microsoft CLR has a built-in limitation that only one profiler can profile a process. This limitation comes from Microsoft and their implementation of the CLR. Please note that many performance/APM tools such as New Relic, AppDynamics, etc. also use the CLR Profiling API and therefore cannot be used on the same server as the Contrast .NET Agent.  

The conflicting profiler can often be identified by searching for the GUID in the Tray's error message (```BX7CFC47-3E35-2c2e-B495-534F93B28123``` in the example above.)

## How To Solve

* Disable or uninstall the other software that has a profiler registered with or attached to IIS, restart IIS, and then start the Contrast .NET Agent.
* NOTE: Some software does **NOT** remove the registry settings (```COR_ENABLE_PROFILING``` and ```COR_PROFILER```) used to attach a profiler to IIS when disabled or uninstalled. 
  * Use regedit to edit the values under the ```HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment``` key. Set ```COR_ENABLE_PROFILING``` value to **0** and delete the ```COR_PROFILER``` value.
  * You may also need to repeat this process for the following keys:
    * ```HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\Session Manager\Environment```
    * ```HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\Control\Session Manager\Environment```

## See Also

[Getting Started with the .NET Agent](user_netinstall.html#start)
