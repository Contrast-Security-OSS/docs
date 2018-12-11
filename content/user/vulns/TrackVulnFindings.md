<!--
title: "Track Vulnerability Findings"
description: "Overview of tracking vulnerability findings"
tags: "user track vulnerability finding management quick start guide"
-->

Contrast gives you the ability to send vulnerabilities via bugtracker integrations or by email to notify users who don't have access to Contrast. Integrations allow you to plan and maintain timely patching to protect against attacks, as well as streamline your workflows by sending vulnerabilities directly to your tool to orchestrate standard development processes. You can receive [notifications](admin-orgsettings.html#org-notify) if Contrast finds any new high or critical vulnerabilities in your application. 

## Integrations 

Contrast offers integration with the several bugtrackers, including Jira, Bugzilla, Serena Business Management and VSTS/TFS. OrgAdmins can set up any of these bugtrackers and other integrations - including Slack, HipChat or any generic WebHook integration - by going to the **User menu> Organization Settings > Integrations tab**. To see a full list of integrations, and read more about each option, go to the [Integrations](admin-orgintegrations.html) page.

## Custom Processing

Vulnerability data can also be dumped to a CSV or XML file for custom processing. From the **Vulnerabilities** page, select all or any number of vulnerabilities, and click the paper airplane icon to export them into a spreadsheet.  

If you want to gather this data outside of the UI, Contrast also provides robust [APIs](https://api.contrastsecurity.com/) where you can explore even more information. Read [About the Contrast API](tools-about.html#api-about) for more details.
