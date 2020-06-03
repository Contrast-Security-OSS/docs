<!--
title: "What to Expect When You're Deploying"
description: "Introduction to Contrast customer deployment"
tags: "Contrast about setup onboarding deployment assess protect"
-->


Getting started with Contrast Assess and Protect can be as simple as [setting up the Contrast application and installing an agent](installation-setup.html#quick-start). Alternatively, completing the following steps with the guidance of Contrast's Customer Success team prepares an organization to reap the full benefits of Assess and Protect, and quantify the value they receive.

## Steps

The following steps introduce Contrast to an organization, integrate the product(s) into your workflow and quantify the initial value it brings. (Steps dedicated specifically to Assess or Protect are marked.) Even after the deployment phase ends, Contrast’s Customer Success team will continue working with you to help your organization increasingly gain value from the time and money you’ve invested.


* **Kickoff:** Introduce parties, align vision and quantify success metrics.
* **Solution Architecture:** Tailor implementation.
* **Project Plan:** Agree on details and timing.
* **Contrast UI Preparation:** Get ready to onboard applications.
* **Application Baseline:** Initial analysis of applications. (**Assess**)
* **Vulnerability Management:** Observe how vulnerabilities are analyzed, communicated and tracked. (**Assess**)
* **Pre-production:** Integrate Contrast agent into ecosystem and perform initial analysis. (**Protect**)
* **Production Monitor:** Observe Contrast in Monitor mode and validate workflow. (**Protect**)
* **Contrast Business Review:** Quantify the gained value by your organization.

## Roles and Responsibilities

The following roles may be held by one or more people, and one person may also play multiple roles. (Roles related specifically to Assess or Protect are marked.)

* **Project Manager:** Works with Contrast on deployment schedule, tracks internal milestones and task completion, and is responsible for internal communications.
* **Contrast UI Administrator:** Prepares technical environment; manages users, access controls, reports, upgrades and communications; works directly with Customer Success.
* **Application Security Lead:** Creates and governs policy, security controls and the vulnerability management process.
* **DevOps/Automation Lead:** Works with Contrast on automating agent deployments/upgrades and/or integrating with existing DevOps processes and tools (DevSecOps).
* **Development Leads:** Manages vulnerability remediation and build integration. (**Assess**)
* **QA Leads:**	Oversees performance and QA testing of Protect-enabled servers as well as installation of agent(s) in QA environments. (**Protect**)
* **Operations:** Pushes Protect-enabled servers into Production. (**Protect**)
* **Executive Sponsor - Security:** Executive from the security group who oversees Contrast deployment.
* **Executive Sponsor - Development:** Executive from the development group who oversees Contrast deployment.

## Kickoff

The focus of the Kickoff meeting is to introduce all the parties, and ensure that everyone is aligned on the current business issues, reasons for purchasing Contrast and a strategic vision for using Contrast. The appropriate the scope and success metrics for the initial applications to be onboarded will be included in this discussion. The Customer Success team will also review the Contrast Quick Value deployment methodology and the Contrast Security Maturity Model, project roles and responsibilities, and a plan for the next stage: Solution Architecture.

### Before you start

To prepare for this meeting, Contrast representatives will meet with the primary stakeholder, who will participate in each stage of deployment. Each attendee should have [a high-level understanding of Contrast](https://www.youtube.com/watch?v=Gviz-SiJGWk).


## Solution Architecture

In this critical stage of the project, Contrast will gather information about your current state, and then recommend the best practices for your specific process and technical needs during the initial phase. This will require a detailed, technical conversation on requirements - including security policy, metrics/reporting, integrations, user authentication, training and access control - as well as the vulnerability management process and system design. The Contrast team will also work with you to designate up to three applications to onboard for your initial baseline.

### Before you start

To prepare for this stage, you'll need to verify the following information: 

* A list of candidate servers to be included in your initial onboarding. 
* A list of candidate applications to be included in your initial baseline. 
* Meet the technical requirements for [Java](installation-java.html#java-supported), [.NET](installation-net.html#net-supported), [Node](installation-node.html#node-supported) or [Ruby](installation-ruby.html#ruby-supported).
* A list of [tools](https://contrast-security-oss.github.io/) used by development teams: integrated development environments (IDEs), [bugtrackers](admin-orgintegrations.html#bugtracker), continuous integration and access management.
* A workflow of how vulnerabilities are triaged, managed and communicated to developers.
* A list of known [security controls](admin-policymgmt.html#security).


## Project Plan

Once all the requirements and the solution design are finalized in the Solution Architecture stage, it’s time to map out a project plan. Contrast will select one of its proven project plan templates and collaborate with you to tailor it to your specific needs. You'll also decide on project governance - status meetings, tracking of issues, etc. - and get buy-in from key stakeholders.

### Before you start

To prepare for this meeting, you'll need to verify the following information: 

* A list of important dates for candidate applications and their servers (e.g., start of next sprint, code freezes and planned configuration changes).
* A list of administrators for [continuous integration](https://contrast-security-oss.github.io/) and [notification tools](admin-orgintegrations.html#integration-start) in your ecosystem. (**Protect**)


## The Contrast Application 

To prepare the Contrast application, sometimes called “TeamServer”, some training and configuration is in order. For Assess, you'll set configurations, teach administrators about applicable features, install the first agent, implement security policy and demonstrate reporting. For Protect, you'll set configurations, enable rules and whitelists/blacklists, teach administrators about available features, and train users how the application finds and delivers alerts.

### Before you start

To prepare for this stage, you'll need to finalize the following information: 

* A list of names and email address of users who will be involved in onboarding the initial applications and servers, and need access to the Contrast application.
* Identify the first application to be onboarded, and invite the Agent Administrator to the meeting. (**Assess**)
* Identify administrators to be trained. (**Assess**)
* Finalize security policy. (**Assess**)
* If you're using **Enterprise-on-Premises** (EOP), verify that you meet [technical environmental requirements](installation-setup.html#contrast-reqs) before installing the Contrast application.


## Assess Vulnerabilities 

The steps in this section walk **Assess** customers through the initial vulnerability discovery and management process. 

### Application Baseline 

To establish a baseline of true vulnerabilities for the initial applications, as well as a list of their third-party libraries, you must complete the following steps to install one of the agents and deal with any vulnerabilities that you find.

* Install one of the agents: 
 * [Java](installation-java.html#java-supported)
 * [.NET](installation-net.html#net-supported)
 * [Node](installation-node.html#node-supported) 
 * [Ruby](installation-ruby.html#ruby-supported)
* Exercise the application and possibly run functional and/or regression tests.
* Discuss found vulnerabilities.
* Apply any [security controls](admin-policymgmt.html#security) and [exclusions](admin-policymgmt.html#exclude) that are needed.

#### Before you start

To prepare for this stage, you'll need to verify the following information: 

* A separate meeting scheduled with each application team to baseline the application.
* A list of known [security controls](admin-policymgmt.html#security) used by existing vulnerability detection tools.
* An introduction to owners of [continuous integration tools](https://contrast-security-oss.github.io/) in your ecosystem.

### Vulnerability Management 

Your next focus is integrating your security management process and security policy governance, including defining routes for alerts, verifying reports and integrating tools in your organization.

#### Before you start

To prepare for this stage, you'll need to verify the following information: 

* List of the administrators for [tools](https://contrast-security-oss.github.io/) in your ecosystem (i.e., IDEs, [bugtrackers](admin-orgintegrations.html#bugtracker), continuous integration and access management).
* An explanation of your vulnerability mitigation workflow for each application.


## Protect in Production

The steps in this section walk **Protect** customers through deploying the product in your Production environment. (Assess customers can skip to the **Assess Vulnerabilities** section.)

### Pre-production

To apply Protect to an application’s servers, you must complete the following steps to deploy the Contrast agent into each applicable server in the pre-Production environment. You must also integrate notification tools and train users (e.g., SOC engineers) who may interact with the Contrast application.

* Install one of the agents: 
 * [Java](installation-java.html#java-supported)
 * [.NET](installation-net.html#net-supported)
 * [Node](installation-node.html#node-supported) 
 * [Ruby](installation-ruby.html#ruby-supported)
* [Integrate notification tools](admin-orgintegrations.html#integration-start).
* Apply any [exclusions](admin-policymgmt.html#exclude), [virtual patches](admin-policymgmt.html#patch), [IP management](admin-policymgmt.html#ip) and rules that are required.
* Attack the application and discuss findings.

#### Before you start

To prepare for these steps, you'll need to finalize the following information: 

* Attack plan targeting known vulnerabilities found in prior penetration tests.
* List of acceptable and unacceptable IP addresses to access each application.
* Metrics from most recent load tests.
* An explanation of your vulnerability mitigation workflow for each application.
* An explanation of your incident response system for each application.

### Production monitor

After Contrast verifies that Protect is working as expected in the pre-Production environment, you can deploy Protect to Production in Monitor mode for a limited period of time, and then enable blocking for ongoing protection. 

#### Before you start

To prepare for these steps, you'll need to complete the following tasks: 

* Determine which Protect rules will be changed from Monitor to Block.
* Get approval for the change to applications in Production.


## Contrast Business Review

At the beginning of the onboarding process, Contrast worked with you to define your desired business outcomes and associated key performance indicators (KPIs) for the initial deployment. It’s now time to verify and quantify the value you’re receiving from using Assess, Protect, or both, and communicate the results to your executives and key stakeholders. You and your Contrast representatives will also agree on a plan to increase adoption and value creation as you move forward.

## What Happens Next

Follow-up by Contrast after the Contrast Business Review meeting typically includes planning for user and application/server adoption, increasing value, and addressing key challenges and issues. You're also encouraged to [contact the Customer Success team](https://support.contrastsecurity.com) about any issues you encounter as your organization grows with Contrast. 


