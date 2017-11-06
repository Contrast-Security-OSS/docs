<!--
title: "Discover Vulnerabilities"
description: "Overview of discovering vulnerabilities"
tags: "user applications discover vulnerabilities quick start guide"
-->

Contrast discovers any code flaws that are in your applications. These vulnerabilities are presented and classified with a severity level to help you prioritize and mark the vulnerabilities as needed. The **Vulnerabilities** page allows you to browse, search and filter through all an application's vulnerabilities. Click on each vulnerability for more details, including guidelines for determining how to resolve them to prevent an attack.

## How It Works

If a vulnerability is reported and Contrast has never seen it before, Contrast creates a new entry for that vulnerability. However, if that vulnerability already exists, Contrast updates the existing entry, issue count and number of days since it was last detected. 

<a href="assets/images/Vulnerability-overview.png" rel="lightbox" title="Vulnerability Overview"><img class="thumbnail" src="assets/images/Vulnerability-overview.png"/></a>

>**Example:** A vulnerability was reported to Contrast twice for one server. Instead of displaying each instance as a separate vulnerability, Contrast updates the existing entry and increments the count. Go to the **Notes** tab within this vulnerability to see a list of the servers in which this vulnerability was found.

## View Findings 

Contrast shows you all the vulnerabilities it's discovered including SQL Injection, Cross-Site Scripting (XSS), Command Injection, Path Traversal, XML External Entity Processing (XXE), Cross-Site Request Forgery (CSRF), Java Deserialization and many more. Go to the main **Vulnerabilities** page to see all vulnerabilities across your portfolio, or go to the **Vulnerabilities** tab from the application's overview page to see a list of all vulnerabilities found in that application. 

> **Note:** For Contrast to find weaknesses and present findings, you must also exercise your application. You can then track, share and get remediation guidance for each vulnerability that Contrast reports. 

<a href="assets/images/Vulnerabilities-grid.png" rel="lightbox" title="View the Vulnerabilities grid"><img class="thumbnail" src="assets/images/Vulnerabilities-grid.png"/></a>

The grid of discovered vulnerabilities provides extremely detailed information on each one, including: 

* Type of vulnerability
* Tutorial on how to fix it
* Line of code
* Ability to replay the attack

