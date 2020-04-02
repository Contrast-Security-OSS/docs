<!--
title: "Contrast 3.7.2 - March 2020"
description: "Contrast 3.7.2 March 2020"
tags: "3.7.2 March Monthly Release News"
-->

## On-premises release date:
March 31, 2020

### New features and improvements

**Python for Assess**
This feature is now generally available for all Assess users to instrument web applications written in Python to find custom code vulnerabilities. Assess capabilities include support for Django, Flask, and Pyramid along with route coverage and route-based auto-verification for each framework.

### Important note
With the 3.7.1 release, which upgraded Tomcat to version 9, users were experiencing a broken AJP (Apache JServ Protocol) connection. This required an AJP secret, or that the secret be disabled. [Configuration options](admin-systemsettings.html#https) have been added and are configurable through the *server.properties* file.


## Agent Updates

### Java Agent Summary

**Agent versions released this month:** 3.7.2.14224

**Language versions supported:** Java 1.6 - 1.8 and 11

#### Bug Fixes:
In some cases, when users sanitized attacker-controlled data encoders, Contrast Assess considered the encoder input to also be safe in other contexts. This could have led to false negatives in our data flow analysis. We fixed this so that only the data returned by an encoder (and never the input) would be considered safe in a data flow analysis.

#### New features and improvements:
Performance improvements which lead to better agent start-up time and lower Protect overhead when analyzing JSON requests.

### Node.js Agent Summary 

**Agent versions released this month:** 2.12.3, 2.12.4, 2.12.5, 2.13.0

**Language versions supported:** 10, 12

#### Bug fixes:
* A glip-service-monitor issue required changing how the agent handles toString on ECMAScript class methods.
* Issue allowed uncaught exceptions to occur during Protect sink analysis for the SQL-Injection rule.
* Node.js v 12 on RHEL 7 had a compiler issue. 
* Incorrectly named compiled artifact caused an error for Windows users.


#### New features and improvements:
Previously, the Node.js agent has provided minimal support for marsdb, the datastore used by OWASP juice-shop. New Assess support for marsdb API has been added.

### Python Agent Summary 

**Agent versions released this month:** 2.7.1, 2.7.2, 2.7.3, 2.8.0

**Language versions supported:** 2.7 and 3.5-3.8 (New support for 3.8)

#### Bug fixes:
* Correctness of application code was affected in our unsafe code execution rules.
* Converted some misleading ERROR log messages to DEBUG level.
* Logger settings configured in the web interface were not handled correctly.


#### New features and improvements:
* Python Assess feature is officially out of beta and generally available.
* Added Unvalidated Redirect Assess rule for Flask framework.
* More improvements to XSS detection in Assess, specifically to the mako templating engine.
* Removed external dependency on PyYAML, which leads to fewer conflicts with customer environments.
* Added more coverage for detection of SSRF rule in Assess


### Ruby Agent Summary 

**Agent versions released this month:** 3.7.0, 3.7.1, 3.8.0

**Language versions supported:** 2.4-2.7

#### Bug fixes:
* Updated how we instrument serialization to address an infinite loop.

#### New features and improvements:
* Added support for propagation through ERB templates.
* Improved performance.
* Added a new rule: Regular expression Denial of Service (ReDoS)
* Deprecated support for the `agent.service.enable` yaml config option, in favor of the functionally equivalent, but more descriptive `agent.start_bundled_service` config option.
* Added support for Ruby 2.7 language.


### .NET Agent Summary

**Agent versions released this month:**
NET Framework: 20.3.1
.NET Core: 1.3.0

**Language versions supported:**
.NET Framework: 3.5, 4.0, 4.5, 4.5.1, 4.5.2, 4.6, 4.6.1, 4.6.2, 4.7, 4.7.1, 4.7.2, 4.8
.NET Core: 2.1, 2.2, 3.0, 3.1

#### Bug fixes:
* **.NET Framework and .NET Core:** The agent did not respect the `assess.stacktraces` configuration. 
* **.NET Core, Docker, Azure App Service:** In some cases, the agent would fail to use the configured proxy server when reporting route observations.
* **.NET Core:** The agent did not work with applications that referenced early versions of version 2.1.X libraries. 
**Note:** We still encourage customers to update their applications to reference the latest supported releases of .NET Core as they include important security fixes.

#### New features and improvements:
.NET Core now detects Server-Side Request Forgery (SSRF) attacks and supports CENTOS7.

**Note to IIS-Express users:** A change in the agent’s profiler component will cause the profiler to be loaded in additional processes launched by IIS-Express if global profiling environment variables are already set. The previous behavior of profiling only IIS-Express can be restored by removing the global environment variables using the “Remove Environment Variables” button in the IIS-Express tab of the Contrast Tray and then adding the variables back using the “Set Environment Variables” button.

**Note to .NET Framework agent users:** A future release of the .NET Framework agent will raise the minimum supported operating system to Windows Server 2012 and raise the minimum .NET Framework version to .NET 4.7.1. Support for Windows Server 2008 and older versions of the .NET Framework will be maintained via a fully featured legacy .NET Framework agent. This legacy agent will have all of the current features of the .NET Framework agent and will receive critical bug fixes but otherwise will not be the focus for future .NET development. 
