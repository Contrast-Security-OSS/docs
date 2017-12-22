<!--
title: "Contrast 3.4.7 - December 2017"
description: "Contrast 3.4.7 December 2017"
tags: "3.4.7 December Release Notes"
-->


## Fixes

*  
 
## Improvements 

* Send [details of vulnerable libraries](user-libraries.html#manage-lib) as tickets to your [integrated bugtracking system](admin-orgintegrations.html#bugtracker), you can see your work in one place.
 
* Just like our Slack or HipChat integrations, you can send your notifications to your [VictorOps](admin-orgintegrations.html#victorops) channels and get them into the right hands at the right time.

* You'll look at the Libraries grid a little bit differently when you see the most vulnerable ones first by default. 

* While we’re gearing up for our beta release of Node Protect, we added a new rule to the Alpha program: Path Traversal attack detection. (Our Protect beta will be open to all Contrast users, so look out for the release toward the end of January – and we’ll keep our eyes peeled for your feedback!)

* We revamped your view of API credentials to make [using](user-account.html#profile) and [managing](admin-orgsettings.html#apikey) them quite a bit easier. 
 
## Agent Updates

### Java summary 


### .NET summary 


### Node.js summary 

We implemented multiple improvements to the reporting of traces in Assess rules by adding code snippets to the “+”, template concat and property access source events. We’ve also updated the formatting of event objects without constructor names, added propagation through the util.format function, and reduced the number of false positives in the static analysis rules. Finally, the Node agent now supports a configuration option to specify the location to download the agent when auto-update is enabled.

### Ruby summary 

We have a new CVE shield for CVE-2017-17405, which blocks a command injection vulnerability in Net::FTP in unpatched Ruby versions. We also have better coverage of vulnerabilities exposed during WebSocket requests. The commend injection rule no longer send an extra “probed” result if the attack takes place in a separate process; similarly, we're no longer reporting a “probed” result in the XSS injected rule if the attack was seen in the url-encoded query string, even when the attack was identified in the parsed parameter value. Finally, we closed a bug where connection issues to the Contrast application could result in the configuration being lost until the connection was re-established.




