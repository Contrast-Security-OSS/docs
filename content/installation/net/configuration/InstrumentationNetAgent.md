<!--
title: "Source Code Information for .NET Applications"
description: "Source Code Information for .NET Applications"
tags: "configuration microsoft source code agent installation .Net"
-->

## Source Code Information 

In the .NET Framework, an application's compiled code is generally contained in .DLL files, while debug information is contained in .PDB files. These .PDB files contain symbol information that Contrast can use to tie stack trace frames to specific lines of code. By default, the Debug build of web applications includes .PDB files while the Release build doesn't. However, most deployments of web applications use the Release build - which they should because deploying the Debug build can introduce some unnecessary risks. It's possible to include .PDB files in the Release build of a web application by changing a project setting. 

> **Note:** The inclusion of .PDB files in a web application's deployment is safe and doesn't include the risks associated with publishing a Debug build.  

The following steps configure the build/package process for the Release configuration to include .PDB files in Visual Studio:

<ol>

<li> Open the web application's solution in Visual Studio. </li>
<li> Right click on the application's project and select **Properties**. </li>
<li> Select the **Package/Publish Web** tab. </li>
<li> Select the **Release** configuration from the **Configuration** dropdown. </li>
<li> Uncheck the **Exclude generated debug symbols** checkbox, if it's checked. </li>
<li> Save the project file. </li>
<li> Build and publish the web application using your normal deployment process. </li>

</ol>

<a href="assets/images/KB3-e14.jpg" rel="lightbox" title="Instrumentation Configuration"><img class="thumbnail" src="assets/images/KB3-e14.jpg"/></a>

