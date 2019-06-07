<!--
title: "Attack Monitor"
description: "Overview of monitoring attacks"
tags: "protection manage overview attacks monitor"
-->

The Attack Monitor dashboard allows you to monitor and triage attacks that are currently happening, or look back to see attacks that occurred within a specific timeframe. 

You can also configure which environment to display or eliminate ineffective attack events to help you focus on what needs attention right away. Contrast tells the story of all the attackers that attempted to exploit your applications, the type of attack events performed and which applications were involved. 

The badge to the right of the Attacks section communicates the current attack status. This keeps you apprised of any changes that may occur as you delve into details of other attacks. Any attacks that are currently happening also display a timeline on the left that shows the activity of all the attack events for the last five minutes. You can click into this activity for a larger view and additional information.

<a href="assets/images/Attacker-source-name.png" rel="lightbox" title="Use source names to identify Attackers"><img class="thumbnail" src="assets/images/Attacker-source-name.png"/></a>

## Use the Monitor

Several controls at the top of the page allow you to customize your view based on  time scale, environment and filtering by a specific rule, attacker IP or application you want to quickly find. You can also see breakdowns of what has been exploited, blocked and probed. 

You can interact with this page to understand relationships between what's presented. For example, you can click on an attacker and Contrast will highlight the targeted applications and the rules that attacker applied. You can also select multiple attackers, rules or applications by holding down the shift key. 

For further analysis, click on a specific rule title or application title for a filtered view of all the attack events based on your selection.

-----

Source names...

> **Note:** If the data reported for an attack event matches more than one source name, the name that you most recently updated is applied.


## Attack Details

Click on an attacker IP or source name to see details about the attack. This takes you to the **Attack Details** page with some summary information including the attack type, its duration, and affected applications and servers. From this page, you can add the attacker to an IP blacklist, export all the individual events that comprise the attack, or suppress an attack (and its events) altogether. Contrast will show the total number of events that make up that particular attack with the ability to expand into the details of each event. You can take other actions on events as you triage, such as creating virtual patches, configuring protect rules, or adding exclusions.  

<a href="assets/images/Attack_Event.png" rel="lightbox" title="Attack Event Details"><img class="thumbnail" src="assets/images/Attack_Event.png"/></a>

