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
* Email notifications for compliance policy violations didn't include the correct link.

## Improvements

* Enable Server Messages to stay on top of agent updates. When your agent version is out of date, Contrast will send you an email with recommendations for updates. You can also check your notifications in the Contrast UI, or hover over the warning icon in the **Servers** grid and your server's **Overview** tab for a reminder. To enable Server Messages, go to the **Notifications** page from **Your Account** or **Organization Settings**.

* Turn on our new OSS licensing feature for your organization to see enhanced library license data throughout the UI and exported files. To enable the feature, go to the **Organizations** tab in your SuperAdmin view, and turn on **OSS Licensing** in the **Add** or **Edit Organizations** form. To see the data in the **Libraries** grid, hover over a library name or use the License filter to narrow down results. You can also see the data in a libraries' **Overview** page. 

* Improved mapping of vulnerabilities to artifacts. Improved user experience around the parsing and displaying of artifact licenses.

## Agent Updates

### Java summary

Check back next release for more updates!

### .NET summary 

The .NET team improved the accuracy and performance of Protect Command Injection as well as the accuracy of accuracy of Protect SQL-Injection and Reflected XSS. We implemented a Server Side Request Forgery (SSRF) rule for Assess. We also fixed a bug where the Tray would occasionally fail to update agent status. 

### Node.js summary 

The Node team focused on broadening framework support. We added support for the Koa framework as well as Route Coverage support for Koa for applications using `koa-router`. We also added Route Coverage support for Hapi. We also added `agent.heap_dump` [configuration settings](installation-nodeconfig.html#node-yaml) to allow periodic creation of heap dumps for debugging v8 crashes and memory issues. Bug fixes included:

* Creating an Express router with no routes no longer causes an error
* Passing an object to `sequelize.query` no longer causes the sensor to fail
* The `ast-types` module no longer crashes when loaded with Assess enabled

### Ruby summary 

The Ruby team has been focused on expanding our feature offering for this release. We expanded our rule coverage to include support for several new Assess rules, with a focus on rules responsible for HTTP Session security evaluation. To improve our customer support, we also added the ability to generate heap dumps directly from the agent. Finally, in continuing with our effort to improve our interoperability with other testing infrastructures, we've continued to transition our sensor weaving into *C*, and we've addressed bugs causing an incompatibility with the FactoryBot testing framework.

### Python summary

The Python team refactored our middleware code to work better with the larger range of frameworks we support, including older versions of Django. Improvements to agent startup eliminated some noisy trackback logs from config and route coverage. Some bugs fixed were the XXE rule with sax incorrectly patching and improperly setting Django headers in responses.


