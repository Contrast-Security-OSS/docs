<!--
title: "Get .NET Agent Logs"
description: "Instructions on using .NET agent logs"
tags: "troubleshoot configuration logging agent .Net"
-->

In rare scenarios, bad instrumentation causes a web server process to crash or a specific page to error out. If you ever encounter a crash or error caused by Contrast, please report the error and [file a bug report](mailto:bugs@contrastsecurity.com). If possible, follow the steps below to gather agent logs and process dumps; this additional information is vital to reproducing and fixing these types of bugs. 

## Agent Logs Directory

The .NET agent logs information to the *LOGS* directory within the data directory specified at install time. By default, LOGS are written to *%ProgramData%\Contrast\dotnet\LOGS*, within the Windows *ProgramData* directory. Depending on the setup of the Windows profile and folder view settings, the directories may be hidden. If so, paste the path into the Windows Explorer location.

You can change which information is logged by changing the logging level in the [.NET agent configuration](installation-netconfig.html).

## Types of Bugs

There are two primary types of agent bugs for which Contrast needs to gather logs and other information:    

* Process Crash
* Unhandled Managed Exception/Page Error/500

## Process Crash Bugs

### Verify that the web server process crashed 

Check your scenario against the following indicators to confirm that the web server process crashed. 

* The web application is unresponsive after installing the .NET agent.

* The Windows Event Log (**Event Viewer > Windows Logs > Application**) has Error entries for the ".NET Runtime" and "Application Error". 

 * The ".NET Runtime" error has details such as: 

  ```
   Application: w3wp.exe
   Framework Version: v4.0.30319
   Description: The process was terminated due to an internal error in the .NET Runtime at IP XXXXXXXXX with exit code YYYYYYY
  ```

 * The "Application Error" entry has details similar to:

   ```
    Faulting application name: w3wp.exe, version: 8.5.9600.16384, time stamp: 0x5215df96
    Faulting module name: clr.dll, version: 4.7.2114.0, time stamp: 0x59a63e48
    Exception code: 0xc0000005
    Fault offset: 0x00000000002ff61c
    Faulting process id: 0x3724
    Faulting application start time: 0x01d337d711f21e68
    Faulting application path: c:\windows\system32\inetsrv\w3wp.exe
    Faulting module path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\clr.dll
    Report Id: 4fc99650-a3ca-11e7-80e8-005056bd4248
   ```

Once you confirm that the observed bug is a process crash, you're ready to gather information to file a bug. 

### Gather information on the process crash 

Complete the following steps to gather information to send to Contrast. 

