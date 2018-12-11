<!--
title: "Discover Vulnerabilities"
description: "Overview of discovering vulnerabilities"
tags: "user applications discover vulnerabilities quick start guide"
-->

The Contrast agent discovers any code flaws that are in your applications, and reports it to the Contrast application. The Contrast then presents and classifies these vulnerabilities with a severity level to help you prioritize and mark the vulnerabilities as needed. 

## Vulnerability Reporting 

If the agent reports a vulnerability and Contrast has never seen it before, Contrast creates a new entry for the vulnerability. If that vulnerability already exists, Contrast updates the existing entry, issue count and number of days since it was last detected. 

## View Findings 

Contrast shows you all the vulnerabilities it's discovered including SQL Injection, Cross-Site Scripting (XSS), Command Injection, Path Traversal, XML External Entity Processing (XXE), Cross-Site Request Forgery (CSRF), Java Deserialization and many more.

The **Vulnerabilities** page in the Contrast UI allows you to browse, search and filter through all vulnerabilities in your organization. Click on each vulnerability for more details, including guidelines for determining how to resolve them to prevent an attack. You can also go to the **Vulnerabilities** tab from the application's details page to see a list of all vulnerabilities found in that application.

> **Note:** For Contrast to find weaknesses and present findings, you must exercise your application. 

<a href="assets/images/Vulnerabilities-grid.png" rel="lightbox" title="View reported vulnerabilities in the grid"><img class="thumbnail" src="assets/images/Vulnerabilities-grid.png"/></a>

The grid of discovered vulnerabilities provides basic information on each one, including the severity, type and status.

### Vulnerability severity 

Contrast classifies vulnerabilities in an application into five severity levels. The classifications are based on the likelihood and impact of a vulnerability in the application, from most to least severe:

* Critical
* High
* Medium
* Low
* Notes

### Vulnerability status 

Contrast uses the following statuses for vulnerabilities to help you prioritize and manage findings. 

* **Reported:** The default for all discovered vulnerabilities.
* **Confirmed:** A user triaged the vulnerability and flagged it as a definitive risk.
* **Suspicious:** A user found a vulnerability that requires more investigation to determine its validity. 
* **Not a Problem:** Contrast requires a justification for this status. For example, the vulnerability is found to be a false positive or goes through an internal security control. 
* **Remediated:** The vulnerability is considered closed, but could be reopened (and returned to **Reported**) if rediscovered.
* **Fixed:** The vulnerability remains closed even if rediscovered, and will never be reported again.
* **Auto-remediated:** Contrast automatically remediated a vulnerability based on a [Remediation Policy](admin-policymgmt.html#remediate) set up by an administrator. 

To learn more about vulnerability statuses and workflows in the Contrast UI, go to [Analyze Findings](user-vulns.html#analyze). 

## Vulnerability Details

Click on a vulnerability in the grid to see all the details reported. Each tab in the page provides different sets of information for different tasks you may want to perform. 

<a href="assets/images/Vulnerability-overview.png" rel="lightbox" title="Vulnerability details"><img class="thumbnail" src="assets/images/Vulnerability-overview.png"/></a>

In the **Overview** tab for each vulnerability, where Contrast found the vulnerability. In the next tab, learn **How to Fix** the vulnerability with examples of the techniques discussed. In the **Notes** tab, Contrast provides further details about the identity, timing and location of the vulnerability, such as: 

* Build numbers
* Reporting servers
* Category 
* Security standards

To learn about changing vulnerability status, severity and other features, read how to [Manage Vulnerabilities](user-vulns.html#manage-vuln).


