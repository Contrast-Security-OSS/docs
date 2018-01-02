<!--
title: "Contrast 3.4.7 - December 2017"
description: "Contrast 3.4.7 December 2017"
tags: "3.4.7 December Release Notes"
-->

Keep your issues strong with new integration features and customized Assess Rules for your applications.  

## Fixes

* Updates from your two-way JIRA integrations are reflected on your Dashboard. 
* Automatically create tickets and keep your two-way integration in VSTS. 
* Server counts are more accurate in Attack pages. 
* Merge multiple applications without issues. 
* Load Attack Events without errors. 
* View all applications in the Vulnerability Trend - they're within your limits.
* Licenses are back on the Organizations Statistics reports. 
* No more 404s or blank login screens for EOP clients. 
* Filter servers for "Incomplete Protection" and get the results you wanted. 
* Safely retain or remove requirements from your Library Policy configuration. 
* Vulnerability page title and details got their stories straight. 
* Enable two-way integration with TFS 2017. 
* Application Access Group permissions apply to child applications. 
* Browse your Applications grid without getting bogged down by duplicate rows. 
* Don't get stuck after you delete a vulnerability - we'll promptly redirect you to the Vulnerabilities grid. 

## Improvements 

* Apply different [Assess Rules](admin-policymgmt.html#assess) to different applications to customize your vulnerability detection requirements for each of your applications. 

* Send [details of vulnerable libraries](user-libraries.html#manage-lib) as tickets to your [integrated bugtracking system](admin-orgintegrations.html#bugtracker), so you can see your work in one place.
 
* Just like our Slack or HipChat integrations, you can send your notifications to your [VictorOps](admin-orgintegrations.html#victorops) channels and get them into the right hands at the right time.

* You'll look at the Libraries grid a little bit differently when you see the most vulnerable ones first by default. 

* We revamped your view of API credentials to make [using](user-account.html#profile) and [managing](admin-orgsettings.html#apikey) them quite a bit easier. 
 
## Agent Updates

### Java summary 

We made some improvements for attack detection in Protect mode, and reduced the frequency of check-in messages from the agent to the Contrast application. We also fixed a few bugs around the format of findings we send to Contrast.  

### .NET summary 

We support CLR2 and CLR for Protect and Assess in the default Profiler mode as well as disabled rules for specific applications. We're including application names in Protect events, but decided to remove start/stop from the Contrast.NET tray. During this time, we also improved handling of application pools in Whitelist, and fixed application activity reporting in Inventory mode. 

### Node.js summary 

We implemented multiple improvements to the reporting of traces in Assess rules by adding code snippets to the “+”, template concat and property access source events. We’ve also updated the formatting of event objects without constructor names, added propagation through the util.format function, and reduced the number of false positives in the static analysis rules. Last, but not least, the Node agent now supports a configuration option to specify the location to download the agent when auto-update is enabled.

### Ruby summary 

We have a new CVE shield for CVE-2017-17405, which blocks a command injection vulnerability in Net::FTP in unpatched Ruby versions. We also have better coverage of vulnerabilities exposed during WebSocket requests. The commend injection rule no longer send an extra “probed” result if the attack takes place in a separate process; similarly, we're no longer reporting a “probed” result in the XSS injected rule if the attack was seen in the url-encoded query string, even when the attack was identified in the parsed parameter value. Finally, we closed a bug where connection issues to the Contrast application could result in the configuration being lost until the connection was re-established.




