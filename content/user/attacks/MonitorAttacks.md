<!--
title: "Attack Monitor"
description: "Overview of monitoring attacks"
tags: "protect manage attack attacker monitor events"
-->

The **Monitor** page allows you to view and triage attacks that are currently happening, and look back to see attacks that occurred within a specific timeframe. The dashboard gives you the full picture of the attackers that attempted to exploit your applications, the type of attack events detected and which applications were involved. 

## Use the Monitor

The Monitor overview divides attack event data into three categories: **Attackers**, **Attack Events** and **Target Applications**. Use the dropdown menus at the top of the page to customize your view by time span and environment. Use the search field to find attacks by the attacker's IP information or source name, affected applications, or specific Assess or Protect rules. You can also check the box to **Show probed** if you want to include information for attack events that resulted in a Probed status.

The **Active Attacks** badge at the top of the page communicates the current attack status of your organization. This keeps you apprised of any changes that may occur as you delve into details of other attacks.

<a href="assets/images/Attacker-source-name.png" rel="lightbox" title="Use source names to identify attackers"><img class="thumbnail" src="assets/images/Attacker-source-name.png"/></a>

### Attackers

In the Attackers column, you can see a list of attackers and the number of associated attack events reported within your selected timeframe. Click on the total number of attackers at the top of the column to see the data in the [Attacks](user-attacks.html#analyze-attacks) grid. 

If an attacker is identified by a [source name](admin-ipmgmt.html#source-name), hover over the name to see a list of the IP addresses labeled with this name. If an attacker is unknown (not identified by a source name), the silhouette icon to the left of their IP address includes a question mark. If an attacker successfully exploited an application, it's shown in red. Click on an attacker to go to the relevant **Attack Details** page. 

> **Note:** If the data reported for an attack event matches more than one source name, Contrast applies the name that you updated most recently.

### Attack events

The Attack Events column displays a list of the types of attacks detected, along with the total number of attack events per type. The bar below each attack type shows a breakdown of the attack events by result, such as exploited (red) or blocked (green).

### Target applications

In the Target Applications column, Contrast shows each application that has been targeted by an attack. The bar below each application shows a breakdown of the attack events by result, such as exploited (red) or blocked (green). Click on the total number of applications to see the data in the [Attacks](user-attacks.html#analyze-attacks) grid. Click on an application to see a filtered view in the **Attack Events** grid. 

## Attack Details

Click on an attacker's IP address or source name to see details about an attack. This takes you to the **Attack Details** page with a summary of information including the attack type, its duration, and affected applications and servers. Contrast shows the total number of events that make up the attack. Click on one to see more details about the individual event.

From this page, you can add the attacker to an IP blacklist, export all the individual events that comprise the attack, or suppress an attack (and its events) altogether. You can also take actions on events as you triage, such as creating virtual patches, configuring Protect rules or adding exclusions.  

<a href="assets/images/Attack_Event.png" rel="lightbox" title="Attack Event Details"><img class="thumbnail" src="assets/images/Attack_Event.png"/></a>

