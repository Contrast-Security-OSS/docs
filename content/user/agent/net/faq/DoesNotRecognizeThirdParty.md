<!--
title: "TeamServer Does Not Recognize Third Party .NET Libraries"
description: "Troubleshooting guide for .NET agent issues"
tags: "libraries troubleshooting agent .Net"
-->


## Symptoms

* Certain third-party libraries are shown as **Unknown** or gray on TeamServer

## How To Solve

* There is no action to take at this time. Contrast uses a database of library file hashes to identify libraries (see the process for *Java libraries*).  This library is created by based on information from the [Nuget](https://www.nuget.org/) package repository (the de facto standard repository for .NET libraries).  Although most popular third-party libraries such as **Entity Framework** are  published on Nuget, others may not be and they will not be identified by Contrast.  

* Most first-party Microsoft libraries such as System.Data or System.Web (but not System.Mvc) are not published on Nuget and will not be identified by TeamServer either.  We may better identify first-party libraries in the future.


## See Also

[Getting .NET Agent Logs](user_netinstall.html#logs)

[Library Analysis](user_tsguidelib.html#analysis)

[.NET Agent Configuration](user_netconfig.html#config)


