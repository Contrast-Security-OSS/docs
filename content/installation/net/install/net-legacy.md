<!--
title: ".NET Framework (legacy)"
description: "General Usage of the legacy .NET Framework agent"
tags: "installation legacy supported technologies agent .Net"
-->

## Overview

**Important note:** If your applications are running on modern technology you should use the ​.NET Framework agent​​ instead of the legacy agent. The legacy .NET Framework agent offers the full capabilities of Contrast Assess, Protect, and OSS as of March 2020 but is no longer receiving new features or lower severity bug fixes. Contrast will continue to fix critical bugs in the legacy agent until January 10th, 2023.

The legacy Contrast .NET Framework agent can be used to analyze ASP.NET web applications running on legacy technologies including:  
* Windows Server 2008
* Windows machines that cannot upgrade to .NET Framework version 4.7.1 or newer
* Applications that target the CLR2 runtime and cannot be upgraded to CLR4

## Supported Technologies

The legacy Contrast .NET Framework agent can be used to analyze ASP.NET web applications using the following technologies:

| Technology                 | Supported versions                       |
| -------------------------- | ---------------------------------------- |
| Contrast version           | Contrast version 3.7.3 or newer          |
| Agent version              | 20.4.4 and later                         |
| Language versions          | 3.5, 4.0, 4.5, 4.5.1, 4.5.2, 4.6, 4.6.1, 4.6.2, 4.7, 4.7.1, 4.7.2, 4.8                 |
| Operating systems          | <li>Windows 7, 8, 10</li><br/> <li>Windows Server 2008 R2, 2012, 2012 R2, 2016, 2019</li>|
| Application framework      | <li>ASP.NET MVC 3-5</li><br/> <li>ASP.NET Web Forms</li><br/><li>ASP.NET Web Pages</li><br/><li>IIS-Hosted ASMX-based Web Services</li><br/><li>IIS-Hosted Web API</li><br/><li>IIS-Hosted WCF Services</li><br/> |
| Processor architecture | The agent can be installed on both 32-bit and 64-bit systems. On 64-bit systems, you can use the agent to analyze both 32-bit and 64-bit web applications. |
| Web servers      | <li>IIS </li><br/> <li>IIS Express</li><br/> |

## System requirements

Before installing the .NET legacy agent, you must meet the following requirements:

| Requirement                 | Recommended                             |
| -------------------------- | ---------------------------------------- |
| Language version           | .NET Framework 4.5.1 present             |
| CPU                        | 2                                        |
| Memory                     | 4 GB                                     |

## Install legacy .NET Framework agent

To install the legacy .NET Framework agent:

1. In the. Contrast web application, select ​**Add agent**​ in the top right. Select **.NET agent** and select Download. This will download a ​*contrast_security.yaml*​​ file for your agent.
2. [Download​](https://contrastsecurity.jfrog.io/contrastsecurity/webapp/#/artifacts/browse/tree/General/dotnet-legacy-release) the legacy .NET Framework agent (for example ​*ContrastSetup_20.3.1.zip​​*).
3. Copy the ​*contrast_security.yaml*​​ configuration file and agent zip to the web server.
4. Extract the downloaded zip archive (for example, ​*ContrastSetup_20.3.1.zip*​​) on the web server.
5. Move the ​*contrast_security.yaml*​ file in the same directory as *​ContrastSetup.exe*​​.
6. Run ​`ContrastSetup.exe​​`. This installs the .NET agent. Once installed, the .NET agent automatically instruments ASP.NET applications deployed to IIS. Agent analysis is performed as applications are exercised by users (or by automated scripts or tests).


