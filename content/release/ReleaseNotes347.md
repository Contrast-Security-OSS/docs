<!--
title: "Contrast 3.4.7 - December 2017"
description: "Contrast 3.4.7 December 2017"
tags: "3.4.7 December Release Notes"
-->

Keep your issues strong with new integration features and customized Assess Rules for your applications.  

## Fixes

* Updates from your two-way JIRA integrations are reflected on your Dashboard. CONTRAST-15461
* Automatically create tickets and keep your two-way integration in VSTS. CONTRAST-18968
* Server counts are more accurate in Attack pages. CONTRAST-15212
* Merge multiple applications without issues. CONTRAST-19621
* Load Attack Events without errors. CONTRAST-17551, CONTRAST-18198
* View all applications in the Vulnerability Trend - they're within your limits. CONTRAST-18669
* Licenses are back on the Organizations Statistics reports. CONTRAST-19724
* No more 404s or blank login screens for EOP clients. CONTRAST-18472, CONTRAST-19678
* Filter servers for "Incomplete Protection" and get the results you wanted. CONTRAST-15667
* Safely retain or remove requirements from your Library Policy configuration. CONTRAST-19331, CONTRAST-19396
* Vulnerability page title and details got their stories straight. CONTRAST-16383
* Enable two-way integration with TFS 2017. CONTRAST-19341
* Application Access Group permissions apply to child applications. CONTRAST-19332
* Browse your Applications grid without getting bogged down by duplicate rows. CONTRAST-19330
* Don't get stuck after you delete a vulnerability - we'll promptly redirect you to the Vulnerabilities grid. CONTRAST-15564

## Improvements 

* Apply different Assess rules to different applications to customize your vulnerability detection requirements for each of your applications. 

* Send [details of vulnerable libraries](user-libraries.html#manage-lib) as tickets to your [integrated bugtracking system](admin-orgintegrations.html#bugtracker), you can see your work in one place.
 
* Just like our Slack or HipChat integrations, you can send your notifications to your [VictorOps](admin-orgintegrations.html#victorops) channels and get them into the right hands at the right time.

* You'll look at the Libraries grid a little bit differently when you see the most vulnerable ones first by default. 

* We revamped your view of API credentials to make [using](user-account.html#profile) and [managing](admin-orgsettings.html#apikey) them quite a bit easier. 
 
## Agent Updates

### Java summary 


### .NET summary 


### Node.js summary 

We implemented multiple improvements to the reporting of traces in Assess rules by adding code snippets to the “+”, template concat and property access source events. We’ve also updated the formatting of event objects without constructor names, added propagation through the util.format function, and reduced the number of false positives in the static analysis rules. Finally, the Node agent now supports a configuration option to specify the location to download the agent when auto-update is enabled.

### Ruby summary 

We have a new CVE shield for CVE-2017-17405, which blocks a command injection vulnerability in Net::FTP in unpatched Ruby versions. We also have better coverage of vulnerabilities exposed during WebSocket requests. The commend injection rule no longer send an extra “probed” result if the attack takes place in a separate process; similarly, we're no longer reporting a “probed” result in the XSS injected rule if the attack was seen in the url-encoded query string, even when the attack was identified in the parsed parameter value. Finally, we closed a bug where connection issues to the Contrast application could result in the configuration being lost until the connection was re-established.




