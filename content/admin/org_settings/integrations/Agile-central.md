<!--
title: "CA Agile Central Integration"
description: "Integrate CA Agile Central with Contrast"
tags: "Admin organization settings integrations CA agile central"
-->


Integrate Agile Central with Contrast to automatically track vulnerabilities in your applications.

## Prerequisites

* Agile Central account credentials (username and password)
* Permission to create issues in the target project
* A running Agile Central instance accessible via HTTP to the Contrast UI
* A project to associate the application instrumented by Contrast

## Add a Configuration 

In the **Integrations** page, click **Connect** in the Agile Central row. In the **Connect with Agile Central** form, add the name for the bugtracker entry, as well as the **URL** and **API Key** in the given fields. <!-- The Agile Central URL must be accessible from the Contrast UI instance being configured. -->

> **Note:** To find your Agile Central API key, log in to the Agile Central Application manager <!-- (add hyperlink) --> and go to the **API Keys** tab.  

Once you complete the fields, click the button to **Test connection**. The test verifies that Contrast can reach the Agile Central instance and that the specified user can log in.

<!-- 
<a href="assets/images/Jira-connection-setup.png" rel="lightbox" title="Configure a new Jira integration"><img class="thumbnail" src="assets/images/Jira-connection-setup.png"/></a>

Once connected, select the **applications** that you want to be available to this integration, and customize the values for the **Project**, **Assignee** and **Default Issue Type** fields. You can also customize the **Default Priority** levels for vulnerability severity and values for **Additional JIRA** fields, such as environment or labels. 

> **Note:** If you change the Project or Issue type, required and additional fields are updated. However, the UI keeps the selected values that apply to the new configuration.

### Automatically create tickets 

Automatically create tickets in Jira for newly discovered vulnerabilities by checking the designated box in the configuration form. In the multiselect field that appears, choose the Rule(s) and/or Severity level(s) of the vulnerabilities for which you want to generate tickets. The default selections are **Critical** and **High**.

>**Note:** This selection doesn't generate tickets retroactively.
 -->



