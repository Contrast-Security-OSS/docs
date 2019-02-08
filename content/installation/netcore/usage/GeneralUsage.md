<!--
title: ".NET Agent Supported Technologies"
description: "General Usage of the Contrast .NET Agent"
tags: "installation usage agent .Net"
-->

## How It Works

Contrast agents are designed to require little to no interaction from the user to setup instrumentation on a .NET Core application. Once the environment is setup, through environment variables or application launch profile, the .NET Core agent will automatically instrument the ASP.NET Core application.  Agent analysis is performed as applications are exercised by users (or by automated scripts or tests). You can view the results of the agent's analysis on the [Contrast website](https://app.contrastsecurity.com).

The Contrast .NET Core agent consists of a two components, both running within the same process as your application.

* **.NET Profiler** that instruments applications to weave in method calls out to agent sensors. 

* **Sensors** that gather security, architecture and library information. 

These components are located in several DLL files that you may download from the Contrast website.  They can be placed anywhere on disk and do not need to be placed in your application folder.

## Agent Updates

Since the .NET Core agent is running alongside your application, it cannot update itself.  To update the agent replace the agent files in the agent directory and restart your application.

## Analysis

### Start the agent 

The agent will automatically start along with your application as long as the environment is setup as described in [.NET Core installation].  

### Stop the agent 

To stop the agent, stop the application and remove agent from its environment.  Alternately you may just change the ```CORECLR_ENABLE_PROFILING``` setting to 0.

