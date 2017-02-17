<!--
title: "Exclusions"
description: "Overview of application exclusions in TeamServer"
tags: "exclusions"
-->

Exclusions are used to suppress events that you don't want to hear about for one reason or another – usually because there's a compensating control that isn't visible from the application perspective. For example:

* As an administrator, you need to change the HTML that shows up on your web page, even though this qualifies as a Cross-Site Scripting (XSS) vulnerability. In this case, you can create an exclusion that prevents these changes from being reported.

* You use an edge device to place the correct headers on outbound HTTP responses to stop Clickjacking attacks. However, it's very likely that Contrast will appropriately report the issue because the application never provided the required protection. By using an exclusion, you prevent your developers from having to worry about understanding a complicated security issue that you've handled upstream. 

* When you’re testing beta rules or rolling out new rules, exclusions can be used to suppress false positives.

## Types of exclusions 

Exclusions can apply to an input, URLs or code. Contrast won’t process any inputs that match the exclusion criteria. Each exclusion only applies to the application for which it was created. Please review the options for the type of exclusion you would like to set up. 

### Input 

Contrast allows you to specify a particular type of input. Any findings using this input will be suppressed.

* For **Parameter**, **Head** and **Cookie**: You must specify the name of the particular input for which you wish to suppress findings. You can use wildcard **“.*”** to supress all findings from the selected type of input.

* **QueryString** and **Body**: These will suppress findings from the entire QueryString and Body, respectively.

### Applied URLs

Creating an exclusion from a URL allows you to specify a list of URLs to be ignored. Any findings from the specified URLs will be suppressed. 

* **All URLs**: Findings using the specified input type and name will be suppressed regardless of where they’ve come from.

* **These URLs** (allows regex): You can specify a set of URLs to which to apply the exclusion. 

* **Wildcard “.*”** is acceptable substitute for listing all URLs.

### Code

Code (allows regex) allows you to specify a list of method signatures. Any findings involving these methods will be suppressed. The entire method signature must be present and not include a trailing parameter definition or any other extra characters. For example: 

* If you have a method **doLegacySecurity()** inside a class called **com.acme.OldSecurity** that is being reported for using insecure cryptographic algorithms, you can ignore it by entering this line into the exclusion code block:

      com.acme.OldSecurity.doLegacySecurity

* We’ll match this method signature against the stacktrace for any vulnerabilities found and suppress any that contain a match.

## Create a new exclusion

1.	From within the application to which you wish to apply a new exclusion, click on the **Exclusions** tab and select **Add Exclusion**. **(You must have Admin or Rules Admin privileges.)**

<a href="assets/images/AddExclusions.png" rel="lightbox" title="Add exclusions"><img class="thumbnail" src="assets/images/AddExclusions.png"/></a>

2. Add the **Exclusion Name**. Use something you’ll remember easily.
3.	Select the **Exclusion Type**. (More fields will become available once you make your choice. Add the information that is necessary for each one.) 
4.	**Applicable Vulnerability Rules** allows you to specify the scope of rules effected by the exclusion.

 * **All Rules** applies the exclusion to all vulnerabilities found by both Assess and Protect mode. 
 * **All Assessment Rules** applies to all vulnerabilities found in Assess mode.
 * **All Protection Rules** applies to all attack events in Protect mode.

This can be narrowed down by selecting individual Assess or Protect rules. We’ll only apply the exclusion to vulnerabilities found by the selected rules in the corresponding mode.

>**NOTE:** To help you understand what your exclusion will do, a summarised sentence is displayed at the bottom of the wizard.

## Create a new exclusion from an existing attack event

When viewing the details of an existing attack event, an **Add Exclusion** button will appear in the top right hand corner of the **Event** tab. Selecting this button preopulates the exclusion fields based on the details of this specific event. Once created, this exclusion is managed in the same way as if it was created manually.

## Enable or disable existing exclusions

Each exclusion can be enabled or disabled for either Assess or Protect, depending on the rules which are covered by the exclusion. From the **Exclusions** tab within an application, you can see a list of all exclusions existing for this app. These can be toggled on or off for both Assess and Protect. 

<a href="assets/images/EnableExclusions.png" rel="lightbox" title="Enable or disable exclusions"><img class="thumbnail" src="assets/images/EnableExclusions.png"/></a>

Alternatively, you can see a global list of existing exclusions across all applications under **Policy Management > Application Exclusions** via the User Menu. Each exclusion can also be edited and toggled off for each mode on this page. 

<a href="assets/images/ExclusionsPolicyManagement.png" rel="lightbox" title="Exclusions in Policy Management"><img class="thumbnail" src="assets/images/ExclusionsPolicyManagement.png"/></a>


