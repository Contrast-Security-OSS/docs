<!--
title: "Contrast 3.4.3 - August 2017"
description: "Contrast 3.4.3 August 2017"
tags: "3.4.3 August Release Notes"
-->

Rah, rah, rah...

## Fixes

* CONTRAST-16619 - No more SAML issues as you set up authentication 
* CONTRAST-12241 - Launch API documentation from Contrast interface on Windows
* CONTRAST-15477 - Login and check out compliance violations without errors
* CONTRAST-16128 - (Fake) option to set Node security controls for specific rules is no more
* CONTRAST-16015 - Patch name appears in virtual patch Attack Events
* CONTRAST-15223 - Link to Ruby Agent configuration is active 
* CONTRAST-16520 - Servers with no UUID value are gone from the Production database for SaaS
* CONTRAST-16548 - Menu options for Node applications have been restored 
* CONTRAST-16060 - Password validation works on the registration page
* CONTRAST-16531, CONTRAST-16532, CONTRAST-16165 - XML errors are in the past
* CONTRAST-16483 - Trace processing accepts trace events  
* CONTRAST-16032, CONTRAST-16038 - IP Blacklist page is back  
* CONTRAST-14764 - Virtual Patches show up for the right applications
* CONTRAST-15994 - Protect events render again 

## Improvements 

* Admins can now set Protect policies before licensing and onboarding any application. Go to the Protect Rules page to quickly configure rules for any environment.

* Search attacks and attack events by ID, just like you search for vulnerabilities.
 
* We no longer support instrumentation through the Profiler API and only uses Duplex technology: a patented mechanism that allows us to coexist peacefully with your other favorite .NET agents.
 
* We added every pirate’s favorite ASP.NET library, SignalR, to our list of supported technologies, so you can rest assured that your application’s real-time web functionality is secure with Contrast.

* Forgotten to test your applications? We'll start reminding you so your servers aren't so empty. 

## Agent Updates

* **Java Agent Summary:** 

* **.NET Agent Summary:** We now report potential security controls and provide more reliable initialization. We also improved stability of IIS-Express instrumentation as well as Assess and Protect accuracy.

* **Node.js Agent Summary:** We're supporting more useful logging for application clustering and automatically adding applications to existing groups. We fixed an issue that was preventing URLs from showing up in application activity - and, yes, it’s really fixed this time.

* **Ruby Agent Summary:** We've added logic for reporting the application build number, the initial SSRF rule implementation, and the ability to set or override configuration values with command line options. As we enter the final month before our GA with Contrast version 3.4.4, our September work will be focused on increasing performance and preparing for advanced Protect rules and Assess features.






