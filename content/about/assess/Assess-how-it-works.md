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

* **Team communications and bug tracking tools:** Apart from email, Contrast can send notifications and alerts via popular messaging and communications channels including Slack. For customers in a DevOps environment, Contrast integrate with bug tracking tools such as JIRA, Serena Business Manager, and Microsoft Visual Studio Team Services/Team Foundation Services (VSTS/TFS). 

## Application Assessment

Once your application has been assessed, Contrast presents a multitude of information, including:

* Accurate vulnerability identification that comes with details on the code and solutions to fix it
* Overall score to let you know how the application is performing in general - read about [Score Settings](admin-orgsettings.html#score-settings)
* Activity of the URLs being hit
* Application usage metrics
* Insight into the architecture of the running application 
* Third-part and open-source library assessment results
* Compliance reporting via PDF

## Contrast Assess Policies

There are two types of policies available in Contrast Assess. 

* [Assess Rules](admin-policymgmt.html#assess) which can detect specific types of vulnerabilities, such as SQL Injection or Cross-Site Scripting.
* [Security Controls](admin-policymgmt.html#security) which are methods in your code that make sure data is safe to use.

