<!--
title: "Contrast .NET Core Agent System Requirements"
description: "Contrast .NET Core agent system requirements"
tags: "installation agent .NET system requirements"
-->


Before installing the .NET Core agent, confirm that you can meet the following requirements:

- You have administrative access to a web server, and the server is supported by Contrast.
- There is a deployed application to be analyzed, and the web application technology is supported by Contrast.
- IIS can be restarted.
- The web server has network connectivity with Contrast. 
- The server meets the minimum requirements (stated below). 

**Minimum requirements:**

* .NET Framework 4.5.1 present
* .NET Core 2.1 present
* 2 CPU
* 4 GB memory
* Windows operating system

**Recommended requirements:**

* .NET Framework 4.5.1 present
* .NET Core 2.1 present
* 4+ CPU
* 8+ GB memory  

> **Notes:** 
> * The server must have .NET Framework 4.5.1 installed;  This is only used to start up the agent and connect to Contrast UI. This requirement doesn't extend to applications that need to be analyzed. The .NET Core agent can analyze web applications that run on supported CoreCLR Runtimes (CLRs): CoreClr v. 2.1 and above.
>
> * The .NET agent running under Assess mode roughly doubles the RAM requirements of analyzed applications. Applications should use less than half of the available memory when the .NET agent is not installed. 
>
> * The .NET agent uses the CLR Profiling API to perform data and code flow analysis - detect SQL-injection, XSS, weak cryptography, etc. - as well as to detect libraries and technologies used by analyzed applications. The Contrast .NET Core agent currently cannot exist alongside other .NET Profiler agents, such as performance or APM tools.
