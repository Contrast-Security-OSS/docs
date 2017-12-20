<!--
title: "Bugtrackers"
description: "Overview of Using Bugtrackers with Contrast"
tags: "Admin organization settings integrations bugtracker overview"
-->

Contrast can connect to bugtrackers in order to streamline the remediation process. Individual or groups of discovered vulnerabilities can be sent directly to a configured bugtracker so that development groups may implement a fix.

## Support

Contrast supports integrations with:

* Mozilla Bugzilla
* Atlassian JIRA
* Visual Studio Team Services/Team Foundation Services (VSTS/TFS)
* Serena Business Manager

## Exporting findings

### Vulnerabilities 

You can send vulnerabilities to a bugtracker from the **Send Vulnerability** (paper plane) icon located on the **Vulnerabilities** page, or from the **Vulnerabilities** tab of an **Application Overview** page. In the dialog that follows, choose which information should be included when exporting the findings.

<a href="assets/images/KB3-f04_1.png" rel="lightbox" title="Bugtracker Export Options"><img class="thumbnail" src="assets/images/KB3-f04_1.png"/></a>

>**Note:** Bugtrackers must be configured before vulnerabilities can be sent.

When a vulnerability is sent to a bugtracker, the status of the vulnerability changes to **Reported** in the **Vulnerabilities** page or the **Vulnerabilities** tab of the **Application Overview** page. An arrow icon also appears beside the status in the grid row for the vulnerability. Hovering over this icon produces a tooltip that includes the bugtracker name(s) and corresponding ticket number(s). 

<a href="assets/images/Integrations-sent-to-bugtracker.png" rel="lightbox" title="Vulnerabilities sent to bugtracker"><img class="thumbnail" src="assets/images/Integrations-sent-to-bugtracker.png"/></a>

To quickly see which vulnerabilities are being tracked, select **Advanced** and **Status** in the sidebar. Hovering over the **Being Tracked** and **Untracked** options also produces a tooltip.

<a href="assets/images/Integrations-bugtracker-advanced-filter.png" rel="lightbox" title="Advanced filter"><img class="thumbnail" src="assets/images/Integrations-bugtracker-advanced-filter.png"/></a>

### Library details 

You can send the details of vulnerable libraries to a bugtracker from any libraries grid or a library's overview page. 


## Integrating with unsupported systems

If you need to integrate your data from Contrast with an unsupported system, you can use one of the following options. 

* **Integrate With The Contrast REST API:** You can find complete documentation here: [REST API](tools-api.html#api-about)
* **Export Findings To CSV:** Findings can be exported to **Comma-Separated Values (CSV)** and imported into a bugtracker of your choice.
* **Export Findings To XML:** Individual or groups of findings can be exported to **XML** format and imported into a bugtracker of your choice.

