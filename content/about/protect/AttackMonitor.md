<!--
title: "Attack Monitor"
description: "Overview of monitoring attacks"
tags: "protection manage overview attacks monitor"
-->

You can access the Attack Monitor in the **Attacks** page from the main navigation. Here you will find an operational dashboard to monitor and triage attacks that are currently happening in real time or look back historically to see attacks within a specific timeframe. You can also configure which environment to display or eliminate ineffective attack events to help you focus on what needs attention right away. Contrast tells the story of all the attackers that attempted to exploit your applications, the type of attack events performed, and what applications were involved. 

You'll also notice there is a persistent badge within the Attacks section on the right, that communicates the current attack status. This keeps you apprised of any changes that may occur as you delve into details of other attacks. In addition, any attacks that are currently happening will display a timeline on the left, to show the activity of all the attack events for the last 5 minutes. You can click into this activity for a larger view and additional information.

<a href="assets/images/Attack_Monitor.png" rel="lightbox" title="Attack Monitor"><img class="thumbnail" src="assets/images/Attack_Monitor.png"/></a>

## Interacting with Monitor
Several controls at the top of the page allow for customizing your view including time scale, environment and filtering based on a specific rule, attacker IP or application you want to quickly find. From your display, you can see breakdowns of what has been exploited, blocked and probed. 

You can interact with this page to understand relationships between what's presented. For example, you can click on an attacker and Contrast will highlight the targeted applications and the rules that attacker applied. You can also select multiple attackers, rules or applications by holding down the shift key. 

Clicking a specific rule title or application title will bring you to a filtered view of all the attack events based on your selection to further analyze.

## Getting Attack Details
Clicking on any single attacker IP will bring up details about that attack. This will take you to the **Attack Details** page with some summary information including the attack type, its duration, and affected applications and servers. From this page, you can add the attacker to an IP blacklist, export all the individual events that comprise the attack, or suppress an attack (and its events) altogether. Contrast will show the total number of events that make up that particular attack with the ability to expand into the details of each event. You can take other actions on events as you triage, such as creating virtual patches, configuring protect rules, or adding exclusions.  

<a href="assets/images/Attack_Event.png" rel="lightbox" title="Attack Event Details"><img class="thumbnail" src="assets/images/Attack_Event.png"/></a>


