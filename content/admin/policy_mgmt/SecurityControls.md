<!--
title: "Security Controls"
description: "Overview of security controls within Contrast rules"
tags: "Admin policy TeamServer application security controls"
-->


## About Security Controls

Security controls are methods in your code that make sure data is safe to use. Only users assigned an organizational role of **Rules_Admin** or higher can view or modify security controls.

There are two types of security controls:

* **Input Validators** are methods that accept a user input and take corrective action if unsafe data is received.

* **Sanitizers** are methods that clean the data passed in, rendering it safe for consumption by any interpreter. Many sanitizers may prevent one type of attack, but not necessarily another.


## Create and Manage Security Controls

### Policy Management

Access security controls by navigating from the **User menu > Policy Management > Security Controls tab**. If there are existing security controls, click on the name in the grid to edit further details or delete it altogether. You can also edit the API directly in the grid.

<a href="assets/images/Security-controls-grid.png" rel="lightbox" title="Security Controls grid"><img class="thumbnail" src="assets/images/Security-controls-grid.png"/></a>

To create a new security control, click the **Add Security Control** button.  

<a href="assets/images/Security-control-add.png" rel="lightbox" title="Add a security control"><img class="thumbnail" src="assets/images/Security-control-add.png"/></a>

After choosing a Name, Type and Language, specify the API and choose the vulnerability rules to which you'd like to apply the control. You can choose **All**, or select one or more individual vulnerabilities.

>**Note:** Servers may require restart. Contrast provides a list of servers affected by your selection.

### Vulnerability Details

You can also create security controls in the **Details** tab of a specific vulnerability. Expanding the details of a low severity (green) event reveals a button to add a security control in the Details page.

<a href="assets/images/SecurityControlVulnEventDetail.png" rel="lightbox" title="Creating A Security Control From Vulnerability Event Details"><img class="thumbnail" src="assets/images/SecurityControlVulnEventDetail.png"/></a>

If you mark a vulnerability as **Not A Problem** with the reason "Goes through an internal security control", you have the option to define that security control at this time. 

<a href="assets/images/SecurityControlOptionDialog.png" rel="lightbox" title="Option To Create A Security Control Within The Context Of Status Marking"><img class="thumbnail" src="assets/images/SecurityControlOptionDialog.png"/></a>

In both vulnerability contexts, the **Add Security Control** dialog gives you the option to immediately create another control in your current location.

### API Guidelines

When specifying the API, it's important to consider the following conventions:

* **Java** must include method name and parameters. Use fully qualified types.

* **.NET** must include return type (or void), method name and parameters. Use fully qualified types.

* **Node** ... 

* Mark the parameters that are going to be validated or sanitized with an asterisk ( ** * **).

### Suggested Security Controls

If Contrast recognizes potential security controls, they're automatically populated in a **Suggestions** section in the Security Controls grid. (You can hide the section by clicking on the carrot in the header row.) Suggestions are governed by [Enterprise Access Control](admin-manageorgs.html#access), which allows a user to see suggestions from applications only if they have a **View** role or higher.

Contrast names suggested security controls with the class and method; however, you can edit the Name, API and Type fields inline before adding it as an active security control. Hovering over the API gives the name of each application in which it was discovered, which links directly to the Vulnerabilities tab in the application's Details page. 

<a href="assets/images/Security-controls-suggested.png" rel="lightbox" title="Suggested security controls"><img class="thumbnail" src="assets/images/Security-controls-suggested.png"/></a>

Click the **Add** icon in the row to accepts the suggestion and move it up in the grid as a Rule. Anyone with a **Rules_Admin** role can then view or edit it. Click the **Delete** icon to remove the suggestion (with option to Undo it). Contrast doesn't repeat suggestions, so once it's deleted, an API is never suggested again. There is no way to view historical suggestions or get them back.

## Notifications

Auto-discovered security controls generate notifications OnEvent in Contrast the very first time they are discovered, regardless of the application. If a control is discovered for an application that for which a user doesn't have **View** role or higher, they won't receive the notification.



