
<!--
title: "About Attacks"
description: "Overview of attacks in UI"
tags: "user attacks overview ui"
-->


The **Attacks** page contains the record of all attacks seen by applications that have Contrast Protect enabled. These attacks include both monitored attacks as well as blocked attacks.

## Attack composition

Attacks are groups of [attack events](user-attacks.html#monitor) coming from a single IP address over a sustained period of time. An attack can be comprised of events that target multiple applications, multiple servers as well as multiple attack types, such as SQL Injection, Command Injection or specific CVEs. An attack ends once Contrast agents no longer see any attempted attacks traffic for a period of time. If Contrast sees new attack traffic from the same IP address after an attack is closed, a new attack is created to track this attack.


