<!--
title: "Contrast 3.6.2 - March 2019"
description: "Contrast 3.6.2 March 2019"
tags: "3.6.2 March Release Notes"
-->


## Fixes

* Provide your own configuration file without errors during agent onboarding. CONTRAST-31113
* The library name tooltip is properly displayed when the release date is "0". CONTRAST-31975
* Use a typo-free Windows sample for Automations Options during Java agent onboarding. CONTRAST-30582
* All recommended Assess Rules are enabled by default in all environments for new organizations. CONTRAST-31477
* The Libraries grid displays the number of vulnerabilities associated with the individual library. CONTRAST-30294


## Improvements

Enhancements to the Contrast Jenkins plugin make easier to work with your application in the post-build step. If you have access to multiple applications, the dropdown menu turns into a search-as-you-type field to make it easier to find the right one. The application list also refreshes automatically in the background to stay in sync with the Contrast UI.

## Agent Updates

### Java summary


### .NET summary 


### Node.js summary 

The Node team focused on developing a new implementation for performing data flow analysis and string tracking. The changes introduced, which leverage native C++ add-ons, improve both agent stability and the accuracy of Assess findings. We also focused on improving the accuracy of reporting propagation through specific String and Array methods, such as slice and join. Additional improvements were made to strengthen the agent's ability to detect hard-coded passwords. We added Assess support for DynamoDB. Additionally, the agent now recognizes the `CONTRAST_CONFIG_PATH` environment variable, which you can use to specify the location of an agent’s configuration file.

### Ruby summary 

The Ruby team focused on updating support to align with the LTS versions of the Ruby language. As such, the supported range of Ruby for agent 2.3.0 and greater has changed to 2.3.0-2.6.X. In addition, dynamic patching was updated to utilize *C* methods instead of standard Ruby aliasing, which preserves method scope. Both of these changes improve the overall performance and stability of the Ruby agent.

### Python summary

The Python agent team worked to improve our Pyramid and WSGI middlewares by refactoring response information. This includes CommandInjection hardening for new lines and inline comments along with support for the PyYAML 5.1 release that broke a lot of open-source projects. We added better image response handling to remove a possible slow down or crash in the agent.

