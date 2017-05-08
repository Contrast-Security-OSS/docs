<!--
title: "Instrumentation .NET Agent Data Flow Engine"
description: "Instrumentation .NET Agent Data Flow Engine"
tags: "configuration microsoft Instrumentation agent installation .Net"
-->

Beginning with version 3.2.4, the Contrast .NET Agent includes an entirely new method of tracking data flow through analyzed .NET 4+ (CLR4) web applications. By default, the .NET Agent uses the instrumentation data flow engine against web applications running on CLR4. If you want to revert to the old data flow engine for all applications, you can change the ```ProfilerBehavior``` configuration setting to ```2``` in the *DotnetAgentService.exe.config* file. (The default values for ```ProfilerBehavior``` is ```3```. See [.NET Agent Configuration](installation_netconfig.html#config) fore more details.)

The new instrumentation engine offers a number of benefits, including: 

* Source code file and line number information when .PDB files are present
* Improved stability and comparable performance compared to the old method of tracking data flow
* Ability to use custom rules

## Source Code Information 

In the .NET Framework, an application's compiled code is generally contained in .DLL files, while debug information is contained in .PDB files. These .PDB files contain symbol information that Contrast can use to tie stack trace frames to specific lines of code. By default, the Debug build of web applications includes .PDB files while the Release build doesn't. However, most deployments of web applications use the Release build - which they should because deploying the Debug build can introduce some unnecessary risks. It's possible to include .PDB files in the Release build of a web application by changing a project setting. 

> **Note:** The inclusion of .PDB files in a web application's deployment is safe and doesn't include the risks associated with publishing a Debug build.  

The following steps configure the build/package process for the Release configuration to include .PDB files in Visual Studio 2013:

* Open the web application's solution in Visual Studio.
* Right click on the application's project and select **Properties**.
* Select the **Package/Publish Web** tab.
* Select the **Release** configuration from the **Configuration** dropdown.
* Uncheck the **Exclude generated debug symbols** checkbox, if it's checked.
* Save the project file.
* Build and publish the web application using your normal deployment process. 

<a href="assets/images/KB3-e14.jpg" rel="lightbox" title="Instrumentation Configuration"><img class="thumbnail" src="assets/images/KB3-e14.jpg"/></a>


## Monitor Mode and Instrumentation
As of version 3.3.5, the .NET Agent has an additional instrumentation engine named "Monitoring". See [.NET Agent Configuration](installation_netconfig.html#config) for information on enabling this mode. Monitor mode does NOT use the profiling API for instrumentation but continues to support source code information, improved stability and the use of custom rules. 
