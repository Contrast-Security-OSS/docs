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
| TeamServer Admin                           | **SaaS and EOP:** <br> Create and delete users <br> Configure roles <br> Contrast UI administration <br> **EOP only:** <br> Perform upgrades and DB backup <br> Manage infrastructure |
| Security Lead                              | Create and maintain security policies <br> Produce success metrics  |
| Development Lead <br> (for each application) | Oversee agent installation <br> Perform initial review of results <br> Triage vulnerabilities <br> Serve as a lead in vulnerability remediation |

### At Contrast: 

| Role                | Description                                                                            |
|---------------------|----------------------------------------------------------------------------------------|
| CSCP Representative | Oversee project <br> Conduct training <br> Help deploy <br> Tune and tailor Contrast UI |

## Installation

Using Assess and/or Protect requires two installations:
1. Central instance(s) of the Contrast application
2. Agent for each web application server

### The Contrast application

We strongly advise the use of Contrast's Software as a Service (SaaS). It’s SOC-2 Type II compliant, gets security and feature updates as they become available, and is load balanced by professionals who focus on this every day.
 
If SaaS is an option, please read about [six benefits of using the SaaS option](https://cdn2.hubspot.net/hubfs/203759/DocumentsPDF/WPtechbrief-SAAS-benefits031017.pdf?__hssc=92971330.3.1493748857624&__hstc=92971330.1dbbc36acfe2b8b5b831a103ff2368b9.1486565532373.1493236280499.1493748857624.16&__hsfp=944490163&hsCtaTracking=27d5aa9b-1e1f-4e34-8e4c-a1d1ac801ef7%7C46c11e18-023d-46bf-a2fb-d6b3701c684d) versus having Enterprise on Premises (EOP). However, if a multi-tenancy environment isn't feasible, the EOP option is right for you.

#### Saas

To connect to the SaaS offering of Contrast, follow the instructions that are emailed to your TeamServer Admin. They include your credentials to log in to the [Contrast application](https://app.contrastsecurity.com/Contrast/static/ng/index.html#/pages/signin).

#### EOP

To install Contrast in your own environment, we’ll do the following together.
1. Verify that your configuration complies with those that are supported and suggested, which is documented in the [System Requirements](installation-setup.html#contrast-reqs) article.  
2. Follow the steps listed in the Contrast [Installation](https://docs.contrastsecurity.com/installation-setupinstall.html) article. 
 
Before we begin, make sure that the CSCP knows the contact information for your TeamServer Admin and for your Security Lead.

## Administration
Read more about configuring [System Settings](admin-systemsettings.html#system-glance), including the role of SuperAdmin.






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








