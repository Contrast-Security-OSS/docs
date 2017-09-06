<!--
title: "Getting .NET Agent Logs"
description: "Instructions on using .NET agent logs"
tags: "troubleshoot configuration logging agent .Net"
-->

The Contrast.NET Agent logs information to the *Contrast.NET\LOGS* directory within the Windows *ProgramData* directory:

* Windows 2008/2012 
    ***C:\ProgramData\Contrast.NET\LOGS*** 

Depending on how the Windows profile and folder view settings are set up, the directories may be hidden. If so, paste the paths into the Windows Explorer location; you may need to replace the drive letter *C* with *D*.

You can change what information is logged by changing the logging level in the [.NET Agent Configuration](installation-netconfig.html).

There are several types of log files in the ***LOGS*** directory: *DotnetAgentSvc_*, *Monitor_* and *Hooks_* logs. ***DotnetAgentSvc_*** logs include details about *DotnetAgentService.exe*'s work, including any details of errors communicating with Contrast. The other types of logs include details about data flow and control flow analysis peformed by the agent's sensors.

<a href="assets/images/KB3-e04_1.jpg" rel="lightbox" title="The start of a *DotnetAgentSvc_* log"><img class="thumbnail" src="assets/images/KB3-e04_1.jpg"/></a>

Of course the goal is never to need this; however, if you do, feel free to use the output to [file a bug report](mailto:bugs@contrastsecurity.com).

The **Windows Event Log** can also be a useful source of information for debugging.

* Launch the **Windows Event Viewer** (**Start > Event Viewer**).
* Expand the **Windows Logs** (in the left pane) and select **Application**.
* Look for a recent event where the **Source** is **.NET Runtime**, **ASP.NET** or **ContrastSvc**.

In some rare scenarios, bad instrumentation can cause a web server process to crash. If you ever encounter a crash caused by Contrast then please report the error and [file a bug report](mailto:bugs@contrastsecurity.com). If possible, capture a process dump of the crashing process (e.g. w3wp.exe) by finding and right-clicking the process in the Windows Task Manager and selecting "Create Dump File". The combination of log files and this dump file will help our team reproduce and fix the bug. 
