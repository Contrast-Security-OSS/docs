<!--
title: "Security Controls"
description: "Overview of security controls within TeamServer rules"
tags: "Admin policy TeamServer application security controls"
-->


## What Are Security Controls?

Security controls are methods in your code that make sure data is safe to use. 

Only users assigned an organizational role of *Rules_Admin* or higher can view or modify security controls.

### Types of Security Controls

* **Input Validators** are methods that accept a user input, and take corrective action if unsafe data is received.

* **Sanitizers** are methods that "clean" the data passed in, rendering it safe for consumption by any interpreter. Many sanitizers may prevent one type of attack, but not necessarily prevent another.


## Creating & Managing Security Controls

### From Policy Management

Security controls can be accessed by navigating from the User menu to **Policy Management** and then the **Security Controls** tab. If there are existing security controls, clicking on the name will allow you to edit further details or delete it altogether. The API may be edited in-line directly from the grid.
<BR>
To create a new security control, simply click the **Add Security Control** button.  

<a href="assets/images/SecurityControlGrid.png" rel="lightbox" title="Security Controls"><img class="thumbnail" src="assets/images/SecurityControlGrid.png"/></a>
<BR>
After choosing a Name, Type, and Language, specify the API and choose the vulnerability rules to which you'd like to apply the control.  This field is multi-select, so you may choose **All** or select one or more individual vulnerabilities.

<a href="assets/images/SecurityControlEdit.png" rel="lightbox" title="Security Control Details"><img class="thumbnail" src="assets/images/SecurityControlEdit.png"/></a>


>**NOTE:** Servers may require restart and a list of affected servers based on your selection is provided.

<BR>
### From A Vulnerability

Security controls may also be created from within the **Details** tab of a specific vulnerability.  Expanding the details of a low severity (green) event will reveal a button to add the security control right in context.

<a href="assets/images/SecurityControlVulnEventDetail.png" rel="lightbox" title="Creating A Security Control From Vulnerability Event Details"><img class="thumbnail" src="assets/images/SecurityControlVulnEventDetail.png"/></a>
<BR>
Additionally, if marking a vulnerability as **Not A Problem** with the reason "Goes through an internal security control", you will be given the option to define that security control at this time. 

<a href="assets/images/SecurityControlOptionDialog.png" rel="lightbox" title="Option To Create A Security Control Within The Context Of Status Marking"><img class="thumbnail" src="assets/images/SecurityControlOptionDialog.png"/></a>

>**NOTE:** In both vulnerability contexts, the **Add Security Control** dialog will give you the option to immediately create another control from your current location, rather than having to navigate back to **Policy Management**.

<BR>

## API Guidelines

When specifying the API, it is important to consider the following conventions:

* **Java** must include method name and parameters. Use fully qualified types.

* **.NET** must include return type(or void), method name and parameters. Use fully qualified types.

* Mark the parameters that are going to be validated or sanitized with an asterisk ( ** * **).



## Suggested Security Controls

If Contrast recognizes potential security controls, they will populate in a **Suggestions** section, listed below existing security controls within the same table. (Suggestions may be hidden altogether by clicking on the header row to collapse the section). Suggestions are governed by EAC, meaning a user cannot see suggestions from apps if they don't have a *View* role or higher.

<a href="assets/images/SecurityControlSuggestions.png" rel="lightbox" title="Suggested Security Controls"><img class="thumbnail" src="assets/images/SecurityControlSuggestions.png"/></a>
<BR>
The name of suggested security controls will be pre-populated with the class and method; however, the Name, API and Type fields may all be edited directly in-line, allowing the user to change the suggestion before adding it as an active security control. Hovering over the API will expose the applications it was discovered in and link directly to the **Application Overview > Vulnerabilities**. Clicking the **Add** (plus) icon on the right side of the row accepts the suggestion as a legitimate rule and moves it up in the table with the other security controls. Anyone with a *Rules_Admin* role can then view or edit it.
<BR>
Clicking the **Delete** (trashcan) icon will remove the suggestion but provide the option to Undo.  There are no repeat suggestions, so once deleted, an API will never be suggested again. As of now, there is no way to view historical suggestions or get them back.

<a href="assets/images/SecurityControlUndoRemove.png" rel="lightbox" title="Undo Option When Removing A Suggested Security Control"><img class="thumbnail" src="assets/images/SecurityControlUndoRemove.png"/></a>

<BR>

## Notifications

Auto-discovered security controls will generate notifications OnEvent in Contrast the very first time they are discovered, regardless of application. 
If a control is discovered for an app that a user doesn't have *View* role or higher for, they will not receive the notification.



