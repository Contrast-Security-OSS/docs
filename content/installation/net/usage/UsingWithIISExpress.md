<!--
title: "Using Contrast With IIS Express"
description: "Guide to using IIS Express"
tags: "installation tray configuration IIS express agent .Net"
-->

The .NET agent can analyze ASP.NET applications hosted on IIS-Express but it takes a little bit of work to enable instrumentation on IIS-Express. The Contrast tray displays a tab for IIS Express if IIS Express is installed on the server. 

The Contrast Tray initially displays a **Set Environment Variables** button to enable instrumentation of IIS Express-hosted applications. Selecting this button sets environment variables for the current user so that any new IIS-Express process will load the .NET agent's profiler, and be instrumented and analyzed. 

<a href="assets/images/IIS-Express.png" rel="lightbox" title="Healthy Agent"><img class="thumbnail" src="assets/images/IIS-Express.png"/></a>

> **Notes:** 
 * IIS-Express process instances are commonly launched by other programs such as Visual Studio or a command window. You should restart these programs after setting these user environment variables. Any programs (such as Visual Studio) that were running *before* you set user environment variables will consequently launch IIS Express **without** the environment variables, and the IIS Express-hosted application won't be instrumented and analyzed. 
 * Setting user environment variables also causes any .NET applications launched by the user to load the Contrast Profiler. The Contrast Profiler will safely detach from any non-IIS/non-IIS Express process. Windows treats detachment of a profiler DLL as an error message in the Windows Event Log; however, you can safely ignore these errors.

Once you've set environment variables, the Contrast Tray displays a **Remove Environment Variables** button that you can use to disable Contrast analysis of IIS Express-hosted applications. 

Any instrumented applications currently running on IIS Express are displayed in the **IIS Express** tab along with a count of the number of URLs (without the querystring) observed.

<a href="assets/images/IIS-Express-App.png" rel="lightbox" title="Healthy Agent"><img class="thumbnail" src="assets/images/IIS-Express-App.png"/></a>

