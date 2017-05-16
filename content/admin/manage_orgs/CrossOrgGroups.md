<!--
title: "Cross-Organization Groups"
description: "Overview of groups across multiple organizations"
tags: "Admin manage groups organization EOP"
-->

Enterprise On-Premises (EOP) customers will now have the ability to identify user accounts with permissions in order to perform activities across organizations beyond the user's default organization. This assumes multiple organizations have been created within Contrast as part of a multi-tenant deployment. This feature allows users to toggle between many organizations via the User menu in the main navigation bar.

Groups with cross-organizational access control policies are created within the System Administration interface. Either the SuperAdmin, delegated SuperAdmin, or even users assigned to a system group with system administrative privileges are granted the ability to create, edit or delete organization groups.

The goal of this feature is to allow users access to more than one organization. Within those organizations, a policy can be defined with regards to all, some, or as little as one application. This gives customers greater control in appropriately segmenting applications across various organizations when setting up their instance of Contrast.

A typical use case of this functionality is defining permissions for an overlay application security group that supports multiple business units. Each business unit is set up as a separate organization, each with their own applications. The application security team that supports all these business units will need access to all applications in all organizations. These application security users can be assigned to a cross-organizational access group and they can switch between organizations freely using the organization toggle feature.

>**Note**: Groups can also be configured within the Organization Settings page of a given organization. However, when configuration is done this way, the functionality to grant the option to traverse across applications no longer exists. 
