<!--
title: "CA Agile Central Integration"
description: "Integrate CA Agile Central with Contrast"
tags: "Admin organization settings integrations CA agile central"
-->


Integrate Agile Central with Contrast to automatically track vulnerabilities in your applications.

## Prerequisites

* Agile Central account URL
* Permission to create issues in the target project
* A running Agile Central instance accessible via HTTP to the Contrast UI
* A project to associate the application instrumented by Contrast

## Add a Configuration 

To connect your Contrast organization with Agile Central, and setup a new integration, complete the following steps. 

* Go to the **user menu > Organization Settings > Integrations** page, and click **Connect** in the Agile Central row. 
* In the **Connect with Agile Central** form, add the name for the bugtracker entry, as well as the **URL** and **API Key** in the given fields. <!-- The Agile Central URL must be accessible from the Contrast UI instance being configured. -->

> **Note:** To find your Agile Central API key, log in to the Agile Central Application manager <!-- (add hyperlink) --> and go to the **API Keys** tab.  

* Once you complete the fields, click the button to **Test connection**. The test verifies that Contrast can reach the Agile Central instance and that the specified user can log in.

<a href="assets/images/Agile-central-connect.png" rel="lightbox" title="Configure a new Agile Central integration"><img class="thumbnail" src="assets/images/Agile-central-connect.png"/></a>

* Once connected, select the **Applications** that you want to be available to this integration. 
* Choose a **Project Name** and **Owner** from the dropdown menus. 
* In the **Default Priority** section, use the dropdown menus to choose a priority level for each vulnerability severity. (The options are "Resolve immediately", "High attention", "Low" and "Normal".)
* Choose the **Environment** for which you want to generate tickets. 
* Choose a **Defect State**. (The options are "Submitted", "Open", "Fixed" and "Closed".)
* Add a name that the tickets are **Submitted By**. (Optional)

<!-- 
> **Note:** If you change the Project or Issue type, required and additional fields are updated. However, the UI keeps the selected values that apply to the new configuration.

 -->

>**Note:** To add another integration once you're connected in Contrast, click the **Add Configuration** link in Agile Central row.

### Automatically create tickets 

To automatically create tickets for newly discovered vulnerabilities, check the designated box in the configuration form. 

<!-- In the multiselect field that appears, choose the Rule(s) and/or Severity level(s) of the vulnerabilities for which you want to generate tickets. The default selections are **Critical** and **High**.

>**Note:** This selection doesn't generate tickets retroactively. 

-->

## Edit Configurations

To see existing configurations, click the **Show Configurations** link in Agile Central row. Click on a configuration name to go to the **Agile Central Connection** form, and edit the field values. You can also delete your configuration by clicking the trashcan icon. 



