<!--
title: "Instrumentation .NET Agent Data Flow Engine"
description: "Instrumentation .NET Agent Data Flow Engine"
-->

Beginning with version 3.2.0, the Contrast .NET Agent includes an entirely new method of tracking data flow through analyzed web applications.  By default, the .NET Agent will continue to use the old data flow engine.  Users who wish to try out the new data flow engine can do so by changing the ```useNewInstrumentation``` configuration setting to ```true``` in the ***DotnetAgentService.exe.config*** file.

* Stop the Contrast .NET Agent
* Using a text editor, open the ***DotnetAgentService.exe.config*** file which is located in the Contrast .NET Agent installation directory (***C:\Program Files\Contrast.NET***)
* Locate the ```<add key="UseNewInstrumentation" value="false" />``` setting.  Change the value to ```true``` and save the file.
* Start the Contrast .NET Agent

The new instrumentation engine offers a number of benefits, including: 

* Source code file and line number information when PDB files are present.
* Improved stability and comparable performance compared to the old method of tracking data flow.
* Ability to support custom rules in the future.

In version 3.2.0, the new data flow engine is not 100% complete; specifically, the new engine is missing a small number of propagation rules (such as a handful of ```StringBuilder``` methods as well as encoding conversion methods.)  Additionally, for this release only, the new engine will not analyze 32-bit processes/application pools and does not work on Windows Server 2003/IIS6.  It is also worth noting that the new engine has not been used in as many real world environments as the old engine. 

We'll be working on improving the new data flow engine for future releases.  These improvements will include:

* Completion of propagation rules
* Analysis of 32-bit processes/application pools
* Performance improvements
* Custom rules support

In a future release, the new data flow engine will eventually replace the old data flow engine.  In the meantime, we encourage you to try out the new data flow engine and give us feedback!

## Getting Source Code Information Using the New Data Flow Engine

In the .NET Framework, an application's compiled code is generally contained in .DLL files while debug information is contained in .PDB files.  These .PDB files contain symbol information that Contrast can use to tie stack trace frames to specific lines of code.  By default, the Debug build of web applications include .PDB files while the Release build does not.  However, most deployments of web applications use the Release build (and rightly so as deploying the Debug build can introduce some unnecessary risks.)  It is possible to include .PDB files in the Release build of a web application by changing a project setting.  Note that the inclusion of .PDB files in web application's deployment is safe and does not include the risks associated with publishing a Debug build.  

The following steps will configure the build/package process for the Release configuration to include .PDB files in Visual Studio 2013:

* Open the web application's solution in Visual Studio
* Right click on the web application's project and select **Properties**
* Select the **Package/Publish Web** tab
* Select the **Release** configuration from the **Configuration** dropdown
* Uncheck the *Exclude generated debug symbols* checkbox if it is checked
* Save the project file
* Build and publish the web application using your normal deployment process 

<a href="assets/images/KB3-e14.jpg" rel="lightbox" title="Instrumentation Configuration"><img class="thumbnail" src="assets/images/KB3-e14.jpg"/></a>
