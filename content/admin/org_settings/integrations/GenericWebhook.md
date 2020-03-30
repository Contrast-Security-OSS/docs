<!--
title: "Generic Webhook Integration"
description: "Integrating Generic Webhooks with Contrast"
tags: "Admin organization settings integrations generic webhook"
-->


Contrast supports generic webhook integration, which allows you to receive notifications on any URL that receives POST messages. The simple integration format includes an optional Payload field where you can include a `title`, `message`, and other fields.

<a href="assets/images/Webhook-integration.png" rel="lightbox" title="Set up Webhook integration"><img class="thumbnail" src="assets/images/Webhook-integration.png"/></a>

## Setup

* Retrieve the URL to which you want Contrast to send notifications.
* Navigate to the **User menu > Organization Settings > Integrations** tab.
* In the row for Generic Webhook, click the button to **Connect**.
* Name the webhook, and paste the URL in the designated field.
* Select the application(s) that you want to filter.
* Enter a payload, such as:

```javascript
{
	'title': $Title,
	'message': $Message
}
```
You can also add placeholders in the payload so that Contrast will fill in for different notifications, such as a new application, server, or vulnerability.

The placeholders available for use that will always return a value:

* `$Title` - The title of the vulnerability.
* `$Message` - A human-readable summary of the event.
* `$EventType` - One of the following types of events: NEW_VULNERABILITY, NEW_ATTACK, ATTACK_UPDATE, NEW_ATTACK_APPLICATION, ATTACK_END, VULNERABILITY_CHANGESTATUS_OPEN, VULNERABILITY_CHANGESTATUS_CLOSED, SERVER_OFFLINE, NEW_ASSET, EXPIRING_LICENSES, NEW_VULNERABILITY_COMMENT, ATTACK_EVENT_COMMENT.

The placeholders available for use that may not always return a value:

* `$ApplicationName` - The application involved in the event.
* `$ApplicationId` - The ID of the application involved in the event.
* `$ApplicationCode` - The application code of the application involved in the event.
* `$ServerName` - The name of the server involved in the event. If more than one server is involved, this is a comma-delimited list of server names.
* `$ServerId` - The ID of the server involved in the event. If more than one server is involved, this is a comma-delimited list of server IDs.
* `$OrganizationId` - The ID of your organization.
* `$Severity` - If this event is triggered by a vulnerability, this is the severity of the vulnerability.
* `$Status` - If this event is triggered by a vulnerability, this is the status of the vulnerability.
* `$Environment` - The environment of the event (Development, QA, Production).
* `$VulnerabilityRule`- If this event is triggered by a vulnerability, this is the rule that the vulnerability violated.
* `$VulnerabilityTags` - If this event is triggered by a vulnerability, this is a comma-delimited list of tags associated with the vulnerability.
* `$TraceId`- If this event is triggered by a vulnerability, this is the vulnerability ID.

An example featuring all available fields:

```json
{ 
    "Title ": "$Title",
    "Text": "$Message",
    "Application Name": "$ApplicationName",
    "Application Code": "$ApplicationCode",
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
    "Event Type": "$EventType"
}
```
 
* Click **Save**.

You are connected!

## Content Types

Contrast sends the payload with one of two Content-Type headers:
* `application/json` if the payload looks like JSON
* `application/x-www-form-urlencoded` if the payload does not look like JSON

An example JSON payload:

```json
{ 
    "Title ": "$Title"
}
```

An example form-encoded payload:

```
title=$Title&id=$TraceId&tags=$VulnerabilityTags
```

