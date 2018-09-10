<!--
title: "Applications"
description: "Overview of application settings"
tags: "Admin Organization settings applications"
-->

## How It Works 

Organization Admins can choose default settings for applications in their organization based on levels of importance, existing policies and Assess licensing. Go to the **User menu > Organization Settings > Applications tab** to get started. 

<a href="assets/images/Application-defaults.png" rel="lightbox" title="Configure application defaults for your organization"><img class="thumbnail" src="assets/images/Application-defaults.png"/></a>

## Set Up Defaults

### Importance 

Use the dropdown menu to choose an **Importance** level for applications. The default selection is **Medium**. 

### Policy 

Use the multiselect **Policy** field to choose which [Remediation](admin-policymgmt.html#remediate) and [Compliance Policies](admin-policymgmt.html#compliance) to apply automatically to applications. (You can still add applications to policies that aren't included in your default settings after you onboard them.)

### Behavior 

Check the box to **Require administrative approval when closing vulnerabilities** found in applications in your organization. Vulnerabilities with the statuses and severities you choose in this configuration will automatically go into a pending state when a user moves to close them. The vulnerability status will remain pending until you submit your review of the closure. 

### Licensing 

Check the box if you want to **Automatically apply licenses** to newly onboarded applications. The thermometer chart below the checkbox shows you the number of licenses used out of the total number of licenses available in the organization. Click on the total number of licenses to go to the Licenses view of the [Organization Statistics](user-reports.html#orgstats) page. 


