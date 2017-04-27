<!--
title: "Manage Vulnerabilities"
description: "Overview of vulnerability management"
tags: "user vulnerability management"
-->

Users of Contrast, depending on either their organization or application role, can manage vulnerabilities. Certain functions can be found either inline or in bulk by selecting any number of vulnerabilities and performing an action from the action bar. Go to the **Vulnerabilities** tab within a specific application to see a list of findings for that application or the main Vulnerabilities page to see a list of vulnerabilities across your portfolio. Delve in to view details on each one and get rid of weaknesses so your application isn't compromised. 

## Filtering Vulnerabilities 
To better focus on the vulnerabilities that matter to you, Contrast has provided multiple ways to narrow findings. You can use basic column sorting and searching to arrange vulnerabilities by severity or quickly find one by vulnerability ID. Get to certain vulnerabilities based on date range as well as those in violation of a policy set by an organization administrator. 

In addition to those options, there is advanced filtering to narrow in on vulnerabilities discovered on a particular server and environment, vulnerabilities that have been tagged by you or your team, and much more. 

<a href="assets/images/Vulnerability_Filters.png" rel="lightbox" title="Vulnerability Filters"><img class="thumbnail" src="assets/images/Vulnerability_Filters.png"/></a>

## Marking Vulnerabilities
Currently, Contrast has five states for vulnerabilities to help you prioritize and manage findings. Status values offered are: 

* **Reported:** The default for all discovered vulnerabilities
* **Confirmed:** A user triaged the vulnerability and flagged it as a definitive risk
* **Suspicious:** A user found a vulnerability needing more investigation to determine if it is indeed valid
* **Not a Problem:** Marking a vulnerability with this requires a justification. For example, the vulnerability is found to be a false positive or goes through an internal security control. 
* **Remediated:** Vulnerability is considered closed, but could be reopened (and returned to Reported) if rediscovered
* **Fixed:** Vulnerability remains closed even if rediscovered, never to be reported again

You may opt to add comments to logged status changes for providing more context.

<a href="assets/images/Vulnerability_Filters.png" rel="lightbox" title="Vulnerability Filters"><img class="thumbnail" src="assets/images/Vulnerability_Filters.png"/></a>

See [Analyze Findings](user_vulns.html#analyze) to understand the behaviors when a vulnerability is marked and found again.

## Understanding Severity
Vulnerabilities in an application are classified into five categories in Contrast. The classification is based on the likelihood and impact of a vulnerability in the application. Those categories are:

* Critical
* High
* Medium
* Low
* Note

## Merging Vulnerabilities
Contrast allows you to merge vulnerabilities in the case where you want to aggregate those that are similar. Vulnerabilities must be the same type in order to merge them. From the **Vulnerabilities** page you can select two or more vulnerabilities you'd like to merge and clicking the merge icon in the action bar. You'll be prompted to choose the vulnerability to represent the merge. 

>**Note:** This action cannot be undone. Merged vulnerabilities are not recoverable. 

<a href="assets/images/Merge_Vulnerabilities.png" rel="lightbox" title="Merge Vulnerabilities"><img class="thumbnail" src="assets/images/Merge_Vulnerabilities.png"/></a>

## Deleting Vulnerabilities
To delete vulnerabilities, select the checkbox on the row and click the trash can icon in the action bar. This action can also be done if viewing the details of a vulnerability from the actions in the header. Once this action is confirmed, the vulnerability is removed and will no longer appear in your list unless it is discovered again. 
