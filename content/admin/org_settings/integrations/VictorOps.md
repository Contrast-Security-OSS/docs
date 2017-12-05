<!--
title: "VictorOps Integration"
description: "Integrating VictorOps with Contrast"
tags: "Admin organization settings integrations victorops"
-->

Connect to VictorOps incident management to send attack notifications from Contrast. 

## Prerequisites

* VSTS or TFS account credentials (username and personal access token)
* An access token with "Work items (read and write)" scope (minimum requirement)
* A running VSTS or TFS instance accessible via HTTP(s) to Contrast
* A project which to associate the application instrumented by Contrast

## Setup

In the **Integrations** page, click **Connect** in the VictorOps row. This takes you to the **VictorOps Connection** page, where you must complete the following fields.

<a href="assets/images/VictorOps-integration-setup.png" rel="lightbox" title="Set up your VictorOps integration"><img class="thumbnail" src="assets/images/VictorOps-integration-setup.png"/></a>


* **Name:** The name for the bugtracker entry; displayed when sending findings to bugtrackers.
* **Personal Access Token:** The token associated with your user to [authenticate to your host](https://docs.microsoft.com/en-us/vsts/accounts/use-personal-access-tokens-to-authenticate).
* **Host:** The VSTS or TFS URL; must be accessible from the Contrast interface instance being configured.

Once you complete the fields, click **Test connection**. This process may take a few minutes, depending on the number of your VSTS or TFS projects. The test verifies that Contrast can reach the VSTS or TFS instance and that the specified user can log in.

Once a connection is made, select the applications that you want to be available to this bugtracker. Customize the values for the Project, Assignee and Default Work Issue Type fields as well as the Default Severity or Priority levels depending on the work issue type.


