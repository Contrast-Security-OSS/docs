<!--
title: "Organization Settings"
description: "Overview of administrating and managing an organization."
tags: "TeamServer organization settings"
-->

Organization administrators have access to a number of configuration settings specific to operating and managing an organization. This includes administering users as well as setting up password policy, integrations, server defaults and more. You can find these settings by selecting **Organization Settings** in the [User menu](user_tsguideui.html#overview).

<a href="assets/images/Settings_Nav.png" rel="lightbox" title="Organization Settings"><img class="thumbnail" src="assets/images/Settings_Nav.png"/></a>
 
## General Information And Licensing
View basic information about your organization and configure high-level preferences such as Date and Time formats. Get a picture of your organization's licensing. A summary shows the number of licenses being used as well as the number of licenses available to allocate to other assets. 

## Groups
[Organization groups](user_tsguideset.html#group) can be viewed, created, edited and deleted. Organization administrators use groups to designate a user's organization and application role. This provides the ability to customize what users can see and do in Contrast.

## Users
Manage users for an organization, including the ability to [add](user_tsguideset.html#user), edit or delete. Users can be assigned a default group (or role), be designated for API-Only use, and unlocked if they've been locked out. 

## Security
Organization administrators can manage [password policy](admin_tsconfig.html#pw), [IP restrictions](admin_tsconfig.html#ip), [two-step verification](admin_tsconfig.html#tsv) and session timeouts. In addition, an audit log is available and searchable by keyword and date.

## API
Contrast APIs are available to organization administrators for allowing access to other services. Get API keys emailed or rotate keys as needed. Learn more about it in our [API Documentation](dev_api3.html#openapi).

## Integrations
Contrast offers basic [integrations](user_tsguideset.html#integrate) with various tools including bugtrackers (JIRA, Bugzilla and Serena) and notification channels (Slack, HipChat and generic Webhooks). Authorize and connect the tools needed to streamline workflows.

## Servers
Server Settings provide default configurations to be applied to new servers (agents) being brought on board. You can customize these configurations specifically to each environment. 

<a href="assets/images/Server_Settings.png" rel="lightbox" title="Server Settings"><img class="thumbnail" src="assets/images/Server_Settings.png"/></a>

### Log level 
The log level field allows you to control which events are processed by server logging, and can help you more effectively capture events. We generally recommend that you run in **ERROR** mode unless a problem occurs and you're asked to collect more metrics by support. 

Our logs follow the general Log4J standard, so we honor their level designations as much as possible. Contrast offers the following log levels:

* **ERROR:** Designates error events that might still allow the application to continue running.
* **WARN:** Designates potentially harmful situations.
* **INFO:** Designates informational messages that highlight the progress of the application at coarse-grained level.
* **DEBUG:** Designates fine-grained informational events that are most useful to debug an application.
* **TRACE:** Designates finer-grained informational events than the DEBUG.

> **Source:** https://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/Level.html

### Automatic server cleanup
Automatic server cleanup enables a Contrast background task to run every five minutes to check if there is an organization with cleanup policies configured. For each organization with cleanup policies, Contrast checks if there are one or more servers with no activitiy received within the timeframe configured in the policy. Servers with no activity are disabled automatically and are no longer visible in the Servers grid. Contrast maintains information on vulnerabilities and attacks related to these servers, even after they're disabled. 

> Note: Server cleanup only applies to Java and .Net servers.

#### Setting automatic cleanup policies

The **General** section of the **Servers** page includes a checkbox to **Enable automatic server cleanup**. After selecting the box, default values are loaded into the fields as shown.

<!-- SCREENSHOT -->

### Assessment options
Assessment provides detailed information on vulnerabilities discovered by Contrast so that you may track, share and receive remediation guidance.<!-- Determine whether Assessment should be ON or OFF by default. --> Turning Assessment on allows you to enable sampling and designate how stacktraces are captured. Sampling allows Contrast to selectively analyze requests in order to avoid repeat analysis and improve server performance. Capturing stacktraces allows the server to collect data about the current state, including the lines of code being executed. Turning this off results in less performance on the application(s); however, developers have less clarity on where underlying security issues are occurring.

### Protection options
Protection provides monitoring of your servers and applications - identifying and blocking attacks in real time.<!-- Determine whether Protection should be ON or OFF by default. --> Turning Protection on gives you the option to bot block, which allows Contrast to use simple signaturing to block traffic from scrapers, attack tools and other unwanted automation. You can also output events to syslog for one or multiple servers. 

Read our article on [Output to Syslog](user_tsguideservers.html#syslog) to learn more about enabling this feature. 

## Notifications
[Notifications](user_tsguideset.html#notifications) provide a mechanism for users of Contrast to be alerted in specific cases, such as the discovery of a vulnerability or an application being attacked. Based on what's enabled, these notifications can occur in Contrast and/or via email. Organization administrators can set the default notification settings for all users in their organization. 

## Report Settings
Report settings offer a single interface for organization administrators to define the template of hard copy reports. This essentially involves defining the default values for reports such as:

* Report Type
* Vulnerability Status
* Custom Footer

## Score Settings
Organization administrators can customize score settings for libraries by selecting **Organization Settings** in the User menu and **Score Settings** in the sidebar. Settings are separated into two sections: **Overall Score** and **Library Score**. 

### Overall Score 

* **Default Scoring** is the average of your application's library score and its custom code score.

* **Custom Code-Only Scoring** ignores library score when calculating the overall application score. You have the option to select languages, as shown. Administrators can also search against all application languages.

### Library Score 

* **Default Scoring** uses an algorithm that includes vulnerabilities as well as the age and versioning of a library. 
* **Vulnerability-Only Scoring** bases scoring solely on vulnerabilities.

<a href="assets/images/Library_Score_Settings.png" rel="lightbox" title="Score Settings"><img class="thumbnail" src="assets/images/Library_Score_Settings.png"/></a>

You can also configure policy settings in **Policy Management** so that any library in violation automatically receives a failing score (F). Once these settings are chosen, you'll see an alert message in **Score Settings**. Clicking the **policy** link in the alert navigates you to **Library Policy**, where administrators may view and revise these settings.

<!-- Let's link to new policy management section once created -->

