<!--
title: "GitHub Integration"
description: "Integrate GitHub with Contrast"
tags: "Admin organization settings integrations bugtracker github"
-->


Integrating GitHub with Contrast allows you to automatically create issues for your applications.
<!-- What would (or should) someone use this instead of another integration option? -->

## Prerequisites

* GitHub account credentials (username and password)
* Access to a GitHub organization and repository for the application
* Write permission ([push access](https://help.github.com/articles/repository-permission-levels-for-an-organization/)) to the repository <!-- (only required to set labels, milestones and assignees) --> <!-- What does this mean? -->
* A running GitHub instance accessible via HTTP to the Contrast UI

## Setup

In the **Integrations** page, click **Connect** in the GitHub row. 

<a href="assets/images/GitHub-integration-set-up.png" rel="lightbox" title="GitHub Integration"><img class="thumbnail" src="assets/images/GitHub-integration-set-up.png"/></a>

In the **Connect with GitHub** form, add the **name** for the bugtracker entry, the **username** for the account connected to GitHub and the **password** for the specified username in the appropriate fields. The GitHub **URL** must be accessible from the Contrast UI instance being configured. 

Once you complete the fields, click **Test connection**. This process may take a few moments depending on the number of your GitHub organizations and repositories. The test verifies that the GitHub instance can be reached by Contrast and that the specified user is able to log in.

Once a connection is made, select the **applications** that you want to be available to this bugtracker, and customize the values for the **GitHub Organization** and **Repository** fields in the configuration form. You can also customize the **Labels**, **Assignees** and **Milestone** fields, although these are considered optional. 

> **Note:** If you change the GitHub Organization or Repository values, additional fields are updated. 

<!-- Which fields are "additional"? How are they updated?  -->

### Automatically create tickets 

Automatically create issues in GitHub for newly discovered vulnerabilities by checking the box at the bottom of the configuration form. In the multiselect field that appears, choose the Rule(s) and/or Severity level(s) of the vulnerabilities for which you want to generate tickets. The default selections are "Critical" and "High".

> **Note:** This selection doesn't generate issues retroactively.


### Multiple vulnerabilities

For multiple vulnerabilities sent in bulk to GitHub as a single issue, the GitHub ticket status applies to all vulnerabilities associated with that ticket. For multiple issues tied to a single vulnerability, the vulnerability can only be closed when all the tickets are closed.

