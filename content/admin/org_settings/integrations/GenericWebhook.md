<!--
title: "Generic Webhook Integration"
description: "Integrating Generic Webhooks with Contrast"
tags: "Admin organization settings integrations generic webhook"
-->


Contrast supports generic webhook integration, which allows you to receive notifications on any URL that receives POST messages. The simple integration format includes an optional Payload field where you can include a `title` and `message`.

<a href="assets/images/Webhook-integration.png" rel="lightbox" title="Set up Webhook integration"><img class="thumbnail" src="assets/images/Webhook-integration.png"/></a>

## Setup

* Retrieve the URL to which you want Contrast to send notifications.
* Navigate to the **User menu > Organization Settings > Integrations** tab.
* In the row for Generic Webhook, click the button to **Connect**.
* Name the webhook, and paste the URL in the designated field.
* Select the application(s) that you want to filter.
* If you want to complete the Payload field, enter the `title` and `message`. Sample code:

```javascript
{
	'title':   'Contrast Security Notification',
	'message': 'Test User commented on a Insecure JSP Placement vulnerability in WebGoat. \"Fixed in CVE-2015\"'
}
```
You can also add placeholders in the payload so that Contrast will fill in for different notifications - a new application, server, vulnerability, etc. 

The placeholders available for use are:

* Title
* Message
* Application Name
* Vulnerability Tags
* Application ID
* Server Name
* Server ID
* Organization ID
* Severity
* Status
* Environment
* Vulnerability Rule
* Vulnerability ID
* Event Type

If you were using the Generic Webhook to create an integration, the sample payload could be as follows:

```json
{ 
    "Title ": "$Title",
    "Text": "$Message",
    "Application Name": "$ApplicationName",
    "Vulnerability Tags": "$VulnerabilityTags",
    "Application ID": "$ApplicationId",
    "Server Name": "$ServerName",
    "Server ID": "$ServerId",
    "Organization ID": "$OrganizationId",
    "Severity": "$Severity",
    "Status": "$Status",
    "Vulnerability ID": "$TraceId",
    "Vulnerability Rule": "$VulnerabilityRule",
    "Environment": "$Environment",
    "Event Type": "EventType"
}
```
 
Where Contrast data fills in the Title and Message fields for example, according to notifcation. Please note that the information that will return is based upon the information that can be attained, therefore, every alert will not return every piece of information even if listed in the payload. 

* Click **Save**.

You are connected!

