<!--
title: "Notifications"
description: "Overview of Contrast notifications" 
tags: "Admin organization settings application alerts notifications custom"
-->

## How It Works

Notifications allow Contrast users to receive alerts in specific situations, such as the discovery of a vulnerability or an an attack on an application. Organization Administrators can set default settings for Contrast notifications for all users in their organization. Individual users can then tailor these settings as needed. 

There are two primary channels available for notifications: Email and In Contrast. 

* **Email:** You must configure Contrast to communicate with an appropriate [SMTP system](admin-systemsettings.html#glance) to receive notifications by email. 
* **In Contrast:** Notifications are available directly in the Contrast application. View your notifications by clicking the bell icon in the top menu bar.

## Administrative Notifications

Administrators automatically receive the following notifications for high-level events in their organization in the Contrast application and by email.

* **Application Licensed:** A new application was licensed in Contrast.
* **Application License Expiring:** The license for an active application is expiring. (Contrast sends this notification two months, one month and one week prior to the expiration date).
* **Licenses Expiring:** Existing license(s) with no associated applications is expiring. (Contrast sends this notification two months, one month and one week prior to the expiration date).
* **Remediation Policy Violation:** A vulnerability is in violation of an existing [remediation policy](admin-policymgmt.html#remediate).
* **Library Policy Violation:** A library is in violation of an existing [library policy](admin-policymgmt.html#library).

<a href="assets/images/AdminNotificationEmail.png" rel="lightbox" title="Admin Email Notification"><img class="thumbnail" src="assets/images/AdminNotificationEmail.png"/></a>

## Organizational Notifications

Organizational notifications alert users when key events occur with their Contrast deployment. Organization administrators can define default notification settings for all users in their organization by going to the **User menu > Organization Settings > Notifications tab**. 

> **Note:** Individual users can modify the default subscriptions that you set. For more information, go to the [account Notifications](user-account.html#user-notify) article.

### Default user settings 

Use the toggles in the **Integrations**, **In Contrast** and **Email** rows to enable or disable the following subscriptions. (Use the dropdown menu to see the [integrations](admin-orgintegrations.html) that are configured in your organization.)

* **Active Attack:** There is an active attack on an application with **Protect** enabled. 
* **New Vulnerability:** Contrast has detected a new vulnerability. Click in the field to enable notifications for specific severity levels or "Library"; the default selection is "All".
* **Server Offline:** Contrast can't reach a server. 
* **New Comment:** A team member commented on a finding. 
* **New Asset:** A new asset to which the user has [access](user-account.html#user-permissions) has been onboarded. Click in the field to set this notification for "Application" or "Server"; the default selection is "All".
* **Email Digest:** A daily summary of Contrast activities. (Email row only)

## Custom Notifications

Custom notifications allow users with Admin, Edit and Rules Admin [roles](admin-manageorgsroleperm.html#roles) in an organization to enable notifications for one or more users when a specific condition is observed in Contrast. These notifications execute and alert users by email at the time of the event, daily or weekly.  

### Create notifications

To create a custom notification, click the **Create Notification** button above the grid in the Custom Notifications panel. In the dialog that appears, fill out the following form fields. 

* Choose a **Name** for the notification. 
* Use the dropdown menu to set the notification **Interval** as "Daily", "Weekly" or "On Event".
* Enter a **Description** for the notification's purpose. 
* Click in the multiselect field to choose the **Applications** for which this notification applies. 
* Choose the **Application Tags** for which this notification applies. 
* Choose which organization **Users** should receive the notifications. 
* Use the dropdown menus to choose **Conditions**. Click the **Add Conditions** link to add rows. 

<a href="assets/images/CreateNotification.png" rel="lightbox" title="Creating A Custom Notification"><img class="thumbnail" src="assets/images/CreateNotification.png"/></a>

Contrast supports six conditions for custom notifications: Category, Impact, Likelihood, URL, Class and Method.

| Notification Types | Description       | Condition      |
|-----------------|-------------------|--------------|
| Category        | Categories are high-level groupings of rule types such as Authentication, Injection, Cryptography, etc. There are 11 categories within TeamServer Rule types.| Is or Is Not |
| Impact          | Impact is measured in High, Medium and Low ratings based on how a rule type affects a given business or organization. Every rule type has a default impact configuration setting which can be customized. | Is, Is Lower Than, Is Higher Than |
| Likelihood      | Likelihood is measured in High, Medium and Low ratings based on how frequent a rule type may occur. Every rule type has a default likelihood configuration setting which can be customized. | Is, Is Lower Than, Is Higher Than |
| URL             | A specific URL from an application. | Is, Contains, Starts With |
| Class           | A specific Java or .Net class. | Is, Contains, Starts With |
| Method          | A specific Java or .Net method. | Is, Contains, Starts With |

