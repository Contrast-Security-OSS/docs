<!--
title: "Introduction To The Contrast REST API"
description: "Overview of the REST API"
tags: "Intro Open REST API v1 v2 v3 webhook"
-->

Contrast has a few API versions:
* Engine APIs (version 1) 
* Application APIs (version 2) 
* HATEOS-compliant REST API (version 3) **Recommended**

>**Note:** Contrast hasn't officially deprecated version 1 or version 2, but strongly recommends using version 3.

## Overview

The Contrast plugin allows you to collect nearly all the same information that is accessible through the Contrast interface - download agents, get vulnerability, application, server and library information, and much more. Contrast's goal is to give you the right data to allow complete integration into your existing Continuous Integration (CI), SIEM software, or other business intelligence dashboards.

The API is available to both **SaaS** and **Enterprise-on-Premises** (EOP) users. The [endpoint for SaaS users](https://app.contrastsecurity.com/Contrast/api) is the same for everyone; for EOP users, it depends on where the Contrast application is installed on the client's network.

We're always adding more endpoints, but if you'd like to see something added to the API, [file a ticket](https://support.contrastsecurity.com/tickets/new) and let's talk about it! 

>**Note:** The set of APIs is subject to change at any time and use different keys to write data to your Contrast account.

## Open API Documentation

Contrast provides open API documentation that includes resources for understanding how to use the endpoints and help with authenticating, navigating, collecting data and taking actions on Contrast programmatically. This guidance is built continuously and stays current with our latest SaaS release. You can view all of Contrast's public API endpoints online at the [Contrast API page](https://api.contrastsecurity.com/) and the Contrast interface.

### Use the Documentation

Go to the **API** and **Objects** sections to see a list of endpoints and related objects used by the endpoints. The **Flow** section provides a list of sample use cases and information on their sequence of endpoints that must be called to accomplish them. The documentation also includes a playground to test your endpoint interactions with version 1, version 2 and version 3 API endpoints. This is a handy tool to quickly learn how to use the endpoints through experience. 

To access the API documentation in the Contrast interface, authenticate with an administrator account in Contrast, go to the ** User menu > Organization Settings > API tab**, and click the button to **Launch Documentation**. Unlike the static Contrast API page, this version executes API requests against a real server. 





