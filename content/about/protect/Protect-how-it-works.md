<!--
title: "How It Works"
description: "Overview of Protect"
tags: "protect how it works continuous"
-->

Contrast Protect is a runtime application protection (RASP) solution that can identify and block application attacks from within a running application. Instead of attempting to build a perimeter around an application, like most legacy application protections (WAFs) do today, Protect uses instrumentation to build defenses directly into the application. Once instrumented, Contrast Protect analyzes all application requests, including APIs, and identifies, reports and blocks any attacks it sees.

## Instrumentation

Instrumentation is a technique that Contrast uses to add defenses into an application. These defenses are comprised of two types of objects. The first type is **sensors**, which observe attack payloads and corresponding application behavior. This enables Contrast to identify and report on application attacks and application behaviors. The second type is **actuators**, which enable applications to block malicious activity from within the application. Just like the approach used by application performance monitoring (APM) tools, like New Relic or AppDynamics, Contrast uses safe, proven approaches to adding protection capabilities to an application.

### Application threat intelligence

The largest benefit to Contrast’s instrumentation approach (over a perimeter-based approach, for example) is the quantum leap in accuracy when detecting attacks. By observing how an application responds when it's free from attacks, Contrast can collect as much information as possible before deciding to block an attack. This additional information makes all the difference when it comes to accurately identifying attacks and the danger they pose to your applications.


