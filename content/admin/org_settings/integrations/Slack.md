<!--
title: "Slack Integration"
description: "Integrating Slack with Contrast"
tags: "Admin organization settings integrations slack"
-->

Contrast supports Slack integration! With this connection you can receive notifications from Contrast in your configured Slack instance using a format similar to in-app notifications.

## Setup

To add, go to your team's **Build** settings in Slack:

1. Add a new **Incoming Webhooks** custom integration
2. Choose the appropriate channel to which to send messages
3. Copy the **Webhook URL**

To connect in Contrast:

1. Navigate to the **Integrations** tab under **Organization Settings**
2. Click **Connect** within the Slack row
3. Name the integration and paste the URL
4. Select the application(s) for which you want to enable notifications
5. Click **Save**

You are connected!

To test the integration:

1. Navigate to the **Notifications** tab under **Organization Settings**
2. In the dropdown menu under **Integrations**, select the Slack integration name
3. For each **Subscription** (event type) you want to be notified of, click the toggle in the **Integrations** column
4. Cause an event type to occur, and confirm that you get a notification in the Slack channel you specified

