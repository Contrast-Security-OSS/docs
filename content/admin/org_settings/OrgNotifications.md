<!--
title: "Notifications"
description: "Overview of Contrast notifications" 
tags: "Admin organization settings application alerts notifications custom"
-->

## How It Works

Notifications allow Contrast users to receive alerts in specific situations, such as the discovery of a vulnerability or an attack on an application. Organization Administrators can set default settings for Contrast notifications for all users in their organization. Individual users can then tailor these settings as needed. 

There are two primary channels available for notifications: Email and In Contrast. 

* **In Contrast:** Notifications are available directly in the Contrast application. View your notifications by clicking the bell icon in the top menu bar.
* **Email:** You must configure Contrast to communicate with an appropriate [SMTP system](admin-systemsettings.html#system-glance) to receive notifications by email. 

## User Notifications

Organization administrators can define default notification settings for all users in their organization by going to the **User menu > Organization Settings > Notifications tab**. Individual users can modify the default subscriptions that you set. However, integration notification settings affect which messages users receive from integrations that are set up in your organization, and are managed by Organization Administrators only. For more information on user settings, go to the [account Notifications](user-account.html#user-notify) article.

### Default user settings 

Use the toggles in the **Integrations**, **In Contrast** and **Email** columns to enable or disable the following subscriptions. Use the dropdown menu to choose an [integration](admin-orgintegrations.html) that's configured in your organization, and adjust the default notification settings for each one.

* **Active Attack:** There is an active attack on an application with **Protect** enabled. 
* **New Vulnerability:** Contrast has detected a new vulnerability. Click in the field to enable notifications for specific severity levels or "Library"; the default selection is "All".
* **Server Offline:** Contrast can't reach a server. 
* **New Comment:** A team member commented on a finding. 
* **New Asset:** A new asset to which the user has [access](user-account.html#user-permissions) has been onboarded. Click in the field to set this notification for "Application" or "Server"; the default selection is "All".
* **Email Digest:** A daily summary of Contrast activities. (Email only)

### Custom notifications

Custom notifications allow users with Admin, Edit and Rules Admin [roles](admin-manageorgsroleperm.html#roles) in an organization to enable notifications for one or more users when a specific condition is observed in Contrast. These notifications execute and alert users by email at the time of the event, daily or weekly.  

### Create notifications

To create a custom notification, click the **Create Notification** button above the grid in the Custom Notifications panel. In the dialog that appears, fill out the following form fields. 

* Use the radio buttons to choose **Vulnerability** or **Attack**. 
* Choose a **Name** for the notification. 
* Use the dropdown menu to set the notification **Interval** as "Daily", "Weekly" or "On Event".
* Enter a **Description** for the notification's purpose. 
* Click in the multiselect field to choose the **Applications** for which this notification applies. 
* Choose the **Application Tags** for which this notification applies. 
* Choose which organization **Users** should receive the notifications. 
* Use the dropdown menus to choose your **Conditions**, and complete the following fields in the row. Click the **Add Condition** link to add a row. 

<a href="assets/images/Custom-notification-dialog.png" rel="lightbox" title="Create a custom notification"><img class="thumbnail" src="assets/images/Custom-notification-dialog.png"/></a>

#### About conditions

Contrast supports six conditions for custom notifications: Category, Impact, Likelihood, URL, Class and Method.

| Notification Types | Condition         | Description  |
|--------------------|-------------------|--------------|
| Category           | Is or Is Not      | Categories are high-level groupings of rule types such as Authentication, Injection, Cryptography, etc. There are 11 categories within Contrast rule types.| 
| Impact             | Is, Is Lower Than, Is Higher Than | Impact is measured in High, Medium and Low ratings based on how a rule type affects a given organization. Every rule type has a default impact configuration setting which can be customized. |
| Likelihood         | Is, Is Lower Than, Is Higher Than | Likelihood is measured in High, Medium and Low ratings based on how frequent a rule type may occur. Every rule type has a default likelihood configuration setting that can be customized. | 
| URL                | Is, Contains, Starts With | A specific URL from an application. | 
| Class              | Is, Contains, Starts With | A specific Java or .NET class. | 
| Method             | Is, Contains, Starts With | A specific Java or .NET method. | 


## Administrative Notifications

Administrators automatically receive the following notifications for high-level events in their organization in the Contrast application and by email.

* **Application Licensed:** A new application was licensed in Contrast.
* **Application License Expiring:** The license for an active application is expiring. (Contrast sends this notification two months, one month and one week prior to the expiration date).
* **Licenses Expiring:** Existing license(s) with no associated applications is expiring. (Contrast sends this notification two months, one month and one week prior to the expiration date).
* **Remediation Policy Violation:** A vulnerability is in violation of an existing [remediation policy](admin-policymgmt.html#remediate).
* **Library Policy Violation:** A library is in violation of an existing [library policy](admin-policymgmt.html#library).

<a href="assets/images/AdminNotificationEmail.png" rel="lightbox" title="Email notification for administrators"><img class="thumbnail" src="assets/images/AdminNotificationEmail.png"/></a>

## Feature Notifications 

For some features that require user notifications, Contrast automatically notifies the affected users in the Contrast UI when a Contrast administrator enables the feature. (You can't control these notifications in the **Notifications** page.) Contrast requires user and administrator notifications for features including [vulnerability status approval](admin-orgsettings.html#app-defaults) and other **Policy Management** settings.
