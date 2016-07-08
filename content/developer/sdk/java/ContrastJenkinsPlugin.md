<!--
title: "Contrast Jenkins Plugin"
description: "Sample Jenkins plugin using the Contrast Java SDK"
tags: "Jenkins SDK Integration Java"
-->

## About The Contrast Jenkins Plugin

The Contrast Jenkins Plugin is used to integrate Contrast with your Jenkins CI instance. It can be used to test your connection to TeamServer and verify your build with threshold conditions.

[Jenkins](https://jenkins.io/) is a Continuous Integration application that can be used to build, deploy, and run applications.

## Access To The Plugin

The plugin code can be viewed in our Github [repository](https://github.com/Contrast-Security-OSS/contrast-jenkins-plugin). 

<!-- The plugin can be found here on the Jenkins repository. -->

## How To Use The Plugin

Go to the `Configure System` page under `Manage Jenkins`. Here you will find a new Contrast TeamServer profiles section.

## TeamServer Configuration Settings

These settings are for the plugin to connect to TeamServer and query for results. The plugin leverages these to authenticate to TeamServer and make API calls in the post-build actions.

| Parameter                   | Description                                             |
|-----------------------------|---------------------------------------------------------|
| TeamServer Server Name      | Name of agent to use in the query for vulnerability results in the project post-build action (note: not the address of the TeamServer). This is specified in the agent arguments with ```-Dcontrast.server```, and by default uses the hostname of the server the agent is running on.  Agents are listed in the `Servers` tab when logged in to TeamServer. |
| TeamServer Username         | This is the username/email for your account in TeamServer |
| TeamServer Service Key      | Service Key found in Organization Settings             |
| TeamServer API Key          | API Key found in Organization Settings                 |
| TeamServer API Url          | API URL to your TeamServer instance <BR> Use *https://app.contrastsecurity.com/Contrast/api* if you are a SaaS customer, otherwise use the URL of your TeamServer, e.g. *http://contrastserver:8080/Contrast/api* |

### Testing The TeamServer Connection

When adding a TeamServer profile, a validation button is present to test your connection. Use this to make sure all your fields are accurate!
It will prompt you if successful, or give an error message if it fails.

## Threshold Condition Settings

These settings are for filtering trace results in order to verify conditions configured in the post-build action.

| Parameter                    | Description                                                              |
|------------------------------|--------------------------------------------------------------------------|
| TeamServer Organization Uuid | Organization Uuid of the configured user found in Organization Settings, or can be copied from the URL when viewing the home page in TeamServer. |
| TeamServer Application Name  | Name of the application as listed on the `Applications` tab in TeamServer. <BR> This is used to filter results in the query for post-build actions. |

### How Threshold Conditions Work In Post-Build Action

* Add a count. The count is exclusive, so if you set a count for 5, it will fail on 6 or more vulnerabilities. This field is required.
* Add a severity (Note, Low, Medium, High, or Critical). The plugin sets a filter in the API call for all vulnerabilities greater than or equal to this field.
* Add a vulnerability type. The type is the name of a rule. Here you can specify a single rule to filter for. The plugin checks for the number of vulnerabilities with the rule type and compares it to the count.

Severity and vulnerability type are not required, but suggested in order to narrow down your results.

You can add as many rules as you like. The plugin fails on the **first** bad condition in order, and will tell you which condition it failed on.

>**Note**: Even if your build succeeds, the plugin will fail the overall build if a bad condition is found.

### Examples

Below is a sample TeamServer Profile configuration for the Contrast Jenkins Plugin:

<a href="assets/images/Jenkins_ts_profile.png" rel="lightbox" title="TeamServer Profile Configuration"><img class="thumbnail" src="assets/images/Jenkins_ts_profile.png"/></a>

Below is a sample Threshold Condition configuration for the Contrast Jenkins Plugin:

<a href="assets/images/Jenkins_threshold_condition.png" rel="lightbox" title="TeamServer Threshold Condition"><img class="thumbnail" src="assets/images/Jenkins_threshold_condition.png"/></a>
