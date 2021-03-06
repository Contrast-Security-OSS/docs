<!--
title: "Use Contrast for Visual Studio Code"
description: "Instructions for downloading and installing Contrast for Visual Studio Code"
tags: "tools ide plugins visual studio code download install"
-->

## About the Visual Studio Code Plugin

Contrast provides visibility of vulnerabilities found in applications and protects applications against attacks. For applications deployed with any Contrast language agent, developers can access vulnerability information directly within their Visual Studio Code environments immediately after Contrast accurately discovers security problems during functional tests. Not only does the plugin empower development teams to own security, but it also allows development teams to resolve critical issues and ship features faster.

The plugin offers developers an overview of every vulnerability found in the application. For each vulnerability, they can learn about the type of issue found and the security risk introduced. Developers can also view the HTTP request that exposed the vulnerability to Contrast. They may obtain a deeper understanding by exploring the details of data flow operations triggered by the request. Most importantly, developers receive clear and actionable guidance to remediate the vulnerability.

Additionally, the plugin offers private views so that developers can focus on the vulnerabilities that matter to them by filtering on vulnerability metadata and session metadata values.

### Supported systems 

Visual Studio Code versions: 

* 1.42.1 and later

## Setup and Configuration

In Visual Studio Code, navigate to the **Extensions** view, search “Contrast Security”, and then click **Install** on the appropriate result. Upon successful install, restart the code editor.

To authenticate to your Contrast account, click the **Settings** gear icon in the **Contrast Security** view.

<a href="assets/images/VSCode_toolbar.png" rel="lightbox" title="Contrast for Visual Studio Code toolbar"><img class="thumbnail" src="assets/images/VSCode_toolbar.png"/></a>

Select the **Workspace** tab and enter your **API Key**, **Organization ID**, **Contrast URL**, and **Authorization Header**. You can get these values from **Your Account** in Contrast, and they will be saved per VS Code workspace.

Enter the **Application ID** of the application for which you want to view vulnerability information.

**Note:** An application must be onboarded to Contrast prior to using this plugin. The Application ID can be found in the URL of the application: */Contrast/static/ng/index.html#/organization-id/applications/**applicationID***.

<a href="assets/images/VSCode_settings.png" rel="lightbox" title="Configure Contrast for Visual Studio Code settings"><img class="thumbnail" src="assets/images/VSCode_settings.png"/></a>

Click the **Test Contrast Connection** icon to validate your credentials. A notification will inform you of a successful connection or invalid credentials. Upon successful connection, click the **Refresh** icon to get vulnerability information.

## Learn About Vulnerabilities

Under the Contrast Security view, vulnerabilities are grouped by Severity and ordered by Status. Uncollapse a vulnerability in any group to display the different ways you can learn about the vulnerability. 

<a href="assets/images/VSCode_Contrastview.png" rel="lightbox" title="Contrast view in Visual Studio Code"><img class="thumbnail" src="assets/images/VSCode_Contrastview.png"/></a>

Though the **Last Detected** timestamp and **Status** display automatically, you can click on the icon next to **Overview**, **Details**, **HTTP Information**, and **How to Fix** to display more information. The information prints to the code editor in the **Output** tab.

<a href="assets/images/VSCode_output.png" rel="lightbox" title="Visual Studio Code output tab"><img class="thumbnail" src="assets/images/VSCode_output.png"/></a>

## Filter Vulnerabilities

The plugin offers the capability to filter vulnerabilities on multiple parameters of vulnerability and session metadata simultaneously, allowing developers to focus only on those security issues that are relevant to them.

Vulnerability Metadata:
* Status (such as Reported, Not a Problem, Remediated)
* Environment (Development, QA, and Production)
* Tags (custom labels applied to vulnerabilities)
* Detection Date (specifically, First and Last detected)

Session Metadata:
* Committer
* Commit Hash
* Branch Name
* Git Tag
* Repository
* Test Run
* Version
* Build Number

For example, a developer can choose to have only those vulnerabilities displayed that were found on their specific feature branch (**Branch Name**) and committed directly by them (**Committer**), filtering out vulnerabilities introduced by a different developer on a separate feature branch. 

Another developer can choose to filter vulnerabilities so that they only see results from a specific build (**Build Number**) that was blocked by their security team. They can immediately pinpoint the subset of vulnerabilities that need to be resolved before deploying the merged feature branch.

To filter vulnerabilities, click on the **Filter** icon in the toolbar. Choose any field on which you want to filter. 

For Vulnerability Metadata, you see predefined values from which you are able to choose. Here, you can filter vulnerabilities so that results only show those found in the Development environment.

To save and apply filters, click the back arrow and hit Enter. The plugin will reload the Contrast view to display only vulnerabilities that match your filtering criteria.

To clear the selected filters, choose **Clear Filters** and hit Enter.
