<!--
title: "Contrast .NET Core Agent System Requirements"
description: "Contrast .NET Core agent system requirements"
tags: "installation agent .NET Core system requirements"
-->

## Before You Start 

Before installing the .NET Core agent, confirm that you can meet the following requirements:

- You have administrative access to a web server, and the server is supported by Contrast.
- There is a deployed application to be analyzed, and the web application technology is supported by Contrast.
- The web server has network connectivity with Contrast. 
- The server meets the minimum requirements (stated below). 

## Minimum Requirements

* .NET Framework version 4.7.0 or above installed
* .NET Core versions 2.1 or 2.2 (installed system wide)
* 2 CPUs
* 4 GB of RAM
* Windows operating system

## Recommended Requirements

* 4+ CPUs
* 8+ GB of RAM

> **Notes:** 
> * The server must have .NET Framework 4.7.0 or later installed; this is only used to start up the agent and connect to the Contrast UI. This requirement doesn't extend to applications that need to be analyzed. The .NET Core agent can analyze web applications that run on a supported CoreCLR Runtime (CLR): CoreClr v. 2.1 and above.
>
> * The .NET Core agent running in Assess mode roughly doubles the RAM requirements of analyzed applications. Applications should use less than half of the available memory when the .NET agent isn't installed. 
>
> * The .NET Core agent uses the CLR Profiling API to perform data and code flow analysis - detect SQL-injection, XSS, weak cryptography, etc. - as well as to detect libraries and technologies used by analyzed applications. The .NET Core agent, unlike the .NET agent, cannot exist alongside other .NET Profiler agents, such as performance or APM tools.


