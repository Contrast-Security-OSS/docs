<!--
title: "Attack Monitor"
description: "Overview of monitoring attacks"
tags: "protect manage attack attacker monitor events"
-->

The Attack Monitor page allows you to monitor and triage attacks that are currently happening, and look back to see attacks that occurred within a specific timeframe. The dashboard gives you the full picture of the attackers that attempted to exploit your applications, the type of attack events performed and which applications were involved. 

## Use the Monitor

Use the dropdown menus at the top of the page to customize by time span and environment. Use the search field to find attacks by the attacker, affected applications, or specific Assess or Protect rules. 

<!-- Search by source name -->

The badge to the right of the Attacks section communicates the current attack status. This keeps you apprised of any changes that may occur as you delve into details of other attacks. Any attacks that are currently happening also display a timeline on the left that shows the activity of all the attack events for the last five minutes. You can click into this activity for a larger view and additional information.

<a href="assets/images/Attacker-source-name.png" rel="lightbox" title="Use source names to identify attackers"><img class="thumbnail" src="assets/images/Attacker-source-name.png"/></a>

You can also see breakdowns of what has been exploited, blocked and probed. 

You can click on an attacker and Contrast will highlight the targeted applications and the rules that attacker applied. 
For further analysis, click on an attacker name or application title for a filtered view of all the attack events based on your selection.

-----

Source names...

> **Note:** If the data reported for an attack event matches more than one source name, the name that you most recently updated is applied.


## Attack Details

Click on an attacker's IP address or source name to see details about the attack. This takes you to the **Attack Details** page with a summary of information including the attack type, its duration, and affected applications and servers. From this page, you can add the attacker to an IP blacklist, export all the individual events that comprise the attack, or suppress an attack (and its events) altogether. Contrast will show the total number of events that make up that particular attack with the ability to expand into the details of each event. You can take other actions on events as you triage, such as creating virtual patches, configuring Protect rules, or adding exclusions.  

<a href="assets/images/Attack_Event.png" rel="lightbox" title="Attack Event Details"><img class="thumbnail" src="assets/images/Attack_Event.png"/></a>

