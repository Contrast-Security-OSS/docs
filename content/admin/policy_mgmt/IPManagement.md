<!--
title: "IP Management"
description: "Overview of IP management"
tags: "Admin IP policy management protect"
-->

Manage IPs in your organization with blacklists, whitelists (trusted hosts) and source names. Organization and Rules admins can go to the **user menu > Policy Management > IP Management tab** to create and manage your preferences.

* **IP Blacklists** allow you to put rules in place to distrust IP addresses, which are then considered to be unacceptable. This is appropriate for immediate triage until you can put a more permanent Protect policy in place or conduct an investigation.
* **IP Whitelists** let you mark trusted hosts conducting internal vulnerability scans as safe to avoid polluting Contrast with non-attack data. Data for whitelisted IP addresses does not appear in the Contrast UI. 
* [Source Names](admin-ipmgmt.html#source-name) allow you to label one or more trusted IP addresses or subnet masks with any name you choose. The chosen name then appears in your **Attacks > Monitor** as well as **Attack Details** pages, which allows you to quickly identify and differentiate events by these users from attack events that need your attention. 

