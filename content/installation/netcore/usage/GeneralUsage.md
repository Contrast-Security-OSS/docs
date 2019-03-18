<!--
title: ".NET Agent Usage"
description: "General Usage of the Contrast .NET Core Agent"
tags: "installation agent .NET Core windows usage updates analysis"
-->

## How It Works

The Contrast agent is designed to require little to no interaction from the user to set up instrumentation on a .NET Core application. Once the environment is set up through environment variables or application launch profile, the .NET Core agent automatically instruments the ASP.NET Core application. The agent performs analysis as users (or automated scripts or tests) exercise applications. You can view the results of the agent's analysis in the [Contrast UI](https://app.contrastsecurity.com).

The Contrast .NET Core agent consists of two components that run within the same process as your application.

* The **.NET Profiler** that instruments applications to weave in method calls out to agent sensors. 

* **Sensors** that gather security, architecture and library information. 

These components are located in several DLL files that you may download from the Contrast UI. You can place them anywhere on disk (and they don't need to be placed in your application folder).

## Agent Updates

To update the agent, replace the agent files in the agent directory and restart your application. As the agent is running alongside your application, it can't update itself.

## Analysis

### Start the agent 

The agent automatically starts with your application as long as the environment is setup as described in [.NET Core installation](installation-netcoreinstall.html).  

### Stop the agent 

To stop the agent, stop the application and remove agent from its environment. Alternatively, you may change the `CORECLR_ENABLE_PROFILING` setting to `0`.

