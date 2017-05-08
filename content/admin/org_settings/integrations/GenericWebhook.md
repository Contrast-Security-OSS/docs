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

* Retrieve the URL to which you want Contrast to send notifications
* Navigate to the **Integrations** tab under **Organization Settings**
* Click **Connect** within the Generic Webhook row
* Name the webhook and paste the URL into the input field
* Select the application(s) you wish to filter on
* Click **Save**

You are connected!

