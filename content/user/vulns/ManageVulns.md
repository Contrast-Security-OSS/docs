<!--
title: "Manage Vulnerabilities"
description: "Overview of vulnerability management"
tags: "user vulnerability management"
-->

Users of Contrast, depending on either their organization or application role have the ability to manage vulnerabilities. Certain functions can be found either inline or in bulk by selecting any number of vulnerabilities and performing an action from the action the bar. Go to the **Vulnerabilities** tab within a specific application to see a list of findings for that application or the main Vulnerabilities page to see a list of vulnerabilities across your portfolio. Delve in to view details on each one and get rid of weaknesses so your application isn't compromised. 

## Filtering Vulnerabilities 
To better focus on the vulnerabilities that matter to you, Contrast has provided multiple ways to narrow findings. You can use basic column sorting and searching to arrange vulnerabilities by severity or quickly find one by vulnerability ID. Get to certain vulnerabilities based on date range as well as those considered in violation of a policy set by an organization administrator. 

In addition to those options, there is advanced filtering to narrow in on vulnerabilities discovered on a particular server and environment, vulnerabilities that have been tagged by you or your team, and much more. 

<a href="assets/images/Vulnerability_Filters.png" rel="lightbox" title="Vulnerability Filters"><img class="thumbnail" src="assets/images/Vulnerability_Filters.png"/></a>

## Marking Vulnerabilities
Currently, Contrast has five states for vulnerabilities to help you prioritize and manage findings. Status values offered are: 

* **Reported:** The default for all discovered vulnerabilities and considered to be an open issue
* **Confirmed:** A user triaged the vulnerability and flagged it as a definitive risk. Remains an open issue
* **Suspicious:** A user found a vulnerability needing more investigation to determine if is indeed valid. Still considered to be an open issue.
* **Not a Problem:** Marking a vulnerability with this requires a justification. For example, the vulnerability is found to be a false positive or goes through an internal security control. Vulnerability becomes a closed issue.
* **Remediated:** TBD. Vulnerability is considered closed, but could be reopened (and returned to Reported) if rediscovered. Learn more on [How to Fix Them](tbd)
* **Fixed:** TBD. Vulnerability remains closed even if rediscovered, never to be reported again.

You may opt to add comments to logged status changes for providing more context.

<a href="assets/images/Vulnerability_Filters.png" rel="lightbox" title="Vulnerability Filters"><img class="thumbnail" src="assets/images/Vulnerability_Filters.png"/></a>

## Understanding Severity
Vulnerabilities in an application are classified into five categories in Contrast. The classification is based on the likelihood and impact of a vulnerability in the application. Those categories are:

* **Critical:** Represents a flaw that makes your application easily susceptible to malicious attacks
* **High:** Represents a flaw where compromise could happen easily to gain access to your application and execute code
* **Medium:** Captured for vulnerabilities that may be harder to exploit, but could lead to hefty consequences 
* **Low:** Given to all other vulnerabilities where the security impact is either unlikely or would result in minimal ramifications
* **Note:** Informational

## Merging Vulnerabilities

## Deleting Vulnerabilities
