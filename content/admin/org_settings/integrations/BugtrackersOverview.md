<!--
title: "Bugtrackers"
description: "Overview of Using Bugtrackers with Contrast"
tags: "Admin organization settings integrations bugtracker overview"
-->

Streamline the remediation process for vulnerabilities by sending details directly from Contrast to a configured bugtracker. Contrast supports integrations with the following services. 

* Mozilla Bugzilla
* Atlassian JIRA
* Visual Studio Team Services/Team Foundation Services (VSTS/TFS)
* Serena Business Manager

For more information about the configuration process for each bugtracker, use the quicklinks to go to the appropriate [articles](admin-orgintegrations.html).  

## Export findings

### Vulnerabilities 

You can send vulnerabilities to a bugtracker from the **Send Vulnerability** (paper plane) icon located on the **Vulnerabilities** page, or from the **Vulnerabilities** tab of an **Application Overview** page. In the dialog that follows, choose which information should be included when exporting the findings.

<a href="assets/images/KB3-f04_1.png" rel="lightbox" title="Bugtracker Export Options"><img class="thumbnail" src="assets/images/KB3-f04_1.png"/></a>

>**Note:** Bugtrackers must be configured before vulnerabilities can be sent.

When a vulnerability is sent to a bugtracker, the status of the vulnerability changes to **Reported** in the **Vulnerabilities** page or the **Vulnerabilities** tab of the **Application Overview** page. An arrow icon also appears beside the status in the grid row for the vulnerability. Hovering over this icon produces a tooltip that includes the bugtracker name(s) and corresponding ticket number(s). 

<a href="assets/images/Integrations-sent-to-bugtracker.png" rel="lightbox" title="Vulnerabilities sent to bugtracker"><img class="thumbnail" src="assets/images/Integrations-sent-to-bugtracker.png"/></a>

To quickly see which vulnerabilities are being tracked, select **Advanced** and **Status** in the sidebar. Hovering over the **Being Tracked** and **Untracked** options also produces a tooltip.

<a href="assets/images/Integrations-bugtracker-advanced-filter.png" rel="lightbox" title="Advanced filter"><img class="thumbnail" src="assets/images/Integrations-bugtracker-advanced-filter.png"/></a>

### Library details 

You can send the details of vulnerable libraries to a bugtracker from the Libraries page, and application's Libraries tab or a library's overview page. For more information, go to the [Manage Libraries](user-libraries.html#manage-lib) article.

## Integrate with unsupported systems

If you need to integrate your data from Contrast with an unsupported system, you can use one of the following options. 

* The Contrast REST API: Read the complete [REST API documentation](tools-api.html#api-about). 
* CSV spreadsheet: Export findings to a Comma-Separated Values (CSV)-formatted spreadsheet, and import them into the bugtracker of your choice.
* XML spreadsheet: Export findings for individual or groups of vulnerabilities to a XML-formatted spreadsheet, and import them into a bugtracker of your choice.

