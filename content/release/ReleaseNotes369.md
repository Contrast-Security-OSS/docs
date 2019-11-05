<!--
title: "Contrast 3.6.9 - October 2019"
description: "Contrast 3.6.9 October 2019"
tags: "3.6.9 October Release Notes"
-->

## Bug Fixes

* Jira integrations weren't applying custom fields created in Contrast.
* Vulnerabilities couldn't be sent to integrated bugtrackers for child applications.
* The **Overview** page for attack events highlighted the wrong line of code.

## New and Improved Features

* Jira integrations allow you to set standards for application importance levels as well as specific application names. 

* Settings for time-based auto-remediation policy and administrator approval to close vulnerabilities have moved from your **Organization Settings** to a new **Vulnerability Management** page within **Policy Management**.

* A Contrast plugin for the 2019 version of the Visual Studio IDE lets you see a list of vulnerabilities and details on each one, such as remediation guidance, directly in the IDE as Contrast discovers security flaws in your applications.

* Contrast will import library cache data in the background rather than block start up to import. This results in a faster startup time; however, Contrast will not display library data until the import task is done. 


## Agent Updates

### Java summary

For Assess, the Java team added coverage for java.util.Scanner APIs and java.net.URL#openStream. We fixed a library reporting issue in Assess that would cause previously reported libraries to disappear. The agent now recognizes the OWASP Encoder project's JSP tags as valid security controls. The agent no longer reports anti-clickjacking and anti-caching vulnerabilities for requests for font files, or XSS vulnerabilities in request for PDF files. 

For Protect, the agent can better detect and block commands started from OGNL expressions. Protect rules can now detect attacks when the input is base64 encoded. We also improved the accuracy of the Protect EL Injection rule to not block attacks where `java.lang.Class` is used only to obtain the simple name via #getSimpleName.
 
Lastly, we improved error reporting in agent initialization when unable to access the temporary directory, and added the port to reporting of HTTP requests in J2EE applications. 

### .NET agent summaries


#### .NET Framework 

The team added the ability to filter which applications in IIS will be analyzed via the `application_blacklist` and `application_whitelist` configuration settings. We improved performance of Protect analysis under CLR2 as well as accuracy of Assess propagation starting with the *HttpRequest.Uri* source. We also fixed a bug where the agent didn't properly handle NGEN assemblies.

#### .NET Core

The team fixed several bugs that could prevent certain instrumented applications from initializing or starting correctly.

### Node.js summary 

The Node team completed the following bug fixes: 

* An AsyncStorage error with Hapi 16
* An issue regarding hardcoded rules no longer reporting
* A bad substitution error when running packaging script
* An issue where the agent wasn’t compatible with Node.js asn1 library

We also added a note in the agent's troubleshooting README for installing the agent when running on Alpine, and did some internal code cleanup and testing improvements. 

### Ruby summary 

For much of the October release, the Ruby team focused on performance improvements in the agent, particularly around startup, patching, and interpolation detection. The agent now has a more lightweight impact while patching. We also made substantial changes to how we track dataflow through interpolation events by relying on *C* patching and AST rewriting as opposed to code rewriting. These changes contributed to the performance and stability of the agent as a whole.

### Python summary

The Python team implemented more robust handling of cases in which requests have been read by other middlewares higher in the stack, and made improvements to route coverage and agent logging. We fixed an issue related to the handling of binary data in responses from applications. We also made updates to the agent README, and did some internal code cleanup and testing. 

