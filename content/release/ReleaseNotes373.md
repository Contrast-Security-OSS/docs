<!--
title: "Contrast 3.7.3 - April 2020"
description: "Contrast 3.7.3 April 2020"
tags: "3.7.3 April Monthly Release News"
-->

# Monthly Release News - April 2020

This page shows highlights from our all Contrast hosted, on-premises and agent releases over the past month.

**3.7.3 on-premises release date: ** May 5, 2020

**New and improved:**

- In addition associating vulnerabilities, you can now also **associate both discovered and exercised routes** to build numbers, application versions, branches or repositories **using session metadata**. This means you can also query route information with a public API endpoint. With a single call to a public endpoint you can get detailed information on how much of an application has been exercised and where the critical vulnerabilities are.
- You now have a choice to receive individual policy violation emails or to consolidate them into a single email. Find this option under **Organization Settings \&gt; Notifications**.
- Your AppSec team can more easily assess library security risk and prioritize work with changes to surface CVE severity and make libraries easier to find. Select **Libraries** to see a **filterable list of libraries with visual display of CVE severity** for each one.

**Important notes:**

- To improve security, Contrast has updated our JRE version to Java 11 for both hosted and on-premises customers. This should not affect end users.

**Bug fixes:**

These significant bugs have been fixed in the past month:
- SUP-1244 (TS-2697,TS-1494) 3.7.2 on-premises upgrade caused Contrast server and mysqld to attempt to run as the wrong user.
- SUP-1153 (JAVA-1051) RBAV was incorrectly auto-verifying vulnerabilities.
- SUP-1172 (JAVA-1060, JAVA-1061, JAVA-1062) Protect input after a rule change caused false positives.
- SUP-1231 (DOTNET-1458) .NET agent failed to initialize after upgrade.
- SUP-1156 (TS-2526) Inconsistent authorization redirected user to login and then an unauthorized page.
- SUP-1074, 1234,1312 (JAVA-1085) WebSphere LDAP/SAML authentication breaks with newer versions of contrast

## Java agent - April 2020

**Language versions currently supported:** Java 1.6 - Java 11

**Agent versions released during the past month:** 3.7.3.14727, 3.7.3.14657

**Bug fixes: **

- When WebSphere users configured their WebSphere services with custom TLS certificates, the Contrast Java agent prematurely initialized WebSphere&#39;s certificate manager as a side-effect. This caused the WebSphere TLS connections to fail unexpectedly. This issue has been resolved by adding a special exception for WebSphere to Contrast&#39;s TLS initialization whereby Contrast will use an isolated `SSLSocketFactory` instead of the Java runtime&#39;s default system socket factory.
- When users configure their application with a session-based vulnerability auto-verification policy, and the user does not configure their Contrast agent with an explicit session\_id configuration parameter, then Contrast wrongfully auto-verifies vulnerabilities. We resolved this issue by fixing a race condition, so we can ensure that auto-verification will work as expected when the user has configured their agent to use the contrast.agent.java.standalone\_app\_name configuration.

**New features and improvements:**

- Contrast Assess more accurately detects Path Traversal vulnerabilities. Contrast Assess and Protect more accurately detect vulnerabilities and attacks respectively in Apache Struts based applications. Contrast Protect more accurately detects SQL Injection attacks.

**Important notes:**

- This release includes breaking changes to Contrast Assess route coverage reporting when used with on-premise Contrast servers version 3.7.2 and older.

## .NET Framework agent - April 2020

**Language versions currently supported:**.NET Framework: 3.5, 4.0, 4.5, 4.5.1, 4.5.2, 4.6, 4.6.1, 4.6.2, 4.7, 4.7.1, 4.7.2, 4.8

**Agent versions released during the past month:** 20.4.1, 20.4.2, 20.4.3

**Bug fixes: **

- When an application hosted on IIS was (mis)configured without a virtual path, the agent&#39;s background Windows service would crash. The agent&#39;s background Windows service now properly handles this configuration.
- A race condition around requests for configuration values that did not have default values could lead to a crash of the agent&#39;s background Windows service. The race condition has been fixed, default configuration values have been provided for all configuration options, and missing default configuration values are now properly handled.

**New features and improvements:**

