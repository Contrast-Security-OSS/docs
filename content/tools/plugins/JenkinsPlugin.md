<!--
title: "Contrast Jenkins Plugin"
description: "Sample Jenkins plugin using the Contrast Java SDK"
tags: "tools Jenkins SDK Integration Java"
-->

[Jenkins](https://jenkins.io/) is a continuous integration (CI) tool that can be used to automate the building, testing, deploying, and running of applications. With the Contrast plugin for Jenkins, you can add application security gates to fail your Jenkins job if your application is deemed too vulnerable. The plugin allows to to define these criteria. You can view the plugin source code in the Jenkins [Github repository](https://github.com/jenkinsci/contrast-continuous-application-security-plugin). 


## Requirements
* Jenkins Version >= 2.60.3


## Getting Started - Defining a Connection

1. In your Jenkins dashboard, go to **Manage Jenkins** in the left sidebar. 

2. Select the **Configure System** page to find the _Contrast Connections_ section.

<a href="assets/images/Jenkins_Contrast_Connection.png" rel="lightbox" title="Profile configuration"><img class="thumbnail" src="assets/images/Jenkins_Contrast_Connection.png"/></a>

3.  Enter your [Contrast Username](user-account.html#loginpwd). Your username is usually the email address you use for your account in Contrast. 

4. Enter your [Contrast API Key](user-account.html#profile) and [Contrast Service Key](user-account.html#profile), obtainable from the **Your Account > Profile > Your Keys** section of your Contrast instance.        

5. Enter your **Contrast URL** (the API URL to your Contrast instance). Use *https://app.contrastsecurity.com/Contrast/api* if you're a SaaS customer; all others use the URL of your Contrast UI (e.g., *https://contrastserver/Contrast/api*).

6. Enter your [Organization ID](admin-orgsettings.html#apikey), also obtainable from the **Your Account > Profile > Your Keys** section of your Contrast instance.

7. Choose to have Contrast mark your Jenkins job when your application is deemed too vulnerable with one of the following options from the dropdown menu: **Result of a vulnerable build**

8. If your Jenkins instance is not able to find your application, you may choose to have your Jenkins job automatically fail by checking the box: **Fail build if application is not found**

9. In a moment, you will define at the Jenkins _system_ level the criteria that Contrast will use to determine whether your application is too vulnerable. You may elect to have individual jobs overriding your criteria with their own by checking the box **Allow job level application vulnerability security controls to override those controls set here at the system level**. To enforce consistency of criteria across all Jenkins job in your instance, do not check this box.

10. Click the **Apply** button to save your connection information.

11. Click the **Test Contrast Connection** button to make sure that the plugin will be able to authenticate to Contrast and retrieve information about your applications' vulnerabilities.


### Defining Vulnerability Security Controls (System Level)

Once a connection is defined, complete the following fields in the **Contrast Vulnerability Security Controls** section.

12. Select a **Connection** you have previously created from the dropdown.

13. Set the **Number of Allowed Vulnerabilities**. The number is exclusive; if you set a count for "5", it fails on six or more vulnerabilities. This field is **required**.

14. Choose a **Vulnerability Severity** from the options in the dropdown menu (Note, Low, Medium, High or Critical). The plugin sets a filter in the API call for all vulnerabilities greater than or equal to this field. This field is recommended to reduce your results, but not required.

15. Choose a **Vulnerability Type** (rule name) from the dropdown menu. If you specify a single rule for which to filter, the plugin checks for the number of vulnerabilities with the rule type and compares it to the count. This field is recommended to reduce your results, but not required. 

16. Choose from the list of **Vulnerability Statuses**. Statuses aren't required, but can be helpful if you want to include only vulnerabilities with certain statuses - for example, "Suspicious" or "Reported" - from the results. If you don't select any statuses, the plugin won't filter vulnerabilities by statuses.

<a href="assets/images/Jenkins_Global_Vulnerability_Security_Control.png" rel="lightbox" title="VSC configuration"><img class="thumbnail" src="assets/images/Jenkins_Global_Vulnerability_Security_Control.png"/></a>

You can add as many rules as you like. The plugin fails on the **first** bad condition and tells you on which condition it failed.

>**Note**: Even if your build succeeds, the plugin fails the overall build if the test finds a bad condition.


### Defining Vulnerability Security Controls (Job Level)

You have now created a connection and defined criteria for determining whether your application is too vulnerable at the Jenkins System Level. You will now add an application security gate to your Jenkins job.

Complete the following fields for the **Post-Build Actions** section in the definition of your job.

17. Select a **Connection** you have previously created from the dropdown.

18. Choose your application. This field is **required**.
    * If your application has been instrumented, select your application from the **Choose your application** dropdown.
    * If your application has not yet been instrumented, enter your application name using the **Application Name** and **Application Language** fields. Provide the same name of your application that you will provide to the Contrast agent when you will instrument your application for the first time in your Jenkins job. You may learn how to instrument your application [here](https://docs.contrastsecurity.com/installation-javaguides.html).


#### Instrumented
<a href="assets/images/Jenkins_build_appId.png" rel="lightbox" title="VSC configuration with application"><img class="thumbnail" src="assets/images/Jenkins_build_appId.png"/></a>


#### Not yet instrumented
<a href="assets/images/Jenkins_build_appName.png" rel="lightbox" title="VSC configuration with application name"><img class="thumbnail" src="assets/images/Jenkins_build_appName.png"/></a>

19. Select **Query vulnerabilities by**. By default, the plugin uses the first option: "appVersionTag, format: applicationId-buildNumber". 

20. If the connection is configured to allow the global VSCs to be overridden, you can choose to do so by checking the next checkbox: "Override Vulnerability Security Controls at the Jenkins system level"

21. If you chose to override the global VSCs, fill in the rest of the fields, including **Number of Allowed Vulnerabilities**,
 **Vulnerability Severity**, **Vulnerability Type**, and **Vulnerability Statuses**, similar to the global VSCs described above.


### Contrast Vulnerability Security Controls in a Pipeline step

When you add a Pipeline step with the name `contrastVerification`, it follows the same principles as the post-build action but in a newer format for Jenkins 2.0 improvements.

#### Example pipeline step using queryBy start date:

```
contrastVerification applicationId: '1e6ad9c6-89d4-4f06-bdf6-92c569ec89de', count: 1, profile: 'new-profile', queryBy: 3, rule: 'cache-controls-missing', severity: 'High'
```

#### Example pipeline step using queryBy custom appVersionTag parameter:

```
contrastVerification applicationId: '1e6ad9c6-89d4-4f06-bdf6-92c569ec89de', count: 1, profile: 'new-profile', queryBy: 4, appVersionTag: 'v1.2.3' rule: 'cache-controls-missing', severity: 'High'
```

#### Example pipeline step using applicationName and AgentType to define the application:

```
contrastVerification applicationName: 'MyApp', agentType: 'Java', count: 1, profile: 'new-profile', queryBy: 3, rule: 'cache-controls-missing', severity: 'High'
```

## Test for Vulnerabilities

For the Jenkins plugin to get accurate information, you must add a unique identifier built from the Jenkins CI configuration as an agent property. The corresponding property for the Java agent is `contrast.override.appversion`.

The plugin can use either the unique identifier `appVersionTag` or the `startDate` to filter vulnerabilities and check conditions. You can change the format used by the plugin to create `appVersionTag` or set the plugin to use `startDate`. In pipeline jobs, this is set using the `queryBy` pipeline parameter. Four options are available: 

* appVersionTag, format: `applicationId-${BUILD_NUMBER}` (default)
* appVersionTag, format: `applicationId-${JOB_NAME}-${BUILD_NUMBER}`
* `startDate` (Build timestamp)
* Parameter: APPVERSIONTAG

> **Note:** The `queryBy` option should match the `contrast.override.appversion` parameter you pass to the Contrast Java agent when running your application. If you use the third option (`startDate`), you aren't required to pass the `contrast.override.appversion` parameter to the Java agent.

Both `JOB_NAME` and `BUILD_NUMBER` are available as Jenkins environment <a href="https://wiki.jenkins-ci.org/display/JENKINS/Building+a+software+project">properties</a>. You can specify your own text for APPVERSIONTAG by selecting the fourth queryBy option and exporting APPVERSIONTAG as an environment property within your Jenkins job.
