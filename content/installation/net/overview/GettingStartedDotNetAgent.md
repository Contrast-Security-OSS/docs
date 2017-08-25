<!--
title: "Getting Started with the .Net Agent"
description: "Planning for the Contrast .NET Agent."
tags: "installation overview planning agent .Net"
-->

There are a few things to take into consideration when you're planning to use Contrast to analyze your ASP.NET web applications. The following information helps you prepare your environment for the Contrast .NET agent.

## Administrative Access to Web Server 

You must have administrative access to the web server in order to install the Contrast .NET agent. Additionally, the web server should have at least one web application deployed for Contrast to analyze. The server and application must both be supported by Contrast. See [.NET Contrast Agent Supported Technologies](installation-net.html#net-supported) for more information. 

The .NET Contrast agent requires that the machine have .NET Framework 4.5.1+ installed. However, this requirement doesn't extend to applications to be analyzed; the agent can analyze web applications that run on CLR 4 (.NET 4.0+).

## Restart IIS 

The .NET agent must restart IIS (and any IIS worker processes) in order to instrument methods as they are compiled. This process is similar to how other agent products (e.g., memory or performance profilers) behave. Users don't have to restart IIS manually; Contrast automatically restarts IIS when the agent is installed and whenever the .NET agent is stopped or started. 

You may want to change configuration of any web server monitoring tools that raise alarms when Contrast restarts IIS. You may also want to check that Contrast properly restarts IIS-dependent services. 

The .NET agent restarts IIS by stopping the Windows Process Activation Service (WAS), and then starts any previously running services that are dependent on WAS, such as World Wide Web Publishing Service (w3svc). In some cases, users needed to manually configure service dependencies so that WAS-dependent services restart with IIS (e.g., MSMQ Listener Adapter). 


