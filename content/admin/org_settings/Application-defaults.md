<!--
title: "Applications"
description: "Overview of application settings"
tags: "Admin Organization settings applications"
-->

## How It Works 

Organization Admins can choose default settings for applications in their organization based on levels of importance, existing policies and Assess licensing. Go to the **User menu > Organization Settings > Applications tab** to get started. 

<a href="assets/images/Application-defaults.png" rel="lightbox" title="Configure default settings for new and existing applications"><img class="thumbnail" src="assets/images/Application-defaults.png"/></a>

## Set Up Defaults

### Importance 

Use the dropdown menu to choose an **Importance** level for applications. The default selection is **Medium**. 

### Policy 

Use the multiselect **Policy** field to choose which [Remediation](admin-policymgmt.html#remediate) and [Compliance Policies](admin-policymgmt.html#compliance) to apply automatically to applications. (You can still add applications to policies that aren't included in your default settings after you onboard them.)

### Behavior 

Check the box to **Require administrative approval when closing vulnerabilities** in your organization. In the fields below, choose the statuses and severities of vulnerabilities that should automatically go into a **Pending** state when a user moves to close them. When a user requests to close any qualifying vulnerabilities, Contrast will [notify](admin-orgsettings.html#org-notify) you that your review is needed. 

> **Note:** To qualify for administrative approval, both a status and severity that you selected in this configuration must apply to the vulnerability being closed. 

Each vulnerability status will remain pending until you submit your review of the closure. If you deny the closure of a vulnerability, you must provide a reason for denial; once confirmed, your feedback appears in the vulnerability's **Discussion** tab. If you disable the feature, any pending closures are automatically approved. 

> **Note:** While in a Pending state, the vulnerability's previous status still applies for the purpose of organizational reports and statistics. 

See [Manage Vulnerabilities](user-vulns.html#manage-vuln) for more information about Pending states and workflows. 

### Licensing 

Check the box if you want to **Automatically apply licenses** to newly onboarded applications. The thermometer chart below the checkbox shows you the number of licenses used out of the total number of licenses available in the organization. Click on the total number of licenses to go to the Licenses view of the [Organization Statistics](user-reports.html#orgstats) page. 

## Custom Fields 

Use the **Custom Fields** section to configure custom metadata that should be provided for each of the applications in your organization. During [agent onboarding](user-apps.html#addapp), users are prompted to enter metadata for the fields you create, and add the information in their configuration files. The metadata is then displayed in the **Applications** page grid, where you can also use it to filter applications, and the application's **Details** page in the Contrast UI. 

The following agent versions support custom metadata fields: 

* Java 3.5.6.591+
* .NET 18.10.35+
* Node 1.35.0
* Python 1.2.0
* Ruby 2.0.8

Complete the following steps to create custom fields: 

* Use the dropdown menu to choose a field type of "Freeform", "Numeric" or "Point of Contact". <br> (The type of field you choose may determine the type of validation that's required.)
* Enter a name for the field. 
* Use the checkboxes to determine if the metadata provided should be **Required** and/or a **Unique** value for each application. 
* Click **Add Field** button to complete as many rows as you need. 

<a href="assets/images/App-custom-settings.png" rel="lightbox" title="Configure custom metadata fields for your applications"><img class="thumbnail" src="assets/images/App-custom-settings.png"/></a>

Once you've defined each field, Contrast provides the formatted property that you can copy and paste into your agent configuration files. You must then complete the information for each key=value pair. 

If you would like to fail applications that don't include all required fields, check the box to **Restrict applications missing required fields**. This may apply to new or new and existing applications in the organization. 

> **Note:** If you don't choose to restrict applications, any application missing a required field will be successfully onboarded but flagged in the UI. Contrast will also send an email alert to the designated Point of Contact, if provided.  



