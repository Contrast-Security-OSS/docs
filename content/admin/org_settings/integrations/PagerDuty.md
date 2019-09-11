<!--
title: "PagerDuty Integration"
description: "Integrating PagerDuty with Contrast"
tags: "Admin organization settings integrations pagerduty"
-->

Set up an integration with with PagerDuty incident management to receive attack notifications from Contrast.

## Setup

In the **Integrations** page, click **Connect** in the PagerDuty row. In the **PagerDuty Connection** page, complete the following fields.

<a href="assets/images/PagerDuty-integration-setup.png" rel="lightbox" title="Set up your PagerDuty integration"><img class="thumbnail" src="assets/images/PagerDuty-integration-setup.png"/></a>

* **Name:** The name for the integration entry, which is displayed in notifications from Contrast.
* **Message Severity:** Use the dropdown menu to choose the behavior of the alert. The default selection is "Critical". For more information about message severity, see the [PagerDuty documentation on event/severity levels](https://support.pagerduty.com/docs/dynamic-notifications).
* **Integration Key: ** From the PagerDuty's Configuration Menu, select Services.
    * If you are creating a new service for your integration, add **+Add New Service**.
    * If you are adding your integration to an existing service, click the name of the service you want to add the integration to. Then click the Integrations tab and click the **+New Integration** button.
    * Select your app from the **Integration Type** menu and enter an **Integration Name** If you are creating a new service for your integration, in General Settings, enter a **Name** for your new service. Then, in **Incident Settings**, specify the **Escalation Policy**, **Notification Urgency**, and **Incident Behavior** for your new service.
    * Click the **Add Service** or **Add Integration** button to save your new integration. You will be redirected to the Integrations page for your service.
    * Copy the Integration Key for your new integration.
* **Applications:**  Select which applications in your portfolio for which you would like to have Contrast automatically generate an incident within PagerDuty. The default selection is "All Applications".

Once you complete the fields, click **Test Connection**. This process may take a few minutes, depending on the number of your PagerDuty projects. The test verifies that Contrast can reach the PagerDuty instance and that a message can be sent.

Go to the Notifications subpage in Contrast:

* For the integration (vertical column of toggle buttons) you just created (you can identify it by the **Integration Name** you set in the previous steps.
* Select a set of Active Attacks to be notified about in PagerDuty.
* Select a set of New Vulnerabilities to be notified about in PagerDuty.
* Select whether to receive notifications on
    * Server Offline
    * New Comment
    * Select a set of New Assets to be notified about in PagerDuty.
    * Select whether to be notified about applications Nearing Expiration.

Configuration settings will be automatically applied. No need to save.
Congratulations, you have completed the set up of the Contrast-PagerDuty Integration!