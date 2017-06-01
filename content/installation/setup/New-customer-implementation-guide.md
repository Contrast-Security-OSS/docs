<!--
title: "New Customer Implementation Guide"
description: "Guide to Contrast setup and onboarding"
tags: "new user Contrast setup onboarding"
-->


## Introduction 
 
This guide is intended as a reference for the technical and non-technical parties involved in adopting Contrast at your company as Contrast’s Customer Success representatives shepherd you through the setup and onboarding process. Introductions and recommendations on features and workflows in Contrast include links to documentation and resources with additional details.

Integrate Contrast to automatically Assess and Protect software, and improve performance of your existing workflows.

## Roles and Responsbilities

Designate people for each of the following roles. Your Contrast Security Certified Professional (CSCP) representative needs to be in touch with each of them.

### Internal: 

| Role                                       | Description                                                                                                                                             |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| Project Manager <br> (often the Security Lead) | Oversee project <br> Copied on every email|
| Contrast Admin                           | **SaaS and EOP:** <br> Create and delete users <br> Configure roles <br> Contrast UI administration <br> **EOP only:** <br> Perform upgrades and DB backup <br> Manage infrastructure |
| Security Lead                              | Create and maintain security policies <br> Produce success metrics  |
| Development Lead <br> (for each application) | Oversee agent installation <br> Perform initial review of results <br> Triage vulnerabilities <br> Serve as a lead in vulnerability remediation |

### At Contrast: 

| Role                | Description                                                                            |
|---------------------|----------------------------------------------------------------------------------------|
| CSCP Representative | Oversee project <br> Conduct training <br> Help deploy <br> Tune and tailor Contrast UI |

## Installation

Using Assess, Protect or both requires two installations:
1. Central instance(s) of the Contrast application
2. Agent for each web application server

### The Contrast application

We strongly advise the use of Contrast's Software as a Service (SaaS). It’s SOC-2 Type II compliant, gets security and feature updates as they become available, and is load balanced by professionals who focus on this every day.
 
