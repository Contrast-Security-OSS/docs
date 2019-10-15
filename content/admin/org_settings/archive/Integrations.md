<!--
title: "Integrations"
description: "Adding Integrations to Contrast"
tags: "Admin settings integrations hipchat generic slack microsoftTeams webhook teamserver bugtracker bugzilla jira serena"
-->


To authorize and connect tools with Contrast to streamline your workflows, log in to your Contrast account as an **Organization Administrator**. From the User dropdown menu, select **Organization Settings** and then the **Integrations** tab in the left navigation.

## Slack Integration

Contrast supports Slack integration! With this new connection you can receive notifications from Contrast in your configured Slack instance using a format similar to in-app notifications.

### Setup

To add, go to your team's **Build** settings in Slack:

* Add a new **Incoming Webhooks** custom integration
* Choose the appropriate channel to which to send messages
* Copy the **Webhook URL**

To connect in Contrast:

* Navigate to the **Integrations** tab under **Organization Settings**
* Click **Connect** within the Slack row
* Name the integration and paste the URL
* Select the application(s) for which you want to enable notifications
* Click **Save**

You are connected!

---
## Microsoft Teams Integration

Contrast supports Microsoft Teams integration! With this new connection you can receive notifications from Contrast in your configured Microsoft Teams instance using a format similar to in-app notifications.

### Setup

To add, go to your team in Microsoft Teams:

1. Choose the appropriate channel to which to send messages, select the 3 dots to the right of the that channel name, then select **connectors**
2. Select Configure beside **Incoming Webhook**
3. Fill out the information, select **Create** then Copy the **Webhook URL**

To connect in Contrast:

1. Navigate to the **Integrations** tab under **Organization Settings**
2. Click **Connect** within the Microsoft Teams row
3. Name the integration and paste the URL
4. Select the application(s) for which you want to enable notifications
5. Click **Save**

You are connected!

---

## HipChat Integration

Contrast supports integration with HipChat as well! With this new connection you can receive notifications from Contrast in your configured HipChat channel using a format similar to in-app notifications.

### Setup

On the HipChat website, log in as a user with at least **Send Notification** and **View Room** scopes. Typically this is an admin user.

* Edit your profile and click **API access**
* Create a new token and add at least the **Send Notification** and **View Room** scope
* Copy the token created

To connect in Contrast:

* Navigate to the **Integrations** tab under **Organization Settings**
* Click **Connect** within the HipChat row
* Name the integration, paste the token into the token input field, and select the appropriate room from the dropdown
* Select the application(s) for which you want to enable notifications
* Click **Save**

You are connected!

---

## Generic Webhook Integration

Contrast also supports a generic webook integration. Generic webhooks allow you to receive notifications on any URL that receives POST messages. We currently support a basic format with the fields 'title' and 'message'.

### Example

```javascript
{
	'title':   'Contrast Security Notification',
	'message': 'Test User commented on a Insecure JSP Placement vulnerability in WebGoat. \"Fixed in CVE-2015\"'
}
```

### Setup

* Retrieve the URL to which you want Contrast to send notifications
* Navigate to the **Integrations** tab under **Organization Settings**
* Click **Connect** within the Generic Webhook row
* Name the webhook and paste the URL into the input field
* Select the application(s) you wish to filter on
* Click **Save**

You are connected!

---

## Bugtrackers

Contrast can connect to bugtrackers in order to streamline the remediation process. Individual or groups of discovered vulnerabilities can be sent directly to a configured bugtracker so that development groups may implement a fix.

### Support

Contrast supports integrations with:

1. Mozilla Bugzilla
2. Atlassian JIRA
3. Serena Business Manager

### Exporting findings

Sending vulnerabilities to the bugtracker can be done from the **Send Vulnerability** (paper plane) icon located on the **Vulnerabilities** page, or from the **Vulnerabilities** tab of an **Application Overview** page. 

In the dialog that follows, choose which information should be included when exporting the findings.

<a href="assets/images/KB3-f04_1.png" rel="lightbox" title="Bugtracker Export Options"><img class="thumbnail" src="assets/images/KB3-f04_1.png"/></a>

>**Note:** Bugtrackers must be configured before vulnerabilities can be sent.

<a href="assets/images/NoBugTracker.png" rel="lightbox" title="No Bugtrackers Available"><img class="thumbnail" src="assets/images/NoBugTracker.png"/></a>

When a vulnerability is sent to a bugtracker, the status of the vulnerability changes to **Reported** in the **Vulnerabilities** page or the **Vulnerabilities** tab of the **Application Overview** page. An arrow icon also appears beside the status in the grid row for the vulnerability. Hovering over this icon produces a tooltip that includes the bugtracker name(s) and corresponding ticket number(s). 

<a href="assets/images/Integrations-sent-to-bugtracker.png" rel="lightbox" title="Vulnerabilities sent to bugtracker"><img class="thumbnail" src="assets/images/Integrations-sent-to-bugtracker.png"/></a>

