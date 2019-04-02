<!--
title: "Contrast 3.6.2 - March 2019"
description: "Contrast 3.6.2 March 2019"
tags: "3.6.2 March Release Notes"
-->


## Fixes

* A typo in the Windows sample for **Automations Options** caused some trouble when onboarding a Java agent. 
* Providing your own configuration file during agent onboarding caused errors. 
* All recommended **Assess Rules** weren't enabled by default in all environments for new organizations. 
* The **Libraries** grid displayed the number of vulnerabilities associated with the applications using it, not the individual library.
* The library name tooltip wasn't properly displayed in the **Libraries** grid when the release date was "0". 

## Improvements

* Enhancements to the Contrast Jenkins plugin make easier to work with your application in the post-build step. If you have access to multiple applications, the dropdown menu turns into a search-as-you-type field to help you find the right one. The application list also refreshes automatically in the background to stay in sync with the Contrast UI.
* Enterprise-on-Premises (EOP) has been upgraded to Tomcat 7.0.92. 

## Agent Updates

### Java summary

The Java team improved the accuracy of Protect command injection, SQL injection and XSS rules. We also fixed a bug where exclusions weren't applied for some Protect rules. We cleaned up and clarified the output of the agent’s diagnostic connection check, made minor improvements to agent startup time, and reduced redundant log messages. 

### .NET summary 

The .NET team improved the accuracy of Assess path traversal as well as the performance of Assess data flow analysis. We fixed a bug where modifying the agent’s configuration file while the agent was running could cause an error in the agent’s background Windows service. We also reduced redundant log messages. 

### Node.js summary 

The Node team focused on developing a new implementation for performing data flow analysis and string tracking. The changes introduced, which leverage native C++ add-ons, improve both agent stability and the accuracy of Assess findings. The team also focused on improving the accuracy of reporting propagation through specific String and Array methods, such as slice and join. We made additional improvements to strengthen the agent's ability to detect hard-coded passwords. We added Assess support for DynamoDB. Additionally, the agent now recognizes the `CONTRAST_CONFIG_PATH` environment variable, which you can use to specify the location of an agent’s configuration file.

### Ruby summary 

The Ruby team focused on updating support to align with the LTS versions of the Ruby language. As a result, the supported range of Ruby for agent 2.3.0 and greater has changed to 2.3.0-2.6.X. We also updated dynamic patching to utilize **C** methods instead of standard Ruby aliasing, which preserves method scope. Both of these changes improve the overall performance and stability of the Ruby agent.

### Python summary

The Python agent team worked to improve our Pyramid and WSGI middlewares by refactoring response information. This includes Command Injection hardening for new lines and inline comments along with support for the PyYAML 5.1 release that broke a lot of open-source projects. We added better image response handling to remove a possible slow down or crash in the agent.

