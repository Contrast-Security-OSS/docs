<!--
title: "Source Code Information for .NET Applications"
description: "Source Code Information for .NET Applications"
tags: "configuration microsoft source code agent installation .Net"
-->

A .NET framework application's compiled code is generally contained in *.DLL* files, while debug information is contained in *.PDB* files. These .PDB files contain symbol information that Contrast can use to tie stack trace frames to specific lines of code. 

By default, the Debug build of web applications includes *.PDB* files, but the Release build doesn't. However, most deployments of web applications use the Release build because deploying the Debug build can introduce some unnecessary risks. It's possible to include *.PDB* files in the Release build of a web application by changing a project setting. 

> **Note:** The inclusion of *.PDB* files in a web application's deployment is safe and doesn't include the risks associated with publishing a Debug build.  

The following steps configure the build/package process for the Release configuration to include *.PDB* files in Visual Studio:

* Open the web application's solution in Visual Studio. 
* Right click on the application's project and select **Properties**. 
* Select the **Package/Publish Web** tab. 
* Select the **Release** configuration from the **Configuration** dropdown. 
* Confirm that the box to **Exclude generated debug symbols** is **not checked**. 
* Save the project file. 
* Build and publish the web application using your normal deployment process. 

<a href="assets/images/KB3-e14.jpg" rel="lightbox" title="Instrumentation Configuration"><img class="thumbnail" src="assets/images/KB3-e14.jpg"/></a>

