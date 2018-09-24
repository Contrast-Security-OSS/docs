<!--
title: "A Particular Resource Returns 0 Bytes Under the Contrast .NET Agent"
description: "Troubleshooting guide for .NET agent issues"
tags: "troubleshoot zero bytes agent installation .NET"
-->

## Issue

* A particular resource (page, image, etc.) works normally when the .NET agent isn't running, but stops working when the agent is running.

* When using browser developer tools - or something similar to view network traffic - and the .NET agent is running, the resource returns **0 bytes**.

## Solution

The .NET aget uses a filter in a `System.Web.IHttpModule` to gather HTTP response data. There is a known Microsoft bug in the .NET framework: `HttpModules` with filters can cause resources such as *WebResource.axd* to return **0 bytes** (which can result in 500 status responses for embedded resources such as images). Use one of the following strategies to resolve this issue:

* Configure the .NET agent using the `ResponseUrlWhitelistRegex` settings to prevent Contrast from applying the `HttpModules` filter to the resource. See the [.NET Configuration](installation-netconfig.html) article for more information.
 
* Disable collection and analysis of HTTP response bodies by disabling full-content-analysis (`<full-content-analysis enabled="false">`) in *%ProgramData%\Contrast\dotnet\customerPolicy.xml*. See the article on [Custom Policy](installation-netpolicy.html#response) for more information.
