<!--
title: "Contrast 3.4.3 - August 2017"
description: "Contrast 3.4.3 August 2017"
tags: "3.4.3 August Release Notes"
-->

Rah, rah, rah...

## Fixes

* CONTRAST-12241 - Launch API documentation from Contrast interface on Windows
* CONTRAST-16128 - Removed (fake) option to set Node security controls for specific rules
* CONTRAST-15477 - Login and check out compliance violations without errors
* CONTRAST-16015 - Added patch name to virtual patch Attack Events
* CONTRAST-15223 - Fixed the link to Ruby Agent configuration
* CONTRAST-16520 - Removed servers with no UUID value from the Production database for SaaS
* CONTRAST-16548 - Fixed menu options for Node applications

* CONTRAST-14764 - Virtual Patches now showing up for right applications
* CONTRAST-16032, CONTRAST-16038 - IP Blacklist page loading 
* CONTRAST-16600 - Fixed REST Assured tests
* CONTRAST-16483 - Trace processing no longer rejects trace events with 'sources' 
* CONTRAST-16343 - Stopped removing return type from .NET potential security controls
* CONTRAST-16060 - Fixed password validation on registration page
* CONTRAST-15994 - Protect events render 
* CONTRAST-16531 - Corrected character in trace XML

## Improvements 

* Admins can now set Protect policies before licensing and onboarding any application. Go to the Protect Rules page to quickly configure rules for any environment.
 
* The .NET agent no longer supports instrumentation through the Profiler API and only uses Duplex technology: a patented mechanism that allows us to coexist peacefully with your other favorite .NET agents.
 
* We’ve added every pirate’s favorite ASP.NET library, SignalR, to our list of supported technologies, so you can rest assured that your application’s real-time web functionality is secure with Contrast.

* Search attacks and attack events by ID, just like you search for vulnerabilities.

* Forgetting to test your applications? We'll start reminding you so your servers aren't so empty. 

## Agent Updates

* **Java Agent Summary:** 

* **.NET Agent Summary:** 

* **Node.js Agent Summary:** We're supporting more useful logging for application clustering and automatically adding applications to existing groups. We fixed an issue that was preventing URLs from showing up in application activity - and, yes, it’s really fixed this time.

* **Ruby Agent Summary:** We've added logic for reporting the application build number, the initial SSRF rule implementation, and the ability to set or override configuration values with command line options. As we enter the final month before our GA with Contrast version 3.4.4, our September workload will be focused on increasing performance and preparing for advanced Protect rules and Assess features.






