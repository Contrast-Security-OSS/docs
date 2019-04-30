<!--
title: "Bugtrackers"
description: "Overview of Using Bugtrackers with Contrast"
tags: "Admin organization settings integrations bugtracker overview"
-->

Streamline the remediation process for vulnerabilities by sending details directly from Contrast to a configured bugtracker. Contrast supports integrations with services including Atlassian JIRA, Microsoft Visual Studio Team Services/Team Foundation Services (VSTS/TFS), Mozilla Bugzilla and Serena Business Manager. 

>**Note:** You must configure a bugtracker integration in your organization before sending vulnerabilities to it.  

## Export findings

### Vulnerabilities 

You can send vulnerabilities to a bugtracker from the **Send Vulnerability** (paper plane) icon located on the **Vulnerabilities** page, or from the **Vulnerabilities** tab of an **Application Overview** page. In the dialog that follows, choose which information should be included when exporting the findings.

<a href="assets/images/Send-to-bugtracker.png" rel="lightbox" title="Send a vulnerability to your integrated bugtracker"><img class="thumbnail" src="assets/images/Send-to-bugtracker.png"/></a>

For more information, go to the [Manage Vulnerabilities](user-vulns.html#manage-vuln) article.

### Library details 

You can send the details of vulnerable libraries to a bugtracker from the Libraries page, and application's Libraries tab or a library's overview page. For more information, go to the [Manage Libraries](user-libraries.html#manage-lib) article.

## Integrate with unsupported systems

If you need to integrate your data from Contrast with an unsupported system, you can use one of the following options. 

* The Contrast REST API: Read the complete [REST API documentation](tools-about.html#api-about). 
* CSV spreadsheet: Export findings to a Comma-Separated Values (CSV)-formatted spreadsheet, and import them into the bugtracker of your choice.
* XML spreadsheet: Export findings for individual or groups of vulnerabilities to an Extensible Markup Language(XML)-formatted spreadsheet, and import them into a bugtracker of your choice.

