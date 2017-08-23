<!--
title: "What Information Does Contrast Capture?"
description: "Explanation of what information Contrast captures"
tags: "troubleshoot setup FAQ"
-->

Contrast collects a lot of application analytics like URLs, file paths, *jar* names, and other relatively non-sensitive information. It also sends all the data related to security-relevant events. 

If a method occurs that's an integral part of a vulnerability, all the aspects of that event - the object, return value, parameters and more - are sent back to the Contrast site. This process allows you to analyze the collected data and decide if any of it is sensitive. 

> **Example:** If a XSS vulnerability in the login code, the username and password will probably be sent back as part of the XSS trace. If Contrast is installed on a **Development** or **QA** environment, as recommended, it's not likely that any Production or sensitive data is involved.

