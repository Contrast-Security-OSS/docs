<!--
title: "Generic Webhook Integration"
description: "Integrating Generic Webhooks with Contrast"
tags: "Admin organization settings integrations generic webhook"
-->


Contrast supports a generic webhook integration. Generic webhooks allow you to receive notifications on any URL that receives POST messages. We currently support a basic format with the fields 'title' and 'message'.

## Example

```javascript
{
	'title':   'Contrast Security Notification',
	'message': 'Test User commented on a Insecure JSP Placement vulnerability in WebGoat. \"Fixed in CVE-2015\"'
}
```

## Setup

1. Retrieve the URL to which you want Contrast to send notifications
2. Navigate to the **Integrations** tab under **Organization Settings**
3. Click **Connect** within the Generic Webhook row
4. Name the webhook and paste the URL into the input field
5. Select the application(s) you wish to filter on
6. Click **Save**

You are connected!

