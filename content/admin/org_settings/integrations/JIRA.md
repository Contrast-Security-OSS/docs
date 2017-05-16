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

