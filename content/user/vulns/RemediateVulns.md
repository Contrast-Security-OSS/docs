<!--
title: "How to Fix Vulnerabilities"
description: "Overview of remediating vulnerabilities"
tags: "user remediate vulnerability quick start guide fix"
-->

Find information on solutions and techniques as well as best coding practices to resolve a vulnerability by delving into Contrast's overview of the issue which will explain why it was flagged. Contrast also provides a **How To Fix** section which gives steps on resolving the issue.

## Check a Fixed Vulnerability
You fixed your vulnerability, but how can you verify that in Contrast? There are a few things you can do from the application page:

* **Replay the request:** If the issue is remediated and marked accordingly, you can replay the HTTP request under the HTTP Info tab in the Vulnerabilities tab to see if the issue is fixed. If it isn't fixed, the issue reappears with a status of Reported.
* **Check build number:** For each application, you can assign it a build version number. By adding the property -Dcontrast.override.appversion to the -javaagent command, you can use this as a filter and verify whether the issue still exists for this build version by clicking the Advanced link and the Build Number dropdown.
* **Check by time unit tests:** You can also filter by the time at which your unit tests were run, and set a date range to view your vulnerabilities in the Set Date Range input field above the vulnerabilities grid.

You can find additional properties in articles on [Java Agent System Properties](installation-javaconfig.html#system) and [.NET Agent Configuration](installation-netconfig.html). 