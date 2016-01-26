<!--
title: "Instrumentation .NET Agent Data Flow Engine"
description: "Instrumentation .NET Agent Data Flow Engine"
-->

Beginning with version 3.2.4, the Contrast .NET Agent includes an entirely new method of tracking data flow through analyzed .NET 4+ (CLR4) web applications.  By default, the .NET Agent will continue to use the old data flow engine against both CLR2 and CLR4 applications.  Users who wish to try out the new data flow engine can do so by changing the ```ProfilerBehavior``` configuration setting to ```3``` in the ***DotnetAgentService.exe.config*** file.  When ```ProfilerBehavior``` is set to ```3``` the .NET agent will use the instrumentation data flow engine against web applications running on CLR4 and will use the old data flow engine against CLR2 applications. 

Follow these instructions to enable the new instrumentation data flow engine against CLR4 applications:

* Stop the Contrast .NET Agent
* Using a text editor, open the ***DotnetAgentService.exe.config*** file which is located in the Contrast .NET Agent installation directory (***C:\Program Files\Contrast.NET***)
* Locate the ```<add key="ProfilerBehavior" value="2" />``` setting.  Change the value to ```3``` and save the file.
* Start the Contrast .NET Agent

The new instrumentation engine offers a number of benefits, including: 

* Source code file and line number information when .PDB files are present.
* Improved stability and comparable performance compared to the old method of tracking data flow.
* Ability to support custom rules in the future.

> **Note:** The new data flow engine is **not** supported on Windows Server 2003/IIS6.

In a future release, the new data flow engine will eventually replace the old data flow engine.  In the meantime, we encourage you to try out the new data flow engine and [give us feedback!](mailto:support@contrastsecurity.com)

## Getting Source Code Information Using the New Data Flow Engine

In the .NET Framework, an application's compiled code is generally contained in .DLL files while debug information is contained in .PDB files.  These .PDB files contain symbol information that Contrast can use to tie stack trace frames to specific lines of code.  By default, the Debug build of web applications include .PDB files while the Release build does not.  However, most deployments of web applications use the Release build (and rightly so, as deploying the Debug build can introduce some unnecessary risks.)  It is possible to include .PDB files in the Release build of a web application by changing a project setting.  Note that the inclusion of .PDB files in a web application's deployment is safe and does not include the risks associated with publishing a Debug build.  

The following steps will configure the build/package process for the Release configuration to include .PDB files in Visual Studio 2013:

* Open the web application's solution in Visual Studio
* Right click on the application's project and select **Properties**
* Select the **Package/Publish Web** tab
* Select the **Release** configuration from the **Configuration** dropdown
* Uncheck the *Exclude generated debug symbols* checkbox if it is checked
* Save the project file
* Build and publish the web application using your normal deployment process 

<a href="assets/images/KB3-e14.jpg" rel="lightbox" title="Instrumentation Configuration"><img class="thumbnail" src="assets/images/KB3-e14.jpg"/></a>
