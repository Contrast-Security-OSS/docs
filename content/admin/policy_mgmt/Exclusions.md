<!--
title: "Application Exclusions"
description: "Overview of application exclusions in TeamServer"
tags: "Admin policy application exclusions suppress events"
-->

## How It Works 

Exclusions are used to suppress events that you don't want to hear about for one reason or another – usually because there's a compensating control that isn't visible from the application perspective. For example:

* As an administrator, you need to change the HTML that shows up on your web page, even though this qualifies as a Cross-Site Scripting (XSS) vulnerability. In this case, you can create an exclusion that prevents these changes from being reported.

* You use an edge device to place the correct headers on outbound HTTP responses to stop Clickjacking attacks. However, it's very likely that Contrast will appropriately report the issue because the application never provided the required protection. By using an exclusion, you prevent your developers from having to worry about understanding a complicated security issue that you've handled upstream. 

* When you’re testing beta rules or rolling out new rules, exclusions can be used to suppress false positives.

## Types of Exclusions 

Exclusions can apply to an input, URLs or code. Contrast won’t process any inputs that match the exclusion criteria, and each exclusion only applies to the application for which it was created. Please review the options for the type of exclusion you would like to set up. 

### Input 

Contrast allows you to specify a particular type of input. Any findings using this input will be suppressed.

* For **Parameter**, **Header** and **Cookie**: You must specify the name of the particular input for which you wish to suppress findings. You can use wildcard ```.*``` to suppress all findings from the selected input type.

* **QueryString** and **Body**: These will suppress findings from the entire QueryString and Body, respectively.

In conjunction with the input type, you must choose how to apply URLs:

* **All URLs**: Findings using the specified input type and name will be suppressed regardless of where they’ve come from.

* **These URLs** (allows regex): Specify a set of URLs to which to apply the exclusion. 

>**Note:** Slash followed by wildcard ```/.*``` is an acceptable substitute for listing all URLs.

### URL

This type of exclusion allows you to focus on a list of specific URLs to be ignored using **These URLs**. In this field, you can list the specific URLs to exclude, resulting in any findings from these URLs being suppressed. 

>**Note:** Slash followed by wildcard ```/.*``` is an acceptable substitute for listing all URLs.

### Code

Choosing **Code** (allows regex) will allow you to specify a list of method signatures. Any findings involving these methods will be suppressed. The entire method signature must be present and not include a trailing parameter definition or any other extra characters. For example: 

* If you have a method ```doLegacySecurity()``` inside a class called ```com.acme.OldSecurity``` that is being reported for using insecure cryptographic algorithms, you can ignore it by entering this line into the exclusion code block:

      com.acme.OldSecurity.doLegacySecurity

* We’ll match this method signature against the stacktrace for any vulnerabilities found and suppress any that contain a match.

## Create a New Exclusion

1. From within the application to which you wish to apply a new exclusion, click on the **Exclusions** tab and select **Add Exclusion**. 

   >**Note:** You must have Admin or Rules Admin privileges in order to create exclusions.

   <a href="assets/images/ExclusionsAdd.png" rel="lightbox" title="Adding A New Exclusion"><img class="thumbnail" src="assets/images/ExclusionsAdd.png"/></a>

2. Enter the **Exclusion Name**. Use something you’ll remember easily.
3.	Select the **Exclusion Type**. (More fields will become available once you make your choice. Add the information that is necessary for each one.) 
4.	**Applicable Vulnerability Rules** allows you to specify the scope of rules affected by the exclusion.

 * **All Rules** applies the exclusion to all vulnerabilities found in both Assess and Protect mode. 
 * **All Assessment Rules** applies to all vulnerabilities found in Assess mode.
 * **All Protection Rules** applies to all attack events in Protect mode.

This can be narrowed down by selecting individual Assess or Protect rules. We’ll only apply the exclusion to vulnerabilities found by the selected rules in the corresponding mode.

>**Note:** To help you understand what your exclusion will do, a summarized sentence is displayed at the bottom of the wizard.

### Create a new exclusion from an existing attack event

When viewing the details of an existing attack event, an **Add Exclusion** button will appear in the top right hand corner of the **Event** tab. Selecting this button prepopulates the exclusion fields based on the details of this specific event. Once created, this exclusion is managed in the same way as if it were created manually.

## Enable or Disable Exclusions

Each exclusion can be enabled or disabled for either Assess or Protect mode, depending on which rules are covered by the exclusion. From the **Exclusions** tab within an application overview, you can see a list of all existing exclusions for that application. These can be toggled on or off for both Assess and Protect. 

<a href="assets/images/Application-policy-exclusions-tab.png" rel="lightbox" title="Enable or disable exclusions in an application Policy tab"><img class="thumbnail" src="assets/images/Application-policy-exclusions-tab.png"/></a>

Alternatively, you can see a global list of existing exclusions across all applications under **Policy Management > Application Exclusions** via the User Menu. Each exclusion can also be edited and toggled off for each mode on this page. 

<a href="assets/images/Application-exclusions.png" rel="lightbox" title="Manage exclusions in Policy Management"><img class="thumbnail" src="assets/images/Application-exclusions.png"/></a>


