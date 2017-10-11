<!--
title: "Overview"
description: "Overview of Contrast"
tags: "about what is contrast assess protect"
-->

Contrast Security is the provider of accurate, continuous, real-time application security for your entire application portfolio. Contrast works within each application to make it secure during the entire development lifecycle with two products: **Assess** and **Protect**.

The Contrast agent begins securing your code by adding sensors to the entire software stack of your applications - from runtime to custom code - to directly measure vulnerabilities and attacks. Contrast Assess continuously monitors all your code, including your libraries, wherever it's running for known and unknown vulnerabilities. Contrast Protect blocks both automated and advanced threats attacking web applications and API, and immediately alerts you to the attack. 

To learn more about the ways that Contrast can keep your applications secure, continue reading about [Assess](assess-howitworks.html#assess-works), [Protect](protect-howitworks.html#protect-works) and [getting started with Contrast](installation-setup.html#quick-start). 


<!-- 
* agent/languages and contrast application/dashboard
* instrumentation  
-->


## Instrumentation (Protect)

Instrumentation is a technique that Contrast uses to add defenses into an application. These defenses are comprised of two types of objects. The first type is **sensors**, which observe attack payloads and corresponding application behavior. This enables Contrast to identify and report on application attacks and application behaviors. The second type is **actuators**, which enable applications to block malicious activity from within the application. Just like the approach used by application performance monitoring (APM) tools, Contrast uses safe, proven approaches to adding protection capabilities to an application.

## Instrumentation (Assess)

When an application is deployed with the Contrast agent, Contrast code is inserted in the application’s existing methods across custom code and libraries. These sensors are hooked in based on the locations where data enters and leaves the application. Contrast then has real-time visibility into any data that flows through the application. When Contrast detects a security flaw or vulnerability in this code path, it's immediately reported to Contrast’s application interface. 


## Integrated Application Security

You can use Contrast in existing Application Security and DevOps processes across the software development lifecycle (SDLC). Contrast is integrated into CI/CD tools preferred by roles across the SDLC, including Development, Security, and Operations.

* **Build tools:** Contrast integrates with Continuous Integration (CI) tools including Jenkins, Maven, Gradle and Bamboo. When the number of vulnerabilities of a specified severity exceeds the threshold that you've chosen in the Contrast interface, Contrast can instruct the CI tool to fail the build. 

* **Team communications and bug tracking tools:** Apart from email, Contrast can send notifications and alerts via popular messaging and communications channels including Hipchat and Slack. For customers in a DevOps environment, Contrast integrate with bug tracking tools such as JIRA, Serena Business Manager, and Microsoft Visual Studio Team Services/Team Foundation Services (VSTS/TFS). 



