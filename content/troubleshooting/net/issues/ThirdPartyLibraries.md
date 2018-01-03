<!--
title: "Contrast Does Not Recognize Third Party .NET Libraries"
description: "Troubleshooting guide for .NET agent issues"
tags: "libraries troubleshoot agent .NET"
-->

## Issue 

You see certain third-party libraries marked as **Unknown** or gray in Contrast.

## Solutions

There is no action to take at this time. 

Contrast uses a database of library file hashes to identify [libraries](user-libraries.html#analysis). This library database is based on information from the [Nuget](https://www.nuget.org/) package repository (the de facto standard repository for .NET libraries). Most popular third-party libraries such as **Entity Framework** are published on Nuget. However, Contrast doesn't identify the libraries that aren't published in the repository, including most first-party Microsoft libraries such as *System.Data* or *System.Web* (but not *System.Mvc*). Contrast may identify more first-party libraries in future versions.