* Set up the ProcDump utility to capture crash dump. 
  * Download current version of ProcDump from the [Microsoft documentation site](https://docs.microsoft.com/en-us/sysinternals/downloads/procdump) to the Windows server with the agent.
  * From an administrator command prompt: 
    ```
     md c:\dumps 
     procdump.exe -ma -i c:\dumps
    ```
  * Install the latest .NET agent.
  * [Stop the .NET agent service](http://127.0.0.1:9000/installation-netusage.html#usage).
  * Enable additional logging. 
     * ** Start > Notepad
     * ** File > Open >** *C:\ProgramData\Contrast\dotnet\contrast_security.yaml*
     * Add the following configuration to the yaml file to enable verbose logging and logging of every method JIT-compiled by the CLR:
```
agent:
  dotnet:
    logger:
      level: trace
    secret:
      log_method_sigs: true
```
  * Start the .NET agent service.
  * Exercise the application to reproduce the crash.

Once you've reproduced the crash, gather the following items and include them in your bug report:

* Agent Logs: All files in the agent log directory, *C:\ProgramData\Contrast\dotnet\LOGS*; right click on the **LOGS folder > Send To > Compressed (zip) folder**.
* Windows Event Log: **Event Viewer > Windows Logs > Application > Save All Events As > "MyEvents.evtx"**
* Crash Dumps: Create a zip file of each w3wp process dump file in *C:\dumps* (e.g., *w3wp.exe_171002_151601.dmp*). Dump files can be quite large.

You can then uninstall ProcDump with `C:>procdump.exe -u`. 

## Unhandled Managed Exception or Page Error Bugs 

### Verify an unhandled exception

The above process also helps the .NET engineering team resolve issues such as application errors caused by the .NET agent. Use the following indicators to determine if the .NET agent is causing an application error. 

* You've observed the application working normally without the agent. 

* You've observed a page of the application "crashing" (returning a 500 error) under the agent. 

* There are no errors for ."NET Runtime" and "Application Error" in the Windows Event Log.

* There **may be warnings** for "ASP.NET" in the Windows Event Log. The warning should look similar to the following:

   ```
   Source: ASP.NET 4.0.30319.0
   Date: 10/9/2017 9:22:46 AM
   Event ID: 1309
   Task Category: Web Event
   Level: Warning
   Keywords: Classic
   User: N/A
   Computer: FOO.COMPUTER.COM
   Description:
   Event code: 3005
   Event message: An unhandled exception has occurred.
   Event time: 09/10/2017 9:22:46 AM
   Event time (UTC): 09/10/2017 2:22:46 PM
   Event ID: f706787c1f1247e6a87b777a90413c3d
   Event sequence: 9
   Event occurrence: 1
   Event detail code: 0
   Application information:
   Application domain: /LM/W3SVC/1/ROOT/FOO-1-131520325424796488
   Trust level: Full
   Application Virtual Path: /Foo
   Application Path: E:\MCMSFiles\inetpub\wwwroot\Foo\
   Machine name: FOO
   Process information:
   Process ID: 176840
   Process name: w3wp.exe
   Account name: System
   Exception information:
   Exception type: ArgumentOutOfRangeException
   Exception message: Index was out of range. Must be non-negative and less than the size of the collection.
   Parameter name: index
   at System.Collections.ArrayList.get_Item(Int32 index)
   at System.Web.UI.WebControls.DataListItemCollection.get_Item(Int32 index)
   at Fabrikam.SetTabCount(Int32 index, NullableInt32 summaryCount) in C:\Foo\Fabrikam.aspx.cs:line 1686
   at Fabrikam.GetSummaryCounts() in C:\Foo\Fabrikam.aspx.cs:line 1468
   at Fabrikam.OnPreRender(EventArgs e) in C:\Foo\Fabrikam.aspx.cs:line 549
   at System.Web.UI.Control.PreRenderRecursiveInternal()
   at System.Web.UI.Page.ProcessRequestMain(Boolean includeStagesBeforeAsyncPoint, Boolean includeStagesAfterAsyncPoint)

   Request information:
   Request URL: https://www.foo-staging.com/Foo/Fabrikam.aspx
   Request path: /Foo/Fabrikam.aspx
   User host address: 1.2.3.4
   User: msteeber
   Is authenticated: True
   Authentication Type: 
   Thread account name: System

   Thread information:
   Thread ID: 19
   Thread account name: System
   Is impersonating: False
   Stack trace: at System.Collections.ArrayList.get_Item(Int32 index)
   at System.Web.UI.WebControls.DataListItemCollection.get_Item(Int32 index)
   at Fabrikam.SetTabCount(Int32 index, NullableInt32 summaryCount) in C:\Foo\Fabrikam.aspx.cs:line 1686
   at Fabrikam.GetSummaryCounts() in C:\Foo\Fabrikam.aspx.cs:line 1468
   at Fabrikam.OnPreRender(EventArgs e) in C:\Foo\Fabrikam.aspx.cs:line 549
   at System.Web.UI.Control.PreRenderRecursiveInternal()
   at System.Web.UI.Page.ProcessRequestMain(Boolean includeStagesBeforeAsyncPoint, Boolean includeStagesAfterAsyncPoint)
   ```

As the process hasn't crashed, ProcDump won't capture process dumps. Instead, you must gather the process dump manually by completing the following steps. 

* Find the Process ID of the worker process that you need. 
  * IIS Manager > Worker Processes: Find the "Application Pool Name" you need, and take note of the value in the "Process Id". 

* From an administrator command prompt, replace `NNNNN` with the process ID from the previous step.

  ```
  C:\>procdump -ma NNNNN
  ```

Follow a similar process to gather agent logs, windows events and process dumps to include with your bug report. 

## Other Bugs

If you encountered a bug other than a process crash or unhandled exception - maybe the .NET Tray has an inaccurate state, or the agent found a false positive - please [file a bug report](mailto:bugs@contrastsecurity.com). Contrast doesn't usually need process dumps, but trace-level logs and a detailed description of the problem are very helpful when it's time to fix these bugs.  

