<!--
title: "IP Management"
description: "Overview of IP management"
tags: "Admin IP policy management protect"
-->

Manage IP policy in your organization with blacklists, whitelists (trusted hosts) and source names. Users with Organization Admin and Rules Admin permissions can go to the **user menu > Policy Management > IP Management tab** to create and manage your preferences.

* **IP Blacklists** allow you to put rules in place to distrust IP addresses, which are then considered to be unacceptable. This is appropriate for immediate triage until you can put a more permanent Protect policy in place or conduct an investigation.
* **IP Whitelists** let you mark trusted hosts conducting internal vulnerability scans as safe to avoid polluting Contrast with non-attack data. Data for whitelisted IP addresses does not appear in the Contrast UI. 
* [Source Names](admin-ipmgmt.html#source-name) allow you to label attack events caused by known sources, such as pen testers, based on one or more IP addresses or subnet masks. When you view attacks in the **Attacks > Monitor** and **Attack Details** pages, Contrast displays the source name instead of the attacker's IP information. This allows you to quickly identify and differentiate expected events from attack events that need your attention. 

