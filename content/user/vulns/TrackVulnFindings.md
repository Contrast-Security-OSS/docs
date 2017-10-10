<!--
title: "Track Vulnerability Findings"
description: "Overview of tracking vulnerability findings"
tags: "user track vulnerability finding management quick start guide"
-->

Contrast gives you the ability to send vulnerabilities to bugtracker integrations or by email to notify users who don't have access to Contrast. Integrations allow you to plan and maintain timely patching to protect against attacks, as well as streamline your workflows by sending vulnerabilities directly to your tool to orchestrate standard development processes. You can also have Contrast notify you if there are any new high or critical vulnerabilities found in your application. 

Contrast offers integration with the following bugtrackers:

* JIRA
* Bugzilla
* Serena Business Management
* TFS 

Organization administrators can set up any of these bugtrackers and other integrations - including Slack, HipChat or any generic WebHook integration - by going to the **User menu> Organization Settings > Integrations tab**.

For more information, read the article on [Integrations](admin-orgintegrations.html).

## Custom Processing

Vulnerability data can also be dumped to CSV or XML file for custom processing. From the **Vulnerabilities** page, you can select all or any number of vulnerabilities and click the paper airplane icon to export them into a spreadsheet.  

If you want to gather this data outside of the interface, Contrast also provides robust [APIs](https://api.contrastsecurity.com/) where you can explore even more information. Read the [Vulnerabilities API](tools-api.html#api-about) for more details.
