<!--
title: "TeamServer Does Not Recognize Third Party .NET Libraries"
description: "Troubleshooting guide for .NET agent issues"
-->


## Symptoms

* Popular third-party libraries such as **Entity Framework** are shown as **Unknown** or gray on TeamServer

## How To Solve

* There is no action to take at this time. Contrast uses a database of library file hashes to identify libraries (see the process for *Java libraries*). We are in the process of creating this database for .NET libraries based on information from the [Nuget](https://www.nuget.org/) package repository (the de facto standard repository for .NET libraries). We will update this page once the .NET library database is in place.


## See Also

[Getting .NET Agent Logs](user_netinstall.html#logs)

[Library Analysis](user_tsguidelib.html#analysis)

[.NET Agent Configuration](user_netconfig.html#config)


