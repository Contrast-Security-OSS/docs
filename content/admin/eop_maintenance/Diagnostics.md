<!--
title: "Diagnostics"
description: "Information and guidance on diagnostics for your organization"
tags: "Admin eop diagnostics super administration"
-->

Contrast Diagnostics measures customer usage of Contrast products to help Contrast provide faster, more proactive support and guide delivery of new functionality.	

## How It Works

Contrast periodically sends snapshots of relevant data elements and data aggregations up to Contrast Diagnostics, a service on Contrast’s Software as a Service (SaaS) platform. Data that could be used to identify a customer or organization is obscured using a one-way hash, and is encrypted both in transit and at rest. Due to privacy concerns, the data doesn’t include application names, personally identifying information, code, vulnerability identities or customer network identifiers. 

### Data collection

As Contrast securely transmits the data over an encrypted connection to the Contrast Diagnostics service, the data is anonymized and not attributable to any particular Contrast installation. The data is then stored in the Contrast Diagnostics database, where it’s made available to approved Contrast Support and Product Development users for analysis and reporting. Within the database, the data is attributed to customers to provide Customer Support insight into how to better assist Contrast customers.

## Why It Works

Diagnostics helps Contrast provide proactive support to customers through technical assistance and expert guidance in three main areas. 

* Customer Support will analyze the data sent back to Contrast for markers, which can indicate potential issues, and allow Customer Support to reach out proactively and work with you to prevent problems. 

* Contrast can use the collected data  to quickly diagnose existing problems and reduce the cycle time for successfully resolving support cases.

* Insight into deployment and usage helps Contrast product development teams to adjust and deliver new functionality to help customers get the most out of their Contrast deployment.

## Settings 

SuperAdmins can enable and disable the Contrast Diagnostics feature through the SuperAdmin dashboard. SuperAdmins may also use the Contrast REST API to preview the data that will be transmitted to Contrast Diagnostics. You can find information about how to use the REST API in Contrast’s [API documentation](tools-api.html#api-about).

To view the Diagnostics setting in the Contrast interface, go to the **user menu > System Settings > General Settings > Internet Settings section**. Diagnostics is enabled by default; however, you can use the toggle to disable and re-enable it as needed. 

<a href="assets/images/Diagnostics-toggle.png" rel="lightbox" title="Use the toggle to enable Diagnostics"><img class="thumbnail" src="assets/images/Diagnostics-toggle.png"/></a>

>**Note:** Your proxy settings apply to your [Hub](admin-eopcredentials.html#overview) and Diagnostics settings.

