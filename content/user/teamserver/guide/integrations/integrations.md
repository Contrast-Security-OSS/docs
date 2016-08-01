<!--
title: "Integrations"
description: "Adding Integrations to TeamServer"
tags: "integrations hipchat generic slack webhook teamserver"
-->

## Slack Integration

TeamServer now supports Slack integration! With this new connection you can receive notifications from TeamServer to your configured Slack instance in a similar format to in-app notifications.

## Setup

To add, go to your teams 'Build' settings in Slack:

1. Add a new 'Incoming Webhooks' custom integration.
2. Choose an appropriate channel to send messages to.
3. Copy the 'Webhook URL'.

To add in TeamServer:

1. Go to the new 'Integrations' tab in Organization Settings.
2. Click 'Connect' in the Slack row.
3. Name the integration and paste the URL.
4. Select the appropriate application(s) to filter on.
5. Click save.

You are now connected!

## HipChat Integration

TeamServer now supports HipChat integration! With this new connection you can receive notifications from TeamServer to your configured HipChat in a similar format to in-app notifications.

## Setup

In the HipChat website, login as a user with at least 'Send Notification' scope. Typically this is an admin user.

1. Edit your profile and click 'API access'.
2. Create a new token and add at least the 'Send Notification' scope.
3. Copy the token created.

To add in TeamServer:

1. Go to the new 'Integrations' tab in Organization Settings.
2. Click 'Connect' in the HipChat row.
3. Name the integration, paste the token into the token input, and select the appropriate room from the dropdown.
4. Select the appropriate application(s) to filter on.
5. Click save.

You are now connected!

## Generic Webhook Integration

TeamServer now supports a generic webook integration! Generic webhooks allow you to receive basic notification on any URL that receives POST messages. We currently support a basic format with fields 'title' and 'message'.

## Example:

```javascript
{
	'title':   'Contrast Security Notification',
	'message': 'Test User commented on a Insecure JSP Placement vulnerability in WebGoat. \"Fixed in CVE-2015\"'
}
```

## Setup

1. Retrieve the URL you want TeamServer to send notification messages to.
2. Go to the new 'Integrations' tab in Organization Settings.
3. Click 'Connect' in the Generic Webhook row.
4. Name the webhook and paste the URL into the input.
5. Select the appropriate application(s) to filter on.
6. Click save.

You are now connected!
