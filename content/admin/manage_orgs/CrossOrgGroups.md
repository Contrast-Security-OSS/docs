<!--
title: "Cross-Organization Groups"
description: "Overview of groups across multiple organizations"
tags: "Admin manage groups organization EOP"
-->

Enterprise-on-Premises (EOP) customers with a multi-tenant deployment can give user accounts permission to perform activities across multiple organizations. The designated users can then to toggle between many organizations in the user menu. 

## About Cross-Organizational Access 

Cross-organization access allows users to access to more than one organization. Within the organizations, you can create a policy regarding all, some or just one application. This gives you greater control in appropriately segmenting applications across various organizations when setting up your instance of Contrast.

> **User scenario:**
 Each business unit is set up as a separate organization, each with their own applications. The application security team that supports all these business units must have access to all applications in all organizations. These application security users can be assigned to a cross-organizational access group, and they can switch between organizations freely using the organization toggle feature.

## Create Groups

EOP users can create groups with cross-organization access control policies in the System Administration view in the UI. Either the SuperAdmin, delegated Admin, or even users assigned to a system group with system administrative privileges, can create, edit and delete [organization groups](admin-onboardteam.html#org). 

>**Note**: Administrators can also configure groups in the **Organization Settings** page of a given organization. However, this configuration method doesn't allow you to grant the option to traverse across applications. 
