<!--
title: "VSTS Integration"
description: "Integrating VSTS and TFS with Contrast"
tags: "Admin organization settings integrations vsts tfs"
-->

Integrating Visual Studio Team Services (VSTS) or Team Foundation Server (TFS) with Contrast allows you to automatically generate tickets, synchronize comments and push notifications for your applications.

## Prerequisites

* VSTS or TFS account credentials (username and personal access token)
* An access token with "Work items (read and write)" scope (minimum requirement)
* A running VSTS or TFS instance accessible via HTTP(s) to Contrast
* A project which to associate the application instrumented by Contrast

## Setup

In the **Integrations** page, click **Connect** in the VSTS row. This takes you to the **Connect with Visual Studio** page, where you must complete the following fields.

<a href="assets/images/VSTS-TFS-integration.png" rel="lightbox" title="VSTS Integration"><img class="thumbnail" src="assets/images/VSTS-TFS-integration.png"/></a>

Field | Description
------ | -----------
**Name** | The name for the bugtracker entry; displayed when sending findings to bugtrackers.
**Personal Access Token** | The token associated with your user to [authenticate to your host](https://docs.microsoft.com/en-us/vsts/accounts/use-personal-access-tokens-to-authenticate).
**Host** | The VSTS or TFS URL; must be accessible from the Contrast interface instance being configured.

Once you complete the fields, click **Test connection**. This process may take a few minutes, depending on the number of your VSTS or TFS projects. The test verifies that Contrast can reach the VSTS or TFS instance and that the specified user can log in.

Once a connection is made, select the applications that you want to be available to this bugtracker. Customize the values for the Project, Assignee and Default Work Issue Type fields as well as the Default Severity or Priority levels depending on the work issue type.

> **Note:** Contrast uses API v.2 to support VSTS and TFS 2015/2017.

### Two-way integration

Use two-way integration to automatically update the status of a linked vulnerability when you close or reopen an issue in VSTS or TFS.

<a href="assets/images/TFS-two-way.png" rel="lightbox" title="Set up two-way integration with VSTS or TFS"><img class="thumbnail" src="assets/images/TFS-two-way.png"/></a>

In the configuration page, begin setup by checking the box to **Enable two-way integration**. In the **Vulnerability Status** fields that appear, use the dropdown fields to to set a vulnerability status based on each VSTS/TFS ticket status. The table below shows the default options in **bold**. 

| Vulnerability Status                                       |Ticket Status                                       |
|------------------------------------------------------------|-----------------------------------------------------------|
| **Confirmed** <br> Suspicious <br>  Reported               | OPEN |
| **Confirmed** <br> Suspicious <br>  Not a Problem <br> Remediated <br> Reported <br> Fixed | IN PROGRESS |
| **Not a Problem** <br> Remediated <br> Fixed  | RESOLVED |
| **Confirmed** <br> Suspicious <br> Reported   | REOPENED |
| **Not a Problem** <br> Remediated <br> Fixed  | CLOSED |
| **Confirmed** <br> Suspicious <br>  Not a Problem <br> Remediated <br> Reported <br> Fixed | BLOCKED |
| **Confirmed** <br> Suspicious <br>  Not a Problem <br> Remediated <br> Reported <br> Fixed | NEEDS CLARIFICATION |
| **Not a Problem** <br> Remediated <br> Fixed  | READY TO DEPLOY |

If you choose **Not a Problem** as a ticket status, Contrast requires you to enter a **Reason** in the dropdown menu, as it does in the Vulnerability grid. The default selection is **Other**. 

Once the two-way integration is saved, Contrast will automatically generate comments in the **Discussion** tab on each vulnerability page when the status of a ticket is updated. The name of the bugtracker and the link to the ticket. 

#### Multiple vulnerabilities

For multiple vulnerabilities sent to VSTS or TFS in bulk as a single issue, the ticket status applies to all vulnerabilities associated with that ticket. For multiple tickets tied to a single vulnerability, the vulnerability can only be closed when all the tickets are closed.

### Automatically create tickets 

Automatically create tickets for newly discovered vulnerabilities by checking the designated box in the configuration form. In the multiselect field that appears, choose the Rule(s) and/or Severity level(s) of the vulnerabilities for which you want to generate tickets. The default selections are "Critical" and "High".

> **Note:** This selection doesn't generate tickets retroactively.

