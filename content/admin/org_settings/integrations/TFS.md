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

In the Integrations page, click **Connect** in the VSTS row. In the **Connect with Visual Studio** page, complete the following fields.

Field | Description
------ | -----------
**Name** | The name for the bugtracker entry; displayed when sending findings to bugtrackers.
**Personal Access Token** | The token associated with your user to [authenticate to your host](https://www.visualstudio.com/en-us/docs/integrate/get-started/auth/overview).
**Host** | The VSTS or TFS URL; must be accessible from the Contrast interface instance being configured.

Once you complete the fields, click **Test connection**. This process may take a few minutes, depending on the number of your VSTS or TFS projects. The test verifies that Contrast can reach the VSTS or TFS instance and that the specified user can log in.

<a href="assets/images/VSTS-TFS-integration.png" rel="lightbox" title="VSTS Integration"><img class="thumbnail" src="assets/images/VSTS-TFS-integration.png"/></a>

Once a connection is made, select the applications that you want to be available to this bugtracker as well as customize the values for the Project, Assignee and Default Work Issue Type fields. You can also customize the Default Severity or Priority levels depending on the work issue type.

> **Note:** Contrast uses API v.2 to support VSTS and TFS 2015/2017.

### Automatically create tickets 

Automatically create tickets for newly discovered vulnerabilities by checking the designated box in the configuration form. In the multiselect field that appears, choose the Rule(s) and/or Severity level(s) of the vulnerabilities for which you want to generate tickets. The default selections are **Critical** and **High**.

> **Note:** This selection doesn't generate tickets retroactively.