If SaaS is an option, please read about [six benefits of using the SaaS option](https://cdn2.hubspot.net/hubfs/203759/DocumentsPDF/WPtechbrief-SAAS-benefits031017.pdf?__hssc=92971330.3.1493748857624&__hstc=92971330.1dbbc36acfe2b8b5b831a103ff2368b9.1486565532373.1493236280499.1493748857624.16&__hsfp=944490163&hsCtaTracking=27d5aa9b-1e1f-4e34-8e4c-a1d1ac801ef7%7C46c11e18-023d-46bf-a2fb-d6b3701c684d) versus having Enterprise on Premises (EOP). However, if a multi-tenancy environment isn't feasible, the EOP option is right for you.

#### Saas

To connect to the SaaS offering of Contrast, follow the instructions that are emailed to your Contrast Admin. They include your credentials to log in to the [Contrast application](https://app.contrastsecurity.com/Contrast/static/ng/index.html#/pages/signin).

#### EOP

To install Contrast in your own environment, we’ll do the following together.
1. Verify that your configuration complies with those that are supported and suggested, which is documented in the [System Requirements](installation-setup.html#contrast-reqs) article.  
2. Follow the steps listed in the Contrast [Installation](https://docs.contrastsecurity.com/installation-setupinstall.html) article. 
 
Before we begin, make sure that the CSCP knows the contact information for your Contrast Admin and for your Security Lead.

## Administration
Read more about configuring [System Settings](admin-systemsettings.html#system-glance), including the role of SuperAdmin.

## Agents

Include the agent on all of your web application servers. <!-- Contrast inventories all included servers, applications in each run, vulnerabilities in each application, and CVEs in each library used by each application. --> This unlimited **inventory mode** is included for free with Contrast and doesn’t require a license.
 
To install the Contrast agent into an application web server, we’ll do the following together:
 
1. Verify that your configuration complies with those that are supported and suggested, which is documented in the following articles for each agent:

	* [.Net](installation-net.html#net-supported)
	* [Java](installation-java.html#java-supported)
	* [Node.js](installation-node.html#node-supported)

2. Complete the installation process for the agent.
	* [.Net](installation-net.html#net-install)
	* [Java](installation-javainstall.html)
	* [Node.js](installation-node.html#node-install)
 
Before we begin, make sure that the CSCP knows the contact information for your Security Lead and the Development Lead for each web application server.

## Security Controls and Exclusions

The Contrast agent recognizes a wide range of popular security controls out of the box. If your development teams are using any custom security libraries for validation or sanitization, follow the steps in [Security Controls](admin-policymgmt.html#security) to teach Contrast about them and fine tune your findings. 
 
You may also have situations in which you don't want to hear about events for one reason or another – usually because there's a compensating control that isn't visible from the application perspective. Find details on suppressing these findings in [Application Exclusions](admin-policymgmt.html#exclude).

## Integrations

Contrast has an ecosystem of optional [integrations](admin-orgintegrations.html) - and, of all the bugtrackers that we support, [JIRA](admin-orgintegrations.html#jira) is the most popular.
 
> **Note:** You can set up these configurations after including Contrast in your processes.

## Get Started

With everything in place, it’s time to include Contrast in your existing workflow. We’ll do the following together:

* Train your team
* Include Assess and Protect in your current workflow
	* [Access Contrast via APIs](https://api.contrastsecurity.com/) (optional)

Before we begin, make sure that the CSCP knows the contact information for your Contrast Admin, Security Lead and Development Lead for each web application server. If other people (e.g., JIRA Administrator or Software Developers) will be involved, your CSCP needs their contact information as well.

## People

Before turning on licenses, your CSCP will arrange the following trainings.
 
Administrator training:
* How to set up user groups and their access 
* Monitoring and combining applications
* When and how to access log files
* How to integrate with other applications and other administrative tasks

To prepare for the meeting, attendees should review the instructions on [Contrast Configuration](installation-setupconfig.html). 
 
User training:
* How to access information about your applications
* How to explore a finding
* Other tasks relevant to a security professional or a technical user performing security analysis

To prepare for the meeting, attendees should review the steps in the [Quick Start Guide](user-starthere.html#quickstart) for new users.

## Products
There are many ways to start using Assess, Protect or both. To get value quickly, use Assess in your continuous integration (CI) pipeline as part of the functional test environment. Also use Protect in Monitor mode in your penetration testing environment before adding it to your Production environments. Consider the following scenarios before discussing what works best for you with your CSCP.

### Assess

Start by turning on Assess licenses for all applications in a QA environment. While QA performs their regular tests - even ones that are automated - Assess monitors data flows through the application and finds vulnerabilities. Include these security issues in your bug tracker, treating them like other finding. Assess requires some tuning, especially if you use custom libraries or methods to mitigate security vulnerabilities. Once you’re comfortable with how this works, include Assess in Development servers and then deployment web servers, even if they don’t have any active licenses.

### Protect

Start by turning on Protect for an application being attacked as part of a security assessment. By default, all Protect rules are in Monitor mode. Notice which attacks Protect is able to rebuff and log. Based on your environment and requirements, teach Protect about any IPs that should be implicitly trusted and added to the Trusted Hosts list, or automatically blocked and added to the Blacklist. Begin to switch any appropriate rules to Block mode in order to make your applications self protecting. Once you’re comfortable with this workflow, include Protect in deployment web servers.

## APIs
Contrast includes APIs to give programmatic access to a myriad of features and functions. The APIs, return objects, and flows for using APIs and objects are available on the [Contrast RESTful API page](https://api.contrastsecurity.com). 
 
Access to APIs is included with your access to Contrast. Ask your CSCP for suggestions on which APIs to use to create your intended workflow. They can also help you scope any professional services that may help you.

## Metrics

Schedule meetings with your CSCP to track metrics that are important to you. For each application, consider the following metrics. They can be monitored from the Contrast dashboard and Attacks pages.

Assess: 

* Custom Code Score (Number of vulnerabilities discovered)
* Library Score (Number of CVEs in the libraries you use)
* Score in Vulnerability Trend
* Average Time to Remediate
* Licenses Used

Protect: 

* Attacks Seen
* Attacks Blocked
* Number of Protect servers
* Number of Monitored applications
* Applications at Risk
* Licenses Used

## Go Live
You’re ready to start with your first tranche of applications to Assess and Protect. (Review the [Quick Start Guide](user-starthere.html#quickstart) one more time, just for good measure.) 

## Review
After each application is onboarded, your CSCP will hold the following meetings to ask a few questions.
 
**Day One**
* Is everything working?
 
**Week One**
* Is everything working?
* What are you finding (i.e., metrics)?
* What tuning would improve results?
 
**Month One**
* What are you finding (i.e., metrics)?
* What tuning would improve results?
 
**Month Two**
* What are you finding (i.e., metrics)?
* What tuning would improve results?
* What application(s) should you bring on next?
 
** Month Three (and every three months afterward)** 
* What are you finding (i.e., metrics)?
* What tuning would improve results?
* What application(s) should we bring on to Assess and/or Protect next?
* What improvements can be made to the product?








