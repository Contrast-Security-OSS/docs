<!--
title: "Manage Vulnerabilities"
description: "Overview of vulnerability management"
tags: "user vulnerability management"
-->

Contrast users can manage vulnerabilities based on their organization or application role. Certain functions are available from the **Vulnerabilities** page, a vulnerability's **Overview** tab, or an application or server's **Vulnerabilities** tab, as noted.

## Vulnerability Status

To change the status of one or more vulnerabilities, select the checkboxes in the grid rows, click the **Mark as** button and choose a new status from the dropdown menu. You may add comments to logged status changes to provide more context. You can also click on a vulnerability, and change its status from the **Overview** tab. 

<a href="assets/images/Vulnerability-mark-as.png" rel="lightbox" title="Change vulnerability status"><img class="thumbnail" src="assets/images/Vulnerability-mark-as.png"/></a>

See [Analyze Findings](user-vulns.html#analyze) to learn more about statuses and behaviors when a vulnerability is marked and found again.

## Vulnerability Severity

Hover over a vulnerability's severity level in any **Vulnerabilities** grid to see the Likelihood and Impact calculations. To change the level, click on the colored badge and choose the new selection from the dropdown menu.

<a href="assets/images/Vulnerability-severity.png" rel="lightbox" title="Likelihood and Impact ratings of a vulnerability severity level"><img class="thumbnail" src="assets/images/Vulnerability-severity.png"/></a>

## Filter Vulnerabilities 

Contrast provides multiple ways to narrow findings and focus on the vulnerabilities that matter to you. Use basic column sorting to arrange vulnerabilities in a grid, or use the fields above the grid to quickly find one by its vulnerability ID, the date range in which it was found or other criteria. Click the **Advanced** link for access to more filters including tags, servers and environments. 

<a href="assets/images/Vulnerability_Filters.png" rel="lightbox" title="Vulnerability Filters"><img class="thumbnail" src="assets/images/Vulnerability_Filters.png"/></a>

## Merge Vulnerabilities

Contrast allows you to merge vulnerabilities of the same type to consolidate findings. From any **Vulnerabilities** grid, select two or more vulnerabilities you'd like to merge, and click the merge icon in the action bar. In the confirmation dialog that appears, select the vulnerability that you want to represent the merge. 

<a href="assets/images/Merge_Vulnerabilities.png" rel="lightbox" title="Merge Vulnerabilities"><img class="thumbnail" src="assets/images/Merge_Vulnerabilities.png"/></a>

## Delete Vulnerabilities

To delete one or more vulnerabilities, select the checkboxes in the grid rows, and click the trash can icon in the action bar above the grid. You can also delete a single vulnerability by clicking the trashcan icon in the row dropdown menu or in the vulnerability's **Overview** tab. 

<a href="assets/images/Vulnerability-delete.png" rel="lightbox" title="Delete vulnerabilities"><img class="thumbnail" src="assets/images/Vulnerability-delete.png"/></a>

Once this action is confirmed, the vulnerability is removed and no longer appears in your list unless Contrast discovers it again. 

## Track Vulnerabilities 

You can send vulnerabilities to a bugtracker from the **Send Vulnerability** (paper plane) icon located on the **Vulnerabilities** page, or from the **Vulnerabilities** tab of an **Application Overview** page. In the dialog that follows, choose which information should be included when exporting the findings.

<a href="assets/images/KB3-f04_1.png" rel="lightbox" title="Bugtracker Export Options"><img class="thumbnail" src="assets/images/KB3-f04_1.png"/></a>

>**Note:** Bugtrackers must be configured before vulnerabilities can be sent.

When a vulnerability is sent to a bugtracker, the status of the vulnerability changes to **Reported** in the **Vulnerabilities** page or the **Vulnerabilities** tab of the **Application Overview** page. An arrow icon also appears beside the status in the grid row for the vulnerability. Hover over this icon for more information, including the bugtracker name(s) and corresponding ticket number(s). 

<a href="assets/images/Integrations-sent-to-bugtracker.png" rel="lightbox" title="Vulnerabilities sent to bugtracker"><img class="thumbnail" src="assets/images/Integrations-sent-to-bugtracker.png"/></a>

To quickly see which vulnerabilities are being tracked, click the **Advanced** link, select **Status** in the sidebar, and filter for "Being Tracked". 

<a href="assets/images/Integrations-bugtracker-advanced-filter.png" rel="lightbox" title="Advanced filter"><img class="thumbnail" src="assets/images/Integrations-bugtracker-advanced-filter.png"/></a>

To learn more about using bugtrackers with Contrast, read the (Introduction to Bugtrackers)](admin-orgintegrations.html#bugtracker). 

## Export Findings

Export details on vulnerability findings by selecting the grouping of vulnerabilities that you want to include in the report, and clicking the **Export** icon to choose either CSV or XML format.

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



