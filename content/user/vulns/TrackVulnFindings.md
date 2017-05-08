<!--
title: "Track Vulnerability Findings"
description: "Overview of tracking vulnerability findings"
tags: "user track vulnerability finding management quick start guide"
-->

Contrast gives you the ability to send vulnerabilities to bugtracker integrations or by email to notify or inform users who don't have access to Contrast. This allows you to plan and maintain timely patching to protect against attacks. We offer integration with the following bugtrackers:

* JIRA
* Bugzilla
* Serena Business Management
* TFS (coming soon)

Organization administrators have the ability to set up any of these bugtrackers and a bunch of other integrations - including Slack, HipChat or any generic WebHook integration - by selecting **Organization Settings** in the user menu and then **Integrations** in the left navigation. Through integrations, you can streamline your workflows by sending vulnerabilities found in Contrast directly to your tool to orchestrate standard development processes. You can also have Contrast notify you if there are any new high or critical vulnerabilities found in your application. 

For more information, read the article on [Integrations](admin_orgsettings.html#integrate).

## Custom Processing
Vulnerability data can also be dumped to CSV or XML for custom processing. From the **Vulnerabiities** page, you can select all or any number of vulnerabilities to export via the paper airplane icon.  

If you want to gather this data outside of the Contrast UI, we also provide robust APIs to do so. See our article on [Vulnerabilities API](tools_apivulns.html).
