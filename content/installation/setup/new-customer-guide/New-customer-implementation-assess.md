<!--
title: "New Customer Implementation Guide: Assess"
description: "Introduction to Contrast setup and onboarding"
tags: "Contrast installation setup assess onboarding customer"
-->


Contrast Assess produces accurate results without dependence on application security experts. Accuracy comes from Contrast's patented Deep Security Instrumentation technology, which integrates the most effective elements of Interactive (IAST), Static (SAST); and Dynamic (DAST) application security testing technology; software composition analysis (SCA); and configuration analysis; and delivers them directly into applications.

Getting started with Assess can be as simple as [setting up the Contrast application  and installing an agent](https://docs.contrastsecurity.com/installation-setup.html#quick-start). Alternatively, the following steps prepare an organization to reap the full benefits of Assess and quantify the value they receive.

## Steps

The following steps introduce Contrast to an organization, integrate it into their workflow and quantify the value it has brought to the initial adopters of the technology.

1. Kickoff: Introductions, align vision and quantify success metrics.
2. Solution Architecture: Tailor implementation.
3. Project Plan: Agree on details and timing.
4. TeamServer Preparation: Get ready to add applications.
5. Application Baseline: Initial analysis of applications.
6. Vulnerability Management: How alerts navigate your ecosystem.
7. Contrast Business Review: Quantify the gained value.

Contrast’s Customer Success team will continue to work with you to help your organization increasingly gain value from the time and money you’ve invested.

## Roles and Responsibilities

The following roles may represent one or more people. (One person may play multiple roles.)

* Project Manager: Works with Contrast on deployment schedule, tracks internal milestones and task completion, and is responsible for internal communications.
* TeamServer Administrator:	Prepares technical environment; manages users, access controls, reports, upgrades and communications; interfaces with Contrast Support.
* Application Security Lead: Creates and governs policy, security controls and the vulnerability management process.
* Development Leads: Manages vulnerability remediation and build integration.
* Exec Sponsor - Security: Executive from the security group who oversees Contrast deployment.
* Exec Sponsor - Development: Executive from the development group who oversees Contrast deployment.


## Kickoff

The focus of the Kickoff meeting is to introduce all the parties, and get everyone aligned on the current business issues, reasons for purchasing Contrast, strategic vision for Contrast as well as the scope and success metrics for the initial applications to be onboarded. We will also review the Contrast Quick Value deployment methodology, roles and responsibilities, and plan for the next stage: Solution Architecture.

### Objectives

* Verify the desired Business Outcomes as well as their KPIs.
* Document the desired state for the initial phase.
* Familiarize customers with Contrast’s Quick Value deployment methodology.
* Ensure that all the key project roles are filled.
* Review the the Intake document for the Solution Architecture meeting.
* Help customers step through the Contrast maturity model.

### Preparation

In advance of this meeting:

* Pre-meeting with the primary stakeholder to become aligned with our deployment methodology; Kickoff participants; and initial phase scope, success factors and project risks.
* Each attendee should have [a high-level understanding of Contrast Security](https://www.youtube.com/watch?v=Gviz-SiJGWk).
* Each attendee should read this document.

### Deliverables

* A list of names assigned to the key project roles, along with their contact details and time zone.
* A list of desired business outcomes and their KPIs.
* High-level requirements for the initial state (e.g., security policy, vulnerability management processes, integrations).
* A list of long-lead items and other project risks (e.g., Firewall proxy permissions, access management approval).

## Solution Architecture

In this critical stage of the project, we will gather information about your current state, then recommend the Contrast best practices that are best suited to address your specific process and technical needs for the initial phase (“First Win”). This will require a detailed, technical conversation on requirements as well as process and system design.

### Objectives

* Understand the application security landscape (e.g., SDLC, technical environment, security policies, vulnerability lifecycle).
* Finalize requirements for the initial phase (“First Win”), which include security policy, vulnerability management, metrics/reporting, integrations, user/application onboarding, training and access control.
* Document vulnerability management process.
* Determine tags to add to inventory (e.g., servers, applications, vulnerabilities).
* Designate up to three applications to onboard for your initial baseline.

### Preparation

* A list of candidate applications to be included as part of your initial baseline. 
* Meet the technical requirements for [Java](https://docs.contrastsecurity.com/installation-java.html#java-supported), [.NET](https://docs.contrastsecurity.com/installation-net.html#net-supported), [Node](https://docs.contrastsecurity.com/installation-node.html#node-supported) or [Ruby](https://docs.contrastsecurity.com/installation-ruby.html#ruby-supported).
* A list of tools used by development teams: integrated development environments (IDEs), bug trackers, continuous integration and access management.
* A workflow of how vulnerabilities are triaged, managed and communicated to developers.
Known [security controls](https://docs.contrastsecurity.com/admin-policymgmt.html#security).

### Deliverables

* Finalize requirements for security policy and governance, vulnerability management, metrics/dashboards, access control, integrations, training and user/application onboarding.
* Architectural description of [how Contrast integrates with the tools](https://docs.contrastsecurity.com/admin-orgintegrations.html) and processes of the initial applications: IDEs, bug trackers, continuous integration and access management.

## Project Plan

Once all the requirements and solution design are finalized in the Solution Architecture stage, it’s time to map out a project plan. Contrast will select one of its proven project plan templates, and collaborate with you to tailor it to your specific needs.

### Objectives

Create a formal project plan that concludes with the Contrast Business Review.
Decide on project governance - status meetings, tracking of issues, etc. - and get buy-in from key stakeholders.

### Preparation

* List of important dates for candidate applications: start of next sprint, code freezes, planned configuration changes, etc.
* Each project owner of each candidate application is welcomed by Customer Success.

### Deliverables

* A project plan is agreed upon by involved parties and reviewed with stakeholders.
* A scheduled meeting to implement the Contrast application and confirm the administrators have access.
* A scheduled meeting to deliver [Administrator Training](https://contrast.knowledge-bytes.com/demo-using-teamserver#sthash.a4c4FiCH.dpbs).

## The Contrast Application 

Prepare the Contrast application, often called “TeamServer”, for use by setting configurations, teaching administrators about applicable features, installing the first agent, implementing policy and demonstrating reporting.

### Objectives

* Prepare the Contrast application for use.
* Deliver [Administrator Training](https://contrast.knowledge-bytes.com/demo-using-teamserver#sthash.a4c4FiCH.dpbs).
* Configure security policy.

### Preparation

* A list of names and email address of users who will be involved in the initial applications and need access to the Contrast application.
* Identify the first application to be onboarded and invite the Agent Administrator to meeting.
* Identify administrators to be trained.
* Finalize security policy.
* If on-premises, verifying that [technical environmental requirements](https://docs.contrastsecurity.com/installation-setup.html#contrast-reqs) are being met before installing the Contrast application.

### Deliverables

* The Contrast application is set up and administrators have access.
* [Administrator Training](https://contrast.knowledge-bytes.com/demo-using-teamserver#sthash.a4c4FiCH.dpbs) for the Contrast application has been completed.
* All involved parties have access to the [Contrast Security Training Portal](https://contrast.knowledge-bytes.com).
* All involved parties have learned [how to get prizes and a newsletter of important information](contrastsecurity.com/goodies).

## Baseline Initial Applications

Establish a baseline of true vulnerabilities for the initial applications, as well as a list of their third-party libraries.

### Objectives

* Install one of the agents: 
 * [Java](https://docs.contrastsecurity.com/installation-java.html#java-supported)
 * [.NET](https://docs.contrastsecurity.com/installation-net.html#net-supported)
 * [Node](https://docs.contrastsecurity.com/installation-node.html#node-supported) 
 * [Ruby](https://docs.contrastsecurity.com/installation-ruby.html#ruby-supported)
* Exercise the application and possibly run functional and/or regression tests.
* Discuss found vulnerabilities.
* Apply any [security controls](https://docs.contrastsecurity.com/admin-policymgmt.html#security) and [exclusions](https://docs.contrastsecurity.com/admin-policymgmt.html#exclude) that are needed.


### Preparation

* A separate scheduled meeting with each application team to baseline the application.
* A list of known [security controls](https://docs.contrastsecurity.com/admin-policymgmt.html#security) used by existing vulnerability detection tools.
* An introduction to owners of [continuous integration](https://github.com/Contrast-Security-OSS) tools in your ecosystem.

### Deliverables

* Each application is registered on the Contrast application, along with its [third-party libraries](https://docs.contrastsecurity.com/user-libraries.html#explore-lib) and [discovered vulnerabilities](https://docs.contrastsecurity.com/user-vulns.html#discover-vulns).
* [Security controls](https://docs.contrastsecurity.com/admin-policymgmt.html#security) are active.
* Appropriate applications and/or rules are excluded from being analyzed.
* User training for the Contrast application has been delivered.
* The Contrast agent is [integrated into any desired continuous integration tools](https://github.com/Contrast-Security-OSS).
* Inventory is tagged automatically.

## Manage Vulnerabilities

Our next focus is integrating your security management process and security policy governance.

### Objectives

* Define where alerts should be routed.
* [Integrate with tools](https://docs.contrastsecurity.com/admin-orgintegrations.html) in your ecosystem: IDEs, Bug Trackers and continuous integration.
* Generate and verify reports.

### Preparation

* List of owners of tools in your ecosystem: IDEs, bug trackers, continuous integration and access management.
* An explanation of your vulnerability mitigation workflow for each application.

### Deliverables

The Contrast application is integrated with the following tools, as desired: 
* bug trackers
* notification tools
* IDEs
* continuous integration tools (and can fail builds as desired)

## Contrast Business Review

At the beginning of the onboarding process, we worked with you to define your desired business outcomes and associated KPIs for the initial deployment of Assess. It’s now time to verify and quantify the value you’re receiving from using Assess, and communicate the results to your executives and key stakeholders. 

### Objectives

* Align on business outcome attainment and the value you’re receiving from Assess.
* Agree on a plan to increase user/application adoption and value creation as you move forward.

### Preparation

* Provide results for KPIs where Contrast doesn’t have access to the data.
* Have appropriate stakeholders preview the Contrast Business Review deck to ensure alignment.
* Project Manager to coordinate scheduling of Contrast Business Review with Exec Sponsors.

### Deliverables

* A presentation with business outcome attainment, initial wins, challenges and opportunities.
* Contrast Business Review meeting follow up typically includes plans for user/ application adoption, increasing value, and addressing key challenges and issues.





