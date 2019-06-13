<!--
title: "IP Management"
description: "Overview of IP management"
tags: "Admin IP policy management protect"
-->

IP Management is Contrast's blacklist and whitelist (trusted hosts) management feature. Organization and Policy (Rules) have access to this feature. Go to **Policy Management** from the user menu and select IP Management from the left navigation. Here you can see the current hosts on the blacklist and whitelist as well as manage new and existing hosts. You can specify which environments you’d like the rule to apply to and set an expiration on the rule in the event you just want to place a host in a “penalty box”.

* **IP Blacklists** allow you to put a rule in place to distrust an IP, considering it unacceptable. This is used for immediate triage until a more permanent protection policy can be put in place or investigation can be conducted.  
* **Trusted Hosts** can be used to whitelist a host that is conducting an internal vulnerability scan to avoid polluting Contrast with non-attack data. This will disable the Protect features of Contrast for this IP (or range) including blocking and reporting. The Assess features will remain unaffected and will continue to function as normal. 

