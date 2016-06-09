<!--
title: "Configuring The Contrast Jenkins Plugin"
description: "Instructions on configuring the Contrast Jenkins Plugin"
tags: "jenkins agent maven teamserver"
-->

Now that you have installed the Contrast Jenkins plugin we need to configure it to TeamServer.

To do so, go the `Configure Settings` Page under `Manage Jenkins`. Here you will a new Contrast TeamServer profiles section.

## TeamServer Configuration Settings

| Parameter              | Description                                             |
|------------------------|---------------------------------------------------------|
| TeamServer Server Name | Name of server you set with -Dcontrast.server. <BR> Use app.contrastsecurity.com/Contrast/api if you are a SaaS customer. |
| TeamServer Username    | This is the username/email for your user in TeamServer. |
| TeamServer Service Key | Service Key found in Organization Settings              |
| TeamServer Api Key     | Api Key found in Organization Settings                  |
| TeamServer Api Url     | API Url to your TeamServer instance                     |

## Threshold Condition Settings

| Parameter                    | Description                                                             |
|------------------------------|-------------------------------------------------------------------------|
| TeamServer Organization Uuid | Organization Uuid of the configured user found in Organization Settings |
| TeamServer Application Name  | Name of application you are configuring to test thresholds with. <BR> **Note**: This name must be unique. We only check for the first application returned.      |
