<!--
title: "Manage Vulnerabilities"
description: "Overview of vulnerability management"
tags: "user vulnerability management"
-->

Contrast users have the functionality to manage vulnerabilities based on their organization or application role. Certain functions can be found either inline or in bulk by selecting any number of vulnerabilities and performing an action from the action bar. 

Go to the **Vulnerabilities** tab within a specific application to see a grid view of findings for that application or the main **Vulnerabilities** page to see a grid view of  vulnerabilities across your portfolio. Click on each vulnerability to see more details and learn how to get rid of weaknesses that compromise your applications' security. 

## Vulnerability Status

Contrast has five statuses for vulnerabilities to help you prioritize and manage findings. 

* **Reported:** The default for all discovered vulnerabilities.
* **Confirmed:** A user triaged the vulnerability and flagged it as a definitive risk.
* **Suspicious:** A user found a vulnerability that requires more investigation to determine its validity. 
* **Not a Problem:** Contrast requires a justification for this status. For example, the vulnerability is found to be a false positive or goes through an internal security control. 
* **Remediated:** The vulnerability is considered closed, but could be reopened (and returned to **Reported**) if rediscovered.
* **Fixed:** The vulnerability remains closed even if rediscovered, and will never be reported again.
* **Auto-remediated:** Contrast automatically remediated a vulnerability based on a [Remediation Policy](admin-policymgmt.html#remediate) set up by an administrator. 

To change the status of one or more vulnerabilities, select the checkboxes in the grid rows, click the **Mark as** button and choose a new status from the dropdown menu. You may add comments to logged status changes to provide more context.

<a href="assets/images/Vulnerability-mark-as.png" rel="lightbox" title="Change vulnerability status"><img class="thumbnail" src="assets/images/Vulnerability-mark-as.png"/></a>

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

## Filter Vulnerabilities 

Contrast provides multiple ways to narrow findings and focus on the vulnerabilities that matter to you. Use basic column sorting to arrange vulnerabilities, or use the fields above the grid to quickly find one by its vulnerability ID, date range in which it was found or other categories. Click the **Advanced** link for access to more filters including tags, servers and environments. 

<a href="assets/images/Vulnerability_Filters.png" rel="lightbox" title="Vulnerability Filters"><img class="thumbnail" src="assets/images/Vulnerability_Filters.png"/></a>

## Merge Vulnerabilities

Contrast allows you to merge vulnerabilities of the same type to consolidate findings. From the **Vulnerabilities** page, select two or more vulnerabilities you'd like to merge, and click the merge icon in the action bar. In the confirmation dialog that appears, select the vulnerability that you want to represent the merge. 

>**Note:** This action can't be undone. Merged vulnerabilities are not recoverable. 

<a href="assets/images/Merge_Vulnerabilities.png" rel="lightbox" title="Merge Vulnerabilities"><img class="thumbnail" src="assets/images/Merge_Vulnerabilities.png"/></a>

## Delete Vulnerabilities

To delete one or more vulnerabilities, select the checkboxes in the grid rows, and click the trash can icon in the action bar above the grid. You can also delete a single vulnerability by clicking the arrow in the grid row, and then selecting the trashcan icon in the dropdown menu. 

<a href="assets/images/Vulnerability-delete.png" rel="lightbox" title="Delete vulnerabilities"><img class="thumbnail" src="assets/images/Vulnerability-delete.png"/></a>

Once this action is confirmed, the vulnerability is removed and no longer appears in your list unless Contrast discovers it again. 


