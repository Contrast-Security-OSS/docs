<!--
title: "Getting .NET Agent Logs"
description: "Instructions on using .NET agent logs"
tags: "configuration logging agent .Net"
-->

The Contrast.NET Agent logs information to the ***Contrast.NET\LOGS*** directory within the Windows ***ProgramData*** directory:

* Windows 2008/2012 
    ***C:\ProgramData\Contrast.NET\LOGS*** (There is no space in ***ProgramData***)

Depending on how the Windows profile is set up (folder view settings), the directories may be hidden so you can't browse directly to them. If so, paste the paths into the Windows Explorer location (replace the drive letter **C** with **D** if necessary).

You can change what information is logged by changing the logging level in the [.NET Agent Configuration](user_netconfig.html#config).

There are several types of log files in the ***LOGS*** directory: ***DotnetAgentSvc_***,  ***Profiler_*** (or ***Monitor_***), and ***Module_*** (or ***Hooks_***) logs. ***DotnetAgentSvc_*** logs include details about ***DotnetAgentService.exe***'s work, including any details of errors communicating with the Contrast TeamServer. The other types of logs include details about data flow and control flow analysis peformed by the agent's sensors.

For example, here is the start of a ***DotnetAgentSvc_*** log:

<a href="assets/images/KB3-e04_1.jpg" rel="lightbox" title="ContrastSvc_ Log"><img class="thumbnail" src="assets/images/KB3-e04_1.jpg"/></a>

Of course the goal is never to need this; however, if you do, feel free to use the output to [file a bug report](mailto:bugs@contrastsecurity.com).

The **Windows Event Log** can also be a useful source of information for debugging.

1. Launch the **Windows Event Viewer** (**Start > Event Viewer**)
2. Expand the **Windows Logs** (in the left pane) and select **Application**
3. Look for a recent event where the **Source** is **.NET Runtime**

If the Contrast.NET Agent was successfully loaded by IIS, you'll see a message similar to the following:

<a href="assets/images/KB3-e04_2.jpg" rel="lightbox" title="Success Message"><img class="thumbnail" src="assets/images/KB3-e04_2.jpg"/></a>

If there was an error, then you will probably see something similar to this:

<a href="assets/images/KB3-e04_3.jpg" rel="lightbox" title="Error Message"><img class="thumbnail" src="assets/images/KB3-e04_3.jpg"/></a>

Starting with **Version 3.1.8**, the .NET agent will produce a minidump file (***.dmp***) when it encounters an error that would crash the worker process. These minidump files can be sent to Contrast as part of a [bug report](https://support.contrastsecurity.com/tickets/new). Dump files will help the Contrast team resolve the bug much more quickly than without the information in the dump file. Dump files are located in the same directory as other log files.
