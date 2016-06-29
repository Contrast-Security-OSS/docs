<!--
title: "Rules: Security Controls"
description: "Overview of security controls within TeamServer rules"
tags: "TeamServer application security controls"
-->


## What Are Security Controls?

Security controls are rules that manage/re-route low severity vulnerability events in order to allow for focus on higher priority events...

Only users assigned an organizational role of *Rules_Admin* or higher can interact with security controls.

<BR>


## Creating & Managing Security Controls

### From Policy Management

Security controls can be accessed by navigating from the User menu to **Policy Management** and then the **Security Controls** tab. If there are existing rules, clicking on the name will allow you to edit further details or delete the rule altogether. The API may be edited in-line directly from the grid.

To create a new rule, simply click the **Add Security Control** button.  

<a href="assets/images/SecurityControlGrid.png" rel="lightbox" title="Filter Bar"><img class="thumbnail" src="assets/images/SecurityControlGrid.png"/></a>

After choosing a Name, Type, and Language, specify the API and choose the vulnerability rules to which you'd like to apply the control.  This field is multi-select, so you may choose **All** or select one or more individual vulnerabilities.

<a href="assets/images/SecurityControlEdit.png" rel="lightbox" title="Filter Bar"><img class="thumbnail" src="assets/images/SecurityControlEdit.png"/></a>

<!--Talk about naming? (Name pre-populated with class and method) In what case would there be No Name? If added from a suggestion?-->

>**NOTE:** Servers may require restart and a list of affected servers based on your selection is provided.

### From A Vulnerability

Security controls may also be created from within the **Details** tab of a specific vulnerability.  Expanding the details of a low severity (green) event will also reveal a button to add the security control right in context.

<a href="assets/images/SecurityControlVulnEventDetail.png" rel="lightbox" title="Filter Bar"><img class="thumbnail" src="assets/images/SecurityControlVulnEventDetail.png"/></a>

Additionally, if marking a vulnerability as **Not A Problem** with the reason "Goes through an internal security control", you will be given the option to define that security control at this time. 

<a href="assets/images/SecurityControlOptionDialog.png" rel="lightbox" title="Filter Bar"><img class="thumbnail" src="assets/images/SecurityControlOptionDialog.png"/></a>

>**NOTE:** In both vulnerability contexts, the **Add Security Control** dialog will allow you to immediately create another control from your current location, rather than having to navigate back to **Policy Management**.

<BR>

## API Guidelines

When specifying the API, it is important to consider the following conventions:

* **Java** must include method name and parameters. Use fully qualified types.

* **.NET** must include return type(or void), method name and parameters. Use fully qualified types.

* Mark the parameters that are going to be validated or sanitized with a '*' character.

## Types of Security Controls

When creating security controls, there are two types to consider: 

* **Input Validators** are methods that change the flow of a program if untrusted data is received.

* **Sanitizers** are methods that "clean" the data passed in, rendering it safe for consumption by any interpreter. Many sanitizers may prevent one type of attack, but not necessarily prevent another.

## Suggested Security Controls

<!--How to see them? How are they populated? -->

A new "Suggestions" section would populate the same table on the Security Controls tab (as shown) - utilizing the same exact columns.
"Suggestions" will be governed by EAC, meaning a user cannot see suggestions from apps they don't have view role or higher.
When a Suggestion is accepted and turned into a rule, anyone with Org-Rules_Admin role can view/edit it.
A user will be able to add (plus icon), remove (trashcan), or hide all suggestions (clicking section header/arrow)
With discovery of these, application designation is needed to know where this API was discovered to help the user find it/assess it. A new tooltip is needed on the API itself to expose those. The application link we show here should take the user to the App > Vulns tab.

If the user removes a suggestion, we will remove the row and show our standard success message with an addition of an "Undo" option. Once they've removed a suggestion, we should no longer populate the Suggestions area or ever be re-suggested. For now, there is no way to see those historical suggestions or get them back.
If the user goes to add a suggestion, there should be an animation that both replaces the plus icon as well as showing the row move from the Suggestions area to a legit security control. (see demo for sample) Success message would also follow in this case.

A user is able to change the security control type (Sanitizer, Validator) during the suggestion to actual rule step. For example, if a security control was suggested as a Sanitizer, the user could change the type of Validator and then click the plus button to add it as a Validator. The existing entry in the possible_sanitizers table will be marked as added in the table and the new security control will be written to the Validator table.

<BR>

## Notifications

We will only notify auto discovered security controls the very first time it was discovered, regardless of application. (Uniqueness is just API - not API + App)
We will notify user of these discoveries OnEvent. Arshan didn't believe this would happen frequently.
Icon for system generated notification is our logo (used in our banner) but color: #dcdcdc.
Messaging is "Contrast has discovered <link to Sec Controls tab with the related suggestions highlighted>Security Controls</link>
from <link to app>TeamServer</link> you may want to review." If there is a case where multiple applications found the security controls for review, we will just aggregate to "4 applications" and no link.
EAC applies, meaning if a control is discovered for an app a user doesn't have view role or higher for, they will not get the notification.






<a href="assets/images/KB3-b02_1.gif" rel="lightbox" title="Filter Bar"><img class="thumbnail" src="assets/images/KB3-b02_1.gif"/></a>


