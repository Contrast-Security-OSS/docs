<!--
title: "PagerDuty Integration"
description: "Integrating PagerDuty with Contrast"
tags: "Admin organization settings integrations pagerduty"
-->

Set up an integration with with PagerDuty incident management to receive attack notifications from Contrast.

## Setup

In the **Integrations** page, click **Connect** in the PagerDuty row. In the **PagerDuty Connection** page, complete the following fields.

<a href="assets/images/Pagerduty-connect.png" rel="lightbox" title="Set up your PagerDuty integration"><img class="thumbnail" src="assets/images/Pagerduty-connect.png"/></a>

* **Name:** Enter the name for the integration entry, which is displayed in notifications from Contrast.
* **Message Severity:** Use the dropdown menu to choose the behavior of the alert. The default selection is "Critical". For more information about message severity, see the [PagerDuty documentation on severity levels](https://support.pagerduty.com/docs/dynamic-notifications).
* **Integration Key:** To find your integration key to enter in this field, follow the steps in the [PagerDuty documentation for services and integrations](https://support.pagerduty.com/docs/services-and-integrations). 
* **Applications:** Select the applications in your portfolio for which you want Contrast to automatically generate an incident within PagerDuty. The default selection is "All Applications".

Once you complete all of the fields, click **Test Connection**. This process may take a few minutes, depending on the number of your PagerDuty projects. The test verifies that Contrast can reach the PagerDuty instance and that a message can be sent.

## Learn More

To learn how to manage notifications from your PagerDuty integration, go to the organization [Notifications](admin-orgsettings.html#org-notify) article. 
