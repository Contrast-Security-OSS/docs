<!--
title: "Contrast .NET Service Can't Start with Another Profiler Attached to IIS"
description: "Troubleshoot guide for .NET agent issues"
-->

## Issue

The .NET agent doesn't start, and the following error message is displayed in the Tray application: 

    > *The Contrast .NET service cannot start with another profiler attached to IIS. COR_ENABLE_PROFILING: 0x01, COR_PROFILER: {BX7CFC47-3E35-2c2e-B495-534F93B28123}, COR_PROFILER_PATH:...*

The CLR Profiling API only allows a single agent to be attached to a .NET process. The Contrast .NET agent uses the Profiling API to perform data/code flow analysis and detect libraries used by the application.

> **Note:** Many performance/APM tools - such as New Relic, AppDynamics and Dynatrace - also use the CLR Profiling API.

## Solution

To resolve the issue, Contrast implemented profiler chaining that allows Contrast to run side-by-side with another profiling tool. To enable profiling, see the `ProfilerChainingEnabled` [configuration setting](installation-netconfig.html#overview).