- Improved handling of scenarios where the agent would write repeated errors to log files, creating larger than necessary log files.
- The agent will now log unknown configuration keys at startup. This should help with troubleshooting configuration issues (for example, invalid yaml).

**Important notes:**

- The agent&#39;s auto-update feature will no longer update the agent when running on Windows Server 2008 or servers with .NET Framework 4.7.0 or older. This change is in preparation for the upcoming fork of the Contrast .NET Framework agent. See below for more details.
- The **next** release of the .NET Framework agent will raise the minimum supported operating system to Windows Server 2012 and raise the minimum .NET Framework version to .NET 4.7.1. Support for Windows Server 2008 and older versions of the .NET Framework will be maintained via a fully featured legacy .NET Framework agent. This legacy agent will have all of the current features of the .NET Framework agent and will receive critical bug fixes but otherwise will not be the focus for future .NET development.

## .NET Core agent - April 2020

**Language versions currently supported:**.NET Core: 2.1, 2.2, 3.0, 3.1

**Agent versions released during the past month:** 1.4.0, 1.5.0

**Bug fixes: **

- When applications redirected to a URL that had been validated using Url.IsLocalUrl, the agent would still report an unvalidated redirect vulnerability. The agent will now respect the Url.IsLocalUrl validator.
- A race condition around requests for configuration values that did not have default values could lead to an unhandled error in the agent. The race condition has been fixed, default configuration values have been provided for all configuration options, and missing default configuration values are now properly handled.

**New features and improvements:**

- **Added support for Linux Azure App Service.**
- **Added support for Alpine.**
- Improved handling of scenarios where the agent would write repeated errors to log files, creating larger than necessary log files.
- The agent will now log unknown configuration keys at startup. This should help with troubleshooting configuration issues (e.g. invalid yaml).

## Node.js agent - April 2020

**Language versions currently supported:**

**Agent versions released during the past month:** 2.8.1, 2.8.2, 2.8.3, 2.9.0

**Bug fixes: **

- Fixed an issue that affected instrumentation of Python 2.7 on Ubuntu 16.10

- cls.run(() =\&gt; {
 ^
TypeError: Cannot read property &#39;run&#39; of undefined

OR

/usr/src/app/node\_modules/node\_contrast/lib.asar/AsyncStorage/index.js:188
 if (ns.active) {

TypeError: Cannot read property &#39;active&#39; of undefined

**New features and improvements:**

- **Fastify framework support:** Fastify 2.x is now a supported framework for the Contrast Node.js agent.
- **NPM availability: ** The Contrast Node.js agent can now be installed directly from the [Contrast Security public NPM repository](https://www.npmjs.com/package/@contrast/agent)
- **Pre-load capabilities:** The Node.js agent can now be run as a pre-load module using the -r flag. This is also now the recommended method of running the Contrast Node.js agent.

**Important notes:**

- Running the node agent as a runner will now generate a deprecation message. This is the deprecated syntax:

- node-contrast\&lt;app-main\&gt;
- The agent will continue to function when executed as a runner. However, we encourage customers to migrate to the new method of running the Contrast Node.js agent as this is no longer recommended.

## Python agent - April 2020

**Language versions currently supported:** Python 2.7 and 3.5-3.8

**Agent versions released during the past month:** 2.8.1, 2.8.2, 2.8.3, 2.9.0

**Bug fixes: **

- When running the agent under Python 2.7 on Ubuntu 16.10 some instrumentation failed to apply, which has now been resolved.
- When applications used str.format in certain edge cases, the agent lost dataflow propagation, which has now been resolved.

**New features and improvements:**

- Added initial support for Stored XSS rule in Assess for django framework.
- Added Unvalidated Redirect support for Assess for pyramid and webob objects.
- Made updates to reduce number of false positives from Reflected XSS rule in Assess.
- Removed the agent&#39;s external dependency on the six package.

## Ruby agent - April 2020

**Language versions currently supported:** 2.4-2.7

**Agent versions released during the past month:** 3.8.1, 3.8.2, 3.8.3, 3.8.4, 3.8.5, 3.9.0

**New features and improvements:**

- Enhanced module definition detection using TracePoint

**Important notes:**

- This will be the last on-premises release bundled with a gem that supports Ruby 2.4.
- It is recommended to use RubyGems at this point.