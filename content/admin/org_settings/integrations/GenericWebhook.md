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
* Enter a payload such as:

```javascript
{
	'title': $Title,
	'message': $Message
}
```
You can also add placeholders in the payload so that Contrast will fill in for different notifications - a new application, server, vulnerability, etc. 

The placeholders available for use that will always return a value:

* `$Title` - The title of the vulnerability
* `$Message` - A human-readable summary of the event.
* `$EventType` - The type of event which will be one of NEW_VULNERABILITY, NEW_ATTACK, ATTACK_UPDATE, NEW_ATTACK_APPLICATION, ATTACK_END, VULNERABILITY_CHANGESTATUS_OPEN, VULNERABILITY_CHANGESTATUS_CLOSED:, SERVER_OFFLINE, NEW_ASSET, EXPIRING_LICENSES, NEW_VULNERABILITY_COMMENT, ATTACK_EVENT_COMMENT.


The placeholders available for use that may not always return a value:

* `$ApplicationName` - The application involved in the event.
* `$ApplicationId` - The id of the application involved in the event.
* `$ApplicationCode` - The application code of the application involved in the event.
* `$ServerName` - The name of the server involved in the event. If more than one server was involved, this will be a comma-delimited list of server names.
* `$ServerId` - The id of the server involved in the event. If more than one server was involved, this will be a comma-delimited list of server ids.
* `$OrganizationId` - The id of your organization.
* `$Severity` - If this event was triggered by a vulnerability, this will be the severity of the vulnerability.
* `$Status` - If this event was triggered by a vulnerability, this will be the status of the vulnerability.
* `$Environment` - The environment of the event (Development, QA, Production).
* `$VulnerabilityRule`- If this event was triggered by a vulnerability, this will be the rule that the vulnerability violated.
* `$VulnerabilityTags` - If this event was triggered by a vulnerability, a comma-delimited list of tags associated with that vulnerability.
* `$TraceId`- If this event was triggered by a vulnerability, this will be the vulnerability id

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

Contrast will send your payload with one of two Content-Type headers:
* `application/json` if you payload looks like Json
* `application/x-www-form-urlencoded` if your payload does not look like Json

An example Json payload:

```json
{ 
    "Title ": "$Title"
}
```

And an example form encoded payload

```
title=$Title&id=$TraceId&tags=$VulnerabilityTags
```

