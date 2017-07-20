<!--
title: "Generic Webhook Integration"
description: "Integrating Generic Webhooks with Contrast"
tags: "Admin organization settings integrations generic webhook"
-->


Contrast supports generic webhook integration, which allows you to receive notifications on any URL that receives POST messages. The simple integration format requires you to fill in fields for **Title** and **Message**.

Sample code:

```javascript
{
	'title':   'Contrast Security Notification',
	'message': 'Test User commented on a Insecure JSP Placement vulnerability in WebGoat. \"Fixed in CVE-2015\"'
}
```

## Setup

1. Retrieve the URL to which you want Contrast to send notifications.
2. Navigate to the **User menu > Organization Settings > Integrations** tab.
3. In the row for Generic Webhook, click the button to **Connect**.
4. Name the webhook and paste the URL in the designated field.
5. Select the application(s) that you want to filter.
6. Click **Save**.

You are connected!

