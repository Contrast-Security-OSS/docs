<!--
title: "Configuring The Contrast Maven Plugin"
description: "Instructions on configuring the Contrast Maven Plugin"
tags: "jenkins agent maven teamserver"
-->

Now that you have added the Contrast Maven plugin to your pom.xml we need to configure it to TeamServer.

Below is a table showing all the different parameters for the plugin:

## Maven Configuration Settings

These settings are for connecting to TeamServer and filtering your vulnerabilities.

| Parameter                    | Description                                             |
|------------------------------|---------------------------------------------------------|
| TeamServer Username          | This is the username/email for your user in TeamServer. |
| TeamServer Service Key       | Service Key found in Organization Settings.             |
| TeamServer Api Key           | Api Key found in Organization Settings.                 |
| TeamServer Api Url           | API Url to your TeamServer instance.                    |
| TeamServer Organization Uuid | Organization Uuid of the configured user found in Organization Settings. |
| Application Name             | Name of application you set with -Dcontrast.appname. <BR> This is used to filter for your application. |
| Minimum Severity Level       | Minimum Severity level to filter for. One of Note, Low, Medium, High, Critical. This property is inclusive. |
| Server Name                  | Name of server you set with -Dcontrast.server. <BR> Use app.contrastsecurity.com/Contrast/api if you are a SaaS customer. |
| Jar Path                     | Path of a local jar file if you don't want to download the agent again.                  |


**Note**: Even if your build succeeds, the plugin will fail the overall build if a bad condition is found.
