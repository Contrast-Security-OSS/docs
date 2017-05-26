<!--
title: "JIRA Integration"
description: "Integrating JIRA with Contrast"
tags: "Admin organization settings integrations jira"
-->


Integrating JIRA with Contrast allows you to automatically generate tickets, synchronize comments and push notifications for your applications.

## Prerequisites

* JIRA account credentials (username and password)
* Permission to create issues in the target project
* A running JIRA instance accessible via HTTP to the Contrast interface
* A project to associate the application instrumented by Contrast

## Setup

In Integrations, click **Connect** in the JIRA row. In the **Connect with JIRA** page, complete the following fields. 

Field | Description
------ | -----------
**Name** | The name for the bugtracker entry; displayed when sending findings to bugtrackers
**Username** | The username for the account connected to JIRA
**Password** | The password for the specified username
**Host** | The JIRA URL; must be accessible from the Contrast interface instance being configured


Once you complete the fields, click **Test connection**. This process may take a few moments depending on the number of your JIRA projects. The test verifies that the JIRA instance can be reached by Contrast and that the specified user is able to log in.

Once a connection is made, select the applications that you want to be available to this bugtracker as well as customize the values for the Project, Assignee and Default Issue Type fields. You can also customize the Default Severity levels and Additional JIRA fields. Note that we automatically include any required JIRA fields to ensure that you don’t have any trouble.

<a href="assets/images/JIRA-integration-set-up.png" rel="lightbox" title="JIRA Integration"><img class="thumbnail" src="assets/images/JIRA-integration-set-up.png"/></a>

> **Note:** If you change the Project or Issue type, required and additional fields are updated. However, the interface keeps the selected values that apply to the new configuration.

### Two-way integration 

Use two-way integration to automatically update the status of a linked vulnerability when you close or reopen an issue in JIRA. 

<a href="assets/images/Two-way-jira-integration.png" rel="lightbox" title="Enable two-way integration"><img class="thumbnail" src="assets/images/Two-way-jira-integration.png"/></a>

In the JIRA configuration page, begin setup by checking the box to **Enable two-way integration**. This generates a URL that appears below the checkbox, which your JIRA administrator must use to register a webhook in JIRA. Clicking the link opens a new tab that takes you to [instructions for registering webhooks](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-rest).

> **Note:** When you delete a configuration with two-way integration enabled, you must delete the webhook configuration from your JIRA administrator console to completely remove the integration.

Continue to the fields below to set a vulnerability status based on each JIRA ticket status and resolution. Beside each ticket status and resolution pairing, choose a vulnerability status from the dropdown menu. The table below shows the default options in **bold**. 

| Ticket Status | Ticket Resolution  | Vulnerability Status Options                               |
|---------------|--------------------|------------------------------------------------------------|
| CLOSED        | WON'T FIX          | **Not a Problem** <br> Remediated <br>  Fixed <br>  Do Nothing |
| CLOSED        | FIXED              | Not a Problem <br> **Remediated** <br>  Fixed <br> Do Nothing  |
| REOPENED      | N/A                | **Reported** <br> Confirmed <br> Suspicious <br> Do Nothing    |

If you choose **Not a Problem**, Contrast requires you to enter a **Reason** in the dropdown menu, as it does in the Vulnerability grid. The default selection in the dropdown menu is **Other**. 

Once the two-way integration is saved, Contrast will automatically generate comments in the Discussion tab on each vulnerability page when the status of a ticket is updated. The name of the bugtracker and the link to the ticket. 

#### Multiple vulnerabilities

For multiple vulnerabilities sent to JIRA in bulk as a single issue, the JIRA ticket status applies to all vulnerabilities associated with that ticket. For multiple tickets tied to a single vulnerability, the vulnerability can only be closed when all the tickets are closed.

