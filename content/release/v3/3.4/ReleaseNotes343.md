<!--
title: "Contrast 3.4.3 - August 2017"
description: "Contrast 3.4.3 August 2017"
tags: "3.4.3 August Release Notes"
-->

Set optimal standards for user accounts in the refreshed Security page, and create Protect policies before onboarding to any applications. Once you do, we'll give you some complimentary guidance on using your applications so you see the results you want.  

## Fixes

* No more SAML issues during authentication set up 
* API documentation is ready to go from Contrast on Windows
* Login and check out compliance violations without errors
* Removed (fake) option to set Node security controls for specific rules 
* Virtual patches display names in Attack Events and show up in the right applications
* Link to Ruby Agent configuration is active 
* Servers with no UUID value are gone from the Production database for SaaS
* Menu options for Node applications are restored 
* Password validation works on the registration page
* XML errors are things of the past
* Trace processing accepts trace events  
* IP Blacklist page is back  
* Protect events render again 

## Improvements 
 
* Use the revamped Security page to manage password policy, session timeouts, two-step verification and IP restrictions. You can also access an audit log, where you can search for past activity in your organization by keyword and date.

* We no longer support instrumentation through the Profiler API and only uses Duplex technology: a patented mechanism that allows us to coexist peacefully with your other favorite .NET agents.
 
* Admins can now set Protect policies before licensing and onboarding any application. Go to the Protect Rules page to quickly configure rules for any environment.

* Specify the application language(s) when you're creating virtual patches and Log Enhancers. 

* We added every pirate’s favorite ASP.NET library, SignalR, to our list of supported technologies, so you can rest assured that your application’s real-time web functionality is secure with Contrast.

* We'll give you some guidance on using your applications so you see results and recognize them on your servers.

* Change the severity for an entire vulnerability type with the click of a confirmation button. 

## Agent Updates

* **Java Agent Summary:** We added several rule accuracy improvements for Assess and Protect along with the ability to more easily deploy custom rules and better support for library detection in GlassFish. We also fixed a bug in the data flow engine that would prevent vulnerabilities from being reported in certain conditions.

* **.NET Agent Summary:** We now report potential security controls and provide more reliable initialization. We also improved stability of IIS-Express instrumentation as well as Assess and Protect accuracy.

* **Node.js Agent Summary:** We're supporting more useful logging for application clustering and automatically adding applications to existing groups. We fixed an issue that was preventing URLs from showing up in application activity - and, yes, it’s really fixed this time.

* **Ruby Agent Summary:** We've added logic for reporting the application build number, the initial SSRF rule implementation, and the ability to set or override configuration values with command line options. As we enter the final month before our general availability with Contrast version 3.4.4, our September work will be focused on increasing performance and preparing for advanced Protect rules and Assess features.