To quickly see which vulnerabilities are being tracked, select **Advanced** and **Status** in the sidebar. Hovering over the **Being Tracked** and **Untracked** options also produces a tooltip.

<a href="assets/images/Integrations-bugtracker-advanced-filter.png" rel="lightbox" title="Advanced filter"><img class="thumbnail" src="assets/images/Integrations-bugtracker-advanced-filter.png"/></a>

### Integrating with unsupported systems

If integration with an unsupported system is needed, this can be accomplished in several ways:

<a href="assets/images/KB3-f04_2.png" rel="lightbox" title="Export Format"><img class="thumbnail" src="assets/images/KB3-f04_2.png"/></a>

Method | Description
------ | -----------
**Integrate With The Contrast REST API** | You can find complete documentation here: [REST API](tools_api.html#api-about)
**Export Findings To CSV** | Findings can be exported to **Comma-Separated Values (CSV)** and imported into a bugtracker of your choice.
**Export Findings To XML** | Individual or groups of findings can be exported to **XML** format and imported into a bugtracker of your choice.


---

## JIRA Integration
Integrating JIRA with Contrast allows you to automatically generate tickets, synchronize comments and push notifications for your applications.

### Prerequisites

* JIRA account credentials (username and password)
* Permission to create issues in the target project
* A running JIRA instance accessible via HTTP to the Contrast interface
* A project to associate the application instrumented by Contrast

### Setup

In Integrations, click **Connect** in the JIRA row. In the **Connect with JIRA** page, complete the following fields. 

Field | Description
------ | -----------
**Name** | The name for the bugtracker entry; displayed when sending findings to bugtrackers
**Username** | The username for the account connected to JIRA
**Password** | The password for the specified username
**Host** | The JIRA URL; must be accessible from the Contrast interface instance being configured
---

Once you complete the fields, click **Test connection**. This process may take a few moments depending on the number of your JIRA projects. The test verifies that the JIRA instance can be reached by Contrast and that the specified user is able to log in.

Once a connection is made, select the applications that you want to be available to this bugtracker as well as customize the values for the Project, Assignee and Default Issue Type fields. You can also customize the Default Severity levels and Additional JIRA fields. Note that we automatically include any required JIRA fields to ensure that you don’t have any trouble.

<a href="assets/images/JIRA-integration-set-up.png" rel="lightbox" title="JIRA Integration"><img class="thumbnail" src="assets/images/JIRA-integration-set-up.png"/></a>

> **Note:** If you change the Project or Issue type, required and additional fields are updated. However, the interface keeps the selected values that apply to the new configuration.

---

## Configuring Bugzilla

### Prerequisites

* Bugzilla account credentials (username and password)
* A running Bugzilla application instance accessible via HTTP to Contrast
* A product, component and version to associate the application instrumented by Contrast

### Setting up the Bugzilla Integration

1. Log in to Contrast as an **Organization Administrator**
2. From the user dropdown menu, select **Organization Settings**
3. Select the **Integrations** tab in the left navigation
4. Click **Connect** in the Bugzilla row

<a href="assets/images/KB3-f04_4.png" rel="lightbox" title="Bugzilla Integration"><img class="thumbnail" src="assets/images/KB3-f04_4.png"/></a>

Option | Description
------ | -----------
**Name** | A name for the bugtracker entry. It will be displayed when sending findings to bugtrackers.
**Username** | The username for the account connected with Bugzilla
**Password** | The password for the username specified
**Host** | The URL of the Bugzilla instance
**Application** | The application you would like to map to a Bugzilla product/component
**Product** | The product in Bugzilla to map to the application
**Component** | The component in Bugzilla to map to the application
**Version** | The version in Bugzilla to map to the application
**Priority** | The priority to use when exporting findings to Bugzilla

---

Once you have configured the Bugzilla integration properties, you can verify communication via the **Test** button. This ensures that Contrast can communicate and authenticate with the Bugzilla instance as well as verify the existence of the specified Product, Component and Version.

---

## Configuring Serena Business Manager

### Prerequisites

* Serena (SBM) account credentials (username and password)
* A running SBM instance accessible via HTTP to Contrast
* A project to associate the application instrumented by Contrast

### Setting up the SBM Integration

1. Log in to the Contrast with an **Organization Administrator** account
2. From the user dropdown menu, select **Organization Settings**
3. Select the **Integrations** tab in the left navigation
4. Click **Connect** in the Serena Business Management row

<a href="assets/images/KB3-f04_5.png" rel="lightbox" title="Serena Integration"><img class="thumbnail" src="assets/images/KB3-f04_5.png"/></a>

Option | Description
------ | -----------
**Name** | A name for the bugtracker entry. It will be displayed when sending findings to bugtrackers.
**Username** | The username for the account connected to the SBM instance
**Password** | The password for the username specified
**Host** | The URL to the SBM instance
**Application** | The application you would like to map to an SBM instance
**Project ID** | The SBM Project ID to associate with this application

---

Once you have configured the Serena integration properties, you can verify communication via the **Test** button. This will ensure that Contrast can communicate and authenticate with the Serena instance as well as verify the existence of the specified **Project**.

