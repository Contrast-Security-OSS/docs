<!--
title: "Contrast Jenkins Plugin"
description: "Sample Jenkins plugin using the Contrast Java SDK"
tags: "tools Jenkins SDK Integration Java"
-->

[Jenkins](https://jenkins.io/) is a continuous integration (CI) application that can be used to build, deploy and run applications. The Contrast Jenkins Plugin is a tool for integrating Contrast with your Jenkins CI instance. You can use it to test your connection to Contrast and verify your build with threshold conditions.

## Use the Plugin

You can view the plugin code in Jenkins' [Github repository](https://github.com/jenkinsci/contrast-continuous-application-security-plugin). In the Jenkins dashboard, go to **Manage Jenkins** in the left sidebar, and select the **Configure System** page to find a new Contrast TeamServer profiles section.

## Contrast API Settings
Contrast API settings enable the plugin to connect to Contrast and query for results. The plugin leverages these result to authenticate to Contrast and make API calls in post-build actions. Among the following requirements, you'll need a unique profile name to identify your configuration and use it in a specific job.

| Parameter                   | Description                                             |
|-----------------------------|---------------------------------------------------------|
| Contrast Username         | Username/email for your account in Contrast |
| Contrast API Key          | API Key found in **Organization Settings**                |
| Contrast Service Key      | Service Key found in **Organization Settings**             |
| Contrast URL          | API URL to your Contrast instance <BR> Use *https://app.contrastsecurity.com/Contrast/api* if you're a SaaS customer; all others use the URL of your Contrast UI (e.g., *https://contrastserver/Contrast/api*). |
| Organization UUID | Organization UUID of the configured user found in **Organization Settings** <BR> You can also copy it from the URL when viewing the home page in Contrast. |

---

<a href="assets/images/Jenkins_ts_profile.png" rel="lightbox" title="Profile configuration"><img class="thumbnail" src="assets/images/Jenkins_ts_profile.png"/></a>

### Test the connection

When you add a Contrast profile, use the validation button to test your connection and make sure that all the fields are accurate. Contrast prompts you if the test is successful or gives an error message if it fails.

### Threshold conditions in a post-build action

* Select a profile from the dropdown.
* Add a count. The count is exclusive, so if you set a count for five, it fails on six or more vulnerabilities. This field is required.
* Add a severity (Note, Low, Medium, High, or Critical). The plugin sets a filter in the API call for all vulnerabilities greater than or equal to this field.
* Add a vulnerability type (rule name). If you specify a single rule for which to filter, the plugin checks for the number of vulnerabilities with the rule type and compares it to the count.

Severity and vulnerability types aren't required, but suggested, to narrow down your results.

You can add as many rules as you like. The plugin fails on the **first** bad condition and tells you on which condition it failed.

>**Note**: Even if your build succeeds, the plugin fails the overall build if the test finds a bad condition.

<a href="assets/images/Jenkins_threshold_condition.png" rel="lightbox" title="Threshold condition configuration"><img class="thumbnail" src="assets/images/Jenkins_threshold_condition.png"/></a>

### Threshold conditions in a Pipeline step

When you add a Pipeline step with the name `contrastVerification`, it follows the same principles as the post-build action but in a newer format for Jenkins 2.0 improvements.

Pipeline configuration:

```
contrastVerification profile: 'Localhost', count: 10, rule: 'xss', severity: 'High'
```

## Test for Vulnerabilities

In order for the Jenkins plugin to get accurate information, you must add a unique identifier built from the Jenkins CI configuration as an agent property. The corresponding property for the Java agent is ```contrast.override.appversion```. Also, the job name must match your application name or you must override your application name with another property to ensure that Contrast tests for the correct information.

The plugin uses the unique identifier `${JOB_NAME}-${BUILD_NUMBER}` to filter vulnerabilities and check conditions. `JOB_NAME` and `BUILD_NUMBER` are available as Jenkins environment <a href="https://wiki.jenkins-ci.org/display/JENKINS/Building+a+software+project">properties</a>.



