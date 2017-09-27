<!--
title: "Enabling Protect"
description: "Overview of how to enable Protect"
tags: "protection how it works instrumentation enable protect"
-->

To get started with Protect, the first thing you need to do is enable the Protect functionality on the agents that have instrumented the application you want to protect. This is done within the Contrast UI on the **Servers** page.  

Find the server(s) you want to begin protecting and turn the **Protect** toggle ON. Enabling protection requires a Protect license, so you'll be prompted to upgrade if it isn't already licensed. Alternatively, you can manually apply a license to a single server via the row menu or in bulk by selecting which agents to upgrade, then clicking the shield icon in the action bar and selecting **Apply Protection License**. 

<a href="assets/images/Apply_License_Protect.png" rel="lightbox" title="Apply Protection License"><img class="thumbnail" src="assets/images/Apply_License_Protect.png"/></a>

When Protect is enabled, you will need to restart the application in order for the Contrast agent to properly instrument the application with Protect capabilities. Once that is completed, Contrast will begin monitoring and blocking attacks. The server will now have a shield icon appear next to the name, indicating it has a Protection license assigned to it.

>**Note:** Organization administrators can skip this manual step of applying licenses for their users by turning Protection ON by default for new servers by going to the **Organization Settings** page in the **Servers** section. This can be enabled for specific server environments.

## Protecting an Application
Protection is applied for each agent, so in order to fully protect an application, say in a production environment, you will need to make sure that all production agents that host the application are licensed and have Protect enabled. This is most vital in production environments, since you want to make sure that all application instances are protected when they initially come online without any human intervention. As noted above, the easiest way to accomplish this is to set the organizational defaults to automatically license all production agents and enable Protection for Production environments.

Read more about [Server Defaults](admin-orgsettings.html#org-server).

## Contrast Protection Policies
There are five types of policies available in Contrast Protect. They are as follows:

* [Protect Rules](admin-policymgmt.html#protect) which allow you to set applications to monitor for attacks 
* [CVE Shields](admin-policymgmt.html#cve) which provide a standardized identifier for a given vulnerability or exposure
* [Virtual Patches](admin-policymgmt.html#patch) which are custom defenses you define to defend against specific vulnerabilities
* [Log Enhancers](admin-policymgmt.html#log) which provide additional instrumentation instructions 
* [IP Management](admin-policymgmt.html#ip) where you can manage a blacklist and whitelist (trusted hosts)

