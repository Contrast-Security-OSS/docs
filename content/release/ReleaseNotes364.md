<!--
title: "Contrast 3.6.4 - May 2019"
description: "Contrast 3.6.4 May 2019"
tags: "3.6.4 May Release Notes"
-->

## Fixes

* Auto-remediation settings did not immediately update vulnerability statuses.
* Attack even data was not displayed properly in Diagnostics.
* Clicking the server count in an application **Overview** page did not direct you to the correct servers. 
* Users weren't able to set up SSO with Azure. 
* Email notifications for compliance policy violations didn't include the correct link to the UI.

## Improvements

Enable Server Messages to stay on top of agent updates. When your agent version is out of date, Contrast will send you an email with recommendations for updates. You can also check your notifications in the Contrast UI, or hover over the warning icon in the **Servers** grid and your server's **Overview** tab for a reminder. To enable Server Messages, go to the **Notifications** page from **Your Account** or **Organization Settings**.

## Agent Updates

### Java summary

Check back next release for more updates!

### .NET summary 

The .NET team improved the accuracy and performance of Protect Command Injection as well as the accuracy of Protect SQL-Injection and Reflected XSS. We implemented a Server Side Request Forgery (SSRF) rule for Assess. We also fixed a bug where the Tray would occasionally fail to update agent status. 

### Node.js summary 

The Node team focused on broadening framework support. We added support for the Koa framework as well as Route Coverage support for Koa for applications using `koa-router`. We also added Route Coverage support for Hapi. We added `agent.heap_dump` [configuration settings](installation-nodeconfig.html#node-yaml) to allow periodic creation of heap dumps for debugging v8 crashes and memory issues. Bug fixes included:

* Creating an Express router with no routes no longer causes an error
* Passing an object to `sequelize.query` no longer causes the sensor to fail
* The `ast-types` module no longer crashes when loaded with Assess enabled

### Ruby summary 

The Ruby team focused on expanding our feature offering for this release. We expanded our rule coverage to include support for several new Assess rules, with a focus on rules responsible for HTTP Session security evaluation. To improve our customer support, we also added the ability to generate heap dumps directly from the agent. Finally, to further our effort to improve our interoperability with other testing infrastructures, we've continued to transition our sensor weaving into *C*, and we've addressed bugs causing an incompatibility with the FactoryBot testing framework.

### Python summary

The Python team refactored our middleware code to work better with the range of frameworks we support, including older versions of Django. Improvements to agent startup eliminated some noisy trackback logs from configuration and Route Coverage. Bug fixes include the XXE rule with SAX incorrectly patching and improperly setting Django headers in responses.


