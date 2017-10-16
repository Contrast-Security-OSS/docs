<!--
title: "Manage Vulnerabilities"
description: "Overview of vulnerability management"
tags: "user vulnerability management"
-->

Users of Contrast, depending on either their organization or application role, can manage vulnerabilities. Certain functions can be found either inline or in bulk by selecting any number of vulnerabilities and performing an action from the action bar. Go to the **Vulnerabilities** tab within a specific application to see a list of findings for that application or the main Vulnerabilities page to see a list of vulnerabilities across your portfolio. Delve in to view details on each one and get rid of weaknesses so your application isn't compromised. 

## Filter Vulnerabilities 

Contrast provides multiple ways to narrow findings and focus on the vulnerabilities that matter to you. You can use basic column sorting and searching to arrange vulnerabilities by severity or quickly find one by vulnerability ID. Get to certain vulnerabilities based on date range as well as those in violation of a policy set by an Organization Administrator. 

Advanced filtering help you find vulnerabilities discovered on a particular server and environment, vulnerabilities that have been tagged by you or your team, and much more. 

<a href="assets/images/Vulnerability_Filters.png" rel="lightbox" title="Vulnerability Filters"><img class="thumbnail" src="assets/images/Vulnerability_Filters.png"/></a>

## Mark Vulnerabilities

Contrast has five statuses for vulnerabilities to help you prioritize and manage findings. You may add comments to logged status changes to provide more context.

* **Reported:** The default for all discovered vulnerabilities.
* **Confirmed:** A user triaged the vulnerability and flagged it as a definitive risk.
* **Suspicious:** A user found a vulnerability that requires more investigation to determine its validity. 
* **Not a Problem:** Contrast requires a justification for this status. For example, the vulnerability is found to be a false positive or goes through an internal security control. 
* **Remediated:** The vulnerability is considered closed, but could be reopened (and returned to **Reported**) if rediscovered.
* **Fixed:** The vulnerability remains closed even if rediscovered, and will never be reported again.
* **Auto-remediated:** Contrast automatically remediated a vulnerability based on a [Remediation Policy](admin-policymgmt.html#remediate) set up by an administrator. 

<!-- <a href="assets/images/Vulnerability_Filters.png" rel="lightbox" title="Vulnerability Filters"><img class="thumbnail" src="assets/images/Vulnerability_Filters.png"/></a>
 -->
See [Analyze Findings](user-vulns.html#analyze) to understand the behaviors when a vulnerability is marked and found again.

## Vulnerability Severity

Vulnerabilities in an application are classified into five severity levels in Contrast. The classifications are based on the likelihood and impact of a vulnerability in the application, from most to least severe:

* Critical
* High
* Medium
* Low
* Note

Hover over a vulnerability's Severity level in the grid row to see the Likelihood and Impact calculations. To change the level, click on the colored badge and choose the new selection from the dropdown menu.

<a href="assets/images/Vulnerability-severity.png" rel="lightbox" title="Likelihood and Impact ratings of a vulnerability severity level"><img class="thumbnail" src="assets/images/Vulnerability-severity.png"/></a>

## Merge Vulnerabilities

Contrast allows you to merge vulnerabilities of the same type to consolidate findings. From the **Vulnerabilities** page, select two or more vulnerabilities you'd like to merge, and click the merge icon in the action bar. In the confirmation dialog that appears, select the vulnerability that you want to represent the merge. 

>**Note:** This action can't be undone. Merged vulnerabilities are not recoverable. 

<a href="assets/images/Merge_Vulnerabilities.png" rel="lightbox" title="Merge Vulnerabilities"><img class="thumbnail" src="assets/images/Merge_Vulnerabilities.png"/></a>

## Delete Vulnerabilities

To delete one or more vulnerabilities, select the checkbox(s) in the grid row(s), and click the trash can icon in the action bar above the grid. You can also delete a single vulnerability by clicking the arrow in the grid row, and then selecting the trashcan icon in the dropdown menu. 

<a href="assets/images/Vulnerability-delete.png" rel="lightbox" title="Delete vulnerabilities"><img class="thumbnail" src="assets/images/Vulnerability-delete.png"/></a>

Once this action is confirmed, the vulnerability is removed and no longer appears in your list unless Contrast discovers it again. 


