<!--
title: "GitHub Integration"
description: "Integrating GitHub with Contrast"
tags: "Admin organization settings integrations github"
-->


Integrating GitHub with Contrast allows you to automatically create issues for your applications.

## Prerequisites

* GitHub account credentials (username and password)
* Access to a GitHub organization and repository for the application.
* Push access to the repository (only required to set labels, milestones and assignees)
* A running GitHub instance accessible via HTTP to the Contrast interface

## Setup

In **Integrations**, click **Connect** in the GitHub row. In the **Connect with GitHub** form, complete the following fields. 

Field | Description
------ | -----------
**Name** | The name for the bugtracker entry; displayed when sending findings to bugtrackers
**Username** | The username for the account connected to GitHub
**Password** | The password for the specified username
**Host** | The GitHub URL; must be accessible from the Contrast interface instance being configured


Once you complete the fields, click **Test connection**. This process may take a few moments depending on the number of your GitHub organizations and repositories. The test verifies that the GitHub instance can be reached by Contrast and that the specified user is able to log in.

Once a connection is made, select the applications that you want to be available to this bugtracker, and customize the values for the **GitHub Organization** and **Repository** fields. You can also customize the **Labels**, **Assignees** and **Milestone** fields, although these are considered optional. 

<a href="assets/images/GitHub-integration-set-up.png" rel="lightbox" title="GitHub Integration"><img class="thumbnail" src="assets/images/GitHub-integration-set-up.png"/></a>

> **Note:** If you change the GitHub Organization or Repository, additional fields are updated.
<!--
### Two-way integration 

Use two-way integration to automatically update the status of a linked vulnerability when you close or reopen an issue with certain labels in GitHub. 

<a href="assets/images/Two-way-github-integration.png" rel="lightbox" title="Enable two-way integration"><img class="thumbnail" src="assets/images/Two-way-github-integration.png"/></a>

In the GitHub configuration page, begin setup by checking the box to **Enable two-way integration**. This generates a URL that appears below the checkbox, which your GitHub administrator must use to register a webhook in GitHub. Clicking the link opens a new tab that takes you to [instructions for registering webhooks](https://developer.atlassian.com/jiradev/jira-apis/webhooks#Webhooks-rest).

> **Note:** When you delete a configuration with two-way integration enabled, you must delete the webhook configuration from your GitHub Organization Settings to completely remove the integration.

Continue to the fields below to set a vulnerability status based on each GitHub issue status and labels. Beside each issue status and label pairing, choose a vulnerability status from the dropdown menu. The table below shows the default options in **bold**. 

| Issue Status | Label               | Vulnerability Status Options                               |
|---------------|--------------------|------------------------------------------------------------|
| OPEN          | N/A                | **Confirmed** <br> Suspicious <br>  Reported               |
| CLOSED        | N/A                | **Confirmed** <br> Suspicious <br>  Not a Problem <br> Remediated <br> Reported <br> Fixed |

If you choose **Not a Problem**, Contrast requires you to enter a **Reason** in the dropdown menu, as it does in the Vulnerability grid. The default selection in the dropdown menu is **Other**. 

Once the two-way integration is saved, Contrast will automatically generate comments in the Discussion tab on each vulnerability page when the status of an issue is updated. Each comment includes the name of the bugtracker and a link to the ticket. 
-->
#### Multiple vulnerabilities

For multiple vulnerabilities sent to GitHub in bulk as a single issue, the GitHub ticket status applies to all vulnerabilities associated with that ticket. For multiple issues tied to a single vulnerability, the vulnerability can only be closed when all the tickets are closed.

### Automatically create tickets 

Automatically create issues in GitHub for newly discovered vulnerabilities by checking the designated box in the configuration form. In the multiselect field that appears, choose the Rule(s) and/or Severity level(s) of the vulnerabilities for which you want to generate tickets. The default selections are **Critical** and **High**.

> **Note:** This selection doesn't generate issues retroactively.
