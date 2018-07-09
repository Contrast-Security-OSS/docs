<!--
title: "PII Masking for Java"
description: "About PII masking properties"
tags: "installation java agent configuration PII masking properties"
-->

## About PII Masking 

Some customers have sensitive information in their applications that the Java agent captures and sends to the Contrast application, also known as TeamServer. Consequently, this information is visible to anyone who has access to that organization in the Contrast application. This is undesirable as other users may view personally identifiable information (PII), including passwords, security keys and other sensitive data.

Contrast’s PII masking feature removes the sensitive information and replaces it with a masking key in the Contrast application, while still allowing the agent to provide protection. The feature handles three types of user input data: body, header and query parameter. Body PII masking is activated using a Boolean configuration property, and will mask all request bodies. Header and query parameter masking will only mask the value of the header or query parameter defined in the configuration property.

## Properties

The following properties control and define the masking. Property values are empty (null) by default. 

•	`contrast.report.body`: Currently exists for masking data in the body when set to `false`. Provided as a Boolean. Defaults to `true`.
•	`contrast.report.headers.mask`: Added to mask data found in the header values. Provided as a comma-separated string with spaces omitted. Defaults to `empty`, which means no masking.
•	`contrast.report.query.parameter.mask`: Added to mask data found in the query parameters. Provided as a comma-separated string. Defaults to `empty`, which means no masking.

## Masking Keys

The following string values are sent in place of sensitive information.

•	Body: {{body-omitted-by-contrast}}
•	Header: {{header-value-omitted-by-contrast}}
•	Parameter: {{query-parameter-value-omitted-by-contrast}}
•	Details: {{value-omitted-by-contrast}}
Most rules have details that contain additional rule-specific information. In some cases, these details have sensitive information that requires masking. Contrast will then use the given mask.
