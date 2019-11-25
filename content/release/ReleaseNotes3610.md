<!--
title: "Contrast 3.6.10 - November 2019"
description: "Contrast 3.6.10 November 2019"
tags: "3.6.10 November Release Notes"
-->

## Bug Fixes

* Bug fix one
* Bug fix one

## New and Improved Features

* Jira integrations have a new **application importance filtering option** that tells Contrast to only create tickets for vulnerabilities from applications that have a specific importance level.

* It’s now possible to **search for vulnerabilities by Application Tag**, both through the Contrast UI and the API. A new filter option in the Vulnerabilities view makes it easier to find vulnerabilities by topics that are relevant to your teams.

* We support **.NET Core applications deployed on Linux.** We’re expanding our coverage of .NET Core applications from Windows to include Linux deployments. You can now use the same .NET Core agent and gain accurate and detailed security coverage on your application.

* Integrations with **Azure Pipeline can now allow development teams to set vulnerability thresholds** that prevent builds from succeeding if applications exceed thresholds and are too vulnerable.


## Agent Updates

### Java summary

The Java team worked to **improve accuracy in Assess** for this release in these areas:

* Detecting XSS attacks on Java Servlet applications

* Detecting SSRF attacks

* When using Java 11.

The team also made **improvements for reporting and troubleshooting,** as well as smaller bug fixes. These include:

* The team clarified usage of the max_stack_depth property and improved reporting of the error that occurs when it is misconfigured.

* Added a heartbeat message to help administrators diagnose Contrast Protect syslog connectivity.

### .NET agent summaries


#### .NET Framework 

Explain here

#### .NET Core

Explain here

### Node.js summary 

The Node team is pleased to announce full support for NodeJS version 12 LTS.

The team also implemented route-based auto-verification (RBAV) functionality for the agent. RBAV will be fully released and functional when our main products also complete server implementation for route-based auto-verification.

We fixed how Assess reports relevant findings from malicious cookies for the Koa framework.

### Ruby summary 

The Ruby team focused on language compatibility to ensure the agent adheres to best practices and works alongside common dependencies. In particular, the team addressed an incompatibility with FactoryBot, allowing the agent to run with the gem installed. The team also fixed an incompatibility with the 2.6 base image on Heroku, so the agent can once again be installed in that environment.

In addition, updates to Contrast Service runner assure startup in all supported installations, as well as improved interoperability for applications running in multiple processes.

The team also implemented route-based auto-verification (RBAV), slated for full release later this year.

### Python summary

Explain here
