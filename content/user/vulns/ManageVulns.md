<!--
title: "Manage Vulnerabilities"
description: "Overview of vulnerability management"
tags: "user vulnerability management"
-->

Contrast users have the functionality to manage vulnerabilities based on their organization or application role. Certain functions can be found either inline or in bulk by selecting any number of vulnerabilities and performing an action from the action bar. 

Go to the **Vulnerabilities** tab within a specific application to see a grid view of findings for that application, or go to the main **Vulnerabilities** page to see a grid view of  vulnerabilities across your portfolio. Click on each vulnerability to see more details and learn how to get rid of weaknesses that compromise your applications' security. 

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

<a href="assets/images/Merge_Vulnerabilities.png" rel="lightbox" title="Merge Vulnerabilities"><img class="thumbnail" src="assets/images/Merge_Vulnerabilities.png"/></a>

## Delete Vulnerabilities

To delete one or more vulnerabilities, select the checkboxes in the grid rows, and click the trash can icon in the action bar above the grid. You can also delete a single vulnerability by clicking the arrow in the grid row, and then selecting the trashcan icon in the dropdown menu. 

<a href="assets/images/Vulnerability-delete.png" rel="lightbox" title="Delete vulnerabilities"><img class="thumbnail" src="assets/images/Vulnerability-delete.png"/></a>

Once this action is confirmed, the vulnerability is removed and no longer appears in your list unless Contrast discovers it again. 

## Export Findings

Export details on vulnerability findings from the **Vulnerabilities** page, a vulnerability's **Overview** tab, or an application or server's **Vulnerabilities** tab. Click the **Export** icon to choose either CSV or XML formats for the grouping of vulnerabilities that you want to include in the report.

<a href="assets/images/Vuln-export-options.png" rel="lightbox" title="Vulnerability export options"><img class="thumbnail" src="assets/images/Vuln-export-options.png"/></a>

The exported file contains the following data fields for each vulnerability:

* Vulnerability Name
* Vulnerability ID
* Category
* Rule Name
* Severity
* Status
* Number of Events
* First Seen
* Last Seen
* Application Name
* Application ID
* Application Code
* CWE ID
* Request Method
* Request Port
* Request Protocol
* Request Version
* Request URI
* Request Qs
* Request Body

### Custom reports

For users looking to craft custom software composition analysis reports about their applications, the vulnerability export feature might not provide sufficient information; however, Contrast offers a rich Application API which gives you access to Contrast vulnerability data. Reference the **Contrast RESTful API documentation > Application Trace Filtering > /ng/{orgUuid}/traces/{appId}/filter** section for instructions on using the Application API. 

You may also explore additional details on your vulnerabilities using a manual method.

> **Example:** This cURL request retrieves a list of vulnerabilities that also shows a list of the applications in which each vulnerability was found. The jq tool formats the data as CSV for use in a custom report.

```
curl \
    -H "Authorization: $(echo -n $username:$servicekey | base64)" \
    -H "API-Key: $apikey" \
    https://app.contrastsecurity.com/Contrast/api/ng/$orgid/orgtraces/filter?expand=request | \
    jq -r '.traces[] | {uuid: .uuid, protocol: .request.protocol} | [.uuid, .protocol] | @csv'
```

For more information, read [About the Contrast API](tools-api.html#api-about). 



