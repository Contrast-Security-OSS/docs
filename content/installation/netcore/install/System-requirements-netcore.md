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

* .NET Core versions >= 2.1 < 3.0
* 2 CPUs
* 4 GB of RAM<sup>*</sup>
* A supported operating system <br> (See [Supported Technologies](installation-netcoresupport.html) for a complete list.)

## Recommended Requirements

* 4+ CPUs
* 8+ GB of RAM

> <sup>*</sup> The .NET Core agent running in Assess mode roughly doubles the RAM requirements of analyzed applications. Applications should use less than half of the available memory when the .NET agent isn't installed.
