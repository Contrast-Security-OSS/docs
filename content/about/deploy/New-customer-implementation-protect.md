<!--
title: "New Customer Implementation Guide: Protect"
description: "Introduction to Contrast setup and onboarding"
tags: "Contrast installation setup protect onboarding customer"
-->

Contrast Protect provides actionable and timely application layer threat intelligence across the entire application portfolio. Once instrumented with Protect, applications will self-report the following information about an attack, at a minimum: the attacker, method of attack, applications affected, frequency, volume and level of compromise. In addition, Protect provides specific guidance to engineering teams about where applications were attacked and how threats can be remediated.

<!-- ## Steps

The following steps will introduce Contrast to an organization, integrate it into their workflow and quantify the value it has brought to the initial adopters of the technology.

1. Kickoff:	Introductions, align vision and quantify success metrics.
2. Solution Architecture: Tailor implementation.
3. Project Plan: Agree on details and timing.
4. TeamServer: Get ready to add applications.
5. Pre-production: Integrate into ecosystem and perform Initial analysis.
6. Production Monitor: Observe in monitor mode and validate workflow.
7. Contrast Business Review: Quantify the gained value.

Contrast’s Customer Success team will continue to work with you to help your organization gain increasingly more value from your investments of time and money. -->

<!-- ## Roles and Responsibilities

The following roles may represent one or more people though one person may play multiple roles.

* Project Manager: Works with Contrast on deployment schedule, tracks internal milestones and task completion, and is responsible for internal communications.
* TeamServer Administrator:	Prepares technical environment; manages users, access controls, reports, upgrades and communications; interfaces with Contrast Support.
* Application Security Lead: Creates and governs policy, security controls and the  vulnerability management process.
* QA Leads:	Performance and QA testing of Protect-enabled servers, and installation of agent in QA environments.
* Operations: Pushes Protect-enabled servers into Production.
* Exec Sponsor - Security: Executive from the security group who oversees Contrast deployment.
* Exec Sponsor - Development: Executive from the development group who oversees Contrast deployment. -->

## Kickoff

The focus of the Kickoff meeting is to introduce all the parties, and get everyone aligned on the current business issues, reasons for purchasing Contrast and strategic vision for Contrast as well as the scope and success metrics for the initial applications and servers to be onboarded. We will also review the Contrast’s Quick Value deployment methodology, roles and responsibilities, and plan for the next stage: Solution Architecture.

### Objectives

* Verify the desired Business Outcomes as well as their KPIs.
* Document the desired state for the initial phase.
* Familiarize customers with Contrast’s Quick Value deployment methodology.
* Ensure that all the key project roles are filled.
* Review the the Intake document for the Solution Architecture meeting.

### Preparation

In advance of this meeting:

