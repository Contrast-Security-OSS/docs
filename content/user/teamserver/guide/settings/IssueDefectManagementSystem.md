<!--
title: "Issue And Defect Management Systems"
description: "Information on the issue and defect management system"
tags: "TeamServer issue defect management"
-->

TeamServer can connect to an **Issue and Defect Management System** in order to streamline the remediation process. Individual or groups of discovered vulnerabilities can be sent directly to a configured bug tracker so that development groups may implement a fix.

## Issue And Defect Management System Support

### TeamServer Supports Integrations With:

1. Mozilla Bugzilla
2. Atlassian JIRA
3. Serena Business Manager

### Exporting Findings To Issue And Defect Management Systems
Sending vulnerabilities to the bug tracker can be done from the **Send Vulnerability** (paper plane) icon located on the **Vulnerabilities** page, or from the **Vulnerabilities** tab of an **Application Overview** page. 

In the dialog that follows, choose which information should be included when exporting the findings.

<a href="assets/images/KB3-f04_1.png" rel="lightbox" title="Bugtracker Export Options"><img class="thumbnail" src="assets/images/KB3-f04_1.png"/></a>

>**Note:** Bug trackers must be configured before vulnerabilities can be sent.

<a href="assets/images/NoBugTracker.png" rel="lightbox" title="No Bugtrackers Available"><img class="thumbnail" src="assets/images/NoBugTracker.png"/></a>

## Integrating With Unsupported Systems

If integration with an unsupported system is needed, this can be accomplished in several ways:

### Integrate With The TeamServer REST API

You can find complete documentation here: [REST API](dev_api1.html#intro)

### Export Findings To CSV

Findings can be exported to **Comma-Separated Values (CSV)** and imported into a bug tracker of your choice.

### Export Findings To XML

Individual or groups of findings can be exported to **XML** format and imported into a bug tracker of your choice.

<a href="assets/images/KB3-f04_2.png" rel="lightbox" title="Export Format"><img class="thumbnail" src="assets/images/KB3-f04_2.png"/></a>


## Configuring Atlassian JIRA

### Prerequisites

* JIRA account credentials (username and password)
* The user must have permission to create issues in the target project
* A running JIRA instance accessible via HTTP to the Contrast TeamServer
* A project to associate the application instrumented by Contrast

### Setting Up The JIRA Integration

1. Log in to TeamServer as an **Organization Administrator**
2. From the user dropdown menu, select **Organization Settings**
3. Select the **Bugtrackers** tab in the left navigation
4. Click the **+ Add JIRA** button

<a href="assets/images/KB3-f04_3.png" rel="lightbox" title="JIRA Integration"><img class="thumbnail" src="assets/images/KB3-f04_3.png"/></a>

Option | Description
------ | -----------
**Name** | A name for the bugtracker entry. It will be displayed when sending findings to bug trackers.
**Username** | The username for the account connected to Atlassian JIRA
**Password** | The password for the username specified
**Confirm Password** | Confirm the password for the username specified
**Host** | The JIRA URL - must be accessible from the TeamServer instance being configured
**Application** | The application you would like to map to an Atlassian JIRA instance
**Project Name** | The name of the JIRA Project to map to this application
**Assignee** | The username of the account that issues should be assigned to when they are created

---

Once the Bugtracker is configured, you will want to verify the configuration by using the **Test** button. The test will verify that the JIRA instance can be reached by TeamServer and that the specified user is able to log in.

## Configuring Bugzilla

### Prerequisites

* Bugzilla account credentials (username and password)
* A running Bugzilla application instance accessible via HTTP to the Contrast TeamServer
* A product, component and version to associate the application instrumented by Contrast

### Setting Up The Bugzilla Integration

1. Log in to TeamServer as an **Organization Administrator**
2. From the user dropdown menu, select **Organization Settings**
3. Select the **Bugtrackers** tab in the left navigation
4. Click the **+ Add Bugzilla** button

<a href="assets/images/KB3-f04_4.png" rel="lightbox" title="Bugzilla Integration"><img class="thumbnail" src="assets/images/KB3-f04_4.png"/></a>

Option | Description
------ | -----------
**Name** | A name for the bug tracker entry. It will be displayed when sending findings to bug trackers.
**Username** | The username for the account connected with Bugzilla
**Password** | The password for the username specified
**Confirm Password** | Confirm the password for the username specified
**Host** | The URL of the Bugzilla instance
**Application** | The application you would like to map to a Bugzilla product/component
**Product** | The product in Bugzilla to map to the application
**Component** | The component in Bugzilla to map to the application
**Version** | The version in Bugzilla to map to the application
**Priority** | The priority to use when exporting findings to Bugzilla

---

Once you have configured the Bugzilla integration properties, you can verify communication via the **Test** button. This will ensure TeamServer can communicate and authenticate with the Bugzilla instance as well as verify the existence of the specified Product, Component and Version.

## Configuring Serena Business Manager

### Prerequisites

* Serena (SBM) account credentials (username and password)
* A running SBM instance accessible via HTTP to the Contrast TeamServer
* A project to associate the application instrumented by Contrast

### Setting Up The SBM Integration

1. Log in to the TeamServer with an **Organization Administrator** account
2. From the user dropdown menu, select **Organization Settings**
3. Select the **Bugtrackers** tab in the left navigation
4. Click the **+ Add SBM** button

<a href="assets/images/KB3-f04_5.png" rel="lightbox" title="Serena Integration"><img class="thumbnail" src="assets/images/KB3-f04_5.png"/></a>

Option | Description
------ | -----------
**Name** | A name for the bug tracker entry. It will be displayed when sending findings to bug trackers.
**Username** | The username for the account connected to the SBM instance
**Password** | The password for the username specified
**Host** | The URL to the SBM instance
**Application** | The application you would like to map to an SBM instance
**Project ID** | The SBM Project ID to associate with this application

---

Once you have configured the Serena integration properties, you can verify communication via the **Test** button. This will ensure that TeamServer can communicate and authenticate with the Serena instance as well as verify the existence of the specified **Project**.
