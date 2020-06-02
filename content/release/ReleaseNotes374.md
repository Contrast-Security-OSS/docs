<!--
title: "Contrast 3.7.4 - May 2020"
description: "Contrast 3.7.4 May 2020"
tags: "3.7.4 May Monthly Release News"
-->

# Monthly Release News - May 2020

This page highlights all Contrast hosted, on-premises and agent releases over the past month.

**3.7.4 on-premises release date:** June 2, 2020

**New and improved:**

- For on-premises customers, daily exports of our library data are now available for download. Airgap environments can now update versions without updating the Contrast environment.
- A new integration plugin beta displays vulnerability information directly in Visual Studio Code so developers can quickly and easily learn about security issues found in their application during functional testing, shifting security left.

**Important notes:**

- With this release the .NET Framework agent has forked into two agents. The modern agent will continue to be developed to support recent versions of the .NET Framework, CLR and Windows OS versions. The legacy agent has all of the current features of the .NET Framework agent and will receive critical bug fixes but otherwise will not be further developed.
- Previously, organizations with very large numbers of Jira users could time out when attempting to set up a Jira integration in Contrast. We have scaled our Jira integration so that this is no longer an issue.

**Bug fixes:**

These bugs have been fixed in the past month:
- SUP-549, 1386 (SEC-530, JAVA-455, 1201) Protect was returning false positives and delivering duplicate attack events for some customers.
- SUP-306 (TS-35) When upgrading Contrast, SQL backup files were silently deleted.
- SUP-1426 (TS-3129) Null values in mapping application score triggered error messages.
- SUP-1287, 1432 (JAVA-1191) Customers experienced performance degradation in Protect. This was remedied with significant performance improvements to the CMD Injection, XSS and SQLi rules.

## Java agent - May 2020

**Language versions currently supported:** Java 1.6 - Java 11

**Agent versions released during the past month:** 3.7.4.14937

**New features and improvements:**

- Added support for (WebSphere) Route Discovery for Servlet 2.5 Declarative Servlets.
- Increased sensitive data masking coverage, specifically for SQLi, XSS, Command Injection, Path Traversal, CSRF, ReDoS, OGNL Injection.

**Bug fixes:**

- XXE vulnerability missed in Assess but flagged as path traversal.
- UI displaying blocked and exploited HTTP Method Tampering events.
- Protect was receiving false negatives for XSS Bypass via Bug Bounty.
- Spring auto binding rule causing false negatives.
- Protect Path Traversal False Positive due to base64 null char.
- NPE in `ContrastHttpRouteRegistrationWatcherDispatcherImpl`
- ReportFindings Acceptance Test Annotation is Broken

## .NET Framework agent - May 2020

**Language versions currently supported:** .NET Framework: 4.7.1, 4.7.2, 4.8

**Agent versions released during the past month:** 20.5.1

**New features and improvements:**

- Improved detection of dangerous path use in Protect; specifically, when interacting with the file system (path-traversal-semantic-dangerous-paths rule) and in arguments to OS commands (cmd-injection-semantic-dangerous-paths rule).

**Important notes:**

- Beginning with this release, the minimum supported operating system is Windows Server 2012 and the minimum .NET Framework version is .NET 4.7.1.
- The legacy .NET Framework agent maintains support for Windows Server 2008 and older .NET Framework versions. The legacy agent has all of the current features of the .NET Framework agent and receives critical bug fixes but otherwise will not be further developed.

**Bug fixes:**

- When an application sent a request to the same URL as the current request, the agent would report an SSRF vulnerability. This is fixed now.
- When the agent would report an ​xcontenttype-header-missing​​ vulnerability, it was rejected due to missing information. The agent now sends all expected information for this vulnerability.

## .NET Core agent - May 2020

**Language versions currently supported:**.NET Core: 2.1, 2.2, 3.0, 3.1

**Agent versions released during the past month:** 1.5.3

**New features and improvements:**

- Improved detection of dangerous path use in Protect; specifically, when interacting with the file system (path-traversal-semantic-dangerous-paths rule) and in arguments to OS commands (cmd-injection-semantic-dangerous-paths rule).
- The agent will no longer attempt to load under .NET Core versions less than 2.1 as these versions are not supported.

**Bug fixes:**

- When an application sent a request to the same URL as the current request, the agent would report an SSRF vulnerability. This is fixed now.
- When the agent would report an ​xcontenttype-header-missing​​ vulnerability, Contrast would reject the vulnerability report due to missing information. The agent now sends all expected information for this vulnerability.
- When an instrumented application closed the response stream, the agent could cause an application error. This is fixed now.
- When an instrumented application seeked within a response stream, the agent could cause an application error. This is fixed now.

## Node.js agent - May 2020

**Language versions currently supported:** 10 LTS and 12 LTS

**Agent versions released during the past month:** 2.15.0 

**Important notes:**

- New recommendations for ​[installing and running the Node.js agent](https://docs.contrastsecurity.com/installation-nodeinstall.html) ​​have been released.

**Bug fixes:**

- The customer application would fail to start when all Assess rules were disabled. This is fixed now.
- The customer application would fail to start because worker threads would hang and generate multiple processes with the same pid. This is fixed now.
- The agent would not output the security log to stdout (or stderr). This is fixed now.
- Duplicated vulnerabilities were being reported for unique routes. This is fixed so that TeamServer displays distinct findings for each request uri.
- An out-of-memory error caused by a regex match resulted in an infinite loop. This has been fixed.
- Node.js agent’s migration to npm and incorrectly bundled modules made it seem like the agent was missing two dependencies. This has been resolved.

## Python agent - May 2020

**Language versions currently supported:** Python 2.7 and 3.5-3.8

**Agent versions released during the past month:** 2.10.0

**New features and improvements:**

- Added support for Django Rest Framework.
- Added copyright to all agent files.
- Removed the agent's external dependency on the wrapt package.
- Improved INFO level logging for easier tracking of applications with multiple processes.

**Bug fixes:**

- When running the agent with protobuf-3.6.1 sometimes the application crashed, which has now been resolved with a newer protobuf version.

## Ruby agent - May 2020

**Language versions currently supported:** 2.5-2.7

**Agent versions released during the past month:** 3.10.1, 3.10.2, 3.11.0

**New features and improvements:**

- Improved Stack Trace capturing.
- Improved library analysis performance leading to a decrease in first request penalty.

**Important notes:**

- The Agent now supports TRACE level logging. Those running with DEBUG logging should see a significant decrease in logged events.
