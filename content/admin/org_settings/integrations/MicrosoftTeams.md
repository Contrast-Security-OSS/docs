<!--
title: "MicrosoftTeams Integration"
description: "Integrating MicrosoftTeams with Contrast"
tags: "Admin organization settings integrations microsoftTeams"
-->

Use Contrast's Microsoft Teams integration to receive notifications from Contrast in your configured Microsoft Teams instance.

## Setup

### Microsoft Teams

To add the Contrast integration, go to your team in your Microsoft Teams account, and complete the following steps.

* Choose the appropriate channel to which to send messages, click on the three dots to the right of the channel name, and select **Connectors** from the menu. 
* In the **Incoming Webhook** row, select **Configure**.
* Select a name for the Incoming Webhook, and select **Create**. 
* Copy the **Webhook URL**. (You'll use this to set up the integration in the Contrast UI.) 

### Contrast

To connect to your Microsoft Teams instance in Contrast, complete the following steps.

<a href="assets/images/Microsoft-teams-connection.png" rel="lightbox" title="Configure a new Microsoft Teams integration for your Contrast organization"><img class="thumbnail" src="assets/images/Microsoft-teams-connection.png"/></a>

* Go to the **user menu > Organization Settings > Integrations tab**. 
* In the Microsoft Teams row, click the button to **Connect**. 
* Enter a name for the integration.
* Paste the Webhook URL copied from your Microsoft Teams account.
* Select the application(s) for which you want to enable notifications.
* Click **Save**.

You are connected!
