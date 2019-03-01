<!--
title: "Contrast 3.6.1 - February 2019"
description: "Contrast 3.6.1 February 2019"
tags: "3.6.1 February Release Notes"
-->


## Fixes

* The Contrast UI loads correctly in Internet Explorer 11. CONTRAST-30517
* The **Libraries** grid loads correctly, even if you sent a library to a bugtracker. CONTRAST-30162
* Timestamps are back in the **Vulnerabilities** and **Servers** grids. CONTRAST-26685
* Custom banners are fixed at the bottom of the grids pages. CONTRAST-30228
* The **Servers** grid is immediately populated once you onboard your first application. CONTRAST-29893
* The Build Numbers filter has returned to each application's **Vulnerabilities** tab. CONTRAST-30618
* Add an exclusion for a Protect Rule from an attack **Overview** page. CONTRAST-21582
* CONTRAST-30166

## Improvements

Check back next release!

## Agent Updates

### Java summary 

The Java team improved memory usage of Assess analysis, reduced noise in data flow analysis against applications using logback, and added an Assess validator for the Spring framework. We fixed an issue in Assess data flow analysis involving unmodifiable lists as well as an issue where reporting of parameter names and values could be swapped under JaxRS applications. 

### .NET summary 

The .NET team fixed race conditions when evaluating exclusions and capturing a stack trace, and improved performance of instrumentation. We also implemented Untrusted Deserialization for Protect covering all formatters with known exploits in the .NET Framework Base Class Library (BCL) as well as JSON.NET.

### Node.js summary 

The Node team resolved an issue where the *asar* library was causing an `npm` audit run to fail. The NoSQL rule was updated to catch a potential attack using the not equal operator. A issue where the agent couldn't be installed on a bare-bones Linux distribution due to a dependency of a dependency relying on the git executable being available was closed.

### Ruby summary 

The Ruby team has focused on performance and security updates in the Assess features of the agent. We moved Regex, Kernel and Enumerator patching from the Ruby code to the underlying *C* level. We updated the policy to be more conservative about patching ancestors of methods. We also added a check for port in use before starting the Contrast Service.

### Python summary

The Python agent team added support for the urllib3 and requests library for the SSRF Protect Rule. There were additional updates for performance and code stability in how Protect Rules are applied to sinks.

