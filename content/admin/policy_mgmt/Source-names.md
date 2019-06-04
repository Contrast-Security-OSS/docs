<!--
title: "IP Management"
description: "Overview of IP management"
tags: "admin policy management ip attacks attacker protect"
-->

Use source names to quickly identify non-threatening internal traffic and testing while monitoring attacks in your organization. To create a source name, all you need is the IP addresses you want to mark as safe and a name you'll recognize in the Contrast UI. Once the name is saved, Contrast will display it in the Attacks grids instead of the users' IP addresses. 

## Create Source Names

To set up source names, go to the **user menu > Policy Management > IP Management page** and select the **Source Names** tab. 



## View Source Names

In the grid...


## Edit and Delete Names

To edit a source name, ...
Once the name is updated, the UI will reflect the changes for all applicable events. If you change the criteria for the name, and some events no longer qualify, the name is removed from the events and replaced with the IP address. 

To delete a source name, ... 
Once the name is deleted, all references to the name are replaced with the IP address in the UI. 


## Name Conflicts 

If an event matches more than one source name, the name that you most recently updated is applied.

<!-- Add note to Attacks articles -->



For more information about using source names to view and manage attacks in the grids, see [Analyze](user-attacks.html#analyze-attacks) and [Monitor Attacks](user-attacks.html#monitor). 

