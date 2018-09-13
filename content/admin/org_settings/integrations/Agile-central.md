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

To connect your Contrast organization with Agile Central, complete the following steps. 

* Go to the **user menu > Organization Settings > Integrations** page, and click **Connect** in the Agile Central row. 
* In the **Connect with Agile Central** form, add the name for the bugtracker entry, as well as the **URL** and **API Key** in the given fields. The Agile Central URL must be accessible from the Contrast UI instance being configured.

> **Notes:** 
* To find your Agile Central API key, log in to the [Agile Central Application manager](https://help.rallydev.com/rally-application-manager), and go to the **API Keys** tab.  
* Contrast saves the username, password and Agile Central URL entered in your configuration as a set of credentials. See the **Credential Sets** section for more details.

* Once you complete the fields, click the button to **Test connection**. The test verifies that Contrast can reach the Agile Central instance and that the specified user can log in.

<a href="assets/images/Agile-central-connect.png" rel="lightbox" title="Configure a new Agile Central integration"><img class="thumbnail" src="assets/images/Agile-central-connect.png"/></a>

* Once connected, select the **Applications** that you want to be available to this integration. 
* Choose a **Project Name** and **Owner** from the dropdown menus. 
* In the **Default Priority** section, use the dropdown menus to choose a priority level for each vulnerability severity. 
* Choose the **Environment** for which you want to generate tickets. 
* Choose a **Defect State**. 
* Add a name that the tickets are **Submitted By**. 

>**Note:** While none of these configuration fields are required, Agile Central may populate tickets with their own default values for any fields you leave blank. 

To add another integration once you're connected in Contrast, click the **Add Configuration** link in Agile Central row.

### Automatically create tickets 

To automatically create tickets for newly discovered vulnerabilities, check the designated box in the configuration form. In the multiselect field that appears, choose the Rule(s) and/or Severity level(s) of the vulnerabilities for which you want to generate tickets. 

>**Note:** This selection doesn't generate tickets retroactively. 


## Edit Configurations

To see existing configurations, click the **Show Configurations** link in Agile Central row. Click on a configuration name to go to the **Agile Central Connection** form, and edit the field values. You can also delete your configuration by clicking the trashcan icon. 

## Credentials

Contrast saves the latest set of credentials that you enter in your Agile Central configurations to help you set up new connections even faster. The API key and URL values that you enter in your first configuration become the default credentials for your following configurations. In subsequent configurations, Contrast will auto-populate the fields with the default credentials, but allow you to modify the values as needed. You can also manage your saved sets of credentials to simultaneously update all of the affected configurations. 

### Manage credentials

To create or edit a configuration with credentials that are different than your default set, select the **Manage credentials** link. 

* In the **URL** field, use the dropdown menu to choose a set of saved credentials; or, manually update the values in the **URL**, **Username** and **Password** fields. 
* Once you've updated the fields, click the button to **Test Connection**. 

<a href="assets/images/Agile-credentials.png" rel="lightbox" title="Set up a new Agile Central configuration with saved credentials"><img class="thumbnail" src="assets/images/Agile-credentials.png"/></a>

* Click the button to **Save** your changes. 
* If you're using new credentials, you must choose to override the existing set of credentials under the given name, or save the new values as a new credential set under a different name. 

<a href="assets/images/Agile-credentials-dialog.png" rel="lightbox" title="Override your default credentials in your configuration"><img class="thumbnail" src="assets/images/Agile-credentials-dialog.png"/></a>

You can also select the **Manage Credentials** link in the Agile Central Integrations row to modify your existing sets of information. 
* In the configuration form, use the dropdown menu to select a set of saved credentials, and then modify the values in the given fields. 
* Click the link to **Rename** the set of credentials, if needed. 

>**Note:** Any updates to a set of credentials will affect all configurations using that set. 

* Click the button to **Test Connection**. 
* Once Contrast verifies the connection, click the button to **Save** your changes. 


