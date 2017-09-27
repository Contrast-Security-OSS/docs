<!--
title: "How It Works"
description: "Overview of Protect"
tags: "protect how it works continuous"
-->

Contrast enables applications to defend themselves through instrumentation by using our Protect feature.

Contrast Protect is a run time application protection (RASP) solution able to identify and block application attacks from within a running application. Rather than attempting to build a perimeter around an application, like most legacy application protections (WAFs) do today, Contrast Protect uses instrumentation to build the defenses directly into the application, so that the defenses are part of the application, rather than being apart from it. Once instrumented, Contrast Protect analyzes all application requests, including APIs, and will identify, report and block on any attacks it sees.

## Instrumentation
Instrumentation is a technique that Contrast uses to add defenses into an application.  Contrast adds two types of objects. The first are sensors, which observe attack payloads and corresponding application behavior. This enables the ability to identify and report on application attacks and application behaviors.  The second are actuators, which enable applications to block malicious activity from within the application.  Identical in approach to application performance monitoring (APM) tools, like New Relic or AppDynamics, Contrast uses safe, proven approaches to adding protection capabilities to an application.

## Accurate App Threat Intel
The largest benefit to Contrast’s instrumentation approach over a perimeter based approach is the quantum leap in accuracy when detecting attacks. Instrumentation provides an unfair advantage when it comes to the context of what’s happening within an application when it receives an attack. Seeing how the application responds prior to having to make a blocking decision allows Contrast to collect as much information as possible before deciding to block an attack. This additional information makes all the difference when it comes to accurately identifying attacks and the danger they pose to your applications.
