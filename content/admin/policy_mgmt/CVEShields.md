<!--
title: "CVE Shields"
description: "Overview of CVE Shields"
tags: "Admin cve shields policy management protect"
-->

Common Vulnerabilities and Exposures (CVE) shields provide a standardized identifier for a given vulnerability or exposure. It also provides a baseline for evaluating the coverage of your tools. Contrast offers a number of CVE Shields to help protect you. Organization and Policy (Rules) administrators can adjust how they are applied throughout your portfolio by going to **Policy Management** from the user menu and selecting CVE Shields from the left navigation.

CVE Shields are configured the same way as [Protect Rules](admin-policymgmt.html#protect), but instead of detecting categories of attacks, they defend specific CVEs from attack. This is a great feature for legacy applications with vulnerable libraries that are difficult to update.

CVE Shields are only needed when the vulnerability is not a common attack class like XSS, SQL Injection, or Untrusted Deserialization, for example. Sometimes, even when we have an existing Protect Rule that prevents the attack from working, we'll create a CVE Shield to get more data specific to that particular threat. This helps provide more context into exploitation and helps organizations map ongoing attacks to trends in the overall security ecosystem.
