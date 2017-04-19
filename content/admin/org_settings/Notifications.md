<!--
title: "Notifications"
description: "Overview of notifications within TeamServer" 
tags: "Admin settings TeamServer alerts notifications custom"
-->

Notifications provide a mechanism for Contrast users to be alerted in specific cases, such as the discovery of a vulnerability or an application being attacked. Contrast offers several out-of-the-box notifications which we believe to be essential for any customer implementation. Organization administrators can set the default notification settings for all users in their organization. Individual users can tailor those notification settings as needed. 

There are two primary channels available for notifications: E-mail and In-Application. 

* **E-mail notifications** require Contrast be configured to communicate with an appropriate [SMTP system](admin_systemsettings.html#dbmail). * **In-Application notifications** are made available directly in the product and are visible by selecting the Notification bell in the top menu bar.

## Administrative Notifications
Administrators will receive automated notifications for certain high-level events in Contrast, including those pertaining to licensing and policy management. Such notifications will occur both in-app and via email.

* **Application Licensed** - A new application was licensed in Contrast
* **Application License Expiring** - The license for an active application is expiring (sent at two months, one month and one week prior to the expiration date)
* **Licenses Expiring** - Existing license(s) with no associated applications is expiring (sent at two months, one month and one week prior to the expiration date)
* **Remediation Policy Violation** - A vulnerability is in violation of a set remediation policy
* **Library Policy Violation** - A library is in violation of a set library policy

<a href="assets/images/AdminNotificationInApp.png" rel="lightbox" title="In-App Admin Notification"><img class="thumbnail" src="assets/images/AdminNotificationInApp.png"/></a>

<a href="assets/images/AdminNotificationEmail.png" rel="lightbox" title="Admin Email Notification"><img class="thumbnail" src="assets/images/AdminNotificationEmail.png"/></a>

## Organizational Notifications
Organizational notifications provide organization administrators with an interface for notifying users when key events happen with their Contrast deployment. Organization administrators have the ability to define default values for all users within their organization in terms of what criteria to notify by default, as well as which channels to leverage. Individual users have the ability to modify the default subscriptions. To change an individual user's notification settings, do the following:

* Log in to Contrast
* Select **Your Account** from the user menu in the upper right
* Select **Notifications** in the left navigation
* Change one or more values

Below is a list of available subscription options:

* New Vulnerability: All or by severity (Low, Medium, High, Critical, Note, Library)
* Server Goes Offline
* New Comment
* New Asset Onboarded: All, Application or Server
* Email Digest: Daily summary of Contrast activities 

Customers who have implemented Protection licensing will also see:

* New Attacks: All or by attack status (Probed, Exploited or Protected)

>**Note:** You can narrow or expand the notifications you receive by adjusting which applications your subscriptions apply to. 

## Custom Notifications
Custom notifications allow users with Admin, Edit and Rules Admin [roles](admin_manageorgsroleperm.html#roles) for the organization to provide notifications to one or more users when a specific condition has been observed within Contrast. These defined notifications execute and alert users via email on event, daily and weekly.  

<a href="assets/images/CreateNotification.png" rel="lightbox" title="Creating A Custom Notification"><img class="thumbnail" src="assets/images/CreateNotification.png"/></a>

To create a custom notification:

* Log in to Contrast
* Select **Organization Settings** from the user menu in the upper right
* Select **Notifications** from the left navigation
* Click **Create Notification** in the Custom Notifications panel
* Provide the following input:
	* Name
	* Interval: Daily, Weekly or On Event
	* Recipient(s): Email Address
	* Application Name (Option to Select All)
	* Type(s): Multiple conditions may be chosen

### Custom Notification Types
Contrast supports (6) conditions for custom notifications based on: Category, Impact, Likelihood, URL, Class and Method.

| Notification Types | Description       | Condition      |
|-----------------|-------------------|--------------|
| Category        | Categories are high-level groupings of rule types such as Authentication, Injection, Cryptography, etc. There are 11 categories within TeamServer Rule types.| Is or Is Not |
| Impact          | Impact is measured in High, Medium and Low ratings based on how a rule type affects a given business or organization. Every rule type has a default impact configuration setting which can be customized. | Is, Is Lower Than, Is Higher Than |
| Likelihood      | Likelihood is measured in High, Medium and Low ratings based on how frequent a rule type may occur. Every rule type has a default likelihood configuration setting which can be customized. | Is, Is Lower Than, Is Higher Than |
| URL             | A specific URL from an application. | Is, Contains, Starts With |
| Class           | A specific Java or .Net class. | Is, Contains, Starts With |
| Method          | A specific Java or .Net method. | Is, Contains, Starts With |

