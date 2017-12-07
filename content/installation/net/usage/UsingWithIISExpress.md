<!--
title: "Using Contrast With IIS Express"
description: "Guide to using IIS Express"
tags: "installation tray configuration IIS express agent .Net"
-->

The .NET agent can analyze ASP.NET applications hosted on IIS-Express but it takes a little bit of work to enable instrumentation on IIS-Express. The Contrast tray will show a tab for IIS Express if IIS Express is installed on the server. 

The Contrast Tray will initially show a button "Set Environment Variables" to enable instrumentation of IIS-Express-hosted applications. Pressing this button will set environment variables for the current user so that any new IIS-Express process will load the .NET agent's profiler and therefore be instrumented and analyzed. 

<a href="assets/images/IIS-Express.png" rel="lightbox" title="Healthy Agent"><img class="thumbnail" src="assets/images/IIS-Express.png"/></a>

> **Note:** IIS-Express process instances are commonly launched by other programs such as Visual Studio or a command window. These programs should be restarted after setting these user environment variables. Any programs (such as Visual Studio) that were running *before* user environment variables are set will consequently launch IIS-Express *without* the environment variables and that IIS-Express-hosted application will *not* be instrumented and analyzed. 

Once environment variables have been set, the Contrast Tray will display a "Remove Environment Variables" that can be used to disable Contrast analysis of IIS-Express-hosted applications. 

Any instrumented applications currently running on IIS Express will be shown in the **IIS Express** tab along with a count of the number of URLs (without the querystring) observed.

<a href="assets/images/IIS-Express-App.png" rel="lightbox" title="Healthy Agent"><img class="thumbnail" src="assets/images/IIS-Express-App.png"/></a>