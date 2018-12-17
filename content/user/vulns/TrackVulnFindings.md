<!--
title: "Track Vulnerability Findings"
description: "Overview of tracking vulnerability findings"
tags: "user UI track vulnerability findings management"
-->

Use Contrast's bugtracker integrations to send vulnerability data to other members of your organization. Integrations allow you to plan and maintain timely patching to protect against attacks, and help you streamline workflows by sending vulnerability information directly to your bugtracking tool. You can receive also [notifications](admin-orgsettings.html#org-notify) if Contrast finds any new high or critical vulnerabilities in your application. 

## Integrations 

Contrast offers integration with the several [bugtrackers](admin-orgintegrations.html#bugtracker), including Jira, Bugzilla, Serena Business Management and VSTS/TFS. OrgAdmins can set up any of these bugtrackers and other integrations in the **User menu> Organization Settings > Integrations tab**. To see a full list of integrations, and read more about each option, go to the [Integrations](admin-orgintegrations.html) page.

## Send Findings 

You can send vulnerabilities to a bugtracker by selecting the **Send Vulnerability** (paper plane) icon in the **Vulnerabilities** grid, or from the **Vulnerabilities** tab of an application's details page. In the dialog that follows, choose which information to include in the bugtracker ticket that will be generated.

<a href="assets/images/Send-to-bugtracker-dialog.png" rel="lightbox" title="Bugtracker export options"><img class="thumbnail" src="assets/images/Send-to-bugtracker-dialog.png"/></a>

>**Note:** Bugtracker integrations must be configured before you send vulnerabilities.

When you send a vulnerability to a bugtracker, the status of the vulnerability changes to **Reported**. An arrow icon also appears beside the status in the grid row for the vulnerability. Hover over this icon for more information, including the bugtracker name(s) and corresponding ticket number(s). 

<a href="assets/images/Sent-to-bugtracker.png" rel="lightbox" title="The arrow icon indicates vulnerabilities sent to a bugtracker"><img class="thumbnail" src="assets/images/Sent-to-bugtracker.png"/></a>

> **Note:** To quickly see which vulnerabilities are tracked, use the filter in the **Status** column and select "Being Tracked".

## Custom Processing

You can also export vulnerability data to a CSV or XML file for custom processing. For more information about how and why to export data, go to [Manage Vulnerabilities](user-vulns.html#manage-vuln).

If you want to gather this data outside of the UI, Contrast also provides robust [APIs](https://api.contrastsecurity.com/) where you can explore even more information. Go to [About the Contrast API](tools-about.html#api-about) for more details.

