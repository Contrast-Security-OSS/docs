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

Exclusions can apply to an input, URLs or code. Contrast won’t process any inputs that match the exclusion criteria, and each exclusion only applies to the application for which it was created. Review the following options for the type of exclusion you would like to set up. 

### Input 

Contrast allows you to specify a particular type of input. Any findings using this input will be suppressed.

* For **Parameter**, **Header** and **Cookie**: You must specify the name of the particular input for which you wish to suppress findings. You can use wildcard `.*` to suppress all findings from the selected input type.


* **QueryString** and **Body**: These will suppress findings from the entire QueryString and Body, respectively. The QueryString and Body may only be excluded in conjunction with the URL exclusion pattern defined below.


In conjunction with the input type, you must choose how to apply URLs:

* **All URLs**: Findings using the specified input type and name will be suppressed regardless of where they’ve come from.

* **These URLs** (allows regex): Specify a set of URLs to which to apply the exclusion. 

>**Note:** Slash followed by wildcard `/.*` is an acceptable substitute for listing all URLs.


#### Example Input Regular Expressions

| Type | Desired Effect | Regular Expression | Effect |
|-|-|-|-|
| Cookie | Exclude cookies names starting with a value | `^App` | Excludes all cookie names starting with `App` |
| Parameter | Exclude parameter names ending with a value | `testing$` | Excludes all parameter names ending with `testing` |
| Header | Exclude explicitly named header | `ignore` | Excludes the header `ignore` only |

See the table below for a [Regular Expression Quick Reference](#regular-expression-quick-reference).

### URL

This type of exclusion allows you to focus on a list of specific URLs to be ignored using **These URLs**. In this field, you can list the specific URLs to exclude, resulting in any findings from these URLs being suppressed. 

>**Note:** Slash followed by wildcard `/.*` is an acceptable substitute for listing all URLs.


#### Example URL Regular Expressions

| Desired Effect | Regular Expression | Effect |
|-|-|-|
| Exclude all subpaths | `/myapp/.*` | Excludes all paths with the initial URL of `/myapp/` |
| Exclude one subpath explicitly | `^/myapp/thispath$` | Excludes only `/myapp/thispath` |
| Exclude path ending | `.*ignore$` | Excludes all path ending in `ignore` |
| Exclude paths containing | `.*value.*` | Excludes all paths containing `value` |
| Exclude paths containing digits | `/myapp/\d+` | Excludes all paths like `/myapp/1234` |
| Exclude paths containing non-digits | `/myapp/\D+` | Excludes all paths like `/myapp/word` |

See the table below for a [Regular Expression Quick Reference](#regular-expression-quick-reference).


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

Alternatively, you can see a global list of existing exclusions across all applications under **Policy Management > Application Exclusions** via the user menu. Each exclusion can also be edited and toggled off for each mode on this page. 

<a href="assets/images/Application-exclusions.png" rel="lightbox" title="Manage exclusions in Policy Management"><img class="thumbnail" src="assets/images/Application-exclusions.png"/></a>


## Regular Expression Quick Reference

| Effect | Pattern | Example Pattern | Example Match |
|-|-|-|
| Start of a string | `^` | `^w+` | `Start` of a string |  
| End of a string | `$` | `w+$` | End of a `string` |
| A single character of: a, b or c | `[abc]` | `[abc]+` | `a` `bb` `ccc` |
| A character except: a, b or c | `[^abc]` | `[^abc]+` | `Anything `b`ut `abc`.` |
| A character in the range: a-z | `[a-z]` | `[a-z]+` | O`nly` `a`-`z` |
| A character *not* in the range: a-z | `[^a-z]` | `[^a-z]+` | `A`nything<code> </code>but<code> </code>a`-`z`.` |
| A character in the range of: a-z or A-Z | `[a-zA-Z]` | `[a-zA-Z]+` | `abc`123`DEF` |
| Any single character | `.` | `.+` | `a` `b` `c` |
| Any whitespace character | `\s` | `\s` | any<code> </code>whitespace<code> </code>character |
| Any non-whitespace character | `\S` | `\S+` | `any` `non-whitespace` |
| Any digit | `\d` | `\d` | not `1` not `2` |
| Any non-digit | `\D` | `\D+` | `not` 1 `not` 2 |
| Matcher either a or b | <code>(a&#124;b)</code> | <code>(a&#124;b)</code> | `b`e`a`ch |
| Zero or one of a | `a?` | `ba?` | `ba` `b` a |
| Zero or more of a | `a*` | `ba*` | a `ba` `baa` aaa `ba` `b` |
| One or more of a | `a+` | `a+` | `a` `aa` `aaa` `aaaa` b`a`b b`aa`b |
| Exactly 3 of a | `a{3}` | `a{3}` | a aa `aaa` `aaa`a |
| 3 or more of a | `a{3,}` | `a{3,}` | a aa `aaa` `aaaa` `aaaaaa` |
| Between 3 and 6 of a | `a{3,6}` | `a{3,6}` | a aa `aaa` `aaaa` `aaaaaa`aaaa |
