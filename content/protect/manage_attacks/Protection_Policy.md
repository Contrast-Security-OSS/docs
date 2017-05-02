<!--
title: "Protection Policy"
description: "Overview of protection policy"
tags: "protection manage attacks protect policy"
-->

Applying policies to your applications and servers is split into three categories in Contrast - General, Assessment, and Protection. Organization and Policy (Rules) administrators can manage these policies by going to the **Policy Management** page from the user menu. Protection Policy is highlighted in the left bar and consists of:
 
## Protect Rules
When Contrast Protect is turned on for a server, the applications deployed on that server are monitored for attacks based on the configuration of protect rules. Each rule can be applied uniquely to an application as well as be configured per server environment to determine how to manage the attack. For more information, read our article on [Protect Rules](admin_policymgmt.html#protect).

## CVE Shields
CVE shields are standardized security vulnerabilities and exposures that have been identified as known cyber security issues. We offer several CVEs to help protect you. Read about Contrast's built-in [CVE Shields](admin_policymgmt.html#cve).

## Virtual Patches 
Virtual patches are meant to prevent an exploit from occurring because of a newly discovered vulnerability. You can create virtual patches to specify what events trigger a patch as well as how the patch is applied.

## Log Enhancers 
Log Enhancers are additional instrumentation instructions that allow the Contrast agent to log additional parameters and data within the application without requiring any source code changes. Utilizing our deep security instrumentation techniques, a user can specify the API and the parameter to log. Read about creating [Log Enhancers](admin_policymgmt.html#log). 
 
## IP Management 
Users can manage their blacklist and whitelist (trusted hosts) within Contrast. This allows you to either distrust an IP as you triage attacks or eliminate unwanted noise for internal scans.