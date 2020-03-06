<!--
title: "Contrast 3.7.1 - February 2020"
description: "Contrast 3.7.1 February 2020"
tags: "3.7.1 February Release Notes"
-->

## Release date:
March 4, 2020

### New features and improvements

**LDAP-based automated group provisioning**
Administrators can leverage LDAP groups to automatically provision or deprovision users within Contrast groups at login time. When this feature is enabled for LDAP-based authentication, users are added to a Contrast group for a corresponding LDAP group and removed from Contrast groups that aren't allowed per the group mapping configuration. Go to the **User menu > System Settings > Authentication** to see the options in the UI.

**Ghostcat CVE-2020-1938**
A vulnerability was recently discovered in the Apache JServ Protocol (AJP) that affects Apache versions 9.0.0.M1 to 9.0.0.30, 8.5.0 to 8.5.50 and 7.0.0 to 7.0.99. For this release, Tomcat was upgraded from version 7.0.92 to version 9.0.31, which is not susceptible to these vulnerabilities. Customers who are using AJP and Contrast on-premise version 3.7.0.709 or lesser should upgrade

**Generic webhook upgrades**
The payload of the generic webhooks has been expanded to include more fields and return more information depending on the attack, vulnerability, or other notification. Users can now get information on Application ID, Trace ID, Vulnerability Rule, Environment, Severity, Status, Organization ID, Server ID, and Server Name if the information is available and can be formatted with the webhook configured.


## Agent Updates

### Java Agent Summary

**Agent versions released this month:** 3.7.1.13527, 3.7.1.13581

#### Bug Fixes:
* Assess lacks support for HTTP/2 connections on Jetty.
* Accuracy problems occur with the AWS Java SDK.
* Configurations on TeamServer are not being honored as expected due to Assess rule configuration precedence.

#### New features and improvements:
Contrast's work to support Java 11 applications culminates in our 3.7.1 release with full support for Java 11 systems. Additionally, we have fixed a handful of accuracy problems, added Assess support for SQLite, and tuned our JDBC inspection to reduce overhead on our users' database connections. Starting with our 3.7.1.13581 release, the contrast-java-agent RPM packages on pkg.contrastsecurity.com are now GPG signed.

### Node.js Agent Summary 

**Agent versions released this month:** 2.12.0

**Language versions supported:** 10, 12

#### Bug fixes:
* Server-side React page rendering is instrumented by default.
* Agent not functioning correctly with the latest Node.js version 12.16.0.
* Use of `_headers` in the response object is deprecated. This was revised to use  `getHeaders()`.

#### New features and improvements:
This month's work contains internal architecture improvements, improved testing and test cases. Work is also progressing on new Protect functionality for the agent.The Node.js agent now supports the LoopBack 3 framework. Node.js language version 8 is no longer supported as of agent version 2.11.0.

### Python Agent Summary 

**Agent versions released this month:** 2.6.1, 2.7.0

**Language versions supported:** 2.7, 3.5-3.7

#### Bug fixes:
* Python Assess is prevented from collecting findings with older versions of Werkzeug.
* Using the Jinja2 templating engine causes false positives.
* Compilation macro error occurs regarding reproducible builds on certain systems.
* Django version info for older versions of the framework causes issues.

#### New features and improvements:
This month's work continued hardening Python Assess and included updates to vulnerability accuracy and reporting. The 2.7.0 version of the agent includes improved support for older versions of Django and Werkzeug, better stability for the pymysql, psycopg2, and pycassa database adapters, and greater specificity for XSS when using the Jinja templating engine.

### Ruby Agent Summary 

**Agent versions released this month:** 3.5.1, 3.5.2, 3.5.3, 3.5.4, 3.6.0 (minor)

**Language versions supported:** 2.4-2.6

#### Bug fixes:
* Rails style parameters in which Hash keys are passed in as nested parameter names is not handled well.

#### New features and improvements:
This most recent minor release contains internal improvements, including a reduction in object creation resulting from monkey patching for security analysis. In addition, we have refactored our evaluation of constants to reduce startup time and enhanced our support for the prepend monkeypatch style favored by Rails 6.

### .NET Agent Summary

**Agent versions released this month:**
NET Framework: 20.2.1, 20.2.2, 20.2.3 
.NET Core: 1.2.0, 1.2.1, 1.2.2

**Language versions supported:**
.NET Framework: 3.5, 4.0, 4.5, 4.5.1, 4.5.2, 4.6, 4.6.1, 4.6.2, 4.7, 4.7.1, 4.7.2, 4.8
.NET Core: 2.1, 2.2, **3.0, 3.1**

#### Bug fixes:
* Observed routes were not reported if the .NET agent was configured to use a proxy for communication with Contrast.
* .NET agent could stop using the session ID specified via configuration after a period of time.
* The `x-www-form-urlencoded` parameters could be reported as parameter keys.
* .NET Core agent would not change Protect rule modes after initialization.

#### New features and improvements:
Most significantly, this release adds support for .NET Core 3.0 and 3.1. Added new gadgets for Protect Untrusted Deserialization and a session timeout rule for .NET Core. 