* Pre-meeting with the primary stakeholder, who will participate in each role in this deployment, to become aligned on our deployment methodology and initial phase scope, success factors and project risks.
* Each attendee should have [a high-level understanding of Contrast Security](https://www.youtube.com/watch?v=Gviz-SiJGWk).
* Each attendee should read this document.


## Solution Architecture

In this critical stage of the project, we will gather information about your current state, then recommend Contrast best practices that are best suited to address your specific process and technical needs for the initial phase (“First Win”).  This will require a detailed, technical conversation on requirements, process and system design.

### Objectives

* Document decisions on security policy, governance, key processes and system design.
* Review the Contrast Security Maturity Model framework.
* Discuss an overview of the technical architecture, which includes user authentication as well as integrations into your ecosystem. 

### Preparation

* A list of candidate servers to be included as part of your initial onboarding. 
* They must meet the technical requirements for [Java](https://docs.contrastsecurity.com/installation-java.html#java-supported), [.NET](https://docs.contrastsecurity.com/installation-net.html#net-supported), [Node](https://docs.contrastsecurity.com/installation-node.html#node-supported) or [Ruby](https://docs.contrastsecurity.com/installation-ruby.html#ruby-supported).
* A list of tools: SIEM, bug trackers, deployment and access management.


## Project Plan

Once all the requirements and solution design are finalized in the Solution Architecture stage, it’s time to map out a project plan. Contrast will select one of its proven project plan templates, and collaborate with you to tailor it to your specific needs. 

### Objectives

* Create a formal project plan, which concludes with the Contrast Business Review.
* Decide on project governance - status meetings, tracking of issues, etc. - and get buy-in from key stakeholders.

### Preparation

* List of important dates for candidate applications and their servers: load testing, planned configuration changes, deployment, etc.
* List of owners of tools in your ecosystem: [continuous integration](github.com/Contrast-Security-OSS/), [alerting tools](https://docs.contrastsecurity.com/admin-orgintegrations.html).


## The Contrast Application 

Prepare the Contrast application, also known as “TeamServer”, for use by setting configurations, enabling rules and whitelists/blacklists, teaching administrators about available features, and training users how it will find and deliver alerts.

### Objectives

* Prepare the Contrast application for use.
* Deliver [Administrator Training](https://contrast.knowledge-bytes.com/demo-using-teamserver#sthash.a4c4FiCH.dpbs).
* Deliver user training(s).

### Preparation

* A list of names and email address of users who will be involved in the initial applications and their servers, and who need access to the Contrast application.
* If on-premises, verify that [technical environmental requirements](https://docs.contrastsecurity.com/installation-setup.html#contrast-reqs) are being met before installing the Contrast application.

## Pre-production

Protecting an application’s servers with Protect involves deploying the Contrast agent into each applicable server in the pre-production environment, integrating alerting tools and training users (e.g., SOC engineers) who may interact with the Contrast application.

### Objectives

* Install one of the agents: 
 * [Java](https://docs.contrastsecurity.com/installation-java.html#java-supported)
 * [.NET](https://docs.contrastsecurity.com/installation-net.html#net-supported)
 * [Node](https://docs.contrastsecurity.com/installation-node.html#node-supported) 
 * [Ruby](https://docs.contrastsecurity.com/installation-ruby.html#ruby-supported)
* [Integrate alerting tools](https://docs.contrastsecurity.com/admin-orgintegrations.html).
* Apply any   [exclusions](https://docs.contrastsecurity.com/admin-policymgmt.html#exclude), [virtual patches](https://docs.contrastsecurity.com/admin-policymgmt.html#patch), [IP management](https://docs.contrastsecurity.com/admin-policymgmt.html#ip) and rules that are required.
* Attack the application and discuss findings.
* Train users.

### Preparation

* Attack plan targeting known vulnerabilities found in prior penetration tests.
* List of acceptable and unacceptable IP addresses to access each application.
* Metrics from most recent load tests.
* An explanation of your vulnerability mitigation workflow for each application.
* An explanation of your incident response system for each application.


## Production Monitor

After we have verified that Protect is working as expected in the pre-production environment, the next step is to deploy Protect in production in monitor mode for a limited period, and then enable blocking for ongoing protection. 

### Objectives

* Protect your critical applications and associated servers.
* Verify that alerts are correct and are routed properly. 
* Generate and verify reports.

### Preparation

* Determine which Protect rules are to be changed from Monitor to Block.
* Get approval for change to applications in Production


## Contrast Business Review

At the beginning of the onboarding process, we worked with you to define your desired business outcomes and associated KPIs for the initial deployment of Protect. It’s now time to verify and quantify the value you’re receiving from using Protect, and communicate the results to your executives and key stakeholders.

### Objectives

* Align on business outcome attainment and the value you’re receiving from Protect.
* Agree on a plan to increase application/server adoption and value creation as you move forward.

### Preparation

* Provide results for KPIs where Contrast doesn’t have access to the data.
* Have appropriate stakeholders preview the Contrast Business Review deck to ensure alignment.
* Project Manager to coordinate scheduling of Contrast Business Review with Exec Sponsors.




