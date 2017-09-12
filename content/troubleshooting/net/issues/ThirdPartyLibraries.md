<!--
title: "Contrast Does Not Recognize Third Party .NET Libraries"
description: "Troubleshooting guide for .NET agent issues"
tags: "libraries troubleshoot agent .Net"
-->


## Issue 

You see certain third-party libraries marked as **Unknown** or gray in Contrast.

## Solutions

There is no action to take at this time. 

Contrast uses a database of library file hashes to identify [libraries](user-libraries.html#analysis). This library database is based on information from the [Nuget](https://www.nuget.org/) package repository (the de facto standard repository for .NET libraries). Although most popular third-party libraries such as **Entity Framework** are  published on Nuget, the ones that aren't also aren't identified by Contrast.  

Most first-party Microsoft libraries such as *System.Data* or *System.Web* (but not *System.Mvc*) aren't published on Nuget and won't be identified by Contrast. Contrast may identify more first-party libraries in future versions.


## More Information

* [Getting .NET Agent Logs](troubleshooting-net.html#net-logs)

* [Library Analysis](user-libraries.html#analysis)

* [.NET Agent Configuration](installation-netconfig.html)


