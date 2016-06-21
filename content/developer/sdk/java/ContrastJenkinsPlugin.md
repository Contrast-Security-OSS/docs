<!--
title: "Contrast Jenkins Plugin"
description: "Sample Jenkins plugin using the Contrast Java SDK"
tags: "Jenkins SDK Integration Java"
-->

## About the Contrast Jenkins Plugin

The Contrast Jenkins Plugin is used to integrate Contrast with your Jenkins CI instance. It can be used to test your connection to TeamServer and verifying your build with threshold conditions.

[Jenkins](https://jenkins.io/) is a Continuous Integration application that can be used to build, deploy, and run applications.

## Access to the Plugin

The plugin code can be viewed in our Github [repository](https://github.com/Contrast-Security-OSS/contrast-jenkins-plugin). 

<!-- The plugin can be found here on the Jenkins repository. -->

## How to Use the Plugin

To do so, go the `Configure Settings` Page under `Manage Jenkins`. Here you will a new Contrast TeamServer profiles section.

## TeamServer Configuration Settings

These settings are for connecting to TeamServer. The plugin leverages these to authentication to TeamServer and make API calls.

| Parameter                   | Description                                             |
|-----------------------------|---------------------------------------------------------|
| TeamServer Server Name      | Name of server you set with -Dcontrast.server. <BR> Use app.contrastsecurity.com/Contrast/api if you are a SaaS customer. |
| TeamServer Username         | This is the username/email for your user in TeamServer. |
| TeamServer Service Key      | Service Key found in Organization Settings.             |
| TeamServer Api Key          | Api Key found in Organization Settings.                 |
| TeamServer Api Url          | API Url to your TeamServer instance.                    |

### Testing the TeamServer connection

When adding a TeamServer profile, a validation button is present to test your connection. Use this to make sure all your fields are accurate!
It will prompt you if it success or give an error message if it fails.

## Threshold Condition Settings

These settings are for filtering trace results in order to verify conditions configured in the post build action.

| Parameter                    | Description                                                              |
|------------------------------|--------------------------------------------------------------------------|
| TeamServer Organization Uuid | Organization Uuid of the configured user found in Organization Settings. |
| TeamServer Application Name  | Name of application you set with -Dcontrast.appname. <BR> This is used to filter for your application in Jenkins. |

### How threshold conditions work in Post Build Action:

* Add a count. The count is exclusive so if you set a count for 5, it will fail on 6 or more vulnerabilities. This field is required.
* Add a severity. The severity is one of Note, Low, Medium, High, or Critical. The plugin sets a filter in the API call for all vulnerabilities greater than or equal to this field.
* Add a vulnerability type. The type is the name of a rule. Here you can specify a single rule to filter for. The plugin checks for the number of vulnerabilities with the rule type and compares it to the count.

Severity and vulnerability type are not required but suggested to narrow down your results.

You can add as many rules as you like. The plugin fails on the **first** bad condition in order. The plugin will tell you which condition it fails on.

**Note**: Even if your build succeeds, the plugin will fail the overall build if a bad condition is found.

### Example images:

Below is an example TeamServer Profile configuration for the Contrast Jenkins Plugin:

<a href="assets/images/Jenkins_ts_profile.png" rel="lightbox" title="Create TeamServer Profile"><img class="thumbnail" src="assets/images/Jenkins_ts_profile.png"/></a>

Below is an example Threshold Condition configuration for the Contrast Jenkins Plugin:

<a href="assets/images/Jenkins_threshold_condition.png" rel="lightbox" title="Create TeamServer Profile"><img class="thumbnail" src="assets/images/Jenkins_threshold_condition.png"/></a>
