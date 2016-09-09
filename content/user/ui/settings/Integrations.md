<!--
title: "Integrations"
description: "Adding Integrations to TeamServer"
tags: "integrations hipchat generic slack webhook teamserver"
-->

## Slack Integration

TeamServer supports Slack integration! With this new connection you can receive notifications from TeamServer in your configured Slack instance using a format similar to in-app notifications.

### Setup

To add, go to your team's **Build** settings in Slack:

* Add a new **Incoming Webhooks** custom integration
* Choose the appropriate channel to send messages to
* Copy the **Webhook URL**

To connect in TeamServer:

* Navigate to the **Integrations** tab under **Organization Settings**
* Click **Connect** within the Slack row
* Name the integration and paste the URL
* Select the application(s) you wish to filter on
* Click **Save**

You are connected!

---

## HipChat Integration

TeamServer supports integration with HipChat as well! With this new connection you can receive notifications from TeamServer in your configured HipChat channel using a format similar to in-app notifications.

### Setup

On the HipChat website, log in as a user with at least **Send Notification** and **View Room** scopse. Typically this is an admin user.

* Edit your profile and click **API access**
* Create a new token and add at least the **Send Notification** and **View Room** scope
* Copy the token created

To connect in TeamServer:

* Navigate to the **Integrations** tab under **Organization Settings**
* Click **Connect** within the HipChat row
* Name the integration, paste the token into the token input field, and select the appropriate room from the dropdown
* Select the application(s) you wish to filter on
* Click **Save**

You are connected!

---

## Generic Webhook Integration

TeamServer also supports a generic webook integration. Generic webhooks allow you to receive notification on any URL that receives POST messages. We currently support a basic format with the fields 'title' and 'message'.

### Example

```javascript
{
	'title':   'Contrast Security Notification',
	'message': 'Test User commented on a Insecure JSP Placement vulnerability in WebGoat. \"Fixed in CVE-2015\"'
}
```

### Setup

* Retrieve the URL you want TeamServer to send notifications to
* Navigate to the **Integrations** tab under **Organization Settings**
* Click **Connect** within the Generic Webhook row
* Name the webhook and paste the URL into the input field
* Select the application(s) you wish to filter on
* Click **Save**

You are connected!
