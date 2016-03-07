<!--
title: "Everything You Wanted to Know About Alerts"
description: "Overview of alerts within TeamServer" 
tags: "TeamServer alerts"
-->

## Creating Alerts
Alerts are managed within [organization settings](user_tsguideset.html#orgset). Users with the [role](user_tsguideset.html#roles) of organization administrator, editor or rules administrator may create and manage alerts. 

The main purpose of an alert is to provide notification to one or more users when a specific condition has been observed within TeamServer. Alerts execute and notify user via email on event, daily and weekly. 

<a href="assets/images/Create_Alert.png" rel="lightbox" title="Create Alerts"><img class="thumbnail" src="assets/images/Create_Alert.png"/></a>

To create an alert:

* Login to TeamServer.
* Select "Organization Settings" from the settings menu.
* Select "Alerts" from the Organization Settings menu.
* Select "Create an Alert"
* Provide the following input
	* Name
	* Interval: Daily, Weekly and On Event
	* Recipient(s): Email Address
	* Application Name (Option to Select All)
	* Types(s): Multiple conditions may be chosen

### Alert Types
TeamServer supports (6) conditions for alerts based on: Category, Impact, Likelihood, URL, Class and Method.

| Alert Types | Description       | Condition      |
|-----------------|-------------------|--------------|
| Category        | Categories are high-level groupings of rule types such as Authentication, Injection, Cryptography, etc. There are 11 categories within TeamServer Rule types.| Is or Is Not |
| Impact          | Impact is measured in high, medium and low ratings based on how a rule type affects a given business or organization. Every rule type has a default impact configuration setting which can be customized. | Is, Is Lower Than, Is Higher Than |
| Likelihood      | Likelihood is measured in high, medium and low ratings based on how frequent a rule type may occur. Every rule type has a default likelihood configuration setting which can be customized. | Is, Is Lower Than, Is Higher Than |
| URL             | A specific URL from an application. | Is, Contains, Starts With |
| Class           | A specific Java or .Net class. | Is, Contains, Starts With |
| Method          | A specific Java or .Net method. | Is, Contains, Starts With |


## Deleting and Disabling Alerts
Alerts can be deleted at any time by selecting the checkbox next to the alert name and choosing the "Delete" button. In addition, alerts can be deleted inline by selecting the gear at the end of the alert list table.

Alerts can be disabled from the alerts settings page by toggling the green button from enabled to disabled. 
