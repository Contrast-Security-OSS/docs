<!--
title: "Integrations"
description: "Adding Integrations to TeamServer"
tags: "integrations hipchat generic slack webhook teamserver"
-->

## Slack Integration

TeamServer supports Slack integration! With this new connection you can receive notifications from TeamServer to your configured Slack instance in a similar format to in-app notifications.

## Setup

To add, go to your teams 'Build' settings in Slack:

* Add a new 'Incoming Webhooks' custom integration.
* Choose an appropriate channel to send messages to.
* Copy the 'Webhook URL'.

To add in TeamServer:

* Go to the new 'Integrations' tab in Organization Settings.
* Click 'Connect' in the Slack row.
* Name the integration and paste the URL.
* Select the appropriate application(s) to filter on.
* Click save.

You are connected!

## HipChat Integration

TeamServer supports HipChat integration! With this new connection you can receive notifications from TeamServer to your configured HipChat in a similar format to in-app notifications.

## Setup

In the HipChat website, login as a user with at least 'Send Notification' scope. Typically this is an admin user.

* Edit your profile and click 'API access'.
* Create a new token and add at least the 'Send Notification' scope.
* Copy the token created.

To add in TeamServer:

* Go to the new 'Integrations' tab in Organization Settings.
* Click 'Connect' in the HipChat row.
* Name the integration, paste the token into the token input, and select the appropriate room from the dropdown.
* Select the appropriate application(s) to filter on.
* Click save.

You are connected!

## Generic Webhook Integration

TeamServer supports a generic webook integration! Generic webhooks allow you to receive basic notification on any URL that receives POST messages. We currently support a basic format with fields 'title' and 'message'.

## Example:

```javascript
{
	'title':   'Contrast Security Notification',
	'message': 'Test User commented on a Insecure JSP Placement vulnerability in WebGoat. \"Fixed in CVE-2015\"'
}
```

## Setup

* Retrieve the URL you want TeamServer to send notification messages to.
* Go to the new 'Integrations' tab in Organization Settings.
* Click 'Connect' in the Generic Webhook row.
* Name the webhook and paste the URL into the input.
* Select the appropriate application(s) to filter on.
* Click save.

You are connected!
