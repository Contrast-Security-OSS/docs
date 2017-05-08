<!--
title: "Introduction To The Contrast REST API"
description: "Overview of the REST API"
tags: "Intro Open REST API v1 v2 v3 webhook"
-->

Contrast has a few API versions:
* Engine APIs (v1) 
* Application APIs (v2) 
* HATEOS-compliant REST API (v3) **Recommended**

>**NOTE:** We haven't officially deprecated v1 or v2, but strongly recommend using v3.

## Overview
The Contrast plugin allows you to collect nearly all the same information that is accessible through the Contrast UI. You can get vulnerability data, application, server and library information, download agents and much more.

The API is available to both **SaaS** and **Enterprise On-Premises** users. The [endpoint for SaaS users](https://app.contrastsecurity.com/Contrast/api) is the same for everyone, while for On-Premise users it will depend on where the TeamServer application is installed on the client's network.

Our goal is to make sure Contrast offers data to allow complete integration into your existing Continuous Integration (CI), SIEM software, or other business intelligence dashboards. We're always adding more endpoints, but if you'd like to see something added to the API, [file a ticket](https://support.contrastsecurity.com/tickets/new) and let's talk about it! 

>**Note:** The set of APIs is subject to change at any time, uses different keys, and in general is more about writing data to your Contrast account.

## Open API Documentation
All of Contrast's public API endpoints can be viewed [online](https://api.contrastsecurity.com/). We’ve provided open API documentation that provides resources in understanding how to use the endpoints and help you along with authenticating, navigating, collecting data and taking actions on TeamServer programmatically. This guidance is built continuously and stays current with our latest SaaS release. The same documentation can also be found embedded in the Contrast UI for both SaaS and EOP customers. Simply authenticate with an administrator account in Contrast, select **Settings**, then select **API**. 

## Using the Documentation
Endpoints and the related objects used by the endpoints are listed under “API” and “Objects”. “Flow” provides a list of sample use cases and the information of their sequence of endpoints that need be called to accomplish them.

The documentation also includes a playground to test your endpoint interactions. This is a handy tool to quickly learn how to use the endpoints through experience. The documentation is comprehensive, as it includes endpoints for v1, v2 and v3 API endpoints.

