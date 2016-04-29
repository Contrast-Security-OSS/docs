<!--
title: "Everything You Need to Know About Notifications"
description: "Overview of notifications within TeamServer" 
tags: "TeamServer alerts notifications custom"
-->

## About Notifications
Prior to release 3.2.6 (April 2016), TeamServer had a rule engine which would trigger emails when a particular condition was achieved, called **Alerts**. The rule engine still exists, but now rules created by administrators are called **Custom Notifications**. TeamServer not only provides custom notification, but several out-of-the-box notifications which we believe to be essential for any customer implementing an IAST and/or RASP solution. Notifications are a new form of rule-based communication for particular events and/or activities that occur within TeamServer or associated connected Agents. 

Notifications are designed to provide feedback immediately, as well as daily through multiple channels. There are two primary channels available for notifications: E-mail and In-Application. E-mail notifications require TeamServer to be configured to communicate with an appropriate [SMTP system](admin_tsconfig.html#system). In-Application notifications are made available directly in the product and are visible by selecting the Notification bell in the top menu bar.

### Organizational Notifications
Introduced in 3.2.6 (April 2016), organizational notifications provide organization administrators with an interface for notifying users when key events happen with their Contrast deployment. Organization administrators have the ability to define default values for all users within their organization in terms of what criteria to notify by default, as well as which channels to leverage. Individual users have the ability to modify the default subscriptions. To change an individual user's notification settings, do the following:

* Log in as the user
* From the **Settings** drop-down menu, select **My Account**
* Select **Notifications**
* Change one or more values

Below is a list of available subscription options:

* New Vulnerability: All or by severity (Low, Medium, High, Critical, Note, Library)
* Server Goes Offline
* New Comment
* New Asset Onboarded: All, Application or Server

Customers who have implemented RASP licensing will also see:

* New Attacks: All or by attack status (Probed, Exploited or Protected)

### Custom Notifications
Custom notifications as mentioned above is the feature formerly called Alerts. Users with Admin, Edit and Rules_Admin roles for the organization can create custom notifications using the steps below.

## Creating Custom Notifications
Custom notifications are managed within [Organization Settings](user_tsguideset.html#orgset). Users with the [role](user_tsguideset.html#roles) of organization administrator, editor or rules administrator may create and manage custom notifications. 

The main purpose of a custom notification is to provide notification to one or more users when a specific condition has been observed within TeamServer. Notifications execute and alert users via email on event, daily and weekly. 

<a href="assets/images/Create_Alert.png" rel="lightbox" title="Create Alerts"><img class="thumbnail" src="assets/images/Create_Alert.png"/></a>

To create a custom notification:

* Log in to TeamServer
* Select **Organization Settings** from the **Settings** menu
* Select **Notifications** from the **Organization Settings** menu
* Select **Create Notification**
* Provide the following input:
	* Name
	* Interval: Daily, Weekly or On Event
	* Recipient(s): Email Address
	* Application Name (Option to Select All)
	* Type(s): Multiple conditions may be chosen

### Custom Notification Types
TeamServer supports (6) conditions for custom notifications based on: Category, Impact, Likelihood, URL, Class and Method.

| Notification Types | Description       | Condition      |
|-----------------|-------------------|--------------|
| Category        | Categories are high-level groupings of rule types such as Authentication, Injection, Cryptography, etc. There are 11 categories within TeamServer Rule types.| Is or Is Not |
| Impact          | Impact is measured in High, Medium and Low ratings based on how a rule type affects a given business or organization. Every rule type has a default impact configuration setting which can be customized. | Is, Is Lower Than, Is Higher Than |
| Likelihood      | Likelihood is measured in High, Medium and Low ratings based on how frequent a rule type may occur. Every rule type has a default likelihood configuration setting which can be customized. | Is, Is Lower Than, Is Higher Than |
| URL             | A specific URL from an application. | Is, Contains, Starts With |
| Class           | A specific Java or .Net class. | Is, Contains, Starts With |
| Method          | A specific Java or .Net method. | Is, Contains, Starts With |


## Deleting And Disabling Custom Notifications
Alerts can be deleted at any time by selecting the checkbox next to the notification name and choosing the **Delete** button. In addition, custom notifications can be deleted inline by selecting the gear at the end of the notification list table.

Custom notifications can be disabled from the **Notifications** settings page by toggling the green switch from Enabled to Disabled. 
