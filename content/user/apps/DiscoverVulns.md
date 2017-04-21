<!--
title: "Discover Vulnerabilities"
description: "Overview of discovering vulnerabilities"
tags: "user discover vulnerabilities quick start guide"
-->

Get a list of all vulnerabilities discovered including SQL Injection, Cross Site Scripting (XSS), Command Injection, Path Traversal, XML External Entity Processing (XXE), Cross Site Request Forgery (CSRF), Java Deserialization and many more. Track, share and get remediation guidance. Go to the **Vulnerabilities** tab in the application's Overview page to get a list of all vulnerabilities discovered in that application or go to the main Vulnerabilities page to get a big picture of all vulnerabilities across your portfolio. 

With this list of discovered vulnerabiities, Contrast provides users extremely detailed information on each one, including: 

* Type of vulnerability
* Tutorial on how to fix it
* Line of code
* Ability to replay the attack

## How Vulnerabilities Work
If a vulnerability is reported and Contrast has never seen it before, Contrast creates a new vulnerability. However, if that vulnerability already exists, Contrast updates the existing entry, issue count and number of days since it was last detected.

<a href="assets/images/Application-vulnerabilities-tab.png" rel="lightbox" title="Vulnerability Details"><img class="thumbnail" src="assets/images/Application-vulnerabilities-tab.png"/></a>

>**Example:** A vulnerability was reported to Contrast five times for one server. Instead of showing up as five vulnerabilities, Contrast updates this entry and increments the count. As Contrast continues to see the same findings, the count goes up. If you dive into the Notes tab within this vulnerability, you notice a list of the servers in which this vulnerability was found.
