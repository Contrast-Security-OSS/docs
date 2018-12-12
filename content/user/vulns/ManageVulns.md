<!--
title: "Manage Vulnerabilities"
description: "Overview of vulnerability management"
tags: "user vulnerability management"
-->

Contrast users can manage vulnerabilities based on their organization or application role. Certain functions are available from the **Vulnerabilities** page, a vulnerability's **Overview** tab, or an application or server's **Vulnerabilities** tab, as noted.

## Vulnerability Status

To change the status of one or more vulnerabilities, use the check marks to select the appropriate grid rows, and click the **Mark as** menu in the action bar at the bottom of the grid, and choose a new status from the menu. You may add comments to logged status changes to provide more context. 

<a href="assets/images/Vulnerability-mark-as.png" rel="lightbox" title="Change vulnerability status"><img class="thumbnail" src="assets/images/Vulnerability-mark-as.png"/></a>

To change the status of an individual vulnerability, click on its status in the grid, and choose a new status from the menu. You can also click on a vulnerability, and change its status from the **Overview** tab. 

See [Analyze Findings](user-vulns.html#analyze) to learn more about statuses and behaviors when a vulnerability is marked and found again.

## Vulnerability Severity

To change a vulnerability's severity level, click on the colored badge and choose a new level from the menu. (This action must be done individually.)

<a href="assets/images/Vulnerability-severity.png" rel="lightbox" title="Likelihood and Impact ratings of a vulnerability severity level"><img class="thumbnail" src="assets/images/Vulnerability-severity.png"/></a>

## Sort and Filter Vulnerabilities

Contrast provides multiple ways to narrow findings and focus on the vulnerabilities that matter to you. Use basic column sorting to arrange vulnerabilities in a grid, or use the fields above the grid to quickly find one by its vulnerability ID, the date range in which it was found or other criteria. 

<a href="assets/images/Vulnerability-quick-view.png" rel="lightbox" title="Filter vulnerabilities in the grid"><img class="thumbnail" src="assets/images/Vulnerability-quick-view.png"/></a>

## Pending Vulnerabilities

If an administrator [requires administrative approval](admin-orgsettings.html#app-defaults) to close vulnerabilities, vulnerabilities with the specified statuses and severities go into a **Pending** state when you attempt to close them. Administrative approval applies to vulnerability updates by two-way [bugtracker integrations](admin-orgintegrations.html#bugtracker) as well as [auto-remediation policies](admin-policymgmt.html#remediate).  

When you attempt to close a vulnerability that an administrator must approve, you must provide an explanation for the status change. Once completed, Contrast confirms that the closure is pending an administrator's review. 

<a href="assets/images/Vulns-mark-as-dialog.png" rel="lightbox" title="Enter an explanation for a status change"><img class="thumbnail" src="assets/images/Vulns-mark-as-dialog.png"/></a>

Once Contrast confirms your request, the vulnerability is marked as **Pending** in the grid. Hover over the label to see more information about when the request to close was submitted. To see all vulnerabilities awaiting review in your organization, select the **Pending Review** quick view from the dropdown. 

<a href="assets/images/Vulns-marked-pending.png" rel="lightbox" title="Vulnerabilities with pending status changes are marked in the grid"><img class="thumbnail" src="assets/images/Vulns-marked-pending.png"/></a>

> **Note:** You may change the status of a pending vulnerability. If approval isn't required for the new status, the vulnerability is no longer marked as Pending. 

You will receive a [notification](admin-orgsettings.html#org-notify) when your request to close the vulnerabilities is approved or denied. If denied, the vulnerability will go back to its previous state; but, the administrator must provide a reason for the decision, which appears in the vulnerability's **Discussion** tab. 

### Review status changes

To approve or deny vulnerability closures as a Contrast administrator, click on the link in your UI notification or navigate to the **Pending Review** view in the grid. 

To review vulnerability closures from the grid, select one or more vulnerabilities to review. Click on the **Review** button in the batch actions menu, and select **Approve** or **Deny**. You can also go to a vulnerability's **Details** tab, and click the **Review** button in the actions menu to approve or deny its closure.

<a href="assets/images/Pending-admin-approval.png" rel="lightbox" title="Review pending status changes"><img class="thumbnail" src="assets/images/Pending-admin-approval.png"/></a>

If you deny the status change, you must provide a reason in the confirmation dialog. Your reason is then documented in the vulnerability's **Discussion** tab. The vulnerability automatically reverts to its previous status. If you approve the status change, the user's request is marked as "Approved" in the **Discussion** tab. 

## Merge Vulnerabilities

Merge vulnerabilities of the same type from the same application to consolidate findings. From any **Vulnerabilities** grid, use the check marks to select two or more vulnerabilities you'd like to merge, and click the merge icon in the action bar. In the confirmation dialog that appears, select the vulnerability that you want to represent the merge. 

<a href="assets/images/Merge_Vulnerabilities.png" rel="lightbox" title="Merge Vulnerabilities"><img class="thumbnail" src="assets/images/Merge_Vulnerabilities.png"/></a>

## Delete Vulnerabilities

To delete one or more vulnerabilities, use the check marks to select the appropriate grid rows, and select the **delete** (trashcan) icon in the bottom action bar. To delete a single vulnerability, hover over the grid row and select the **delete** icon in the row dropdown menu; you can also find the icon in the vulnerability's **Overview** tab. In the dialog that appears, select the **Delete** button to confirm your choice.

<a href="assets/images/Vulnerability-delete.png" rel="lightbox" title="Delete vulnerabilities"><img class="thumbnail" src="assets/images/Vulnerability-delete.png"/></a>

Once confirmed, the vulnerability is removed and no longer appears in your list unless Contrast discovers it again. 

## Track Vulnerabilities 

You can [send vulnerabilities to a bugtracker](admin-orgintegrations.html#bugtracker) from the **Send Vulnerability** (paper plane) icon located on the **Vulnerabilities** page, or from the **Vulnerabilities** tab of an **Application Overview** page. In the dialog that follows, choose which information should be included when exporting the findings.

<a href="assets/images/Send-to-bugtracker-dialog.png" rel="lightbox" title="Bugtracker Export Options"><img class="thumbnail" src="assets/images/Send-to-bugtracker-dialog.png"/></a>

>**Note:** Bugtrackers must be configured before you send vulnerabilities.

When a vulnerability is sent to a bugtracker, the status of the vulnerability changes to **Reported** in the **Vulnerabilities** page or the **Vulnerabilities** tab of the **Application Overview** page. An arrow icon also appears beside the status in the grid row for the vulnerability. Hover over this icon for more information, including the bugtracker name(s) and corresponding ticket number(s). 

<a href="assets/images/Sent-to-bugtracker.png" rel="lightbox" title="Vulnerabilities sent to bugtracker"><img class="thumbnail" src="assets/images/Sent-to-bugtracker.png"/></a>

To quickly see which vulnerabilities are being tracked, click the **Advanced** link, select **Status** in the sidebar, and filter for "Being Tracked". 

## Export Findings

Export details on vulnerability findings by selecting the vulnerabilities that you want to include in the report, and clicking the **Export** icon in the action bar. Once choose to generate the report in CSV or XML format, Contrast immediately generates the file for download.

<a href="assets/images/Vulnerability-export-options.png" rel="lightbox" title="Vulnerability export options"><img class="thumbnail" src="assets/images/Vulnerability-export-options.png"/></a>

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

For more information, read [About the Contrast API](tools-about.html#api-about). 

