<!--
title: "JIRA Integration"
description: "Integrating JIRA with Contrast"
tags: "Admin organization settings integrations jira"
-->


Integrate JIRA with Contrast to automatically generate tickets, synchronize comments and push notifications for your applications.

## Prerequisites

* JIRA account credentials (username and password)
* Permission to create issues in the target project
* A running JIRA instance accessible via HTTP to the Contrast UI
* A project to associate the application instrumented by Contrast

## Add a Configuration 

In the **Integrations** page, click **Connect** in the JIRA row. In the **Connect with JIRA** form, add the name for the bugtracker entry, the **username** and **password** for the account connected to JIRA in the appropriate fields. The JIRA URL must be accessible from the Contrast UI instance being configured.

> **Note:** Contrast saves the username, password and JIRA URL entered in your configuration as a set of credentials. See the ** Credential Sets** section for more details.

Once you complete the fields, click **Test connection**. This process may take a few moments depending on the number of your JIRA projects. The test verifies that Contrast can reach the JIRA instance and that the specified user is able to log in.

Once a connected, select the **applications** that you want to be available to this integration, and customize the values for the **Project**, **Assignee** and **Default Issue Type** fields. You can also customize the **Default Priority** levels for vulnerability severity and values for **Additional JIRA** fields, such as environment or labels. 

<a href="assets/images/JIRA-integration-set-up.png" rel="lightbox" title="JIRA Integration"><img class="thumbnail" src="assets/images/JIRA-integration-set-up.png"/></a>

> **Note:** If you change the Project or Issue type, required and additional fields are updated. However, the UI keeps the selected values that apply to the new configuration.

### Two-way integration 

Use two-way integration to automatically update the status of a linked vulnerability when you close or reopen an issue in JIRA. 

<a href="assets/images/Two-way-jira-integration.png" rel="lightbox" title="Enable two-way integration"><img class="thumbnail" src="assets/images/Two-way-jira-integration.png"/></a>

In the JIRA configuration page, check the box to **Enable two-way integration**. This generates a URL that appears below the checkbox, which your JIRA administrator must use to register a webhook in JIRA. Clicking the link opens a new tab that takes you to [instructions for registering webhooks](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-rest).

> **Note:** When you delete a configuration with two-way integration enabled, you must delete the webhook configuration from your JIRA administrator console to completely remove the integration.

In the fields below, use the dropdown menu to set a vulnerability status based on a JIRA ticket status and resolution pairing. The table below shows the default vulnerability status options in **bold**. 

| Ticket Status | Ticket Resolution  | Vulnerability Status Options                               |
|---------------|--------------------|------------------------------------------------------------|
| OPEN          | N/A                | **Confirmed** <br> Suspicious <br>  Reported               |
| IN PROGRESS   | N/A                | **Confirmed** <br> Suspicious <br>  Not a Problem <br> Remediated <br> Reported <br> Fixed |
| RESOLVED      | Fixed <br> Won't Fix <br> Duplicate <br> Incomplete <br> Cannot Reproduce <br> Done <br> Won't Do | **Not a Problem** <br> Remediated <br> Fixed  |
| REOPENED      | N/A                | **Confirmed** <br> Suspicious <br> Reported                |
| CLOSED        | Fixed <br> Won't Fix <br> Duplicate <br> Incomplete <br> Cannot Reproduce <br> Done <br> Won't Do | **Not a Problem** <br> Remediated <br> Fixed  |
| BLOCKED       | N/A                | **Confirmed** <br> Suspicious <br>  Not a Problem <br> Remediated <br> Reported <br> Fixed |
| NEEDS CLARIFICATION | N/A          | **Confirmed** <br> Suspicious <br>  Not a Problem <br> Remediated <br> Reported <br> Fixed |
| READY TO DEPLOY | Fixed <br> Won't Fix <br> Duplicate <br> Incomplete <br> Cannot Reproduce <br> Done <br> Won't Do | **Not a Problem** <br> Remediated <br> Fixed |

> **Note:** If you choose **Not a Problem**, Contrast requires you to enter a **Reason** in the dropdown menu. The default selection in the dropdown menu is **Other**. 

Once the two-way integration is saved, Contrast will automatically generate comments in the vulnerability's **Discussion** page when the status of a ticket is updated. Each comment includes the name of the bugtracker and a link to the ticket. 

#### Multiple vulnerabilities

For multiple vulnerabilities sent to JIRA in bulk as a single issue, the JIRA ticket status applies to all vulnerabilities associated with that ticket. For multiple tickets tied to a single vulnerability, the vulnerability can only be closed when all the tickets are closed.

### Automatically create tickets 

Automatically create tickets in JIRA for newly discovered vulnerabilities by checking the designated box in the configuration form. In the multiselect field that appears, choose the Rule(s) and/or Severity level(s) of the vulnerabilities for which you want to generate tickets. The default selections are **Critical** and **High**.

>**Note:** This selection doesn't generate tickets retroactively.

## Credential Sets

Contrast will save each set of credentials that you enter in your JIRA configurations to help you make new connections even faster. The  username, password and JIRA URL values that you enter in your first configuration become the default credentials for your following configurations, unless you choose to modify the fields. 

In subsequent configurations, Contrast will auto-populate the fields with the default credentials. If you want to use different information in a new configuration, update the values in the configuration form fields. Contrast will then give you the options to override the existing set of credentials, or save the new values as a new credential set under a different name.  

<!-- How does this relate to the Project in the configuration? -->

<a href="assets/images/Jira-credentials-dialog.png" rel="lightbox" title="Override default JIRA credentials in your configuration"><img class="thumbnail" src="assets/images/Jira-credentials-dialog.png"/></a>

### Manage credentials

In the JIRA integrations row, click the **Manage Credentials** link to modify your existing sets of information. In the configuration form, use the dropdown menu to select a set of saved credentials, and modify the fields as needed. Click the link to **Rename** the set of credentials. 

>**Note:** Any updates to a set of credentials will affect all configurations using that set. 

Click the button to **Test Connection**; once Contrast verifies the connection, click the button to **Save** your changes. 


