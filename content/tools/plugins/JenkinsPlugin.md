<!--
title: "Contrast Jenkins Plugin"
description: "Sample Jenkins plugin using the Contrast Java SDK"
tags: "tools Jenkins SDK Integration Java"
-->

[Jenkins](https://jenkins.io/) is a continuous integration (CI) application that can be used to build, deploy and run applications. The Contrast Jenkins Plugin is a tool for integrating Contrast with your Jenkins CI instance. You can use it to test your connection to Contrast and verify your build with threshold conditions.

## Use the Plugin

You can view the plugin code in Jenkins' [Github repository](https://github.com/jenkinsci/contrast-continuous-application-security-plugin). In the Jenkins dashboard, go to **Manage Jenkins** in the left sidebar, and select the **Configure System** page to find the "Contrast TeamServer" profiles section.

### Contrast API settings

Contrast API settings enable the plugin to connect to Contrast and query for results. The plugin leverages these result to authenticate to Contrast and make API calls in post-build actions. Among the following requirements, you'll need a unique profile name to identify your configuration and use it in a specific job.

<a href="assets/images/Jenkins_ts_profile.png" rel="lightbox" title="Profile configuration"><img class="thumbnail" src="assets/images/Jenkins_ts_profile.png"/></a>

* Enter your [Contrast Username](user-account.html#loginpwd). Your username is usually the email address you use for your account in Contrast. 
* Enter your [Contrast API Key](user-account.html#profile) and [Contrast Service Key](user-account.html#profile). Log in to the Contrast UI, and go to the **user menu > Your Account > Your Keys section** to find both keys.         
* Enter the **Contrast URL** (the API URL to your Contrast instance). Use *https://app.contrastsecurity.com/Contrast/api* if you're a SaaS customer; all others use the URL of your Contrast UI (e.g., *https://contrastserver/Contrast/api*). 
* Enter the [Organization UUID](admin-orgsettings.html#apikey). Go to the **user menu > Organization Settings > API tab** to find the Organization UUID of the configured user in the Contrast UI. (You can also copy it from the URL after logging in to the Contrast UI.) 
* Choose the **Result of a vulnerable build** from the dropdown menu. 
* Check the box to fail a build if the **application is not found** in the Contrast application. 
* Choose to allow global threshold conditions to be overridden in post-build actions. (See the **Global threshold conditions**
section for more details.)
* Click the **Apply** button to save the profile settings.

#### Test the connection

When you add a Contrast profile, use the **Test TeamServer Connection** button to test your connection and make sure that all the fields are accurate. Contrast prompts you if the test is successful, or gives an error message if it fails.

### Global threshold conditions

Once a connection is made, complete the following fields for **Contrast Vulnerability Threshold Conditions**. 

* Select a **Profile** from the dropdown.
* Add a **Count**. The count is exclusive; if you set a count for "5", it fails on six or more vulnerabilities. This field is **required**.
* Choose a **Severity** from the options in the dropdown menu (Note, Low, Medium, High or Critical). The plugin sets a filter in the API call for all vulnerabilities greater than or equal to this field. This field is recommended to reduce your results, but not required. 
* Choose a **Vulnerability Type** (rule name) from the dropdown menu. If you specify a single rule for which to filter, the plugin checks for the number of vulnerabilities with the rule type and compares it to the count. This field is recommended to reduce your results, but not required. 
* Choose from the list of **Vulnerability Statuses**. Statues aren't required, but can be helpful if you want to exclude vulnerabilities with certain statuses - for example, "Not a Problem" - from the results. If you don't select any statuses, the plugin won't filter vulnerabilities by statuses.

<a href="assets/images/Jenkins_global_threshold_condition.png" rel="lightbox" title="Threshold condition configuration"><img class="thumbnail" src="assets/images/Jenkins_global_threshold_condition.png"/></a>

You can add as many rules as you like. The plugin fails on the **first** bad condition and tells you on which condition it failed.

>**Note**: Even if your build succeeds, the plugin fails the overall build if the test finds a bad condition.

### Threshold conditions in a post-build action

Complete the following fields for **Post-Build Actions**.

* Select a **Profile** from the dropdown.
* Select **Query vulnerabilities by**. By default, the plugin uses the first option: "appVersionTag, format: applicationId-buildNumber". 
* If the profile is configured to allow the global threshold conditions to be overridden, you can choose to do so.
* Select the **Application Id** from the dropdown menu. This field is **required**.
* If you chose to override the global threshold conditions, fill in the rest of the fields, including **Count**,
 **Severity**, **Vulnerability Type**, and **Vulnerability Statuses** similarly to the global threshold conditions described above.

<a href="assets/images/Jenkins_threshold_condition.png" rel="lightbox" title="Threshold condition configuration"><img class="thumbnail" src="assets/images/Jenkins_threshold_condition.png"/></a>

### Threshold conditions in a Pipeline step

When you add a Pipeline step with the name `contrastVerification`, it follows the same principles as the post-build action but in a newer format for Jenkins 2.0 improvements. Pipeline configuration:

```
contrastVerification applicationId: '1e6ad9c6-89d4-4f06-bdf6-92c569ec89de', count: 1, profile: 'new-profile', queryBy: 3, rule: 'cache-controls-missing', severity: 'High'
```

## Test for Vulnerabilities

For the Jenkins plugin to get accurate information, you must add a unique identifier built from the Jenkins CI configuration as an agent property. The corresponding property for the Java agent is `contrast.override.appversion`.

The plugin can use either the unique identifier `appVersionTag` or the `startDate` to filter vulnerabilities and check conditions. You can change the format used by the plugin to create `appVersionTag` or set the plugin to use `startDate`. In pipeline jobs, this is set using the `queryBy` pipeline parameter. Four options are available: 

* appVersionTag, format: `applicationId-${BUILD_NUMBER}` (default)
* appVersionTag, format: `applicationId-${JOB_NAME}-${BUILD_NUMBER}`
* `startDate` (Build timestamp)
* Parameter: APPVERSIONTAG

> **Note:** The `queryBy` option should match the `contrast.override.appversion` parameter you pass to the Contrast Java agent when running your application. If you use the third option (`startDate`), you aren't required to pass the `contrast.override.appversion` parameter to the Java agent.

Both `JOB_NAME` and `BUILD_NUMBER` are available as a Jenkins environment <a href="https://wiki.jenkins-ci.org/display/JENKINS/Building+a+software+project">properties</a>. You can specify your own text for APPVERSIONTAG by selecting the fourth queryBy option and exporting APPVERSIONTAG as an environment property within your Jenkins job.
