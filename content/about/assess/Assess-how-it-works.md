<!--
title: "How It Works"
description: "Overview of Assess"
tags: "assess how it works continuous visibility"
-->

Contrast Assess is a revolutionary application security testing tool that combines Static, Dynamic, and Interactive Application Security Testing (SAST, DAST and IAST, respectively) to provide highly accurate and continuous information on security vulnerabilities in your applications.
 
In a fast-paced DevOps software world where applications are deployed iteratively, scarce security expertise can be a bottleneck. Contrast helps perform testing quickly and accurately by using an agent that instruments applications with sensors. The sensors look at data flow in real time and analyze the application from within to help figure out vulnerabilities in:

* Libraries, frameworks and custom code
* Configuration information
* Runtime control and data flow
* HTTP requests and responses
* Backend connections

## Instrumentation

When an application is deployed with the Contrast agent, Contrast code is inserted in the application’s existing methods across custom code and libraries. These sensors are hooked in based on the locations where data enters and leaves the application. Contrast then has real-time visibility into any data that flows through the application. When Contrast detects a security flaw or vulnerability in this code path, it's immediately reported to Contrast’s application interface. 

## Integrated Application Security

You can use Contrast in existing Application Security and DevOps processes across the software development lifecycle (SDLC). Contrast is integrated into CI/CD tools preferred by roles across the SDLC, including Development, Security, and Operations.

* **Build tools:** Contrast integrates with Continuous Integration (CI) tools including Jenkins, Maven, Gradle and Bamboo. When the number of vulnerabilities of a specified severity exceeds the threshold that you've chosen in the Contrast interface, Contrast can instruct the CI tool to fail the build. 

* **Team communications and bug tracking tools:** Apart from email, Contrast can send notifications and alerts via popular messaging and communications channels including Hipchat and Slack. For customers in a DevOps environment, Contrast integrate with bug tracking tools such as JIRA, Serena Business Manager, and Microsoft Visual Studio Team Services/Team Foundation Services (VSTS/TFS). 