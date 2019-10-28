<!--
title: "Contrast 3.6.9 - October 2019"
description: "Contrast 3.6.9 October 2019"
tags: "3.6.9 October Release Notes"
-->

## Bug Fixes

* Jira integrations weren't applying custom fields created in Contrast.
* Vulnerabilities couldn't be sent to integrated bugtrackers for child applications.
* The Overview page for attack events highlighted the wrong line of code.

## New and Improved Features

* Jira integrations allow you to set standards for application importance levels as well as specific application names. 

* Settings for time-based auto-remediation policy and administrator approval to close vulnerabilities have moved from your Organization Settings to a new Vulnerability Management page within Policy Management.

* A Contrast extension of Azure Pipelines allows development teams use a task to set threshold definitions that prevent builds from succeeding if applications are determined to be too vulnerable.

* A Contrast plugin for the 2019 version of the Visual Studio IDE lets you see a list of vulnerabilities and details on each one, such as remediation guidance, directly in the IDE as Contrast discovers security flaws in your applications.


## Agent Updates

### Java summary


### .NET agent summaries


#### .NET Framework 

The team added the ability to filter which applications in IIS will be analyzed via the `application_blacklist` and `application_whitelist` configuration settings. We improved performance of Protect analysis under CLR2 as well as accuracy of Assess propagation starting with the *HttpRequest.Uri* source. We also fixed a bug where the agent didn't properly handle NGEN assemblies.

#### .NET Core

The team fixed several bugs that could prevent certain instrumented applications from initializing or starting correctly.

### Node.js summary 


### Ruby summary 

For much of the October release, the Ruby team focused on performance improvements in the agent, particularly around startup, patching, and interpolation detection. The agent now has a more lightweight impact while patching. We also made substantial changes to how we track dataflow through interpolation events by relying on *C* patching and AST rewriting as opposed to code rewriting. These changes are more performant and more stable, and contribute the reliability of the agent as a whole.

### Python summary

