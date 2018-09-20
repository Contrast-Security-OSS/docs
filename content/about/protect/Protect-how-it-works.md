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

## Protect an Application

Protect is applied for each agent. To fully protect an application, you must make sure that all agents that host the application are licensed and have Protect enabled. This is most vital in production environments, since you want to make sure that all application instances are protected when they initially come online without any human intervention. The easiest way to accomplish this is to set the organizational defaults to automatically license all production agents and enable Protect for Production environments.

Read more about [Server Defaults](admin-orgsettings.html#org-server).

## Protect Policies

The following policies are available with Contrast Protect: 

* [Protect Rules](admin-policymgmt.html#protect) which allow you to set applications to monitor for attacks 
* [Virtual Patches](admin-policymgmt.html#patch) which are custom defenses you define to defend against specific vulnerabilities
* [Log Enhancers](admin-policymgmt.html#log) which provide additional instrumentation instructions 
* [IP Management](admin-policymgmt.html#ip) where you can manage a blacklist and whitelist (trusted hosts)

