<!--
title: "Jira Integration"
description: "Integrating Jira with Contrast"
tags: "Admin organization settings integrations jira"
-->


Integrate Jira with Contrast to automatically generate tickets, synchronize comments and push notifications for your applications.

## Prerequisites

* Jira account credentials (username and password)
* Permission to create issues in the target project
* A running Jira instance accessible via HTTP to the Contrast UI
* A project to associate the application instrumented by Contrast

## Add a Configuration 

In the **Integrations** page, click **Connect** in the Jira row. In the **Connect with Jira** form, add the name for the bugtracker entry, the **username** and **password** for the account connected to Jira in the appropriate fields. The Jira URL must be accessible from the Contrast UI instance being configured.

> **Note:** Contrast saves the username, password and Jira URL entered in your configuration as a set of credentials. See the ** Credential Sets** section for more details.

Once you complete the fields, click **Test connection**. This process may take a few moments depending on the number of your Jira projects. The test verifies that Contrast can reach the Jira instance and that the specified user is able to log in.

<a href="assets/images/Jira-connection-form.png" rel="lightbox" title="Configure a new Jira integration"><img class="thumbnail" src="assets/images/Jira-connection-form.png"/></a>

Once connected, select the **Applications** for which you want to create ticket. You may also create tickets for applications with specific [importance levels](user-appsmanage.html) using the **Application Importance** field.   

Use the **Project**, **Assignee** and **Default Issue Type** fields to customize the Jira tickets created as well as the **Default Priority** levels of tickets based on vulnerability severity levels reported in Contrast. The **Additional JIRA** fields allow you to create custom tickets field and values, such as environments or organization-specific labels. 

> **Note:** If you change the Project or Issue type, required and additional fields are updated. However, the UI keeps the selected values that apply to the new configuration.

### Two-way integration 

Use two-way integration to automatically update the status of a linked vulnerability when you close or reopen an issue in Jira. 

<a href="assets/images/Two-way-jira-integration.png" rel="lightbox" title="Enable two-way integration"><img class="thumbnail" src="assets/images/Two-way-jira-integration.png"/></a>

In the Jira configuration page, check the box to **Enable two-way integration**. This generates a URL that appears below the checkbox, which your Jira administrator must use to register a webhook in JIRA. Clicking the link opens a new tab that takes you to [instructions for registering webhooks](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-rest). In the webhook configuration, place a check for the **updated** event type under **Issue** column for **Issue related events**.

> **Note:** When you delete a configuration with two-way integration enabled, you must delete the webhook configuration from your Jira administrator console to completely remove the integration.

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

For multiple vulnerabilities sent to Jira in bulk as a single issue, the Jira ticket status applies to all vulnerabilities associated with that ticket. For multiple tickets tied to a single vulnerability, the vulnerability can only be closed when all the tickets are closed.

### Automatically create tickets 

Automatically create tickets in Jira for newly discovered vulnerabilities by checking the designated box in the configuration form. In the multiselect field that appears, choose the Rule(s) and/or Severity level(s) of the vulnerabilities for which you want to generate tickets. The default selections are **Critical** and **High**.

>**Note:** This selection doesn't generate tickets retroactively.

## Credentials

Contrast saves the latest set of credentials that you enter in your Jira configurations to help you set up new connections even faster. The username, password and Jira URL values that you enter in your first configuration become the default credentials for your following configurations. In subsequent configurations, Contrast will auto-populate the fields with the default credentials, but allow you to modify the values as needed. You can also manage your saved sets of credentials to simultaneously update all of the affected configurations. 

### Manage credentials

To create or edit a configuration with credentials that are different than your default set, select the **Manage credentials** link. In the **URL** field, use the dropdown menu to choose a set of saved credentials; or, manually update the values in the **URL**, **Username** and **Password** fields. Once you've updated the fields, click the button to **Test Connection**. 

<a href="assets/images/Jira-connect-credentials.png" rel="lightbox" title="Set up a new JIRA configuration with saved credentials"><img class="thumbnail" src="assets/images/Jira-connect-credentials.png"/></a>

Click the button to **Save** your changes. If you're using new credentials, you must choose to override the existing set of credentials under the given name, or save the new values as a new credential set under a different name. 

<a href="assets/images/Jira-credentials-dialog.png" rel="lightbox" title="Override default JIRA credentials in your configuration"><img class="thumbnail" src="assets/images/Jira-credentials-dialog.png"/></a>

You can also select the **Manage Credentials** link in the Jira Integrations row to modify your existing sets of information. In the configuration form, use the dropdown menu to select a set of saved credentials, and then modify the values in the given fields. Click the link to **Rename** the set of credentials, if needed. 

<a href="assets/images/Manage-jira-credentials.png" rel="lightbox" title="Manage saved credentials"><img class="thumbnail" src="assets/images/Manage-jira-credentials.png"/></a>

>**Note:** Any updates to a set of credentials will affect all configurations using that set. 

Click the button to **Test Connection**; once Contrast verifies the connection, click the button to **Save** your changes. 

