<!--
title: "BugTracker Integration: How To Handle Required Fields When Creating JIRA Tickets From A Vulnerability"
description: "Explanation of BugTracker integration"
-->

## Issue

TeamServer has a built-in integration with Atlassian's JIRA issue management system. The integration provides the power of creating JIRA defect tickets directly from TeamServer with all of the necessary information about a vulnerability. The integration will generate an exception when a field tied to a JIRA project is marked as **Required** and TeamServer does not have that information to send to JIRA. The TeamServer integration with JIRA is designed for a lightweight passing of the following values:

* Title
* Summary
* Reporter
* Assignee

The remaining fields will either default to their defined default values or they will remain **NULL**. TeamServer will not pass any additional content to JIRA via the integration.


## Solution

At the present moment there are no workarounds within Contrast TeamServer to handle required fields. The most effective workaround is to configure the field in JIRA as **Optional**.

