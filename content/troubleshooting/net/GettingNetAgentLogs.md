<!--
title: "Getting .NET Agent Logs"
description: "Instructions on using .NET agent logs"
tags: "troubleshoot configuration logging agent .Net"
-->

The Contrast.NET Agent logs information to the ***Contrast.NET\LOGS*** directory within the Windows ***ProgramData*** directory:

* Windows 2008/2012 
    ***C:\ProgramData\Contrast.NET\LOGS*** <br>(There is no space in ***ProgramData***.)

Depending on how the Windows profile is set up (folder view settings), the directories may be hidden so you can't browse directly to them. If so, paste the paths into the Windows Explorer location (replace the drive letter **C** with **D** if necessary).

You can change what information is logged by changing the logging level in the [.NET Agent Configuration](installation-netconfig.html).

There are several types of log files in the ***LOGS*** directory: ***DotnetAgentSvc_***,  ***Monitor_***, and ***Hooks_*** logs. ***DotnetAgentSvc_*** logs include details about ***DotnetAgentService.exe***'s work, including any details of errors communicating with the Contrast TeamServer. The other types of logs include details about data flow and control flow analysis peformed by the agent's sensors.

For example, here is the start of a ***DotnetAgentSvc_*** log:

<a href="assets/images/KB3-e04_1.jpg" rel="lightbox" title="ContrastSvc_ Log"><img class="thumbnail" src="assets/images/KB3-e04_1.jpg"/></a>

Of course the goal is never to need this; however, if you do, feel free to use the output to [file a bug report](mailto:bugs@contrastsecurity.com).

The **Windows Event Log** can also be a useful source of information for debugging.

1. Launch the **Windows Event Viewer** (**Start > Event Viewer**)
2. Expand the **Windows Logs** (in the left pane) and select **Application**
3. Look for a recent event where the **Source** is **.NET Runtime**, **ASP.NET**, or **ContrastSvc**

In some rare scenarios, bad instrumentation can cause a web server process to crash. If you ever encounter a crash caused by Contrast then please report the error and [file a bug report](mailto:bugs@contrastsecurity.com). If possible, capture a process dump of the crashing process (e.g. w3wp.exe) by finding and right-clicking the process in the Windows Task Manager and selecting "Create Dump File". The combination of log files and this dump file will help our team reproduce and fix the bug. 
